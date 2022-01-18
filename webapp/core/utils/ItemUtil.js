sap.ui.define(
    ["sap/ui/base/EventProvider", "nmshd/app/core/Event", "sap/ui/model/json/JSONModel"],
    (EventProvider, Event, JSONModel) => {
        "use strict"

        return EventProvider.extend("nmshd.app.core.utils.ItemUtil", {
            constructor: function (parent) {
                this._parent = parent
            },
            parent() {
                return this._parent
            }
        })
    }
)
