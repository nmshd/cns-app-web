sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/model/json/JSONModel"],
    (App, AccountController, JSONModel) => {
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
                const relationshipTemplates = this.getOwnerComponent().getModel("DefaultRelationshipTemplates")
                let data = JSON.parse(JSON.stringify(relationshipTemplates.getData()))
                this.translateTemplates(data)
                this.setModel(new JSONModel(data), "templates")
            },

            async onInitialized(oEvent) {
                this.resetViewModel()
                this.loadModel()

                this.model = new JSONModel({
                    onNewRelationship: undefined
                })
                this.setModel(this.model)
            },

            async createContent(item) {
                const shareData = item.template
                if (!item || !item.template) return
                const shareValueTypes = shareData.onNewRelationship.items[0].items

                const attributeResult = await runtime.currentSession.consumptionServices.attributes.getAttributes({
                    query: { "shareInfo.peer": "!", "content.owner": runtime.currentAccount.address },
                    hideTechnical: true
                })
                if (attributeResult.isError) {
                    App.error(attributeResult.error)
                    return
                }
                const expandedAttributes = await runtime.currentSession.expander.expandLocalAttributeDTOs(
                    attributeResult.value
                )
                this.expandedAttributes = expandedAttributes

                const map = {}
                for (const attribute of expandedAttributes) {
                    // @ts-ignore
                    map[attribute.value["@type"]] = attribute
                }
                this.map = map

                const createRequestItems = []

                for (const shareValueType of shareValueTypes) {
                    const attribute = this.map[shareValueType.valueType]
                    if (!attribute) continue
                    const requestItem = {
                        "@type": "ShareAttributeRequestItem",
                        mustBeAccepted: true,
                        attribute: attribute.content,
                        sourceAttributeId: attribute.id
                    }
                    createRequestItems.push(requestItem)
                }

                shareData.onNewRelationship.items[0].items = createRequestItems

                try {
                    const expiry = NMSHDTransport.CoreDate.utc().add({ hour: 1 }).toISOString()
                    const templateResult =
                        await runtime.currentSession.transportServices.relationshipTemplates.createOwnRelationshipTemplate(
                            {
                                content: shareData,
                                expiresAt: expiry
                            }
                        )
                    if (templateResult.isError) {
                        App.error(templateResult.error)
                        return templateResult.error
                    }

                    const expandedRequest = await runtime.currentSession.expander.expandRequest(
                        shareData.onNewRelationship
                    )

                    this.model.setData({
                        ...item.template,
                        onNewRelationship: expandedRequest
                    })

                    return templateResult.value.truncatedReference
                } catch (e) {
                    App.error(e)
                    return e
                }
            },

            async onRouteMatched(oEvent) {
                this.loadModel()
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
                            this.showMessage({
                                oError: token,
                                sUserFriendlyMsg: this.resource("share.card.creationError")
                            })
                            return
                        }
                        this.viewProp("/token", `nmshd://qr#${token}`)
                    }
                } catch (oError) {
                    const sUserFriendlyMsg = oError.message
                    this.showMessage({ oError, sUserFriendlyMsg })
                } finally {
                    this.loadDec()
                }
            },

            clear() {
                this.super("clear")
                this.model.setData({})
            },

            onNavButtonPress() {
                this.navBack("account.cards")
            }
        })
    }
)
