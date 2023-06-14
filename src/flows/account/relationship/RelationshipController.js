sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/flows/account/AccountController", "sap/m/Image", "sap/ui/model/json/JSONModel"],
    (App, AccountController, Image, JSONModel) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.relationship.Relationship", {
            async onRouteMatched(oEvent, doNotRefresh) {
                await AccountController.prototype.onRouteMatched.apply(this, [oEvent, true])

                this.relationshipId = oEvent.getParameter("arguments").relationshipId
                if (!this.relationshipId) {
                    App.error({
                        code: "error.app.noIdProvided",
                        message: "No id has been provided."
                    })
                    return
                }

                const acc = await this.account()
                if (!acc) {
                    App.error("Error while fetching current account")
                    return
                }

                if (
                    (this.accountId && this.account() && !App.relationship()) ||
                    App.relationship() !== this.relationshipId
                ) {
                    await App.selectRelationship(this.relationshipId, this.accountId)
                }

                const relationshipIdentityDVO = await App.RelationshipUtil.getRelationship(this.relationshipId)
                if (!relationshipIdentityDVO) {
                    return
                }
                this.setModel(relationshipIdentityDVO, "dvo")
                this.relationshipIdentityDVO = relationshipIdentityDVO.getData()

                /*
                const themeInfo = await App.themeInfoForRelationship(this.relationshipIdentityDVO)

                if (themeInfo) {
                    this.viewProp("/theme", themeInfo)
                    App.appController.viewProp("/theme", themeInfo)
                }
                */
                App.appController.setTitle(this.relationshipIdentityDVO.name)

                if (!doNotRefresh) {
                    this.refresh()
                }
            },

            async onRouteExit(oEvent) {
                await AccountController.prototype.onRouteExit.apply(this, [oEvent, true])
                App.appController.viewProp("/theme", "")
            },

            clear() {
                //this.resetItemModel()
                this.resetViewModel()
            },

            navTo(routeName, object, phoneView, replace) {
                if (!object) {
                    object = { accountId: this.accountId, relationshipId: this.relationshipId }
                } else if (object && typeof object["relationshipId"] === "undefined") {
                    object["relationshipId"] = this.relationshipId
                }
                AccountController.prototype.navTo.apply(this, [routeName, object, phoneView, replace])
            },

            navBack(routeName, object) {
                routeName || (routeName = "account.relationship.home")
                if (!object) {
                    object = { accountId: this.accountId, relationshipId: this.relationshipId }
                } else if (object && typeof object["relationshipId"] === "undefined") {
                    object["relationshipId"] = this.relationshipId
                }
                AccountController.prototype.navBack.apply(this, [routeName, object])
            },

            onNavButtonPress() {
                this.navBack("account.relationship.home", {
                    accountId: this.accountId,
                    relationshipId: this.relationshipId
                })
            }
        })
    }
)
