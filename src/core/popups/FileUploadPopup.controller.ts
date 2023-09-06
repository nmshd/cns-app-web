import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class FileUploadPopup extends PopupController {
    popupType = PopupType.FileUploadPopup
    private maxFileSizeMB: 10

    public refresh() {
        this.setMessage()
        this.viewProp("/submitEnabled", false)
    }

    public clear() {
        this.super("clear")
        if (this.byId("name")) {
            this.byId("name").setPlaceholder("")
            this.byId("name").setValue("")
        }
        this.file = undefined

        this.viewProp("/attachments", [])
    }
    public async onChooseFile() {
        try {
            // @ts-ignore
            const file = await runtime.nativeEnvironment.fileAccess.select()
            if (!file || file.isError || !file.value) {
                if (file.error.code === "FILESYSTEM_SELECTION_CANCELLED") {
                    this.setMessage()
                } else {
                    this.setMessage(this.resource("profile.files.upload.error"), "Error")
                }
                this.file = undefined
                this.viewProp("/submitEnabled", false)
            } else {
                this.file = {
                    data: file.value.data,
                    name: file.value.metadata.name,
                    type: file.value.metadata.mimeType,
                    lastModified: file.value.metadata.modifiedAt,
                    size: file.value.metadata.size,
                    fullPath: file.value.metadata.path
                }
                if (!this.file.fullPath) {
                    // User cancelled the selection
                    return
                }
                if (this.file.size > this.maxFileSizeMB * 1024 * 1024) {
                    this.viewProp("/submitEnabled", false)
                    this.setMessage(
                        this.resource("profile.files.upload.fileSizeError", [`${this.maxFileSizeMB}`]),
                        "Error"
                    )
                    return
                }
                this.setMessage()
                this.viewProp("/submitEnabled", true)
                this.byId("name").setPlaceholder(this.file.name)
                this.viewProp("/submitEnabled", true)
            }
        } catch (e) {
            this.viewProp("/submitEnabled", false)
            App.error(e)
        }
    }
}
