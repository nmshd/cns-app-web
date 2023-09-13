import { File } from "@nmshd/transport"
import { ListBase$ItemPressEvent } from "sap/m/ListBase"
import { ObjectAttribute$PressEvent } from "sap/m/ObjectAttribute"
import { EventTypes } from "../EventBus"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class FileSelectionPopup extends PopupController {
    popupType = PopupType.FileSelectionPopup
    private selectedFile: File | undefined

    public async refresh() {
        this.resetViewModel()
        this.selectedFile = undefined
        const filesModel = await App.FileUtil.getFiles()
        this.view?.setModel(filesModel)
    }

    public submitChange() {
        this.submitPopup(this.selectedFile)
    }

    public onUploadFile() {
        App.Bus.publish("App", EventTypes.FileUploadPressedEvent, {
            submitCallback: (file) => {
                this.selectedFile = file
                this.submitChange()
            }
        })
    }

    public async openFile(event: ObjectAttribute$PressEvent) {
        const objectAttribute = event.getSource()
        const file = objectAttribute.getBindingContext()?.getObject()

        const result = await App.FileUtil.openFile(file)
        if (!result) return
    }

    public createViewModel() {
        return {
            submitEnabled: false
        }
    }

    public onFileSelected(event: ListBase$ItemPressEvent) {
        const file = event.getParameter("listItem")?.getBindingContext()?.getObject() as File
        this.selectedFile = file
        this.viewProp("/submitEnabled", true)
    }
}
