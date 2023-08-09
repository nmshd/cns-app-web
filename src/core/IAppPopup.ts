import Dialog from "sap/m/Dialog"

export interface IAppPopup extends Dialog {
    refresh?(params: IAppPopupParams)
}

export interface IAppPopupParams {
    data?: any
    cancelCallback?: Function
    submitCallback?: Function
}
