import ResourceBundle from "sap/base/i18n/ResourceBundle"
import Event from "sap/ui/base/Event"
import UIComponent from "sap/ui/core/UIComponent"
import History from "sap/ui/core/routing/History"
import Router from "sap/ui/core/routing/Router"
import ResourceModel from "sap/ui/model/resource/ResourceModel"
import App from "./App"
import AppController from "./AppController"

/**
 * @namespace nmshd.app.core
 */
export default abstract class RoutingController extends AppController {
    protected routeName?: string
    protected routeNames?: string[]
    protected routePattern?: string | RegExp

    public async onInit() {
        super.onInit()

        this.setModel(App.model, "a")

        this.attachRoutingEvents()
    }

    private attachRoutingEvents() {
        //If we have only a single route matching this controller
        if (typeof this.routeName !== "undefined") {
            this.getRouter().attachRouteMatched(this.doRouting, this)

            const route = this.getRouter().getRoute(this.routeName)
            if (route) {
                route.attachPatternMatched(this._onPatternMatched, this)
            }

            if (this.routeName === "") {
                this.getRouter().attachBypassed(this.doRouting, this)
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
                    this.getRouter().attachBypassed(this.doRouting, this)
                    this.getRouter().attachBypassed(this._onPatternMatched, this)
                }
            }

            this.getRouter().attachRouteMatched(this.doRouting, this)
        } else if (typeof this.routePattern !== "undefined" && this.routePattern instanceof RegExp) {
            const allRoutes = (this.getRouter() as any)._oRoutes
            for (const m in allRoutes) {
                const routeKey = m
                if (routeKey.match(this.routePattern)) {
                    const route = this.getRouter().getRoute(routeKey)
                    if (route) {
                        route.attachPatternMatched(this._onPatternMatched, this)
                    }
                    if (routeKey === "") {
                        this.getRouter().attachBypassed(this.doRouting, this)
                        this.getRouter().attachBypassed(this._onPatternMatched, this)
                    }
                }
            }

            this.getRouter().attachRouteMatched(this.doRouting, this)
        }
    }

    private doRouting(oEvent: any) {
        let exited = false
        let entered = false
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
            this.setRouteParameters(oEvent)
            if (this.onRouteExit) {
                this.onRouteExit(oEvent)
            }
        } else if (routeMatched && !entered) {
            exited = false
            entered = true
            this.setRouteParameters(oEvent)
            if (this.onRouteEntry) {
                this.onRouteEntry(oEvent)
            }
        }
    }

    private setRouteParameters(oEvent: any) {
        const eventArguments = oEvent.getParameter("arguments")
        const route: any = {}
        route["_arguments"] = {}
        route["_name"] = oEvent.getParameter("name")
        for (const prop in eventArguments) {
            route[prop] = eventArguments[prop]
            route["_arguments"][prop] = eventArguments[prop]
        }
        this.viewProp("/route", route)
        return route
    }

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
    private async _onPatternMatched(oEvent: any) {
        const that = this
        const route = this.setRouteParameters(oEvent)

        //Clone the Event and submit the clone further, otherwise the event is cleared
        //after a short period of time, resulting in errors (empty events) after awaiting promises
        const e = new Event("routePatternMatched", that.getRouter(), {
            name: "routePatternMatched",
            arguments: route,
            config: oEvent.getParameters().config
        })

        let config
        if (oEvent.getParameters().config) {
            config = oEvent.getParameters().config
        } else if (oEvent.getId() === "bypassed") {
            config = oEvent.getSource()._oConfig.bypassed
        }

        if (this.onRouteMatched && typeof this.onRouteMatched === "function") {
            await App.isInitialized()
            this.onRouteMatched(e)
        }
    }

    /**
     * Navigates to the given target with given object's properties
     *
     * @param target The target route name
     * @param object The parameter object for the given route
     * @param replace Whether or not the history should be replaced (true) or appended (default, false)
     */
    public navTo(target: string, object: any = {}, replace: boolean = false) {
        return this.getRouter().navTo(target, object, !!replace)
    }

    /**
     * Calls navTo with replace=true. Can be overridden for a BaseController
     * to easily have a custom back navigation for every view
     *
     * @param {*} routeName The target route name, used for desktop mode and if no history is present
     * @param {*} object The parameter object for the given route
     * @param {*} delta The delta number to navigate n steps back within the history.
     * Delta will be overridden to be below zero
     */
    public navBack(routeName?: string, object?: any, delta: number = -1) {
        const oHistory = (History as any).getInstance()
        const sPreviousHash = oHistory.getPreviousHash()

        if (!routeName) {
            window.history.go(Math.min(delta, -1))
            return
        }

        try {
            if (sPreviousHash !== undefined) {
                if (delta) {
                    window.history.go(Math.min(delta, -1))
                } else {
                    this.getRouter().navTo(routeName, object, true)
                }
            } else {
                this.getRouter().navTo(routeName, object, true /*no history*/)
            }
        } catch (e) {
            appLogger.error("A navigation is already in progress", e)
        }
    }

    protected onRouteEntry(oEvent: any) {
        // this.getOwnerComponent().addController(this.getMetadata().getName(), this)
    }

    /**
     * Is called when the route is not visible anymore. Calls clear after 500ms.
     */
    protected onRouteExit(oEvent: any) {
        //this.getOwnerComponent().removeController(this.getMetadata().getName())
        setTimeout(() => {
            this.clear()
        }, 500)
    }

    protected async onRouteMatched(oEvent: Event, doNotRefresh: boolean = false) {
        await App.isInitialized()
        if (!App.appReadyEventFired) {
            runtime.nativeEnvironment.eventBus.publish(new JSSNative.AppReadyEvent())
            App.hideSplashScreen()
            App.appReadyEventFired = true
        }
        if (!doNotRefresh) {
            await this.refresh()
        }
    }

    public onNavButtonPress(oEvent: UIEvent) {
        this.navBack()
    }

    /**
     * Convenience method for accessing the router in every controller of the application.
     * @returns {sap.ui.core.routing.Router} the router for this component
     */
    public getRouter(): Router {
        if (!this.getOwnerComponent()) {
            return (App.appController.getOwnerComponent() as UIComponent).getRouter()
        }
        return this.getOwnerComponent().getRouter()
    }

    /**
     * Convenience method for getting the i18n resource bundle of the component.
     * @returns The i18n resource bundle of the component
     */
    public getResourceBundle(): ResourceBundle {
        let owner = this.getOwnerComponent() as UIComponent
        if (!owner) {
            owner = App.appController.getOwnerComponent() as UIComponent
        }
        let model = owner.getModel("i18n") as ResourceModel
        if (model) {
            return model.getResourceBundle() as ResourceBundle
        }
        model = owner.getModel("t") as ResourceModel
        return model.getResourceBundle() as ResourceBundle
    }

    /**
     * Event handler for navigating back.
     * It there is a history entry we go one step back in the browser history
     * If not, it will replace the current entry of the browser history with the master route.
     */
    public onNavBack() {
        const sPreviousHash = (History as any).getInstance().getPreviousHash()

        if (sPreviousHash !== undefined) {
            history.go(-1)
        } else {
            this.getRouter().navTo("master", {}, true)
        }
    }
}
