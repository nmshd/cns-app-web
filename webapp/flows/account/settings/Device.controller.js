sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/model/json/JSONModel"],
    (App, AccountController, JSONModel) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.settings.Device", {
            routeName: "account.settings.device",

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
                App.appController.setTitle("Gerätedetails") // TODO:
            },

            async refresh() {
                const result = await runtime.transportServices.devices.getDevice({ id: this.deviceId })
                if (!result || result.isError || !result.value) {
                } else {
                    const device = result.value
                    this.viewProp("/status", "Aktiv") // TODO:

                    if (!device.publicKey || !device.lastLoginAt) {
                        const tokenResult = await runtime.transportServices.devices.getDeviceOnboardingToken({
                            id: this.deviceId
                        })
                        if (!tokenResult || tokenResult.isError || !tokenResult.value) {
                        } else {
                            const tokenValue = tokenResult.value.truncatedReference
                            this.viewProp("/token", `nmshd://qr#${tokenValue}`)
                        }
                        this.viewProp("/status", "Noch nicht zugewiesen") // TODO:
                    }
                    this.device = new JSONModel(device)
                    this.setModel(this.device)
                }
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
