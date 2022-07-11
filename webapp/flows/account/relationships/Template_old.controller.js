sap.ui.define(
    [
        "nmshd/app/core/App",
        "nmshd/app/flows/account/AccountController",
        "sap/ui/layout/form/FormElement",
        "sap/m/Text",
        "sap/m/Input",
        "sap/m/CheckBox",
        "sap/m/SegmentedButton",
        "sap/m/SegmentedButtonItem",
        "sap/ui/unified/FileUploader",
        "sap/m/Select",
        "sap/m/DatePicker",
        "sap/ui/layout/GridData",
        "sap/ui/core/Item",
        "nmshd/app/core/Formatter",
        "sap/ui/core/CustomData",
        "sap/m/Image",
        "sap/ui/layout/form/SimpleForm",
        "sap/m/Label",
        "sap/m/Link",
        "sap/m/VBox"
    ],
    (
        App,
        AccountController,
        FormElement,
        Text,
        Input,
        CheckBox,
        SegmentedButton,
        SegmentedButtonItem,
        FileUploader,
        Select,
        DatePicker,
        GridData,
        Item,
        Formatter,
        CustomData,
        Image,
        SimpleForm,
        Label,
        Link,
        VBox
    ) => {
        "use strict"
        return AccountController.extend("nmshd.app.flows.account.relationships.Template", {
            formatter: Formatter,
            routePattern: new RegExp("^account.template"),
            createViewModel() {
                return {
                    showCompany: false,
                    showIdentity: false,
                    showRequired: false,
                    showOptional: false,
                    showThirdParty: false,
                    showAgreements: false,
                    showAttributes: false,
                    showFiles: false,
                    showDataUse: false,
                    showAuthorizations: false,
                    showQuestions: false,
                    showPrivacy: false,
                    error: false,
                    submitEnabled: false,
                    requestRunning: false
                }
            },

            async onRouteMatched(oEvent) {
                this.clear()
                await this.super("onRouteMatched", oEvent, true)

                this.relationshipId = this.viewProp("/route/relationshipId")
                const relationship = await App.RelationshipTemplateUtil.getRelationshipTemplate(this.relationshipId)
                if (!relationship) {
                    return
                }
                const possibleJSONWrapper = relationship.getProperty("/content")
                if (possibleJSONWrapper && possibleJSONWrapper.value && possibleJSONWrapper.toJSON) {
                    relationship.setProperty("/content", possibleJSONWrapper.toJSON())
                }
                this.setModel(relationship)
                this.relationship = relationship

                const themeInfo = await App.themeInfoForTemplate(this.relationship.getProperty("/"))

                if (themeInfo) {
                    this.viewProp("/theme", themeInfo)
                    App.appController.viewProp("/theme", themeInfo)
                    App.appController.setTitle(this.resource("relationships.template.request"))
                }

                this.refresh()
            },

            onRouteExit(oEvent) {
                App.appController.viewProp("/theme", {
                    image: "",
                    fontColor: "#ffffff",
                    fontStyle: "light",
                    backgroundColor: "#29235c"
                })
                App.appController.setTitle("")
            },

            setMessage(message, type) {
                const strip = this.byId("message")
                if (!message) {
                    strip.setText("")
                    strip.setVisible(false)
                } else {
                    strip.setText(message)
                    strip.setVisible(true)
                    strip.setType(type)
                }
            },

            refresh() {
                this.template = null
                this.setMessage()
                this.viewProp("/showRequired", false)
                this.viewProp("/showOptional", false)
                this.viewProp("/showCreate", false)
                this.viewProp("/showThirdParty", false)
                this.viewProp("/showAgreements", false)
                this.viewProp("/showCompany", false)
                this.viewProp("/showIdentity", false)
                this.viewProp("/showAttributes", false)
                this.viewProp("/showFiles", false)
                this.viewProp("/showQuestions", false)
                this.viewProp("/showDataUse", false)
                this.viewProp("/showAuthorizations", false)
                this.viewProp("/showPrivacy", false)
                this.viewProp("/error", false)
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", false)

                this.prop("/info", { company: {} })

                if (this.relationship) {
                    //appLogger.trace("Data", this.relationship)
                    this.readProp(this.relationship.getData())
                    this.template = this.relationship.getData().template
                } else {
                    sap.ui
                        .getCore()
                        .getEventBus()
                        .publish("relationship", "error", {
                            message: this.resource("relationships.template.noDataAvailableError")
                        })
                    this.navBack("account.relationships")
                }
            },

            async readProp(input) {
                const template = input

                if (App.account().identity.address.toString() === template.createdBy) {
                    this.setMessage(this.resource("relationships.template.selfRelationshipError"), "Error")
                    this.viewProp("/error", true)
                    return
                }

                const relationshipModel = await App.RelationshipUtil.getRelationshipByAddress(template.createdBy)
                if (relationshipModel) {
                    const identity = relationshipModel.getData()

                    if (identity.relationship.status === "Active") {
                        try {
                            if (template.content && template.content.ifRelationshipExists) {
                                if (template.content.ifRelationshipExists.action === "message") {
                                    const content = template.content.ifRelationshipExists.content
                                    if (content) {
                                        await this.load(
                                            this.account().messages.sendMessage({
                                                recipients: [input.createdBy],
                                                content: content
                                            })
                                        )
                                    }
                                }
                            }
                            App.navTo("account.relationships", "account.relationship.home", {
                                accountId: this.accountId,
                                relationshipId: identity.relationship.id
                            })
                        } catch (e) {
                            this.setMessage(this.resource("relationships.template.unavailableError"), "Error")
                            this.viewProp("/error", true)
                        }
                        return
                    } else if (
                        identity.relationship.status === "Pending" &&
                        identity.relationship.direction === "Outgoing"
                    ) {
                        this.setMessage(
                            this.resource("relationships.template.openRequestError", [`${identity.name}`]),
                            "Error"
                        )
                        this.viewProp("/error", true)
                        return
                    } else if (
                        identity.relationship.status === "Pending" &&
                        identity.relationship.direction === "Incoming"
                    ) {
                        this.setMessage(
                            this.resource("relationships.template.openRequestErrorSpecificError", [`${identity.name}`]),
                            "Error"
                        )
                        this.viewProp("/error", true)
                        return
                    }
                }

                this.name = ""

                if (!template) {
                    this.setMessage(this.resource("relationships.template.noInformationAvailableError"), "Error")
                    return
                } else {
                    const attrResult = await runtime.currentSession.consumptionServices.attributes.getAttributesByNames(
                        {}
                    )
                    if (!attrResult || attrResult.isError || !attrResult.value) {
                        appLogger.error(attrResult.error)
                        return
                    }
                    let attr = attrResult.value

                    appLogger.trace("Attribute Map", attr)

                    if (!attr) {
                        attr = {}
                    }

                    if (template.content.attributes) {
                        for (let i = 0; i < template.content.attributes.length; i++) {
                            const attr = template.content.attributes[i]

                            if (attr.name === "Thing.name") {
                                this.name = attr.value
                            } else if (attr.name.startsWith("Address") || attr.name.startsWith("Corporation.address")) {
                                try {
                                    const parsed = JSON.parse(attr.value)
                                    attr.isAddress = true
                                    attr.address = parsed
                                    if (parsed.name) {
                                        attr.value =
                                            parsed.name +
                                            " (" +
                                            parsed.street +
                                            " " +
                                            parsed.houseNo +
                                            ", " +
                                            parsed.zipCode +
                                            " " +
                                            parsed.city +
                                            ", " +
                                            parsed.country +
                                            ")"
                                    } else {
                                        attr.value =
                                            parsed.street +
                                            " " +
                                            parsed.houseNo +
                                            ", " +
                                            parsed.zipCode +
                                            " " +
                                            parsed.city +
                                            ", " +
                                            parsed.country
                                    }
                                } catch (e) {}
                            }
                        }
                    }

                    let error = false
                    if (template.content.request) {
                        if (template.content.request.required && template.content.request.required.length > 0) {
                            this.viewProp("/showRequired", true)

                            for (let i = 0; i < template.content.request.required.length; i++) {
                                const prop = template.content.request.required[i]
                                let cattribute = attr[prop.attribute]
                                if (cattribute) {
                                    prop.attribute = prop.attribute
                                    prop.value = cattribute.content.value
                                    prop.set = true
                                    prop.state = true
                                } else {
                                    prop.attribute = prop.attribute
                                    prop.value = ""
                                    prop.set = false
                                    error = true
                                    prop.state = false
                                    const attrResult =
                                        await runtime.currentSession.consumptionServices.attributes.getAttributeByName({
                                            name: prop.attribute
                                        })
                                    if (!attrResult || attrResult.isError || !attrResult.value) {
                                    } else {
                                        cattribute = attrResult.value
                                        prop.attribute = prop.attribute
                                        prop.value = cattribute.content.value
                                        prop.set = true
                                        prop.state = true
                                        appLogger.trace("Attribute", prop.attribute, cattribute)
                                    }
                                }

                                if (
                                    (prop.value && prop.attribute.startsWith("Address")) ||
                                    prop.attribute.startsWith("Person.address")
                                ) {
                                    try {
                                        const parsed = JSON.parse(prop.value)
                                        prop.isAddress = true
                                        prop.address = parsed
                                        if (parsed.name) {
                                            prop.value =
                                                parsed.name +
                                                " (" +
                                                parsed.street +
                                                " " +
                                                parsed.houseNo +
                                                ", " +
                                                parsed.zipCode +
                                                " " +
                                                parsed.city +
                                                ", " +
                                                parsed.country +
                                                ")"
                                        } else {
                                            prop.value =
                                                parsed.street +
                                                " " +
                                                parsed.houseNo +
                                                ", " +
                                                parsed.zipCode +
                                                " " +
                                                parsed.city +
                                                ", " +
                                                parsed.country
                                        }
                                    } catch (e) {}
                                }
                                prop.newAttribute = prop.value ? false : true
                                if (!prop.value) {
                                    error = true
                                }
                            }
                            if (error) {
                                this.setMessage(this.resource("newRelationship.required.error"), "Error")
                                this.viewProp("/error", true)
                            }
                        }
                        if (template.content.request.optional && template.content.request.optional.length > 0) {
                            this.viewProp("/showOptional", true)
                            for (let i = 0; i < template.content.request.optional.length; i++) {
                                const prop = template.content.request.optional[i]
                                let cattribute = attr[prop.attribute]
                                if (cattribute) {
                                    prop.attribute = prop.attribute
                                    prop.value = cattribute.content.value
                                    prop.set = true
                                    prop.state = true
                                } else {
                                    prop.attribute = prop.attribute
                                    prop.value = ""
                                    prop.set = false
                                    error = true
                                    prop.state = false
                                    const attrResult =
                                        await runtime.currentSession.consumptionServices.attributes.getAttributeByName({
                                            name: prop.attribute
                                        })
                                    if (!attrResult || attrResult.isError || !attrResult.value) {
                                    } else {
                                        cattribute = attrResult.value
                                        prop.attribute = prop.attribute
                                        prop.value = cattribute.content.value
                                        prop.set = true
                                        prop.state = true
                                        appLogger.trace("Attribute", prop.attribute, cattribute)
                                    }
                                }

                                if (
                                    (prop.value && prop.attribute.startsWith("Address")) ||
                                    prop.attribute.startsWith("Person.address")
                                ) {
                                    try {
                                        const parsed = JSON.parse(prop.value)
                                        prop.isAddress = true
                                        prop.address = parsed
                                        if (parsed.name) {
                                            prop.value =
                                                parsed.name +
                                                " (" +
                                                parsed.street +
                                                " " +
                                                parsed.houseNo +
                                                ", " +
                                                parsed.zipCode +
                                                " " +
                                                parsed.city +
                                                ", " +
                                                parsed.country +
                                                ")"
                                        } else {
                                            prop.value =
                                                parsed.street +
                                                " " +
                                                parsed.houseNo +
                                                ", " +
                                                parsed.zipCode +
                                                " " +
                                                parsed.city +
                                                ", " +
                                                parsed.country
                                        }
                                    } catch (e) {}
                                }
                                prop.newAttribute = prop.value ? false : true
                            }
                        }
                        if (template.content.request.create && template.content.request.create.length > 0) {
                            this.viewProp("/showCreate", true)
                            for (let i = 0; i < template.content.request.create.length; i++) {
                                const prop = template.content.request.create[i]

                                if (
                                    (prop.value && prop.attribute.startsWith("Address")) ||
                                    prop.attribute.startsWith("Person.address")
                                ) {
                                    try {
                                        const parsed = JSON.parse(prop.value)
                                        prop.isAddress = true
                                        prop.address = parsed
                                        if (parsed.name) {
                                            prop.value =
                                                parsed.name +
                                                " (" +
                                                parsed.street +
                                                " " +
                                                parsed.houseNo +
                                                ", " +
                                                parsed.zipCode +
                                                " " +
                                                parsed.city +
                                                ", " +
                                                parsed.country +
                                                ")"
                                        } else {
                                            prop.value =
                                                parsed.street +
                                                " " +
                                                parsed.houseNo +
                                                ", " +
                                                parsed.zipCode +
                                                " " +
                                                parsed.city +
                                                ", " +
                                                parsed.country
                                        }
                                    } catch (e) {}
                                }

                                prop.attribute = prop.attribute
                                prop.value = prop.value
                                prop.set = true
                                prop.state = true
                            }
                        }
                        if (
                            template.content.request.authorizations &&
                            template.content.request.authorizations.length > 0
                        ) {
                            this.viewProp("/showAuthorizations", true)
                            for (let i = 0; i < template.content.request.authorizations.length; i++) {
                                const prop = template.content.request.authorizations[i]
                                if (prop.required) {
                                    prop.set = false
                                }
                                prop.state = true
                            }
                        }
                        if (template.content.request.thirdParties && template.content.request.thirdParties.length > 0) {
                            this.viewProp("/showThirdParty", true)
                        }
                        if (template.content.request.eula || template.content.request.privacy) {
                            this.viewProp("/showAgreements", true)
                        }
                        if (template.content.request.files && template.content.request.files.length > 0) {
                            this.viewProp("/showFiles", true)
                        }
                        if (template.content.request.questions && template.content.request.questions.length > 0) {
                            this.viewProp("/showQuestions", true)
                        }

                        if (template.content.request.dataUse && template.content.request.dataUse.length > 0) {
                            this.viewProp("/showDataUse", true)
                        }
                    }

                    if (template.content.identity) {
                        this.viewProp("/showIdentity", true)
                    } else {
                        this.viewProp("/showCompany", true)
                    }

                    if (template.content.attributes) {
                        this.viewProp("/showAttributes", true)
                    }
                    if (template.content.privacy) {
                        if (template.content.privacy.link) {
                            template.content.privacy.uri = template.content.privacy.link
                        }
                        if (template.content.privacy.uri) {
                            if (!template.content.privacy.label) {
                                template.content.privacy.label = template.content.privacy.uri
                            }
                        }
                        if (!template.content.privacy.length) {
                            template.content.privacy = [template.content.privacy]
                        }

                        this.viewProp("/showPrivacy", true)
                    } else {
                        template.content.privacy = []
                        this.viewProp("/showPrivacy", false)
                    }
                    this.prop("/template", template.content)
                    this.prop("/relationship", input)
                    this.prop("/name", this.name)
                }
                this._updateStatus()
            },

            receivedAttributesFactory(sId, oContext) {
                const attribute = oContext.getObject()
                switch (attribute.name) {
                    default:
                        return new FormElement({
                            label: Formatter.attributeName(oContext.getObject().name),
                            fields: [
                                new Text({
                                    text: "{value}"
                                })
                            ]
                        })
                    case "Thing.image":
                        return new FormElement({
                            label: Formatter.attributeName(oContext.getObject().name),
                            fields: [
                                new Image({
                                    src: "{value}"
                                })
                            ]
                        })
                }
            },

            requiredAttributesFactory(sId, oContext) {
                const oRequiredAttribute = oContext.getObject()
                const oFormElement = new FormElement({
                    label: Formatter.attributeName(oRequiredAttribute.attribute)
                })
                // when value is filled, just display it. If not, determine the correct edit control
                if (oRequiredAttribute.value) {
                    if (oRequiredAttribute.attribute && oRequiredAttribute.attribute.indexOf("Address") > -1) {
                        const form = new SimpleForm({
                            content: [
                                new Label({ text: this.resource("relationships.template.form.street") }),
                                new Input({ id: "street", value: "{address/street}", editable: false }),
                                new Label({ text: this.resource("relationships.template.form.houseNumber") }),
                                new Input({ id: "houseNo", value: "{address/houseNo}", editable: false }),
                                new Label({ text: this.resource("relationships.template.form.zipCode") }),
                                new Input({ id: "zipCode", value: "{address/zipCode}", editable: false }),
                                new Label({ text: this.resource("relationships.template.form.city") }),
                                new Input({ id: "city", value: "{address/city}", editable: false }),
                                new Label({ text: this.resource("relationships.template.form.country") }),
                                new Input({ id: "country", value: "{address/country}", editable: false })
                            ],
                            editable: true
                        })

                        oFormElement.addField(form)
                    } else {
                        oFormElement.addField(
                            new Text({
                                text:
                                    oRequiredAttribute.attribute === "Person.gender"
                                        ? this.resource(`gender.${oRequiredAttribute.value}`)
                                        : "{value}"
                            })
                        )
                    }
                } else {
                    oFormElement.addField(this._receiveEditControl(oRequiredAttribute))
                }
                return oFormElement
            },

            optionalAttributesFactory(sId, oContext) {
                const oOptionalAttribute = oContext.getObject()
                const oFormElement = new FormElement({
                    label: Formatter.attributeName(oOptionalAttribute.attribute),
                    customData: new CustomData({
                        key: "attribute",
                        value: "{attribute}"
                    })
                })
                if (!oOptionalAttribute.value) {
                    oFormElement.addField(
                        new CheckBox({
                            wrapping: true,
                            selected: "{state}",
                            layoutData: [
                                new GridData({
                                    span: "XL1 L1 M1 S2"
                                })
                            ]
                        })
                    )
                    oFormElement.addField(
                        this._receiveEditControl(oOptionalAttribute).setLayoutData(
                            new GridData({
                                span: "S10"
                            })
                        )
                    )
                } else {
                    oFormElement.addField(
                        new CheckBox({
                            text: "{value}",
                            enabled: "{set}",
                            wrapping: true,
                            selected: "{state}"
                        })
                    )
                }
                return oFormElement
            },

            filesAttributesFactory(sId, oContext) {
                return new FormElement({
                    label: "{label}",
                    fields: [
                        new FileUploader({
                            tooltip: "{help}"
                        })
                    ]
                })
            },

            questionsAttributesFactory(sId, oContext) {
                const item = oContext.getObject()
                const oFormElement = new FormElement({
                    label: "{label}"
                })
                if (item.type === "invisible") {
                    oFormElement.setVisible(false)
                }
                oFormElement.addField(this._getQuestionsControl(oContext.getObject()))
                return oFormElement
            },

            createAttributesFactory(sId, oContext) {
                return new FormElement({
                    label: Formatter.attributeName(oContext.getObject().attribute),
                    fields: [
                        new CheckBox({
                            text: "{= ${value} ? ${value} : ${t>attribute.noData}}",
                            enabled: "{set}",
                            wrapping: true,
                            selected: "{state}"
                        })
                    ]
                })
            },

            thirdPartiesAttributesFactory(sId, oContext) {
                return new FormElement({
                    label: "{name}",
                    fields: [
                        new Text({
                            text: "{reason}"
                        })
                    ]
                })
            },

            dataUseAttributesFactory(sId, oContext) {
                return new FormElement({
                    label: "{title}",
                    fields: [
                        new Text({
                            text: "{duration}"
                        })
                    ]
                })
            },

            authorizationAttributesFactory(sId, oContext) {
                return new FormElement({
                    label: "",
                    customData: new CustomData({
                        key: "key",
                        value: "{key}"
                    }),
                    fields: [
                        new CheckBox({
                            text: "{title}",
                            selected: "{state}",
                            enabled: "{set}",
                            select: this._updateStatus.bind(this),
                            wrapping: true
                        })
                    ]
                })
            },

            privacyFactory(sId, oContext) {
                let privacy = oContext.getObject()
                if (!privacy) return

                if (typeof privacy.length !== "undefined") {
                    privacy = privacy[0]
                }
                if (!privacy) return

                let renderCheckbox = true
                if (privacy && privacy.activeConsent === false) {
                    renderCheckbox = false
                }

                let control

                if (renderCheckbox) {
                    control = new CheckBox({
                        text: "{text}",
                        selected: "{default}",
                        wrapping: true,
                        select: this._updateStatus.bind(this)
                    })
                    this.privacyCheckbox = control
                } else {
                    control = new Text({
                        text: "{text}",
                        wrapping: true
                    })
                }

                let link, box
                if (privacy.uri) {
                    link = new Link({
                        href: "{uri}",
                        text: "{label}",
                        target: "_blank",
                        wrapping: true
                    })
                    box = new VBox({
                        items: [control, link]
                    })
                } else {
                    box = control
                }

                return new FormElement({
                    label: "",
                    fields: [box]
                })
            },

            _receiveEditControl(oAttribute, bOptional) {
                switch (oAttribute.attribute) {
                    case "Person.gender":
                        return new SegmentedButton({
                            selectedKey: "{value}",
                            items: [
                                new SegmentedButtonItem({
                                    text: "{t>gender.d}",
                                    key: "d"
                                }),
                                new SegmentedButtonItem({
                                    text: "{t>gender.m}",
                                    key: "m"
                                }),
                                new SegmentedButtonItem({
                                    text: "{t>gender.f}",
                                    key: "w"
                                })
                            ],
                            selectionChange: this._updateStatus.bind(this)
                        })
                    case "Person.birthDate":
                        return new DatePicker({
                            placeholder: Formatter.attributeName(oAttribute.attribute),
                            value: "{value}",
                            change: this._updateStatus.bind(this)
                        })
                    case "Address":
                        // ToDo: Wait for Content Library
                        oAttribute.address = {}
                        return new SimpleForm({
                            content: [
                                new Label({ text: this.resource("relationships.template.address.street") }),
                                new Input({
                                    id: "street",
                                    value: "{address/street}",
                                    liveChange: this._updateStatus.bind(this),
                                    submit: this._updateStatus.bind(this)
                                }),
                                new Label({ text: this.resource("relationships.template.address.houseNumber") }),
                                new Input({
                                    id: "houseNo",
                                    value: "{address/houseNo}",
                                    liveChange: this._updateStatus.bind(this),
                                    submit: this._updateStatus.bind(this)
                                }),
                                new Label({ text: this.resource("relationships.template.address.zipCode") }),
                                new Input({
                                    id: "zipCode",
                                    value: "{address/zipCode}",
                                    liveChange: this._updateStatus.bind(this),
                                    submit: this._updateStatus.bind(this)
                                }),
                                new Label({ text: this.resource("relationships.template.address.city") }),
                                new Input({
                                    id: "city",
                                    value: "{address/city}",
                                    liveChange: this._updateStatus.bind(this),
                                    submit: this._updateStatus.bind(this)
                                }),
                                new Label({ text: this.resource("relationships.template.address.country") }),
                                new Input({
                                    id: "country",
                                    value: "{address/country}",
                                    liveChange: this._updateStatus.bind(this),
                                    submit: this._updateStatus.bind(this)
                                })
                            ],
                            editable: true
                        })
                    default:
                        return new Input({
                            value: "{value}",
                            placeholder: Formatter.attributeName(oAttribute.attribute),
                            editable: true,
                            liveChange: this._updateStatus.bind(this),
                            submit: this._updateStatus.bind(this)
                        })
                }
            },

            _updateStatus(oEvent) {
                let error
                if (oEvent) {
                    const object = oEvent.getSource().getBindingContext().getObject()
                    if (oEvent.getId() === "liveChange") {
                        object.value = oEvent.getParameter("newValue")
                    }
                }
                error = this.checkMissingAttributes(oEvent)

                const privacy = this.prop("/privacy")
                if (privacy && privacy.length > 0 && privacy[0].required === true && privacy[0].activeConsent) {
                    const checkbox = this.privacyCheckbox
                    if (checkbox) {
                        if (checkbox.getSelected() !== true) {
                            error = this.resource("relationships.template.privacy")
                        }
                    } else {
                        error = this.resource("relationships.template.privacy")
                    }
                }

                if (error) {
                    this.setMessage(error)
                    this.viewProp("/error", true)
                    this.viewProp("/submitEnabled", false)
                } else {
                    this.setMessage()
                    this.viewProp("/error", false)
                    if (!this.viewProp("/requestRunning")) {
                        this.viewProp("/submitEnabled", true)
                    }
                }
            },

            _getQuestionsControl(oQuestion) {
                switch (oQuestion.type) {
                    case "dropdown":
                        return new Select({
                            selectedKey: "{selectedKey}",
                            items: {
                                path: "values",
                                template: new Item({
                                    key: "{key}",
                                    text: "{label}"
                                })
                            }
                        })
                    case "date":
                        return new DatePicker({
                            value: "{value}"
                        })
                    default:
                        return new Input({
                            value: "{value}",
                            editable: "{= !${readonly}}"
                        })
                }
            },

            clear() {
                this.super("clear")
            },

            checkMissingAttributes(oEvent) {
                const oModel = this.getModel()
                const oAttributeRequest = oModel.getProperty("/template/request")
                let error
                if (oAttributeRequest && oAttributeRequest.required) {
                    for (const oAttribute of oAttributeRequest.required) {
                        if (oAttribute.address) {
                            const addressObj = JSON.stringify(oAttribute.address)
                            oAttribute.value = addressObj
                            if (
                                !oAttribute.address.street ||
                                !oAttribute.address.houseNo ||
                                !oAttribute.address.zipCode ||
                                !oAttribute.address.city
                            ) {
                                error = this.resource("relationships.template.missingAttributeError1", [
                                    `${this.resource("attribute." + oAttribute.attribute)}`
                                ])
                                return error
                            }
                        } else {
                            if (oAttribute.attribute === "Person.gender") {
                                return
                            }
                            if (!oAttribute.value) {
                                error = this.resource("relationships.template.missingAttributeError2", [
                                    `${this.resource("attribute." + oAttribute.attribute)}`
                                ])
                                return error
                            }
                        }
                    }
                }
                return error
            },

            async _addMissingAttributes() {
                const oModel = this.getModel()
                const oAttributeRequest = oModel.getProperty("/template/request")

                if (oAttributeRequest && oAttributeRequest.required) {
                    for (const oAttribute of oAttributeRequest.required) {
                        if (oAttribute.newAttribute) {
                            if (!oAttribute.value) {
                                //Set defaults
                                if (oAttribute.attribute === "Person.gender") {
                                    oAttribute.value = "d"
                                    await this._addAttribute(oAttribute)
                                }
                            } else {
                                if (oAttribute.address) {
                                    const addressObj = JSON.stringify(oAttribute.address)
                                    oAttribute.value = addressObj
                                }
                                await this._addAttribute(oAttribute)
                            }
                        }
                    }
                }
                if (oAttributeRequest && oAttributeRequest.optional) {
                    for (const oAttribute of oAttributeRequest.optional) {
                        // only add the optional attributes if the checkbox was selected
                        if (oAttribute.newAttribute && oAttribute.state) {
                            if (!oAttribute.value) {
                                //Set defaults
                                if (oAttribute.attribute === "Person.gender") {
                                    oAttribute.value = "d"
                                    await this._addAttribute(oAttribute)
                                }
                            } else {
                                await this._addAttribute(oAttribute)
                            }
                        }
                    }
                }
            },

            async _addAttribute(oAttribute) {
                try {
                    let attribute
                    if (oAttribute.isAddress) {
                        attribute = NMSHDContent.Attribute.from({
                            name: oAttribute.attribute,
                            value: JSON.stringify(oAttribute.address)
                        })
                    } else {
                        attribute = NMSHDContent.Attribute.from({
                            name: oAttribute.attribute,
                            value: oAttribute.value
                        })
                    }
                    await runtime.currentSession.consumptionServices.attributes.succeedAttribute({
                        attribute: attribute
                    })
                } catch (oError) {
                    appLogger.error(oError)
                    this.navBack("account.relationships")
                    // we want to display the newRelationship error in the relationship view because the
                    // message toast would immediately disappear due to the navigation
                    sap.ui.getCore().getEventBus().publish("relationship", "error", oError)
                }
            },

            async onNewLink() {
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", true)
                await runtime.currentSession.transportServices.account.disableAutoSync()
                try {
                    const isIdentity = this.viewProp("/showIdentity")
                    await this._addMissingAttributes()
                    const that = this
                    const data = this.prop("/template")

                    const sharedProps = {}
                    const aOptionalFormElements = this.byId("optionalForm").getFormContainers()[0].getFormElements()
                    for (const oOptionalFormElement of aOptionalFormElements) {
                        if (oOptionalFormElement.getFields()[0].getSelected()) {
                            sharedProps[oOptionalFormElement.data("attribute")] = true
                        }
                    }

                    const sharedAuthorizations = {}
                    const aAuthorizationFormElements = this.byId("authorizationForm")
                        .getFormContainers()[0]
                        .getFormElements()
                    for (const oAuthorizationFormElement of aAuthorizationFormElements) {
                        if (oAuthorizationFormElement.getFields()[0].getSelected()) {
                            sharedAuthorizations[oAuthorizationFormElement.data("key")] = true
                        }
                    }

                    const shareData = { attributes: {} }
                    let attr = {}
                    const attrResult = await runtime.currentSession.consumptionServices.attributes.getAttributesByNames(
                        {}
                    )
                    if (!attrResult || attrResult.isError || !attrResult.value) {
                        appLogger.error(attrResult.error)
                        return
                    } else {
                        attr = attrResult.value
                    }

                    if (data.request && data.request.required && data.request.required.length > 0) {
                        for (let i = 0; i < data.request.required.length; i++) {
                            const prop = data.request.required[i]
                            const cattribute = attr[prop.attribute]
                            let name, value, signature
                            if (cattribute) {
                                const attribute = cattribute.content
                                name = prop.attribute
                                value = attribute.value
                                signature = attribute.signature
                                const o = {
                                    name: name,
                                    value: value
                                }
                                if (signature) {
                                    o.signature = signature
                                }
                                shareData.attributes[name] = o
                            } else {
                                const attrResult =
                                    await runtime.currentSession.consumptionServices.attributes.getAttributeByName({
                                        name: prop.attribute
                                    })
                                if (!attrResult || attrResult.isError || !attrResult.value) {
                                    appLogger.error(attrResult.error)
                                } else {
                                    const attribute = attrResult.value.content
                                    name = prop.attribute
                                    value = attribute.value
                                    const o = {
                                        name: name,
                                        value: value
                                    }
                                    shareData.attributes[name] = o
                                    appLogger.trace("Attribute", prop.attribute, cattribute)
                                }
                            }
                        }
                    }

                    if (data.request && data.request.optional && data.request.optional.length > 0) {
                        for (let i = 0; i < data.request.optional.length; i++) {
                            const prop = data.request.optional[i].attribute
                            shareData[prop] = false

                            if (sharedProps[prop]) {
                                if (attr[prop]) {
                                    const attribute = attr[prop].content
                                    const o = {
                                        name: prop,
                                        value: attribute.value
                                    }
                                    if (attribute.signature) {
                                        o.signature = attribute.signature
                                    }
                                    shareData.attributes[prop] = o
                                }
                            }
                        }
                    }

                    if (data.request && data.request.create && data.request.create.length > 0) {
                        for (let i = 0; i < data.request.create.length; i++) {
                            const prop = data.request.create[i]
                            if (prop.state) {
                                await this._addAttribute(prop)
                                const o = {
                                    name: prop.attribute,
                                    value: prop.value
                                }
                                if (prop.signature) {
                                    o.signature = prop.signature
                                }
                                shareData.attributes[prop.attribute] = o
                            }
                        }
                    }

                    if (data.metadata) {
                        shareData["metadata"] = data.metadata
                    }
                    if (data.privacy && data.privacy[0] && data.privacy[0].required) {
                        shareData["privacy"] = data.privacy[0].text
                    }

                    if (data.request && data.request.questions) {
                        shareData["answers"] = this._getAnswers(data)
                    }
                    if (data.session) {
                        shareData["session"] = data.session
                    }
                    if (sharedAuthorizations) {
                        shareData["authorizations"] = sharedAuthorizations
                    }

                    // TODO: Remove this once it is clear, how to get the template's identity from the connector
                    shareData["identity"] = App.account(this.accountId).identity.identity.toJSON()

                    const relationshipResult =
                        await runtime.currentSession.appServices.relationships.createRelationship({
                            templateId: this.relationship.getProperty("/id"),
                            content: shareData
                        })
                    if (relationshipResult.isError) {
                        App.error(relationshipResult.error)
                        this.viewProp("/requestRunning", false)
                        return
                    }
                    App.navTo("account.home", "account.relationships", {
                        accountId: this.accountId
                    })
                    this.viewProp("/requestRunning", false)
                } catch (e) {
                    App.error(e)
                } finally {
                    this.viewProp("/requestRunning", false)
                    runtime.currentSession.transportServices.account.enableAutoSync()
                }
            },

            _getAnswers(data) {
                let oAnswer = {}
                if (!data.request) {
                    return
                }
                for (const oQuestion of data.request.questions) {
                    oAnswer[oQuestion.key] = oQuestion.selectedKey ? oQuestion.selectedKey : oQuestion.value
                }
                return oAnswer
            },

            onNavButtonPress() {
                this.navBack()
            },

            onAbort() {
                this.navBack()
            }
        })
    }
)
