import { DatawalletSynchronizedEvent, MailReceivedEvent, OnboardingChangeReceivedEvent } from "@nmshd/app-runtime"
import { DeviceDTO, RelationshipDVO } from "@nmshd/runtime"
import { CoreId } from "@nmshd/transport"
import URLListValidator from "sap/base/security/URLListValidator"
import Dialog from "sap/m/Dialog"
import SplitApp from "sap/m/SplitApp"
import Device from "sap/ui/Device"
import Control from "sap/ui/core/Control"
import Fragment from "sap/ui/core/Fragment"
import Model from "sap/ui/model/Model"
import JSONModel from "sap/ui/model/json/JSONModel"
import EventBus, { EventTypes } from "./EventBus"
import { IAppPopup, IAppPopupParams } from "./IAppPopup"
import IAppShellController from "./IAppShellController"
import { PopupType } from "./popups/PopupType"
import FileUtil from "./utils/FileUtil"
import InboxUtil from "./utils/InboxUtil"
import MessageUtil from "./utils/MessageUtil"
import RelationshipTemplateUtil from "./utils/RelationshipTemplateUtil"
import RelationshipUtil from "./utils/RelationshipUtil"

interface IDictionary<TValue> {
    [id: string]: TValue
}

/**
 * @namespace nmshd.app.core
 */
export default abstract class App {
    public static appReadyEventFired = false
    private static _initialized = false
    private static _initializedPromise?: Promise<unknown>
    private static _transport = null
    private static _localAccountPromise?: Promise<unknown>
    private static _lastAccount: string
    private static _relationship?: RelationshipDVO
    private static isError: boolean = false
    private static _accounts: IDictionary<any> = {}
    public static disableAutoAccountSelection: boolean = false
    public static enforceAccountCreation: boolean = false
    public static get accountSelectionPopupOpen() {
        return this._accountSelectionPopupOpen
    }
    private static _accountSelectionPopupOpen: boolean = false
    public static accountSelectionCallback?: Function
    private static accountSelectionPopup?: Dialog
    public static openByNotification: boolean = false

    private static profileMenuOpen: boolean = false
    public static splitApp?: SplitApp

    public static FileUtil: FileUtil
    public static InboxUtil: InboxUtil
    public static MessageUtil: MessageUtil
    public static RelationshipTemplateUtil: RelationshipTemplateUtil
    public static RelationshipUtil: RelationshipUtil

    public static temporaryNavigationCache?: any

    public static get appController(): IAppShellController {
        return this._appController
    }
    private static _appController: IAppShellController

    public static get model(): JSONModel {
        return this._model
    }
    private static _model: JSONModel

    public static Bus: EventBus
    public static component: any

    private static popups: Record<string, IAppPopup> = {}
    private static openPopups: Array<IAppPopup> = []

    public static async initializeApp(component: any) {
        this.resetAppModel()

        URLListValidator.add("tel")
        URLListValidator.add("sms")
        URLListValidator.add("geo")
        URLListValidator.add("mailto")
        URLListValidator.add("nmshd")
        URLListValidator.add("http")
        URLListValidator.add("https")

        if (location.hash) {
            this.disableAutoAccountSelection = true
        }

        this.Bus = new EventBus()
        this.Bus.init()

        this.Bus.publish("App", "initializeApp")
        this.component = component

        this.applyTheme()

        await this.initializeTransport()

        this.finishInitialization()

        this.Bus.publish("App", "ready")

        // Apply language stored in config
        const language = bootstrapper.nativeEnvironment.configAccess.get("language")
        if (language.isSuccess && language.value) {
            sap.ui.getCore().getConfiguration().setLanguage(language.value)
        }

        this.Bus.publish("Shell", "switchTo", {
            message: "",
            redirect: "app"
        })

        runtime.eventBus.subscribe(MailReceivedEvent, () => {
            this.Bus.publish("message", "refresh")
        })

        runtime.eventBus.subscribe(DatawalletSynchronizedEvent, () => {
            this.Bus.publish("datawallet", "refresh")
            this.Bus.publish("relationship", "refresh")
            this.Bus.publish("message", "refresh")
        })

        runtime.eventBus.subscribe(OnboardingChangeReceivedEvent, () => {
            this.Bus.publish("relationship", "refresh")
        })

        this.Bus.subscribe("App", "fatal", (owner: any, message: any, data: any) => {
            this.fatal(data)
        })

        this.Bus.subscribe("App", "error", (owner: any, message: any, data: any) => {
            this.error(data)
        })

        this.Bus.subscribe("App", "navTo", (owner: any, message: any, data: any) => {
            this.prop("/tmpObject", data.object)
            this.navTo(data.redirect, data.object, !!data.replace)
        })

        this.Bus.subscribe("App", EventTypes.AttributeInfoPressedEvent, async (owner: any, message: any, data: any) => {
            this.openPopup(PopupType.AttributeInfoPopup, data)
        })

        this.Bus.subscribe(
            "App",
            EventTypes.AttributeChangePressedEvent,
            async (owner: any, message: any, data: any) => {
                this.openPopup(PopupType.AttributeChangePopup, data)
            }
        )
        this.Bus.subscribe(
            "App",
            EventTypes.CreateAttributePressedEvent,
            async (owner: any, message: any, data: any) => {
                this.openPopup(PopupType.CreateAttributePopup, data)
            }
        )
    }

