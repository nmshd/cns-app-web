sap.ui.define(
    ["sap/ui/core/Control", "sap/m/Button", "sap/m/Image", "sap/ui/model/json/JSONModel", "nmshd/app/core/Formatter"],
    (Control, Button, Image, JSONModel, Formatter) => {
        "use strict"

        return Control.extend("nmshd.app.core.controls.FileReferenceRenderer", {
            metadata: {
                aggregations: {
                    content: { type: "sap.m.Button", multiple: false }
                },
                properties: {
                    fileReference: { type: "string" }
                },
                publicMethods: [],
                events: {},
                defaultAggregation: "content"
            },

            init(e) {
                this.fileModel = new JSONModel({})
                this.setModel(this.fileModel, "file")
                this.setAggregation(
                    "content",
                    new Button({
                        text: "{file>/name}",
                        icon: { path: "file>/mimetype", formatter: Formatter.iconByMimetype },
                        type: "Transparent"
                    }).attachPress(this.onOpenFile.bind(this))
                )
            },

            setFileReference(value) {
                this.setProperty("fileReference", value, true)
                this.invalidateControl()
            },

            async invalidateControl() {
                try {
                    if (!this.getFileReference()) {
                        this.fileModel.setData({})
                        return
                    }
                    const fileRef = NMSHDTransport.FileReference.from(this.getFileReference())
                    let fileResult = await runtime.currentSession.transportServices.files.getFile({
                        id: fileRef.id.toString()
                    })
                    if (fileResult.isError) {
                        fileResult = await runtime.currentSession.transportServices.files.getOrLoadFile({
                            reference: this.getFileReference()
                        })
                        if (fileResult.isError) {
                            throw new Error(fileResult.error)
                        }
                    }

                    const fileDVO = await runtime.currentSession.expander.expandFileDTO(fileResult.value)

                    this.file = fileDVO
                    this.fileModel.setData(fileDVO)
                } catch (e) {
                    this.fileModel.setData({})
                    App.error(e)
                }
            },

            onOpenFile() {
                App.FileUtil.openFile(this.file)
            },

            renderer(oRM, oControl) {
                // oControl.setModel(this.fileModel, "file")
                oRM.write("<div")
                oRM.writeControlData(oControl)
                oRM.writeClasses()
                oRM.write(">")
                const buttonControl = oControl.getAggregation("content")
                oRM.write("<div class='maxWidth'>")
                oRM.renderControl(buttonControl)
                oRM.write("</div>")

                oRM.write("</div>")
            }
        })
    }
)
