sap.ui.define(["sap/ui/core/Control"], (Control) => {
    "use strict"

    return Control.extend("nmshd.app.core.controls.Container", {
        metadata: {
            aggregations: {
                content: { singularName: "content" }
            },
            properties: {},
            publicMethods: [],
            events: {},
            defaultAggregation: "content"
        },

        init(e) {},

        renderer(oRM, oControl) {
            oRM.write("<div")
            oRM.writeControlData(oControl)
            oRM.writeClasses()
            oRM.write(">")
            for (const control of oControl.getAggregation("content")) {
                oRM.renderControl(control)
            }
            oRM.write("</div>")
        },

        onAfterRendering(oEvent) {
            if (sap.ui.core.Control.prototype.onAfterRendering) {
                sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments)
            }
        }
    })
})
