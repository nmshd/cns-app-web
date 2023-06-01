sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/model/json/JSONModel"],
    (App, AccountController, JSONModel) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.settings.Device", {
            routeName: "account.settings.device",

            onInitialized() {
                this.resetViewModel()
            },

            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    token: "",
                    status: ""
                }
            },

            async onRouteMatched(oEvent) {
                this.clear()

                this.deviceId = oEvent.getParameter("arguments").deviceId

                await this.super("onRouteMatched", oEvent)
                App.appController.clearRight()
                App.appController.setTitle(this.resource("settings.device.title"))
            },

            async refresh() {
                const getDeviceResult = await runtime.currentSession.transportServices.devices.getDevice({
                    id: this.deviceId
                })
                if (!getDeviceResult.isSuccess) return

                const device = getDeviceResult.value
                this.viewProp("/status", this.resource("settings.device.active"))

                if (!device.publicKey || !device.lastLoginAt) {
                    const tokenResult = await runtime.currentSession.transportServices.devices.getDeviceOnboardingToken(
                        {
                            id: this.deviceId
                        }
                    )

                    if (tokenResult.isSuccess) {
                        const tokenValue = tokenResult.value.truncatedReference
                        this.viewProp("/token", `nmshd://qr#${tokenValue}`)
                    }

                    this.viewProp("/status", this.resource("settings.device.status"))
                }

                this.device = new JSONModel(device)
                this.setModel(this.device)
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
