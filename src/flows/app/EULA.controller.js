sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.EULA", {
        routeNames: ["app.eula", "account.eula"],

        createViewModel() {
            let eulaChangedAt = ""
            let eulaVersion = ""

            const model = this.getOwnerComponent()?.getModel("ProjectSites")
            if (model) {
                eulaVersion = model.getProperty("/eulaVersion")
                eulaChangedAt = model.getProperty("/eulaChangedAt")
            }

            return {
                busy: false,
                delay: 0,
                eulaChanged: new Date(eulaChangedAt),
                eulaVersion: eulaVersion,
                eula: ""
            }
        },

        async onInitialized() {
            this.resetViewModel()
            const eula = await $.get("assets/texts/EULA.html")
            this.viewProp("/eula", eula)
        },

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.setBackIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("eula.title"))
            this.super("onRouteMatched", oEvent)
        },

        openLink() {},

        refresh() {},

        clear() {}
    })
})
