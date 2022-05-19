sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.Master", {
        routePattern: new RegExp("^app\\.[\\w\\.]+$"),

        onInitialized(oEvent) {
            this.byId("version").attachBrowserEvent("tap", this.tapIncrease.bind(this))
        },

        tapIncrease() {
            this.taps++
            console.log("Taps", this.taps)
            if (this.taps > 5) {
                this.navTo("app.debug")
            }
        },

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                appVersion: runtime.nativeEnvironment.configAccess.get("version").value,
                runtimeVersion: NMSHDAppRuntime.buildInformation.version
            }
        },

        onRouteMatched(oEvent) {
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle(this.resource("app.masterController.title"))
            this.super("onRouteMatched", oEvent)
            this.taps = 0
        },

        clear() {
            this.super("clear")
        },

        onItemPress(oEvent) {
            this.navTo(oEvent.getParameter("listItem").data("key"))
        },

        onNavButtonPress() {
            App.navTo("", "accounts.select")
        }
    })
})
