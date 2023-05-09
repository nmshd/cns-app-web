sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.MainMenu", {
        routePattern: new RegExp(".*"),

        onInitialized(oEvent) {
            this.byId("version").attachBrowserEvent("tap", this.tapIncrease.bind(this))
            App.mainmenu = this
        },

        tapIncrease() {
            this.taps++
            if (this.taps > 5) {
                this.navTo("app.debug")
            }
        },

        toggle() {
            App.closeProfileMenu()
        },

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                showProfile: false,
                profileName: "BIRD Wallet",
                appVersion: "...",
                runtimeVersion: NMSHDAppRuntime.buildInformation.version,
                language: "en"
            }
        },

        scan() {
            App.navTo("account.login", "account.scan", { accountId: this.accountId })
            App.closeProfileMenu()
        },

        scanWithinAccount() {
            this.navTo("account.scan", {
                accountId: this.accountId
            })
            App.closeProfileMenu()
        },

        toAccountSettings() {
            App.navTo("account.home", "account.settings", {
                accountId: this.accountId
            })
            App.closeProfileMenu()
        },
        toAbout() {
            this.navTo("app.about")
            App.closeProfileMenu()
        },
        toPrivacy() {
            this.navTo("app.privacy")
            App.closeProfileMenu()
        },
        toLegal() {
            this.navTo("app.legal")
            App.closeProfileMenu()
        },
        toImprint() {
            this.navTo("app.imprint")
            App.closeProfileMenu()
        },
        toCreateProfile() {
            this.navTo("accounts.onboardoverview")
            App.closeProfileMenu()
        },
        toSelect() {
            App.navTo("", "accounts.select")
            App.closeProfileMenu()
        },

        async onRouteMatched(oEvent) {
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
                this.byId("language").setSelectedKey(autoLanguage)
            }
            let language = bootstrapper.nativeEnvironment.configAccess.get("language")
            if (language.isSuccess && language.value) {
                this.byId("language").setSelectedKey(language.value)
            }

            this.viewProp("/appVersion", bootstrapper.nativeEnvironment.configAccess.get("version").value)
            this.viewProp("/language", bootstrapper.nativeEnvironment.configAccess.get("language").value)
        },

        async refresh() {
            // @ts-ignore
            if (runtime.isLoggedIn() && this.accountId) {
                const accountId = this.accountId
                const localAccount = await App.localAccountController().getAccount(accountId)
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
        },

        clear() {
            this.super("clear")
        },

        onItemPress(oEvent) {
            this.navTo(oEvent.getParameter("listItem").data("key"))
        },

        onNavButtonPress() {
            App.navTo("", "accounts.select")
        },

        async changeLanguage() {
            const newLanguage = this.byId("language").getSelectedItem().mProperties.key
            sap.ui.getCore().getConfiguration().setLanguage(newLanguage)
            bootstrapper.nativeEnvironment.configAccess.set("language", newLanguage)
            bootstrapper.nativeEnvironment.configAccess.save()
            App.appController.setTitle(this.resource("app.masterController.title"))
        }
    })
})
