sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Fragment",
        "sap/ui/layout/form/FormElement",
        "sap/m/Input",
        "sap/m/InputType",
        "sap/ui/core/ValueState",
        "sap/m/MessageBox"
    ],
    (App, AccountController, JSONModel, Fragment, FormElement, Input, InputType, ValueState, MessageBox) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.profile.Overview", {
            routePattern: new RegExp("^account.attributes"),

            onInitialized() {
                this.resetViewModel()
                this.getView().setModel(this.getOwnerComponent().getModel("AddressAttributes"), "addresses")

                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("datawallet", "refresh", async (sChannel, sIdentfier, oData) => {
                        this.refresh()
                    })

                this.setModel(new JSONModel({}))
            },

            createViewModel() {
                return {
                    refreshPossible: true,
                    submitAvailable: false
                }
            },

            async onRouteMatched(oEvent) {
                this.clear()
                this.viewProp("/submitAvailable", false)

                await this.super("onRouteMatched", oEvent)
                App.appController.setTitle(this.resource("master.attribute"))

                // TODO
                if (this.viewProp("/route/_name") === "account.attributes.edit") {
                    this.viewProp("/submitAvailable", true)
                }
            },

            onSettings() {
                this.navTo("account.settings")
            },

            onInfoPressed(oEvent) {
                this.navTo("account.attributes.detail", {
                    accountId: App.accountId(),
                    attributeId: oEvent.getParameter("attributeId")
                })
            },

            async refresh() {
                if (this.byId("pullToRefresh")) {
                    this.byId("pullToRefresh").hide()
                }
                // this.setMessage()
                const attributeResult = await runtime.currentSession.consumptionServices.attributes.getAttributes({
                    onlyValid: true,
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

                const model = new JSONModel({ items: expandedAttributes, map: map })
                model.setDefaultBindingMode("OneWay")
                this.setModel(model)

                this.files = await App.FileUtil.getFiles()
                this.files.refresh()
                this.setModel(this.files, "files")
            },

            clear() {
                this.super("clear")
                //this.setMessage()
                this.expandedAttributes = null
            },

            onNewAttribute() {
                App.openPopup("CreateAttributePopup", {
                    data: {},
                    submitCallback: () => this.refresh()
                })
            },

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const id = oItem.getBindingContext().getProperty("id")
                this.navTo("account.attributes.detail", { attributeId: id })
            },

            onFileItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const file = this.getModel("files").getProperty(oItem.getBindingContextPath())
                this.navTo("account.files.detail", { id: file.id })
            },

            async openFile(oEvent) {
                const oPath = oEvent.getSource().getParent().getBindingContextPath()
                const item = this.getModel("files").getProperty(oPath)

                await App.FileUtil.openFile(item)
            },

            toUpload() {
                this.navTo("account.files.upload")
            },

            onEdit() {
                this.navTo("account.attributes.edit")
            },

            onAbort() {
                this.navBack("account.attributes")
            }
        })
    }
)
