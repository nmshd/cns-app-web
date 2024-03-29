sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Label",
        "sap/m/Button",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "nmshd/app/core/Formatter",
        "nmshd/app/core/EventBus"
    ],
    (Control, Label, Button, ValueRenderer, Formatter, EventBus) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.requests.items.ProposeAttributeRequestItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _text: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
                    _proposedAttribute: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
                    _button: { type: "sap.m.Button", multiple: false, visibility: "hidden" }
                },
                properties: {
                    requestItem: { type: "object", defaultValue: {} }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true },
                    infoPressed: {}
                },
                defaultAggregation: "_control"
            },

            init(e) {
                const that = this

                // default path for
                this.selectedAttributePath = "results/0"
                this.setAggregation(
                    "_label",
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated } })
                        .addStyleClass("proposeAttributeRequestItemRendererLabel")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_button",
                    new Button({
                        icon: "sap-icon://edit",
                        type: "Transparent",
                        enabled: "{item>/isDecidable}",
                        press: that.onChangeSelection.bind(this)
                    }).bindElement("query")
                )
                this.setAggregation(
                    "_proposedAttribute",
                    new ValueRenderer()
                        .addStyleClass("proposeAttributeRequestItemRendererProposedAttribute")
                        .bindElement("attribute")
                )
                this.setAggregation(
                    "_text",
                    new ValueRenderer({
                        visible: false
                    }).bindElement("query")
                )
            },

            /**
             * Opens a Dialog with the all the available attributes for this renderer
             * and the option to add a new attribute if none of the existing attributes matches.
             */
            async onChangeSelection() {
                // proposed and existing attributes don't live in the same structure
                const proposedAttribute = this.getBindingContext().getObject("attribute")
                const results = this.getBindingContext().getObject("query/results")
                const query = jQuery.extend(true, {}, this.getBindingContext().getObject("query"))
                query.results = results

                // check if reference already exists
                if (!query.results.includes(proposedAttribute)) {
                    query.results.push(proposedAttribute)
                }
                App.Bus.publish("App", EventBus.EventTypes.AttributeChangePressedEvent, {
                    data: {
                        selectedItemPath: this._getSelectedListItemPath(),
                        query: query
                    },
                    submitCallback: this._onAttributeChange.bind(this)
                })
            },

            getSelectedAttribute() {
                const textControl = this.getAggregation("_text")
                if (!textControl) return undefined
                if (!textControl.getVisible()) return undefined
                return textControl.getBindingContext().getObject()
            },

            getEditedValue() {
                const editControl = this.getAggregation("_editControl")
                if (!editControl) return undefined
                if (!editControl.getVisible()) return undefined
                return editControl.getEditedValue()
            },

            getProposedValue() {
                const proposedAttribute = this.getAggregation("_proposedAttribute")
                if (!proposedAttribute) return undefined
                if (!proposedAttribute.getVisible()) return undefined
                const attribute = proposedAttribute.getBindingContext().getObject()
                if (attribute) {
                    return attribute.content
                }
                return undefined
            },

            getContext() {
                const context = {}
                const editedValue = this.getEditedValue()
                if (editedValue) context.editedValue
                const selectedAttribute = this.getSelectedAttribute()
                if (selectedAttribute) context.selectedAttribute
                return context
            },

            getResponseParams() {
                const responseParams = {}
                const editedValue = this.getEditedValue()
                if (editedValue) {
                    responseParams.value = editedValue
                    return responseParams
                }

                const selectedAttribute = this.getSelectedAttribute()
                if (selectedAttribute) {
                    if (selectedAttribute.id) {
                        responseParams.attributeId = selectedAttribute.id
                    } else {
                        responseParams.attribute = selectedAttribute.content
                    }
                } else {
                    responseParams.attribute = this.getProposedValue()
                }
                return responseParams
            },

            // *****************************
            // ***** private functions *****
            // *****************************

            _onAttributeChange(changedAttributePath) {
                this.selectedAttributePath = `query/${changedAttributePath}/value/value`
                this.getAggregation("_proposedAttribute").setVisible(false)
                this.getAggregation("_text").setVisible(true)
                const valueRenderer = this.getAggregation("_text")
                valueRenderer.bindObject(`query/${changedAttributePath}`)

                this.getAggregation("_text").setAttributePath(`${changedAttributePath}/value/value`)
                this.fireChange({ isChecked: true })
            },

            _getSelectedListItemPath() {
                let selectedAttributeValue = this.getSelectedAttribute()

                if (selectedAttributeValue) {
                    selectedAttributeValue = selectedAttributeValue.value
                } else {
                    const selectedAttribute = this.getAggregation("_proposedAttribute")
                    selectedAttributeValue = selectedAttribute.getEditedValue()
                }

                const results = this.getBindingContext().getObject("query/results")

                const correctIndex = results.findIndex((result) => {
                    const currentItem = JSON.stringify(result.value)
                    const searchItem = JSON.stringify(selectedAttributeValue)
                    return currentItem === searchItem
                })
                return `results/${correctIndex !== -1 ? correctIndex : 0}/value/value`
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("proposeAttributeRequestItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                oRM.write("<div class='maxWidth'>")

                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
                    oRM.renderControl(labelControl)
                }
                const foundAttribute = oControl.getAggregation("_text")
                if (foundAttribute) {
                    oRM.renderControl(foundAttribute)
                }

                const proposedAttribute = oControl.getAggregation("_proposedAttribute")
                if (proposedAttribute) {
                    oRM.renderControl(proposedAttribute)
                }
                oRM.write("</div>")

                const buttonControl = oControl.getAggregation("_button")
                if (buttonControl) {
                    oRM.renderControl(buttonControl)
                }

                oRM.write("</div>")
            }
        })
    }
)
