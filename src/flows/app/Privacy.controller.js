sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Privacy", {
        routeNames: ["app.privacy", "account.privacy"],

        createViewModel() {
            let privacyChangedAt = ""
            let privacyVersion = ""

            const model = this.getOwnerComponent()?.getModel("ProjectSites")
            if (model) {
                privacyVersion = model.getProperty("/privacyVersion")
                privacyChangedAt = model.getProperty("/privacyChangedAt")
            }

            return {
                busy: false,
                delay: 0,
                privacyChanged: new Date(privacyChangedAt),
                privacyVersion: privacyVersion,
                privacyText: ""
            }
        },

        async onInitialized() {
            this.resetViewModel()
            const privacyText = await $.get("flows/app/Privacy.html")
            this.viewProp("/privacyText", privacyText)
        },

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.setBackIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("privacy.title"))
            this.super("onRouteMatched", oEvent)
        },

        refresh() {},

        clear() {}
    })
})
