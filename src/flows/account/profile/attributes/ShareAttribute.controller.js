sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/Formatter"
    ],
    (App, AccountController, JSONModel, Formatter) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.profile.attributes.ShareAttribute", {
            routePattern: new RegExp("^account.attributes.share"),
            formatter: Formatter,
            createViewModel() {
                return {
                    submitEnabled: true
                }
            },

            async onInitialized() {
                this.resetViewModel()
            },

            async onRouteMatched(oEvent) {
                this.clear()

                this.attributeId = oEvent.getParameter("arguments").attributeId
                await this.super("onRouteMatched", oEvent)
            },
            async refresh() {
                if (!this.attributeId) return
                const attributeResult = await runtime.currentSession.consumptionServices.attributes.getAttribute({
                    id: this.attributeId
                })
                if (attributeResult.isError) {
                    App.error(attributeResult.error)
                    return
                }
                const expandedAttribute = await runtime.currentSession.expander.expandLocalAttributeDTO(
                    attributeResult.value
                )
                this.expandedAttribute = expandedAttribute

                if (this.expandedAttribute.peer) {
                    await this.refreshPeer(this.expandedAttribute.peer)
                }

                const sharedWithPeers = []
                // @ts-ignore
                for (const sharedAttribute of expandedAttribute.sharedWith) {
                    sharedWithPeers.push(sharedAttribute.peer)
                }

                const allRelationships = await App.RelationshipUtil.getRelationships()
                if (!allRelationships) return
                let relationships = allRelationships.getProperty("/items")
                relationships = relationships.filter((value, index) => value.relationship.status === "Active")
                const possiblePeers = []
                for (const relationship of relationships) {
                    if (!sharedWithPeers.includes(relationship.id)) {
                        possiblePeers.push(relationship)
                    }
                }
                const possiblePeersModel = new JSONModel({ items: possiblePeers })
                this.setModel(possiblePeersModel, "peers")

                this.expandedAttribute.items = []
                if (this.expandedAttribute.sharedWith) {
                    const peers = await runtime.currentSession.expander.expandAddresses(
                        this.expandedAttribute.sharedWith.map((item) => item.peer)
                    )
                    for (let i = 0; i < this.expandedAttribute.sharedWith.length; i++) {
                        const sharedAttribute = this.expandedAttribute.sharedWith[i]
                        const peer = peers[i]
                        sharedAttribute.peer = peer
                    }
                    this.expandedAttribute.items = this.expandedAttribute.sharedWith
                } else if (this.expandedAttribute.sourceAttribute) {
                    this.expandedAttribute.items = [
                        await this.refreshSourceAttribute(this.expandedAttribute.sourceAttribute)
                    ]
                }

                const attributeModel = new JSONModel(this.expandedAttribute)
                this.model = attributeModel
                this.setModel(attributeModel)
            },

            async refreshSourceAttribute(sourceAttributeId) {
                const attributeResult = await runtime.currentSession.consumptionServices.attributes.getAttribute({
                    id: sourceAttributeId
                })
                if (attributeResult.isError) {
                    App.error(attributeResult.error)
                    return
                }
                const expandedAttribute = await runtime.currentSession.expander.expandLocalAttributeDTO(
                    attributeResult.value
                )
                this.sourceAttribute = expandedAttribute
                const attributeModel = new JSONModel(expandedAttribute)
                this.sourceModel = attributeModel
                this.setModel(attributeModel, "source")
                return this.sourceAttribute
            },

            async refreshPeer(peer) {
                const expandedAddress = await runtime.currentSession.expander.expandAddress(peer)
                this.peer = expandedAddress
                const peerModel = new JSONModel(expandedAddress)
                this.sourceModel = peerModel
                this.setModel(peerModel, "peer")
            },

            async shareAttribute() {
                this.viewProp("/submitEnabled", false)
                const list = this.byId("possiblePeers")
                const selectedPeers = list.getSelectedItems()
                const title = this.byId("title").getValue()
                const description = this.byId("description").getValue()
                if (selectedPeers.length === 0) return
                const promises = []
                for (const selectedPeer of selectedPeers) {
                    const peer = selectedPeer.getBindingContext("peers").getProperty("id")
                    appLogger.log(`Sharing attribute ${this.attributeId} to peer ${peer}.`)
                    promises.push(
                        runtime.currentSession.consumptionServices.attributes.shareAttribute({
                            attributeId: this.attributeId,
                            peer: peer,
                            requestTitle: title,
                            requestDescription: description
                        })
                    )
                }
                const results = await Promise.all(promises)
                const errorneousResult = results.find((result) => result.isError)
                if (errorneousResult) {
                    return App.error(errorneousResult.error)
                }
                this.clear()
                this.refresh()
                this.viewProp("/submitEnabled", true)
            },

            clear() {
                this.super("clear")
                this.byId("title").setValue("")
                this.byId("description").setValue("")
                this.attribute = null
                this.expandedAttribute = null
                this.model = null
                this.sourceAttrbute = null
                this.sourceModel = null
                this.peer = null
                this.peerModel = null
            },

            onNavButtonPress() {
                this.navBack("account.attributes")
            }
        })
    }
)
