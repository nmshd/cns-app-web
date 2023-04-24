sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Text",
        "sap/m/Label",
        "sap/m/Button",
        "sap/m/Select",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "nmshd/app/core/Formatter"
    ],
    (Control, Text, Label, Button, Select, ValueRenderer, Formatter) => {
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
                    change: { allowPreventDefault: true }
                },
                defaultAggregation: "_control"
            },

            init(e) {
                const that = this
                this.setAggregation(
                    "_label",
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated, enabled: "{isDecidable}" } })
                        .addStyleClass("readAttributeRequestItemRendererLabel")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_button",
                    new Button({
                        text: "Ändern",
                        visible: "{= ${results/length} > 0 && ${item>/isDecidable}}",
                        enabled: "{item>/isDecidable}"
                    })
                        .addStyleClass("readAttributeRequestItemRendererButton")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_editControl",
                    new ValueRenderer({
                        visible: "{= (${results} === undefined || ${results/length} === 0) && ${item>/isDecidable}}",
                        editable: "{item>/isDecidable}"
                    })
                        .attachChange((oEvent) => that.fireChange(oEvent))
                        .addStyleClass("readAttributeRequestItemRendererEditControl")
                        .bindElement("query")
                )
                this.setAggregation(
                    "_text",
                    new ValueRenderer({
                        visible: "{= ${results/length} > 0}"
                    })
                        .addStyleClass("readAttributeRequestItemRendererFoundAttribute")
                        .bindElement("query")
                )
            },

            getSelectedAttribute() {
                const textControl = this.getAggregation("_text")
                if (!textControl) return undefined
                if (!textControl.getVisible()) return undefined
                return textControl.getBindingContext().getObject("results/0")
            },

            getEditedValue() {
                const editControl = this.getAggregation("_editControl")
                if (!editControl) return undefined
                if (!editControl.getVisible()) return undefined
                const editedValue = editControl.getEditedValue()
                if (!editedValue) return undefined
                return this.createAttributeWithValue(editedValue)
            },

            createAttributeWithValue(value) {
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
                        key: query.key,
                        owner,
                        confidentiality,
                        isTechnical: !!query.attributeCreationHints.isTechnical
                    }
                    return attribute
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
                    owner: runtime.currentAccount.address
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

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("readAttributeRequestItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
                    oRM.renderControl(labelControl)
                }

                const foundAttribute = oControl.getAggregation("_text")
                if (foundAttribute) {
                    oRM.renderControl(foundAttribute)
                }

                const editControl = oControl.getAggregation("_editControl")
                if (editControl) {
                    oRM.renderControl(editControl)
                }

                const buttonControl = oControl.getAggregation("_button")
                if (buttonControl) {
                    // oRM.renderControl(buttonControl)
                }

                oRM.write("</div>")
            },

            onAfterRendering(oEvent) {
                if (sap.ui.core.Control.prototype.onAfterRendering) {
                    sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments)
                }
            }
        })
    }
)
