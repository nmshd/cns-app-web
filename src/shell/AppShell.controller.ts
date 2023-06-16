import SplitApp from "sap/m/SplitApp"
import View from "sap/ui/core/mvc/View"
import JSONModel from "sap/ui/model/json/JSONModel"
import App from "../core/App"
import IAppShellController from "../core/IAppShellController"
import RoutingController from "../core/RoutingController"

/**
 * @namespace nmshd.app.shell.AppShellController
 */
export default class AppShellController extends RoutingController implements IAppShellController {
    protected onLeftAction?: Function
    protected onRightAction?: Function
    protected wasHomeBefore: boolean = false
    protected _contentLoadingCounter: number = 0

    constructor() {
        super(AppShellController.name)

        this.routePattern = new RegExp(".*")
    }

    protected createViewModel() {
        return new JSONModel({
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
        })
    }

    protected async onInitialized() {
        //this.getView()!.addStyleClass(this.getOwnerComponent().getContentDensityClass())
        this.getView()!.addStyleClass("appAccounts")
        this.getView()!.removeStyleClass("appAccount")
        this._contentLoadingCounter = 0
        App.splitApp = this.byId("appComponent") as SplitApp

        App.registerAppController(this)
        /*
        this.getRouter().attachRouteMatched(this.onRouteMatched.bind(this))
        this.getRouter().attachBypassed(this.onBypassed.bind(this))
        */
        this.wasHomeBefore = true
        await App.isInitialized()
        App.Bus.subscribe("Content", "loadInc", this.onLoadInc, this)
        App.Bus.subscribe("Content", "loadDec", this.onLoadDec, this)

        runtime.nativeEnvironment.eventBus.publish(new JSSNative.ThemeEvent("#3d86f0", JSSNative.ThemeTextStyle.Light))
    }

    protected async onRouteMatched(oEvent: any) {
        const routeName = oEvent.getParameter("arguments")._name
        this.routeName = routeName
        if (window.appLogger) {
            appLogger.log("Selected RouteName", routeName)
        }
        if (routeName && routeName.startsWith("account.")) {
            this.viewProp("/showAccountNavigation", true)
            this.selectButton(routeName)
            this.getView()!.addStyleClass("appAccount")
            this.getView()!.removeStyleClass("appAccounts")
        } else {
            this.viewProp("/showAccountNavigation", false)
            this.viewProp("/styleClass", "appAccounts")
            this.getView()!.addStyleClass("appAccounts")
            this.getView()!.removeStyleClass("appAccount")
        }
        this.refreshHeader(routeName)
    }

    public deselectButtons() {
        this.viewProp("/selectStart", false)
        this.viewProp("/selectInbox", false)
        this.viewProp("/selectShare", false)
        this.viewProp("/selectContacts", false)
        this.viewProp("/selectProfile", false)
    }

    public selectButton(routeName: string) {
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
    }

    public setTitle(title: string) {
        if (!title) title = "Enmeshed"
        this.viewProp("/title", title)
    }

    clearLeft() {
        this.setLeft()
    }

    clearRight() {
        this.setRight()
    }

    setLeft(icon?: string, callback?: Function) {
        this.setLeftIcon(icon)
        this.setLeftAction(callback)
    }

    setRight(icon?: string, callback?: Function) {
        this.setRightIcon(icon)
        this.setRightAction(callback)
    }

    setLeftIcon(icon?: string) {
        this.viewProp("/leftIcon", icon)
    }

    setRightIcon(icon?: string) {
        this.viewProp("/rightIcon", icon)
    }

    setLeftAction(callback?: Function) {
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
    }

    setRightAction(callback?: Function) {
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
    }

    onDefaultLeftAction(oEvent: UIEvent) {
        appLogger.log("App.controller.onDefaultLeftAction")
        const currentController = (this.byId("appComponent")! as any).getCurrentPage().getController()
        if (currentController.onNavButtonPress) {
            currentController.onNavButtonPress.apply(currentController, [oEvent])
        }
    }

    onDefaultRightAction(oEvent: UIEvent) {
        appLogger.log("App.controller.onDefaultRightAction")
    }

    onLeftPress(oEvent: UIEvent) {
        if (this.onLeftAction) {
            this.onLeftAction(oEvent)
        } else {
            this.onDefaultLeftAction(oEvent)
        }
    }

    showBack() {
        this.viewProp("/showBack", true)
    }
    hideBack() {
        this.viewProp("/showBack", false)
    }

    onBackPress(oEvent: UIEvent) {
        const currentController = (
            (this.byId("appComponent") as SplitApp).getCurrentDetailPage() as View
        ).getController() as RoutingController
        if (currentController.onNavButtonPress) {
            currentController.onNavButtonPress.apply(currentController, [oEvent])
        }
    }

    onRightPress(oEvent: UIEvent) {
        if (this.onRightAction) {
            this.onRightAction(oEvent)
        } else {
            this.onDefaultRightAction(oEvent)
        }
    }

    refreshHeader(routeName: string) {
        App.setMenuIcon()
    }

    onBypassed(oEvent: UIEvent) {
        this.viewProp("/showAccountNavigation", false)
        this.refreshHeader("")
    }

    onLoadInc(oEvent: UIEvent) {
        this._contentLoadingCounter++
        const view = this.getView()
        if (view) {
            view.addStyleClass("loading")
        }
    }

    onLoadDec(oEvent: UIEvent) {
        if (this._contentLoadingCounter > 0) {
            this._contentLoadingCounter--
        }
        if (this._contentLoadingCounter <= 0) {
            const view = this.getView()
            if (view) {
                view.removeStyleClass("loading")
            }
        }
    }

    onLogout(oEvent: UIEvent) {
        this.navTo("accounts.select")
    }

    onNewLink(oEvent: UIEvent) {
        App.scan(App.accountId())
    }

    public toStart() {
        this.navTo("account.home", { accountId: App.accountId() })
    }
    public toInbox() {
        this.navTo("account.inbox", { accountId: App.accountId() })
    }
    public toCards() {
        this.navTo("account.cards", { accountId: App.accountId() })
    }
    public toContacts() {
        this.navTo("account.relationships", { accountId: App.accountId() })
    }
    public toProfile() {
        this.navTo("account.attributes", { accountId: App.accountId() })
    }
}
