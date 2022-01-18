sap.ui.define(
    ["nmshd/app/shell/BaseController"],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @yields {typeof sap.ui.core.mvc.Controller}
     */
    (Controller) => {
        "use strict"
        return Controller.extend("nmshd.app.shell.App", {
            onInit() {}
        })
    }
)
