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

        return Control.extend("nmshd.app.core.controls.requests.items.ProposeAttributeResponseItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _proposedLabel: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _editControl: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
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
                this.setAggregation(
                    "_label",
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated } })
                        .addStyleClass("proposeAttributeResponseItemRendererLabel")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_proposedLabel",
                    new Label({
                        text: { path: "t>renderer.ProposeAttributeResponseItemRenderer.proposedValueLabel" },
                        visible: "{= ${item>/proposedValueOverruled} === true }"
                    }).addStyleClass("proposeAttributeResponseItemRendererProposeLabel")
                )

                this.setAggregation(
                    "_button",
                    new Button({
                        text: "Ändern",
                        visible: false,
                        enabled: "{item>/isDecidable}"
                    })

                        .addStyleClass("proposeAttributeResponseItemRendererButton")
                        .bindElement("query")
                )
                this.setAggregation(
                    "_editControl",
                    new ValueRenderer({
                        visible: false // "{= ${results/length} === 0}"
                    })
                        .attachChange((oEvent) => that.fireChange(oEvent))
                        .addStyleClass("proposeAttributeResponseItemRendererEditControl")
                        .bindElement("query")
                )
                this.setAggregation(
                    "_proposedAttribute",
                    new ValueRenderer({
                        editable: false,
                        visible: "{= ${item>/proposedValueOverruled} === true }"
                    })
                        .addStyleClass("proposeAttributeResponseItemRendererProposedAttribute")
                        .bindElement("attribute")
                )
                this.setAggregation(
                    "_text",
                    new ValueRenderer({
                        editable: false
                    })
                        .addStyleClass("proposeAttributeResponseItemRendererProposedAttribute")
                        .bindElement("response/attribute")
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

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("readAttributeResponseItemRenderer")
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
                    oRM.renderControl(buttonControl)
                }
                const proposedValueLabel = oControl.getAggregation("_proposedLabel")
                if (proposedValueLabel) {
                    oRM.renderControl(proposedValueLabel)
                }
                const proposedAttribute = oControl.getAggregation("_proposedAttribute")
                if (proposedAttribute) {
                    oRM.renderControl(proposedAttribute)
                }
                oRM.write("</div>")
            }
        })
    }
)
