import View from "sap/ui/core/mvc/View";
import BaseController from "../BaseController";
import { IAppPopupParams } from "../IAppPopup";

export enum PopupType {
    AttributeInfoPopup = "AttributeInfoPopup",
    AttributeChangePopup = "AttributeChangePopup"
}

/**
 * @namespace nmshd.app.core.popups
 */
export default abstract class PopupController extends BaseController {
    public readonly popupType:PopupType

    protected params:IAppPopupParams
    protected view:View|undefined

    override getView():View|undefined {
        return this.view
    }

    public refresh(params:IAppPopupParams, view:View) {
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