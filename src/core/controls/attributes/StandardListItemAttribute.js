sap.ui.define(
    [
        "sap/m/StandardListItem",
        "sap/m/Label",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "sap/m/Button",
        "nmshd/app/core/Formatter",
        "nmshd/app/core/controls/attributes/StandardListItemAttributeRenderer"
    ],
    (StandardListItem, Label, ValueRenderer, Button, Formatter, StandardListItemAttributeRenderer) => {
        "use strict"

        return StandardListItem.extend("nmshd.app.core.controls.attributes.StandardListItemAttribute", {
            metadata: {
                aggregations: {
                    _label: { multiple: false, visibility: "hidden" },
                    _value: { multiple: false, visibility: "hidden" },
                    _button: { multiple: false, visibility: "hidden" }
                },
                properties: {
                    showLabel: { type: "boolean", defaultValue: true }
                },
                publicMethods: [],
                events: {
                    infoPressed: {}
                },
                defaultAggregation: "_value",
                renderer: StandardListItemAttributeRenderer
            },

            init(e) {
                this.setAggregation(
                    "_label",
                    new Label({
                        text: { path: "name", formatter: Formatter.toTranslated },
                        visible: this.getShowLabel()
                    })
                )
                this.setAggregation(
                    "_value",
                    new ValueRenderer({
                        editable: false
                    })
                )
                this.setAggregation(
                    "_button",
                    new Button({
                        icon: "sap-icon://hint",
                        type: "Transparent",
                        visible: "{= !!${id}}",
                        press: () => {
                            const object = this.getBindingContext().getObject()
                            this.fireInfoPressed({
                                attributeId: object.id
                            })
                        }
                    })
                )
            }
        })
    }
)
