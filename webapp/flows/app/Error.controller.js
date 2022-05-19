sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AppController) => {
    "use strict"
    return AppController.extend("nmshd.app.flows.app.Error", {
        routeName: "app.error",
        createViewModel() {
            return {
                code: ""
            }
        },

        async onRouteMatched(oEvent) {
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle(this.resource("app.errorController.title"))
            await this.super("onRouteMatched", oEvent)
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.clearRight()
            App.appController.setTitle(this.resource("app.errorController.title"))

            const themeInfo = await App.themeInfoForTemplate("error")
            if (themeInfo) {
                this.viewProp("/theme", themeInfo)
                App.appController.viewProp("/theme", themeInfo)
            }

            const query = this.viewProp("/route/?query")
            if (query && query.code) {
                this.viewProp("/code", query.code)
            } else {
                this.viewProp("/code", "")
            }
        },

        async onRouteExit(oEvent) {
            await AppController.prototype.onRouteExit.apply(this, [oEvent, true])
            App.appController.viewProp("/theme", "")
        },

        refresh() {},

        clear() {
            this.super("clear")
        },
        onNavButtonPress() {
            this.navBack("accounts")
        }
    })
})
