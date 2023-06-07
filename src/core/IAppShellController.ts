import Controller from "sap/ui/core/mvc/Controller"

export default interface IAppShellController extends Controller {
    deselectButtons(): void
    selectButton(routeName: string): void
    setTitle(title?: string): void
    clearLeft(): void
    clearRight(): void
    setLeft(icon?: string, callback?: Function): void
    setRight(icon?: string, callback?: Function): void
    setLeftIcon(icon?: string): void
    setRightIcon(icon?: string): void
    setLeftAction(callback?: Function): void
    setRightAction(callback?: Function): void
    showBack(): void
    hideBack(): void
    resource(key: string, values?: string[]): string
}
