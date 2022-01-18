sap.ui.define(
    ["nmshd/app/core/App", "nmshd/app/core/_AppController", "nmshd/app/core/Event"],
    (App, BaseController, Event) => {
        "use strict"
        return BaseController.extend("nmshd.app.flows_desktop.app.App", {
            createViewModel() {
                return {
                    busy: true,
                    delay: 0,
                    errorVisible: false,
                    errorMessage: "",
                    refreshVisible: true
                }
            },
            clear() {},
            onInitialized() {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())

                App.split = this.byId("appComponent")

                App.registerAppController(this)
            },

            onRouteChanged(oEvent) {
                this.super("onRouteChanged")
            },

            fatal(severity, message, category, object) {
                this.viewProp("/errorVisible", true)
                this.viewProp("/errorMessage", message)
            },

            setTitle() {},
            setLeft() {},
            setLeftAction() {},
            setLeftIcon() {},
            setRight() {},
            setRightAction() {},
            setRightIcon() {},
            clearLeft() {},
            clearRight() {}
        })
    }
)
