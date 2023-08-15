import CustomListItem from "sap/m/CustomListItem"
import Dialog from "sap/m/Dialog"
import List from "sap/m/List"
import StandardListItem from "sap/m/StandardListItem"
import JSONModel from "sap/ui/model/json/JSONModel"
import ResourceModel from "sap/ui/model/resource/ResourceModel"
import { EventTypes } from "../EventBus"
import Formatter from "../Formatter"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class AttributeChangePopupController extends PopupController {
    popupType = PopupType.AttributeChangePopup

    public refresh() {
        if (!this.params.data || !this.params.data.selectedItemPath || !this.params.data.query) {
            appLogger.warn("No/wrong data for AttributeChangePopup")
            return
        }

        if (!this.params.data.query.valueType) {
            ;(this.byId("addNewAttributeListItem") as CustomListItem).setVisible(false)
        } else {
            ;(this.byId("addNewAttributeListItem") as CustomListItem).setVisible(true)
        }

        const attributeModel = new JSONModel(this.params.data.query)
        this.view?.setModel(attributeModel)

        this.setSelectedItem(this.params.data.selectedItemPath)
        ;(this.view as unknown as Dialog).setTitle(
            (this.getModel("t") as unknown as ResourceModel)
                .getResourceBundle()
                .getText("attributes.availableAttributesList.title", [
                    Formatter.toTranslated(this.params.data.query.name)
                ])
        )
    }

    public submitChange() {
        const selectedContext = (this.byId("availableAttributesList") as List).getSelectedItem().getBindingContext()

        if (this.params.submitCallback) {
            this.params.submitCallback(selectedContext?.getPath().slice(1)) // results/
        }
        this.closePopup()
    }

    public onAddNewAttribute() {
        App.Bus.publish("App", EventTypes.CreateAttributePressedEvent, {
            data: {
                valueType: this.params.data.query.valueType
            },
            submitCallback: this.attributeCreated.bind(this)
        })
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

    private async attributeCreated(createdAttribute) {
        const attributeResult = await runtime.currentSession.consumptionServices.attributes.getAttribute({
            id: createdAttribute.id
        })

        if (attributeResult.isError) {
            App.error(attributeResult.error)
            return
        }
        const expandedAttribute = await runtime.currentSession.expander.expandLocalAttributeDTO(attributeResult.value)
        const attributes = this.getModel().getProperty("/results")
        attributes.push(expandedAttribute)
        this.getModel().setProperty("/results", attributes)

        // after attribute was created select it and submit the changes
        this.setSelectedItem(`results/${attributes.length - 1}/value/value`)
        this.submitChange()
    }
}
