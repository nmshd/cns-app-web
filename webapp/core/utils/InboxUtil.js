sap.ui.define(["nmshd/app/core/utils/ItemUtil", "sap/ui/model/json/JSONModel"], (ItemUtil, JSONModel) => {
    "use strict"

    return ItemUtil.extend("nmshd.app.core.utils.InboxUtil", {
        async getInbox() {
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

            const requestResult = await runtime.currentSession.consumptionServices.incomingRequests.getRequests({
                query: {}
            })
            if (requestResult.isError) {
                App.error(requestResult.error)
                return
            }

            try {
                const messages = await runtime.currentSession.expander.expandMessageDTOs(messagesResult.value)
                const requests = []
                for (const request of requestResult.value) {
                    const requestDVO = await runtime.currentSession.expander.expandLocalRequestDTO(request)
                    if (requestDVO.createdBy.hasRelationship) {
                        requests.push(requestDVO)
                    }
                }

                // @ts-ignore
                const model = new JSONModel({ items: requests.concat(messages) })
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
        },
        async getInboxForRelationship(relationship) {
            const messagesResult = await runtime.currentSession.transportServices.messages.getMessages({
                query: {
                    participant: relationship.id,
                    "content.@type": "Mail"
                }
            })
            if (messagesResult.isError) {
                App.error(messagesResult.error)
                return
            }

            const requestResult = await runtime.currentSession.consumptionServices.incomingRequests.getRequests({
                query: {
                    peer: relationship.id
                }
            })
            if (requestResult.isError) {
                App.error(requestResult.error)
                return
            }

            try {
                const messages = await runtime.currentSession.expander.expandMessageDTOs(messagesResult.value)
                const requests = []
                for (const request of requestResult.value) {
                    requests.push(await runtime.currentSession.expander.expandLocalRequestDTO(request))
                }

                // @ts-ignore
                const model = new JSONModel({ items: requests.concat(messages) })
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
    })
})
