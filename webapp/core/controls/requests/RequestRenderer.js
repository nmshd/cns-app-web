sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/List",
        "nmshd/app/core/controls/requests/RequestItemGroupRenderer",
        "nmshd/app/core/controls/requests/RequestItemRenderer"
    ],
    (Control, List, RequestItemGroupRenderer, RequestItemRenderer) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.requests.RequestRenderer", {
            metadata: {
                aggregations: {
                    _list: { singularName: "list", multiple: false, visibility: "hidden" }
                },
                properties: {},
                publicMethods: [],
                events: {},
                defaultAggregation: "_list"
            },

            init(e) {
                this.setAggregation(
                    "_list",
                    new List({
                        noDataText: "Keine Items im Request vorhanden",
                        items: {
                            path: "items",
                            factory: (sId, oContext) => {
                                const item = oContext.getObject()
                                let renderer
                                if (item["@type"] === "RequestItemGroup") {
                                    renderer = new RequestItemGroupRenderer({
                                        group: { path: oContext.getPath() }
                                    })
                                } else {
                                    renderer = new RequestItemRenderer({
                                        item: { path: oContext.getPath() }
                                    })
                                }
                                return renderer
                            }
                        }
                    })
                )
            },

            getSelected() {
                const values = []
                for (const item of this.getAggregation("_list").getItems()) {
                    values.push(item.getSelectedHierarchy())
                }
                return values
            },

            getResponseParams() {
                const context = this.getBindingContext().getObject()

                const itemResponses = []
                for (const item of this.getAggregation("_list").getItems()) {
                    itemResponses.push(item.getResponseParams())
                }
                const decideParams = {
                    requestId: context.id,
                    items: itemResponses
                }
                return decideParams
            },

            getContext() {
                let context = this.getBindingContext().getObject()
                const items = []
                for (const item of this.getAggregation("_list").getItems()) {
                    items.push(item.getContext())
                }
                context.items = items

                return context
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.addClass("requestRenderer")
                oRM.writeControlData(oControl)
                oRM.writeClasses()
                oRM.write(">")
                const listControl = oControl.getAggregation("_list")
                if (listControl) {
                    oRM.write('<div class="requestRendererList">')
                    oRM.renderControl(listControl)
                    oRM.write("</div>")
                }
                oRM.write("</div>")
            },

            onAfterRendering(oEvent) {
                if (sap.ui.core.Control.prototype.onAfterRendering) {
                    sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments)
                }
            }
        })
    }
)
