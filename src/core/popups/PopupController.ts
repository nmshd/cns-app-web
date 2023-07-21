import View from "sap/ui/core/mvc/View"
import BaseController from "../BaseController"
import Formatter from "../Formatter"
import { IAppPopupParams } from "../IAppPopup"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default abstract class PopupController extends BaseController {
    public readonly popupType: PopupType

    public readonly formatter: Formatter = Formatter

    protected params: IAppPopupParams
    protected view: View | undefined

    public refresh(params: IAppPopupParams, view: View) {
        this.params = params
        this.view = view
    }

    public cancelPopup() {
        if (this.params.cancelCallback) {
            this.params.cancelCallback()
        }
        this.closePopup()
    }

    protected closePopup() {
        App.closePopup(this.popupType)
    }
}
