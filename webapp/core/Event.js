sap.ui.define([], () => {
    "use strict"

    const _eventBus = sap.ui.getCore().getEventBus()

    return {
        subscribe(channel, eventId, fn, thisObject, data) {
            if (data) {
                // Fixes problem that event reference of UI5 event listeners is cleaned
                const obj = $.extend({}, data)
                return _eventBus.subscribe(
                    channel,
                    eventId,
                    () => {
                        fn(obj)
                    },
                    thisObject
                )
            } else {
                return _eventBus.subscribe(channel, eventId, fn, thisObject)
            }
        },

        subscribeOnce(channel, eventId, fn, thisObject, data) {
            if (data) {
                // Fixes problem that event reference of UI5 event listeners is cleaned
                const obj = $.extend({}, data)
                return _eventBus.subscribeOnce(
                    channel,
                    eventId,
                    () => {
                        fn(obj)
                    },
                    thisObject
                )
            } else {
                return _eventBus.subscribeOnce(channel, eventId, fn, thisObject)
            }
        },

        publish(channel, eventId, data) {
            return _eventBus.publish(channel, eventId, data)
        },

        unsubscribe(channel, eventId, fn, object) {
            return _eventBus.unsubscribe(channel, eventId, fn, object)
        }
    }
})
