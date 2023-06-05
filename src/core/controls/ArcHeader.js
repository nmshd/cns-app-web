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
                background = "3d86f0"
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
