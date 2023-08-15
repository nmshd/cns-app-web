import ResourceBundle from "sap/base/i18n/ResourceBundle"
import Controller from "sap/ui/core/mvc/Controller"
import Model from "sap/ui/model/Model"
import JSONModel from "sap/ui/model/json/JSONModel"
import ResourceModel from "sap/ui/model/resource/ResourceModel"
import AppComponent from "../Component"

/**
 * @namespace nmshd.app.core
 */
export default abstract class BaseController extends Controller {
    protected super(functionName: string, ...argArray: any[]) {
        const f = this.getMetadata().getParent().getClass().prototype[functionName]
        if (!f) throw new Error("Function '" + functionName + "' was not found on parent class '" + name + "'.")
        return f.call(this, ...argArray)
    }

    /**
     * Convenience method for accessing the component of the controller's view.
     * @returns The component of the controller's view
     */
    public getOwnerComponent(): AppComponent {
        return super.getOwnerComponent() as AppComponent
    }

    /**
     * Convenience method for getting the i18n resource bundle of the component.
     * @returns The i18n resource bundle of the component
     */
    public getResourceBundle(): ResourceBundle {
        const oModel = App.component.getModel("t") as ResourceModel
        return oModel.getResourceBundle() as ResourceBundle
    }

    /**
     * Convenience method for getting the view model by name in every controller of the application.
     * @param [sName] The model name
     * @returns The model instance
     */
    public getModel(sName?: string): JSONModel {
        return this.getView()!.getModel(sName) as JSONModel
    }

    /**
     * Convenience method for setting the view model in every controller of the application.
     * @param oModel The model instance
     * @param sName The model name
     * @returns The current base controller instance
     */
    public setModel(oModel: Model, sName?: string): BaseController {
        this.getView()!.setModel(oModel, sName)
        return this
    }
}
