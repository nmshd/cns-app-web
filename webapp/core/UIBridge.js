/**
 * @typedef { import('@nmshd/runtime').DeviceOnboardingInfoDTO} DeviceOnboardingInfoDTO
 * @typedef { import('@nmshd/runtime').FileDVO} FileDVO
 */
sap.ui.define(
    [],
    /** @returns {IUIBridge} */
    () => {
        "use strict"

        return {
            /**
             * @param {LocalAccountDTO} account
             * @param {IdentityDVO} relationship
             * @param {MessageDVO|MailDVO} message
             */
            async showMessage(account, relationship, message) {
                return new Promise((resolve, reject) => {
                    appLogger.trace("UIBridge.showMessage", account, message)

                    App.navTo("account.relationship.home", "account.relationship.message", {
                        relationshipId: relationship.relationship.id,
                        accountId: account.id,
                        messageId: message.id
                    })
                    resolve(undefined)
                })
            },
            /**
             * @param {LocalAccountDTO} account
             * @param {IdentityDVO} relationship
             */
            showRelationship(account, relationship) {
                return new Promise((resolve, reject) => {
                    appLogger.trace("UIBridge.showRelationship", account, relationship)

                    if (
                        relationship.relationship.status === "Pending" &&
                        relationship.relationship.direction === "Outgoing"
                    ) {
                        App.navTo("account.relationships", "account.outgoingrequest", {
                            relationshipId: relationship.relationship.id,
                            accountId: account.id
                        })
                    } else if (
                        relationship.relationship.status === "Pending" &&
                        relationship.relationship.direction === "Incoming"
                    ) {
                        App.navTo("account.relationships", "account.incomingrequest", {
                            relationshipId: relationship.relationship.id,
                            accountId: account.id
                        })
                    } else {
                        App.navTo("account.relationships", "account.relationship.home", {
                            relationshipId: relationship.relationship.id,
                            accountId: account.id
                        })
                    }
                    resolve(undefined)
                })
            },

            /**
             * @param {LocalAccountDTO} account
             * @param {FileDVO} file
             */
            showFile(account, file) {
                return new Promise((resolve) => {
                    appLogger.trace("UIBridge.showFile", account, file)
                    App.navTo("account.files", "account.files.detail", { id: file.id, accountId: account.id })
                    resolve(undefined)
                })
            },
            /**
             * @param {DeviceOnboardingInfoDTO} deviceOnboardingInfo
             */
            showDeviceOnboarding(deviceOnboardingInfo) {
                return new Promise((resolve) => {
                    App.navTo(
                        "accounts.select",
                        "accounts.processdevicetoken",
                        {},
                        { deviceOnboardingInfo: deviceOnboardingInfo }
                    )
                    resolve(undefined)
                })
            },

            showRequest(account, request) {
                return new Promise((resolve) => {
                    appLogger.trace("UIBridge.showRequest", account, request)
                    App.navTo("account.relationships", "account.relationships.request", {
                        accountId: account.id,
                        requestId: request.id
                    })
                    resolve(undefined)
                })
            },

            /**
             * @param {any} error
             * @param {LocalAccountDTO} account
             */
            showError(error, account) {
                return new Promise((resolve) => {
                    App.error(error)
                    resolve(undefined)
                })
            },
            requestAccountSelection(possibleAccounts, title, description) {
                return new Promise(async (resolve) => {
                    if (App.accountSelectionCallback) {
                        App.error("app.uibridge.concurrentAccountSelection")
                        return
                    }
                    App.accountSelectionCallback = (account) => {
                        App.accountSelectionCallback = null
                        if (account) {
                            appLogger.info(
                                `UIBridge.requestAccountSelection: User selected account ${account.name} with id ${account.id}.`
                            )
                        } else {
                            appLogger.info(`UIBridge.requestAccountSelection: User cancelled the selection.`)
                        }
                        resolve(NMSHDAppRuntime.UserfriendlyResult.ok(account))
                    }
                    if (possibleAccounts.length === 0 || App.enforceAccountCreation) {
                        await App.navTo("accounts.select", "accounts.processrelationshiptoken", {})
                        return
                    }
                    App.appController.openAccountSelectionPopup(possibleAccounts, title, description)
                })
            }
        }
    }
)
