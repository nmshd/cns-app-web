sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Text",

        "sap/m/Label",
        "sap/m/Button",
        "sap/m/MessageToast",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "nmshd/app/core/Formatter",
        "nmshd/app/core/EventBus"
    ],
    (Control, Text, Label, Button, MessageToast, ValueRenderer, Formatter, EventBus) => {
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
                    })
                        // .addStyleClass("proposeAttributeRequestItemRendererProposedAttribute")
                        .bindElement("query")
                )
            },

            /**
             * Opens a Dialog with the all the available attributes for this renderer
             * and the option to add a new attribute if none of the existing attributes matches.
             */
            async onChangeSelection() {
                // proposed and existing attributes don't live in the same structure
                const proposedAttribute = this.getBindingContext().getObject("attribute")
                // TODO: fix dirty cloning
                const query = JSON.parse(JSON.stringify(this.getBindingContext().getObject("query")))
                query.results.unshift(proposedAttribute)
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
                return textControl.getBindingContext().getObject(this.selectedAttributePath)
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
                    responseParams.attributeId = selectedAttribute.id
                } else {
                    responseParams.attribute = this.getProposedValue()
                }
                return responseParams
            },

            // *****************************
            // ***** private functions *****
            // *****************************

            _onAttributeChange(changedAttributePath) {
                // results/0 is the already proposed item => we do nothing
                if (changedAttributePath.includes("results/0")) {
                    return
                }

                this.getAggregation("_proposedAttribute").setVisible(false)
                this.getAggregation("_text").setVisible(true)
                const correctPath = changedAttributePath.slice(0, -1) + (changedAttributePath.at(-1) - 1)
                this.getAggregation("_text").getAggregation("_control").bindText(`${correctPath}/value/value`)
                this.getAggregation("_text").setAttributePath(correctPath)
            },

            _getSelectedListItemPath() {
                // the proposed value will always be the first so we tricks
                return "results/0/value/value"
                const valueRenderer = this.getAggregation("_proposedAttribute").getAggregation("_control")
                return valueRenderer.getBinding("text").getPath()
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("proposeAttributeRequestItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                oRM.write("<div>")

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
