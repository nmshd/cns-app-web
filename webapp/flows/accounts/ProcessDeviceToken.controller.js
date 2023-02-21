sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "sap/ui/model/json/JSONModel"],
    (App, BaseController, JSONModel) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows.accounts.ProcessDeviceToken", {
            routeNames: ["accounts.processdevicetoken"],
            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    submitEnabled: false
                }
            },

            async onInitialized() {},

            async onRouteMatched(oEvent) {
                App.appController.setLeft("sap-icon://nav-back", null)
                App.appController.clearRight()
                App.appController.setTitle(this.resource("accounts.processDeviceToken.title"))
                await this.super("onRouteMatched")
                await App.isInitialized()
                this.clear()

                this.info = App.prop("/redirect")
                if (!this.info) {
                    this.navBack("accounts.select")
                    return
                }
                App.prop("/redirect", undefined)
                const secret = this.info.deviceOnboardingInfo
                this.model = new JSONModel({
                    id: secret.id,
                    address: secret.identity.address,
                    name: secret.name,
                    description: secret.description,
                    createdAt: secret.createdAt
                })
                this.setModel(this.model)
                this.viewProp("/submitEnabled", true)
            },

            clear() {
                this.setModel(new JSONModel({}))
                this.viewProp("/submitEnabled", false)
                delete this.model
                delete this.info
            },

            async onSubmit() {
                try {
                    this.viewProp("/submitEnabled", false)
                    this.loadInc()
                    const secret = this.info.deviceOnboardingInfo
                    appLogger.trace(`Onboarding device ${secret.id} for identity ${secret.identity.address}...`)
                    const localAccount = await runtime.accountServices.onboardAccount(secret)
                    appLogger.trace(`Device onboarded. Logging in...`)
                    const account = await App.selectAccount(localAccount.id)
                    appLogger.trace(`Logged in. Navigating ...`)
                    App.navTo("accounts.select", "account.home", {
                        accountId: account.id
                    })
                } catch (e) {
                    App.error(e)
                } finally {
                    this.clear()
                    this.loadDec()
                }
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
