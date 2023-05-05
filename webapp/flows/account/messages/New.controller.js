sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/m/MessageToast",
        "sap/m/Token",
        "nmshd/app/core/utils/FileUtil"
    ],
    (App, AccountController, MessageToast, Token, FileUtil) => {
        "use strict"

        return AccountController.extend("nmshd.app.flows.account.messages.New", {
            routeNames: ["account.relationship.newmessage"],
            createViewModel() {
                return {
                    content: "",
                    files: [],
                    tokens: [],
                    identity: {},
                    busy: false,
                    delay: 0,
                    submitAvailable: false
                }
            },

            onRouteMatched(oEvent) {
                this.clear()
                this.itemtype = "messages"
                this.itemid = oEvent.getParameter("arguments").relationshipId
                this.relationshipId = oEvent.getParameter("arguments").relationshipId

                this.super("onRouteMatched", oEvent)
                this.viewProp("/submitAvailable", true)
            },

            async doChoose() {
                try {
                    const file = await runtime.nativeEnvironment.fileAccess.select()
                    if (!file || file.isError || !file.value) {
                        if (file.error.code === JSSNative.NativeErrorCodes.FILESYSTEM_SELECTION_CANCELLED) {
                            this.setMessage()
                        } else {
                            this.setMessage(this.resource("newMessage.error"), "Error")
                        }
                        this.file = undefined
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
                            //User cancelled the selection
                            return
                        }
                        if (this.file.size > 10 * 1024 * 1024) {
                            this.setMessage(this.resource("newMessage.sizeError"), "Error")
                            return
                        }
                        this.setMessage()
                        this.byId("name").setPlaceholder(this.file.name)
                    }
                } catch (e) {
                    appLogger.error(e)
                    this.addError({
                        oError: e,
                        sUserFriendlyMsg:
                            // if it is a platformError display the error text from the backbone
                            e.constructor.name === "PlatformError" || e.constructor.name === "RequestError"
                                ? e.reason
                                : e.message
                    })
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
                        return file
                    } catch (e) {
                        appLogger.error(e)
                    }
                }
            },

            async refresh() {
                const item = {}
                this.prop("/", item)

                const tokens = []
                const files = (await App.FileUtil.getFiles()).getData()
                for (let i = 0; i < files.items.length; i++) {
                    const file = files.items[i]
                    const token = new Token({
                        text: file.title,
                        key: file.id
                    })
                    tokens.push(token)
                }
                this.viewProp("/tokens", tokens)

                this.viewProp("/files", files)

                if (!App.profile) return

                switch (this.viewProp("/route")._name) {
                    case "customers.newmessage":
                        const customer = App.profile.customers.read(this.itemid)
                        this.viewProp("/identity", customer.identity)
                        break
                    case "account.relationship.newmessage":
                        const link = App.profile.links.read(this.itemid)
                        this.viewProp("/identity", link.identity)
                        break
                }
            },

            async onMessageSubmit() {
                this.viewProp("/submitAvailable", false)
                const file = await this.doUpload()
                const subject = this.byId("subject").getValue()
                const body = this.byId("body").getValue() ? this.byId("body").getValue() : " "
                const files = []
                const refs = []
                if (file) {
                    files.push(file.id)
                }
                const tokenControls = this.byId("fileInput").getTokens()
                for (let i = 0; i < tokenControls.length; i++) {
                    const tokenControl = tokenControls[i]
                    const key = tokenControl.getKey()
                    const selectedFile = await App.FileUtil.getFile(key)
                    if (selectedFile) {
                        files.push(selectedFile.getData().id)
                    }
                }

                try {
                    const peer = App.relationship(this.relationshipId).id
                    const sentMessageResult = await this.load(
                        runtime.currentSession.transportServices.messages.sendMessage({
                            content: {
                                "@type": "Mail",
                                to: [peer],
                                cc: [],
                                bcc: [],
                                subject: subject,
                                body: body
                            },
                            recipients: [peer],
                            attachments: files
                        })
                    )
                    if (sentMessageResult.isError) {
                        App.error(sentMessageResult.error)
                        return
                    }
                    App.navTo("account.relationships", "account.relationship.home", {
                        accountId: this.accountId,
                        relationshipId: this.relationshipId
                    })
                } catch (e) {
                    appLogger.error(e)
                    MessageToast.show(this.resource("newMessage.sendingError"))
                }
            },

            clear() {
                this.super("clear")
                this.byId("subject").setValue("")
                this.byId("body").setValue("")

                if (this.byId("name")) {
                    this.byId("name").setPlaceholder("")
                    this.byId("name").setValue("")
                }
                this.file = undefined

                //We need to have a timeout here -> the unfocus listener of the MultiInput stores
                //the current input in place, after the clear() method has been called. Thus,
                //wait a little bit and clear the control then
                setTimeout(() => {
                    this.byId("fileInput").destroyTokens()
                    this.byId("fileInput").setValue("")
                }, 10)
            },

            onNavButtonPress() {
                window.history.go(-1)
                return

                const route = this.viewProp("/route")
                if (!route.view) {
                    switch (route._name) {
                        default:
                            this.navBack("account.master")
                            break
                        case "customers.newmessage":
                            this.navBack("customers.comm", { id: route.id })
                            break
                        case "account.relationship.newmessage":
                            this.navBack("account.relationship.inbox", {
                                relationshipId: this.relationshipId
                            })
                            break
                    }
                } else {
                    this.navBack()
                }
            }
        })
    }
)
