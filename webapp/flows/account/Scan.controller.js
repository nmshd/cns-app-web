sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/core/Fragment"],
    (App, AccountController, Fragment) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.Scan", {
            routeName: "account.scan",

            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    submitEnabled: false
                }
            },

            refresh() {
                this.runScanner()
            },

            async onRouteMatched(oEvent) {
                await this.super("onRouteMatched", oEvent)
            },

            async runScanner() {
                const scanResult = await runtime.nativeEnvironment.scannerAccess.scan()
                if (scanResult.isError) {
                    this.addError({
                        quick: true,
                        sUserFriendlyMsg: this.resource("account.scan.aborted")
                    })
                    this.navBack("account.relationships")

                    return
                }

                try {
                    await this.load(App.handleQRContentAsCurrentSession(scanResult.value))
                } catch (e) {
                    this.addError({
                        sUserFriendlyMsg: this.resource("scanController.retryError")
                    })
                    // QR Code parsing errors might occur
                    appLogger.error(e)
                    this.refresh()
                }
            },

            onNavButtonPress() {
                this.navBack("account.relationships")
            }
        })
    }
)
