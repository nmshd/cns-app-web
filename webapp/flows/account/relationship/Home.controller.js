sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/relationship/RelationshipController"],
    (App, RelationshipController) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.Home", {
            routeNames: ["account.relationship.home", "account.relationship.master"],

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

            onSettings() {
                this.navTo("account.relationship.settings")
            },

            async refresh() {
                this.byId("pullToRefresh").hide()

                const messages = await App.MessageUtil.getMessagesByRelationship(this.relationshipId)
                if (!messages) return
                messages.setSizeLimit(3)
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

            onNavButtonPress() {
                this.navBack("account.relationships")
            }
        })
    }
)