    public static async openPopup(type, content) {
        if (!this.popups) {
            this.popups = {}
        }
        let dialog = this.popups[type]
        let controller
        if (!dialog) {
            const newController = new (await import("nmshd/app/core/popups/" + type + ".controller")).default()

            dialog = (await Fragment.load({
                id: "appPopup_" + type,
                name: "nmshd.app.core.popups." + type,
                controller: newController
            })) as IAppPopup
            ;(dialog as any).controller = newController

            this.appController.getView()!.addDependent(dialog)
            this.popups[type] = dialog
        }
        controller = (dialog as any).controller
        this.setGlobalModels(dialog)

        if (controller && controller.refresh) {
            controller.refreshPopup(content as IAppPopupParams, dialog)
        } else {
            dialog.setModel(new JSONModel(content))
        }

        dialog.open()
        this.openPopups.push(dialog)
    }

    public static getIndexOfPopup(type) {
        const dialog = this.popups[type]
        return this.openPopups.findIndex((value: Dialog) => value === dialog)
    }

    public static closePopup(type) {
        const dialog = this.popups[type]
        if (!dialog) return
        dialog.close()
        this.openPopups.splice(this.getIndexOfPopup(type), 1)
    }
    public static closeTopmostPopup() {
        const dialog = this.openPopups.pop()
        if (!dialog) return
        dialog.close()
    }

    public static setMenuIcon() {
        App.appController.setLeft("sap-icon://menu2", () => {
            App.toggleProfileMenu()
        })
        App.appController.hideBack()
    }
    public static setBackIcon() {
        App.appController.setLeft("sap-icon://menu2", () => {
            App.toggleProfileMenu()
        })
        App.appController.showBack()
    }
    public static async openProfileMenu() {
        this.splitApp!.showMaster()
        this.profileMenuOpen = true
    }
    public static closeProfileMenu() {
        this.splitApp!.hideMaster()
        this.profileMenuOpen = false
    }
    public static async toggleProfileMenu() {
        if (this.profileMenuOpen) {
            this.closeProfileMenu()
        } else {
            this.openProfileMenu()
        }
    }

    private static finishInitialization() {
        this._initialized = true
        this._initializedPromise = undefined
    }

    public static changeLanguage(oEvent: any) {
        const newLanguage = oEvent.getSource().getSelectedItem().mProperties.key
        sap.ui.getCore().getConfiguration().setLanguage(newLanguage)
        bootstrapper.nativeEnvironment.configAccess.set("language", newLanguage)
        bootstrapper.nativeEnvironment.configAccess.save()
        oEvent.getSource().setSelectedKey(newLanguage)
    }

