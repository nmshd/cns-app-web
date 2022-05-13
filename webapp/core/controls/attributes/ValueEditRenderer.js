sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Input",
        "sap/m/StepInput",
        "sap/m/Select",
        "sap/ui/core/ListItem",
        "sap/ui/model/json/JSONModel"
    ],
    (Control, Input, StepInput, Select, ListItem, JSONModel) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.attributes.ValueEditRenderer", {
            metadata: {
                aggregations: {
                    _editControl: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
                },
                properties: {},
                publicMethods: [],
                events: {},
                defaultAggregation: "_editControl"
            },

            init(e) {
                this.attachModelContextChange(this.modelContextChangeListener)
            },
            modelContextChangeListener(oEvent) {
                const context = oEvent.getSource().getBindingContext()
                if (!context) {
                    this.renderHints = {}
                    this.valueHints = {}
                    return
                }
                const object = context.getObject()
                if (!object) {
                    this.renderHints = {}
                    this.valueHints = {}
                    return
                }
                this.renderHints = object.renderHints
                this.valueHints = object.valueHints
                if (!this.renderHints) {
                    this.renderHints = {}
                }
                if (!this.valueHints) {
                    this.valueHints = {}
                }
                this.createNewEditControl()
            },
            createNewSelectControl() {
                let control
                switch (this.renderHints.semantic) {
                    default:
                        control = new Select({
                            forceSelection: false,
                            items: {
                                path: "valueHints/values",
                                template: new ListItem({
                                    key: "{key}",
                                    text: "{title}"
                                })
                            }
                        })
                        break
                    case "sex":
                        const model = new JSONModel({
                            items: [
                                {
                                    key: "intersex",
                                    title: "i18n://attribute.value.sex.intersex"
                                },
                                {
                                    key: "male",
                                    title: "i18n://attribute.value.sex.male"
                                },
                                {
                                    key: "female",
                                    title: "i18n://attribute.value.sex.female"
                                }
                            ]
                        })

                        control = new Select({
                            forceSelection: false,
                            items: {
                                path: "/items",
                                template: new ListItem({
                                    icon: "{icon}",
                                    key: "{key}",
                                    text: "{title}"
                                })
                            }
                        })
                        control.setModel(model)
                }
                return control
            },
            createNewInputControl() {
                let control
                switch (this.renderHints.dataType) {
                    case "integer":
                        control = new StepInput({
                            min: this.valueHints.min,
                            max: this.valueHints.max
                        })
                        break
                    case "float":
                        control = new StepInput({
                            min: this.valueHints.min,
                            max: this.valueHints.max,
                            displayValuePrecision: 2,
                            step: 0.1
                        })
                        break
                    default:
                        control = new Input()
                        break
                }
                if (this.renderHints.semantic === "Password") {
                    control.setType("Password")
                }
                return control
            },
            createNewEditControl() {
                this.removeAggregation("_editControl")
                let control
                switch (this.renderHints.editType) {
                    case "input":
                        control = this.createNewInputControl()
                        break
                    case "select":
                        control = this.createNewSelectControl()
                        break
                }
                if (control) {
                    this.setAggregation("_editControl", control)
                }
                return control
            },

            getEditedValue() {
                const control = this.getAggregation("_editControl")
                if (!control) return
                let value
                switch (this.renderHints.editType) {
                    case "input":
                        value = control.getValue()
                        break
                    case "select":
                        value = control.getSelectedKey()
                        break
                }
                return value
            },

            getEditedContext() {
                const context = this.getBindingContext().getObject()
                const editedValue = this.getEditedValue()
                context.editedValue = editedValue
                return context
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.addClass("valueEditRenderer")
                oRM.writeControlData(oControl)
                oRM.writeClasses()
                oRM.write(">")
                const editControl = oControl.getAggregation("_editControl")
                if (editControl) {
                    oRM.write('<div class="valueEditRendererControl">')
                    oRM.renderControl(editControl)
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
