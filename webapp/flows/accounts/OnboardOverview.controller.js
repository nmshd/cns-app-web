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
                
            },

            async onRouteMatched(oEvent) {
                App.setMenuIcon()
                App.appController.setTitle("Enmeshed")
                await App.isInitialized()
                const aAccounts = await App.localAccountController().getAccounts()
                if (aAccounts.length >= 1) {
                    App.setMenuIcon()
                }
                await this.super("onRouteMatched")

                this.clear()
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
                App.navTo("", "app.eula")
            },

            toPrivacy() {
                App.navTo("", "app.privacy")
            },

            navBackToCreate() {
                this.navBack("accounts.create")
            }
        })
    }
)
