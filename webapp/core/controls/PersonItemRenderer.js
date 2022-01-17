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
                statusIcon: { type: "string" },
                title: { type: "string", defaultValue: "" },
                titleImage: { type: "string", defaultValue: "" },
                avatarColor: { type: "string", defaultValue: "" },
                avatarImage: { type: "string", defaultValue: "" },
                avatarBackgroundColor: { type: "string", defaultValue: "" },
                showNavArrow: { type: "boolean", defaultValue: true }
            },
            publicMethods: [],
            events: {},
            defaultAggregation: "content"
        },

        init(e) {},

        /* Overwrite internal sapMLIBActive style toggling for Active items */
        _activeHandling: function () {},

        renderer(oRM, oControl) {
            const title = oControl.getTitle()
            let initials = ""
            const words = ("" + title).trim().split(" ")
            if (words[0]) {
                initials += ("" + words[0]).substr(0, 1).toUpperCase()
            }
            if (words[1]) {
                initials += ("" + words[1]).substr(0, 1).toUpperCase()
            }

            oRM.write("<div")
            oRM.writeControlData(oControl)
            oRM.addClass("personItemRenderer")
            oRM.writeClasses()
            oRM.write(">")
            const avatar = oControl.getAvatar()
            const image = oControl.getAvatarImage()
            let renderInitials = true
            if (image && image !== "url()") {
                renderInitials = false
            }
            const avatarClass = renderInitials ? "personItemRendererInitials" : "personItemRendererAvatar"
            if (avatar) {
                oRM.addStyle("background-color", jQuery.sap.encodeHTML(oControl.getAvatarBackgroundColor()))
                oRM.addStyle("color", jQuery.sap.encodeHTML(oControl.getAvatarColor()))
                oRM.write('<div class="' + avatarClass + '"')
                oRM.writeStyles()
                oRM.write(">")
                if (!renderInitials) {
                    oRM.write('<div class="personItemRendererAvatarImage" ')
                    oRM.addStyle("background-image", jQuery.sap.encodeHTML(oControl.getAvatarImage()))
                    oRM.writeStyles()
                    oRM.write("></div>")
                } else {
                    oRM.write('<div class="personItemRendererInitialsText">')
                    oRM.write(jQuery.sap.encodeHTML(initials))
                    oRM.write("</div>")
                }

                oRM.write("</div>")
            }
            oRM.write('<div class="personItemRendererContent">')

            if (title) {
                oRM.write('<div class="personItemRendererHeader">')
                oRM.writeEscaped(title)
                oRM.write("</div>")
            }
            const content = oControl.getAggregation("content")
            if (content) {
                for (const control of oControl.getAggregation("content")) {
                    oRM.write('<div class="personItemRendererChild">')
                    oRM.renderControl(control)
                    oRM.write("</div>")
                }
            }
            oRM.write('<div class="personItemRendererChildContainer">')

            oRM.write("</div>")
            oRM.write("</div>")

            if (oControl.getShowNavArrow()) {
                oRM.write(
                    `<div data-sap-ui-icon-content="" class="personItemRendererArrow sapUiIcon sapUiIconMirrorInRTL sapMLIBType sapMLIBImgNav" style="font-family: 'SAP-icons';">`
                )
            }

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
