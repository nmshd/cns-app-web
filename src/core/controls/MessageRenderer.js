sap.ui.define(
    ["sap/m/ListItemBase", "sap/ui/core/Icon", "sap/m/FormattedText"],
    (ListItemBase, Icon, FormattedText) => {
        "use strict"

        return ListItemBase.extend("nmshd.app.core.controls.MessageRenderer", {
            metadata: {
                aggregations: {
                    content: { singularName: "content" },
                    iconControl: { multiple: false },
                    bodyControl: { multiple: false }
                },
                properties: {
                    icon: { type: "string" },
                    status: { type: "string", defaultValue: "Active" },
                    authorName: { type: "string", defaultValue: "" },
                    authorIcon: { type: "string", defaultValue: "" },
                    subject: { type: "string", defaultValue: "" },
                    body: { type: "string", defaultValue: "" },
                    time: { type: "string", defaultValue: "" }
                },
                publicMethods: [],
                events: {},
                defaultAggregation: "content"
            },

            /* Overwrite internal sapMLIBActive style toggling for Active items */
            _activeHandling: function () {},

            init(e) {
                if (!this.getIconControl()) {
                    this.setIconControl(new Icon())
                }
                if (!this.getBodyControl()) {
                    this.setBodyControl(new FormattedText())
                }
            },

            renderer(oRM, oControl) {
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.addClass("messageRenderer")
                oRM.writeClasses()
                oRM.write(">")
                const author = oControl.getAuthorName()
                const subject = oControl.getSubject()
                const body = oControl.getBody()
                const time = oControl.getTime()
                const iconControl = oControl.getIconControl()
                iconControl.setSrc(oControl.getIcon())

                const bodyControl = oControl.getBodyControl()
                bodyControl.setHtmlText(oControl.getBody())

                oRM.write('<div class="messageRendererBegin">')
                oRM.write("</div>")

                oRM.write('<div class="messageRendererContent">')
                oRM.write('<div class="messageRendererHead">')
                if (author) {
                    oRM.write('<div class="messageRendererAuthor">')
                    oRM.writeEscaped(author)
                    oRM.write("</div>")
                }
                if (time) {
                    oRM.write('<div class="messageRendererTime">')
                    oRM.writeEscaped(time)
                    oRM.write("</div>")
                }
                oRM.write("</div>")

                if (subject) {
                    oRM.write('<div class="messageRendererSubject">')
                    oRM.writeEscaped(subject)
                    oRM.write("</div>")
                }
                oRM.write('<div class="messageRendererChildContainer">')
                const content = oControl.getAggregation("content")
                if (content) {
                    for (const control of content) {
                        oRM.write('<div class="messageRendererChild">')
                        oRM.renderControl(control)
                        oRM.write("</div>")
                    }
                }
                oRM.write("</div>")
                oRM.write("</div>")
                oRM.write('<div class="messageRendererEnd">')
                oRM.write("</div>")
                oRM.write(
                    `<div data-sap-ui-icon-content="" class="personItemRendererArrow sapUiIcon sapUiIconMirrorInRTL sapMLIBType sapMLIBImgNav" style="font-family: 'SAP-icons';">`
                )
                oRM.write("</div>")

                oRM.write("</div>")
            }
        })
    }
)
