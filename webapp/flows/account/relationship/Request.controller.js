sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/relationship/RelationshipController",
        "sap/ui/model/json/JSONModel"
    ],
    (App, RelationshipController, JSONModel) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Request", {
            routeName: "account.relationship.request",

            async onRouteMatched(oEvent) {
                this.clear()
                await RelationshipController.prototype.onRouteMatched.apply(this, [oEvent, true])

                this.requestId = this.viewProp("/route/requestId")
                await this.refresh()
            },

            async refresh() {
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                let requestResult = await runtime.currentSession.consumptionServices.incomingRequests.getRequest({
                    id: this.requestId
                })
                if (requestResult.isError) {
                    requestResult = await runtime.currentSession.consumptionServices.outgoingRequests.getRequest({
                        id: this.requestId
                    })
                }
                if (requestResult.isError) {
                    App.error(requestResult.error)
                    return
                }

                const request = requestResult.value
                const expandedRequest = await runtime.currentSession.expander.expandLocalRequestDTO(request)
                this.request = expandedRequest

                this.setModel(new JSONModel(expandedRequest))
            }
        })
    }
)
