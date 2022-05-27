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
        "sap/m/VBox",
        "sap/ui/model/json/JSONModel",
        "nmshd/app/core/controls/requests/RequestItemGroupRenderer",
        "nmshd/app/core/controls/requests/RequestItemRenderer"
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
        VBox,
        JSONModel,
        RequestItemGroupRenderer,
        RequestItemRenderer
    ) => {
        "use strict"

        const models = [
            {
                "@type": "TemplateContent",
                request: {
                    "@type": "Request",
                    type: "RequestDVO",
                    id: "REQ0815",
                    expiresAt: "",
                    items: [
                        {
                            "@type": "RequestItemGroup",
                            type: "RequestItemGroupDVO",
                            title: "Contact Data Required Item Group Title",
                            description: "This is a required Group",
                            mustBeAccepted: true,
                            items: [
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    type: "ReadAttributeRequestItemDVO",
                                    title: "Contact Data Required Item Title",
                                    description: "This is a required Item",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "GivenName",

                                        type: "AttributeQueryDVO",
                                        name: "Vorname",
                                        results: [
                                            {
                                                type: "RepositoryAttributeDVO",
                                                id: "CNSATT0123",
                                                name: "Vorname",
                                                description: "",
                                                value: {
                                                    "@type": "GivenName",
                                                    value: "Horst"
                                                },
                                                renderHints: {
                                                    dataType: "string",
                                                    editType: "input"
                                                }
                                            }
                                        ],
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data optional Item Title",
                                    description: "This is an optional Item",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "FamilyName",
                                        name: "Nachname",
                                        results: [
                                            {
                                                type: "RepositoryAttributeDVO",
                                                id: "CNSATT0124",
                                                name: "Nachname",
                                                description: "",
                                                value: {
                                                    "@type": "GivenName",
                                                    value: "Müller"
                                                }
                                            }
                                        ],
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data Required Item Title Without Description",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "Citizenship",
                                        name: "i18n://attribute.values.Citizenship",
                                        results: [
                                            {
                                                type: "RepositoryAttributeDVO",
                                                id: "CNSATT0125",
                                                name: "i18n://attribute.values.Citizenship",
                                                description: "",
                                                value: {
                                                    "@type": "Citizenship",
                                                    value: "DE"
                                                }
                                            }
                                        ],
                                        renderHints: {
                                            dataType: "string",
                                            editType: "select"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "DE", title: "Deutschland" },
                                                { key: "FR", title: "Frankreich" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data optional Item Title Without Description",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "Nationality",
                                        name: "Nationalität",
                                        results: [],
                                        renderHints: {
                                            dataType: "string",
                                            editType: "select"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "DE", title: "Deutschland" },
                                                { key: "FR", title: "Frankreich" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Alter",
                                        valueType: "Age",
                                        renderHints: {
                                            dataType: "integer",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Geschlecht",
                                        valueType: "Sex",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "select",
                                            semantic: "sex"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "male", title: "i18n://attribute.value.sex.male" },
                                                { key: "female", title: "i18n://attribute.value.sex.female" },
                                                { key: "intersex", title: "i18n://attribute.value.sex.intersex" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Telefon",
                                        valueType: "Phone",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input",
                                            semantic: "phone"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "@type": "RequestItemGroup",
                            title: "Contact Data Optional Item Group Title",
                            description: "This is an optional Group",
                            mustBeAccepted: false,
                            items: [
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data Required Item Title",
                                    description: "This is a required Item",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "GivenName",
                                        name: "Vorname",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data optional Item Title",
                                    description: "This is an optional Item",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "FamilyName",
                                        name: "Nachname",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data Required Item Title Without Description",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "Citizenship",
                                        name: "Staatsangehörigkeit",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "select"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "DE", title: "Deutschland" },
                                                { key: "FR", title: "Frankreich" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data optional Item Title Without Description",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "Nationality",
                                        name: "Nationalität",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "select"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "DE", title: "Deutschland" },
                                                { key: "FR", title: "Frankreich" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Alter",
                                        valueType: "Age",
                                        renderHints: {
                                            dataType: "integer",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Geschlecht",
                                        valueType: "Sex",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "select",
                                            semantic: "sex"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "male", title: "i18n://attribute.value.sex.male" },
                                                { key: "female", title: "i18n://attribute.value.sex.female" },
                                                { key: "intersex", title: "i18n://attribute.value.sex.intersex" }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "@type": "TemplateContent",
                request: {
                    "@type": "Request",
                    id: "REQ0816",
                    expiresAt: "",
                    items: [
                        {
                            "@type": "RequestItemGroup",
                            title: "Contact Data Optional Item Group Title",
                            description: "This is an optional Group",
                            mustBeAccepted: false,
                            items: [
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data Required Item Title",
                                    description: "This is a required Item",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "GivenName",
                                        name: "Vorname",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data optional Item Title",
                                    description: "This is an optional Item",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "FamilyName",
                                        name: "Nachname",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data Required Item Title Without Description",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "Citizenship",
                                        name: "Staatsangehörigkeit",
                                        renderHints: {
                                            dataFormat: "Countries_ALPHA2",
                                            dataType: "string",
                                            editType: "select"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "DE", title: "Deutschland" },
                                                { key: "FR", title: "Frankreich" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    title: "Contact Data optional Item Title Without Description",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        valueType: "Nationality",
                                        name: "Nationalität",
                                        renderHints: {
                                            dataFormat: "Countries_ALPHA2",
                                            dataType: "string",
                                            editType: "select"
                                        },
                                        valueHints: {
                                            values: [
                                                { key: "DE", title: "Deutschland" },
                                                { key: "FR", title: "Frankreich" }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: true,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Alter",
                                        valueType: "Age",
                                        renderHints: {
                                            dataType: "integer",
                                            editType: "input"
                                        }
                                    }
                                },
                                {
                                    "@type": "ReadAttributeRequestItem",
                                    mustBeAccepted: false,
                                    query: {
                                        "@type": "IdentityAttributeQuery",
                                        name: "Geschlecht",
                                        valueType: "Sex",
                                        renderHints: {
                                            dataType: "string",
                                            editType: "picker_sex"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "@type": "TemplateContent",
                request: {
                    "@type": "Request",
                    id: "REQ0816",
                    expiresAt: "",
                    items: [
                        {
                            "@type": "ReadAttributeRequestItem",
                            title: "Contact Data Required Item Title",
                            description: "This is a required Item",
                            mustBeAccepted: true,
                            query: {
                                "@type": "IdentityAttributeQuery",
                                valueType: "GivenName",
                                name: "Vorname",
                                renderHints: {
                                    dataType: "string",
                                    editType: "input"
                                }
                            }
                        },
                        {
                            "@type": "ReadAttributeRequestItem",
                            title: "Contact Data optional Item Title",
                            description: "This is an optional Item",
                            mustBeAccepted: false,
                            query: {
                                "@type": "IdentityAttributeQuery",
                                valueType: "FamilyName",
                                name: "Nachname",
                                renderHints: {
                                    dataType: "string",
                                    editType: "input"
                                }
                            }
                        },
                        {
                            "@type": "ReadAttributeRequestItem",
                            title: "Contact Data Required Item Title Without Description",
                            mustBeAccepted: true,
                            query: {
                                "@type": "IdentityAttributeQuery",
                                valueType: "Citizenship",
                                name: "Staatsangehörigkeit",
                                renderHints: {
                                    dataFormat: "Countries_ALPHA2",
                                    dataType: "string",
                                    editType: "select"
                                },
                                valueHints: {
                                    values: [
                                        { key: "DE", title: "Deutschland" },
                                        { key: "FR", title: "Frankreich" }
                                    ]
                                }
                            }
                        },
                        {
                            "@type": "ReadAttributeRequestItem",
                            title: "Contact Data optional Item Title Without Description",
                            mustBeAccepted: false,
                            query: {
                                "@type": "IdentityAttributeQuery",
                                valueType: "Nationality",
                                name: "Nationalität",
                                renderHints: {
                                    dataFormat: "Countries_ALPHA2",
                                    dataType: "string",
                                    editType: "select"
                                },
                                valueHints: {
                                    values: [
                                        { key: "DE", title: "Deutschland" },
                                        { key: "FR", title: "Frankreich" }
                                    ]
                                }
                            }
                        },
                        {
                            "@type": "ReadAttributeRequestItem",
                            mustBeAccepted: true,
                            query: {
                                "@type": "IdentityAttributeQuery",
                                name: "Alter",
                                valueType: "Age",
                                renderHints: {
                                    dataType: "integer",
                                    editType: "input"
                                }
                            }
                        },
                        {
                            "@type": "ReadAttributeRequestItem",
                            mustBeAccepted: false,
                            query: {
                                "@type": "IdentityAttributeQuery",
                                name: "Geschlecht",
                                valueType: "Sex",
                                renderHints: {
                                    dataType: "string",
                                    editType: "picker_sex"
                                }
                            }
                        }
                    ]
                }
            }
        ]

        return AccountController.extend("nmshd.app.flows.account.relationships.Template2", {
            formatter: Formatter,
            routePattern: new RegExp("^test.template"),
            createViewModel() {
                return {
                    error: false,
                    submitEnabled: false,
                    requestRunning: false
                }
            },

            getResponseParams() {
                const value = this.byId("request").getResponseParams()
                return value
            },

            getContext() {
                const context = this.byId("request").getContext()
                return context
            },
            getSelected() {
                const selection = this.byId("request").getSelected()
                return selection
            },

            async onRouteMatched(oEvent) {
                this.clear()
                await this.super("onRouteMatched", oEvent, true)

                /*
                this.templateId = this.viewProp("/route/relationshipId")
                const template = await App.RelationshipTemplateUtil.getRelationshipTemplate(this.templateId)
                if (!template) {
                    return
                }
                this.setModel(template)
                this.template = template
                const themeInfo = await App.themeInfoForTemplate(this.template.getProperty("/"))
 
                if (themeInfo) {
                    this.viewProp("/theme", themeInfo)
                    App.appController.viewProp("/theme", themeInfo)
                    App.appController.setTitle("Kontaktanfrage stellen")
                }
                */

                this.refresh()
            },

            switchModel(index) {
                this.refresh(index)
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

            onChange(oEvent) {
                console.log("Change Event Fired", oEvent)
                const responseParams = this.getResponseParams()
                console.log("Response Params", responseParams)
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

            refresh(index) {
                this.template = models[index ? index : 0]
                this.setMessage()

                this.viewProp("/error", false)
                this.viewProp("/submitEnabled", false)
                this.viewProp("/requestRunning", false)

                if (this.template) {
                    this.refreshWithData(this.template)
                } else {
                    sap.ui.getCore().getEventBus().publish("template", "error", { message: "Keine Daten verfügbar." })
                    this.navBack("account.relationships")
                }
            },

            refreshWithData(data) {
                if (this.model) {
                    this.model.setData(data)
                } else {
                    this.model = new JSONModel(data)
                    this.model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay)
                    this.setModel(this.model)
                }
            },

            clear() {
                this.super("clear")
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
