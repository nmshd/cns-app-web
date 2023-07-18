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
        "sap/m/Text",
        "sap/m/Label",
        "sap/ui/layout/form/SimpleForm",
        "sap/m/Title"
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
        Text,
        Label,
        SimpleForm,
        Title
    ) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.attributes.ValueRenderer", {
            metadata: {
                aggregations: {
                    _control: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
                },
                properties: {
                    propertyName: { type: "string" },
                    valueType: { type: "string" },
                    editable: { type: "boolean" },
                    updateDisabled: { type: "boolean" },
                    attributePath: { type: "string", defaultValue: "results/0/value/value" }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true }
                },
                defaultAggregation: "_control"
            },

            init(e) {
                if (!this.getUpdateDisabled()) {
                    this.attachModelContextChange(this.modelContextChangeListener)
                }
            },
            modelContextChangeListener(oEvent) {
                if (this.getUpdateDisabled()) return

                const context = oEvent.getSource().getBindingContext()
                if (!context) {
                    this.renderHints = undefined
                    this.valueHints = undefined
                    this.removeAggregation("_control")
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
                    this.removeAggregation("_control")
                    return
                }

                if (object.renderHints && object.valueHints) {
                    this.renderHints = object.renderHints
                    this.valueHints = object.valueHints
                } else if (object.results && object.results.length > 0) {
                    this.renderHints = object.results[0].renderHints
                    this.valueHints = object.results[0].valueHints
                }

                appLogger.log("Control invalidated through model " + oEvent.getSource().getId())
                this.invalidateControl()
            },
            invalidateControl() {
                if (this._invalidated) return
                this._invalidated = true
                setTimeout(() => {
                    this.updateControls()
                    this._invalidated = false
                }, 0)
            },
            updateControls() {
                if (!this.getValueType() && !this.renderHints) {
                    return
                }

                let valueTypeClass
                if (!this.renderHints || !this.valueHints) {
                    const valueType = this.getValueType()
                    if (!window.TSServal || !TSServal.Serializable) {
                        App.error("Serializable could not be obtained.")
                        return
                    }
                    valueTypeClass = TSServal.Serializable.getModule(valueType, 1)
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

                let valueType = this.object ? this.object.valueType : undefined
                valueType = valueType ? valueType : this.getValueType()

                if (!valueType && this.object && this.object.content && this.object.content.value) {
                    valueType = this.object.content.value["@type"]
                }
                if (!valueType) valueType = "Unknown"
                this._valueType = valueType
                this.valueRenderers = {}
                if (this.getEditable()) {
                    this.createEditableControl()
                } else {
                    this.createReadonlyControl()
                }
            },
            createEditableSelectControl() {
                const that = this
                let control
                const propertyName = this.getPropertyName()
                const valueHints = this.valueHints
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
                        control = new DatePicker({ displayFormat: "YYYY-MM-dd" }).attachChange((oEvent) =>
                            that.fireChange(oEvent)
                        )
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
                        if (valueHints.values) {
                            control = new Select({
                                forceSelection: false,
                                items: {
                                    path: propertyName
                                        ? `valueHints/propertyHints/${propertyName}/values`
                                        : "valueHints/values",

                                    template: new ListItem({
                                        key: "{key}",
                                        text: { path: "displayName", formatter: Formatter.toTranslated }
                                    }),
                                    length: 300
                                }
                            }).attachChange((oEvent) => that.fireChange(oEvent))
                        } else {
                            if (this.renderHints.dataType === "FileReference") {
                                control = new Text({ text: "Work in progress" })
                            } else {
                                control = new RatingIndicator({
                                    maxValue: Math.min(this.valueHints.max, 10),
                                    visualMode: "Full"
                                })
                            }
                        }
                        break
                }

                return control
            },
            createEditableStringControl() {
                const that = this
                let control
                const propertyName = this.getPropertyName()
                const valueHints = this.valueHints
                switch (this.renderHints.editType) {
                    case "InputLike":
                        let type = "Text"
                        if (this.renderHints.dataType === "PhoneNumber") {
                            type = "Tel"
                        } else if (this.renderHints.dataType === "EMailAddress") {
                            type = "Email"
                        } else if (this.renderHints.dataType === "URL") {
                            type = "Url"
                        }
                        control = new Input({
                            type: type,
                            maxLength: this.valueHints.maxLength ? this.valueHints.maxLength : 0
                        }).attachChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "ButtonLike":
                        if (valueHints.values) {
                            const buttons = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new RadioButton({
                                    text: {
                                        path: path,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: key })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                valueHints
                            )
                            break
                        }
                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()
                        break
                    case "SliderLike":
                        if (valueHints.values) {
                            const items = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new SegmentedButtonItem({
                                    key: key,
                                    text: {
                                        path: path,
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
                                valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableIntegerControl() {
                const that = this
                let control
                const propertyName = this.getPropertyName()
                const valueHints = this.valueHints
                switch (this.renderHints.editType) {
                    case "InputLike":
                        control = new Input({
                            type: "Number",
                            maxLength: this.valueHints.maxLength
                        }).attachLiveChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "ButtonLike":
                        if (valueHints.values) {
                            const buttons = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new RadioButton({
                                    text: {
                                        path: path,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: key })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            control = new StepInput({
                                min: valueHints.min,
                                max: valueHints.max
                            }).attachChange((oEvent) => that.fireChange(oEvent))
                        }
                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()

                        break
                    case "SliderLike":
                        if (valueHints.values) {
                            const items = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new SegmentedButtonItem({
                                    key: key,
                                    text: {
                                        path: path,
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
                                valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableFloatControl() {
                const that = this
                let control
                const propertyName = this.getPropertyName()
                const valueHints = this.valueHints
                switch (this.renderHints.editType) {
                    case "InputLike":
                        control = new Input({
                            maxLength: this.valueHints.maxLength
                        }).attachLiveChange((oEvent) => that.fireChange(oEvent))
                        break
                    case "ButtonLike":
                        if (valueHints.values) {
                            const buttons = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new RadioButton({
                                    text: {
                                        path: path,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: key })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            control = new StepInput({
                                min: valueHints.min,
                                max: valueHints.max,
                                displayValuePrecision: 2,
                                step: 0.1
                            }).attachChange((oEvent) => that.fireChange(oEvent))
                        }

                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()
                        break
                    case "SliderLike":
                        if (valueHints.values) {
                            const items = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new SegmentedButtonItem({
                                    key: key,
                                    text: {
                                        path: path,
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
                                valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableBooleanControl() {
                const that = this
                let control
                const propertyName = this.getPropertyName()
                const valueHints = this.valueHints
                switch (this.renderHints.editType) {
                    case "InputLike":
                        break
                    case "ButtonLike":
                        if (valueHints.values) {
                            const buttons = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new RadioButton({
                                    text: {
                                        path: path,
                                        formatter: Formatter.toTranslated
                                    },
                                    customData: [new CustomData({ key: key })]
                                })
                            })
                            control = new RadioButtonGroup({
                                buttons: buttons
                            }).attachSelect((oEvent) => that.fireChange(oEvent))
                        } else {
                            appLogger.warn(
                                `Invalid rendering combination found for ${this._valueType}.`,
                                this.renderHints,
                                valueHints
                            )
                        }
                        break
                    case "SelectLike":
                        control = this.createEditableSelectControl()
                        break
                    case "SliderLike":
                        if (valueHints.values) {
                            const items = valueHints.values.map((item, index) => {
                                let path = `valueHints/values/${index}/displayName`
                                let key = `{valueHints/values/${index}/key}`
                                if (propertyName) {
                                    path = `valueHints/propertyHints/${propertyName}/values/${index}/displayName`
                                    key = `{valueHints/propertyHints/${propertyName}/values/${index}/key}`
                                }
                                return new SegmentedButtonItem({
                                    key: key,
                                    text: {
                                        path: path,
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
                                valueHints
                            )
                        }
                        break
                }
                return control
            },
            createEditableObjectControl() {
                const that = this
                if (this._valueType === "Unknown") return
                let control
                if (this._valueType === "BirthDate") {
                    control = new DatePicker({ displayFormat: "YYYY-MM-dd" }).attachChange((oEvent) =>
                        that.fireChange(oEvent)
                    )
                } else {
                    const children = []
                    // children.push(new Title({ text: `{t>attributes.values.${this._valueType}._title}` })
                    const valueRenderers = {}
                    for (const property in this.renderHints.propertyHints) {
                        let propertyValueType = TSServal.Serializable.getModule(this._valueType, 1)
                            .getPropertyMap()
                            .get(property).type
                        if (propertyValueType === "String") {
                            propertyValueType = "ProprietaryString"
                        } else if (propertyValueType === "Number") {
                            propertyValueType = "ProprietaryFloat"
                        } else if (propertyValueType === "Boolean") {
                            propertyValueType = "ProprietaryBoolean"
                        }
                        const label = new Label({ text: `{t>attributes.values.${this._valueType}.${property}.label}` })
                        children.push(label)
                        const valueRenderer = new this.constructor({
                            editable: true,
                            propertyName: property,
                            valueType: propertyValueType,
                            updateDisabled: true
                        }).attachChange((oEvent) => that.fireChange(oEvent))
                        children.push(valueRenderer)
                        valueRenderers[property] = valueRenderer
                    }
                    this.valueRenderers = valueRenderers
                    control = new SimpleForm({
                        content: children,
                        editable: true
                    })
                    control.addStyleClass("sapUiNoContentPadding")
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
                    case "Object":
                        control = this.createEditableObjectControl()
                        break
                }
                if (control) {
                    this.setAggregation("_control", control)
                }
                return control
            },
            createReadonlyObjectControl() {
                const children = []
                for (const property in this.renderHints.propertyHints) {
                    let translationNamespace = ""
                    switch (this.renderHints.propertyHints[property].dataType) {
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

                    let binding = "value/" + property
                    if (this.object && this.object.results && this.object.results.length > 0) {
                        binding = "results/0/value/" + property
                    }
                    // valueHints/propertyHints/${propertyName}/values/${index}/displayName
                    if (!this.getBindingContext()) continue
                    const value = this.getBindingContext().getProperty(binding)
                    if (value) {
                        const label = new Label({ text: `{t>attributes.values.${this._valueType}.${property}.label}` })
                        children.push(label)
                        let valueRenderer
                        if (translationNamespace) {
                            const formatter = Formatter.toTranslated
                            valueRenderer = new Text({
                                text: {
                                    parts: [{ path: "valueType" }, { path: binding }],
                                    formatter: (valueType, value) => {
                                        if (!value) return ""
                                        return Formatter.toTranslated(`${translationNamespace}${value}`)
                                    }
                                }
                            })
                        } else {
                            valueRenderer = new Text({ text: { path: binding } })
                        }
                        children.push(valueRenderer)
                    }
                }
                const control = new SimpleForm({ content: children, editable: false })
                control.addStyleClass("sapUiNoContentPadding")

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
                    binding = this.getAttributePath()
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
                    if (this.renderHints.technicalType === "Object") {
                        control = this.createReadonlyObjectControl()
                    } else {
                        control = new Text({ text: { path: binding } })
                    }
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

                if (this._valueType === "BirthDate") {
                    const date = control.getDateValue()
                    if (!date) return
                    const value = {
                        day: date.getDate(),
                        month: date.getMonth() + 1,
                        year: date.getFullYear()
                    }
                    return value
                }

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
                    case "sap.ui.layout.form.SimpleForm":
                        const temporaryValue = {}
                        for (const property in this.valueRenderers) {
                            temporaryValue[property] = this.valueRenderers[property].getEditedValue()
                        }
                        value = temporaryValue
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

                return value
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
            }
        })
    }
)
