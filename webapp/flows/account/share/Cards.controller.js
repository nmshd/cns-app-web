sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/model/json/JSONModel"],
    (App, AccountController, JSONModel) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.share.Cards", {
            routePattern: new RegExp("^account.cards"),

            createViewModel() {
                return {
                    busy: false,
                    delay: 0,
                    navigation: []
                }
            },

            /**
             * Use i18n resources to translate content of the json model
             * @param {*} templates json model
             */
            translateTemplates(templates) {
                for (const tempIndex in templates) {
                    const temp = templates[tempIndex]
                    let tempString = JSON.stringify(temp)
                    tempString = tempString.replace(/\{t>(.*?)\}/g, (match) => {
                        return this.resource(match.substring(3, match.length - 1))
                    })
                    templates[tempIndex] = JSON.parse(tempString)
                }
            },

            loadModel() {
                let relationshipTemplates = this.getOwnerComponent().getModel("DefaultRelationshipTemplates")
                let data = JSON.parse(JSON.stringify(relationshipTemplates.getData()))
                this.translateTemplates(data)
                this.setModel(new JSONModel({ templates: data }))
            },

            async onInitialized(oEvent) {
                this.loadModel()
            },

            async onRouteMatched(oEvent) {
                this.loadModel()

                await this.super("onRouteMatched", oEvent)
            },
            onSettings() {
                this.navTo("account.settings")
            },

            async refresh() {
                this.clear()
            },

            clear() {
                this.super("clear")
            },

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const item = oItem.getBindingContext().getProperty()

                this.navTo("account.card", { accountId: this.accountId, cardId: item.id })
            },

            onNavButtonPress() {
                this.navBack("accounts.select", null, -2)
            }
        })
    }
)
