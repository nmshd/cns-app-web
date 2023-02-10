sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/relationship/RelationshipController",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/Formatter"
    ],
    (App, RelationshipController, JSONModel) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Request", {
            routeName: "account.relationship.request",

            createViewModel() {
                return {
                    error: false,
                    acceptEnabled: false,
                    rejectEnabled: false,
                    requestRunning: false,
                    editable: false
                }
            },

            getResponseParams() {
                const value = this.byId("request").getResponseParams()
                return value
            },

            getRejectResponseParams() {
                const value = this.byId("request").getRejectResponseParams()
                return value
            },

            async onRouteMatched(oEvent) {
                this.clear()
                await RelationshipController.prototype.onRouteMatched.apply(this, [oEvent, true])

                this.requestId = this.viewProp("/route/requestId")
                await this.refresh()
            },

            async checkCanAccept() {
                if (!this.relationshipIdentityDVO || !this.request) return
                const responseParams = this.getResponseParams()
                const canAcceptResult = await runtime.currentSession.consumptionServices.incomingRequests.canAccept(
                    responseParams
                )
                if (canAcceptResult.isSuccess) {
                    if (canAcceptResult.value.isSuccess) {
                        this.byId("acceptButton").setEnabled(true)
                        this.setMessage()
                        return
                    }
                    this.byId("acceptButton").setEnabled(false)
                    this.setMessage(canAcceptResult.value.items[0].message, "Error")
                    console.warn("Cannot Accept", canAcceptResult.value.items)
                } else {
                    this.byId("acceptButton").setEnabled(false)
                    this.setMessage(canAcceptResult.error, "Error")
                    console.warn("Cannot Accept", canAcceptResult.error)
                }
            },

            async checkCanReject() {
                if (!this.relationshipIdentityDVO || !this.request) return
                const responseParams = this.getRejectResponseParams()
                const canRejectResult = await runtime.currentSession.consumptionServices.incomingRequests.canReject(
                    responseParams
                )
                if (canRejectResult.isSuccess) {
                    if (canRejectResult.value.isSuccess) {
                        this.byId("rejectButton").setEnabled(true)
                        this.setMessage()
                        return
                    }
                    this.byId("rejectButton").setEnabled(false)
                    this.setMessage(canRejectResult.value.items[0].message, "Error")
                    console.warn("Cannot Reject", canRejectResult.value.items)
                } else {
                    this.byId("rejectButton").setEnabled(false)
                    this.setMessage(canRejectResult.error, "Error")
                    console.warn("Cannot Reject", canRejectResult.error)
                }
            },

            async onChange(oEvent) {
                await this.checkCanAccept()
                await this.checkCanReject()
            },

            setMessage(message, type) {
                const strip = this.byId("message")
                if (!message) {
                    strip.setText("")
                    strip.setVisible(false)
                } else {
                    strip.setText(message)
                    strip.setVisible(true)
                    strip.setType(type)
                }
            },

            async refresh() {
                this.setMessage()

                this.viewProp("/error", false)
                this.viewProp("/editable", false)
                this.viewProp("/acceptEnabled", false)
                this.viewProp("/rejectEnabled", false)
                this.viewProp("/requestRunning", false)

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

                const mergedRequest = this.mergeRequestWithResponse(this.request)

                const model = new JSONModel(mergedRequest)
                model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay)
                this.setModel(model)

                if (this.request.status === "ManualDecisionRequired") {
                    this.viewProp("/editable", true)
                    this.onChange()
                }
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

            async onAcceptRequest() {
                this.viewProp("/acceptEnabled", false)
                this.viewProp("/rejectEnabled", false)
                this.viewProp("/requestRunning", true)
                await runtime.currentSession.transportServices.account.disableAutoSync()
                try {
                    const responseParams = this.getResponseParams()

                    const acceptResult = await runtime.currentSession.consumptionServices.incomingRequests.accept(
                        responseParams
                    )
                    if (acceptResult.isError) return App.error(acceptResult.error)

                    App.navTo("account.home", "account.relationships", {
                        accountId: this.accountId
                    })
                } catch (e) {
                    App.error(e)
                } finally {
                    this.viewProp("/requestRunning", false)
                    runtime.currentSession.transportServices.account.enableAutoSync()
                }
            },

            async onReject() {
                this.viewProp("/acceptEnabled", false)
                this.viewProp("/rejectEnabled", false)
                this.viewProp("/requestRunning", true)
                await runtime.currentSession.transportServices.account.disableAutoSync()
                try {
                    const responseParams = this.getRejectResponseParams()

                    const rejectResult = await runtime.currentSession.consumptionServices.incomingRequests.reject(
                        responseParams
                    )
                    if (rejectResult.isError) return App.error(rejectResult.error)

                    this.refresh()
                } catch (e) {
                    App.error(e)
                } finally {
                    this.viewProp("/requestRunning", false)
                    runtime.currentSession.transportServices.account.enableAutoSync()
                }
            },

            onNavButtonPress() {
                this.navBack()
            }
        })
    }
)
