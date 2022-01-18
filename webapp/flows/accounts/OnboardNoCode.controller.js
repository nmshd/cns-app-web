sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, BaseController) => {
    "use strict"
    return BaseController.extend("nmshd.app.flows.accounts.OnboardNoCode", {
        routeNames: ["accounts.onboardnocode"],
        createViewModel() {
            return {
                busy: false,
                delay: 0
            }
        },

        async onInitialized() {},

        async onRouteMatched(oEvent) {
            await this.super("onRouteMatched")
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle("Enmeshed")

            this.clear()
        },

        clear() {},

        async qrcode() {
            await App.navAndReplaceHistory(-1, [
                "account.home",
                {
                    accountId: this.localAccount.id.toString()
                }
            ])
            await App.navTo("account.home", "account.relationships", {
                accountId: this.localAccount.id.toString()
            })
            await App.navTo("account.relationships", "account.scan", {
                accountId: this.localAccount.id.toString()
            })
        },

        async start() {
            await App.navAndReplaceHistory(-1, [
                "account.home",
                {
                    accountId: this.localAccount.id.toString()
                }
            ])
        },

        onNavButtonPress() {
            this.navBack("accounts.onboardoverview")
        }
    })
})
