sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Legal", {
        routeNames: ["app.legal", "account.legal"],

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                legalChanged: new Date("2023/06/09"),
                legalVersion: "v1.0",
                deps: "",
                devdeps: ""
            }
        },

        async onInitialized() {
            this.resetViewModel()
            const deps = await $.get("flows/app/LegalDeps.html")
            this.viewProp("/deps", deps)
            const devdeps = await $.get("flows/app/LegalDevdeps.html")
            this.viewProp("/devdeps", devdeps)
        },

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("legal.title"))
            this.super("onRouteMatched", oEvent)
        },

        openLink() {},

        refresh() {},

        clear() {}
    })
})
