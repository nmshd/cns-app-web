import ResourceBundle from "sap/base/i18n/ResourceBundle"
import Event from "sap/ui/base/Event"
import History from "sap/ui/core/History"
import UIComponent from "sap/ui/core/UIComponent"
import Router from "sap/ui/core/routing/Router"
import JSONModel from "sap/ui/model/json/JSONModel"
import ResourceModel from "sap/ui/model/resource/ResourceModel"
import App from "./App"
import ConvenienceController from "./ConvenienceController"
import Formatter from "./Formatter"

/**
 * @namespace nmshd.app.core
 */
export default abstract class AppController extends ConvenienceController {
    public formatter: Formatter = Formatter

    protected onInitialized() {}

    public async onInit() {
        super.onInit()

        this.setModel(App.model, "a")

        if (this.onInitialized && typeof this.onInitialized === "function") {
            this.onInitialized()
        }
    }

    protected createViewModel(): JSONModel | Object {
        return App.createDefaultViewModel()
    }

    protected async onRouteMatched(oEvent: Event, doNotRefresh: boolean = false) {
        await App.isInitialized()
        if (!doNotRefresh) {
            await this.refresh()
        }
    }

    protected onNavButtonPress(oEvent: UIEvent) {
        throw "Implement onNavButtonPress within controller!"
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
