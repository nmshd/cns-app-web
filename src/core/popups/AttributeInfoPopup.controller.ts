import View from "sap/ui/core/mvc/View"
import JSONModel from "sap/ui/model/json/JSONModel"
import { IAppPopupParams } from "../IAppPopup"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class AttributeInfoPopupController extends PopupController {
    popupType = PopupType.AttributeInfoPopup
    private attributeId?: string

    public async refresh(params: IAppPopupParams, view: View) {
        super.refresh(params, view)

        this.attributeId = undefined
        if (!params.data || !params.data.attributeId) {
            appLogger.warn("No/wrong data for AttributeInfoPopup")
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
        const expandedAttribute = await runtime.currentSession.expander.expandLocalAttributeDTO(attributeResult.value)

        const attributeModel = new JSONModel(expandedAttribute)
        this.view?.setModel(attributeModel)
        this.view?.bindElement("/")
    }
}
