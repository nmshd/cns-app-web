sap.ui.define(["sap/ui/core/Control", "sap/m/Text"], (Control, Text) => {
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
            console.log("modelContextChangeListener", oEvent)
        },
        bindingChangeListener(oEvent) {
            console.log("Request Binding Change", oEvent)
        },
        bindElement(a) {
            console.log("bindElement", a)
            return Control.bindElement.apply(this, [a])
        },

        isNumberValue(value) {
            switch (value["@type"]) {
                case "ProprietaryInteger":
                case "ProprietaryFloat":
                    return true

                case "AbstractFloat":
                case "AbstractDay":
                case "BirthDay":
                    return true

                case "AbstractMonth":
                case "BirthMonth":
                    return true

                case "AbstractYear":
                case "BirthYear":
                    return true

                case "AbstractInteger":
                case "Age":
                    return true
            }
            return false
        },

        isComplexValue(value) {
            switch (value["@type"]) {
                case "AbstractComplexValue":
                case "AbstractMeasurement":
                case "AbstractLengthMeasurement":
                    return true
                case "AbstractPeriod":
                    return true
                case "BirthDate":
                case "BirthPlace":
                case "Salutation":
                    return true
                case "LegalName":
                case "LegalNameDE":
                    return true
                case "AbstractAddress":
                case "StreetAddress":
                case "DeliveryBoxAddress":
                case "PostOfficeBoxAddress":
                    return true
            }
            return false
        },

        updateInternalControl() {
            // TODO: Make this update smart, e.g. we do not need to create the control new
            // if we have the same value, valuetype or control class
            const value = this.getValue()
            let control
            if (!value) {
                control = new Text({ text: "Empty" })
            }
            if (this.isComplexValue(value)) {
                control = new Text({ text: "Complex" })
            } else {
                control = new Text({ text: value })
            }

            this.setAggregation("_control", control)
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
