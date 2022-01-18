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

        async onRouteMatched(oEvent) {
            this.clear()

            await this.super("onRouteMatched", oEvent)
            App.appController.clearRight()
            App.appController.setTitle("Einstellungen")
        },

        async refresh() {
            this.viewProp("/accountName", (await runtime.multiAccountController.getAccount(this.accountId)).name)
            this.prop("/accountid", this.accountId)

            this.viewProp("/address", App.account().identity.address.toString())

            const devices = await runtime.transportServices.devices.getDevices()
            if (!devices || devices.isError || !devices.value) {
            } else {
                this.viewProp("/devices", devices.value)
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
            App.appController.setTitle(newAccountName)
            this.addError({ sUserFriendlyMsg: "Das Profil wurde umbenannt.", quick: true })
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
