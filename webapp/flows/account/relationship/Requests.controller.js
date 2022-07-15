sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/relationship/RelationshipController",
        "sap/ui/model/json/JSONModel"
    ],
    (App, RelationshipController, JSONModel) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Requests", {
            routeName: "account.relationship.requests",

            async refresh() {
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                const incomingRequestsResult =
                    await runtime.currentSession.consumptionServices.incomingRequests.getRequests({
                        query: {
                            peer: this.relationshipIdentityDVO.id
                        }
                    })

                if (incomingRequestsResult.isError) {
                    App.error(incomingRequestsResult.error)
                    return
                }

                const outgoingRequestsResult =
                    await runtime.currentSession.consumptionServices.outgoingRequests.getRequests({
                        query: {
                            peer: this.relationshipIdentityDVO.id
                        }
                    })

                if (outgoingRequestsResult.isError) {
                    App.error(outgoingRequestsResult.error)
                    return
                }

                const requests = [...incomingRequestsResult.value, ...outgoingRequestsResult.value]
                requests.sort((a, b) => {
                    if (a.createdAt > b.createdAt) return 1
                    if (a.createdAt < b.createdAt) return -1
                    return 0
                })
                const expandedRequests = []
                for (const request of requests) {
                    expandedRequests.push(await runtime.currentSession.expander.expandLocalRequestDTO(request))
                }

                this.setModel(
                    new JSONModel({
                        items: expandedRequests
                    })
                )
            },

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const data = oItem.getBindingContext().getObject()

                this.navTo("account.relationship.request", { relationshipId: this.relationshipId, requestId: data.id })
            }
        })
    }
)
