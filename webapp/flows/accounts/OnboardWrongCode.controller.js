sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, BaseController) => {
    "use strict"
    return BaseController.extend("nmshd.app.flows.accounts.OnboardWrongCode", {
        routeNames: ["accounts.onboardwrongcode"],
        createViewModel() {
            return {
                busy: false,
                delay: 0
            }
        },

        async onInitialized() {},

        async onRouteMatched(oEvent) {
            App.setBackIcon()
            App.appController.clearRight()
            App.appController.setTitle("Enmeshed")

            await this.super("onRouteMatched")

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
