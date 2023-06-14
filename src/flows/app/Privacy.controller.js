sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Privacy", {
        routeNames: ["app.privacy", "account.privacy"],

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                privacyChanged: new Date("2023/06/14"),
                privacyVersion: "v1.0",
                privacyText: "Privacy"
            }
        },

        async onInitialized() {
            this.resetViewModel()
            const privacyText = await $.get("flows/app/Privacy.html")
            this.viewProp("/privacyText", privacyText)
        },

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("privacy.title"))
            this.super("onRouteMatched", oEvent)
        },

        refresh() {},

        clear() {}
    })
})
