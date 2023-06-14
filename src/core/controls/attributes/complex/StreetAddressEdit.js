sap.ui.define(
    ["sap/ui/core/Control", "sap/m/Text", "nmshd/app/core/controls/attributes/AttributeEditRenderer"],
    (Control, Text, AttributeEditRenderer) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.attributes.complex.StreetAddressEdit", {
            metadata: {
                aggregations: {
                    _recipient: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _street: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _houseNumber: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _zipCode: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _city: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _state: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _country: {
                        type: "nmshd.app.core.controls.attributes.AttributeEditRenderer",
                        multiple: false,
                        visibility: "hidden"
                    }
                },
                properties: {},
                publicMethods: [],
                events: {},
                defaultAggregation: "_control"
            },

            init(e) {
                this.setAggregation(
                    "_recipient",
                    new AttributeEditRenderer({}).addStyleClass("StreetAddressEditRecipient").bindElement("recipient")
                )
                this.setAggregation(
                    "_street",
                    new AttributeEditRenderer({}).addStyleClass("StreetAddressEditStreet").bindElement("street")
                )
                this.setAggregation(
                    "_houseNumber",
                    new AttributeEditRenderer({})
                        .addStyleClass("StreetAddressEditHouseNumber")
                        .bindElement("houseNumber")
                )
                this.setAggregation(
                    "_zipCode",
                    new AttributeEditRenderer({}).addStyleClass("StreetAddressEditZipCode").bindElement("zipCode")
                )
                this.setAggregation(
                    "_city",
                    new AttributeEditRenderer({}).addStyleClass("StreetAddressEditCity").bindElement("city")
                )
                this.setAggregation(
                    "_state",
                    new AttributeEditRenderer({}).addStyleClass("StreetAddressEditState").bindElement("state")
                )
                this.setAggregation(
                    "_country",
                    new AttributeEditRenderer({}).addStyleClass("StreetAddressEditCountry").bindElement("Country")
                )
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("StreetAddressEdit")
                oRM.writeClasses()
                oRM.write(">")
                let editControl = oControl.getAggregation("_recipient")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                editControl = oControl.getAggregation("_street")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                editControl = oControl.getAggregation("_houseNumber")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                editControl = oControl.getAggregation("_zipCode")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                editControl = oControl.getAggregation("_city")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                editControl = oControl.getAggregation("_state")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                editControl = oControl.getAggregation("_country")
                if (editControl) {
                    oRM.renderControl(editControl)
                }
                oRM.write("</div>")
            }
        })
    }
)
