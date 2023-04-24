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
                        peer: this.relationshipIdentityDVO.id
                    })

                if (receivedItemsResult.isError) {
                    App.error(receivedItemsResult.error)
                    return
                }
                const receivedItems = await runtime.currentSession.expander.expandLocalAttributeDTOs(
                    receivedItemsResult.value
                )

                const nonTechnical = []
                /** @type any[] */
                const technical = [
                    {
                        type: "SharedToPeerAttributeDVO",
                        name: "i18n://dvo.attribute.name.EnmeshedAddress",
                        value: { value: this.relationshipIdentityDVO.id },
                        valueHints: {},
                        renderHints: {
                            "@type": "RenderHints",
                            editType: "InputLike",
                            technicalType: "String"
                        },
                        tags: [],
                        valueType: "EnmeshedAddress"
                    }
                ]
                for (const receivedItem of receivedItems) {
                    if (
                        receivedItem.content["@type"] === "RelationshipAttribute" &&
                        receivedItem.content.isTechnical === true
                    ) {
                        technical.push(receivedItem)
                    } else {
                        nonTechnical.push(receivedItem)
                    }
                }

                this.setModel(
                    new JSONModel({
                        items: nonTechnical,
                        technical: technical
                    })
                )
            }
        })
    }
)
