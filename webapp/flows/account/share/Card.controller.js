sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.share.Card", {
        routeName: "account.card",

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                errorVisible: false,
                errorMessage: "",
                template: {},
                token: ""
            }
        },

        async onInitialized(oEvent) {
            const relationshipTemplates = this.getOwnerComponent().getModel("DefaultRelationshipTemplates")
            this.setModel(relationshipTemplates, "templates")
        },

        async createContent(item) {
            const shareData = { identity: null, attributes: [] }
            if (!item || !item.template) return
            const attributes = item.template.attributes

            const attributeMapResult = await runtime.consumptionServices.attributes.getAttributesByNames({})
            let attributeMap
            if (!attributeMapResult || attributeMapResult.isError || !attributeMapResult.value) {
                appLogger.error(attributeMapResult.error)
                return attributeMapResult.error
            } else {
                attributeMap = attributeMapResult.value
            }

            if (item.template.attributeContent) {
                shareData.attributes = item.template.attributeContent
            } else {
                for (let i = 0; i < attributes.length; i++) {
                    const attr = attributes[i]
                    const attributeValue = attributeMap[attr.attribute]
                    if (!attributeValue) continue
                    shareData.attributes.push(attributeValue.content)
                }
            }
            if (item.template.request) {
                shareData.request = item.template.request
            }

            try {
                const expiry = NMSHDTransport.CoreDate.utc().add({ hour: 1 }).toISOString()
                const templateResult =
                    await runtime.transportServices.relationshipTemplates.createOwnRelationshipTemplate({
                        content: {
                            attributes: shareData.attributes,
                            request: shareData.request
                        },
                        expiresAt: expiry
                    })
                if (templateResult.isError) {
                    App.error(templateResult.error)
                    return templateResult.error
                }

                const tokenResult = await runtime.transportServices.relationshipTemplates.createTokenForOwnTemplate({
                    templateId: templateResult.value.id,
                    expiresAt: expiry,
                    ephemeral: true
                })

                if (tokenResult.isError) {
                    App.error(tokenResult.error)
                    return tokenResult.error
                } else {
                    return tokenResult.value.truncatedReference
                }
            } catch (e) {
                App.error(e)
                return e
            }
        },

        async onRouteMatched(oEvent) {
            this.cardId = oEvent.getParameter("arguments").cardId
            await this.super("onRouteMatched", oEvent)
        },

        async refresh() {
            this.clear()
            try {
                this.loadInc()

                let foundTemplate
                if (this.cardId) {
                    const templates = this.getModel("templates").getData()
                    for (const template of templates) {
                        if (template.id === this.cardId) {
                            foundTemplate = template
                            break
                        }
                    }
                }

                if (foundTemplate) {
                    this.viewProp("/template", foundTemplate)
                    const token = await this.createContent(foundTemplate)
                    if (typeof token !== "string") {
                        this.addError({
                            oError: token,
                            sUserFriendlyMsg: this.resource("share.card.creationError")
                        })
                        return
                    }
                    this.viewProp("/token", `nmshd://qr#${token}`)
                }
            } catch (oError) {
                const sUserFriendlyMsg = oError.message
                this.addError({ oError, sUserFriendlyMsg })
            } finally {
                this.loadDec()
            }
        },

        clear() {
            this.super("clear")
        },

        onNavButtonPress() {
            this.navBack("account.cards")
        }
    })
})
