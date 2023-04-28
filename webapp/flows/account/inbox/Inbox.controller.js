sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "nmshd/app/core/controls/MessageRenderer",
        "nmshd/app/core/Formatter",
        "sap/m/FormattedText"
    ],
    (App, AccountController, MessageRenderer, Formatter, FormattedText) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.inbox.Inbox", {
            routeNames: ["account.inbox"],

            onInitialized() {
                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("message", "refresh", async (sChannel, sIdentfier, oData) => {
                        this.refresh()
                    })
            },

            async onRouteMatched(oEvent) {
                await this.super("onRouteMatched", oEvent)
                App.appController.setTitle(this.resource("master.inbox"))
            },

            onSettings() {
                this.navTo("account.settings")
            },

            async refresh() {
                this.byId("pullToRefresh").hide()

                const items = await App.InboxUtil.getInbox()
                if (!items) return
                this.setModel(items)
            },

            onScan() {
                App.navTo("account.master", "account.scan", {
                    accountId: this.accountId
                })
            },

            onNavButtonPress() {
                this.navBack("accounts.select")
            },

            itemFactory(sId, oContext) {
                const message = oContext.getObject()
                const renderer = new MessageRenderer({
                    type: "Active",
                    subject: Formatter.toTranslated(message.name),
                    authorName: Formatter.toTranslated(message.createdBy.name),
                    time: Formatter.toRelativeDate(message.createdAt),
                    icon: "sap-icon://log"
                }).attachPress(this.onItemPress.bind(this))
                if (message.body) {
                    renderer.addContent(new FormattedText({ htmlText: message.body }))
                }

                return renderer
            },

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const item = oItem.getBindingContext().getProperty()

                if (item.id) {
                    const prefix = item.id.substr(0, 3)
                    switch (prefix) {
                        case "id1":
                            break
                        case "MSG":
                            if (item.isOwn) {
                                this.navTo("account.relationship.message", {
                                    relationshipId: item.recipients[0].relationship.id,
                                    messageId: item.id
                                })
                            } else {
                                this.navTo("account.relationship.message", {
                                    relationshipId: item.createdBy.relationship.id,
                                    messageId: item.id
                                })
                            }
                            break
                        case "REQ":
                            this.navTo("account.relationship.request", {
                                relationshipId: item.createdBy.relationship.id,
                                requestId: item.id
                            })
                            break
                    }
                }
            }
        })
    }
)
