sap.ui.define(
    [
        "sap/m/ListItemBase",
        "sap/m/CheckBox",
        "sap/m/Text",
        "nmshd/app/core/controls/requests/items/ReadAttributeRequestItemRenderer"
    ],
    (ListItemBase, CheckBox, Text, ReadAttributeRequestItemRenderer) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.requests.RequestItemRenderer", {
            metadata: {
                aggregations: {
                    content: { singularName: "content" },
                    _title: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _description: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _control: { multiple: false, visibility: "hidden" },
                    _checkbox: { type: "sap.m.CheckBox", multiple: false, visibility: "hidden" }
                },
                properties: {
                    item: { type: "object", defaultValue: {} }
                },
                publicMethods: [],
                events: {},
                defaultAggregation: "content"
            },

            /* Overwrite internal sapMLIBActive style toggling for Active items */
            _activeHandling: function () {},

            isAttributeRequestItem(item) {},

            init(e) {
                this.setAggregation(
                    "_checkbox",
                    new CheckBox({ text: "", editable: "{=!${mustBeAccepted}}", selected: "{mustBeAccepted}" })
                )
                this.setAggregation("_title", new Text({ text: "{title}", visible: "{=!!${title}}" }))
                this.setAggregation("_description", new Text({ text: "{description}", visible: "{=!!${description}}" }))
            },

            getSelected() {
                const checkbox = this.getAggregation("_checkbox")
                if (!checkbox) return false
                return checkbox.getSelected()
            },

            getResponseParams() {
                const control = this.getAggregation("_control")
                if (!control) {
                    return { accept: false }
                }
                const accept = this.getSelected()
                const params = control.getResponseParams()
                return { accept: accept, ...params }
            },

            getContext() {
                let context = this.getBindingContext().getObject()
                const control = this.getAggregation("_control")
                if (control) {
                    context.itemContext = control.getContext()
                }
                context.selected = this.getSelected()
                return context
            },

            updateInternalControl() {
                // TODO: Make this update smart, e.g. we do not need to create the control new
                // if we have the same value, valuetype or control class
                const item = this.getItem()
                let control
                switch (item["@type"]) {
                    case "ReadAttributeRequestItem":
                        control = new ReadAttributeRequestItemRenderer({ requestItem: "{}" })
                        break
                    default:
                        control = new Text({ text: "{value}" })
                        break
                }

                this.setAggregation("_control", control)
            },

            setItem(value) {
                this.setProperty("item", value, true)
                if (value) {
                    this.updateInternalControl()
                } else {
                    console.error("NO ITEM")
                }
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("requestItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                oRM.write('<div class="requestItemRendererCheckbox">')
                oRM.renderControl(oControl.getAggregation("_checkbox"))
                oRM.write("</div>")

                oRM.write('<div class="requestItemRendererChildContainer">')
                oRM.write('<div class="requestItemRendererHeader">')
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

                const itemControl = oControl.getAggregation("_control")
                if (itemControl) {
                    oRM.renderControl(itemControl)
                }

                const content = oControl.getAggregation("content")
                if (content) {
                    for (const control of oControl.getAggregation("content")) {
                        oRM.write('<div class="requestItemRendererChild">')
                        oRM.renderControl(control)
                        oRM.write("</div>")
                    }
                }
                oRM.write("</div>")
                /*
            oRM.write(
                `<div data-sap-ui-icon-content="" class="requestItemRendererArrow sapUiIcon sapUiIconMirrorInRTL sapMLIBType sapMLIBImgNav" style="font-family: 'SAP-icons';"></div>`
            )
            */
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