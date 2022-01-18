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

                const sentItemsResult = await runtime.consumptionServices.sharedItems.getSharedItems({
                    query: {
                        sharedWith: this.identity.id
                    }
                })

                if (sentItemsResult.isError) {
                    App.error(sentItemsResult.error)
                    return
                }

                this.setModel(
                    new JSONModel({
                        items: sentItemsResult.value
                    })
                )
            }
        })
    }
)
