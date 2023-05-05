/*global history */
sap.ui.define(
    [
        "nmshd/app/core/App",
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Model",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/routing/History",
        "sap/ui/Device",
        "nmshd/app/Component",
        "nmshd/app/core/Event",
        "sap/m/MessageBox",
        "sap/ui/core/Fragment",
        "sap/ui/core/message/Message",
        "sap/ui/core/MessageType",
        "sap/m/MessageToast",
        "sap/ui/base/Event"
    ],
    (
        App,
        Controller,
        Model,
        JSONModel,
        History,
        Device,
        Component,
        Event,
        MessageBox,
        Fragment,
        Message,
        MessageType,
        MessageToast,
        EventBase
    ) => {
        "use strict"
        function _super(functionName, ...argArray) {
            const f = Controller.prototype[functionName]
            if (!f)
                throw new Error(
                    "Function '" +
                        functionName +
                        "' was not found on parent class '" +
                        Controller.getMetadata().getName() +
                        "'."
                )
            f.call(this, ...argArray)
        }

        return Controller.extend("nmshd.app.core._BaseController", {
            /**
             * Uses the default onInit method of UI5 to inject standard functionality
             * like routing, model creation and binding.
             *
             * Use new onInitialized() method to inject your functionality.
             */
            onInit(oEvent) {
                const that = this
                Event.subscribe("App", "hashchange", (owner, message, data) => {
                    if (this._oMessageBoxOpen && this._oMessagePopover) {
                        this._oMessagePopover.close()
                    }
                })
                this._loadingCounter = 0

                let exited = false
                let entered = false

                const setRouteParameter = (oEvent) => {
                    const eventArguments = oEvent.getParameter("arguments")
                    const route = {}
                    route["_arguments"] = {}
                    route["_name"] = oEvent.getParameter("name")
                    for (const prop in eventArguments) {
                        route[prop] = eventArguments[prop]
                        route["_arguments"][prop] = eventArguments[prop]
                    }
                    that.viewProp("/route", route)
                    return route
                }

                const doRouting = (oEvent) => {
                    let routeMatched = false
                    let inputRouteName = oEvent.getParameter("name")
                    if (!inputRouteName) inputRouteName = ""

                    if (typeof this.routeName !== "undefined" && this.routeName === inputRouteName) {
                        routeMatched = true
                    } else if (typeof this.routeNames !== "undefined" && this.routeNames instanceof Array) {
                        for (let i = 0, il = this.routeNames.length; i < il; i++) {
                            const routeName = this.routeNames[i]
                            if (routeName === inputRouteName) {
                                routeMatched = true
                                i = il
                            }
                        }
                    } else if (typeof this.routePattern !== "undefined" && this.routePattern instanceof RegExp) {
                        if (inputRouteName.match(this.routePattern)) {
                            routeMatched = true
                        }
                    }

                    if (!routeMatched && !exited) {
                        exited = true
                        entered = false
                        setRouteParameter(oEvent)
                        if (that.onRouteExit) {
                            that.onRouteExit(oEvent)
                        }
                    } else if (routeMatched && !entered) {
                        exited = false
                        entered = true
                        setRouteParameter(oEvent)
                        if (that.onRouteEntry) {
                            that.onRouteEntry(oEvent)
                        }
                    }
                }

                //If we have only a single route matching this controller
                if (typeof this.routeName !== "undefined") {
                    this.getRouter().attachRouteMatched(doRouting, this)

                    const route = this.getRouter().getRoute(this.routeName)
                    if (route) {
                        route.attachPatternMatched(this._onPatternMatched, this)
                    }

                    if (this.routeName === "") {
                        this.getRouter().attachBypassed(doRouting, this)
                        this.getRouter().attachBypassed(this._onPatternMatched, this)
                    }
                }

                //If we have multiple routes matching this controller
                else if (typeof this.routeNames !== "undefined" && this.routeNames instanceof Array) {
                    for (let k = 0, kl = this.routeNames.length; k < kl; k++) {
                        const routeName = this.routeNames[k]
                        const route = this.getRouter().getRoute(routeName)
                        if (route) {
                            route.attachPatternMatched(this._onPatternMatched, this)
                        }
                        if (routeName === "") {
                            this.getRouter().attachBypassed(doRouting, this)
                            this.getRouter().attachBypassed(this._onPatternMatched, this)
                        }
                    }

                    this.getRouter().attachRouteMatched(doRouting, this)
                } else if (typeof this.routePattern !== "undefined" && this.routePattern instanceof RegExp) {
                    const allRoutes = this.getRouter()._oRoutes
                    for (const m in allRoutes) {
                        const routeKey = m
                        if (routeKey.match(this.routePattern)) {
                            const route = this.getRouter().getRoute(routeKey)
                            if (route) {
                                route.attachPatternMatched(this._onPatternMatched, this)
                            }
                            if (routeKey === "") {
                                this.getRouter().attachBypassed(doRouting, this)
                                this.getRouter().attachBypassed(this._onPatternMatched, this)
                            }
                        }
                    }

                    this.getRouter().attachRouteMatched(doRouting, this)
                }

                this.resetViewModel()
                this.resetItemModel()

                this.setModel(App.getModel(), "a")

                this._bindView("/")

                if (this.onInitialized && typeof this.onInitialized === "function") {
                    this.onInitialized(oEvent)
                }

                this.getView().setModel(sap.ui.getCore().getMessageManager().getMessageModel(), "message")

                sap.ui.getCore().getMessageManager().registerObject(this.getView(), true)

                Fragment.load({
                    name: "nmshd.app.core.fragments.MessagePopover",
                    controller: this
                })
                    .then((oMessagePopoverPage) => {
                        this._oMessagePopover = oMessagePopoverPage
                        this.getView().addDependent(this._oMessagePopover)
                    })
                    .catch((oError) => {
                        appLogger.error("Could not load Fragment", oError)
                    })
            },

            resetViewModel() {
                const model = this.getModel("v")
                let route = {}
                if (model) route = model.getProperty("/route")

                if (this.createViewModel && typeof this.createViewModel === "function") {
                    let viewModel = this.createViewModel()
                    if (!(viewModel instanceof Model)) {
                        viewModel = new JSONModel(viewModel)
                    }

                    viewModel.setDefaultBindingMode("OneWay")
                    viewModel.setProperty("/route", route)
                    this.setModel(viewModel, "v")
                } else {
                    const viewModel = new JSONModel({})
                    viewModel.setProperty("/route", route)
                    this.setModel(viewModel, "v")
                }
            },

            resetItemModel() {
                if (this.createItemModel && typeof this.createItemModel === "function") {
                    let itemModel = this.createItemModel()
                    if (!(itemModel instanceof Model)) {
                        itemModel = new JSONModel(itemModel)
                    }

                    this.setModel(itemModel)
                } else {
                    this.setModel(new JSONModel({}))
                }
            },

            /**
             * Binds the view to the object path. Makes sure that detail view displays
             * a busy indicator while data for the corresponding element binding is loaded.
             * @function
             * @param {string} sObjectPath path to the object to be bound to the view.
             * @private
             */
            _bindView(sObjectPath) {
                // If the view was not bound yet its not busy, only if the binding requests data it is set to busy again
                this.viewProp("/busy", false)

                this.getView().bindElement({ path: sObjectPath })
            },

            /**
             * Fetches the arguments out of the router and sets the view model accordingly.
             *
             * This is an internal function for processing the internal routing and eventing. Please
             * use onRouteMatched for your needs.
             *
             * * Extracts all required attributes for this route and writes it to /route in the view model
             * * Adds the controller to a global map "controllerForRoute" for easier debugging
             * * Clones the internal UI5 event, as after a certain time period the event is cleared. This results
             *   in empty events when asynchronous functionality is involved
             * * Handles route configurations for "showMaster" or "detailTarget" custom route properties
             * * Calls onRouteMatched functions of the controller if the app has been initialized
             *
             * @function
             * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
             * @private
             */
            _onPatternMatched(oEvent) {
                const that = this
                const eventArguments = oEvent.getParameter("arguments")
                const route = {}
                route["_name"] = oEvent.getParameter("name")
                route["_arguments"] = {}
                for (const prop in eventArguments) {
                    route[prop] = eventArguments[prop]
                    route["_arguments"][prop] = eventArguments[prop]
                }
                this.viewProp("/route", route)

                // @ts-ignore
                if (!window.controllerForRoute) window.controllerForRoute = {}
                // @ts-ignore
                window.controllerForRoute[route._name] = that

                //Clone the Event and submit the clone further, otherwise the event is cleared
                //after a short period of time, resulting in errors (empty events) after awaiting promises
                const e = new EventBase("routePatternMatched", that.getRouter(), {
                    name: "routePatternMatched",
                    arguments: route,
                    // @ts-ignore
                    config: oEvent.getParameters().config
                })

                let config
                // @ts-ignore
                if (oEvent.getParameters().config) {
                    // @ts-ignore
                    config = oEvent.getParameters().config
                } else if (oEvent.getId() === "bypassed") {
                    // @ts-ignore
                    config = oEvent.getSource()._oConfig.bypassed
                }

                if (config) {
                    if (config.showMaster) {
                        // @ts-ignore
                        // @ts-ignore
                        const masterTarget = this.getRouter().getTarget(config.target[0])
                        const absoluteViewName =
                            this.getRouter()._oConfig.viewPath + "." + masterTarget._oOptions.viewName
                        if (absoluteViewName === this.getView().getViewName()) {
                            const root = sap.ui.getCore().byId(this.getRouter()._oConfig.controlId)

                            // @ts-ignore
                            if (root && root.getMode) {
                                // @ts-ignore
                                if (root.getMode() === "ShowHideMode") {
                                    // @ts-ignore
                                    root.showMaster()
                                } else {
                                    // @ts-ignore
                                    root.toMaster(this.getView().getId())
                                }
                            }
                        }
                    }

                    // @ts-ignore
                    if (!Device.system.phone && config.detailTarget) {
                        this.getRouter()
                            .getTargets()
                            // @ts-ignore
                            .display(config.detailTarget, route["_arguments"])
                            .then((views) => {
                                for (let i = 0; i < views.length; i++) {
                                    let view = views[i]
                                    if (!view || view.error || !view.view) {
                                        appLogger.error(
                                            "Given target was not found while showing given detailTarget of route. See route " +
                                                route._name
                                        )
                                        continue
                                    }
                                    view = view.view
                                    const controller = view.getController()
                                    controller.viewProp("/route", route)
                                    if (controller.onRouteMatched) {
                                        if (App.isInitialized()) {
                                            controller.onRouteMatched.apply(controller, [e])
                                        } else {
                                            Event.subscribeOnce(
                                                "App",
                                                "ready",
                                                (param) => {
                                                    controller.onRouteMatched.apply(controller, [e])
                                                },
                                                that,
                                                oEvent
                                            )
                                        }
                                    }
                                }
                            })
                    }
                }

                if (config && !config.showMaster) {
                    const root = sap.ui.getCore().byId(this.getRouter()._oConfig.controlId)

                    // @ts-ignore
                    if (root.getMode && root.getMode() === "ShowHideMode") {
                        // @ts-ignore
                        root.hideMaster()
                    }
                }

                if (this.onRouteMatched && typeof this.onRouteMatched === "function") {
                    if (App.isInitialized()) {
                        this.onRouteMatched(e)
                    } else {
                        Event.subscribeOnce(
                            "App",
                            "ready",
                            (param) => {
                                that.onRouteMatched(e)
                            },
                            that,
                            oEvent
                        )
                    }
                }
            },

            /**
             * Navigates to the given target with given object's properties
             *
             * @param target The target route name
             * @param object The parameter object for the given route
             * @param replace Whether or not the history should be omitted (true) or written (default, false)
             */
            navTo(target, object, replace) {
                const bReplace = replace ? true : false
                if (!object) object = {}
                return this.getRouter().navTo(target, object, bReplace)
            },

            /**
             * Convenience method for accessing the router in every controller of the application.
             * @public
             * @returns {sap.ui.core.routing.Router} the router for this component
             */
            getRouter() {
                if (!this.getOwnerComponent()) {
                    return App.appController.getOwnerComponent().getRouter()
                }
                return this.getOwnerComponent().getRouter()
            },

            /**
             * Uses the complete DOM id and removes the prefix of the current views to
             * retrieve the possible UI5 id
             * Example: dom2id("__component0---detail--page") returns "page"
             *
             * @param sDomId The DOM id of a given UI5 control
             * @returns The UI5 id which is used internally/in this controller
             */
            dom2id(sDomId) {
                return sDomId.substr(this.getView().getId().length + 2)
            },

            /**
             * Creates the concatenated DOM-Id of the given UI5-Id
             * Example: id2dom("page") returns "__component0---detail--page"
             *
             * @param sId The UI5-Id of the current view
             * @returns The concatenated DOM-Id from the current view and the UI5-Id
             */
            id2dom(sId) {
                return this.getView().getId() + "--" + sId
            },

            controlById(sId) {
                return this.jQueryById(sId).control()
            },

            /**
             * Creates a jQuery wrapper for the DOM Element of the given UI5 id
             * Example: jQueryById("page") returns $("#__component0---detail--page.sapMSemanticPage")
             *
             * @param sId The UI5-Id of the current view
             * @returns The jQuery wrapper for the DOM Element of the given UI5 id
             */
            jQueryById(sId) {
                return $("#" + this.id2dom(sId))
            },

            /**
             * Returns the first DOM element found with the given UI5 id
             * Example: domById("page") returns <div id="__component0---detail--page">
             *
             * @param sId The UI5-Id of the current view
             * @returns The first DOM element found for the given UI5 id
             */
            domById(sId) {
                return this.jQueryById(sId)[0]
            },

            /**
             * Returns the translated text of the current resource bundle with
             * given key and values
             * Example: resource("login.welcome", ["User"]) returns "Welcome User" when property "login.welcome=Welcome {0}"
             *
             * @param key The resource bundles key to fetch the translation from
             * @param values The array of values which should be taken into consideration while translating ({0} would be first index)
             * @returns The fully translated string
             */
            resource(key, values) {
                return this.getResourceBundle().getText(key, values)
            },

            /**
             * Shortcut function to access the current item model with the given property. If value is empty
             * the property is read, if value is set, the property is written
             *
             * @param prop The property to read/write
             * @param value The value to set (leave blank to read property)
             * @returns The value of the property in the current item model
             */
            prop(prop, value) {
                //Get Prop
                if (typeof value === "undefined") {
                    return this.getModel().getProperty(prop)
                }
                //Set Prop
                else {
                    return this.getModel().setProperty(prop, value)
                }
            },

            /**
             * Shortcut function to access the current view model with the given property. If value is empty
             * the property is read, if value is set, the property is written
             *
             * @param prop The property to read/write
             * @param value The value to set (leave blank to read property)
             * @returns The value of the property in the current view model
             */
            viewProp(prop, value) {
                //Get Prop
                if (typeof value === "undefined") {
                    return this.getModel("v").getProperty(prop)
                }
                //Set Prop
                else {
                    return this.getModel("v").setProperty(prop, value)
                }
            },

            /**
             * Increments the current loading counter and set the "busy" view property to true
             */
            loadInc() {
                this._loadingCounter++
                const route = this.viewProp("/route")
                App.Bus.publish("Content", "loadInc", { route: route, counter: this._loadingCounter })
                App.Bus.publish("Content", "loading", { route: route, counter: this._loadingCounter, loading: true })
                this.viewProp("/busy", true)
                const page = this.byId("page")
                if (page) {
                    page.addStyleClass("loading")
                }
            },

            /**
             * Decrements the current loading counter and sets the "busy" view property to false
             * if the counter drops to or below 0
             */
            loadDec() {
                const route = this.viewProp("/route")
                if (this._loadingCounter > 0) {
                    this._loadingCounter--
                    App.Bus.publish("Content", "loadDec", { route: route, counter: this._loadingCounter })
                }
                if (this._loadingCounter <= 0) {
                    this.viewProp("/busy", false)
                    App.Bus.publish("Content", "loading", {
                        route: route,
                        counter: this._loadingCounter,
                        loading: false
                    })
                    const page = this.byId("page")
                    if (page) {
                        page.removeStyleClass("loading")
                    }
                }
            },

            /**
             * Set the current "busy" view property to true or false
             * @param isLoading Whether or not the busy property should be true/false
             */
            loadSet(isLoading) {
                this._loadingCounter = 0
                this.viewProp("/busy", !!isLoading)
            },

            /**
             * Shortcut function which takes a Promise and increments/decrements the
             * loading counter depending on its state.
             * Example: load(Data.getItems())
             */
            load(promise) {
                this.loadInc()
                return promise.finally(() => this.loadDec())
            },

            /**
             * Convenience method for getting the view model by name in every controller of the application.
             * @public
             * @param {string} sName the model name
             * @returns {sap.ui.model.Model} the model instance
             */
            getModel(sName) {
                return this.getView().getModel(sName)
            },

            /**
             * Convenience method for setting the view model in every controller of the application.
             * @public
             * @param {sap.ui.model.Model} oModel the model instance
             * @param {string} sName the model name
             * @returns the view instance
             */
            setModel(oModel, sName) {
                return this.getView().setModel(oModel, sName)
            },

            /**
             * Convenience method for getting the resource bundle.
             * @public
             * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
             */
            getResourceBundle() {
                let owner = this.getOwnerComponent()
                if (!owner) {
                    owner = App.appController.getOwnerComponent().getRouter()
                }
                return owner.getModel("t").getResourceBundle()
            },

            /**
             * Event handler for navigating back.
             * It there is a history entry we go one step back in the browser history
             * If not, it will replace the current entry of the browser history with the master route.
             * @public
             */
            onNavBack() {
                const sPreviousHash = History.getInstance().getPreviousHash()

                if (sPreviousHash !== undefined) {
                    history.go(-1)
                } else {
                    this.getRouter().navTo("master", {}, true)
                }
            },

            onOpenProfile() {
                this.navTo("profile")
            },

            /** BaseController's method addError takes an object with the following attributes
             * - oError (the error message)
             * - sUserFriendlyMsg (a user friendly message for the not advanced mode)
             * - quick (do not generate a status bar message, just show a toast with the user friendly message)
             *
             * An advanced user will see the userFriendlyMsg and the error, an unadvanced
             * user will see only the userFriendlyMsg if it isn´t undefined.
             *
             * @param {Object} param
             * @param {Object} param.oError
             * @param {String} param.sUserFriendlyMsg
             * @param {boolean} param.quick
             */
            async addError({ oError, sUserFriendlyMsg, quick }) {
                const advancedMode = this.account ? !!(await this.account().info.get("expertMode")) : false

                if (oError) {
                    appLogger.error(oError)
                }

                if (sUserFriendlyMsg != undefined) {
                    if (quick) {
                        MessageToast.show(sUserFriendlyMsg, { duration: 5000 })
                        setTimeout(App.hideAllToasts, 5000)
                        return
                    }

                    MessageToast.show(sUserFriendlyMsg, {
                        duration: 5000
                    })
                    setTimeout(App.hideAllToasts, 5000)
                    sap.ui
                        .getCore()
                        .getMessageManager()
                        .addMessages(
                            new Message({
                                message: this.resource("global.internalError"),
                                additionalText: sUserFriendlyMsg,
                                description: advancedMode ? oError : undefined,
                                type: MessageType.Error
                            })
                        )
                } else if (advancedMode) {
                    sap.ui
                        .getCore()
                        .getMessageManager()
                        .addMessages(
                            new Message({
                                message: this.resource("global.internalError"),
                                description: oError,
                                type: MessageType.Error
                            })
                        )
                } else {
                    MessageToast.show(this.resource("global.errorToast"), {
                        duration: 5000
                    })
                    setTimeout(App.hideAllToasts, 5000)
                    sap.ui
                        .getCore()
                        .getMessageManager()
                        .addMessages(
                            new Message({
                                message: this.resource("global.internalError"),
                                additionalText: sUserFriendlyMsg,
                                description: advancedMode ? oError : undefined,
                                type: MessageType.Error
                            })
                        )
                }
            },

            openMessageBox(oEvent) {
                if (this._oMessageBoxOpen) return
                if (oEvent.getSource() && this._oMessagePopover) {
                    this._oMessageBoxOpen = true
                    this._oMessagePopover.openBy(oEvent.getSource())
                }
            },

            closeMessageBox(oEvent) {
                this._oMessageBoxOpen = false
            }
        })
    }
)
