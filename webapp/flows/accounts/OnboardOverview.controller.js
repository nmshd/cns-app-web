sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "sap/ui/core/Fragment"],
    (App, BaseController, Fragment) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows.accounts.OnboardOverview", {
            routeNames: ["accounts.onboardoverview"],
            createViewModel() {
                return {
                    busy: false,
                    delay: 0
                }
            },

            onPopupPress(oEvent) {
                this.navTo(oEvent.getParameter("listItem").data("key"))
            },

            async onInitialized() {
                Fragment.load({
                    name: "nmshd.app.flows.accounts.AppInfoPage",
                    controller: this
                })
                    .then((oInfoPopoverPage) => {
                        this._oInfoPopover = oInfoPopoverPage
                        this.getView().addDependent(this._oInfoPopover)
                    })
                    .catch((oError) => {
                        appLogger.error("Could not load Fragment", oError)
                    })
            },

            async onRouteMatched(oEvent) {
                App.appController.setLeft("sap-icon://nav-back", null)
                App.appController.setTitle("Enmeshed")
                App.appController.setRight("sap-icon://hint", () => {
                    this.onInfo()
                })
                await App.isInitialized()
                const aAccounts = await App.localAccountController().getAccounts()
                if (aAccounts.length >= 1) {
                    App.appController.setLeft("sap-icon://nav-back", null)
                }
                await this.super("onRouteMatched")

                this.clear()
            },

            onInfo() {
                let button = App.appController.byId("appRight")
                if (!button) {
                    this.navTo("app.master")
                } else {
                    if (this._oInfoPopover) {
                        this._oInfoPopover.openBy(button)
                    }
                }
            },

            clear() {},

            onCreate() {
                this.navTo("accounts.create")
            },

            onNavButtonPress() {
                this.navBack("accounts.select")
            },

            scan() {
                this.navTo("accounts.scan")
            },

            onNoCode() {
                this.navTo("accounts.onboardnocode")
            },

            toEULA() {
                App.navTo("app.eula")
            },

            toPrivacy() {
                App.navTo("app.privacy")
            },

            navBackToCreate() {
                this.navBack("accounts.create")
            }
        })
    }
)
