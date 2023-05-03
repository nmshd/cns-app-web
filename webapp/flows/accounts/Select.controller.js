sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "nmshd/app/core/Event", "sap/ui/core/Fragment"],
    (App, BaseController, Event, Fragment) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows.accounts.Select", {
            routeNames: [
                "",
                "accounts",
                "accounts.settings",
                "accounts.select",
                "accounts.create",
                "accounts.onboardoverview",
                "accounts.onboardnocode",
                "accounts.onboardwrongcode",
                "accounts.processdevicetoken",
                "accounts.processrecoverytoken",
                "accounts.processrelationshiptoken",
                "accounts.scan",
                "home",
                "account.login"
            ],

            onPopupPress(oEvent) {
                this.navTo(oEvent.getParameter("listItem").data("key"))
            },

            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    navigation: []
                }
            },

            navBackToSelect() {
                this.navBack("accounts")
            },

            async routeRedirect() {
                const aAccounts = await App.localAccountController().getAccounts()
                if (aAccounts.length === 1) {
                    App.navTo("account.login", "account.home", { accountId: aAccounts[0].id.toString() })
                } else if (aAccounts.length === 0) {
                    App.navTo("", "app.about")
                }
            },

            async onRouteMatched(oEvent) {
                App.appController.setTitle()
                const currentRouteName = oEvent.getParameter("arguments")._name
                switch (currentRouteName) {
                    case undefined:
                    case "":
                    case "accounts":
                    case "accounts.select":
                        App.setMenuIcon()
                        break
                    default:
                        App.setBackIcon()
                        break
                }
                App.appController.setRight(null)

                this.clear()

                await this.super("onRouteMatched")

                await this.autoNavIfPossible()
            },

            async autoNavIfPossible() {
                if (
                    App.disableAutoAccountSelection ||
                    this.redirectedOnStart ||
                    App.openByNotification ||
                    window.openedByOpenUrlEvent
                ) {
                    return
                }

                if (this.viewProp("/route/_name")) return

                // routeName is undefined/empty if we start the app the first time or if no route is found -> redirect
                this.redirectedOnStart = true
                await this.routeRedirect()
            },

            onCreate() {
                App.navTo("accounts.select", "accounts.onboardoverview")
            },

            async refresh() {
                appLogger.trace("Loading accounts...")
                const accs = await App.localAccountController().getAccounts()
                this.prop("/items", accs)
            },

            onItemPress(oEvent) {
                App.afterLogin = null
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const prop = oItem.getBindingContextPath()
                const acc = this.prop(prop)

                App.navTo("account.login", "account.home", { accountId: acc.id.toString() })
            },

            onNavButtonPress(oEvent) {
                this.navBack("accounts")
            }
        })
    }
)
