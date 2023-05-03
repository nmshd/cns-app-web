sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/ui/layout/form/FormElement",
        "sap/m/Text",
        "sap/m/Input",
        "sap/m/CheckBox",
        "sap/m/SegmentedButton",
        "sap/m/SegmentedButtonItem",
        "sap/ui/unified/FileUploader",
        "sap/m/Select",
        "sap/m/DatePicker",
        "sap/ui/layout/GridData",
        "sap/ui/core/Item",
        "nmshd/app/core/Formatter",
        "sap/ui/core/CustomData",
        "sap/m/Image",
        "sap/ui/layout/form/SimpleForm",
        "sap/m/Label",
        "sap/m/Link",
        "sap/m/VBox",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/controls/requests/RequestItemGroupRenderer",
        "nmshd/app/core/controls/requests/RequestItemRenderer"
    ],
    (
        App,
        AccountController,
        FormElement,
        Text,
        Input,
        CheckBox,
        SegmentedButton,
        SegmentedButtonItem,
        FileUploader,
        Select,
        DatePicker,
        GridData,
        Item,
        Formatter,
        CustomData,
        Image,
        SimpleForm,
        Label,
        Link,
        VBox,
        JSONModel,
        RequestItemGroupRenderer,
        RequestItemRenderer
    ) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.relationships.Template", {
            formatter: Formatter,
            routePattern: new RegExp("^account.template"),
            createViewModel() {
                return {
                    error: false,
                    submitEnabled: false,
                    requestRunning: false
                }
            },

            getResponseParams() {
                const value = this.byId("request").getResponseParams()
                return value
            },

            getRejectResponseParams() {
                const value = this.byId("request").getRejectResponseParams()
                return value
            },

            getContext() {
                const context = this.byId("request").getContext()
                return context
            },
            getSelected() {
                const selection = this.byId("request").getSelected()
                return selection
            },

            async onRouteMatched(oEvent) {
                this.clear()
                await this.super("onRouteMatched", oEvent, true)

                this.templateId = this.viewProp("/route/templateId")
                const template = await App.RelationshipTemplateUtil.getRelationshipTemplate(this.templateId)
                if (!template) {
                    return
                }
                this.request = template.getData().onNewRelationship
                this.setModel(template)
                this.template = template

                const themeInfo = await App.themeInfoForTemplate(this.template.getProperty("/"))

                if (themeInfo) {
                    this.viewProp("/theme", themeInfo)
                    App.appController.viewProp("/theme", themeInfo)
                    App.appController.setTitle(this.resource("relationships.template.request"))
                }

                this.refresh()
            },

            switchModel(index) {
                this.refresh(index)
            },

            onRouteExit(oEvent) {
                App.appController.viewProp("/theme", {
                    image: "",
                    fontColor: "#ffffff",
                    fontStyle: "light",
                    backgroundColor: "#3d86f0"
                })
                App.appController.setTitle("")
            },

            async checkCanAccept() {
                if (!this.template || !this.request) return
                const responseParams = this.getResponseParams()
                const canAcceptResult = await runtime.currentSession.consumptionServices.incomingRequests.canAccept(
                    responseParams
                )
                if (canAcceptResult.isSuccess) {
                    if (canAcceptResult.value.isSuccess) {
                        this.byId("acceptButton").setEnabled(true)
                        this.setMessage()
                        this.byId("request").setValidationItems()
                        return
                    }
                    this.byId("acceptButton").setEnabled(false)
                    this.byId("request").setValidationItems(canAcceptResult.value.items)
                    this.setMessage("There are errorneous items which block the request.", "Error")
                    console.warn("Cannot Accept", canAcceptResult.value.items)
                } else {
                    this.byId("acceptButton").setEnabled(false)
                    this.byId("request").setValidationItems([])
                    this.setMessage(canAcceptResult.error, "Error")
                    console.warn("Cannot Accept", canAcceptResult.error)
                }
            },

            async onChange(oEvent) {
                await this.checkCanAccept()
            },

            setMessage(message, type) {
                const strip = this.byId("message")
                if (!message) {
                    strip.setText("")
                    strip.setVisible(false)
                } else {
                    strip.setText(message)
                    strip.setVisible(true)
                    strip.setType(type)
                }
            },

            async refresh() {
                this.setMessage()

                this.viewProp("/error", false)
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", false)

                const templateIsValid = await this.checkTemplate()
                if (templateIsValid) {
                    this.refreshWithData(this.template.getData())
                    await this.checkCanAccept()
                }
            },

            async checkTemplate() {
                if (!this.template || !this.template.getData()) {
                    sap.ui.getCore().getEventBus().publish("template", "error", { message: "Keine Daten verfügbar." })
                    this.navBack("account.relationships")
                    return false
                }
                const template = this.template.getData()
                if (runtime.currentAccount.id === template.createdBy) {
                    this.setMessage(this.resource("relationships.template.selfRelationshipError"), "Error")
                    this.viewProp("/error", true)
                    return false
                }

                const relationshipModel = await App.RelationshipUtil.getRelationshipByAddress(template.createdBy.id)
                if (!relationshipModel) return true

                const identity = relationshipModel.getData()
                this.relationshipIdentityDVO = identity

                if (identity.relationship.status === "Active") {
                    try {
                        App.navTo("account.relationships", "account.relationship.home", {
                            accountId: this.accountId,
                            relationshipId: this.relationshipIdentityDVO.relationship.id
                        })
                    } catch (e) {
                        this.setMessage(this.resource("relationships.template.unavailableError"), "Error")
                        this.viewProp("/error", true)
                    }
                    return false
                } else if (
                    identity.relationship.status === "Pending" &&
                    identity.relationship.direction === "Outgoing"
                ) {
                    App.navTo("account.relationships", "account.outgoingrequest", {
                        accountId: this.accountId,
                        relationshipId: identity.relationship.id
                    })
                    return false
                } else if (
                    identity.relationship.status === "Pending" &&
                    identity.relationship.direction === "Incoming"
                ) {
                    App.navTo("account.relationships", "account.incomingrequest", {
                        accountId: this.accountId,
                        relationshipId: identity.relationship.id
                    })
                    return false
                }
                return true
            },

            refreshWithData(data) {
                if (this.model) {
                    this.model.setData(data)
                } else {
                    this.model = new JSONModel(data)
                    this.model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay)
                    this.setModel(this.model)
                }
            },

            async onAccept() {
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", true)
                await runtime.currentSession.transportServices.account.disableAutoSync()
                try {
                    const responseParams = this.getResponseParams()

                    const acceptResult = await runtime.currentSession.consumptionServices.incomingRequests.accept(
                        responseParams
                    )
                    if (acceptResult.isError) return App.error(acceptResult.error)

                    App.navTo("account.home", "account.relationships", {
                        accountId: this.accountId
                    })
                } catch (e) {
                    App.error(e)
                } finally {
                    this.viewProp("/requestRunning", false)
                    runtime.currentSession.transportServices.account.enableAutoSync()
                }
            },

            clear() {
                this.super("clear")
            },

            onNavButtonPress() {
                this.navBack()
            },

            async onReject() {
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", true)
                await runtime.currentSession.transportServices.account.disableAutoSync()
                try {
                    const rejectResult = await runtime.currentSession.consumptionServices.incomingRequests.reject(
                        this.getRejectResponseParams()
                    )
                    if (rejectResult.isError) return App.error(rejectResult.error)

                    App.navTo("account.home", "account.relationships", {
                        accountId: this.accountId
                    })
                } catch (e) {
                    App.error(e)
                } finally {
                    this.viewProp("/requestRunning", false)
                    runtime.currentSession.transportServices.account.enableAutoSync()
                }
            }
        })
    }
)
