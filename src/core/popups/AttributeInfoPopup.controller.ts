import JSONModel from "sap/ui/model/json/JSONModel"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class AttributeInfoPopupController extends PopupController {
    popupType = PopupType.AttributeInfoPopup
    private attributeId?: string

    public async refresh() {
        if (!this.params.data || !this.params.data.attributeId) {
            appLogger.warn("No/wrong data for AttributeInfoPopup")
            return
        }
        this.attributeId = this.params.data.attributeId
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
        this.getView()?.setModel(attributeModel)
        this.getView()?.bindElement("/")
    }
}
