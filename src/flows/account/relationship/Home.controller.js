sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/relationship/RelationshipController"],
    (App, RelationshipController) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Home", {
            routeNames: ["account.relationship.home", "account.relationship.master"],
            createViewModel() {
                return {
                    requestCertificateButtonVisible: false
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

                await this._setButtonVisibility()

                this.byId("pullToRefresh").hide()

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

            onRequestCertificate() {
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
            },

            async _setButtonVisibility() {
                this.viewProp("/requestCertificateButtonVisible", false)
                // search for technical allowCertificateRequest
                const query = {
                    "content.isTechnical": "true",
                    "content.key": "AllowCertificateRequest",
                    "content.value.@type": "ProprietaryBoolean"
                }
                const sharedToPeerAttributes = await this.getSharedToPeerAttributes(query)
                for (const sharedToPeerAttribute of sharedToPeerAttributes) {
                    if (sharedToPeerAttribute.value.value === true) {
                        this.viewProp("/requestCertificateButtonVisible", true)
                    }
                }
                console.log(sharedToPeerAttributes)
            }
        })
    }
)
