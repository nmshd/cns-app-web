sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Text",
        "sap/m/Label",
        "sap/m/Button",
        "sap/m/Select",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "nmshd/app/core/Formatter",
        "nmshd/app/core/controls/attributes/AttributeRenderer"
    ],
    (Control, Text, Label, Button, Select, ValueRenderer, Formatter, AttributeRenderer) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.requests.items.ReadAttributeResponseItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _text: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
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
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated, enabled: "{isDecidable}" } })
                        .addStyleClass("readAttributeResponseItemRendererLabel")
                        .bindElement("query")
                )
                this.setAggregation(
                    "_text",
                    new AttributeRenderer({
                        showLabel: false
                    })
                        .addStyleClass("readAttributeResponseItemRendererFoundAttribute")
                        .bindElement("response/attribute")
                        .attachInfoPressed((e) =>
                            this.fireInfoPressed({
                                attributeId: e.getParameter("attributeId")
                            })
                        )
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

                oRM.write("</div>")
            }
        })
    }
)
