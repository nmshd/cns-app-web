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
        return AccountController.extend("nmshd.app.flows.profile.Overview", {
            routePattern: new RegExp("^account.attributes"),

            onInitialized() {
                this.getView().setModel(this.getOwnerComponent().getModel("AddressAttributes"), "addresses")

                sap.ui
                    .getCore()
                    .getEventBus()
                    .subscribe("datawallet", "refresh", async (sChannel, sIdentfier, oData) => {
                        this.refresh()
                    })
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
                App.appController.setRight("sap-icon://settings", () => {
                    this.onSettings()
                })
                await this.super("onRouteMatched", oEvent)

                if (this.viewProp("/route/_name") === "account.attributes.edit") {
                    this.viewProp("/submitAvailable", true)
                }
            },

            onSettings() {
                this.navTo("account.settings")
            },

            async refresh() {
                if (this.byId("pullToRefresh")) {
                    this.byId("pullToRefresh").hide()
                }
                this.setMessage()
                const attributeResult = await runtime.currentSession.consumptionServices.attributes.getValidAttributes({
                    query: { shareInfo: { peer: "!" } }
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
                    const existing = map[attribute.value["@type"]]
                    /*
                    if (existing) {
                        if (Array.isArray(existing)) {
                            existing.push(attribute)
                        } else {
                            map[attribute.value["@type"]] = [existing, attribute]
                        }
                    } else {
                        */
                    map[attribute.value["@type"]] = attribute
                    // }
                }
                this.map = map

                const model = new JSONModel({ items: expandedAttributes, map: map })
                this.setModel(model)
                this.prop("/AllAttributes", [
                    { key: "GivenName", text: this.resource("profile.files.overview.GivenName") },
                    { key: "Surname", text: this.resource("profile.files.overview.Surname") },
                    { key: "BirthName", text: this.resource("profile.files.overview.BirthName") },
                    { key: "DisplayName", text: this.resource("profile.files.overview.DisplayName") },
                    { key: "HonorificPrefix", text: this.resource("profile.files.overview.HonorificPrefix") },
                    { key: "HonorificSuffix", text: this.resource("profile.files.overview.HonorificSuffix") },
                    { key: "Pseudonym", text: this.resource("profile.files.overview.Pseudonym") },
                    { key: "Salutation", text: this.resource("profile.files.overview.Salutation") },
                    { key: "Age", text: this.resource("profile.files.overview.Age") },
                    { key: "Citizenship", text: this.resource("profile.files.overview.Citizenship") },
                    { key: "Nationality", text: this.resource("profile.files.overview.Nationality") },
                    { key: "Sex", text: this.resource("profile.files.overview.Sex") },
                    { key: "BirthDate", text: this.resource("profile.files.overview.BirthDate") },
                    { key: "BirthDay", text: this.resource("profile.files.overview.BirthDay") },
                    { key: "BirthMonth", text: this.resource("profile.files.overview.BirthMonth") },
                    { key: "BirthYear", text: this.resource("profile.files.overview.BirthYear") },
                    { key: "BirthPlace", text: this.resource("profile.files.overview.BirthPlace") },
                    { key: "BirthCity", text: this.resource("profile.files.overview.BirthCity") },
                    { key: "BirthState", text: this.resource("profile.files.overview.BirthState") },
                    { key: "BirthCountry", text: this.resource("profile.files.overview.BirthCountry") },
                    {
                        key: "CommunicationLanguage",
                        text: this.resource("profile.files.overview.CommunicationLanguage")
                    },
                    { key: "EMailAddress", text: this.resource("profile.files.overview.EMailAddress") },
                    { key: "Fax", text: this.resource("profile.files.overview.Fax") },
                    { key: "Phone", text: this.resource("profile.files.overview.Phone") },
                    { key: "Website", text: this.resource("profile.files.overview.Website") },
                    { key: "City", text: this.resource("profile.files.overview.City") },
                    { key: "Country", text: this.resource("profile.files.overview.Country") },
                    { key: "Street", text: this.resource("profile.files.overview.Street") },
                    { key: "HouseNumber", text: this.resource("profile.files.overview.HouseNumber") },
                    { key: "ZipCode", text: this.resource("profile.files.overview.ZipCode") }
                ])
            },

            clear() {
                this.super("clear")
                this.setMessage()
                this.expandedAttributes = null
            },

            onNewAttribute() {
                const oModel = this.getView().getModel()
                oModel.setProperty("/name", "")
                oModel.setProperty("/value", "")

                this.openPopup("All")
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

            onEdit() {
                this.navTo("account.attributes.edit")
            },

            onAbort() {
                this.navBack("account.attributes")
            },
            allAttributesChanges() {
                const selectedValueType = this.byId("allName").getSelectedKey()
                const valueEditRenderer = this.byId("allValue")
                valueEditRenderer.setValueType(selectedValueType)
            },
            async onAllSave() {
                try {
                    const oModel = this.currentPopup.getModel()
                    const oOriginalName = oModel.getProperty("/name")

                    const id = this.byId("allName")
                    let oName = id.getSelectedKey()
                    const oValue = this.byId("allValue").getEditedValue()
                    if (oValue === "" || oValue === null || oValue === undefined) {
                        /*
                        this.byId("allValue").setValueState("Error")
                        this.byId("allValue").setValueStateText("Sie sollten einen Wert eingeben.")
                        */
                        return
                    } else {
                        // this.byId("allValue").setValueState("None")
                    }

                    if (oOriginalName) {
                        oName = oOriginalName
                    }
                    this.viewProp("/submitAvailable", false)
                    const createResult = await runtime.currentSession.consumptionServices.attributes.createAttribute({
                        content: oValue
                    })
                    if (createResult.isError) {
                        App.error(createResult.error)
                        return
                    }
                    this.onPopupClose()
                    this.refresh()
                } catch (e) {
                    App.error(e)
                    this.onPopupClose()
                    this.refresh()
                }
            },

            async openPopup(type, content) {
                const oView = this.getView()
                const that = this
                if (!that.popups) {
                    that.popups = {}
                }
                if (!that.popups[type]) {
                    const oDialog = await Fragment.load({
                        id: oView.getId(),
                        name: "nmshd.app.flows.profile.attributes." + type,
                        controller: this
                    })
                    oView.addDependent(oDialog)
                    oDialog.open()
                    that.popups[type] = oDialog
                    that.currentPopup = oDialog
                } else {
                    that.popups[type].open()
                    that.currentPopup = that.popups[type]
                }
                this.setMessage()
                this.viewProp("/submitAvailable", true)
            },

            onPopupClose() {
                /*
                if (this.byId("allValue")) {
                    this.byId("allValue").setValueState("None")
                }
                */
                this.currentPopup.close()
                this.viewProp("/submitAvailable", false)
            }
        })
    }
)
