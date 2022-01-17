"use strict"

sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device"],
    /**
     *
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.Device} Device
     *
     * @yields {typeof sap.ui.core.UIComponent}
     */ (UIComponent, Device) => {
        "use strict"

        return UIComponent.extend(
            "nmshd.app.Component",
            /** @lends nmshd.app.Component.prototype **/ {
                metadata: {
                    manifest: "json"
                },
                init() {
                    // call the init function of the parent
                    UIComponent.prototype.init.apply(this, arguments)

                    // @ts-ignore
                    jQuery.sap.log.setLevel(1)

                    // provide an app-wide Device model for access to runtime device
                    // capabilites, features and information
                    const oDeviceModel = this.getModel("Device")
                    oDeviceModel.setDefaultBindingMode("OneWay")
                    oDeviceModel.setData(Device)

                    this.getRouter().initialize()

                    this.listenForNavEvents()
                },

                /**
                 * act on messages sent via subcomponents via EventBus
                 */
                listenForNavEvents() {
                    const oEventBus = sap.ui.getCore().getEventBus()
                    const aEventsToListenTo = ["mama"]
                    aEventsToListenTo.forEach((sEvent) => {
                        oEventBus.subscribe(
                            "nav",
                            sEvent,
                            () => {
                                this.getRouter().navTo(sEvent)
                            },
                            this
                        )
                    })
                }
            }
        )
    }
)
