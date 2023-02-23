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
                this.clear()
                this.messageId = oEvent.getParameter("arguments").messageId

                await this.super("onRouteMatched", oEvent)
            },
            async refresh() {
                if (!this.messageId) return

                const message = await App.MessageUtil.getMessage(this.messageId)
                if (!message) return

                this.setModel(message)
                this.message = message.getData()
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
