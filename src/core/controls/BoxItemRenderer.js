sap.ui.define(["sap/m/ListItemBase"], (ListItemBase) => {
    "use strict"

    return ListItemBase.extend("nmshd.app.core.controls.BoxItemRenderer", {
        metadata: {
            aggregations: {
                content: { singularName: "content" }
            },
            properties: {
                title: { type: "string", defaultValue: "" },
                titleImage: { type: "string", defaultValue: "" },
                titleColor: { type: "string", defaultValue: "" },
                headerColor: { type: "string", defaultValue: "" }
            },
            publicMethods: [],
            events: {},
            defaultAggregation: "content"
        },

        /* Overwrite internal sapMLIBActive style toggling for Active items */
        _activeHandling: function () {},

        init(e) {},

        renderer(oRM, oControl) {
            oRM.write("<div")
            oRM.writeControlData(oControl)
            oRM.addClass("boxItemRenderer")
            oRM.writeClasses()
            oRM.write(">")
            if (oControl.getTitle()) {
                oRM.write('<div class="boxItemRendererHeader">')
                oRM.writeEscaped(oControl.getTitle())
                oRM.write("</div>")
            }
            oRM.write('<div class="boxItemRendererChildContainer">')

            for (const control of oControl.getAggregation("content")) {
                oRM.write('<div class="boxItemRendererChild">')
                oRM.renderControl(control)
                oRM.write("</div>")
            }
            oRM.write("</div>")
            oRM.write(
                `<div data-sap-ui-icon-content="" class="boxItemRendererArrow sapUiIcon sapUiIconMirrorInRTL sapMLIBType sapMLIBImgNav" style="font-family: 'SAP-icons';">`
            )
            oRM.write("</div>")
            oRM.write("</div>")
        },

        onAfterRendering(oEvent) {
            if (sap.ui.core.Control.prototype.onAfterRendering) {
                sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments)
            }
        }
    })
})
