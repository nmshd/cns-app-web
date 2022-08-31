sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.account.relationships.OutgoingRequest", {
        routeName: "account.outgoingrequest",

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

        onNavButtonPress(oEvent) {
            this.navBack("account.relationships")
        }
    })
})
