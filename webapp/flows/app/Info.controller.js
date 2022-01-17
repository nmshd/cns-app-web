sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.Info", {
        routeName: "app.info",

        onRouteMatched(oEvent) {
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle("Info")
            this.super("onRouteMatched", oEvent)
        },

        refresh() {},

        clear() {
            this.super("clear")
        },
        onNavButtonPress() {
            this.navBack("app.master")
        }
    })
})
