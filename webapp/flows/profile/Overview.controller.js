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
                    genderValues: [
                        { id: "", icon: "", label: "" },
                        { id: "d", icon: "", label: this.resource("gender.d") },
                        { id: "f", icon: "", label: this.resource("gender.f") },
                        { id: "m", icon: "", label: this.resource("gender.m") }
                    ],
                    isCorporation: false,
                    isPerson: true,
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
                const aAttributes = (await runtime.consumptionServices.attributes.getAttributesByNames({})).value
                this.prop("/map", aAttributes)
                const aAttributesList = (await runtime.consumptionServices.attributes.getAllValid()).value
                const oOverview = {}
                const aCustomAttribute = []
                const aAddresses = []
                const aPostOfficeBoxes = []
                const aPackingstations = []
                const aOfficeHq = []
                const aOfficeAddresses = []
                const aInvoiceAddresses = []
                const aCommunication = []
                const aPersonnelData = [
                    "Person.givenName",
                    "Person.familyName",
                    "Person.gender",
                    "Person.honorificSuffix",
                    "Person.birthDate",
                    "Person.birthPlace",
                    "Person.birthName",
                    "Person.nationality",
                    "Person.taxId",
                    "Address.private"
                ]

                for (const oAttributeItem of aAttributesList) {
                    try {
                        const oAttribute = oAttributeItem.content
                        switch (oAttribute.name.toLowerCase().split(".")[0]) {
                            case "address":
                                aAddresses.push(oAttribute.value ? JSON.parse(oAttribute.value) : oAttribute.value)
                                break
                            case "officehq":
                                aOfficeHq.push(oAttribute.value ? JSON.parse(oAttribute.value) : oAttribute.val)
                                break
                            case "postofficebox":
                                aPostOfficeBoxes.push(oAttribute.value ? JSON.parse(oAttribute.value) : oAttribute.val)
                                break
                            case "packingstation":
                                aPackingstations.push(oAttribute.value ? JSON.parse(oAttribute.value) : oAttribute.val)
                                break
                            case "officeaddress":
                                aOfficeAddresses.push(
                                    oAttribute.value ? JSON.parse(oAttribute.value) : oAttribute.value
                                )
                                break
                            case "invoiceaddress":
                                aInvoiceAddresses.push(oAttribute.value ? JSON.parse(oAttribute.value) : oAttribute.val)
                                break
                            case "comm":
                                oAttribute.originalName = "" + oAttribute.name
                                let aSplit = oAttribute.name.split(".")
                                let sCommName = ""
                                let sCommType = "Typ"
                                let sCommAlt = ""
                                switch (aSplit[1]) {
                                    case "email":
                                        sCommType = "E-Mail" // TODO:
                                        break
                                    case "phone":
                                        sCommType = "Telefon" // TODO:
                                        break
                                    case "fax":
                                        sCommType = "Fax" // TODO:
                                        break
                                    case "mobile":
                                        sCommType = "Mobiltelefon" // TODO:
                                        break
                                    case "facebook":
                                        sCommType = "Facebook" // TODO:
                                        break
                                    case "linkedin":
                                        sCommType = "LinkedIn" // TODO:
                                        break
                                    case "whatsapp":
                                        sCommType = "WhatsApp" // TODO:
                                        break
                                    case "website":
                                        sCommType = "Webseite" // TODO:
                                        break
                                }

                                if (aSplit[2]) {
                                    sCommAlt = aSplit[2]
                                    sCommName = sCommType + " (" + sCommAlt + ")"
                                } else {
                                    sCommName = sCommType
                                }
                                const lookup = "attribute." + oAttribute.originalName
                                const label = this.resource(lookup)
                                oAttribute.label = label !== lookup ? label : oAttribute.originalName
                                oAttribute.name = sCommName

                                aCommunication.push(oAttribute)
                                break
                            default:
                                if (aPersonnelData.indexOf(oAttribute.name) === -1) {
                                    const lookup = "attribute." + oAttribute.name
                                    const label = this.resource(lookup)
                                    oAttribute.label = label !== lookup ? label : oAttribute.name
                                    aCustomAttribute.push(oAttribute)
                                } else {
                                    oOverview[oAttribute.name] = oAttribute.value
                                }
                        }
                    } catch (e) {
                        App.error(e)
                    }
                }

                this.prop("/overview", oOverview)
                this.prop("/custom", aCustomAttribute)
                this.prop("/addresses", aAddresses)
                this.prop("/postOfficeBoxes", aPostOfficeBoxes)
                this.prop("/packingstations", aPackingstations)
                this.prop("/officeHqs", aOfficeHq)
                this.prop("/officeAddresses", aOfficeAddresses)
                this.prop("/invoiceAddresses", aInvoiceAddresses)
                this.prop("/comm", aCommunication)

                if (aAttributes.type) {
                    const sType = aAttributes.type._value
                    if (sType === "corporation") {
                        this.viewProp("/isPerson", false)
                        this.viewProp("/isCorporation", true)
                    } else if (sType === "person") {
                        this.viewProp("/isPerson", true)
                        this.viewProp("/isCorporation", false)
                    }
                } else {
                    this.viewProp("/isPerson", true)
                    this.viewProp("/isCorporation", false)
                }

                this.files = await App.FileUtil.getFiles()
                this.files.refresh()
                this.setModel(this.files, "files")

                this.prop("/CommAttributes", [
                    { key: "Comm.email", text: "E-Mail" }, // TODO:
                    { key: "Comm.phone", text: "Telefon" }, // TODO:
                    { key: "Comm.mobile", text: "Mobil" }, // TODO:
                    { key: "Comm.fax", text: "Fax" }, // TODO:
                    { key: "Comm.website", text: "Website" } // TODO:
                ])
            },

            clear() {
                this.super("clear")
                this.setMessage()
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
                if (this.byId("commValue")) {
                    this.byId("commValue").setValueState("None")
                }
                this.currentPopup.close()
                this.viewProp("/submitAvailable", false)
            },

            async onAttributeSave() {
                this.viewProp("/submitAvailable", false)
                const oModel = this.currentPopup.getModel()
                const oOriginalName = oModel.getProperty("/originalName")
                let oName = oModel.getProperty("/name")
                const oValue = oModel.getProperty("/value")

                if (oOriginalName) {
                    oName = oOriginalName
                }
                await runtime.consumptionServices.attributes.succeedAttribute({
                    attribute: {
                        name: oName,
                        value: oValue
                    }
                })

                this.onPopupClose()
                this.refresh()
            },

            async onCommSave() {
                try {
                    const oModel = this.currentPopup.getModel()
                    const oOriginalName = oModel.getProperty("/name")

                    const id = this.byId("commName")
                    let oName = id.getSelectedKey()
                    const oValue = oModel.getProperty("/value")
                    if (oValue === "" || oValue === null || oValue === undefined) {
                        this.byId("commValue").setValueState("Error")
                        this.byId("commValue").setValueStateText("Sie sollten einen Wert eingeben.")
                        return
                    } else {
                        this.byId("commValue").setValueState("None")
                    }

                    if (oOriginalName) {
                        oName = oOriginalName
                    }
                    this.viewProp("/submitAvailable", false)
                    await runtime.consumptionServices.attributes.succeedAttribute({
                        attribute: {
                            name: oName,
                            value: oValue
                        }
                    })
                    this.onPopupClose()
                    this.refresh()
                } catch (e) {
                    App.error(e)
                    this.onPopupClose()
                    this.refresh()
                }
            },

            addressAttributesFactory(sId, oContext) {
                const oAddressItem = oContext.getObject()

                let inputType
                switch (oAddressItem.semantic) {
                    default:
                        inputType = InputType.Text
                        break
                    case "number":
                        inputType = InputType.Number
                        break
                    case "email":
                        inputType = InputType.Email
                        break
                    case "password":
                        inputType = InputType.Password
                        break
                    case "phone":
                        inputType = InputType.Tel
                        break
                    case "url":
                        inputType = InputType.Url
                }

                const oUIControl = new FormElement({
                    label: `{t>${oAddressItem.text}}`,
                    fields: [
                        new Input({
                            value: `{/addressPopup/${oAddressItem.value}}`,
                            type: inputType,
                            maxLength: oAddressItem.maxLength ? oAddressItem.maxLength : 0,
                            change: (oEvent) => {
                                const oInput = oEvent.getSource()
                                if (!oEvent.getParameter("value")) {
                                    oInput.setValueState(ValueState.Error)
                                } else {
                                    oInput.setValueState(ValueState.None)
                                }
                            }
                        })
                    ]
                })
                return oUIControl
            },

            async onAddressSave(oEvent) {
                this.viewProp("/submitAvailable", false)
                this.setMessage()
                const oAddressFormContainer = this.getView().byId("AddressFormContainer")
                const aFormElements = oAddressFormContainer.getFormElements()
                let bAddressFilled = true

                for (const oFormElement of aFormElements) {
                    // as defined in the factory function, there can be only one control under the aggregation fields
                    const oInput = oFormElement.getFields()[0]
                    if (!oInput.getValue()) {
                        oInput.setValueState(ValueState.Error)
                        bAddressFilled = false
                    }
                }
                if (!bAddressFilled) {
                    this.setMessage(this.resource("attribute.fragment.error"), "Error")
                    this.viewProp("/submitAvailable", true)
                    return
                }

                const oViewModel = this.getView().getModel("v")
                const sKey = oAddressFormContainer.getBindingInfo("formElements").path.slice(1)
                const oModel = this.currentPopup.getModel()
                const oPopupInputFields = oModel.getProperty("/addressPopup")

                const oAddress = {
                    name: oPopupInputFields.name,
                    street: oPopupInputFields.street,
                    zipCode: oPopupInputFields.zipCode,
                    houseNo: oPopupInputFields.houseNo,
                    city: oPopupInputFields.city,
                    country: oPopupInputFields.country,
                    state: oPopupInputFields.state,
                    vatId: oPopupInputFields.vatId,
                    postNo: oPopupInputFields.postNo,
                    packingstation: oPopupInputFields.packingstation,
                    boxNo: oPopupInputFields.boxNo
                }

                await runtime.consumptionServices.attributes.succeedAttribute({
                    attribute: {
                        name: `${sKey}.${(await NMSHDTransport.CoreId.generate()).toString()}`,
                        value: JSON.stringify(oAddress)
                    }
                })
                this.onPopupClose()
                this.refresh()
            },

            async onNewAddress(oEvent) {
                const oModel = this.getView().getModel()
                const sKey = oEvent.getSource().getKey()
                oModel.setProperty("/addressPopup", {})

                await this.openPopup("Address")
                const oFormContainer = this.byId("AddressFormContainer")
                const oDialog = this.byId("AddressFragmentDialog")

                oFormContainer.bindAggregation("formElements", {
                    model: "addresses",
                    path: "/" + sKey,
                    factory: this.addressAttributesFactory
                })
            },

            async openFile(oEvent) {
                const oPath = oEvent.getSource().getParent().getBindingContextPath()
                const item = this.getModel("files").getProperty(oPath)

                await App.FileUtil.openFile(item)
            },

            toUpload() {
                this.navTo("account.files.upload")
            },

            onNewAttribute() {
                const oModel = this.getView().getModel()
                oModel.setProperty("/name", "")
                oModel.setProperty("/value", "")

                this.openPopup("Custom")
            },

            onNewComm() {
                const oModel = this.getView().getModel()
                oModel.setProperty("/name", "")
                oModel.setProperty("/value", "")

                this.openPopup("Communication")
            },

            onItemPress(oEvent) {
                const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
                const oName = oItem.getBindingContext().getProperty("name")
                this.navTo("user.attribute", { attributeId: oName })
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

            async onSave() {
                this.viewProp("/submitAvailable", false)
                await runtime.transportServices.account.disableAutoSync()
                const aIds = [
                    "Person.familyName",
                    "Person.givenName",
                    "Person.honorificSuffix",
                    "Person.gender",
                    "Person.birthDate",
                    "Person.birthPlace",
                    "Person.birthName",
                    "Person.nationality",
                    "Person.taxId"
                ]
                for (let i = 0; i < aIds.length; i++) {
                    let sName = aIds[i]
                    let sValue = ""
                    let oControl = this.byId(sName)
                    if (oControl.getValue) {
                        sValue = oControl.getValue()
                    } else if (oControl.getSelectedKey) {
                        sValue = oControl.getSelectedKey()
                    }

                    let attribute = {
                        name: sName,
                        value: sValue
                    }
                    await runtime.consumptionServices.attributes.succeedAttribute({
                        attribute: attribute
                    })
                }
                runtime.transportServices.account.enableAutoSync()

                App.navTo("account.home", "account.attributes", {
                    accountId: this.accountId
                })
            }
        })
    }
)
