sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Input",
        "sap/m/StepInput",
        "sap/m/Select",
        "sap/ui/core/ListItem",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/Formatter",
        "sap/m/RadioButton",
        "sap/m/RadioButtonGroup",
        "sap/m/RatingIndicator",
        "sap/m/SegmentedButtonItem",
        "sap/m/SegmentedButton",
        "sap/m/DatePicker",
        "sap/m/DateTimePicker",
        "sap/m/DateRangeSelection",
        "sap/m/TimePicker",
        "sap/ui/core/CustomData",
        "sap/m/Text"
    ],
    (
        Control,
        Input,
        StepInput,
        Select,
        ListItem,
        JSONModel,
        Formatter,
        RadioButton,
        RadioButtonGroup,
        RatingIndicator,
        SegmentedButtonItem,
        SegmentedButton,
        DatePicker,
        DateTimePicker,
        DateRangeSelection,
        TimePicker,
        CustomData,
        Text
    ) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.attributes.ValueRenderer", {
            metadata: {
                aggregations: {
                    _control: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
                },
                properties: {
                    valueType: { type: "string" },
                    editable: { type: "boolean" }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true }
                },
                defaultAggregation: "_control"
            },

            init(e) {
                this.attachModelContextChange(this.modelContextChangeListener)
            },
            modelContextChangeListener(oEvent) {
                const context = oEvent.getSource().getBindingContext()
                if (!context) {
                    this.renderHints = undefined
                    this.valueHints = undefined
                    return
                }
                const object = context.getObject()
                if (object === this.object) {
                    return
                }
                this.object = object
                if (!object) {
                    this.renderHints = undefined
                    this.valueHints = undefined
                    return
                }
                this.renderHints = object.renderHints
                this.valueHints = object.valueHints
                if (!this.renderHints) {
                    this.renderHints = undefined
                }
                if (!this.valueHints) {
                    this.valueHints = undefined
                }

                this.updateControls()
            },
            updateControls() {
                if (!this.getValueType() && !this.renderHints) {
                    return
                }

                let valueTypeClass
                if (!this.renderHints || !this.valueHints) {
                    const valueType = this.getValueType()
                    // @ts-ignore
                    if (!window.TSServal || !TSServal.Serializable) {
                        App.error("Serializable could not be obtained.")
                        return
                    }
                    // @ts-ignore
                    valueTypeClass = TSServal.Serializable.getModule(valueType)
                    if (!valueTypeClass) {
                        App.error(`Rendering information for valueType ${valueType} could not be found.`)
                        return
                    }
                }
                const model = this.getModel()
                if (!this.renderHints) {
                    this.renderHints = valueTypeClass.renderHints
                    if (model) model.setProperty("/renderHints", this.renderHints)
                }
                if (!this.valueHints) {
                    this.valueHints = valueTypeClass.valueHints
                    if (model) model.setProperty("/valueHints", this.valueHints)
                }

                let valueType = this.object.valueType ? this.object.valueType : this.getValueType()
                if (!valueType) {
                    valueType = this.object.content.value["@type"]
                }
                this._valueType = valueType
                if (this.getEditable()) {
                    this.createEditableControl()
                } else {
                    this.createReadonlyControl()
                }
            },
            createEditableSelectControl() {
                const that = this
                let control
                switch (this.renderHints.dataType) {
                    case "Day":
                        break
                    case "Month":
                        break
                    case "Year":
                        control = new DatePicker({
                            displayFormat: "yyyy"
                        }).attachChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "Time":
                        control = new TimePicker({}).attachChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "Date":
                        control = new DatePicker({}).attachChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "DateTime":
                        control = new DateTimePicker({}).attachChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "TimePeriod":
                        break
                    case "DatePeriod":
                        control = new DateRangeSelection({}).attachChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "DateTimePeriod":
                        break
                    default:
                        if (this.valueHints.values) {
                            control = new Select({
                                forceSelection: false,
                                items: {
                                    path: "valueHints/values",
                                    template: new ListItem({
                                        key: "{key}",
                                        text: { path: "displayName", formatter: Formatter.toTranslated }
                                    }),
                                    length: 300
                                }
                            }).attachChange((oEvent) => that.fireChange(oEvent))
                        } else {
                            control = new RatingIndicator({
                                maxValue: Math.min(this.valueHints.max, 10),
                                visualMode: "Full"
                            })
                        }
                        break
                }
                return control
            },
            createEditableStringControl() {
                const that = this
                let control
                switch (this.renderHints.editType) {
                    case "InputLike":
                        control = new Input().attachLiveChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "ButtonLike":
                        if (this.valueHints.values) {
                            const buttons = this.valueHints.values.map((item, index) => {
                                return new RadioButton({
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: `{valueHints/values/${index}/key}` })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                this.valueHints
                            )
                            break
                        }
                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()
                        break
                    case "SliderLike":
                        if (this.valueHints.values) {
                            const items = this.valueHints.values.map((item, index) => {
                                return new SegmentedButtonItem({
                                    key: `{valueHints/values/${index}/key}`,
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    }
                                })
                            })
                            control = new SegmentedButton({
                                items: items
                            })
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                this.valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableIntegerControl() {
                const that = this
                let control
                switch (this.renderHints.editType) {
                    case "InputLike":
                        control = new Input().attachLiveChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "ButtonLike":
                        if (this.valueHints.values) {
                            const buttons = this.valueHints.values.map((item, index) => {
                                return new RadioButton({
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: `{valueHints/values/${index}/key}` })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            control = new StepInput({
                                min: this.valueHints.min,
                                max: this.valueHints.max
                            }).attachChange((oEvent) => that.fireChange(oEvent))
                        }
                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()

                        break
                    case "SliderLike":
                        if (this.valueHints.values) {
                            const items = this.valueHints.values.map((item, index) => {
                                return new SegmentedButtonItem({
                                    key: `{valueHints/values/${index}/key}`,
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    }
                                })
                            })
                            control = new SegmentedButton({
                                items: items
                            })
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                this.valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableFloatControl() {
                const that = this
                let control
                switch (this.renderHints.editType) {
                    case "InputLike":
                        control = new Input().attachLiveChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "ButtonLike":
                        if (this.valueHints.values) {
                            const buttons = this.valueHints.values.map((item, index) => {
                                return new RadioButton({
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: `{valueHints/values/${index}/key}` })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            control = new StepInput({
                                min: this.valueHints.min,
                                max: this.valueHints.max,
                                displayValuePrecision: 2,
                                step: 0.1
                            }).attachChange((oEvent) => that.fireChange(oEvent))
                        }

                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()
                        break
                    case "SliderLike":
                        if (this.valueHints.values) {
                            const items = this.valueHints.values.map((item, index) => {
                                return new SegmentedButtonItem({
                                    key: `{valueHints/values/${index}/key}`,
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    }
                                })
                            })
                            control = new SegmentedButton({
                                items: items
                            })
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                this.valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableBooleanControl() {
                const that = this
                let control
                switch (this.renderHints.editType) {
                    case "InputLike":
                        break
                    case "ButtonLike":
                        if (this.valueHints.values) {
                            const buttons = this.valueHints.values.map((item, index) => {
                                return new RadioButton({
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: `{valueHints/values/${index}/key}` })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                this.valueHints
                            )
                        }
                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()
                        break
                    case "SliderLike":
                        if (this.valueHints.values) {
                            const items = this.valueHints.values.map((item, index) => {
                                return new SegmentedButtonItem({
                                    key: `{valueHints/values/${index}/key}`,
                                    text: {
                                        path: `valueHints/values/${index}/displayName`,
                                        formatter: Formatter.toTranslated
                                    }
                                })
                            })
                            control = new SegmentedButton({
                                items: items
                            })
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                this.valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableControl() {
                this.removeAggregation("_control")
                let control
                switch (this.renderHints.technicalType) {
                    case "Boolean":
                        control = this.createEditableBooleanControl()
                        break
                    case "String":
                        control = this.createEditableStringControl()
                        break
                    case "Integer":
                        control = this.createEditableIntegerControl()
                        break
                    case "Float":
                        control = this.createEditableFloatControl()
                        break
                }
                if (control) {
                    this.setAggregation("_control", control)
                }
                return control
            },
            createReadonlyControl() {
                this.removeAggregation("_control")
                let control
                let translationNamespace = ""
                switch (this.renderHints.dataType) {
                    case "Sex":
                        translationNamespace = "i18n://attributes.values.sex."
                        break
                    case "Country":
                        translationNamespace = "i18n://attributes.values.countries."
                        break
                    case "Language":
                        translationNamespace = "i18n://attributes.values.languages."
                        break
                }

                let binding = "value/value"
                if (this.object && this.object.results && this.object.results.length > 0) {
                    binding = "results/0/value/value"
                }
                let formatter
                if (translationNamespace) {
                    formatter = Formatter.toTranslated
                    control = new Text({
                        text: {
                            parts: [{ path: "valueType" }, { path: binding }],
                            formatter: (valueType, value) => {
                                if (!value) return ""
                                return Formatter.toTranslated(`${translationNamespace}${value}`)
                            }
                        }
                    })
                } else {
                    control = new Text({ text: { path: binding } })
                }

                if (control) {
                    this.setAggregation("_control", control)
                }
                return control
            },
            setEditable(value) {
                const currentEditableValue = this.getProperty("editable")
                if (currentEditableValue === value) return
                this.setProperty("editable", value)
                this.updateControls()
            },

            getEditedValue() {
                const control = this.getAggregation("_control")
                if (!control) return
                let value
                const controlName = control.getMetadata().getName()
                switch (controlName) {
                    case "sap.m.RadioButtonGroup":
                        const index = control.getSelectedIndex()
                        const button = control.getButtons()[index]
                        value = button.getCustomData()[0].getKey()
                        break
                    case "sap.m.TimePicker":
                    case "sap.m.DatePicker":
                    case "sap.m.StepInput":
                    case "sap.m.Input":
                        value = control.getValue()
                        break
                    case "sap.m.Select":
                    case "sap.m.SegmentedButton":
                        value = control.getSelectedKey()
                        break
                    case "sap.m.Text":
                        value = control.getText()
                        break
                }
                switch (this.renderHints.dataType) {
                    case "Year":
                        value = new Date(value).getUTCFullYear()
                        break
                }
                switch (this.renderHints.technicalType) {
                    case "Integer":
                        try {
                            value = parseInt(value)
                        } catch (e) {
                            console.error(e)
                        }
                        break
                    case "Float":
                        try {
                            value = parseFloat(value)
                        } catch (e) {
                            console.error(e)
                        }
                        break
                    case "Boolean":
                        if (value) value = true
                        else value = false
                        break
                    case "String":
                        if (!value) return undefined
                        break
                }
                const returnValue = {
                    "@type": "IdentityAttribute",
                    value: {
                        "@type": this._valueType,
                        value: value
                    },
                    owner: runtime.currentAccount.address
                }
                return returnValue
            },

            setValueType(valueType) {
                if (valueType === this.getProperty("valueType")) {
                    return
                }
                this.renderHints = undefined
                this.valueHints = undefined
                this.setProperty("valueType", valueType, true)
                this.updateControls()
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
                const editControl = oControl.getAggregation("_control")
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
