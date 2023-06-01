sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/RoutingController", "sap/ui/model/json/JSONModel"],
    (App, RoutingController, JSONModel) => {
        "use strict"
        return RoutingController.extend("nmshd.app.flows.account.AccountController", {
            onInitialized() {
                this.resetViewModel()
            },

            async onRouteMatched(oEvent, doNotRefresh) {
                this.clear()

                this.accountId = oEvent.getParameter("arguments").accountId
                if (!this.accountId) {
                    App.error({
                        code: "error.app.noIdProvided",
                        message: "No id has been provided."
                    })
                    return
                }

                this.localAccount = await App.localAccountController().getAccount(this.accountId)
                const name = this.localAccount.name || "Enmeshed"
                // @ts-ignore
                document.querySelector("head title").text = name

                App.appController.setTitle(name)

                const currentRouteName = oEvent.getParameter("arguments")._name
                switch (currentRouteName) {
                    case "account.home":
                    case "account.inbox":
                    case "account.cards":
                    case "account.relationships":
                    case "account.profile":
                    case "account.attributes":
                        App.setMenuIcon()
                        break
                    default:
                        App.setBackIcon()
                        break
                }

                await App.selectAccount(this.accountId, "")

                const acc = await this.account()

                this.info = {
                    identity: acc.identity.identity.toJSON(),
                    device: acc.activeDevice.device.toJSON()
                }

                appLogger.trace(`AccountController.js: Identity ${this.info.identity.address} selected.`)

                if (!doNotRefresh) {
                    this.refresh()
                }
            },

            account() {
                return App.account(this.accountId)
            },

            refresh() {},

            clear() {
                this.resetViewModel()
            },

            navTo(routeName, object, phoneView, replace) {
                if (!object) {
                    object = { accountId: this.accountId }
                } else if (object && typeof object["accountId"] === "undefined") {
                    object["accountId"] = this.accountId
                }
                RoutingController.prototype.navTo.apply(this, [routeName, object, phoneView, replace])
            },

            navBack(routeName, object, delta) {
                routeName || (routeName = "account.login")
                if (!object) {
                    object = { accountId: this.accountId }
                } else if (object && typeof object["accountId"] === "undefined") {
                    object["accountId"] = this.accountId
                }
                RoutingController.prototype.navBack.apply(this, [routeName, object, delta])
            },
            onNavButtonPress() {
                this.navBack("accounts.select", null, -2)
            }
        })
    }
)
