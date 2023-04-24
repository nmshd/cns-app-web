sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "nmshd/app/core/Event", "sap/ui/core/Fragment"],
    (App, BaseController, Event, Fragment) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows_desktop.app.App", {
            createViewModel() {
                return {
                    busy: true,
                    delay: 0,
                    errorVisible: false,
                    errorMessage: "",
                    refreshVisible: true,
                    accountSelectionTitle: "",
                    accountSelectionDescription: "",
                    accountSelectionAccounts: []
                }
            },
            clear() {},
            onInitialized() {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())

                App.split = this.byId("appComponent")

                App.registerAppController(this)
            },

            onRouteChanged(oEvent) {
                this.super("onRouteChanged")
            },

            fatal(severity, message, category, object) {
                this.viewProp("/errorVisible", true)
                this.viewProp("/errorMessage", message)
            },

            setTitle() {},
            setLeft() {},
            setLeftAction() {},
            setLeftIcon() {},
            setRight() {},
            setRightAction() {},
            setRightIcon() {},
            clearLeft() {},
            clearRight() {},
            async openAccountSelectionPopup(accounts, title, description) {
                const oView = this.getView()
                this.viewProp("/accountSelectionAccounts", accounts ? accounts : [])
                this.viewProp("/accountSelectionTitle", title)
                this.viewProp("/accountSelectionDescription", description)

                const that = this
                if (!that.popups) {
                    that.popups = {}
                }
                const type = "AccountSelectionPopup"
                if (!that.popups[type]) {
                    const oDialog = await Fragment.load({
                        id: oView.getId(),
                        name: "nmshd.app.flows.accounts." + type,
                        controller: this
                    })
                    oView.addDependent(oDialog)
                    oDialog.open()
                    that.popups[type] = oDialog
                    that.currentPopup = oDialog
                } else {
                    that.popups[type].open()
                    that.currentPopup = that.popups[type]
                }
            },
            closeAccountSelectionPopup() {
                if (this.currentPopup) {
                    this.currentPopup.close()
                    this.currentPopup = null
                }
            },

            onAccountSelectionPress(oEvent) {
                try {
                    const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                    const prop = oItem.getBindingContextPath()
                    const selectedAccount = this.viewProp(prop)
                    appLogger.info(`User chose ${selectedAccount.name} with id ${selectedAccount.id}.`)
                    if (App.accountSelectionCallback) {
                        App.accountSelectionCallback(selectedAccount)
                    }
                } catch (e) {
                    App.error(e)
                } finally {
                    this.closeAccountSelectionPopup()
                }
            },

            async onAccountSelectionCreate() {
                try {
                    appLogger.info("User decided for a new account to be created for an accountSelectionRequest.")
                    const accounts = await runtime.accountServices.getAccounts()
                    const accountname =
                        this.resource("accounts.processRelationshipToken.profile") + (accounts.length + 1)
                    const oAccounts = await runtime.accountServices.createAccount(
                        NMSHDTransport.Realm.Prod,
                        accountname
                    )
                    this.localAccount = oAccounts
                    await App.selectAccount(this.localAccount.id, "")
                    appLogger.info(`Account ${this.localAccount.id} was created for account selection.`)
                    if (App.accountSelectionCallback) {
                        App.accountSelectionCallback(this.localAccount)
                    }
                } catch (e) {
                    App.error(e)
                } finally {
                    this.closeAccountSelectionPopup()
                }
            },
            onAccountSelectionClose() {
                this.closeAccountSelectionPopup()
                if (App.accountSelectionCallback) {
                    App.accountSelectionCallback()
                }
            }
        })
    }
)
