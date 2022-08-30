sap.ui.define(
    [
        "sap/m/ListItemBase",
        "sap/m/CheckBox",
        "sap/m/Text",
        "nmshd/app/core/controls/requests/items/ReadAttributeRequestItemRenderer",
        "nmshd/app/core/controls/requests/items/CreateRelationshipAttributeRequestItemRenderer",
        "nmshd/app/core/controls/requests/items/ShareAttributeRequestItemRenderer",
        "nmshd/app/core/controls/requests/items/ProposeAttributeRequestItemRenderer",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/controls/requests/items/ReadAttributeResponseItemRenderer",
        "nmshd/app/core/controls/requests/items/CreateRelationshipAttributeResponseItemRenderer",
        "nmshd/app/core/controls/requests/items/ShareAttributeResponseItemRenderer",
        "nmshd/app/core/controls/requests/items/ProposeAttributeResponseItemRenderer",
        "sap/m/MessageStrip",
        "nmshd/app/core/Formatter"
    ],
    (
        ListItemBase,
        CheckBox,
        Text,
        ReadAttributeRequestItemRenderer,
        CreateRelationshipAttributeRequestItemRenderer,
        ShareAttributeRequestItemRenderer,
        ProposeAttributeRequestItemRenderer,
        JSONModel,
        ReadAttributeResponseItemRenderer,
        CreateRelationshipAttributeResponseItemRenderer,
        ShareAttributeResponseItemRenderer,
        ProposeAttributeResponseItemRenderer,
        MessageStrip,
        Formatter
    ) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.requests.RequestItemRenderer", {
            metadata: {
                aggregations: {
                    content: { singularName: "content" },
                    _error: { multiple: false, visibility: "hidden" },
                    _title: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _description: { type: "sap.m.Text", multiple: false, visibility: "hidden" },
                    _control: { multiple: false, visibility: "hidden" },
                    _checkbox: { type: "sap.m.CheckBox", multiple: false, visibility: "hidden" }
                },
                properties: {
                    item: { type: "object", defaultValue: null },
                    validationItem: { defaultValue: null },
                    error: { type: "string", defaultValue: "" }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true }
                },
                defaultAggregation: "content"
            },

            /* Overwrite internal sapMLIBActive style toggling for Active items */
            _activeHandling: function () {},

            isAttributeRequestItem(item) {},

            setValidationItem(validationItem) {
                this.setProperty("validationItem", validationItem, true)

                if (!validationItem || validationItem.isSuccess) {
                    this.setError()
                    return
                }

                this.setError(`i18n://${validationItem.code}`)
            },

            setError(value) {
                this.setProperty("error", value, false)
                const control = this.getAggregation("_error")
                if (!control) return
                control.setVisible(!!value)
                control.setText(Formatter.toTranslated(value))
            },

            init(e) {
                const that = this
                const model = new JSONModel({
                    isChecked: false
                })
                this.model = model
                this.setModel(model, "requestItemRenderer")
                this.setAggregation(
                    "_checkbox",
                    new CheckBox({
                        text: "",
                        editable: "{=!${mustBeAccepted}}",
                        visible: "{= ${isDecidable}}",
                        selected: "{= ${mustBeAccepted} || ${requestItemRenderer>/isChecked}}"
                    })
                        .attachSelect((oEvent) => that.fireChange(oEvent))
                        .setModel(model, "requestItemRenderer")
                )
                this.setAggregation("_error", new MessageStrip({ type: "Error", visible: false, showIcon: true }))
                this.setAggregation("_title", new Text({ text: "{title}", visible: "{=!!${title}}" }))
                this.setAggregation("_description", new Text({ text: "{description}", visible: "{=!!${description}}" }))
                this.updateInternalControl()
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
                if (!accept) {
                    return { accept: false }
                }
                const params = control.getResponseParams()
                if (!params) {
                    return { accept: false }
                }
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

            updateCheckbox(oEvent) {
                const control = this.getAggregation("_control")
                if (control && !control.getEditedValue) {
                    this.model.setProperty("/isChecked", false)
                    return
                }
                const value = control.getEditedValue()
                const item = this.getItem()
                if (value || (item && item.mustBeAccepted)) {
                    this.model.setProperty("/isChecked", true)
                } else {
                    this.model.setProperty("/isChecked", false)
                }
            },

            updateInternalControl() {
                const that = this
                // TODO: Make this update smart, e.g. we do not need to create the control new
                // if we have the same value, valuetype or control class
                const item = this.getItem()
                if (!item) return
                let control

                if (item.response) {
                    switch (item.type) {
                        case "ReadAttributeRequestItemDVO":
                        case "DecidableReadAttributeRequestItemDVO":
                            control = new ReadAttributeResponseItemRenderer({ requestItem: "{}" }).attachChange(
                                (oEvent) => {
                                    that.updateCheckbox(oEvent)
                                    that.fireChange(oEvent)
                                }
                            )
                            break
                        case "CreateRelationshipAttributeRequestItemDVO":
                        case "DecidableCreateRelationshipAttributeRequestItemDVO":
                            control = new CreateRelationshipAttributeResponseItemRenderer({
                                requestItem: "{}"
                            }).attachChange((oEvent) => {
                                that.updateCheckbox(oEvent)
                                that.fireChange(oEvent)
                            })
                            break
                        case "ShareAttributeRequestItemDVO":
                        case "DecidableShareAttributeRequestItemDVO":
                            control = new ShareAttributeResponseItemRenderer({ requestItem: "{}" }).attachChange(
                                (oEvent) => {
                                    that.updateCheckbox(oEvent)
                                    that.fireChange(oEvent)
                                }
                            )
                            break
                        case "ProposeAttributeRequestItemDVO":
                        case "DecidableProposeAttributeRequestItemDVO":
                            control = new ProposeAttributeResponseItemRenderer({ requestItem: "{}" }).attachChange(
                                (oEvent) => {
                                    that.updateCheckbox(oEvent)
                                    that.fireChange(oEvent)
                                }
                            )
                            break
                        default:
                            console.warn(`Unknown RequestItem.type encountered: ${item.type}`)
                            break
                    }
                } else {
                    switch (item.type) {
                        case "ReadAttributeRequestItemDVO":
                        case "DecidableReadAttributeRequestItemDVO":
                            control = new ReadAttributeRequestItemRenderer({ requestItem: "{}" }).attachChange(
                                (oEvent) => {
                                    that.updateCheckbox(oEvent)
                                    that.fireChange(oEvent)
                                }
                            )
                            break
                        case "CreateRelationshipAttributeRequestItemDVO":
                        case "DecidableCreateRelationshipAttributeRequestItemDVO":
                            control = new CreateRelationshipAttributeRequestItemRenderer({
                                requestItem: "{}"
                            }).attachChange((oEvent) => {
                                that.updateCheckbox(oEvent)
                                that.fireChange(oEvent)
                            })
                            break
                        case "ShareAttributeRequestItemDVO":
                        case "DecidableShareAttributeRequestItemDVO":
                            control = new ShareAttributeRequestItemRenderer({ requestItem: "{}" }).attachChange(
                                (oEvent) => {
                                    that.updateCheckbox(oEvent)
                                    that.fireChange(oEvent)
                                }
                            )
                            break
                        case "ProposeAttributeRequestItemDVO":
                        case "DecidableProposeAttributeRequestItemDVO":
                            control = new ProposeAttributeRequestItemRenderer({ requestItem: "{}" }).attachChange(
                                (oEvent) => {
                                    that.updateCheckbox(oEvent)
                                    that.fireChange(oEvent)
                                }
                            )
                            break
                        default:
                            console.warn(`Unknown RequestItem.type encountered: ${item.type}`)
                            break
                    }
                }

                if (!control) return
                control.setModel(new JSONModel(item), "item")

                this.setAggregation("_control", control)
                this.updateCheckbox()
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
                if (oControl.getError()) {
                    oRM.addClass("requestItemRendererError")
                }
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

                oRM.write('<div class="requestItemRendererErrorContainer">')
                oRM.renderControl(oControl.getAggregation("_error"))
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
