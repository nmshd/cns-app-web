sap.ui.define(
    [],
    /** @returns {IUIBridge} */
    () => {
        "use strict"

        return {
            /**
             * @param {LocalAccountDTO} account
             * @param {IdentityDVO} relationship
             * @param {MessageDVO|MailDVO|RequestMailDVO} message
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
             * @param {IdentityDVO} relationship
             * @param {RelationshipChangeDTO} change
             */
            showRelationshipChange(account, relationship, change) {
                return new Promise((resolve, reject) => {
                    appLogger.trace("UIBridge.showRelationshipChange", account, relationship, change)

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
             * @param {RelationshipTemplateDVO} relationshipTemplate
             */
            showRelationshipTemplate(account, relationshipTemplate) {
                return new Promise((resolve) => {
                    resolve(undefined)
                })
            },
            /**
             * @param {TokenDTO} token
             */
            showDeviceOnboarding(token) {
                return new Promise((resolve) => {
                    resolve(undefined)
                })
            },
            /**
             * @param {TokenDTO} token
             */
            showRecovery(token) {
                return new Promise((resolve) => {
                    resolve(undefined)
                })
            },
            /**
             * @param {IdentityDVO} identity
             * @param {LocalAccountDTO=} account
             */
            showError(error, account) {
                return new Promise((resolve) => {
                    App.error(error)
                    resolve(undefined)
                })
            },
            requestAccountSelection(possibleAccounts, title, description) {
                return new Promise((resolve) => {
                    resolve(possibleAccounts[0])
                })
            }
        }
    }
)
