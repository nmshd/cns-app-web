sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "nmshd/app/core/Event", "sap/ui/core/Fragment"],
    (App, BaseController, Event, Fragment) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows_phone.app.App", {
            createViewModel() {
                return {
                    showAccountNavigation: false,
                    selectStart: false,
                    selectShare: false,
                    selectContacts: false,
                    selectProfile: false,
                    showBack: false,
                    title: "",
                    theme: {
                        image: "",
                        fontColor: "#ffffff",
                        fontStyle: "light",
                        backgroundColor: "#3d86f0"
                    },
                    leftIcon: "",
                    rightIcon: "",
                    styleClass: "appAccounts",
                    accountSelectionTitle: "",
                    accountSelectionDescription: "",
                    accountSelectionAccounts: []
                }
            },
            clear() {},
            async onInitialized() {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())
                this.getView().addStyleClass("appAccounts")
                this.getView().removeStyleClass("appAccount")
                this._contentLoadingCounter = 0
                App.split = this.byId("appComponent")

                App.registerAppController(this)
                App.Bus.subscribe("Content", "loadInc", this.onLoadInc, this)
                App.Bus.subscribe("Content", "loadDec", this.onLoadDec, this)
                this.getRouter().attachRouteMatched(this.onRouteMatched.bind(this))
                this.getRouter().attachBypassed(this.onBypassed.bind(this))
                this.wasHomeBefore = true
                await App.isInitialized()

                runtime.nativeEnvironment.eventBus.publish(
                    new JSSNative.ThemeEvent("#3d86f0", JSSNative.ThemeTextStyle.Light)
                )
            },

            deselectButtons() {
                this.viewProp("/selectStart", false)
                this.viewProp("/selectInbox", false)
                this.viewProp("/selectShare", false)
                this.viewProp("/selectContacts", false)
                this.viewProp("/selectProfile", false)
            },
            selectButton(routeName) {
                this.deselectButtons()

                if (routeName === "account.home") {
                    this.wasHomeBefore = true
                    this.viewProp("/selectStart", true)
                } else if (routeName === "account.inbox" || routeName === "account.relationship.message") {
                    this.wasHomeBefore = false
                    this.viewProp("/selectInbox", true)
                } else if (routeName.startsWith("account.cards")) {
                    this.wasHomeBefore = false
                    this.viewProp("/selectShare", true)
                } else if (
                    routeName.startsWith("account.relationship") ||
                    routeName.startsWith("account.outgoingrequest") ||
                    routeName.startsWith("account.incomingrequest") ||
                    routeName.startsWith("account.template")
                ) {
                    this.wasHomeBefore = false
                    this.viewProp("/selectContacts", true)
                } else if (
                    routeName.startsWith("account.profile") ||
                    routeName.startsWith("account.attributes") ||
                    routeName.startsWith("account.files")
                ) {
                    this.wasHomeBefore = false
                    this.viewProp("/selectProfile", true)
                }
            },

            setTitle(title) {
                if (!title) title = "Enmeshed"
                this.viewProp("/title", title)
            },

            clearLeft() {
                this.setLeft(null, null)
            },

            clearRight() {
                this.setRight(null, null)
            },

            setLeft(icon, callback) {
                this.setLeftIcon(icon)
                this.setLeftAction(callback)
            },

            setRight(icon, callback) {
                this.setRightIcon(icon)
                this.setRightAction(callback)
            },

            setLeftIcon(icon) {
                this.viewProp("/leftIcon", icon)
            },

            setRightIcon(icon) {
                this.viewProp("/rightIcon", icon)
            },

            setLeftAction(callback) {
                if (!callback) {
                    this.onLeftAction = undefined
                    return
                }

                if (typeof callback === "function") {
                    this.onLeftAction = callback
                } else {
                    appLogger.warn(
                        "AppController.setLeftAction was called without a callback function. You have to supply a valid function."
                    )
                    this.onLeftAction = undefined
                }
            },

            setRightAction(callback) {
                if (!callback) {
                    this.onRightAction = undefined
                    return
                }

                if (typeof callback === "function") {
                    this.onRightAction = callback
                } else {
                    appLogger.warn(
                        "AppController.setLeftAction was called without a callback function. You have to supply a valid function."
                    )
                    this.onRightAction = undefined
                }
            },

            onDefaultLeftAction(oEvent) {
                appLogger.log("App.controller.onDefaultLeftAction")
                const currentController = this.byId("appComponent").getCurrentPage().getController()
                if (currentController.onNavButtonPress) {
                    currentController.onNavButtonPress.apply(currentController, [oEvent])
                }
            },

            onDefaultRightAction(oEvent) {
                appLogger.log("App.controller.onDefaultRightAction")
            },

            onLeftPress(oEvent) {
                if (this.onLeftAction) {
                    this.onLeftAction(oEvent)
                } else {
                    this.onDefaultLeftAction(oEvent)
                }
            },

            showBack() {
                this.viewProp("/showBack", true)
            },
            hideBack() {
                this.viewProp("/showBack", false)
            },

            onBackPress(oEvent) {
                const currentController = this.byId("appComponent").getCurrentPage().getController()
                if (currentController.onNavButtonPress) {
                    currentController.onNavButtonPress.apply(currentController, [oEvent])
                }
            },

            onRightPress(oEvent) {
                if (this.onRightAction) {
                    this.onRightAction(oEvent)
                } else {
                    this.onDefaultRightAction(oEvent)
                }
            },

            refreshHeader(routeName) {
                App.setMenuIcon()
            },

            onLoadInc(oEvent) {
                this._contentLoadingCounter++
                const view = this.getView()
                if (view) {
                    view.addStyleClass("loading")
                }
            },

            onLoadDec(oEvent) {
                if (this._contentLoadingCounter > 0) {
                    this._contentLoadingCounter--
                }
                if (this._contentLoadingCounter <= 0) {
                    const view = this.getView()
                    if (view) {
                        view.removeStyleClass("loading")
                    }
                }
            },

            onLogout(oEvent) {
                App.navTo("accounts.select")
            },

            onNewLink(oEvent) {
                App.scan(App.accountId())
            },

            onBypassed(oEvent) {
                this.viewProp("/showAccountNavigation", false)
                this.refreshHeader("")
            },
            onRouteMatched(oEvent) {
                const routeName = oEvent.getParameter("name")
                this.routeName = routeName
                if (window.appLogger) {
                    appLogger.log("Selected RouteName", routeName)
                }
                if (routeName && routeName.startsWith("account.")) {
                    this.viewProp("/showAccountNavigation", true)
                    this.selectButton(routeName)
                    this.getView().addStyleClass("appAccount")
                    this.getView().removeStyleClass("appAccounts")
                } else {
                    this.viewProp("/showAccountNavigation", false)
                    this.viewProp("/styleClass", "appAccounts")
                    this.getView().addStyleClass("appAccounts")
                    this.getView().removeStyleClass("appAccount")
                }
                this.refreshHeader(routeName)
            },

            fatal(severity, message, category, object) {
                this.viewProp("/errorVisible", true)
                this.viewProp("/errorMessage", message)
            },

            toStart() {
                App.navTo("account.login", "account.home", { accountId: App.accountId() })
            },
            toInbox() {
                App.navTo("account.login", "account.inbox", { accountId: App.accountId() })
            },
            toCards() {
                App.navTo("account.login", "account.cards", { accountId: App.accountId() })
            },
            toContacts() {
                App.navTo("account.login", "account.relationships", { accountId: App.accountId() })
            },
            toProfile() {
                App.navTo("account.login", "account.attributes", { accountId: App.accountId() })
            }
        })
    }
)
