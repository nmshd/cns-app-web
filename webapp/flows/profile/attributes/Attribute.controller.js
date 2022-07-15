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
            toTranslated: Formatter.toTranslated,
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
                const attributeModel = new JSONModel(expandedAttribute)
                this.model = attributeModel
                this.setModel(attributeModel)
            },

            async openFile() {
                if (this.attribute) {
                    await App.FileUtil.openFile(this.attribute.getData())
                }
            },

            clear() {
                this.super("clear")
                this.attribute = null
                this.expandedAttribute = null
                this.model = null
            },

            onNavButtonPress() {
                this.navBack("account.attributes")
            }
        })
    }
)
