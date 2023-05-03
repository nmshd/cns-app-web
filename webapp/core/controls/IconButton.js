sap.ui.define(["sap/m/Button", "./IconButtonRenderer"], (Button, IconButtonRenderer) => {
    "use strict"

    return Button.extend("nmshd.app.core.controls.IconButton", {
        metadata: {
            aggregations: {},
            properties: {
                pressedIcon: "string",
                pressedActiveIcon: "string",
                pressed: "boolean",
                iconPosition: "string"
            },
            publicMethods: [],
            events: {},
            renderer: IconButtonRenderer
        },

        _getImage(sImgId, sSrc, sActiveSrc, bIconDensityAware) {
            if (this.getPressed()) {
                return Button.prototype._getImage.apply(this, [
                    sImgId,
                    this.getPressedIcon(),
                    this.getPressedActiveIcon(),
                    bIconDensityAware
                ])
            }
            return Button.prototype._getImage.apply(this, [sImgId, sSrc, sActiveSrc, bIconDensityAware])
        },

        init(e) {},

        onAfterRendering(oEvent) {
            if (Button.prototype.onAfterRendering) {
                Button.prototype.onAfterRendering.apply(this, arguments)
            }
        }
    })
})
