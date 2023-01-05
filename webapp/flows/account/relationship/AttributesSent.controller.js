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
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                const sentItemsResult =
                    await runtime.currentSession.consumptionServices.attributes.getSharedToPeerAttributes({
                        peer: this.relationshipIdentityDVO.id,
                        hideTechnical: true
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
