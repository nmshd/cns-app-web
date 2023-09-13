sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/RoutingController", "sap/ui/core/Fragment"],
    (App, RoutingController, Fragment) => {
        "use strict"
        return RoutingController.extend("nmshd.app.flows.accounts.OnboardOverview", {
            routeNames: ["accounts.onboardoverview"],
            createViewModel() {
                const model = this.getOwnerComponent()?.getModel("ProjectSites")
                let privacyAcceptRequired = false
                let testAcceptRequired = false
                let testAcceptVisible = false
                if (model) {
                    privacyAcceptRequired = model.getProperty("/privacyAcceptRequired")
                    testAcceptRequired = model.getProperty("/testAcceptRequired")
                    testAcceptVisible = model.getProperty("/testAcceptVisible")
                }
                return {
                    busy: false,
                    delay: 0,
                    submitAvailable: true,
                    privacyAcceptRequired: !!privacyAcceptRequired,
                    privacyAccepted: !privacyAcceptRequired,
                    testAcceptVisible: testAcceptVisible,
                    testAcceptRequired: !!testAcceptRequired && testAcceptVisible,
                    testAccepted: !testAcceptRequired || !testAcceptVisible
                }
            },

            onPopupPress(oEvent) {
                this.navTo(oEvent.getParameter("listItem").data("key"))
            },

            onPrivacyChange() {
                const checkbox = this.byId("privacyConsentBox")
                this.viewProp("/privacyAccepted", checkbox.getSelected())
            },

            onTestChange() {
                const checkbox = this.byId("testConsentBox")
                this.viewProp("/testAccepted", checkbox.getSelected())
            },

            async onRouteMatched(oEvent) {
                App.setMenuIcon()
                App.appController.setTitle(this.resource("accounts.create.title"))
                await App.isInitialized()
                const aAccounts = await App.localAccountController().getAccounts()
                if (aAccounts.length >= 1) {
                    App.setMenuIcon()
                }
                await this.super("onRouteMatched")
                App.appController.setTitle(this.resource("accounts.create.title"))

                this.byId("privacyConsentBox").setSelected(false)
                this.byId("testConsentBox").setSelected(false)
                this.clear()
            },

            onCreate() {
                this.navTo("accounts.create")
            },

            onNavButtonPress() {
                this.navBack("accounts.select")
            },

            scan() {
                this.navTo("accounts.scan")
            },

            onNoCode() {
                //this.navTo("accounts.onboardnocode")
                this.create()
            },

            async create() {
                try {
                    this.loadInc()
                    this.viewProp("/submitAvailable", false)
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
                    this.navTo("account.home", {
                        accountId: this.accountId
                    })
                } catch (e) {
                    App.error(e)
                } finally {
                    this.loadDec()
                }
            },

            toEULA() {
                this.navTo("app.eula")
            },

            toPrivacy() {
                this.navTo("app.privacy")
            },

            navBackToCreate() {
                this.navBack("accounts.create")
            }
        })
    }
)
