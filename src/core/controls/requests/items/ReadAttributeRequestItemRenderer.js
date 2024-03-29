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

        return Control.extend("nmshd.app.core.controls.requests.items.ReadAttributeRequestItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _editControl: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
                    _text: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
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
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated, enabled: "{isDecidable}" } })
                        .addStyleClass("readAttributeRequestItemRendererLabel")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_button",
                    new Button({
                        icon: "sap-icon://edit",
                        visible: "{= ${results}.length > 0 && ${item>/isDecidable}}",
                        enabled: "{item>/isDecidable}",
                        type: "Transparent",
                        press: that.onChangeSelection.bind(this)
                    }).bindElement("query")
                )

                this.setAggregation(
                    "_editControl",
                    new ValueRenderer({
                        visible: "{= (${results} === undefined || ${results}.length === 0) && ${item>/isDecidable}}",
                        editable: "{item>/isDecidable}"
                    })
                        .attachChange((oEvent) => that.fireChange(oEvent))
                        .bindElement("query")
                )
                this.setAggregation(
                    "_text",
                    new ValueRenderer({
                        visible: "{= ${results}.length > 0}"
                    }).bindElement("query")
                )
            },
            /**
             * Opens a Dialog with the all the available attributes for this renderer
             * and the option to add a new attribute if none of the existing attributes matches.
             */
            async onChangeSelection() {
                App.Bus.publish("App", EventBus.EventTypes.AttributeChangePressedEvent, {
                    data: {
                        selectedItemPath: this._getSelectedListItemPath(),
                        query: this.getBindingContext().getObject("query")
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
                const editedValue = editControl.getEditedValue()
                if (!editedValue) return undefined
                const metadata = editControl.getAttributeMetadata()
                return this.createAttributeWithValue(editedValue, metadata)
            },

            createAttributeWithValue(value, metadata) {
                if (!metadata) metadata = {}
                const item = this.getBindingContext().getObject()
                let owner = runtime.currentAccount.address
                const query = item.query

                if (query.type === "ProcessedThirdPartyRelationshipAttributeQueryDVO") {
                    console.warn("A ThirdPartyRelationshipAttribute was requested but is not available.")
                    return undefined
                }
                if (query.type === "ProcessedRelationshipAttributeQueryDVO") {
                    let confidentiality = query.attributeCreationHints.confidentiality
                    if (!confidentiality) {
                        console.warn(
                            "The confidentiality of the requested RelationshipAttribute was not set. Defaulting to private."
                        )
                        confidentiality = "private"
                    }

                    const attribute = {
                        "@type": "RelationshipAttribute",
                        value: {
                            "@type": query.valueType,
                            value: value,
                            title: query.name
                        },
                        validTo: metadata.validTo,
                        key: query.key,
                        owner,
                        confidentiality,
                        isTechnical: !!query.attributeCreationHints.isTechnical
                    }
                    return attribute
                }
                let tags = []
                if (query && query.attributeCreationHints && Array.isArray(query.attributeCreationHints.tags)) {
                    tags = query.attributeCreationHints.tags
                }

                let attributeValue = {
                    "@type": query.valueType,
                    value: value
                }
                if (query.renderHints.technicalType === "Object") {
                    attributeValue = {
                        "@type": query.valueType,
                        ...value
                    }
                }
                const attribute = {
                    "@type": "IdentityAttribute",
                    value: attributeValue,
                    validTo: metadata.validTo,
                    owner: runtime.currentAccount.address,
                    tags: tags
                }
                return attribute
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
                    responseParams.newAttribute = editedValue
                    return responseParams
                }

                const selectedAttribute = this.getSelectedAttribute()
                if (selectedAttribute) {
                    responseParams.existingAttributeId = selectedAttribute.id
                    return responseParams
                }

                return undefined
            },

            // *****************************
            // ***** private functions *****
            // *****************************

            _onAttributeChange(changedAttributePath) {
                this.selectedAttributePath = ""
                this.getAggregation("_text").setAttributePath("")
                this.getAggregation("_text").bindObject(`query/${changedAttributePath}`)
                this.fireChange({ isChecked: true })
            },

            _getSelectedListItemPath() {
                let selectedAttributeValue = this.getSelectedAttribute()

                if (selectedAttributeValue) {
                    selectedAttributeValue = selectedAttributeValue.value
                } else {
                    selectedAttributeValue = this.getEditedValue()
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
                oRM.addClass("readAttributeRequestItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                oRM.write("<div class='maxWidth'>")
                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
                    oRM.renderControl(labelControl)
                }
                const foundAttribute = oControl.getAggregation("_text")
                if (foundAttribute) {
                    oRM.write("<div class='maxWidth'>")
                    oRM.renderControl(foundAttribute)
                    oRM.write("</div>")
                }

                const editControl = oControl.getAggregation("_editControl")
                if (editControl) {
                    oRM.renderControl(editControl)
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
