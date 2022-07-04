sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/ui/core/Fragment"],
    (App, AccountController, Fragment) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.messages.account.Detail", {
            routeNames: ["account.relationship.message"],
            createViewModel() {
                return {
                    busy: false,
                    delay: 0
                }
            },

            async onRouteMatched(oEvent) {
                // We cannot initialize the fragments within onInitialized, as the framework
                // is not awaiting onInitialized before calling onRouteMatched
                if (!this.oChangeRequestRenderer) {
                    this.oChangeRequestRenderer = await Fragment.load({
                        id: this.getView().getId(),
                        name: "nmshd.app.flows.account.messages.fragments.AttributesChangeRequest",
                        controller: this
                    })
                    this.getView().addDependent(this.oChangeRequestRenderer)
                }
                if (!this.oShareRequestRenderer) {
                    this.oShareRequestRenderer = await Fragment.load({
                        id: this.getView().getId(),
                        name: "nmshd.app.flows.account.messages.fragments.AttributesShareRequest",
                        controller: this
                    })
                    this.getView().addDependent(this.oShareRequestRenderer)
                }

                this.clear()
                this.messageId = oEvent.getParameter("arguments").messageId

                await this.super("onRouteMatched", oEvent)
            },
            async refresh() {
                if (!this.messageId || !this.oChangeRequestRenderer || !this.oShareRequestRenderer) return

                const message = await App.MessageUtil.getMessage(this.messageId)
                if (!message) return

                this.setModel(message)
                this.message = message.getData()
            },

            onRequestItemPress(oEvent) {},

            requestItemFactory(sId, oContext) {
                const request = oContext.getObject()
                console.log(request)
                let renderer
                switch (request["@type"]) {
                    case "AttributesChangeRequest":
                        if (!this.oChangeRequestRenderer) break
                        renderer = this.oChangeRequestRenderer.clone(sId)
                        break
                    case "AttributesShareRequest":
                        if (!this.oShareRequestRenderer) break
                        renderer = this.oShareRequestRenderer.clone(sId)
                        break
                }

                //renderer.attachPress(this.onRequestItemPress.bind(this))
                return renderer
            },

            onForward(oEvent) {
                const route = this.viewProp("/route")
                switch (route._name) {
                    case "customers.message":
                        this.navTo("customers.fwdmessage", {
                            id: route.id,
                            messageid: route.messageid
                        })
                        break
                    case "account.relationship.inbox":
                    case "account.relationship.message":
                        this.navTo("account.relationship.fwdmessage", {
                            accountId: route.accountId,
                            relationshipId: route.relationshipId,
                            messageId: route.messageId
                        })
                        break
                }
            },

            async acceptRequest(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const item = oItem.getBindingContext().getProperty()

                if (item["@type"] === "AttributesShareRequest") {
                    const attributes = item.attributes
                    const share = []
                    for (const attribute of attributes) {
                        const attributeToShare = attribute.bestMatch
                        if (!attributeToShare) continue

                        share.push(
                            NMSHDContent.Attribute.from({
                                name: attributeToShare.name,
                                value: "" + attributeToShare.value
                            })
                        )
                    }
                    if (share.length > 0) {
                        for (const recipient of item.recipients) {
                            if (!recipient.relationship) continue

                            await this.account().messages.sendMessage({
                                recipients: [recipient.id],
                                content: {
                                    "@type": "AttributesChangeRequest",
                                    key: item.key,
                                    attributes: share
                                },
                                attachment: []
                            })
                        }
                    }
                } else if (item["@type"] === "AttributesChangeRequest") {
                    for (const attribute of item.attributes) {
                        await runtime.currentSession.consumptionServices.attributes.succeedAttribute({
                            attribute: {
                                name: "" + attribute.name,
                                value: "" + attribute.value
                            }
                        })
                    }
                }
                this.prop(oItem.getBindingContext().getPath() + "/processed", true)
            },

            clear() {
                this.super("clear")
            },

            async openLink(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const item = oItem.getBindingContext().getProperty()

                const result = await App.FileUtil.openFile(item)
                if (!result) return
            },

            onNavButtonPress() {
                const route = this.viewProp("/route")
                if (!route.view) {
                    switch (route._name) {
                        case "customers.message":
                            this.navBack("customers.comm", { id: route.id })
                            break
                        case "account.relationship.message":
                            this.navBack("account.relationship.inbox", {
                                relationshipId: route.relationshipId
                            })
                            break
                    }
                } else {
                    this.navBack()
                }
            }
        })
    }
)
