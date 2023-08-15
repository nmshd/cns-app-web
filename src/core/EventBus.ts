export enum EventTypes {
    AttributeInfoPressedEvent = "AttributeInfoPressedEvent",
    AttributeChangePressedEvent = "AttributeChangePressedEvent",
    CreateAttributePressedEvent = "CreateAttributePressedEvent"
}

/**
 * @namespace nmshd.app.core
 */
export default class EventBus {
    private _eventBus: any

    public init() {
        this._eventBus = sap.ui.getCore().getEventBus()
    }

    public subscribe(channel: string, eventId: string, fn: Function, thisObject?: any, data?: any) {
        if (data) {
            // Fixes problem that event reference of UI5 event listeners is cleaned
            const obj = $.extend({}, data)
            return this._eventBus.subscribe(
                channel,
                eventId,
                () => {
                    fn(obj)
                },
                thisObject
            )
        } else {
            return (this._eventBus as any).subscribe(channel, eventId, fn, thisObject)
        }
    }

    public subscribeOnce(channel: string, eventId: string, fn: Function, thisObject?: any, data?: any) {
        if (data) {
            // Fixes problem that event reference of UI5 event listeners is cleaned
            const obj = $.extend({}, data)
            return this._eventBus.subscribeOnce(
                channel,
                eventId,
                () => {
                    fn(obj)
                },
                thisObject
            )
        } else {
            return (this._eventBus as any).subscribeOnce(channel, eventId, fn, thisObject)
        }
    }

    public publish(channel: string, eventId: string, data?: any) {
        return this._eventBus.publish(channel, eventId, data)
    }

    public unsubscribe(channel: string, eventId: string, fn: Function, object: any) {
        return (this._eventBus as any).unsubscribe(channel, eventId, fn, object)
    }
}
