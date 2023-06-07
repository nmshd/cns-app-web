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
                properties: {
                    validationItems: { defaultValue: null }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true },
                    infoPressed: {}
                },
                defaultAggregation: "_list"
            },

            prepareInfoPress(oEvent) {
                this.fireInfoPressed({
                    attributeId: oEvent.getParameter("attributeId")
                })
            },

            init(e) {
                const that = this
                this.setAggregation(
                    "_list",
                    new List({
                        noDataText: "Keine Items im Request vorhanden",
                        items: {
                            path: "items",
                            factory: (sId, oContext) => {
                                const item = oContext.getObject()
                                let renderer
                                if (item.type === "RequestItemGroupDVO") {
                                    renderer = new RequestItemGroupRenderer({
                                        group: { path: oContext.getPath() }
                                    })
                                        .attachChange((oEvent) => that.fireChange(oEvent))
                                        .attachInfoPressed((oEvent) => {
                                            that.prepareInfoPress(oEvent)
                                        })
                                } else {
                                    renderer = new RequestItemRenderer({
                                        item: { path: oContext.getPath() }
                                    })
                                        .attachChange((oEvent) => that.fireChange(oEvent))
                                        .attachInfoPressed((oEvent) => {
                                            that.prepareInfoPress(oEvent)
                                        })
                                }
                                return renderer
                            }
                        }
                    })
                )
            },
            setValidationItems(validationItems) {
                this.setProperty("validationItems", validationItems, true)
                const listItems = this.getAggregation("_list").getItems()

                if (!validationItems || validationItems.isSuccess) {
                    for (const listItem of listItems) {
                        listItem.setValidationItem(null)
                    }
                    return
                }

                if (validationItems.length > 0 && validationItems.length !== listItems.length) {
                    throw new Error("Length mismatch between errors and listItems.")
                }

                for (let i = 0; i < listItems.length; i++) {
                    const validationItem = validationItems[i]
                    const listItem = listItems[i]
                    listItem.setValidationItem(validationItem)
                }
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

            getRejectResponseParams() {
                const context = this.getBindingContext().getObject()

                const itemResponses = []
                for (const item of this.getAggregation("_list").getItems()) {
                    itemResponses.push(
                        item.getRejectResponseParams ? item.getRejectResponseParams() : { accept: false }
                    )
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
            }
        })
    }
)
