sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"

    return AccountController.extend("nmshd.app.flows.profile.files.Detail", {
        routePattern: new RegExp("^account.files.detail"),
        createViewModel() {
            return {}
        },

        async onRouteMatched(oEvent) {
            this.clear()

            this.fileId = oEvent.getParameter("arguments").id
            await this.super("onRouteMatched", oEvent)
        },
        async refresh() {
            if (!this.fileId) return
            this.file = await App.FileUtil.getFile(this.fileId)
            if (!this.file) return
            this.setModel(this.file)
        },

        async openFile() {
            if (this.file) {
                await App.FileUtil.openFile(this.file.getData())
            }
        },

        clear() {
            this.super("clear")
            this.file = null
        },

        onNavButtonPress() {
            this.navBack("account.attributes")
        }
    })
})
