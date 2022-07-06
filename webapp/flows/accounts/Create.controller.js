sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, BaseController) => {
    "use strict"
    return BaseController.extend("nmshd.app.flows.accounts.Create", {
        routeNames: ["accounts.create", "accounts.create.eula", "accounts.create.privacy"],
        createViewModel() {
            return {
                busy: false,
                delay: 0,
                creation: true,
                creationCompleted: false
            }
        },

        async onInitialized() {
            this.setModel(this.oModel, "acc_creation")
        },

        async onRouteMatched(oEvent) {
            await this.super("onRouteMatched")
            App.appController.clearRight()
            App.appController.setLeft("sap-icon://nav-back", null)
            App.appController.setTitle(this.resource("accounts.create.title1"))

            this.clear()
        },

        clear() {
            this.viewProp("/creation", true)
            this.viewProp("/creationCompleted", false)
            this.localAccount = null
        },

        finishLoading() {
            this.clear()

            this.navTo("account.home", {
                accountId: this.localAccount.id.toString()
            })
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

        async submit(oEvent) {
            const accounts = await runtime.accountServices.getAccounts()
            const accountname = this.resource("accounts.create.profile") + (accounts.length + 1)

            try {
                const oAccounts = await this.load(
                    runtime.accountServices.createAccount(NMSHDTransport.Realm.Prod, accountname)
                )

                this.localAccount = oAccounts
                await this.load(App.selectAccount(this.localAccount.id, ""))
                this.viewProp("/creation", false)
                this.viewProp("/creationCompleted", true)
            } catch (e) {
                this.addError({
                    oError: e,
                    sUserFriendlyMsg: this.resource("accounts.create.wizard.popup.error")
                })
            } finally {
                this.loadDec()
            }
        },

        onNavButtonPress() {
            this.navBack("accounts.select")
        },

        toEULA() {
            App.navTo("app.eula")
        },

        toPrivacy() {
            App.navTo("app.privacy")
        },

        navBackToCreate() {
            this.navBack("accounts.create")
        }
    })
})
