sap.ui.define(
    ["sap/m/ListItemBase", "sap/m/Label", "nmshd/app/core/controls/attributes/ValueRenderer"],
    (ListItemBase, Label, ValueRenderer) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.attributes.AttributeRenderer", {
            metadata: {
                aggregations: {
                    _label: { multiple: false, visibility: "hidden" },
                    _value: { multiple: false, visibility: "hidden" }
                },
                properties: {},
                publicMethods: [],
                events: {},
                defaultAggregation: "_value"
            },

            init(e) {
                this.setAggregation("_label", new Label({ text: "{name}" }))
                this.setAggregation("_value", new ValueRenderer({ value: "{value}" }))
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.addClass("attributeRenderer")
                oRM.writeControlData(oControl)
                oRM.writeClasses()
                oRM.write(">")
                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
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
