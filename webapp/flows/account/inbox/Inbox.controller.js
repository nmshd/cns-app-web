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
            routeNames: ["account.inbox", "account.home"],

            onInitialized() {
                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("message", "refresh", async (sChannel, sIdentfier, oData) => {
                        this.refresh()
                    })
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
                this.byId("pullToRefresh").hide()

                const messages = await App.MessageUtil.getReceivedMessages()
                if (!messages) return
                this.setModel(messages)
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
                renderer.addContent(new FormattedText({ htmlText: message.body }))

                return renderer
            },

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const oProperty = oItem.getBindingContext().getProperty()

                if (oProperty.isOwn) {
                    this.navTo("account.relationship.message", {
                        relationshipId: oProperty.recipients[0].relationship.id,
                        messageId: oProperty.id
                    })
                } else {
                    this.navTo("account.relationship.message", {
                        relationshipId: oProperty.createdBy.relationship.id,
                        messageId: oProperty.id
                    })
                }
            }
        })
    }
)
