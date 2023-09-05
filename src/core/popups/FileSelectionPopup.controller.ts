import JSONModel from "sap/ui/model/json/JSONModel"
import { EventTypes } from "../EventBus"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class FileSelectionPopup extends PopupController {
    popupType = PopupType.FileSelectionPopup

    public async refresh() {
        const files = await App.FileUtil.getFiles()
        const filesModel = new JSONModel(files)
        this.view?.setModel(filesModel)
    }

    public submitChange() {}

    public onUploadFile() {
        App.Bus.publish("App", EventTypes.FileUploadPressedEvent, {
            // submitCallback: this.createAttribute.bind(this)
        })
    }
}
