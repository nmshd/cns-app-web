sap.ui.define(["sap/ui/core/Control", "sap/m/Text", "nmshd/app/core/Formatter"], (Control, Text, Formatter) => {
    "use strict"

    return Control.extend("nmshd.app.core.controls.attributes.ValueRenderer", {
        metadata: {
            aggregations: {
                _control: { singularName: "control", multiple: false, visibility: "hidden" }
            },
            properties: {
                value: { type: "object", defaultValue: {} }
            },
            publicMethods: [],
            events: {},
            defaultAggregation: "_control"
        },

        init(e) {
            const binding = this.getBinding()
            if (binding) {
                binding.attachChange(this.bindingChangeListener, this)
            }
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
            if (object === this.object) {
                console.log("Same Object -> IGNORE")
                return
            }
            if (!object) {
                this.renderHints = {}
                this.valueHints = {}
                return
            }
            this.object = object
            this.renderHints = object.renderHints
            this.valueHints = object.valueHints
            if (!this.renderHints) {
                this.renderHints = {}
            }
            if (!this.valueHints) {
                this.valueHints = {}
            }
            this.updateInternalControl()
        },
        bindingChangeListener(oEvent) {
            console.log("Request Binding Change", oEvent)
        },
        /*
        bindElement(a) {
            console.log("bindElement", a)
            return Control.bindElement.apply(this, [a])
        },
        */

        updateInternalControl() {
            // TODO: Make this update smart, e.g. we do not need to create the control new
            // if we have the same value, valuetype or control class
            this.removeAggregation("_editControl")
            let translationNamespace = ""
            let control

            switch (this.renderHints.dataType) {
                case "Sex":
                    translationNamespace = "i18n://attributes.values.sex."
                    break
                case "Nationality":
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

        setValue(value) {
            this.setProperty("value", value, true)
            this.updateInternalControl()
        },

        renderer(oRM, oControl) {
            oRM.write("<div")
            oRM.writeControlData(oControl)
            oRM.writeClasses()
            oRM.write(">")
            const valueControl = oControl.getAggregation("_control")
            if (valueControl) {
                oRM.renderControl(valueControl)
            }
            oRM.write("</div>")
        },

        onAfterRendering(oEvent) {
            if (sap.ui.core.Control.prototype.onAfterRendering) {
                sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments)
            }
        }
    })
})
