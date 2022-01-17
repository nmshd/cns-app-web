sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.Legal", {
        routeName: "app.legal",

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
            const legalText = await $.get("flows/app/Legal.html")
            this.viewProp("/legalText", legalText)
        },

        onRouteMatched(oEvent) {
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle("Rechtliche Hinweise")
            this.super("onRouteMatched", oEvent)
        },

        refresh() {},

        clear() {},
        onNavButtonPress() {
            this.navBack("app.master")
        }
    })
})
