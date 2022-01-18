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

            async onInitialized() {
                Fragment.load({
                    name: "nmshd.app.flows.accounts.AppInfoPage",
                    controller: this
                })
                    .then((oInfoPopoverPage) => {
                        this._oInfoPopover = oInfoPopoverPage
                        this.getView().addDependent(this._oInfoPopover)
                    })
                    .catch((oError) => {
                        appLogger.error("Could not load Fragment", oError)
                    })
            },

            async routeRedirect() {
                const aAccounts = await App.localAccountController().getAccounts()
                if (aAccounts.length === 1) {
                    App.navTo("accounts.select", "account.home", { accountId: aAccounts[0].id.toString() })
                } else if (aAccounts.length === 0) {
                    App.navTo("accounts.select", "accounts.onboardoverview")
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
                        App.appController.clearLeft()
                        break
                    default:
                        App.appController.setLeft("sap-icon://nav-back", null)
                        break
                }
                App.appController.setRight("sap-icon://hint", () => {
                    this.onInfo()
                })

                this.clear()

                await this.super("onRouteMatched")

                // routeName is undefined/empty if we start the app the first time or if no route is found -> redirect
                if (
                    !this.redirectedOnStart &&
                    (!this.viewProp("/route/_name") || (!App.openByDeepLink && !App.openByNotification))
                ) {
                    this.redirectedOnStart = true
                    await this.routeRedirect()
                }
            },

            onInfo() {
                let button = App.appController.byId("appRight")
                if (!button) {
                    this.navTo("app.master")
                } else {
                    if (this._oInfoPopover) {
                        this._oInfoPopover.openBy(button)
                    }
                }
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

                App.navTo("accounts.select", "account.home", { accountId: acc.id.toString() })
            },

            onNavButtonPress(oEvent) {
                this.navBack("accounts")
            }
        })
    }
)
