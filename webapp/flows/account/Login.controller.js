sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.account.Master", {
        routeName: "account.login",
        createViewModel() {
            return {
                busy: true,
                delay: 0,
                errorVisible: false,
                errorMessage: "",
                navigation: []
            }
        },

        login() {
            this.navTo("account.home")
        },

        async onRouteMatched(oEvent) {
            await this.super("onRouteMatched", oEvent)
            this.clear()
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle("Login")
            this.navTo("account.home")
        },

        clear() {
            this.super("clear")
        },

        onNavButtonPress() {
            this.navBack("accounts")
        }
    })
})
