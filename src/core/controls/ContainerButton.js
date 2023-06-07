sap.ui.define(["sap/m/Button", "./ContainerButtonRenderer"], (Button, ContainerButtonRenderer) => {
    "use strict"

    return Button.extend("nmshd.app.core.controls.ContainerButton", {
        metadata: {
            aggregations: {
                content: { singularName: "content" },
                contentLeft: { singularName: "contentLeft" },
                contentRight: { singularName: "contentRight" },
                contentTop: { singularName: "contentTop" }
            },
            properties: {
                description: "string",
                pressedIcon: "string",
                pressedActiveIcon: "string",
                pressed: "boolean",
                iconPosition: "string"
            },
            publicMethods: [],
            events: {},
            renderer: ContainerButtonRenderer,
            defaultAggregation: "content"
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

        init(e) {}
    })
})
