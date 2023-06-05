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

            onInfoPressed(oEvent) {
                this.navTo("account.attributes.detail", {
                    accountId: App.accountId(),
                    attributeId: oEvent.getParameter("attributeId")
                })
            },

            async refresh() {
                if (!this.relationshipId || !this.relationshipIdentityDVO) {
                    App.error("Error while fetching relationship")
                    return
                }

                const sentItemsResult =
                    await runtime.currentSession.consumptionServices.attributes.getSharedToPeerAttributes({
                        peer: this.relationshipIdentityDVO.id
                    })

                if (sentItemsResult.isError) {
                    App.error(sentItemsResult.error)
                    return
                }

                const sentItems = await runtime.currentSession.expander.expandLocalAttributeDTOs(sentItemsResult.value)
                const nonTechnical = []
                /** @type any[] */
                const technical = [
                    {
                        type: "SharedToPeerAttributeDVO",
                        name: "i18n://dvo.attribute.name.EnmeshedAddress",
                        value: { value: runtime.currentAccount.address },
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
                for (const sentItem of sentItems) {
                    if (
                        sentItem.content["@type"] === "RelationshipAttribute" &&
                        sentItem.content.isTechnical === true
                    ) {
                        technical.push(sentItem)
                    } else {
                        nonTechnical.push(sentItem)
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
