import { CoreDate } from "@nmshd/transport"
import JSONModel from "sap/ui/model/json/JSONModel"

export default class FileUtil {
    async getFile(id: string) {
        if (!id) {
            App.error({
                code: "error.app.noIdProvided",
                message: "No id has been provided."
            })
            return
        }

        const relationshipResult = await runtime.currentSession.transportServices.files.getFile({
            id: id
        })
        if (relationshipResult.isError) {
            App.error(relationshipResult.error)
            return
        }
        try {
            const model = new JSONModel(relationshipResult.value)
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

        const relationshipsResult = await runtime.currentSession.transportServices.files.getFiles({})
        if (relationshipsResult.isError) {
            App.error(relationshipsResult.error)
            return
        }
        try {
            const model = new JSONModel({ items: relationshipsResult.value })
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
