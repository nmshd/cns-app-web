sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/relationship/RelationshipController"],
    (App, RelationshipController) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Home", {
            routeNames: ["account.relationship.home", "account.relationship.master"],
            createViewModel() {
                return {
                    requestButtonVisible: false
                }
            },
            onInitialized() {
                this.resetViewModel()
                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("message", "refresh", async () => {
                        this.refresh()
                    })
            },

            async onRouteMatched(oEvent) {
                await this.super("onRouteMatched", oEvent)
            },

            onSettings() {
                this.navTo("account.relationship.settings")
            },

            async refresh() {
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                this.viewProp("/requestButtonVisible", false)
                this.byId("pullToRefresh").hide()

                const receivedItemsResult =
                    await runtime.currentSession.consumptionServices.attributes.getPeerAttributes({
                        peer: this.relationshipIdentityDVO.id
                    })

                if (receivedItemsResult.isError) {
                    App.error(receivedItemsResult.error)
                    return
                }
                const receivedItems = await runtime.currentSession.expander.expandLocalAttributeDTOs(
                    receivedItemsResult.value
                )

                for (const receivedItem of receivedItems) {
                    console.log(receivedItem)
                    if (
                        receivedItem.key === "AllowCertificateRequest" &&
                        receivedItem.valueType === "ProprietaryBoolean" &&
                        receivedItem.value.value === true
                    ) {
                        this.viewProp("/requestButtonVisible", true)
                    }
                }

                const items = await App.InboxUtil.getInboxForRelationship(this.relationshipIdentityDVO)
                if (!items) return
                items.setSizeLimit(5)
                this.setModel(items)
            },

            openItem(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const item = oItem.getBindingContext().getProperty()
                if (item.id) {
                    const prefix = item.id.substr(0, 3)
                    switch (prefix) {
                        case "id1":
                            break
                        case "MSG":
                            this.navTo("account.relationship.message", {
                                relationshipId: this.relationshipId,
                                messageId: item.id
                            })
                            break
                        case "REQ":
                            this.navTo("account.relationship.request", {
                                relationshipId: this.relationshipId,
                                requestId: item.id
                            })
                            break
                    }
                }
            },

            onRequest() {
                App.openPopup("CreateCertificateRequestPopup", {
                    data: {
                        peer: this.relationshipIdentityDVO.id
                    },
                    submitCallback: () => this.refresh()
                })
            },

            onNewMessage() {
                this.navTo("account.relationship.newmessage", {
                    relationshipId: this.relationshipId
                })
            },

            onInbox() {
                this.navTo("account.relationship.inbox")
            },

            onSent() {
                this.navTo("account.relationship.attributesSent")
            },

            onReceived() {
                this.navTo("account.relationship.attributesReceived")
            },
            onRequests() {
                this.navTo("account.relationship.requests")
            },

            onNavButtonPress() {
                this.navBack("account.relationships")
            }
        })
    }
)
