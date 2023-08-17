sap.ui.define(["sap/ui/core/Control", "sap/m/Text"], (Control, Text) => {
    "use strict"

    return Control.extend("nmshd.app.core.controls.requests.items.FreeTextRequestItemRenderer", {
        metadata: {
            aggregations: {
                _valueRenderer: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
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
            this.setAggregation(
                "_valueRenderer",
                new Text({
                    text: "{freeText}"
                }).addStyleClass("freeTextRequestItemRendererFoundAttribute")
            )
        },

        renderer(oRM, oControl) {
            oRM.write("<div")
            oRM.writeControlData(oControl)
            oRM.addClass("freeTextRequestItemRenderer")
            oRM.writeClasses()
            oRM.write(">")

            const freeTextAttribute = oControl.getAggregation("_valueRenderer")
            if (freeTextAttribute) {
                oRM.renderControl(freeTextAttribute)
            }

            oRM.write("</div>")
        }
    })
})
