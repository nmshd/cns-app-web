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

            translateTemplates(templates) {
                for (const temp_index in templates.oData) {
                    const temp = templates.oData[temp_index]
                    let temp_string = JSON.stringify(temp)
                    temp_string = temp_string.replace(/\{t>(.*?)\}/g, (match) => {
                        return this.resource(match.substring(3, match.length - 1))
                    })
                    templates.oData[temp_index] = JSON.parse(temp_string)
                }
            },

            async onInitialized(oEvent) {
                let relationshipTemplates = this.getOwnerComponent().getModel("DefaultRelationshipTemplates")
                this.translateTemplates(relationshipTemplates)
                this.setModel(new JSONModel({ templates: relationshipTemplates.getData() }))
            },

            async onRouteMatched(oEvent) {
                App.appController.setRight("sap-icon://settings", () => {
                    this.onSettings()
                })
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
