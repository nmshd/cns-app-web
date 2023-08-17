import Input from "sap/m/Input"
import MessageStrip from "sap/m/MessageStrip"
import TextArea from "sap/m/TextArea"
import PopupController from "./PopupController"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default class CreateCertificateRequestPopupController extends PopupController {
    popupType = PopupType.CreateCertificateRequestPopup

    public subject: Input
    public body: TextArea
    public info: MessageStrip
    private peer?: string

    public onInit() {
        super.onInit(true)
        this.subject = this.byId("subject") as Input
        this.body = this.byId("body") as TextArea
        this.info = this.byId("info") as MessageStrip
    }

    public async refresh() {
        this.clear()
        this.peer = undefined
        if (!this.params.data || !this.params.data.peer) {
            appLogger.warn("No/wrong data for CreateCerticateRequest")
            return
        }
        this.peer = this.params.data.peer
        if (!this.peer) return
    }

    public clear() {
        super.clear()
        this.info.setText("").setVisible(false)
        this.subject.setValue("")
        this.body.setValue("")
        this.viewProp("/submitAvailable", true)
    }

    public async onRequestSubmit() {
        try {
            const subject = this.subject.getValue()
            const body = this.body.getValue() ? this.body.getValue() : " "
            this.info.setText("")
            this.viewProp("/submitAvailable", false)

            const requestPayload = {
                content: {
                    items: [
                        {
                            "@type": "FreeTextRequestItem",
                            mustBeAccepted: true,
                            title: subject,
                            description: body,
                            freeText: "test"
                        }
                    ]
                },
                peer: this.peer!
            }

            const canCreateRequestResult = await runtime.currentSession.consumptionServices.outgoingRequests.canCreate(
                requestPayload
            )
            if (canCreateRequestResult.isError) {
                this.info.setText(canCreateRequestResult.error.message).setVisible(true)
                this.viewProp("/submitAvailable", true)
                return
            }

            const createRequestResult = await runtime.currentSession.consumptionServices.outgoingRequests.create(
                requestPayload
            )

            if (createRequestResult.isError) {
                this.info.setText(createRequestResult.error.message).setVisible(true)
                this.viewProp("/submitAvailable", true)
                return
            }

            const sentMessageResult = await this.load(
                runtime.currentSession.transportServices.messages.sendMessage({
                    content: createRequestResult.value.content,
                    recipients: [this.peer!],
                    attachments: []
                })
            )
            if (sentMessageResult.isError) {
                this.info.setText(sentMessageResult.error.message).setVisible(true)
                this.viewProp("/submitAvailable", true)
                return
            }
            this.submitPopup(sentMessageResult.value)
            this.refresh()
        } catch (e) {
            appLogger.error(e)
            this.info.setText(this.resource("newMessage.sendingError")).setVisible(true)
            this.viewProp("/submitAvailable", true)
        }
    }
}
