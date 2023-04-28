sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, BaseController) => {
    "use strict"
    return BaseController.extend("nmshd.app.flows.accounts.OnboardNoCode", {
        routeNames: ["accounts.onboardnocode"],
        createViewModel() {
            return {
                busy: false,
                delay: 0,
                submitAvailable: false
            }
        },

        async onInitialized() {},

        async onRouteMatched(oEvent) {
            await this.super("onRouteMatched")
            App.setBackIcon()
            App.appController.clearRight()
            App.appController.setTitle("Enmeshed")

            this.clear()
        },

        clear() {},

        refresh() {
            this.viewProp("/submitAvailable", true)
        },

        async create() {
            try {
                this.loadInc()
                this.viewProp("/submitAvailable", false)
                const accounts = await runtime.accountServices.getAccounts()
                const accountname = this.resource("accounts.processRelationshipToken.profile") + (accounts.length + 1)
                const oAccounts = await runtime.accountServices.createAccount(NMSHDTransport.Realm.Prod, accountname)
                this.localAccount = oAccounts
                await App.selectAccount(this.localAccount.id, "")
                this.accountId = this.localAccount.id
                App.navTo("", "account.home", {
                    accountId: this.accountId
                })
            } catch (e) {
                App.error(e)
            } finally {
                this.loadDec()
            }
        },

        async qrcode() {
            await App.navAndReplaceHistory(-1, [
                "account.home",
                {
                    accountId: this.localAccount.id.toString()
                }
            ])
            await App.navTo("account.home", "account.relationships", {
                accountId: this.localAccount.id.toString()
            })
            await App.navTo("account.relationships", "account.scan", {
                accountId: this.localAccount.id.toString()
            })
        },

        async start() {
            await App.navAndReplaceHistory(-1, [
                "account.home",
                {
                    accountId: this.localAccount.id.toString()
                }
            ])
        },

        onNavButtonPress() {
            this.navBack("accounts.onboardoverview")
        }
    })
})
