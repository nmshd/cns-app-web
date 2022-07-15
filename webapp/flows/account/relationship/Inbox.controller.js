sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/relationship/RelationshipController"],
    (App, RelationshipController) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Inbox", {
            routeName: "account.relationship.inbox",

            onInitialized() {
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

            async refresh() {
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                this.byId("pullToRefresh").hide()

                const messages = await App.MessageUtil.getMessagesByRelationship(this.relationshipId)
                if (!messages) return
                this.setModel(messages)
            },

            openMessage(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const item = oItem.getBindingContext().getProperty()
                this.navTo("account.relationship.message", {
                    relationshipId: this.relationshipId,
                    messageId: item.id.toString()
                })
            },

            toNewMessage() {
                this.navTo("account.relationship.newmessage", {
                    relationshipId: this.relationshipId
                })
            },

            toInbox() {
                this.navTo("account.relationship.inbox", { relationshipId: this.relationshipId })
            }
        })
    }
)
