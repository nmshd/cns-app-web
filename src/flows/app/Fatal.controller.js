sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/RoutingController", "nmshd/app/core/Formatter"],
    (App, RoutingController, Formatter) => {
        "use strict"
        return RoutingController.extend("nmshd.app.flows.app.Fatal", {
            routeName: "app.fatal",
            formatter: Formatter,
            createViewModel() {
                return {
                    code: ""
                }
            },

            onInitialized() {
                this.resetViewModel()
            },

            async onRouteMatched(oEvent) {
                App.setBackIcon()
                App.appController.clearRight()
                App.appController.setTitle(this.resource("app.fatalErrorController.title"))
                await this.super("onRouteMatched", oEvent)
                App.setBackIcon()
                App.appController.clearRight()
                App.appController.setTitle(this.resource("app.fatalErrorController.title"))

                const themeInfo = await App.themeInfoForTemplate("error")
                if (themeInfo) {
                    this.viewProp("/theme", themeInfo)
                    App.appController.viewProp("/theme", themeInfo)
                }

                const query = oEvent.getParameter("arguments")["?query"]
                if (query && query.code) {
                    this.viewProp("/code", query.code)
                } else {
                    this.viewProp("/code", "")
                }
            },

            async onRouteExit(oEvent) {
                await RoutingController.prototype.onRouteExit.apply(this, [oEvent, true])
                App.appController.viewProp("/theme", "")
            },

            refresh() {},

            clear() {
                this.super("clear")
            },
            onNavButtonPress() {
                App.isError = false
                window.history.go(-1)
            }
        })
    }
)
