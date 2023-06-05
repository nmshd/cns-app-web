sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.accounts.OnboardWrongCode", {
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
            this.navTo("account.scan", {
                accountId: this.localAccount.id.toString()
            })
        },

        async start() {
            this.navTo("account.home", {
                accountId: this.localAccount.id.toString()
            })
        },

        onNavButtonPress() {
            this.navBack("accounts.onboardoverview")
        }
    })
})
