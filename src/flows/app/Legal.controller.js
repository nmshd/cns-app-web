sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Legal", {
        routeNames: ["app.legal", "account.legal"],

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                legalChanged: new Date("2021/08/01"),
                legalVersion: "v0.1",
                legalText: "Legal"
            }
        },

        async onInitialized() {
            this.resetViewModel()
            const legalText = await $.get("flows/app/Legal.html")
            this.viewProp("/legalText", legalText)
        },

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("legal.title"))
            this.super("onRouteMatched", oEvent)
        },

        refresh() {},

        clear() {}
    })
})
