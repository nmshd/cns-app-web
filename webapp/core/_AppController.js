sap.ui.define(
    [
        "nmshd/app/core/_BaseController",
        "nmshd/app/core/Formatter",
        "sap/ui/Device",
        "sap/ui/core/routing/History",
        "sap/m/Image"
    ],
    (BaseController, Formatter, Device, History, Image) => {
        "use strict"
        const name = "nmshd.app.core._AppController"

        return BaseController.extend(name, {
            constructor() {},
            formatter: Formatter,
            super(functionName, ...argArray) {
                const f = this.getMetadata().getParent().getClass().prototype[functionName]
                if (!f) throw new Error("Function '" + functionName + "' was not found on parent class '" + name + "'.")
                return f.call(this, ...argArray)
            },
            createViewModel() {
                const owner = this.getOwnerComponent()

                let themeInfo = {
                    image: "",
                    fontColor: "#ffffff",
                    fontStyle: "light",
                    backgroundColor: "#3d86f0"
                }
                if (owner) {
                    const identityThemeInfos = owner.getModel("IdentityThemeInfo")
                    if (identityThemeInfos) {
                        themeInfo = identityThemeInfos.getProperty("/_default")
                    }
                }
                return {
                    busy: false,
                    delay: 0,
                    errorVisible: false,
                    errorMessage: "",
                    refreshVisible: true,
                    theme: themeInfo
                }
            },
            createItemModel() {
                return {}
            },

            setMessage(message, type) {
                const strip = this.byId("message")
                if (!strip) return

                if (!message) {
                    strip.setText("")
                    strip.setVisible(false)
                } else {
                    strip.setText(message)
                    strip.setVisible(true)
                    strip.setType(type)
                }
            },

            onRouteEntry() {
                this.getOwnerComponent().addController(this.getMetadata().getName(), this)
            },

            async onRouteMatched(oEvent, doNotRefresh) {
                await App.isInitialized()
                if (!doNotRefresh) {
                    await this.refresh()
                }
            },

            /**
             * Is called when the route is exiting. Calls clear after 500ms.
             */
            onRouteExit() {
                this.getOwnerComponent().removeController(this.getMetadata().getName())
                const that = this
                setTimeout(() => {
                    that.clear()
                }, 500)
            },

            onNavButtonPress(oEvent) {
                throw "Implement onNavButtonPress within controller!"
            },

            refresh() {},

            clear() {
                this.resetViewModel()
                this.resetItemModel()
            },

            /**
             * Navigates to the given target with given object's properties
             *
             * @param routeName The target route name
             * @param object The parameter object for the given route
             * @param phoneTarget Whether or not another route target should be shown if running on a phone.
             * This is sometimes required if you want to override UI5 standard behavior and e.g. show the master
             * view instead of the detail one (after navigating to a certain route). It comes with a drawback: In
             * order to be able to use the back button, the history should be written and thus in first needs to
             * navigate to a given routeName, afterwards displays the phoneTarget view. A flickering of the screen
             * is the result, as UI5 is navigating back and forth in a short time.
             * To circumvent this, use additional custom properties "showMaster": true AND
             * "detailTarget": {givenPhoneTarget} within route configuration in the manifest.json file.
             *
             * For example to show the Master view on phone (Route Configuration):
             * {
             *   "pattern": "accounts/{accountId}/relationships/{relationshipId}/master",
             *   "name": "account.relationship.master",
             *   "target": ["account.relationship.master"],
             *   "parent": "nmshd.app.Component:prototype",
             *   "showMaster": true,
             *   "detailTarget": "account.relationship.home"
             * }
             *
             * this.navTo("account.relationship.master")
             *  -> Results in displaying both targets "account.relationship.master" (masterView) and
             *     "account.relationship.home" (displayView)
             *  -> Shows the Master Navigation if we are in Tablet Mode
             *  -> Navigates to the Master View if we are on Phone (and writes it in the history)
             *
             * @param replace Whether or not the history should be omitted (true) or written (default, false)
             * You should not use this feature unless you know what you are doing. The history is usually required
             * for back button functionality.
             */
            navTo(routeName, object, phoneTarget, replace) {
                if (!object) object = {}
                if (Device.system.phone && phoneTarget) {
                    this.getRouter().navTo(routeName, object, replace)
                    this.getRouter().getTargets().display(phoneTarget, object)
                } else {
                    this.getRouter().navTo(routeName, object, replace)
                }
            },

            /**
             * Calls navTo with replace=true. Can be overridden for a BaseController
             * to easily have a custom back navigation for every view
             *
             * @param {*} routeName The target route name, used for desktop mode and if no history is present
             * @param {*} object The parameter object for the given route
             * @param {*} delta The delta number to navigate n steps back within the history.
             * Delta will be overridden to be below zero
             */
            async navBack(routeName, object, delta) {
                const oHistory = History.getInstance()
                const sPreviousHash = oHistory.getPreviousHash()

                try {
                    if (sPreviousHash !== undefined) {
                        if (delta) {
                            window.history.go(Math.min(delta, -1))
                        } else if (!Device.system.phone) {
                            let hash = this.getRouter().getURL(routeName, object)
                            let count = this.countDeltaToHash(hash)
                            if (count >= 0) {
                                const historyEntries = history.state.sap.history
                                App.navAndReplaceHistory(1 - historyEntries.length, [routeName, object])
                            } else {
                                window.history.go(count)
                            }
                        } else {
                            window.history.go(-1)
                        }
                    } else {
                        this.getRouter().navTo(routeName, object, true /*no history*/)
                    }
                } catch (e) {
                    appLogger.error("A navigation is already in progress", e)
                }
            },

            getCurrentHash() {
                const historyEntries = history.state.sap.history
                return historyEntries[historyEntries.length - 1]
            },

            countDeltaToHash(hash) {
                const historyEntries = history.state.sap.history
                let delta = 0
                for (let i = 0, l = historyEntries.length; i < l; i++) {
                    let historyEntry = historyEntries[i]
                    if (historyEntry === hash) {
                        delta = i - l + 1
                        break
                    }

                    if ("/" + historyEntry === hash) {
                        delta = i - l + 1
                        break
                    }

                    if (historyEntry === "/" + hash) {
                        delta = i - l + 1
                        break
                    }
                }

                return delta
            }
        })
    }
)
