sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.account.Settings", {
        routeName: "account.settings",

        createViewModel() {
            return {
                submitEnabled: false,
                busy: false,
                delay: 0,
                accountName: "",
                address: "",
                devices: []
            }
        },

        onInitialized() {
            this.resetViewModel()
        },

        async onRouteMatched(oEvent) {
            this.clear()

            await this.super("onRouteMatched", oEvent)
            App.setMenuIcon()

            App.appController.clearRight()
            App.appController.setTitle(this.resource("settings.title"))
        },

        async refresh() {
            this.viewProp("/accountName", (await runtime.multiAccountController.getAccount(this.accountId)).name)
            this.prop("/accountid", this.accountId)

            this.viewProp("/address", App.account().identity.address.toString())

            const getDevicesResult = await runtime.currentSession.transportServices.devices.getDevices()
            if (getDevicesResult.isSuccess) {
                this.viewProp("/devices", getDevicesResult.value)
            }
        },

        clear() {
            this.super("clear")
        },

        async storeAccountName() {
            const newAccountName = this.byId("accountName").getValue()
            if (!newAccountName || !this.accountId) return
            await runtime.accountServices.renameAccount(this.accountId, newAccountName)
            this.refresh()
            if (App.mainmenu) {
                App.mainmenu.viewProp("/profileName", newAccountName)
            }
            this.showMessage({ sUserFriendlyMsg: this.resource("settings.renameError"), quick: true })
        },

        async toggleExpertMode() {
            const expMode = !(await this.account().info.get("expertMode"))
            await this.load(this.account().info.set("expertMode", expMode))
            this.getModel("acc").setProperty("/expertMode", expMode)
        },

        onDevicePress(oEvent) {
            const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
            const item = oItem.getBindingContext("v").getProperty()

            this.navTo("account.settings.device", { accountId: this.accountId, deviceId: item.id })
        },

        onCreateDevice(oEvent) {
            this.navTo("account.settings.createdevice", { accountId: this.accountId })
        },

        onNavButtonPress() {
            this.navBack()
        }
    })
})