    public static async isInitialized(): Promise<unknown> {
        if (this._initializedPromise) return this._initializedPromise
        if (this._initialized && runtime) return this._initialized
        const timeout = 60000
        let timeoutTimer: NodeJS.Timeout, currentTimer: NodeJS.Timeout
        const that = this
        const promise = new Promise((resolve: Function, reject) => {
            timeoutTimer = setTimeout(() => {
                reject(`Timeout of ${timeout}ms reached.`)
                clearTimeout(currentTimer)
            }, timeout)
            function checkInitialized() {
                if (that._initialized && runtime) {
                    that._initializedPromise = undefined
                    clearTimeout(timeoutTimer)
                    return resolve()
                }
                currentTimer = setTimeout(checkInitialized, 20)
            }
            checkInitialized()
        })
        this._initializedPromise = promise
        this._initializedPromise.catch((e) => {
            this._initializedPromise = undefined
            appLogger.error(e)
            this.Bus.publish("App", "fatal", { error: e, code: "error.app.initialization" })
        })
        return promise
    }

    public static async waitForRouter() {
        const router = this.component.getRouter()
        return await this.tryNTimes(router.isStopped.bind(router), 5, 20)
    }

    public static async tryNTimes(fn: Function, tries: number, sleepBetween: number) {
        for (let i = 0; i < tries; i++) {
            if (fn()) {
                return true
            }
            await this.sleep(sleepBetween)
        }
        return false
    }

    public static applyTheme() {
        try {
            let sCurrentTheme = runtime.nativeEnvironment.configAccess.get("theme").value

            switch (sCurrentTheme) {
                default:
                    sCurrentTheme = "sap_fiori_3"
                    runtime.nativeEnvironment.configAccess.set("theme", sCurrentTheme)
                    runtime.nativeEnvironment.configAccess.save()
                    runtime.nativeEnvironment.eventBus.publish(
                        new JSSNative.ThemeEvent("#FFFFFF", JSSNative.ThemeTextStyle.Dark)
                    )

                case "sap_fiori_3":
                    runtime.nativeEnvironment.eventBus.publish(
                        new JSSNative.ThemeEvent("#FFFFFF", JSSNative.ThemeTextStyle.Dark)
                    )
                    break
                case "sap_fiori_3_dark":
                    runtime.nativeEnvironment.eventBus.publish(
                        new JSSNative.ThemeEvent("#29313a", JSSNative.ThemeTextStyle.Light)
                    )
                    break
            }
            //runtime.nativeEnvironment.configAccess.set("theme", "bird-wallet-theme")

            sap.ui.getCore().applyTheme("bird-wallet-theme")
        } catch (e) {
            appLogger.error(e)
        }
    }

    public static scan(accountId: string) {
        this.navTo("account.scan", { accountId: accountId })
    }
    public static themeInfoForTemplate(template: any) {
        const identityThemeInfo = this.component.getModel("IdentityThemeInfo") as JSONModel
        let customerId = "_default"
        if (identityThemeInfo && template) {
            const keys = Object.keys(identityThemeInfo.getData())
            if (typeof template === "string") {
                customerId = template
            } else {
                const peerAddress = template.createdBy
                const themeId = template.content.theme
                if (themeId) {
                    customerId = themeId
                } else {
                    switch (peerAddress) {
                        case "id18uvJcvg3jfuA5y8WUfaiqjuXjtbhYwd7c":
                            customerId = "daad"
                            break
                        case "id19wBAMRKF5V9eND7j2zNVC6Ca5ZJgbLRZr":
                            customerId = "gast"
                            break
                        case "id1FFc9482AsCJU5g389qPuT6tutVDyJQv5P":
                            customerId = "pape"
                            break
                        //test.is.enmeshed.eu
                        case "id1HhJmyTpcQi8ZEj1N9uvPDn8Zs5F6LxsvR":
                        //jss
                        case "id1EXctMcCmKCqcoAHT7Hqe5idADZ6WuUL8n":
                            customerId = "jss"
                            break
                    }
                }
            }
        }
        if (identityThemeInfo) {
            const themeInfo = identityThemeInfo.getProperty("/" + customerId)
            if (themeInfo) {
                return themeInfo
            }
        }
        return {
            image: "",
            fontColor: "#ffffff",
            fontStyle: "light",
            backgroundColor: "#3d86f0"
        }
    }
    /**
     * Navigates to the given target with given object's properties
     *
     * @param target The target route name
     * @param object The parameter object for the given route
     * @param replace Whether or not the history should be replaced (true) or appended (default, false)
     */
    public static navTo(target: string, object: any = {}, replace: boolean = false) {
        return this.component.getRouter().navTo(target, object, !!replace)
    }

