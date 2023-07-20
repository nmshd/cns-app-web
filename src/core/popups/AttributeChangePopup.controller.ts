import View from "sap/ui/core/mvc/View";
import JSONModel from "sap/ui/model/json/JSONModel";
import { IAppPopupParams } from "../IAppPopup";
import PopupController, { PopupType } from "./PopupController";

/**
 * @namespace nmshd.app.core.popups
 */
export default class AttributeChangePopupController extends PopupController {
    popupType = PopupType.AttributeChangePopup
    private attributeId?:string

    public async refresh(params:IAppPopupParams, view: View) {
        super.refresh(params, view)

        this.attributeId = undefined
        if (!params.data || !params.data.attributeId) {
            appLogger.warn("No/wrong data for AttributeChangePopup")
            return
        }
        this.attributeId = params.data.attributeId
        if (!this.attributeId) return

        const attributeResult = await runtime.currentSession.consumptionServices.attributes.getAttribute({
            id: this.attributeId
        })
        if (attributeResult.isError) {
            App.error(attributeResult.error)
            return
        }
        const expandedAttribute = await runtime.currentSession.expander.expandLocalAttributeDTO(
            attributeResult.value
        )

        const attributeModel = new JSONModel(expandedAttribute)
        this.view?.setModel(attributeModel)
        this.view?.bindElement("/")
    }

    public async submitChange() {
        if (this.params.submitCallback) {
            this.params.submitCallback({
                path: "results/2"
            })
        }
        this.closePopup()
    }
}