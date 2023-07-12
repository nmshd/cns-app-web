sap.ui.define(
    [
        "sap/ui/core/Control",
        "sap/m/Label",
        "sap/m/Button",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment",
        "nmshd/app/core/controls/attributes/ValueRenderer",
        "nmshd/app/core/Formatter"
    ],
    (Control, Label, Button, MessageToast, Fragment, ValueRenderer, Formatter) => {
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
            /**
             * Opens a Dialog with the all the available attributes for this renderer
             * and the option to add a new attribute if none of the existing attributes matches.
             */
            async onChangeSelection() {
                await this._openAvailableAttributeFragment()
                await this._setSelectedListItem()
            },

            /**
             * Closes the Dialog with all the available attributes for this renderer.
             */
            onCloseShowAvailableAttributesFragment() {
                this._availableAttributesFragment.close()
            },

            // TODO: DEV-4490
            async onAddNewAttribute() {
                new MessageToast.show("Not implemented!")
            },

            /**
             * Receives the selected item and binds it to valueRenderer. It updates the attributePath
             * for the RequestItemRenderer to ensure the correct attribute will be sent in the response.
             * Fires a change event so that the RequestItemRenderer selects it's checkbox.
             */
            onAvailableAttributeChange() {
                const selectedContext = Fragment.byId("showAvailableAttributesFragment", "availableAttributesList")
                    .getSelectedItem()
                    .getBindingContext()
                this.selectedAttributePath = selectedContext.getPath().replace(/^(.*?)query\//, "")

                this.getAggregation("_text")
                    .getAggregation("_control")
                    .bindText(`${this.selectedAttributePath}/value/value`)
                this.getAggregation("_text").setAttributePath(this.selectedAttributePath)
                this.fireChange({ isChecked: true })
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

            // *****************************
            // ***** private functions *****
            // *****************************

            /**
             * loads and opens the dialog to show all available attributes for a specific RequestItemRenderer once.
             * This dialog will be used across all different renderers. The dialog can not be bound to a View so the
             * required models have to be assigned manually
             *
             * @private
             */
            async _openAvailableAttributeFragment() {
                const model = this.getModel()
                const translationModel = this.getModel("t")
                const bindingContext = this.getBindingContext()
                const availableAttributesList = Fragment.byId(
                    "showAvailableAttributesFragment",
                    "availableAttributesList"
                )
                // if the list of the fragment was found we don't have to load the fragment again
                if (availableAttributesList) {
                    // we assign the already created fragment to every RequestItemRenderer
                    this._availableAttributesFragment = availableAttributesList.getParent()
                } else if (!this._availableAttributesFragment) {
                    this._availableAttributesFragment = await Fragment.load({
                        id: "showAvailableAttributesFragment",
                        name: "nmshd.app.core.fragments.ShowAvailableAttributes",
                        controller: this
                    })
                    // assign the required models manually
                    this._availableAttributesFragment.setModel(model)
                    this._availableAttributesFragment.setModel(translationModel, "t")
                }
                this._availableAttributesFragment.setBindingContext(bindingContext)
                this._availableAttributesFragment.setTitle(
                    translationModel
                        .getResourceBundle()
                        .getText("attributes.availableAttributesList.title", [
                            Formatter.toTranslated(bindingContext.getObject("query/name"))
                        ])
                )

                this._availableAttributesFragment.open()
            },
            /**
             * Received the correct context from the child aggregation (ValueRenderer) and use it
             * as the selected item in the list of all available attributes
             *
             * @private
             */
            _setSelectedListItem() {
                // receive the whole path to the bound value
                const valueRenderer = this.getAggregation("_text").getAggregation("_control")
                const resolvedPath = valueRenderer.getBinding("text").getResolvedPath()
                const selectedAttributeValue = this.getModel().getObject(resolvedPath)
                const list = Fragment.byId("showAvailableAttributesFragment", "availableAttributesList")
                const selectedListItem = list
                    .getItems()
                    .find(
                        (listItem) => listItem.getBindingContext().getObject("value/value") === selectedAttributeValue
                    )

                list.setSelectedItem(selectedListItem)
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