    public static themeInfoForRelationship(relationship: any) {
        let template = ""
        if (relationship.getProperty) {
            template = relationship.getProperty("/template/cache")
        } else if (relationship.template) {
            template = relationship.template.cache
        }
        return this.themeInfoForTemplate(template)
    }

    public static resetAppModel(): JSONModel {
        let appModel = this.createAppModel() as JSONModel

        if (!(appModel instanceof Model)) {
            appModel = new JSONModel(appModel)
        }

        appModel.setDefaultBindingMode("OneWay")
        this._model = appModel
        return appModel
    }

    protected static createAppModel(): Model {
        return new JSONModel({})
    }

    public static createDefaultViewModel(): JSONModel {
        const owner = App.appController.getOwnerComponent()

        let themeInfo = {
            image: "",
            fontColor: "#ffffff",
            fontStyle: "light",
            backgroundColor: "#3d86f0"
        }
        if (owner) {
            const identityThemeInfos = owner.getModel("IdentityThemeInfo")
            if (identityThemeInfos) {
                themeInfo = identityThemeInfos.getProperty("/_default")
            }
        }
        return new JSONModel({
            busy: false,
            errorVisible: false,
            errorMessage: "",
            refreshVisible: true,
            theme: themeInfo
        })
    }

    public static async selectRelationship(relationshipId: string, accountId: string) {
        if (!this.account(accountId)) {
            throw new Error("You cannot select a relationship without selecting an account first.")
        }
        // TODO: Check, was this._relationship.relationship.id before
        if (this._relationship && this._relationship.id === relationshipId) {
            return this._relationship
        }
        this._relationship = (await App.RelationshipUtil.getRelationship(relationshipId))!.getData()

        try {
            appLogger.trace("Relationship '" + relationshipId + "' selected.")
        } catch (e) {
            appLogger.error(e)
        }
    }

    public static async getInfoForAddress(address: string) {
        if (address == this.account().account.identityId.toString()) {
            return {
                title: "You",
                status: "self",
                initials: "Me",
                type: "self"
            }
        }
        const entry = await this.account().addressBook.getEntryByIdentityId(address)
        if (entry) {
            return entry.info
        } else {
            return {
                title: address.toString().substr(0, 8),
                status: "unknown",
                initials: address.toString().substr(3, 2),
                type: "unknown"
            }
        }
    }

    public static async wipeLocalStorage() {
        // Do not stop runtime when refreshing
        window.removeEventListener("beforeunload", this.beforeUnloadListener)
        // Runtime must stop to flush the database before localStorage wipe
        await runtime.stop()
        if (window.localStorage) {
            localStorage.clear()
        }
        if (window.indexedDB) {
            const databases = await indexedDB.databases()
            for (const database of databases) {
                await indexedDB.deleteDatabase(database.name!)
            }
        }

        document.location = document.location
    }

    public static async selectAccount(id: string, master: string) {
        if (id === this._lastAccount) return Promise.resolve(runtime.currentAccount)
        if (this._localAccountPromise) return this._localAccountPromise
        const promise = new Promise(async (resolve, reject) => {
            try {
                const selectedAccountDTO = await runtime.selectAccount(id, master)

                try {
                    const accountController = runtime.currentSession.accountController

                    this._accounts[id] = accountController
                    this._lastAccount = id
                    appLogger.trace(`Account '${id}' selected.`)

                    this._localAccountPromise = undefined
                    resolve(runtime.currentAccount)
                } catch (e) {
                    appLogger.error(e)
                    this._localAccountPromise = undefined
                }

                this.Bus.publish("App", "accountSelected", { id: id })
                return true
            } catch (e) {
                reject(e)
                appLogger.error(e)
                this.Bus.publish("App", "error", { error: e, code: "error.app.login" })
                return false
            }
        })
        this._localAccountPromise = promise
        this._localAccountPromise.catch((e) => {
            this._localAccountPromise = undefined
            appLogger.error(e)
            this.Bus.publish("App", "error", { error: e, code: "error.app.login" })
        })
        return promise
    }
    public static registerAppController(controller: IAppShellController) {
        this._appController = controller
        window.App = this
    }

