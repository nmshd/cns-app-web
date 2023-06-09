sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Imprint", {
        routeNames: ["app.imprint", "account.imprint"],

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("imprint.title"))
            this.super("onRouteMatched", oEvent)
        },

        refresh() {},

        clear() {
            this.super("clear")
        }
    })
})
