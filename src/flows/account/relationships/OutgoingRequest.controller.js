sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/model/json/JSONModel"],
    (App, AccountController, JSONModel) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.relationships.OutgoingRequest", {
            routeName: "account.outgoingrequest",

            createViewModel() {
                return {}
            },

            onInitialized() {
                this.resetViewModel()
            },

            async onRouteMatched(oEvent) {
                this.relationshipId = oEvent.getParameter("arguments").relationshipId
                await this.super("onRouteMatched", oEvent)
            },

            async refresh() {
                if (!this.relationshipId) return
                const model = await App.RelationshipUtil.getRelationship(this.relationshipId)
                if (!model) return
                this.identity = model
                const requestResult = await runtime.currentSession.consumptionServices.incomingRequests.getRequests({
                    query: { peer: model.getData().id }
                })
                if (requestResult.isError) {
                    return App.error(requestResult.error)
                }
                this.request = null
                const request = requestResult.value[0]
                if (request) {
                    const expandedRequest = await runtime.currentSession.expander.expandLocalRequestDTO(request)
                    this.request = expandedRequest
                }
                const mergedRequest = this.mergeRequestWithResponse(this.request)
                const requestModel = new JSONModel(mergedRequest)
                requestModel.setDefaultBindingMode("OneWay")
                this.request = requestModel

                this.setModel(model, "rel")
                this.setModel(requestModel)
            },

            mergeRequestWithResponse(request) {
                if (!request.response) return request
                request.items = this.mergeRequestsWithResponses(request.items, request.response.content.items)
                return request
            },

            mergeRequestsWithResponses(requestItems, responseItems) {
                if (!requestItems || !responseItems || requestItems.length !== responseItems.length)
                    throw new Error("request and response items must match")

                const mergedRequestItems = []
                for (let i = 0; i < requestItems.length; i++) {
                    const requestItem = requestItems[i]
                    const responseItem = responseItems[i]
                    if (requestItem["@type"] === "ShareAttributeRequestItem") {
                        requestItem.attribute.id = responseItem.attributeId
                    }
                    mergedRequestItems.push(this.mergeRequestItemWithResponseItem(requestItem, responseItem))
                }
                return mergedRequestItems
            },
            mergeRequestItemWithResponseItem(requestItem, responseItem) {
                if (requestItem.items) {
                    requestItem.items = this.mergeRequestsWithResponses(requestItem.items, responseItem.items)
                    return requestItem
                }
                requestItem.response = responseItem
                return requestItem
            },

            clear() {
                this.super("clear")
                this.identity = null
            },

            onNavButtonPress(oEvent) {
                this.navBack("account.relationships")
            }
        })
    }
)
