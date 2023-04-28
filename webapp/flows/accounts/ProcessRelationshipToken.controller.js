sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "sap/ui/model/json/JSONModel"],
    (App, BaseController, JSONModel) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows.accounts.ProcessRelationshipToken", {
            routeNames: ["accounts.processrelationshiptoken"],
            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    submitAvailable: false
                }
            },

            async onInitialized() {},

            async onRouteMatched(oEvent) {
                App.setBackIcon()
                App.appController.clearRight()
                App.appController.setTitle(this.resource("accounts.processRelationshipToken.title"))

                this.viewProp("/submitAvailable", false)
                await this.super("onRouteMatched")
                await App.isInitialized()
                this.clear()

                try {
                    this.loadInc()
                    this.info = App.prop("/redirect")
                    const accounts = await runtime.accountServices.getAccounts()
                    const accountname =
                        this.resource("accounts.processRelationshipToken.profile") + (accounts.length + 1)
                    const oAccounts = await runtime.accountServices.createAccount(
                        NMSHDTransport.Realm.Prod,
                        accountname
                    )
                    this.localAccount = oAccounts
                    await App.selectAccount(this.localAccount.id, "")
                    this.accountId = this.localAccount.id

                    if (App.accountSelectionCallback) {
                        App.accountSelectionCallback(this.localAccount)
                    }
                    if (!this.info) {
                        return
                    }
                    App.prop("/redirect", null)
                    this.requestId = this.info.requestId
                    this.model = new JSONModel({})
                    this.setModel(this.model)
                    this.viewProp("/submitAvailable", true)
                } catch (e) {
                    App.error(e)
                } finally {
                    this.loadDec()
                }
            },

            async onRouteExit(oEvent) {
                await BaseController.prototype.onRouteExit.apply(this, [oEvent, true])
            },

            clear() {
                this.viewProp("/submitAvailable", false)
            },

            async onSubmit() {
                this.viewProp("/submitAvailable", false)
                App.navTo("account.home", "account.relationships.request", {
                    accountId: this.accountId,
                    requestId: this.requestId
                })
            },

            onNavButtonPress() {
                this.navBack("accounts.select")
            },

            navBackToCreate() {
                this.navBack("accounts.create")
            }
        })
    }
)
