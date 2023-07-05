sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.Debug", {
        routeName: "app.debug",

        createViewModel() {
            return {
                items: [],
                push: []
            }
        },

        onInitialized() {
            this.pushMessages = []
            this.resetViewModel()
            runtime.nativeEnvironment.eventBus.subscribe(JSSNative.RemoteNotificationEvent, (notification) => {
                const receivedNotification = {
                    ...notification.notification,
                    debugReceivedAt: new Date().toISOString(),
                    debugIndex: this.pushMessages.length
                }
                this.pushMessages.push(receivedNotification)
                this.viewProp("/push", this.pushMessages)
                appLogger.info("Push notification received", receivedNotification)
                this.refreshPush()
            })
        },

        async onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle("Debugger")
            await this.super("onRouteMatched", oEvent)
            App.appController.setTitle("Debugger")
        },

        refresh() {
            this.refreshLogs()
            this.refreshPush()
        },

        async refreshPush() {
            this.byId("pushToken").setText("" + runtime.nativeEnvironment.configAccess.get("pushToken").value)
            const accounts = await runtime.multiAccountController.getAccounts()
            this.viewProp("/items", accounts)
            const pushNotificationAsString = []
            for (const pushNotification of this.pushMessages) {
                pushNotificationAsString.unshift("" + JSON.stringify(pushNotification, null, 2))
            }
            this.byId("push").setValue(pushNotificationAsString.join("\n\n"))
        },

        async refreshLogs() {
            try {
                // @ts-ignore
                const logs = await runtime.nativeEnvironment.fileAccess.infoDirectory("./logs/")
                if (logs.isError) {
                    this.writeErrorToLog(logs.error)
                    return
                }
                const readInPaths = []
                const logEntries = []
                for (const file of logs.value.files) {
                    if (readInPaths.includes(file.path)) {
                        continue
                    }
                    logEntries.push("\n\n")
                    logEntries.push("===========================================")
                    logEntries.push(`Log File: ${file.path}`)
                    logEntries.push(`ModifiedAt: ${file.modifiedAt}`)
                    logEntries.push(`AccessedAt: ${new Date().toISOString()}`)
                    logEntries.push("\n")
                    // @ts-ignore
                    const fileLog = await runtime.nativeEnvironment.fileAccess.readFileAsText(file.path)
                    if (fileLog.isError) {
                        const error = fileLog.error
                        logEntries.push(
                            `Error while fetching logs:\n\n${error.code}\n${error.message}\n\n${error.stack}`
                        )
                    } else {
                        logEntries.push(fileLog.value)
                    }
                    logEntries.push("===========================================")
                    logEntries.push("\n\n")
                    readInPaths.push(file.path)
                }
                const log = logEntries.join("\n")
                this.byId("logs").setValue(log)
            } catch (e) {
                this.writeErrorToLog(e)
            }
        },

        currentFileDate() {
            let date = new Date().toISOString()
            date = date.replace(/\:/g, "")
            date = date.replace(/\-/g, "")
            date = date.replace(/T/g, "_")
            date = date.substring(0, 15)
            return date
        },

        async downloadLogs() {
            const filename = `${this.currentFileDate()}_EnmeshedLogs.txt`
            const content = NMSHDCrypto.CoreBuffer.fromUtf8(this.byId("logs").getValue())
            // @ts-ignore
            await runtime.nativeEnvironment.fileAccess.openFileContent(content.buffer, {
                name: filename,
                path: filename,
                mimeType: "text/plain"
            })
        },

        writeErrorToLog(error) {
            this.byId("logs").setValue(
                `Error while fetching logs:\n\n${error.code}\n${error.message}\n\n${error.stack}`
            )
        },

        clear() {
            this.super("clear")
        }
    })
})
