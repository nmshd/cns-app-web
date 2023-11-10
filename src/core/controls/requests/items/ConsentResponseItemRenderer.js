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

        return Control.extend("nmshd.app.core.controls.requests.items.ConsentResponseItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _valueRenderer: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
                    _link: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
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
                    new Text({ text: { path: "consent", formatter: Formatter.toTranslated } }).addStyleClass(
                        "consentResponseItemRendererLabel"
                    )
                )
                this.setAggregation(
                    "_valueRenderer",
                    new AttributeRenderer({
                        showLabel: false
                    }).addStyleClass("consentResponseItemRendererFoundAttribute")
                )
                this.setAggregation(
                    "_link",
                    new Button({
                        icon: "sap-icon://action",
                        iconFirst: false,
                        type: "Transparent",
                        text: { path: "t>link.external" },
                        visible: "{= !!${link}}"
                    })
                        .addStyleClass("consentResponseItemRendererLink")
                        .attachPress((oEvent) => {
                            const button = oEvent.getSource()
                            const object = button.getBindingContext().getObject()
                            window.open(object.link, "_blank")
                        })
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
                oRM.addClass("consentResponseItemRenderer")
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

                const linkControl = oControl.getAggregation("_link")
                if (linkControl) {
                    oRM.renderControl(linkControl)
                }

                oRM.write("</div>")
            }
        })
    }
)
