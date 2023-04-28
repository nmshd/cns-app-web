sap.ui.define(["sap/m/SplitApp", "sap/ui/Device"], (SplitApp, Device) => {
    "use strict"

    return SplitApp.extend("nmshd.app.core.controls.CustomSplitApp", {
        metadata: {
            renderer: "sap/m/SplitAppRenderer"
        },

        init: function () {
            const temp = Device.system
            Device.system.phone = false
            if (SplitApp.prototype.init) {
                SplitApp.prototype.init.apply(this, arguments)
            }
            Device.system = temp
        }
    })
})
