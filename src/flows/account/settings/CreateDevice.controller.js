sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/model/json/JSONModel"],
    (App, AccountController, JSONModel) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.settings.CreateDevice", {
            routeName: "account.settings.createdevice",

            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    submitAvailable: false
                }
            },

            onInitialized() {
                this.resetViewModel()
            },

            onCreateDevice() {
                const name = this.byId("name").getValue()
                const description = this.byId("description").getValue()
                const isAdmin = this.byId("isAdmin").getSelected()
                this.createDevice(name, description, isAdmin)
            },

            async createDevice(name, description, isAdmin) {
                this.viewProp("/submitAvailable", false)
                const createdDeviceResult = await runtime.currentSession.transportServices.devices.createDevice({
                    name: name,
                    description: description,
                    isAdmin: isAdmin
                })
                await runtime.currentSession.transportServices.account.syncDatawallet()
                if (createdDeviceResult.isSuccess) {
                    this.navTo(
                        "account.settings.device",
                        {
                            accountId: this.accountId,
                            deviceId: createdDeviceResult.value.id
                        },
                        true
                    )
                }
            },

            async onRouteMatched(oEvent) {
                this.clear()

                await this.super("onRouteMatched", oEvent)
                App.appController.clearRight()
                App.appController.setTitle(this.resource("settings.createDevice.title"))
                this.viewProp("/submitAvailable", true)
            },

            async refresh() {
                this.setModel(new JSONModel({}))
            },

            clear() {
                this.super("clear")
            },

            onNavButtonPress() {
                this.navBack("account.settings")
            }
        })
    }
)
