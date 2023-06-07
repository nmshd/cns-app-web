sap.ui.define(["sap/m/ListItemBase"], (ListItemBase) => {
    "use strict"

    return ListItemBase.extend("nmshd.app.core.controls.BoxItemRenderer", {
        metadata: {
            aggregations: {
                content: { singularName: "content" },
                avatar: { multiple: false }
            },
            properties: {
                status: { type: "string", defaultValue: "Active" },
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
            oRM.addClass("orgItemRenderer")
            if (oControl.getStatus() === "Active") {
                oRM.addClass("statusActive")
            } else if (oControl.getStatus() === "Pending") {
                oRM.addClass("statusPending")
            } else if (oControl.getStatus() === "Revoked") {
                oRM.addClass("statusRevoked")
            } else if (oControl.getStatus() === "Rejected") {
                oRM.addClass("statusRejected")
            }
            oRM.writeClasses()
            oRM.write(">")
            const title = oControl.getTitle()
            if (title) {
                oRM.write('<div class="orgItemRendererHeader">')
                oRM.writeEscaped(title)
                oRM.write("</div>")
            }
            oRM.write('<div class="orgItemRendererContent">')
            const avatar = oControl.getAvatar()
            if (avatar) {
                oRM.write('<div class="personItemRendererAvatar">')
                oRM.renderControl(avatar)
                oRM.write("</div>")
            }
            oRM.write('<div class="orgItemRendererChildContainer">')
            const content = oControl.getAggregation("content")
            if (content) {
                for (const control of content) {
                    oRM.write('<div class="orgItemRendererChild">')
                    oRM.renderControl(control)
                    oRM.write("</div>")
                }
            }
            oRM.write("</div>")
            oRM.write("</div>")
            oRM.write("</div>")
        }
    })
})
