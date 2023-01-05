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
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                const receivedItemsResult =
                    await runtime.currentSession.consumptionServices.attributes.getPeerAttributes({
                        peer: this.relationshipIdentityDVO.id,
                        hideTechnical: true
                    })

                if (receivedItemsResult.isError) {
                    App.error(receivedItemsResult.error)
                    return
                }
                const receivedItems = await runtime.currentSession.expander.expandLocalAttributeDTOs(
                    receivedItemsResult.value
                )

                this.setModel(
                    new JSONModel({
                        items: receivedItems
                    })
                )
            }
        })
    }
)
