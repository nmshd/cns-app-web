import List from "sap/m/List"
import StandardListItem from "sap/m/StandardListItem"
import JSONModel from "sap/ui/model/json/JSONModel"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class AttributeChangePopupController extends PopupController {
    popupType = PopupType.AttributeChangePopup

    public async refresh() {
        if (!this.params.data || !this.params.data.selectedItemPath || !this.params.data.query) {
            appLogger.warn("No/wrong data for AttributeChangePopup")
            return
        }

        const attributeModel = new JSONModel(this.params.data.query)
        this.view?.setModel(attributeModel)

        this.setSelectedItem(this.params.data.selectedItemPath)
    }

    public async submitChange() {
        const selectedContext = (this.byId("availableAttributesList") as List).getSelectedItem().getBindingContext()

        if (this.params.submitCallback) {
            this.params.submitCallback(selectedContext?.getPath().slice(1))
        }
        this.closePopup()
    }

    private setSelectedItem(selectedItemPath: String) {
        const list = this.byId("availableAttributesList") as List
        const selectedAttributeValue = this.getModel().getProperty(`/${selectedItemPath}`) as String

        const selectedListItem = list
            .getItems()
            .find(
                (listItem: StandardListItem) =>
                    listItem?.getBindingContext()?.getObject("value/value") === selectedAttributeValue
            ) as StandardListItem

        list.setSelectedItem(selectedListItem)
    }
}
