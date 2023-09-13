import { CoreDate } from "@nmshd/transport"
import JSONModel from "sap/ui/model/json/JSONModel"
import App from "../App"
export default class FileUtil {
    async getFile(id: string) {
        if (!id) {
            App.error({
                code: "error.app.noIdProvided",
                message: "No id has been provided."
            })
            return
        }

        const fileResult = await runtime.currentSession.transportServices.files.getFile({
            id: id
        })
        if (fileResult.isError) {
            App.error(fileResult.error)
            return
        }
        try {
            const fileDVO = await runtime.currentSession.expander.expandFileDTO(fileResult.value)
            const model = new JSONModel(fileDVO)
            return model
        } catch (e) {
            App.error(
                {
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                },
                e
            )
            return
        }
    }

    async getFiles() {
        const syncResult = await runtime.currentSession.transportServices.account.syncDatawallet()
        if (syncResult.isError) {
            App.error(syncResult.error)
            return
        }

        const filesResults = await runtime.currentSession.transportServices.files.getFiles({})
        try {
            const fileDVOs = await runtime.currentSession.expander.expandFileDTOs(filesResults.value)
            const model = new JSONModel({ items: fileDVOs })
            return model
        } catch (e) {
            App.error(
                {
                    code: "error.app.jsonModel",
                    message: "Error while creating JSONMOdel."
                },
                e
            )
            return
        }
    }

    async openFile(file: any) {
        const downloadResult = await runtime.currentSession.transportServices.files.downloadFile({
            id: file.id
        })

        if (downloadResult.isError) {
            App.error(downloadResult.error)
            return
        }

        const openResult = await (runtime.nativeEnvironment as any).fileAccess.openFileContent(
            downloadResult.value.content,
            {
                name: downloadResult.value.filename,
                path: downloadResult.value.filename,
                mimeType: downloadResult.value.mimetype
            }
        )
        if (openResult.isError) {
            App.error(openResult.error)
            return
        }
        return true
    }

    async uploadFile(file: any, title: string) {
        const uploadResult = await runtime.currentSession.transportServices.files.uploadOwnFile({
            content: new Uint8Array(file.data),
            expiresAt: CoreDate.utc().add({ years: 2 }).toISOString(),
            filename: file.name,
            mimetype: file.type,
            title: title,
            description: ""
        })
        if (uploadResult.isError) {
            App.error(uploadResult.error)
            return
        }

        return uploadResult.value
    }
}
