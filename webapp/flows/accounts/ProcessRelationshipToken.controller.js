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
                App.appController.setLeft("sap-icon://nav-back", null)
                App.appController.clearRight()
                App.appController.setTitle("Kontakt Code")

                this.viewProp("/submitAvailable", false)
                await this.super("onRouteMatched")
                await App.isInitialized()
                this.clear()

                try {
                    this.loadInc()
                    this.info = App.prop("/redirect")
                    if (!this.info) {
                        this.navBack("accounts.select")
                        return
                    }
                    App.prop("/redirect", null)
                    const accounts = await runtime.accountServices.getAccounts()
                    const accountname = "Profil " + (accounts.length + 1)
                    const oAccounts = await runtime.accountServices.createAccount(
                        NMSHDTransport.Realm.Prod,
                        accountname
                    )
                    try {
                        this.localAccount = oAccounts
                        await App.selectAccount(this.localAccount.id, "")
                        await runtime.transportServices.account.disableAutoSync()
                        this.accountId = this.localAccount.id

                        this.templatetoken = this.info.token.content
                        this.templatetoken.secretKey = NMSHDCrypto.CoreBuffer.fromUtf8(
                            JSON.stringify(this.templatetoken.secretKey)
                        ).toBase64URL()
                        const templateResult =
                            await runtime.transportServices.relationshipTemplates.loadPeerRelationshipTemplate({
                                id: this.templatetoken.templateId,
                                secretKey: this.templatetoken.secretKey
                            })
                        if (!templateResult || templateResult.isError || !templateResult.value) {
                        } else {
                            this.template = templateResult.value
                        }
                    } catch (e) {
                        App.error(e)
                        return
                    } finally {
                        if (runtime.transportServices) {
                            runtime.transportServices.account.enableAutoSync()
                        }
                    }

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
                App.navTo("account.home", "account.template", {
                    accountId: this.accountId,
                    relationshipId: this.template.id
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
