sap.ui.define(["sap/ui/core/Control"], (Control) => {
    "use strict"

    return Control.extend("nmshd.app.core.controls.ArcHeader", {
        metadata: {
            aggregations: {
                content: { singularName: "content" }
            },
            properties: {
                image: { type: "string" },
                fontColor: { type: "string" },
                fontStyle: { type: "string" },
                backgroundColor: { type: "string" }
            },
            publicMethods: [],
            events: {},
            defaultAggregation: "content"
        },

        init(e) {},

        renderer(oRM, oControl) {
            let fontStyle = oControl.getFontStyle()
            if (!fontStyle) {
                fontStyle = "light"
            } else {
                fontStyle = jQuery.sap.escapeHTML(fontStyle)
            }
            oRM.write("<div")
            oRM.addClass("arcHeader")
            oRM.addClass("arcHeader-" + fontStyle)
            oRM.writeControlData(oControl)
            oRM.writeClasses()
            oRM.write(">")
            let background = oControl.getBackgroundColor()
            if (background && background.length > 1) {
                background = background.substr(1)
            } else {
                background = "29235c"
            }

            let textStyle = JSSNative.ThemeTextStyle.Dark
            if (fontStyle === "light") {
                textStyle = JSSNative.ThemeTextStyle.Light
            }

            if (window.runtime) {
                runtime.nativeEnvironment.eventBus.publish(
                    new JSSNative.ThemeEvent("#" + jQuery.sap.escapeHTML(background), textStyle)
                )
            }

            oRM.write(`<header>
        <div class="arcContainer">
            <svg class="arcBackground" data-name="Enmeshed Status Bogen" xmlns="http://www.w3.org/2000/svg" width="100%"
                 height="140.001" viewBox="0 0 375 140.001" preserveAspectRatio="none">
                <path id="Enmeshed_Bogen" data-name="Enmeshed Bogen"
                      d="M233.6,344.224V227.511h375V344.48a758.5,758.5,0,0,1-187,23.031A758.336,758.336,0,0,1,233.6,344.224Z"
                      transform="translate(-233.599 -227.511)" fill="#dddce5" /></svg>

            <svg class="arcForeground" data-name="Enmeshed Bogen" xmlns="http://www.w3.org/2000/svg" width="100%"
                 height="135"
                 viewBox="0 0 375 135"  preserveAspectRatio="none">
                <path id="Schnittmenge_3" data-name="Schnittmenge 3"
                      d="M233.6,270.332V182.483h375v87.848c-107.8,62.869-267.2,62.869-375,0Z"
                      transform="translate(-233.599 -182.483)" fill="#`)

            oRM.writeEscaped(background)
            oRM.write(`" />
            </svg>
            


        </div>
        <div class="logoContainer">
            <img id="arcImage" src="`)
            const image = oControl.getImage()
            if (image) {
                oRM.writeEscaped(image)
            }

            oRM.write(`" alt="" />
        </div>
    </header>`)
            for (const control of oControl.getAggregation("content")) {
                oRM.renderControl(control)
            }
            oRM.write("</div>")
        }
    })
})
