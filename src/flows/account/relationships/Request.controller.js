sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/Formatter"
    ],
    (App, AccountController, JSONModel) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.relationships.Request", {
            routeName: "account.relationships.request",

            createViewModel() {
                return {
                    error: false,
                    submitEnabled: false,
                    requestRunning: false
                }
            },

            onInitialized() {
                this.resetViewModel()
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

                this.requestId = oEvent.getParameter("arguments").requestId
                await this.refresh()
            },

            switchModel(index) {
                this.refresh(index)
            },

            onInfoPressed(oEvent) {
                this.navTo("account.attributes.detail", {
                    accountId: App.accountId(),
                    attributeId: oEvent.getParameter("attributeId")
                })
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
                if (!this.request) return
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
                this.viewProp("/editable", false)
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", false)

                const requestResult = await runtime.currentSession.consumptionServices.incomingRequests.getRequest({
                    id: this.requestId
                })
                if (requestResult.isError) {
                    App.error(requestResult.error)
                    return
                }
                const request = requestResult.value
                const expandedRequest = await runtime.currentSession.expander.expandLocalRequestDTO(request)
                this.request = expandedRequest

                if (this.model) {
                    this.model.setData(this.request)
                } else {
                    this.model = new JSONModel(this.request)
                    this.model.setDefaultBindingMode("OneWay")
                    this.setModel(this.model)
                }

                if (this.request.status === "ManualDecisionRequired") {
                    this.viewProp("/editable", true)
                    this.onChange()
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

                    this.navTo("account.relationships", {
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

                    this.navTo("account.relationships", {
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
