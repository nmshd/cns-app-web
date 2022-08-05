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
                    await this.load(this.handleQRContent(scanResult.value))
                } catch (e) {
                    this.addError({
                        sUserFriendlyMsg: this.resource("scanController.retryError")
                    })
                    // QR Code parsing errors might occur
                    appLogger.error(e)
                    this.refresh()
                }
            },

            async handleQRContent(truncatedReference) {
                truncatedReference = truncatedReference.trim()
                appLogger.trace("QR Code", truncatedReference)

                const prefix = truncatedReference.substr(0, 11)
                if (prefix === "nmshd://qr#" || prefix === "nmshd://tr#") {
                    truncatedReference = truncatedReference.substr(11)
                }

                const result = await runtime.currentSession.transportServices.account.loadItemFromTruncatedReference({
                    reference: truncatedReference
                })
                if (result.isError) return App.error(result.error)

                switch (result.value.type) {
                    case "File":
                        this.navTo("account.files.detail", { id: result.value.value.id })
                        break
                    case "RelationshipTemplate":
                        await this.handleRelationshipTemplate(result.value.value)
                        break
                    case "Token":
                    case "DeviceOnboardingInfo":
                        // error (this cant be handled while logged in)
                        this.addError({
                            sUserFriendlyMsg: this.resource("scanController.retryError")
                        })
                        break
                }
            },

            /**
             * @param {RelationshipTemplateDTO} relationshipTemplateDTO
             */
            async handleRelationshipTemplate(relationshipTemplateDTO) {
                try {
                    await App.navAndReplaceHistory(-1, [
                        "account.template",
                        {
                            accountId: this.accountId,
                            relationshipId: relationshipTemplateDTO.id
                        }
                    ])
                } catch (e) {
                    appLogger.log("Navigation is already in progress", e)
                }
            },

            onNavButtonPress() {
                this.navBack("account.relationships")
            }
        })
    }
)
