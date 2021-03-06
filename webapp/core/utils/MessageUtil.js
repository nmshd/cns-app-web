sap.ui.define(["nmshd/app/core/utils/ItemUtil", "sap/ui/model/json/JSONModel"], (ItemUtil, JSONModel) => {
    "use strict"

    return ItemUtil.extend("nmshd.app.core.utils.MessageUtil", {
        async getMessage(id) {
            if (!id) {
                App.error({
                    code: "error.app.noIdProvided",
                    message: "No id has been provided."
                })
                return
            }

            const messageResult = await runtime.transportServices.messages.getMessage({
                id: id
            })
            if (messageResult.isError) {
                App.error(messageResult.error)
                return
            }
            try {
                const message = await runtime.expander.expandMessageDTO(messageResult.value)
                console.log(message)
                const model = new JSONModel(message)
                return model
            } catch (e) {
                App.error({
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                })
                return
            }
        },

        async getReceivedMessages() {
            /*
                const syncResult = await runtime.transportServices.account.syncEverything()
                if (syncResult.isError) {
                    App.error(syncResult.error)
                    return
                }
                */

            const ownIdentity = await runtime.transportServices.account.getIdentityInfo()
            if (ownIdentity.isError) {
                App.error(ownIdentity.error)
                return
            }

            const messagesResult = await runtime.transportServices.messages.getMessages({
                query: {
                    "recipients.address": ownIdentity.value.address
                }
            })
            if (messagesResult.isError) {
                App.error(messagesResult.error)
                return
            }
            try {
                const messages = await runtime.expander.expandMessageDTOs(messagesResult.value)
                console.log(messages)
                const model = new JSONModel({ items: messages })
                return model
            } catch (e) {
                App.error({
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                })
                return
            }
        },

        async getMessagesByRelationship(relationshipId) {
            /*
                const syncResult = await runtime.transportServices.account.syncEverything()
                if (syncResult.isError) {
                    App.error(syncResult.error)
                    return
                }
                */

            const messagesResult = await runtime.transportServices.messages.getMessages({
                query: {
                    relationshipIds: relationshipId
                }
            })
            if (messagesResult.isError) {
                App.error(messagesResult.error)
                return
            }
            try {
                const messages = await runtime.expander.expandMessageDTOs(messagesResult.value)
                console.log(messages)
                const model = new JSONModel({ items: messages })
                return model
            } catch (e) {
                App.error({
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                })
                return
            }
        }
    })
})
