sap.ui.define(
    ["nmshd/app/shell/BaseController", "sap/ui/core/Component", "sap/base/Log", "sap/ui/Device"],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @yields {typeof sap.ui.core.mvc.Controller}
     */
    (Controller, Component, Log, Device) => {
        "use strict"
        return Controller.extend("nmshd.app.shell.Generic", {
            onInit() {
                if (!Component.get("genericComponent")) {
                    //if (Device.system.phone) {
                    Component.create({
                        name: "nmshd.app.flows_phone",
                        id: "genericComponent"
                    })
                        .then((Component) => {
                            this.getView().byId("GenericContainer").setComponent(Component)
                        })
                        .catch((oError) => Log.error(oError))
                    /*} else {
                        Component.create({
                            name: "nmshd.app.flows_desktop",
                            id: "genericComponent"
                        })
                            .then((Component) => {
                                this.getView().byId("GenericContainer").setComponent(Component)
                            })
                            .catch((oError) => Log.error(oError))
                    }
                    */
                }
            }
        })
    }
)
