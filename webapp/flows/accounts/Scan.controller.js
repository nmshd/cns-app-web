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
                    this.navBack("accounts.onboardoverview")

                    return
                }

                await this.load(this.handleQRContent(scanResult.value))
            },

            async handleQRContent(truncatedReference) {
                truncatedReference = truncatedReference.trim()
                appLogger.trace("QR Code", truncatedReference)

                const prefix = truncatedReference.substr(0, 11)
                if (prefix === "nmshd://qr#" || prefix === "nmshd://tr#") {
                    truncatedReference = truncatedReference.substr(11)
                }

                switch (truncatedReference.substr(0, 4)) {
                    // Base64 for RLT
                    case "UkxU":
                        await this.handleRelationshipTemplateTruncatedReference(truncatedReference)
                        break

                    // Base64 for TOK
                    case "VE9L":
                        await this.handleTokenTruncatedReference(truncatedReference)
                        break

                    default:
                        App.navTo("accounts.select", "accounts.onboardwrongcode", {}, {})
                        break
                }
            },

            async handleRelationshipTemplateTruncatedReference(truncatedReference) {
                const templateReference = NMSHDTransport.RelationshipTemplateReference.fromTruncated(truncatedReference)

                App.navTo(
                    "accounts.select",
                    "accounts.processrelationshiptoken",
                    {},
                    { templateId: templateReference.id, secretKey: templateReference.key }
                )
            },

            async handleTokenTruncatedReference(truncatedReference) {
                const tokenResult = await runtime.anonymousServices.tokens.loadPeerTokenByTruncatedReference({
                    reference: truncatedReference
                })
                if (tokenResult.isError) {
                    return App.error(tokenResult.error)
                }

                const tokenDTO = tokenResult.value
                const content = tokenDTO.content

                switch (content["@type"]) {
                    default:
                        App.navTo("accounts.select", "accounts.onboardwrongcode", {}, {})
                        break
                    case "TokenContentDeviceSharedSecret":
                        App.navTo(
                            "accounts.select",
                            "accounts.processdevicetoken",
                            {},
                            { token: tokenDTO, sharedSecret: content.sharedSecret }
                        )
                        break
                    case "recovery":
                        App.navTo("accounts.select", "accounts.processrecoverytoken", {}, {})
                        break
                    case "TokenContentRelationshipTemplate":
                        App.navTo(
                            "accounts.select",
                            "accounts.processrelationshiptoken",
                            {},
                            { templateId: content.templateId, secretKey: content.secretKey }
                        )
                        break
                }
            },

            onNavButtonPress() {
                this.navBack("accounts.onboardoverview")
            }
        })
    }
)
