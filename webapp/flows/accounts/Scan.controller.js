sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "sap/ui/core/Fragment"],
    (App, AppController, Fragment) => {
        "use strict"
        return AppController.extend("nmshd.app.flows.accounts.Scan", {
            routeName: "accounts.scan",

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
                    // this.navBack("accounts.onboardoverview")
                    //App.navTo("", "accounts.onboardoverview")
                    window.history.go(-1)

                    return
                }

                App.enforceAccountCreation = true
                const processingResult = await this.load(runtime.stringProcessor.processURL(scanResult.value))
                App.enforceAccountCreation = false
                if (processingResult.isError) {
                    return App.error(processingResult.error)
                }
            },

            onNavButtonPress() {
                // this.navBack("accounts.onboardoverview")
                //App.navTo("", "accounts.onboardoverview")
                window.history.go(-1)
            }
        })
    }
)
