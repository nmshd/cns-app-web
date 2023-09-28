sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Legal", {
        routeNames: ["app.legal", "account.legal"],

        createViewModel() {
            let legalChangedAt = ""
            let legalVersion = ""

            const model = this.getOwnerComponent()?.getModel("ProjectSites")
            if (model) {
                legalVersion = model.getProperty("/legalVersion")
                legalChangedAt = model.getProperty("/legalChangedAt")
            }

            return {
                busy: false,
                delay: 0,
                legalChanged: new Date(legalChangedAt),
                legalVersion: legalVersion,
                deps: "",
                devdeps: ""
            }
        },

        async onInitialized() {
            this.resetViewModel()
            const deps = await $.get("assets/texts/LegalDeps.html")
            this.viewProp("/deps", deps)
            const devdeps = await $.get("assets/texts/LegalDevdeps.html")
            this.viewProp("/devdeps", devdeps)
        },

        onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.setBackIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("legal.title"))
            this.super("onRouteMatched", oEvent)
        },

        openLink() {},

        refresh() {},

        clear() {}
    })
})
