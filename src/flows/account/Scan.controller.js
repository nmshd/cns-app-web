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

            onInitialized() {
                this.resetViewModel()
            },

            refresh() {
                this.runScanner()
            },

            async onRouteMatched(oEvent) {
                await this.super("onRouteMatched", oEvent)
            },

            async runScanner() {
                // @ts-ignore
                const scanResult = await runtime.nativeEnvironment.scannerAccess.scan()
                if (scanResult.isError) {
                    this.showMessage({
                        quick: true,
                        sUserFriendlyMsg: this.resource("account.scan.aborted")
                    })
                    //this.navBack("account.relationships")
                    window.history.go(-1)

                    return
                }

                try {
                    const processingResult = await this.load(
                        runtime.stringProcessor.processURL(scanResult.value, runtime.currentAccount)
                    )
                    if (processingResult.isError) {
                        return App.error(processingResult.error)
                    }
                } catch (e) {
                    this.showMessage({
                        sUserFriendlyMsg: this.resource("scanController.retryError")
                    })
                    // QR Code parsing errors might occur
                    appLogger.error(e)
                    this.refresh()
                }
            },

            onNavButtonPress() {
                window.history.go(-1)
                //this.navBack("account.relationships")
            }
        })
    }
)
