sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.account.Master", {
        routePattern: new RegExp("^account\\.[\\w\\.]+$"),
        createViewModel() {
            return {
                busy: true,
                delay: 0,
                errorVisible: false,
                errorMessage: "",
                navigation: []
            }
        },

        onScan() {
            App.navTo("account.master", "account.scan", {
                accountId: this.accountId
            })
        },

        onSettings() {
            this.navTo("account.settings")
        },

        clear() {
            this.super("clear")
        },

        onNavButtonPress() {
            this.navBack("accounts")
        },

        onItemPress(oEvent) {
            this.navTo(oEvent.getParameter("listItem").data("key"), { accountId: this.accountId })
        },
        onProfileMenuPress(oEvent) {
            App.openProfileMenu(oEvent)
        }
    })
})
