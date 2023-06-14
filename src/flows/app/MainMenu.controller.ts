import { CoreId } from "@nmshd/transport"
import Control from "sap/ui/core/Control"
import App from "../../core/App"
import RoutingController from "../../core/RoutingController"

/**
 * @namespace nmshd.app.flows.app
 */
export default class MainMenuController extends RoutingController {
    private taps: number = 0
    private accountId?: string

    constructor() {
        super(MainMenuController.name)

        this.routePattern = new RegExp(".*")
    }

    protected createViewModel() {
        return {
            busy: false,
            delay: 0,
            showProfile: false,
            profileName: "BIRD Wallet",
            appVersion: "...",
            runtimeVersion: NMSHDAppRuntime.buildInformation.version,
            language: "en"
        }
    }

    protected onInitialized() {
        ;(this.byId("version")! as Control).attachBrowserEvent("tap", this.tapIncrease.bind(this))
    }

    tapIncrease() {
        this.taps++
        if (this.taps > 5) {
            this.navTo("app.debug")
        }
    }

    toggle() {
        App.closeProfileMenu()
    }

    scan() {
        this.navTo("account.scan", { accountId: this.accountId })
        App.closeProfileMenu()
    }

    navToAccountOrApp(accountRoute, appRoute) {
        const navigateToRoute = this.accountId ? accountRoute : appRoute
        this.navTo(navigateToRoute, {
            accountId: this.accountId
        })
        App.closeProfileMenu()
    }

    scanWithinAccount() {
        this.navToAccountOrApp("account.scan", "app.scan")
    }

    toAccountSettings() {
        this.navToAccountOrApp("account.settings", "app.settings")
    }
    toAbout() {
        this.navToAccountOrApp("account.about", "app.about")
    }
    toPrivacy() {
        this.navToAccountOrApp("account.privacy", "app.privacy")
    }
    toLegal() {
        this.navToAccountOrApp("account.legal", "app.legal")
    }
    toImprint() {
        this.navToAccountOrApp("account.imprint", "app.imprint")
    }
    toCreateProfile() {
        this.navTo("accounts.onboardoverview")
        App.closeProfileMenu()
    }
    toSelect() {
        this.navTo("accounts.select")
        App.closeProfileMenu()
    }

    async onRouteMatched(oEvent: any) {
        App.setMenuIcon()
        App.appController.clearRight()
        App.appController.setTitle(this.resource("app.masterController.title"))
        this.accountId = oEvent.getParameter("arguments").accountId
        if (this.accountId) {
            await App.selectAccount(this.accountId, "")
        }
        this.taps = 0
        await this.super("onRouteMatched", oEvent)

        let autoLanguage = sap.ui.getCore().getConfiguration().getLanguage()
        if (autoLanguage) autoLanguage = autoLanguage.substring(0, 2)
        if (autoLanguage) {
            ;(this.byId("language")! as any).setSelectedKey(autoLanguage)
        }
        let language = bootstrapper.nativeEnvironment.configAccess.get("language")
        if (language.isSuccess && language.value) {
            ;(this.byId("language")! as any).setSelectedKey(language.value)
        }

        this.viewProp("/appVersion", bootstrapper.nativeEnvironment.configAccess.get("version").value)
        this.viewProp("/language", bootstrapper.nativeEnvironment.configAccess.get("language").value)
    }

    async refresh() {
        // @ts-ignore
        if (runtime.isLoggedIn() && this.accountId) {
            const accountId = this.accountId
            const localAccount = await App.localAccountController().getAccount(CoreId.from(accountId))
            const name = localAccount.name || "Enmeshed"
            this.accountId = accountId

            if (this.accountId) {
                this.viewProp("/showProfile", true)
                this.viewProp("/profileName", name)
                this.viewProp("/accountId", this.accountId)
                return
            }
        }

        this.viewProp("/showProfile", false)
        this.viewProp("/profileName", "BIRD Wallet")
        this.viewProp("/accountId", "")
    }

    clear() {
        super.clear()
    }

    onItemPress(oEvent: any) {
        this.navTo(oEvent.getParameter("listItem").data("key"))
    }

    onNavButtonPress() {
        this.navTo("accounts.select")
    }

    async changeLanguage() {
        const newLanguage = (this.byId("language")! as any).getSelectedItem().mProperties.key
        sap.ui.getCore().getConfiguration().setLanguage(newLanguage)
        bootstrapper.nativeEnvironment.configAccess.set("language", newLanguage)
        bootstrapper.nativeEnvironment.configAccess.save()
        App.appController.setTitle(this.resource("app.masterController.title"))
    }
}
