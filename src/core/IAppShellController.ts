import Controller from "sap/ui/core/mvc/Controller"

export default interface IAppShellController extends Controller {
    deselectButtons()
    selectButton(routeName: string)
    setTitle(title: string)
    clearLeft()
    clearRight()
    setLeft(icon?: string, callback?: Function)
    setRight(icon?: string, callback?: Function)
    setLeftIcon(icon?: string)
    setRightIcon(icon?: string)
    setLeftAction(callback?: Function)
    setRightAction(callback?: Function)
    showBack()
    hideBack()
    resource(key: string, values?: string[])
}
