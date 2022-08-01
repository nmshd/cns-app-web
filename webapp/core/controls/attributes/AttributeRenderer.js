sap.ui.define(
    [
        "sap/m/ListItemBase",
        "sap/m/Label",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "sap/m/Button",
        "nmshd/app/core/Formatter"
    ],
    (ListItemBase, Label, ValueRenderer, Button, Formatter) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.attributes.AttributeRenderer", {
            metadata: {
                aggregations: {
                    _label: { multiple: false, visibility: "hidden" },
                    _value: { multiple: false, visibility: "hidden" },
                    _button: { multiple: false, visibility: "hidden" }
                },
                properties: {
                    showLabel: { type: "boolean", defaultValue: true }
                },
                publicMethods: [],
                events: {},
                defaultAggregation: "_value"
            },

            init(e) {
                this.setAggregation(
                    "_label",
                    new Label({
                        text: { path: "name", formatter: Formatter.toTranslated },
                        visible: this.getShowLabel()
                    })
                )
                this.setAggregation(
                    "_value",
                    new ValueRenderer({
                        editable: false
                    })
                )
                this.setAggregation(
                    "_button",
                    new Button({
                        icon: "sap-icon://hint",
                        type: "Transparent",
                        visible: "{= !!${id}}",
                        press: () => {
                            const object = this.getBindingContext().getObject()
                            App.navTo("account.attributes", "account.attributes.detail", {
                                accountId: App.accountId(),
                                attributeId: object.id
                            })
                        }
                    })
                )
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.addClass("attributeRenderer")
                oRM.writeControlData(oControl)
                oRM.writeClasses()
                oRM.write(">")
                const labelControl = oControl.getAggregation("_label")
                if (labelControl && oControl.getShowLabel()) {
                    oRM.write('<div class="attributeRendererLabel">')
                    oRM.renderControl(labelControl)
                    oRM.write("</div>")
                }
                const valueControl = oControl.getAggregation("_value")
                if (valueControl) {
                    oRM.write('<div class="attributeRendererValue">')
                    oRM.renderControl(valueControl)
                    oRM.write("</div>")
                }
                const buttonControl = oControl.getAggregation("_button")
                if (buttonControl) {
                    oRM.write('<div class="attributeRendererButton">')
                    oRM.renderControl(buttonControl)
                    oRM.write("</div>")
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
