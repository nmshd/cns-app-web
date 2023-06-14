sap.ui.define(
    [
        "sap/m/ListItemBase",
        "sap/m/CheckBox",
        "sap/m/Text",
        "nmshd/app/core/controls/requests/RequestItemRenderer",
        "sap/m/List"
    ],
    (ListItemBase, CheckBox, Text, RequestItemRenderer, List) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.requests.RequestItemGroupRenderer", {
            metadata: {
                aggregations: {
                    content: { singularName: "content" },
                    _title: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _description: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _checkbox: { type: "sap.m.CheckBox", multiple: false, visibility: "hidden" },
                    _list: { type: "sap.m.List", multiple: false, visibility: "hidden" }
                },
                properties: {
                    group: { type: "object", defaultValue: { title: "", description: "", mustBeAccepted: false } },
                    validationItem: { defaultValue: null }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true },
                    infoPressed: {}
                },
                defaultAggregation: "content"
            },

            /* Overwrite internal sapMLIBActive style toggling for Active items */
            _activeHandling: function () {},

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
                        items: {
                            path: "items",
                            template: new RequestItemRenderer({
                                item: "{}"
                            })
                                .attachChange((oEvent) => that.fireChange(oEvent))
                                .attachInfoPressed((oEvent) => {
                                    that.prepareInfoPress(oEvent)
                                })
                        }
                    })
                )
                this.setAggregation(
                    "_checkbox",
                    new CheckBox({
                        text: "",
                        editable: "{=!${mustBeAccepted}}",
                        visible: "{= ${isDecidable}}",
                        selected: "{mustBeAccepted}"
                    }).attachSelect((oEvent) => that.fireChange(oEvent))
                )
                this.setAggregation("_title", new Text({ text: "{title}", visible: "{=!!${title}}" }))
                this.setAggregation("_description", new Text({ text: "{description}", visible: "{=!!${description}}" }))
            },
            setValidationItem(validationItems) {
                this.setProperty("validationItem", validationItems, true)
                const listItems = this.getAggregation("_list").getItems()

                if (!validationItems || validationItems.isSuccess) {
                    for (const listItem of listItems) {
                        listItem.setValidationItem(null)
                    }
                    return
                }

                if (validationItems.items.length !== listItems.length) {
                    throw new Error("Length mismatch between errors and listItems.")
                }

                for (let i = 0; i < listItems.length; i++) {
                    const item = validationItems.items[i]
                    const listItem = listItems[i]
                    listItem.setValidationItem(item)
                }
            },

            getSelected() {
                const checkbox = this.getAggregation("_checkbox")
                if (!checkbox) return false
                return checkbox.getSelected()
            },
            getSelectedHierarchy() {
                const item = { selected: this.getSelected() }
                const values = []
                for (const item of this.getAggregation("_list").getItems()) {
                    values.push(item.getSelected())
                }
                item.items = values
                return item
            },

            getContext() {
                let context = this.getBindingContext().getObject()
                context.selected = this.getSelected()
                const items = []
                for (const item of this.getAggregation("_list").getItems()) {
                    items.push(item.getContext())
                }
                context.items = items
                return context
            },

            getResponseParams() {
                const accept = this.getSelected()
                const itemResponses = []
                for (const item of this.getAggregation("_list").getItems()) {
                    itemResponses.push(item.getResponseParams())
                }
                return { items: itemResponses, accept: accept }
            },

            getRejectResponseParams() {
                const itemResponses = []
                for (const item of this.getAggregation("_list").getItems()) {
                    itemResponses.push({ accept: false })
                }
                return { items: itemResponses, accept: false }
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("requestItemGroupRenderer")
                oRM.writeClasses()
                oRM.write(">")

                oRM.write('<div class="requestItemGroupRendererCheckbox">')
                oRM.renderControl(oControl.getAggregation("_checkbox"))
                oRM.write("</div>")

                oRM.write('<div class="requestItemGroupRendererChildContainer">')
                oRM.write('<div class="requestItemGroupRendererHeader">')
                const titleControl = oControl.getAggregation("_title")
                if (titleControl) {
                    oRM.write('<div class="requestItemRendererTitle">')
                    oRM.renderControl(titleControl)
                    oRM.write("</div>")
                }
                const descriptionControl = oControl.getAggregation("_description")
                if (descriptionControl) {
                    oRM.write('<div class="requestItemRendererDescription">')
                    oRM.renderControl(descriptionControl)
                    oRM.write("</div>")
                }
                oRM.write("</div>")

                oRM.write('<div class="requestItemGroupRendererItems">')
                oRM.renderControl(oControl.getAggregation("_list"))
                oRM.write("</div>")

                const content = oControl.getAggregation("content")
                if (content) {
                    for (const control of oControl.getAggregation("content")) {
                        oRM.write('<div class="requestItemGroupRendererChild">')
                        oRM.renderControl(control)
                        oRM.write("</div>")
                    }
                }
                oRM.write("</div>")
                /*
            oRM.write(
                `<div data-sap-ui-icon-content="" class="requestItemGroupRendererArrow sapUiIcon sapUiIconMirrorInRTL sapMLIBType sapMLIBImgNav" style="font-family: 'SAP-icons';"></div>`
            )
            */
                oRM.write("</div>")
            }
        })
    }
)
