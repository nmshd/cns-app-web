sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/relationship/RelationshipController",
        "sap/ui/model/json/JSONModel"
    ],
    (App, RelationshipController, JSONModel) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.AttributesSent", {
            routeName: "account.relationship.attributesSent",

            async refresh() {
                if (!this.relationshipId) return

                const sentItemsResult = await runtime.currentSession.consumptionServices.attributes.getAttributes({
                    query: { shareInfo: { peer: this.identity.id }, owner: runtime.currentAccount.address }
                })

                if (sentItemsResult.isError) {
                    App.error(sentItemsResult.error)
                    return
                }
                const sentItems = await runtime.currentSession.expander.expandLocalAttributeDTOs(sentItemsResult.value)

                this.setModel(
                    new JSONModel({
                        items: sentItems
                    })
                )
            }
        })
    }
)
