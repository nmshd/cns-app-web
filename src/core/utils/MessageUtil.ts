import JSONModel from "sap/ui/model/json/JSONModel"
import App from "../App"

export default class MessageUtil {
    async getMessage(id: string) {
        if (!id) {
            App.error({
                code: "error.app.noIdProvided",
                message: "No id has been provided."
            })
            return
        }

        const messageResult = await runtime.currentSession.transportServices.messages.getMessage({
            id: id
        })
        if (messageResult.isError) {
            App.error(messageResult.error)
            return
        }
        try {
            const message = await runtime.currentSession.expander.expandMessageDTO(messageResult.value)
            const model = new JSONModel(message)
            return model
        } catch (e) {
            App.error(
                {
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                },
                e
            )
            return
        }
    }

    async getReceivedMessages() {
        /*
                const syncResult = await runtime.currentSession.transportServices.account.syncEverything()
                if (syncResult.isError) {
                    App.error(syncResult.error)
                    return
                }
                */

        const messagesResult = await runtime.currentSession.transportServices.messages.getMessages({
            query: {
                "recipients.address": runtime.currentAccount.address,
                "content.@type": "Mail"
            }
        })
        if (messagesResult.isError) {
            App.error(messagesResult.error)
            return
        }
        try {
            const messages = await runtime.currentSession.expander.expandMessageDTOs(messagesResult.value)
            const model = new JSONModel({ items: messages })
            return model
        } catch (e) {
            App.error(
                {
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                },
                e
            )
            return
        }
    }

    async getMessagesByRelationship(relationshipId: string) {
        /*
                const syncResult = await runtime.currentSession.transportServices.account.syncEverything()
                if (syncResult.isError) {
                    App.error(syncResult.error)
                    return
                }
                */

        const messagesResult = await runtime.currentSession.transportServices.messages.getMessages({
            query: {
                "recipient.relationshipId": relationshipId,
                "content.@type": "Mail"
            }
        })
        if (messagesResult.isError) {
            App.error(messagesResult.error)
            return
        }
        try {
            const messages = await runtime.currentSession.expander.expandMessageDTOs(messagesResult.value)
            const model = new JSONModel({ items: messages })
            return model
        } catch (e) {
            App.error(
                {
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                },
                e
            )
            return
        }
    }
}
