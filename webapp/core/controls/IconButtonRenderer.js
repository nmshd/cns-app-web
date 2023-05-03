sap.ui.define(["sap/m/ButtonRenderer", "sap/ui/core/Renderer"], function (ButtonRenderer, Renderer) {
    "use strict"

    const IconButtonRenderer = Renderer.extend(ButtonRenderer)

    IconButtonRenderer.apiVersion = 2

    /**
     * Callback for specific rendering of accessibility attributes.
     *
     * @param {sap.ui.core.RenderManager}
     *            oRm the RenderManager currently rendering this control
     * @param {sap.m.ToggleButton}
     *            oToggleButton the ToggleButton that should be rendered
     * @param {object} mAccProps Accessibillity properties
     * @private
     */
    IconButtonRenderer.renderAccessibilityAttributes = function (oRm, oToggleButton, mAccProps) {
        mAccProps["pressed"] = oToggleButton.getPressed()
    }

    /**
     * Callback for specific rendering of inner button attributes.
     *
     * @param {sap.ui.core.RenderManager}
     *            oRm the RenderManager currently rendering this control
     * @param {sap.m.ToggleButton}
     *            oToggleButton the ToggleButton that should be rendered
     * @private
     */
    IconButtonRenderer.renderButtonAttributes = function (oRm, oToggleButton) {
        // @ts-ignore
        if (oToggleButton.getPressed() && !oToggleButton._isUnstyled()) {
            oRm.class("sapMToggleBtnPressed")
        }
    }

    return IconButtonRenderer
})
