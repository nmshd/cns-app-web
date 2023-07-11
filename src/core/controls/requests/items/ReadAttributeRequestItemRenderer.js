sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Text",
        "sap/m/Label",
        "sap/m/Button",
        "sap/m/Select",
        "sap/ui/core/Fragment",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "nmshd/app/core/Formatter"
    ],
    (Control, Text, Label, Button, Select, Fragment, ValueRenderer, Formatter) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.requests.items.ReadAttributeRequestItemRenderer", {
            metadata: {
                aggregations: {
                    _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                    _editControl: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
                    _text: { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" },
                    _button: { type: "sap.m.Button", multiple: false, visibility: "hidden" }
                },
                properties: {
                    requestItem: { type: "object", defaultValue: {} }
                },
                publicMethods: [],
                events: {
                    change: { allowPreventDefault: true },
                    infoPressed: {}
                },
                defaultAggregation: "_control"
            },

            init(e) {
                const that = this

                // default path for
                this.selectedAttributePath = "results/0"
                this.setAggregation(
                    "_label",
                    new Label({ text: { path: "name", formatter: Formatter.toTranslated, enabled: "{isDecidable}" } })
                        .addStyleClass("readAttributeRequestItemRendererLabel")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_button",
                    new Button({
                        icon: "sap-icon://edit",
                        visible: "{= ${results}.length > 0 && ${item>/isDecidable}}",
                        enabled: "{item>/isDecidable}",
                        type: "Transparent",
                        press: that.onChangeSelection.bind(this)
                    })
                        .addStyleClass("readAttributeRequestItemRendererChangeButton")
                        .bindElement("query")
                )

                this.setAggregation(
                    "_editControl",
                    new ValueRenderer({
                        visible: "{= (${results} === undefined || ${results}.length === 0) && ${item>/isDecidable}}",
                        editable: "{item>/isDecidable}"
                    })
                        .attachChange((oEvent) => that.fireChange(oEvent))
                        .addStyleClass("readAttributeRequestItemRendererEditControl")
                        .bindElement("query")
                )
                this.setAggregation(
                    "_text",
                    new ValueRenderer({
                        visible: "{= ${results}.length > 0}"
                    })
                        .addStyleClass("readAttributeRequestItemRendererFoundAttribute")
                        .bindElement("query")
                )
            },

            async onChangeSelection(oEvent) {
                const oButton = oEvent.getSource()
                if (Fragment.byId("showAvailableAttributesFragment", "availableAttributesList")) {
                    // we assign the already created fragment to every request item renderer
                    this._availableAttributesFragment = Fragment.byId(
                        "showAvailableAttributesFragment",
                        "availableAttributesList"
                    ).getParent()
                } else if (!this._availableAttributesFragment) {
                    this._availableAttributesFragment = await Fragment.load({
                        id: "showAvailableAttributesFragment",
                        name: "nmshd.app.core.fragments.ShowAvailableAttributes",
                        controller: this
                    })
                    this._availableAttributesFragment.setModel(oButton.getModel())
                    this._availableAttributesFragment.setModel(oButton.getModel("t"), "t")
                }
                this._availableAttributesFragment.setBindingContext(oButton.getBindingContext())
                this._availableAttributesFragment.setTitle(
                    oButton
                        .getModel("t")
                        .getResourceBundle()
                        .getText("attributes.availableAttributesList.title", [
                            Formatter.toTranslated(oButton.getBindingContext().getObject("name"))
                        ])
                )
                //TODO: we need to somehow receive the displayed text. As it is not bound via any context but simply via the concrete value we have to find it via the aggregations
                const selectedAttributeValue = oButton
                    .getParent()
                    .getAggregation("_text")
                    .getAggregation("_control")
                    .getProperty("text")
                const oList = Fragment.byId("showAvailableAttributesFragment", "availableAttributesList")
                const selectedListItem = oList
                    .getItems()
                    .find(
                        (listItem) => listItem.getBindingContext().getObject("value/value") === selectedAttributeValue
                    )

                oList.setSelectedItem(selectedListItem)
                this._availableAttributesFragment.open()
            },

            onCloseShowAvailableAttributesFragment() {
                this._availableAttributesFragment.close()
            },

            onAvailableAttributeChange(oEvent) {
                const oSelectedContext = Fragment.byId("showAvailableAttributesFragment", "availableAttributesList")
                    .getSelectedItem()
                    .getBindingContext()
                this.selectedAttributePath = oSelectedContext.getPath()

                //TODO:  manually update the value => dirty!
                this.getAggregation("_text")
                    .getAggregation("_control")
                    .setText(oSelectedContext.getObject("value/value"))
                this.getAggregation("_text").setAttributePath(this.selectedAttributePath)
                this.onCloseShowAvailableAttributesFragment()
            },

            getSelectedAttribute() {
                const textControl = this.getAggregation("_text")
                if (!textControl) return undefined
                if (!textControl.getVisible()) return undefined
                return textControl.getBindingContext().getObject(this.selectedAttributePath)
            },

            getEditedValue() {
                const editControl = this.getAggregation("_editControl")
                if (!editControl) return undefined
                if (!editControl.getVisible()) return undefined
                const editedValue = editControl.getEditedValue()
                if (!editedValue) return undefined
                return this.createAttributeWithValue(editedValue)
            },

            createAttributeWithValue(value) {
                const item = this.getBindingContext().getObject()
                let owner = runtime.currentAccount.address
                const query = item.query

                if (query.type === "ProcessedThirdPartyRelationshipAttributeQueryDVO") {
                    console.warn("A ThirdPartyRelationshipAttribute was requested but is not available.")
                    return undefined
                }
                if (query.type === "ProcessedRelationshipAttributeQueryDVO") {
                    let confidentiality = query.attributeCreationHints.confidentiality
                    if (!confidentiality) {
                        console.warn(
                            "The confidentiality of the requested RelationshipAttribute was not set. Defaulting to private."
                        )
                        confidentiality = "private"
                    }

                    const attribute = {
                        "@type": "RelationshipAttribute",
                        value: {
                            "@type": query.valueType,
                            value: value,
                            title: query.name
                        },
                        key: query.key,
                        owner,
                        confidentiality,
                        isTechnical: !!query.attributeCreationHints.isTechnical
                    }
                    return attribute
                }

                let attributeValue = {
                    "@type": query.valueType,
                    value: value
                }
                if (query.renderHints.technicalType === "Object") {
                    attributeValue = {
                        "@type": query.valueType,
                        ...value
                    }
                }
                const attribute = {
                    "@type": "IdentityAttribute",
                    value: attributeValue,
                    owner: runtime.currentAccount.address
                }
                return attribute
            },

            getContext() {
                const context = {}
                const editedValue = this.getEditedValue()
                if (editedValue) context.editedValue
                const selectedAttribute = this.getSelectedAttribute()
                if (selectedAttribute) context.selectedAttribute
                return context
            },

            getResponseParams() {
                const responseParams = {}
                const editedValue = this.getEditedValue()
                if (editedValue) {
                    responseParams.newAttribute = editedValue
                    return responseParams
                }

                const selectedAttribute = this.getSelectedAttribute()
                if (selectedAttribute) {
                    responseParams.existingAttributeId = selectedAttribute.id
                    return responseParams
                }

                return undefined
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("readAttributeRequestItemRenderer")
                oRM.writeClasses()
                oRM.write(">")

                oRM.write("<div>")
                const labelControl = oControl.getAggregation("_label")
                if (labelControl) {
                    oRM.renderControl(labelControl)
                }
                const foundAttribute = oControl.getAggregation("_text")
                if (foundAttribute) {
                    oRM.write("<div>")
                    oRM.renderControl(foundAttribute)
                    oRM.write("</div>")
                }

                const editControl = oControl.getAggregation("_editControl")
                if (editControl) {
                    oRM.renderControl(editControl)
                }

                oRM.write("</div>")
                const buttonControl = oControl.getAggregation("_button")
                if (buttonControl) {
                    oRM.renderControl(buttonControl)
                }
                oRM.write("</div>")
            }
        })
    }
)
