sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/relationship/RelationshipController"],
    (App, RelationshipController) => {
        "use strict"
        return RelationshipController.extend("nmshd.app.flows.account.relationship.Master", {
            routePattern: new RegExp("^account\\.relationship\\.[\\w\\.]+$"),

            createViewModel() {
                return {
                    busy: true,
                    delay: 0,
                    errorVisible: false,
                    errorMessage: "",
                    navigation: []
                }
            },

            onProfile() {
                this.navTo("account.relationship.settings", { relationshipId: this.relationshipId })
            },

            async onRouteMatched(oEvent) {
                this.clear()
                await this.super("onRouteMatched", oEvent)
                if (!this.relationshipId) return

                this.viewProp("/navigation", [
                    {
                        title: this.resource("relationship.master.navigation.overview"),
                        key: "account.relationship.home",
                        icon: "sap-icon://customer-view"
                    },
                    {
                        title: this.resource("relationship.master.navigation.communication"),
                        key: "account.relationship.inbox",
                        icon: "sap-icon://post"
                    },
                    {
                        title: this.resource("relationship.master.navigation.sentData"),
                        key: "account.relationship.attributesSent",
                        icon: "sap-icon://chain-link"
                    },
                    {
                        title: this.resource("relationship.master.navigation.receivedData"),
                        key: "account.relationship.attributesReceived",
                        icon: "sap-icon://chain-link"
                    },
                    {
                        title: this.resource("relationship.master.navigation.requests"),
                        key: "account.relationship.requests",
                        icon: "sap-icon://chain-link"
                    }
                ])

                if (
                    (this.accountId && this.account() && !App.relationship()) ||
                    App.relationship() !== this.relationshipId
                ) {
                    await App.selectRelationship(this.relationshipId, this.accountId)
                }
            },

            refresh() {},

            clear() {},

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const prop = this.viewProp(oItem.getBindingContextPath())

                this.navTo(prop.key, { relationshipId: this.relationshipId })
            },
            onNavButtonPress(oEvent) {
                this.navBack("account.relationships")
            }
        })
    }
)
