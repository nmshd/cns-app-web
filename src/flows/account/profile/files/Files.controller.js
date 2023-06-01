sap.ui.define(["nmshd/app/core/App", "nmshd/app/flows/account/AccountController"], (App, AccountController) => {
    "use strict"

    return AccountController.extend("nmshd.app.flows.account.profile.files.Files", {
        routePattern: new RegExp("^account.files"),
        createViewModel() {
            return {}
        },

        async onInitialized() {
            this.resetViewModel()
        },

        async onRouteMatched(oEvent) {
            await this.super("onRouteMatched", oEvent)
        },

        async refresh() {
            this.byId("pullToRefresh").hide()
            const files = await App.FileUtil.getFiles()
            if (!files) return
            this.setModel(files)
        },

        toUpload() {
            this.navTo("account.files.upload")
        },

        clear() {
            this.super("clear")
        },

        async openFile(oEvent) {
            const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
            const item = oItem.getBindingContext().getProperty()

            const result = await App.FileUtil.openFile(item)
            if (!result) return
        },

        onItemPress(oEvent) {
            const oItem = oEvent.getParameter("listItem") || oEvent.getSource()
            const prop = oItem.getBindingContext().getProperty("id")
            this.navTo("account.files.detail", { id: prop.toString() })
        }
    })
})
