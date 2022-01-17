sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device", "sap/ui/model/json/JSONModel", "nmshd/app/core/App"],
    (UIComponent, Device, JSONModel, App) => {
        "use strict"

        return UIComponent.extend("nmshd.app.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * In this method, the device models are set and the router is initialized.
             * @public
             * @override
             */
            init() {
                // set the device model
                const oModel = new JSONModel(Device)
                oModel.setDefaultBindingMode("OneWay")
                this.setModel(oModel, "d")

                // call the base component's init function and create the App view
                UIComponent.prototype.init.apply(this, arguments)

                // create the views based on the url/hash
                this.getRouter().initialize()

                this._currentControllers = {}

                App.initializeApp(this)
            },

            /**
             * The component is destroyed by UI5 automatically.
             * In this method, the ListSelector and ErrorHandler are destroyed.
             * @public
             * @override
             */
            destroy() {
                // call the base component's destroy function
                UIComponent.prototype.destroy.apply(this, arguments)
            },

            /**
             * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
             * design mode class should be set, which influences the size appearance of some controls.
             * @public
             * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
             */
            getContentDensityClass() {
                if (this._sContentDensityClass === undefined) {
                    // check whether FLP has already set the content density class; do nothing in this case
                    if (
                        jQuery(document.body).hasClass("sapUiSizeCozy") ||
                        jQuery(document.body).hasClass("sapUiSizeCompact")
                    ) {
                        this._sContentDensityClass = ""
                    } else if (!Device.support.touch) {
                        // apply "compact" mode if touch is not supported
                        this._sContentDensityClass = "sapUiSizeCompact"
                    } else {
                        // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                        this._sContentDensityClass = "sapUiSizeCozy"
                    }
                }
                return this._sContentDensityClass
            },

            getCurrentControllers() {
                return this._currentControllers
            },
            removeController(controllerId) {
                delete this._currentControllers[controllerId]
            },
            addController(controllerId, controller) {
                this._currentControllers[controllerId] = controller
            },
            clearControllers() {
                for (const name in this._currentControllers) {
                    const controller = this._currentControllers[name]
                    controller.clear()
                }
            },
            clearAndRefreshControllers() {
                for (const name in this._currentControllers) {
                    const controller = this._currentControllers[name]
                    controller.clear()
                    controller.refresh()
                }
            }
        })
    }
)
