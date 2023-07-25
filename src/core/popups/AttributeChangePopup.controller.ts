import JSONModel from "sap/ui/model/json/JSONModel"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class AttributeChangePopupController extends PopupController {
    popupType = PopupType.AttributeChangePopup
    private attributeId?: string

    public async refresh() {
        this.attributeId = undefined
        if (!this.params.data || !this.params.data.attributeId) {
            appLogger.warn("No/wrong data for AttributeChangePopup")
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
