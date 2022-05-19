sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"

    return AccountController.extend("nmshd.app.flows.profile.files.Files", {
        maxFileSizeMB: 10,
        routePattern: new RegExp("^account.files.upload"),
        createViewModel() {
            return {
                submitEnabled: false,
                busy: false,
                delay: 0
            }
        },

        onRouteMatched(oEvent) {
            this.clear()

            this.super("onRouteMatched", oEvent)
        },

        async doChoose() {
            try {
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
        },

        async doUpload(e) {
            if (this.file === undefined) {
                appLogger.warn("No file is selected.")
            } else {
                try {
                    let title = this.byId("name").getValue()
                    if (!title) {
                        title = this.byId("name").getPlaceholder()
                    }

                    const file = await this.load(App.FileUtil.uploadFile(this.file, title))
                    await App.navAndReplaceHistory(-1, [
                        "account.files.detail",
                        { accountId: this.accountId, id: file.id.toString() }
                    ])
                } catch (e) {
                    App.error(e)
                }
            }
        },

        refresh() {
            this.setMessage()
            this.viewProp("/submitEnabled", false)
        },

        clear() {
            this.super("clear")
            if (this.byId("name")) {
                this.byId("name").setPlaceholder("")
                this.byId("name").setValue("")
            }
            this.file = undefined

            this.viewProp("/attachments", [])
        },

        onNavButtonPress() {
            this.navBack("account.attributes")
        }
    })
})
