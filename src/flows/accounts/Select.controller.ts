import App from "../../core/App"
import RoutingController from "../../core/RoutingController"

/**
 * @namespace nmshd.app.flows.accounts
 */
export default class SelectController extends RoutingController {
    private redirectedOnStart: boolean = false

    constructor() {
        super(SelectController.name)

        this.routeNames = [
            "",
            "accounts",
            "accounts.settings",
            "accounts.select",
            "accounts.create",
            "accounts.onboardoverview",
            "accounts.onboardnocode",
            "accounts.onboardwrongcode",
            "accounts.processdevicetoken",
            "accounts.processrecoverytoken",
            "accounts.processrelationshiptoken",
            "accounts.scan",
            "home",
            "account.login"
        ]
    }

    protected createViewModel() {
        return {
            busy: false,
            delay: 0,
            navigation: [],
            items: []
        }
    }

    public onPopupPress(oEvent: any) {
        this.navTo(oEvent.getParameter("listItem").data("key"))
    }

    public navBackToSelect() {
        this.navBack("accounts")
    }

    async routeRedirect() {
        const aAccounts = await App.localAccountController().getAccounts()
        if (aAccounts.length === 1) {
            this.navTo("account.home", { accountId: aAccounts[0].id.toString() })
        } else if (aAccounts.length === 0) {
            this.navTo("app.about")
        }
    }

    async onRouteMatched(oEvent: any) {
        App.appController.setTitle()
        const currentRouteName = oEvent.getParameter("arguments")._name
        switch (currentRouteName) {
            case undefined:
            case "":
            case "accounts":
            case "accounts.select":
                App.setMenuIcon()
                break
            default:
                App.setBackIcon()
                break
        }
        App.appController.setRight()

        this.clear()

        await super.onRouteMatched(oEvent)

        await this.autoNavIfPossible()
    }

    async autoNavIfPossible() {
        if (
            App.disableAutoAccountSelection ||
            this.redirectedOnStart ||
            App.openByNotification ||
            window.openedByOpenUrlEvent
        ) {
            return
        }

        // TODO
        if (this.viewProp("/route/_name")) return

        // routeName is undefined/empty if we start the app the first time or if no route is found -> redirect
        this.redirectedOnStart = true
        await this.routeRedirect()
    }

    onCreate() {
        //App.navTo("accounts.select", "accounts.onboardoverview")
        this.navTo("accounts.onboardoverview")
    }

    async refresh() {
        appLogger.trace("Loading accounts...")
        const accs = await App.localAccountController().getAccounts()
        this.viewProp("/items", accs)
    }

    onItemPress(oEvent: any) {
        const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
        const prop = oItem.getBindingContextPath()
        const acc = this.viewProp(prop)

        // App.navTo("account.login", "account.home", { accountId: acc.id.toString() })
        this.navTo("account.home", { accountId: acc.id.toString() })
    }

    onNavButtonPress(oEvent: any) {
        this.navBack("accounts")
    }
}
