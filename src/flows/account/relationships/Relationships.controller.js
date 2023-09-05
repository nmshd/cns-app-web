sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "nmshd/app/core/controls/OrgItemRenderer",
        "nmshd/app/core/controls/PersonItemRenderer",
        "sap/m/Avatar",
        "sap/ui/layout/form/SimpleForm",
        "sap/m/Label",
        "sap/m/Text",
        "sap/m/HBox",
        "sap/ui/core/Icon",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "nmshd/app/core/Formatter"
    ],
    (
        App,
        AccountController,
        OrgItemRenderer,
        PersonItemRenderer,
        Avatar,
        SimpleForm,
        Label,
        Text,
        HBox,
        Icon,
        Filter,
        FilterOperator,
        Formatter
    ) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.Relationships", {
            routeName: "account.relationships",

            createViewModel() {
                return {
                    busy: false
                }
            },

            onInitialized(oEvent) {
                this.resetViewModel()

                if (AccountController.prototype.onInitialized) {
                    AccountController.prototype.onInitialized.apply(this, [oEvent])
                }
                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("relationship", "refresh", async (sChannel, sIdentfier, oData) => {
                        this.refresh()
                    })

                this.identityThemeInfos = this.getOwnerComponent().getModel("IdentityThemeInfo")
            },

            async onRouteMatched(oEvent) {
                await this.super("onRouteMatched", oEvent)
                App.appController.setTitle(this.resource("relationship.title"))
            },
            onSettings() {
                this.navTo("account.settings")
            },

            async refresh() {
                this.byId("pullToRefresh").hide()
                const model = await App.RelationshipUtil.getRelationships()
                if (!model) return
                this.setModel(model)
                this.filterRelevant()
                await this._getOpenRequests()
            },

            clear() {
                this.super("clear")
            },

            onSelectionChange(oEvent) {
                const oSegmentedButton = this.byId("filters")
                const oSelectedKey = oSegmentedButton.getSelectedKey()

                if (oSelectedKey === "all") {
                    this.filterAll()
                } else {
                    this.filterRelevant()
                }
            },

            async onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const oIdentity = oItem.getBindingContext().getObject()
                const id = oIdentity.relationship.id

                if (oIdentity.relationship.status === "Revoked") {
                    return
                }

                if (id.substr(0, 3) === "RLT") {
                    this.navTo("account.template", { relationshipId: id })
                    return
                }

                if (oIdentity.relationship.status === "Pending" && oIdentity.relationship.direction == "Outgoing") {
                    this.navTo("account.outgoingrequest", { relationshipId: id })
                } else if (
                    oIdentity.relationship.status === "Pending" &&
                    oIdentity.relationship.direction === "Incoming"
                ) {
                    this.navTo("account.incomingrequest", { relationshipId: id })
                } else {
                    this.navTo("account.relationship.home", { relationshipId: id })
                }
            },

            filterRelevant: function (oEvent) {
                const aFilter = []
                aFilter.push(new Filter("relationship/status", FilterOperator.Contains, "Active"))
                aFilter.push(new Filter("relationship/status", FilterOperator.Contains, "Pending"))
                const oFilter = new Filter({ filters: aFilter, and: false })

                const oList = this.byId("list")
                const oBinding = oList.getBinding("items")
                oBinding.filter(oFilter)
            },

            filterAll: function (oEvent) {
                const aFilter = []

                const oList = this.byId("list")
                const oBinding = oList.getBinding("items")
                oBinding.filter(aFilter)
            },

            itemFactory(sId, oContext) {
                const identity = oContext.getObject()

                const content = []
                if (identity.relationship.status !== "Active") {
                    const label = new Text({
                        text: { path: "relationship/statusText", formatter: Formatter.toTranslated }
                    })
                    label.addStyleClass("sapUiTinyMarginBegin")

                    content.push(
                        new HBox({
                            items: [
                                new Icon({
                                    src: {
                                        path: "relationship",
                                        formatter: Formatter.toRelationshipStatusIcon
                                    }
                                }),
                                label
                            ]
                        })
                    )
                }

                const renderer = new PersonItemRenderer({
                    type: "Active",
                    title: identity.name,
                    status: identity.status,

                    avatar: new Avatar({
                        initials: identity.initials,
                        src: identity.image,
                        imageFitType: "Contain",
                        displayShape: "Square",
                        displaySize: "M"
                    }),
                    content: content
                }).attachPress(this.onItemPress.bind(this))

                if (this.identityThemeInfos) {
                    const themeInfo = App.themeInfoForRelationship(identity)
                    renderer.setAvatarImage(`url(${themeInfo.image})`)
                    renderer.setAvatarColor(themeInfo.fontColor)
                    renderer.setAvatarBackgroundColor(themeInfo.backgroundColor)
                }
                return renderer
            },

            onNewLink(oEvent) {
                this.navTo("account.scan", {
                    accountId: this.accountId
                })
            },

            onNavButtonPress() {
                this.navBack("accounts.select", null, -2)
            },

            onOpenRequestPressed(event) {
                this.navTo("account.relationships.request", {
                    accountId: this.accountId,
                    requestId: event.getSource().getBindingContext().getObject("id")
                })
            },

            async _getOpenRequests() {
                const openRequestsResult =
                    await runtime.currentSession.consumptionServices.incomingRequests.getRequests({
                        query: {
                            status: ["DecisionRequired", "ManualDecisionRequired"],
                            "source.type": "RelationshipTemplate"
                        }
                    })
                const expandedOpenRequests = await runtime.currentSession.expander.expandLocalRequestDTOs(
                    openRequestsResult.value
                )

                this.getModel().setProperty("/openRequests", expandedOpenRequests)
            }
        })
    }
)
