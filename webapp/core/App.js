/**
 * @typedef { import('@nmshd/runtime').RelationshipDVO} RelationshipDVO
 * @typedef { import('@nmshd/runtime').RelationshipChangeDTO} RelationshipChangeDTO
 * @typedef { import('@nmshd/runtime').RelationshipTemplateDTO} RelationshipTemplateDTO
 * @typedef { import('@nmshd/runtime').RelationshipTemplateDVO} RelationshipTemplateDVO
 * @typedef { import('@nmshd/runtime').MessageDVO} MessageDVO
 * @typedef { import('@nmshd/runtime').MailDVO} MailDVO
 * @typedef { import('@nmshd/runtime').IdentityDVO} IdentityDVO
 * @typedef { import('@nmshd/runtime').TokenDTO} TokenDTO
 * @typedef { import('@nmshd/app-runtime').LocalAccountDTO} LocalAccountDTO
 * @typedef { import('@nmshd/app-runtime').IUIBridge} IUIBridge
 */
sap.ui.define(
    [
        "nmshd/app/core/Event",
        "sap/ui/model/json/JSONModel",
        "sap/ui/Device",
        "sap/ui/core/message/Message",
        "sap/ui/core/MessageType",
        "nmshd/app/core/utils/RelationshipUtil",
        "nmshd/app/core/utils/RelationshipTemplateUtil",
        "nmshd/app/core/utils/MessageUtil",
        "nmshd/app/core/utils/InboxUtil",
        "nmshd/app/core/utils/FileUtil",
        "sap/base/security/URLWhitelist",
        "nmshd/app/core/UIBridge",
        "sap/ui/core/Fragment"
    ],
    (
        Event,
        JSONModel,
        Device,
        Message,
        MessageType,
        RelationshipUtil,
        RelationshipTemplateUtil,
        MessageUtil,
        InboxUtil,
        FileUtil,
        URLWhitelist,
        UIBridge,
        Fragment
    ) => {
        "use strict"

        let _initialized = false
        let _initializedPromise
        const finishInitialization = () => {
            _initialized = true
            _initializedPromise = undefined
        }

        let _transport = null
        let _localAccountPromise = null
        let _accounts = {}
        let _lastAccount = null
        let _relationship = null

        return {
            changeLanguage(oEvent) {
                const newLanguage = oEvent.getSource().getSelectedItem().mProperties.key
                sap.ui.getCore().getConfiguration().setLanguage(newLanguage)
                bootstrapper.nativeEnvironment.configAccess.set("language", newLanguage)
                bootstrapper.nativeEnvironment.configAccess.save()
                oEvent.getSource().setSelectedKey(newLanguage)
            },
            async accountSelectionCallbackDefault(account) {
                if (account) {
                    App.navTo("accounts.select", "account.home", { accountId: account.id.toString() })
                }

                this.accountSelectionCallback = null
            },
            async toSwitchProfile() {
                this.closeProfileMenu()
                this.accountSelectionCallback = this.accountSelectionCallbackDefault
                const localAccounts = await App.localAccountController().getAccounts()
                this.openAccountSelectionPopup(localAccounts, "", "")
            },
            setMenuIcon() {
                App.appController.setLeft("sap-icon://menu2", () => {
                    App.toggleProfileMenu()
                })
                App.appController.hideBack()
            },
            setBackIcon() {
                App.appController.setLeft("sap-icon://menu2", () => {
                    App.toggleProfileMenu()
                })
                App.appController.showBack()
            },
            toAccountSettings() {
                this.closeProfileMenu()
                this.openAccountSettingsPopup()
            },
            toPrivacy() {
                this.closeProfileMenu()
                this.openPrivacyPopup()
            },
            toLegal() {
                this.closeProfileMenu()
                this.openLegalPopup()
            },
            toImprint() {
                this.closeProfileMenu()
                this.openImprintPopup()
            },

            async onProfileMenuItemPress(oEvent) {
                const key = oEvent.getParameter("listItem").data("key")
                switch (key) {
                    case "app.switchProfile":
                        this.closeProfileMenu()
                        this.accountSelectionCallback = this.accountSelectionCallbackDefault
                        const localAccounts = await App.localAccountController().getAccounts()
                        this.openAccountSelectionPopup(localAccounts, "", "")

                        break
                    case "account.settings":
                        this.closeProfileMenu()
                        this.openAccountSettingsPopup()

                        break
                    case "app.privacy":
                        this.closeProfileMenu()
                        this.openPrivacyPopup()
                        /*
                        App.navTo("app.privacy")
                        */
                        break
                    case "app.legal":
                        this.closeProfileMenu()
                        this.openLegalPopup()
                        /*
                        App.navTo("app.legal")
                        */
                        break
                    case "app.imprint":
                        this.closeProfileMenu()
                        this.openImprintPopup()
                        /*
                        App.navTo("app.imprint")
                        */
                        break
                }
            },
            async setAppViewModel(control) {
                if (!control || !control.setModel) return
                if (!this.localAccount) {
                }
                const accountId = this.localAccount().id
                const localAccount = await App.localAccountController().getAccount(accountId)
                const name = localAccount.name || "Enmeshed"
                const address = App.account().identity.address.toString()

                const getDevicesResult = await runtime.currentSession.transportServices.devices.getDevices()
                let devices = []
                if (getDevicesResult.isSuccess) {
                    devices = getDevicesResult.value
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
            },
            setGlobalModels(control) {
                if (!control || !control.setModel) return
                const deviceModel = new JSONModel(Device)
                deviceModel.setDefaultBindingMode("OneWay")
                control.setModel(deviceModel, "d")

                const resourceModel = this.component.getModel("t")
                control.setModel(resourceModel, "t")
            },
            async openPrivacyPopup() {
                if (!this.privacyPopup) {
                    this.privacyPopup = await Fragment.load({
                        id: "privacyPopup",
                        name: "nmshd.app.flows.app.PrivacyPopup",
                        controller: this
                    })
                    await this.setAppViewModel(this.privacyPopup)
                    this.setGlobalModels(this.privacyPopup)
                }
                this.privacyPopup.open()
                this.privacyPopupOpen = true
                document.addEventListener("click", this.checkDocumentClick.bind(this))
            },
            async openLegalPopup() {
                if (!this.legalPopup) {
                    this.legalPopup = await Fragment.load({
                        id: "legalPopup",
                        name: "nmshd.app.flows.app.LegalPopup",
                        controller: this
                    })
                    await this.setAppViewModel(this.legalPopup)
                    this.setGlobalModels(this.legalPopup)
                }
                this.legalPopup.open()
                this.legalPopupOpen = true
                document.addEventListener("click", this.checkDocumentClick.bind(this))
            },
            async openImprintPopup() {
                if (!this.imprintPopup) {
                    this.imprintPopup = await Fragment.load({
                        id: "imprintPopup",
                        name: "nmshd.app.flows.app.ImprintPopup",
                        controller: this
                    })
                    await this.setAppViewModel(this.imprintPopup)
                    this.setGlobalModels(this.imprintPopup)
                }
                this.imprintPopup.open()
                this.imprintPopupOpen = true
                document.addEventListener("click", this.checkDocumentClick.bind(this))
            },
            async openProfileMenu() {
                this.split.showMaster()
                return
                if (!this.profileMenu) {
                    this.profileMenu = await Fragment.load({
                        id: "profileMenu",
                        name: "nmshd.app.flows.ProfileMenu",
                        controller: this
                    })
                    await this.setAppViewModel(this.profileMenu)
                    this.setGlobalModels(this.profileMenu)
                }
                this.profileMenu.open()
                this.profileMenuOpen = true
                document.addEventListener("click", this.checkDocumentClick.bind(this))
            },
            async openAccountSettingsPopup() {
                if (!this.accountSettings) {
                    this.accountSettings = await Fragment.load({
                        id: "accountSettings",
                        name: "nmshd.app.flows.account.AccountSettingsPopup",
                        controller: this
                    })
                    await this.setAppViewModel(this.accountSettings)
                    this.setGlobalModels(this.accountSettings)
                }
                this.accountSettings.open()
                this.accountSettingsOpen = true
                document.addEventListener("click", this.checkDocumentClick.bind(this))
            },
            async openAccountSelectionPopup(accounts, title, description) {
                if (!this.accountSelection) {
                    this.accountSelection = await Fragment.load({
                        id: "accountSelection",
                        name: "nmshd.app.flows.accounts.AccountSelectionPopup",
                        controller: this
                    })
                    await this.setAppViewModel(this.accountSelection)
                    this.setGlobalModels(this.accountSelection)
                    const model = this.accountSelection.getModel("v")
                    model.setProperty("/accountSelectionAccounts", accounts ? accounts : [])
                    model.setProperty("/accountSelectionTitle", title)
                    model.setProperty("/accountSelectionDescription", description)
                }
                this.accountSelection.open()
                this.accountSelectionOpen = true
                document.addEventListener("click", this.checkDocumentClick.bind(this))
            },
            checkDocumentClick(oEvent) {
                if (oEvent.target.id === "sap-ui-blocklayer-popup") {
                    this.closeProfileMenu()
                    this.closePrivacyPopup()
                    document.removeEventListener("click", this.checkDocumentClick)
                }
            },
            closePrivacyPopup() {
                if (this.privacyPopup) {
                    this.privacyPopup.close()
                }
                this.privacyPopupOpen = false
            },
            closeLegalPopup() {
                if (this.legalPopup) {
                    this.legalPopup.close()
                }
                this.legalPopupOpen = false
            },
            closeImprintPopup() {
                if (this.imprintPopup) {
                    this.imprintPopup.close()
                }
                this.imprintPopupOpen = false
            },
            closeAccountSettingsPopup() {
                if (this.accountSettings) {
                    this.accountSettings.close()
                }
                this.accountSettingsOpen = false
            },
            closeProfileMenu() {
                this.split.hideMaster()
                return
                if (this.profileMenu) {
                    this.profileMenu.close()
                }
                this.profileMenuOpen = false
            },

            closeAccountSelectionPopup() {
                if (this.accountSelection) {
                    this.accountSelection.close()
                }
                this.accountSelectionOpen = false
            },

            onAccountSelectionPress(oEvent) {
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
            },

            async onAccountSelectionCreate() {
                try {
                    appLogger.info("User decided for a new account to be created for an accountSelectionRequest.")
                    const accounts = await runtime.accountServices.getAccounts()
                    const resourceModel = this.component.getModel("t")

                    const accountname =
                        resourceModel.getProperty("accounts.processRelationshipToken.profile") + (accounts.length + 1)
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
            },
            async toggleProfileMenu() {
                if (this.profileMenuOpen) {
                    this.closeProfileMenu()
                } else {
                    this.openProfileMenu()
                }
            },
            deleteLogs() {
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
            },
            createModel(value) {
                try {
                    const m = new JSONModel()
                    m.setData(value)
                    return m
                } catch (e) {
                    appLogger.error(e)
                }
            },
            async selectRelationship(relationshipId, accountId) {
                if (!this.account(accountId)) {
                    throw new Error("You cannot select a relationship without selecting an account first.")
                }
                if (_relationship && _relationship.relationship.id === relationshipId) {
                    return _relationship
                }
                _relationship = (await App.RelationshipUtil.getRelationship(relationshipId)).getData()

                try {
                    appLogger.trace("Relationship '" + relationshipId + "' selected.")
                } catch (e) {
                    appLogger.error(e)
                }
            },

            async getInfoForAddress(address) {
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
            },

            async selectAccount(id, master) {
                if (id === _lastAccount) return Promise.resolve(runtime.currentAccount)
                if (_localAccountPromise) return _localAccountPromise
                const promise = new Promise(async (resolve, reject) => {
                    try {
                        const selectedAccountDTO = await runtime.selectAccount(id, master)

                        try {
                            const accountController = runtime.currentSession.accountController

                            _accounts[id] = accountController
                            _lastAccount = id
                            appLogger.trace(`Account '${id}' selected.`)

                            _localAccountPromise = null
                            resolve(runtime.currentAccount)
                        } catch (e) {
                            appLogger.error(e)
                            _localAccountPromise = null
                        }

                        Event.publish("App", "accountSelected", { id: id })
                        return true
                    } catch (e) {
                        reject(e)
                        appLogger.error(e)
                        Event.publish("App", "error", { error: e, code: "error.app.login" })
                        return false
                    }
                })
                _localAccountPromise = promise
                _localAccountPromise.catch((e) => {
                    _localAccountPromise = null
                    appLogger.error(e)
                    Event.publish("App", "error", { error: e, code: "error.app.login" })
                })
                return promise
            },
            localAccount() {
                return runtime.currentAccount
            },
            relationship() {
                return _relationship
            },
            account(accountId) {
                if (!accountId) {
                    accountId = _lastAccount
                }
                if (!accountId) {
                    return null
                }
                if (accountId && !_accounts[accountId]) {
                    return null
                }

                return _accounts[accountId]
            },
            accountId() {
                return _lastAccount
            },
            transport() {
                return _transport
            },

            localAccountController() {
                return runtime.multiAccountController
            },
            async isInitialized() {
                if (_initializedPromise) return _initializedPromise
                if (_initialized && runtime) return _initialized
                const timeout = 60000
                let timeoutTimer, currentTimer
                const promise = new Promise((resolve, reject) => {
                    timeoutTimer = setTimeout(() => {
                        reject(`Timeout of ${timeout}ms reached.`)
                        clearTimeout(currentTimer)
                    }, timeout)
                    function checkInitialized() {
                        if (_initialized && runtime) {
                            _initializedPromise = undefined
                            clearTimeout(timeoutTimer)
                            return resolve()
                        }
                        currentTimer = setTimeout(checkInitialized, 20)
                    }
                    checkInitialized()
                })
                _initializedPromise = promise
                _initializedPromise.catch((e) => {
                    _initializedPromise = null
                    appLogger.error(e)
                    Event.publish("App", "fatal", { error: e, code: "error.app.initialization" })
                })
                return promise
            },
            model: new JSONModel(),

            /**
             * Centrally navigates to the given route.
             *
             * @param {*} parentRoute The parent route which is required to have a correct back navigation chain
             * @param {*} routeName The route to navigate to
             * @param {*} navigationObject The navigation object
             * @param {*} object A possible object to store within the model
             */
            async navTo(parentRoute, routeName, navigationObject, object) {
                try {
                    const routerAvailable = await this.waitForRouter()
                    if (!routerAvailable) {
                        this.component.getRouter().initialize()
                    }
                    let hash = this.component.getRouter().getURL(parentRoute, navigationObject)
                    let count = this.countDeltaToHash(hash)
                    if (count === -500) {
                        //Parent route was not found in the history
                        await App.navAndReplaceHistory(0, [parentRoute, navigationObject])
                    } else if (count === -200) {
                        //No Initial parent route found
                        this.appController.navTo("accounts", navigationObject)
                        this.appController.navTo(parentRoute, navigationObject)
                    }
                    this.prop("/redirect", object)

                    let historyEntries = []
                    if (history && history.state && history.state.sap && history.state.sap.history) {
                        historyEntries = history.state.sap.history
                    }

                    if (count > 0) {
                        //parentRoute is n steps in the past, navigate n steps back, bevore navigating forward
                        await App.navAndReplaceHistory(1 - historyEntries.length, [routeName, navigationObject])
                    } else if (count === 0 || count === -500 || count === -200) {
                        //parentRoute is the current route, navigate forward only
                        await App.navAndReplaceHistory(0, [routeName, navigationObject])
                    } else {
                        await App.navAndReplaceHistory(count, [routeName, navigationObject])
                    }
                } catch (e) {
                    appLogger.error("A navigation is already in progress", e)
                }
            },
            countDeltaToHash(hash) {
                let rootRoutes = ["/app//accounts", "app//accounts", ""]
                let historyEntries = []
                if (history && history.state && history.state.sap && history.state.sap.history) {
                    historyEntries = history.state.sap.history
                }
                let delta = -500
                if (
                    historyEntries.length === 1 ||
                    (historyEntries.length === 2 && !rootRoutes.includes(historyEntries[1]))
                ) {
                    return -200
                }
                let rootDelta = -500
                for (let i = 0, l = historyEntries.length; i < l; i++) {
                    let historyEntry = historyEntries[i]
                    if (!hash || rootRoutes.includes(hash)) {
                        //If we do not have a hash (unknown route) or if the hash is a root route
                        if (rootRoutes.includes(historyEntry) || rootRoutes.includes("/" + historyEntry)) {
                            delta = i - l + 1
                            break
                        }
                    }

                    if (i === 0 && (!rootRoutes.includes(historyEntry) || !rootRoutes.includes("/" + historyEntry))) {
                        //Ignore the very first history item, if it is not one of the root routes
                        //This is especially important if we start the app with a direct route (no
                        //history to the root routes is available)
                        continue
                    }

                    if (historyEntry === hash) {
                        delta = i - l + 1

                        break
                    }

                    if ("/" + historyEntry === hash) {
                        delta = i - l + 1
                        if (rootRoutes.includes("/" + historyEntry)) {
                            rootDelta = delta
                        } else {
                            break
                        }
                    }

                    if (historyEntry === "/" + hash) {
                        delta = i - l + 1
                        if (rootRoutes.includes("/" + historyEntry)) {
                            rootDelta = delta
                        } else {
                            break
                        }
                    }
                }

                //Never navigate back to the very first empty point ("" in history)
                //iOS doesn't like this

                if (historyEntries.length + delta === 1) {
                    return delta + 1
                }

                return delta
            },

            navToDirect(location, navigationObject, object, phoneView) {
                const locationHash = this.component.getRouter().getURL(location, navigationObject)
                this.prop("/redirect", object)
                if (this.appController) {
                    const currentHash = this.appController.getCurrentHash()
                    if (
                        currentHash === locationHash ||
                        currentHash === "/" + locationHash ||
                        "/" + currentHash === locationHash
                    ) {
                        window.document.location.hash = "#"
                    } else {
                        /*
                        //Monkey Patching UI5 fix, not allowing stopped routers to navigate anymore
                        const router = this.appController.getRouter()
                        let changed = false
                        if (!router._bIsInitialized) {
                            changed = true
                            router._bIsInitialized = true
                        }
                        */
                        this.appController.navTo(location, navigationObject, phoneView)
                        /*
                        if (changed) {
                            router._bIsInitialized = false
                        }
                        */
                    }
                }
            },

            error(error, rootCause) {
                if (error) {
                    if (rootCause) appLogger.error(rootCause)
                    appLogger.error(error)
                    if (!this.isError) {
                        this.isError = true
                        this.navTo("accounts.select", "app.error", {
                            "?query": { code: error.code ? error.code : error }
                        })
                    }
                } else {
                    appLogger.error("ERROR", "Received unknown App.error call without any parameters.")
                    if (!this.isError) {
                        this.isError = true
                        this.navTo("accounts.select", "app.error")
                    }
                }
            },

            fatal(error, rootCause) {
                if (error) {
                    if (rootCause) appLogger.error(rootCause)
                    appLogger.error("FATAL", error)
                    if (!this.isError) {
                        this.isError = true
                        this.navTo("app.master", "app.fatal", {
                            "?query": { code: error.code }
                        })
                    }
                } else {
                    appLogger.error("FATAL", "Received unknown App.fatal call without any parameters.")
                    if (!this.isError) {
                        this.isError = true
                        this.navTo("app.master", "app.fatal")
                    }
                }
            },

            themeInfoForTemplate(template) {
                const identityThemeInfo = this.component.getModel("IdentityThemeInfo")
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
            },

            themeInfoForRelationship(relationship) {
                let template = ""
                if (relationship.getProperty) {
                    template = relationship.getProperty("/template/cache")
                } else if (relationship.template) {
                    template = relationship.template.cache
                }
                return this.themeInfoForTemplate(template)
            },

            scan(accountId) {
                this.navTo("account.home", "account.scan", { accountId: accountId }, null)
            },

            async tryNTimes(fn, tries, sleepBetween) {
                for (let i = 0; i < tries; i++) {
                    if (fn()) {
                        return true
                    }
                    await this.sleep(sleepBetween)
                }
                return false
            },

            async waitForRouter() {
                const router = this.component.getRouter()
                return await this.tryNTimes(router.isStopped.bind(router), 5, 20)
            },

            /**
             * Navigate to a certain point in the history (given delta) to a
             * specified route and route parameters (given array)
             *
             * @param {*} delta The delta of steps to navigate back (negative) or forth (positive)
             * @param {*} arrayOfArguments An array of arguments which is applied to App.navTo after
             * navigation. First item is the routeName, second is the route object, third is the
             * possible object which should be injected into the controller
             *
             */
            navAndReplaceHistory(delta, arrayOfArguments, resolveData) {
                const routerAvailable = this.component.getRouter().isStopped()
                if (!routerAvailable) {
                    this.component.getRouter().initialize()
                }
                const appControllerRouter = this.appController.getRouter().isStopped()
                if (!appControllerRouter) {
                    this.appController.getRouter().initialize()
                }
                appLogger.trace("Calling navAndReplaceHistory with delta " + delta)
                return new Promise(async (resolve, reject) => {
                    if (delta === 0) {
                        this.navToData = null
                        this.navToDirect.apply(this, arrayOfArguments)
                        resolve(resolveData)
                    } else {
                        if (this.navToData) {
                            const routerAvailable = await this.waitForRouter()
                            if (!routerAvailable) {
                                appLogger.error(
                                    `Router is stopped for navigating back ${delta} entries with data ` +
                                        Array.isArray(arrayOfArguments)
                                        ? arrayOfArguments.join(",")
                                        : JSON.stringify(arrayOfArguments)
                                )
                            }
                        }

                        this.component.getRouter().stop()
                        this.navToData = arrayOfArguments
                        this.navToResolveData = resolveData
                        this.navToCallback = () => {
                            this.navToData = null
                            this.navToCallback = null
                            resolve(this.navToResolveData)
                            this.navToResolveData = null
                        }

                        const oldHistory = history.state.sap.history
                        const oldHash = oldHistory[oldHistory.length - 1]
                        const newIndex = oldHistory.length - 1 + delta
                        const newHash = oldHistory[newIndex]
                        history.go(delta)
                        if (newHash && newHash === oldHash) {
                            appLogger.warn("Newhash === Oldhash!!!")
                            this.navToDirect.apply(this, this.navToData)
                            this.navToData = null
                            this.navToCallback()
                        }
                    }
                })
            },

            addToHistory(hash, arrayOfArguments, resolveData) {
                return new Promise((resolve, reject) => {
                    if (document.location.hash === "#" + hash) {
                        if (hash.substr(0, 1) === "/") {
                            hash = hash.substr(1)
                        } else {
                            hash = "/" + hash
                        }
                    }
                    this.component.getRouter().stop()
                    this.newHash = hash
                    this.navToData = arrayOfArguments
                    this.navToResolveData = resolveData
                    this.navToCallback = () => {
                        this.navToResolveData = null
                        this.navToCallback = null
                        setTimeout(() => {
                            resolve(this.navToResolveData)
                        }, 10)
                    }
                    document.location.hash = hash
                })
            },

            sleep(msec) {
                return new Promise((resolve, reject) => {
                    if (msec <= 0) resolve()
                    setTimeout(resolve, msec)
                })
            },

            getModel() {
                return this.model
            },

            messageReceived(message) {
                switch (message.data.body.type) {
                    default:
                        break
                    case "onboard":
                        appLogger.trace(message.data.body)
                        const customer = {}
                        customer.id = message.data.body.identity.id
                        customer.status = "request"
                        customer.attributes = message.data.body.attributes
                        customer.identity = message.data.body.identity
                        customer._date = new Date()

                        if (!customer.identity.title) {
                            customer.identity.title =
                                customer.attributes["Person.givenName"].value +
                                " " +
                                customer.attributes["Person.familyName"].value
                        }
                        App.profile.customers.create(customer)
                        App.profile.identities.create(customer.identity)
                        break
                }
            },

            async beforeUnloadListener(oEvent) {
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
            },

            async wipeLocalStorage() {
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
                        await indexedDB.deleteDatabase(database.name)
                    }
                }

                document.location = document.location
            },

            async initializeTransport() {
                if (
                    window.bootstrapper &&
                    window.bootstrapper.nativeEnvironment.platform === JSSNative.NativePlatform.Web
                ) {
                    window.addEventListener("beforeunload", this.beforeUnloadListener)
                }

                this.RelationshipUtil = new RelationshipUtil(this)
                this.RelationshipTemplateUtil = new RelationshipTemplateUtil(this)
                this.MessageUtil = new MessageUtil(this)
                this.InboxUtil = new InboxUtil(this)
                this.FileUtil = new FileUtil(this)

                appLogger.trace("Transport initialized")
            },

            hideSplashScreen() {
                if (
                    navigator.splashscreen &&
                    navigator.splashscreen.hide &&
                    typeof navigator.splashscreen.hide === "function"
                ) {
                    navigator.splashscreen.hide()
                }
            },

            async initializeApp(component) {
                const that = this

                URLWhitelist.add("tel")
                URLWhitelist.add("sms")
                URLWhitelist.add("geo")
                URLWhitelist.add("mailto")
                URLWhitelist.add("nmshd")
                URLWhitelist.add("http")
                URLWhitelist.add("https")

                if (location.hash) {
                    this.disableAutoAccountSelection = true
                }

                window.addEventListener(
                    "hashchange",
                    (event) => {
                        if (this.navToData) {
                            this.navToDirect.apply(this, this.navToData)
                            this.navToData = null
                        } else if (component && component.getRouter().isStopped()) {
                            component.getRouter().initialize()
                            if (this.navToCallback) {
                                this.navToCallback.apply(this, [])
                            }
                        }

                        if (this.newHash && "#" + this.newHash !== location.hash) {
                            Event.publish("App", "hashchange")
                            this.newHash = undefined
                        }
                    },
                    false
                )

                if (this.navToData) {
                    this.navToDirect.apply(this, this.navToData)
                    this.navToData = null
                }

                this.Bus = Event

                Event.publish("App", "initializeApp")
                this.component = component

                await window._bootstrapPromise

                this.applyTheme()

                await this.initializeTransport()

                finishInitialization()
                Event.publish("App", "ready")

                // Apply language stored in config
                const language = bootstrapper.nativeEnvironment.configAccess.get("language")
                if (language.isSuccess && language.value) {
                    sap.ui.getCore().getConfiguration().setLanguage(language.value)
                }

                runtime.registerUIBridge(UIBridge)
                runtime.nativeEnvironment.eventBus.publish(new JSSNative.AppReadyEvent())
                Event.publish("Shell", "switchTo", {
                    message: "",
                    redirect: "app"
                })
                //Fix app close if first entry is empty on Android
                if (Device.os.name === "Android") {
                    this.navToDirect("accounts")
                }

                this.hideSplashScreen()

                runtime.eventBus.subscribe(NMSHDAppRuntime.MailReceivedEvent, (event) => {
                    Event.publish("message", "refresh")
                })

                runtime.eventBus.subscribe(NMSHDAppRuntime.DatawalletSynchronizedEvent, (event) => {
                    Event.publish("datawallet", "refresh")
                    Event.publish("relationship", "refresh")
                    Event.publish("message", "refresh")
                })

                runtime.eventBus.subscribe(NMSHDAppRuntime.OnboardingChangeReceivedEvent, (event) => {
                    Event.publish("relationship", "refresh")
                })

                Event.subscribe("App", "fatal", (owner, message, data) => {
                    that.fatal(data)
                })

                Event.subscribe("App", "error", (owner, message, data) => {
                    that.error(data)
                })

                Event.subscribe("App", "navTo", (owner, message, data) => {
                    that.prop("/tmpObject", data.object)
                    that.navTo("accounts", data.redirect, data.navigationObject, data.object)
                })
            },

            registerAppController(controller) {
                this.appController = controller
                window.App = this
            },

            hideAllToasts() {
                const toasts = document.querySelectorAll(".sapMMessageToast")
                toasts.forEach((item) => (item.style = "display:none;"))
            },

            applyTheme() {
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
            },

            clear() {},

            logout() {
                this.clear()
                Event.publish("App", "logout")
                Event.publish("Shell", "switchTo", {
                    message: "",
                    redirect: "select"
                })
            },

            prop(prop, value) {
                //Get Prop
                if (typeof value === "undefined") {
                    return this.model.getProperty(prop)
                }
                //Set Prop
                else {
                    return this.model.setProperty(prop, value)
                }
            }
        }
    }
)
