sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/Formatter"
    ],
    (App, AccountController, JSONModel, Formatter) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.profile.attributes.Attribute", {
            routePattern: new RegExp("^account.attributes.detail"),
            formatter: Formatter,
            createViewModel() {
                return {}
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

            async openFile() {
                if (this.attribute) {
                    await App.FileUtil.openFile(this.attribute.getData())
                }
            },

            async onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const id = oItem.getBindingContext().getProperty("id")
                this.navTo("account.attributes.detail", { attributeId: id })
            },

            clear() {
                this.super("clear")
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
            },

            toShareAttribute() {
                this.navTo("account.attributes.share", { attributeId: this.attributeId })
            }
        })
    }
)
