sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Text",
        "sap/m/Label",
        "sap/m/Button",
        "sap/m/Select",
        "nmshd/app/core/controls/attributes/AttributeRenderer",
        "nmshd/app/core/Formatter"
    ],
    (Control, Text, Label, Button, Select, AttributeRenderer, Formatter) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.requests.items.CreateAttributeResponseItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _valueRenderer: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
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
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated } })
                        .addStyleClass("createAttributeResponseItemRendererLabel")
                        .bindElement("attribute")
                )
                this.setAggregation(
                    "_valueRenderer",
                    new AttributeRenderer({
                        showLabel: false
                    })
                        .addStyleClass("createAttributeResponseItemRendererFoundAttribute")
                        .bindElement("response/attribute")
                )
            },

            getSelectedAttribute() {
                const textControl = this.getAggregation("_valueRenderer")
                if (!textControl) return undefined
                if (!textControl.getVisible()) return undefined
                return textControl.getBindingContext().getObject("results/0")
            },

            getContext() {
                const context = {}
                return context
            },

            getResponseParams() {
                const responseParams = {}
                return responseParams
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("createAttributeResponseItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
                    oRM.renderControl(labelControl)
                }

                const foundAttribute = oControl.getAggregation("_valueRenderer")
                if (foundAttribute) {
                    oRM.renderControl(foundAttribute)
                }

                const buttonControl = oControl.getAggregation("_button")
                if (buttonControl) {
                    oRM.renderControl(buttonControl)
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
