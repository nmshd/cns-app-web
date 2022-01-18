sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.account.relationships.IncomingRequest", {
        routeName: "account.incomingrequest",

        createViewModel() {
            return {}
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
            this.setModel(model)
        },

        clear() {
            this.super("clear")
            this.identity = null
        },

        async onAccept() {
            await App.RelationshipUtil.acceptRelationshipCreationChange(this.relationshipId)

            this.navBack("account.relationships")
        },

        async onReject() {
            await App.RelationshipUtil.rejectRelationshipCreationChange(this.relationshipId)

            this.navBack("account.relationships")
        },

        onNavButtonPress(oEvent) {
            this.navBack("account.relationships")
        }
    })
})
