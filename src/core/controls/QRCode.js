sap.ui.define(["sap/ui/core/Control"], (Control) => {
    "use strict"

    return Control.extend("nmshd.app.core.controls.QRCode", {
        metadata: {
            properties: {
                content: { type: "string", defaultValue: "" },
                width: { type: "string", defaultValue: "128" },
                height: { type: "string", defaultValue: "128" }
            },
            publicMethods: [],
            events: {}
        },

        init(e) {},

        renderer(oRM, oControl) {
            oRM.write("<canvas")
            oRM.writeControlData(oControl)

            oRM.addClass("qrcodeContainer")

            oRM.writeClasses()
            oRM.write(">")

            oRM.write("</canvas>")
        },
        createQRCode() {
            QRCode.toCanvas(
                document.getElementById(this.getId()),
                this.getContent(),
                {
                    margin: 1,
                    width: this.getWidth()
                },
                (e) => {}
            )
        },

        onAfterRendering(oEvent) {
            if (Control.prototype.onAfterRendering) {
                Control.prototype.onAfterRendering.apply(this, arguments)
            }

            this.createQRCode()
        }
    })
})
