sap.ui.define(
    ["sap/m/ListItemBase", "sap/m/Label", "nmshd/app/core/controls/attributes/ValueRenderer"],
    (ListItemBase, Label, ValueRenderer) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.attributes.AttributeEditRenderer", {
            metadata: {
                aggregations: {
                    _label: { multiple: false, visibility: "hidden" },
                    _editControl: { multiple: false, visibility: "hidden" }
                },
                properties: {},
                publicMethods: [],
                events: {},
                defaultAggregation: "_editControl"
            },

            init(e) {
                this.setAggregation("_label", new Label({ text: "{name}" }))
                this.setAggregation("_editControl", new ValueRenderer({ value: "{value}" }))
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.addClass("attributeEditRenderer")
                oRM.writeControlData(oControl)
                oRM.writeClasses()
                oRM.write(">")
                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
                    oRM.write('<div class="attributeEditRendererLabel">')
                    oRM.renderControl(labelControl)
                    oRM.write("</div>")
                }
                const valueControl = oControl.getAggregation("_editControl")
                if (valueControl) {
                    oRM.write('<div class="attributeEditRendererValue">')
                    oRM.renderControl(valueControl)
                    oRM.write("</div>")
                }
                oRM.write("</div>")
            }
        })
    }
)
