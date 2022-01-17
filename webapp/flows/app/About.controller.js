sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.About", {
        routeName: "app.about",

        onRouteMatched(oEvent) {
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle("Über die App")
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
