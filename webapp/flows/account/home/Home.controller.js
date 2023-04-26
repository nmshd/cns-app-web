sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "nmshd/app/core/controls/MessageRenderer",
        "nmshd/app/core/Formatter",
        "sap/m/FormattedText"
    ],
    (App, AccountController, MessageRenderer, Formatter, FormattedText) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.home.Home", {
            routeNames: ["account.home"],

            onInitialized() {
                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("message", "refresh", async (sChannel, sIdentfier, oData) => {
                        this.refresh()
                    })
            },

            async onRouteMatched(oEvent) {
                await this.super("onRouteMatched", oEvent)
            },

            onSettings() {
                this.navTo("account.settings")
            },

            async refresh() {
            },

            onScan() {
                App.navTo("account.master", "account.scan", {
                    accountId: this.accountId
                })
            },

            onNavButtonPress() {
                this.navBack("accounts.select")
            }
        })
    }
)