    public static async openAccountSelectionPopup(accounts: LocalAccountDTO[], title?: string, description?: string) {
        appLogger.info("Account selection popup opened.")
        if (!this.accountSelectionPopup) {
            this.accountSelectionPopup = (await Fragment.load({
                id: "accountSelection",
                name: "nmshd.app.flows.accounts.AccountSelectionPopup",
                controller: this
            })) as Dialog
        }
        await this.setAppViewModel(this.accountSelectionPopup)
        this.setGlobalModels(this.accountSelectionPopup)
        const model = this.accountSelectionPopup.getModel("v") as JSONModel
        model.setProperty("/accountSelectionAccounts", accounts ? accounts : [])
        model.setProperty("/accountSelectionTitle", title)
        model.setProperty("/accountSelectionDescription", description)
        this.accountSelectionPopup.open()
        this._accountSelectionPopupOpen = true
        document.addEventListener("click", this.checkDocumentClick.bind(this))
    }

    private static async setAppViewModel(control: Control) {
        if (!control || !control.setModel) return
        let accountId, name, address
        let devices: DeviceDTO[] = []
        try {
            accountId = this.getCurrentAccount().id
            const localAccount = await App.localAccountController().getAccount(CoreId.from(accountId))
            name = localAccount.name || "Enmeshed"
            address = App.account().identity.address.toString()
            const getDevicesResult = await runtime.currentSession.transportServices.devices.getDevices()

            if (getDevicesResult.isSuccess) {
                devices = getDevicesResult.value
            }
        } catch (e) {
            // Ignore errors if no account is selected
        }

        const viewModel = new JSONModel({
            appVersion: runtime.nativeEnvironment.configAccess.get("version").value,
            runtimeVersion: NMSHDAppRuntime.buildInformation.version,
            profileName: name,
            accountName: name,
            accountId: accountId,
            address: address,
            devices: devices,
            language: bootstrapper.nativeEnvironment.configAccess.get("language").value
        })

        viewModel.setDefaultBindingMode("OneWay")
        control.setModel(viewModel, "v")
    }

    private static setGlobalModels(control: Control) {
        if (!control || !control.setModel) return

        const deviceModel = new JSONModel(Device)
        deviceModel.setDefaultBindingMode("OneWay")
        control.setModel(deviceModel, "d")

        const resourceModel = this.component.getModel("t")
        control.setModel(resourceModel, "t")
    }

    private static checkDocumentClick(oEvent: any) {
        if (oEvent.target.id === "sap-ui-blocklayer-popup") {
            this.closeAccountSelectionPopup()
            document.removeEventListener("click", this.checkDocumentClick)
        }
    }

    public static async accountSelectionCallbackDefault(account: LocalAccountDTO) {
        if (account) {
            App.navTo("account.home", {
                accountId: account.id.toString()
            })
        }

        this.accountSelectionCallback = undefined
    }

    public static onAccountSelectionPress(oEvent: any) {
        try {
            const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
            const prop = oItem.getBindingContextPath()
            const selectedAccount = oEvent.getSource().getModel("v").getProperty(prop)
            appLogger.info(`User chose ${selectedAccount.name} with id ${selectedAccount.id}.`)
            if (App.accountSelectionCallback) {
                App.accountSelectionCallback(selectedAccount)
            }
        } catch (e) {
            App.error(e)
        } finally {
            this.closeAccountSelectionPopup()
        }
    }

    public static async onAccountSelectionCreate() {
        try {
            appLogger.info("User decided for a new account to be created for an accountSelectionRequest.")
            const accounts = await runtime.accountServices.getAccounts()
            const resourceModel = this.component.getModel("t")

            const accountname =
                resourceModel.getProperty("accounts.processRelationshipToken.profile") + (accounts.length + 1)
            const createdAccountDTO = await runtime.accountServices.createAccount(
                NMSHDTransport.Realm.Prod,
                accountname
            )
            await App.selectAccount(createdAccountDTO.id, "")
            appLogger.info(`Account ${this.currentAccount.id} was created for account selection.`)
            if (App.accountSelectionCallback) {
                App.accountSelectionCallback(this.currentAccount)
            }
        } catch (e) {
            App.error(e)
        } finally {
            this.closeAccountSelectionPopup()
        }
    }
    public static onAccountSelectionClose() {
        this.closeAccountSelectionPopup()
        if (App.accountSelectionCallback) {
            App.accountSelectionCallback()
        }
    }

