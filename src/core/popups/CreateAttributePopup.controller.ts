import MessageStrip from "sap/m/MessageStrip"
import Select from "sap/m/Select"
import Text from "sap/m/Text"
import IValueRenderer from "../controls/attributes/IValueRenderer"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class CreateAttributePopupController extends PopupController {
    popupType = PopupType.CreateAttributePopup

    public valueTypeSelection: Select
    public descriptionText: Text
    public valueRenderer: IValueRenderer
    public info: MessageStrip

    public onInit() {
        super.onInit(true)
        this.valueTypeSelection = this.byId("valueType") as Select
        this.descriptionText = this.byId("allDescription") as Text
        this.valueRenderer = this.byId("attributeValue") as IValueRenderer
        this.info = this.byId("info") as MessageStrip
    }

    public async refresh() {
        this.clear()
        if (this.params?.data?.valueType) {
            this.valueTypeSelection.setSelectedKey(this.params.data.valueType)
            ;(this.byId("valueType") as Select).setVisible(false)
        }
        const editableAttributes = NMSHDContent.AttributeValues.Identity.Editable.TYPE_NAMES.map((value) => ({
            key: value,
            text: this.resource(`dvo.attribute.name.${value}`)
        }))
        this.prop("/AllAttributes", editableAttributes)
        this.selectedValueTypeChanged()
    }

    public clear() {
        super.clear()
        this.viewProp("/submitAvailable", true)
        this.valueTypeSelection.setSelectedKey("")
    }

    selectedValueTypeChanged() {
        let selectedValueType = this.valueTypeSelection.getSelectedKey()
        if (!selectedValueType) {
            selectedValueType = this.valueTypeSelection.getItemAt(0)!.getKey()
        }
        this.descriptionText.setText(this.resource(`dvo.attribute.description.${selectedValueType}`))
        this.valueRenderer.setValueType(selectedValueType)
        this.info.setVisible(false)
    }

    public async createAttribute() {
        try {
            const oModel = this.getModel()
            const oOriginalName = oModel.getProperty("/name")

            let valueType = this.valueTypeSelection.getSelectedKey()
            const oValue = this.valueRenderer.getEditedValue()

            this.viewProp("/submitAvailable", false)

            if (oOriginalName) {
                valueType = oOriginalName
            }
            let attributeValue = {
                "@type": valueType,
                value: oValue
            }
            if (typeof oValue === "object") {
                attributeValue = {
                    "@type": valueType,
                    ...oValue
                }
            }
            const createResult = await runtime.currentSession.consumptionServices.attributes.createAttribute({
                content: {
                    "@type": "IdentityAttribute",
                    value: attributeValue,
                    // @ts-ignore
                    owner: runtime.currentAccount.address
                }
            })
            if (createResult.isError) {
                this.info.setText(createResult.error.message).setVisible(true)
                this.viewProp("/submitAvailable", true)
                return
            }
            this.submitPopup(createResult.value)
            this.refresh()
        } catch (e) {
            this.info.setText(e.message).setVisible(true)
            this.viewProp("/submitAvailable", true)
        }
    }
}
