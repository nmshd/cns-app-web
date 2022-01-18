sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/relationship/RelationshipController",
        "sap/ui/model/json/JSONModel"
    ],
    (App, RelationshipController, JSONModel) => {
        "use strict"

        return RelationshipController.extend("nmshd.app.flows.account.relationship.AttributesReceived", {
            routeName: "account.relationship.attributesReceived",

            async refresh() {
                if (!this.relationshipId) return

                const receivedItemsResult = await runtime.consumptionServices.sharedItems.getSharedItems({
                    query: {
                        sharedBy: this.identity.id
                    }
                })

                if (receivedItemsResult.isError) {
                    App.error(receivedItemsResult.error)
                    return
                }

                this.setModel(
                    new JSONModel({
                        items: receivedItemsResult.value
                    })
                )
            }
        })
    }
)