    public static closeAccountSelectionPopup() {
        if (this.accountSelectionPopup) {
            this.accountSelectionPopup.close()
        }
        this._accountSelectionPopupOpen = false
    }

    public static hideAllToasts() {
        const toasts = document.querySelectorAll(".sapMMessageToast")
        toasts.forEach((item: any) => (item.style = "display:none;"))
    }
    public static getCurrentAccount() {
        return runtime.currentAccount
    }
    public static get currentAccount() {
        return runtime.currentAccount
    }
    public static relationship() {
        return this._relationship
    }
    public static hideSplashScreen() {
        if (
            navigator.splashscreen &&
            navigator.splashscreen.hide &&
            typeof navigator.splashscreen.hide === "function"
        ) {
            navigator.splashscreen.hide()
        }
    }
    public static async initializeTransport() {
        if (window.bootstrapper && window.bootstrapper.nativeEnvironment.platform === JSSNative.NativePlatform.Web) {
            window.addEventListener("beforeunload", this.beforeUnloadListener)
        }

        this.RelationshipUtil = new RelationshipUtil()
        this.RelationshipTemplateUtil = new RelationshipTemplateUtil()
        this.MessageUtil = new MessageUtil()
        this.InboxUtil = new InboxUtil()
        this.FileUtil = new FileUtil()

        appLogger.trace("Transport initialized")
    }

    private static async beforeUnloadListener() {
        try {
            if (
                window.bootstrapper &&
                window.bootstrapper.nativeEnvironment.platform === JSSNative.NativePlatform.Web
            ) {
                await runtime.stop()
            }
        } catch (e) {
            appLogger.error(e)
        }
    }
    public static account(accountIdParam?: string) {
        let accountId = accountIdParam
        if (!accountId) {
            accountId = this._lastAccount
        }
        if (!accountId) {
            return null
        }
        if (accountId && !this._accounts[accountId]) {
            return null
        }

        return this._accounts[accountId]
    }
    public static accountId() {
        return this._lastAccount
    }
    public static transport() {
        return this._transport
    }
    public static localAccountController() {
        return runtime.multiAccountController
    }
    public static clear() {}
    public static logout() {
        this.clear()
        this.Bus.publish("App", "logout")
        this.Bus.publish("Shell", "switchTo", {
            message: "",
            redirect: "select"
        })
    }
    public static prop(prop: string, value: any) {
        //Get Prop
        if (typeof value === "undefined") {
            return this.model.getProperty(prop)
        }
        //Set Prop
        else {
            return this.model.setProperty(prop, value)
        }
    }

    public static error(error: any, rootCause?: string | any) {
        if (error) {
            if (rootCause) appLogger.error(rootCause)
            appLogger.error(error)
            if (!this.isError) {
                this.isError = true
                this.navTo(
                    "app.error",
                    {
                        "?query": { code: error.code ? error.code : error }
                    },
                    true
                )
            }
        } else {
            appLogger.error("ERROR", "Received unknown App.error call without any parameters.")
            if (!this.isError) {
                this.isError = true
                this.navTo("app.error", {}, true)
            }
        }
    }

    public static fatal(error: any, rootCause?: string | any) {
        if (error) {
            if (rootCause) appLogger.error(rootCause)
            appLogger.error("FATAL", error)
            if (!this.isError) {
                this.isError = true
                this.navTo(
                    "app.fatal",
                    {
                        "?query": { code: error.code }
                    },
                    true
                )
            }
        } else {
            appLogger.error("FATAL", "Received unknown App.fatal call without any parameters.")
            if (!this.isError) {
                this.isError = true
                this.navTo("app.fatal", {}, true)
            }
        }
    }

    public static sleep(msec: number) {
        return new Promise((resolve: Function, reject: Function) => {
            if (msec <= 0) resolve()
            setTimeout(resolve, msec)
        })
    }

    public static deleteLogs() {
        const loggers = [
            "Account",
            "Transport",
            "DeviceSecret",
            "Messages",
            "MultiAccountController",
            "RESTClient",
            "RelationshipSecret",
            "Relationships"
        ]
        for (const logger of loggers) {
            delete localStorage[`logs-Transport.${logger}`]
        }
        delete localStorage["logs"]
        delete localStorage["logs-app"]
        delete localStorage["logs-config"]
    }
}
