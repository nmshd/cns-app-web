sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.Privacy", {
        routeName: "app.privacy",

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                privacyChanged: new Date("2021/08/01"),
                privacyVersion: "v0.3",
                privacyText: "Privacy"
            }
        },

        async onInitialized() {
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

        clear() {},
        onNavButtonPress() {
            this.navBack("app.master")
        }
    })
})
