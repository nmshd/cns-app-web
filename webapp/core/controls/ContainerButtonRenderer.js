sap.ui.define(
    [
        "sap/m/ButtonRenderer",
        "sap/ui/core/Renderer",
        "sap/ui/core/IconPool",
        "sap/m/library",
        "sap/ui/core/InvisibleText",
        "sap/ui/core/library",
        "sap/ui/core/ShortcutHintsMixin"
    ],
    function (ButtonRenderer, Renderer, IconPool, library, InvisibleText, coreLibrary, ShortcutHintsMixin) {
        ;("use strict")

        // shortcut for sap.m.ButtonType
        var ButtonType = library.ButtonType

        // shortcut for sap.m.ButtonAccessibilityType
        var ButtonAccessibilityType = library.ButtonAccessibilityType

        // shortcut for sap.m.LinkAccessibleRole
        var ButtonAccessibleRole = library.ButtonAccessibleRole

        // shortcut for sap.ui.core.TextDirection
        var TextDirection = coreLibrary.TextDirection

        // shortcut for sap.m.BadgeState
        var BadgeState = library.BadgeState

        // shortcut for sap.ui.core.aria.HasPopup
        var AriaHasPopup = coreLibrary.aria.HasPopup

        const ContainerButtonRenderer = Renderer.extend(ButtonRenderer)

        ContainerButtonRenderer.apiVersion = 2

        /**
         * Renders the HTML for the given control, using the provided
         * {@link sap.ui.core.RenderManager}.
         *
         * @param {sap.ui.core.RenderManager} oRm
         *            the RenderManager that can be used for writing to
         *            the Render-Output-Buffer
         * @param {sap.m.Button} oButton
         *            the button to be rendered
         */
        ContainerButtonRenderer.render = function (oRm, oButton) {
            // get control properties
            var sButtonId = oButton.getId()
            var sType = oButton.getType()
            var bEnabled = oButton.getEnabled()
            var sWidth = oButton.getWidth()
            var sTooltip = oButton._getTooltip()
            var sText = oButton._getText()
            var sTextDir = oButton.getTextDirection()
            // render bdi tag only if the browser is different from IE and Edge since it is not supported there
            var bRenderBDI = sTextDir === TextDirection.Inherit

            // get icon from icon pool
            var sBackURI = IconPool.getIconURI("nav-back")
            var sMinWidth

            // start button tag
            oRm.openStart("div", oButton)
            oRm.class("containerButtonRenderer")

            // button container style class
            /*
            if (!oButton._isUnstyled()) {
                oRm.class("sapMBtn")
                // extend  minimum button size if icon is set without text for button types back and up
                if ((sType === ButtonType.Back || sType === ButtonType.Up) && oButton._getAppliedIcon() && !sText) {
                    oRm.class("sapMBtnBack")
                }
            }
            */

            //ARIA attributes
            var mAccProps = ButtonRenderer.generateAccProps(oButton)

            //descendants (e.g. ToggleButton) callback
            if (this.renderAccessibilityAttributes) {
                this.renderAccessibilityAttributes(oRm, oButton, mAccProps)
            }
            oRm.accessibilityState(oButton, mAccProps)

            // check if the button is disabled
            if (!bEnabled) {
                oRm.attr("disabled", "disabled")
                if (!oButton._isUnstyled()) {
                    oRm.class("containerButtonRendererDisabled")
                }
            } else {
                switch (sType) {
                    case ButtonType.Accept:
                    case ButtonType.Reject:
                    case ButtonType.Emphasized:
                    case ButtonType.Attention:
                        oRm.class("containerButtonRendererInverted")
                        break
                    default: // No need to do anything for other button types
                        break
                }
            }

            // add tooltip if available
            if (sTooltip && !ShortcutHintsMixin.isDOMIDRegistered(sButtonId)) {
                oRm.attr("title", sTooltip)
            }

            // set user defined width
            if (sWidth != "" || sWidth.toLowerCase() === "auto") {
                oRm.style("width", sWidth)

                //this is a workaround until we move all button property classes to the root element
                //we need different min-width of the button in different cases
                //we may also need it different in different themes, but not possible with this workaround
                if (oButton._getAppliedIcon() && sText) {
                    sMinWidth = "4rem"
                } else {
                    //text only, icon only OR no text no icon
                    sMinWidth = "2.25rem"
                }
                oRm.style("min-width", sMinWidth)
            }
            renderTabIndex(oButton, oRm)

            // close button tag
            oRm.openEnd()

            // start inner button tag
            oRm.openStart("div", sButtonId + "-inner")

            // button style class
            if (!oButton._isUnstyled()) {
                oRm.class("containerButtonRendererInner")
            }

            // check if button is hoverable
            if (oButton._isHoverable()) {
                oRm.class("containerButtonRendererHoverable")
            }

            // check if button is focusable (not disabled)
            if (bEnabled) {
                oRm.class("sapMFocusable")
            }

            if (!oButton._isUnstyled()) {
                if (sText) {
                    oRm.class("sapMBtnText")
                }
                if (sType === ButtonType.Back || sType === ButtonType.Up) {
                    oRm.class("sapMBtnBack")
                }
                if (oButton._getAppliedIcon()) {
                    if (oButton.getIconFirst()) {
                        oRm.class("sapMBtnIconFirst")
                    } else {
                        oRm.class("sapMBtnIconLast")
                    }
                }
            }

            //get render attributes of depended buttons (e.g. ToggleButton)
            if (this.renderButtonAttributes) {
                this.renderButtonAttributes(oRm, oButton)
            }

            // set button specific styles
            /*
            if (!oButton._isUnstyled() && sType !== "") {
                // set button specific styles
                oRm.class("sapMBtn" + sType)
            }
            */

            //apply on the inner level as well as not applying it will allow for focusing the button after a mouse click
            renderTabIndex(oButton, oRm)

            // close inner button tag
            oRm.openEnd()

            const topContent = oButton.getContentTop()
            if (topContent.length > 0) {
                oRm.openStart("div")
                oRm.class("containerButtonRendererTop")
                oRm.openEnd()
                for (const control of topContent) {
                    oRm.renderControl(control)
                }
                oRm.close("div")
            }

            oRm.openStart("div")
            oRm.class("containerButtonRendererMiddle")
            oRm.openEnd()

            oRm.openStart("div")
            oRm.class("containerButtonRendererLeft")
            oRm.openEnd()

            for (const control of oButton.getContentLeft()) {
                oRm.renderControl(control)
            }
            oRm.close("div")

            oRm.openStart("div")
            oRm.class("containerButtonRendererCenter")
            oRm.openEnd()
            oRm.openStart("div")

            oRm.class("containerButtonRendererHeader")
            oRm.openEnd()

            // set image for internal image control (back)
            if (sType === ButtonType.Back || sType === ButtonType.Up) {
                this.writeInternalIconPoolHtml(oRm, oButton, sBackURI)
            }

            // write icon
            if (oButton.getIconFirst() && oButton._getAppliedIcon()) {
                this.writeImgHtml(oRm, oButton)
            }

            // write button text
            if (sText) {
                this.writeButtonText(oRm, oButton, sTextDir, bRenderBDI)
            }

            // write icon
            if (!oButton.getIconFirst() && oButton._getAppliedIcon()) {
                this.writeImgHtml(oRm, oButton)
            }

            oRm.close("div")

            oRm.openStart("div")
            oRm.openEnd()

            oRm.text(oButton.getDescription())

            oRm.close("div")

            oRm.openStart("div")
            oRm.class("containerButtonRendererItems")
            oRm.openEnd()
            for (const control of oButton.getContent()) {
                oRm.renderControl(control)
            }

            // end inner button tag
            oRm.close("div")

            oRm.close("div")
            oRm.openStart("div")
            oRm.class("containerButtonRendererRight")
            oRm.openEnd()
            for (const control of oButton.getContentRight()) {
                oRm.renderControl(control)
            }
            oRm.close("div")

            oRm.close("div")

            oRm.close("div")

            // add tooltip if available
            if (sTooltip) {
                oRm.openStart("span", sButtonId + "-tooltip")
                oRm.class("sapUiInvisibleText")
                oRm.openEnd()
                oRm.text(sTooltip)
                oRm.close("span")
            }

            // end button tag
            oRm.close("div")
        }

        ButtonRenderer.writeButtonText = function (oRm, oButton, sTextDir, bRenderBDI) {
            oRm.openStart("span", oButton.getId() + "-content")
            oRm.class("sapMBtnContent")
            // check if textDirection property is not set to default "Inherit" and add "dir" attribute
            if (sTextDir !== TextDirection.Inherit) {
                oRm.attr("dir", sTextDir.toLowerCase())
            }

            oRm.openEnd()

            if (bRenderBDI) {
                oRm.openStart("bdi", oButton.getId() + "-BDI-content")
                oRm.openEnd()
            }
            oRm.text(oButton.getText())
            if (bRenderBDI) {
                oRm.close("bdi")
            }
            oRm.close("span")
        }

        /**
         * Renders tabindex with value of "-1" if required by  <code>_bExcludeFromTabChain</code> property.
         * @param {sap.m.Button} oButton The sap.m.Button to be rendered
         * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the Render-Output-Buffer
         */
        function renderTabIndex(oButton, oRm) {
            if (oButton._bExcludeFromTabChain) {
                oRm.attr("tabindex", -1)
            }
        }

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
        ContainerButtonRenderer.renderAccessibilityAttributes = function (oRm, oToggleButton, mAccProps) {
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
        ContainerButtonRenderer.renderButtonAttributes = function (oRm, oToggleButton) {
            // @ts-ignore
            if (oToggleButton.getPressed() && !oToggleButton._isUnstyled()) {
                oRm.class("sapMToggleBtnPressed")
            }
        }

        return ContainerButtonRenderer
    }
)
