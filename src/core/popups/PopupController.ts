import Fragment from "sap/ui/core/Fragment"
import View from "sap/ui/core/mvc/View"
import JSONModel from "sap/ui/model/json/JSONModel"
import ConvenienceController from "../ConvenienceController"
import Formatter from "../Formatter"
import { IAppPopupParams } from "../IAppPopup"
import { PopupType } from "./PopupType"

/**
 * @namespace nmshd.app.core.popups
 */
export default abstract class PopupController extends ConvenienceController {
    public readonly popupType: PopupType

    public readonly formatter: Formatter = Formatter

    private initialized: boolean = false
    protected params: IAppPopupParams
    protected view: View | undefined

    public refreshPopup(params: IAppPopupParams, view: View) {
        this.params = params
        this.view = view
        ;(this as any).oView = view
        ;(this as any).oView.byId = (id: string) => {
            return Fragment.byId("appPopup_" + this.popupType, id)
        }
        if (!this.initialized) {
            this.onInit()
            this.initialized = true
        }
        this.setModel(new JSONModel({}))
        this.refresh()
    }

    public submitPopup(...params) {
        if (this.params.submitCallback) {
            this.params.submitCallback(...params)
        }
        this.closePopup()
    }

    public cancelPopup(...params) {
        if (this.params.cancelCallback) {
            this.params.cancelCallback(...params)
        }
        this.closePopup()
    }

    protected closePopup() {
        this.clear()
        App.closePopup(this.popupType)
    }
}
