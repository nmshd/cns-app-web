import Control from "sap/ui/core/Control"

/**
 * @namespace nmshd.app.core.controls.attributes
 */
export default interface IValueRenderer extends Control {
    setControl(value: Control)
    getControl(): Control
    setPropertyName(value: string)
    getPropertyName(): string
    setValueType(value: string)
    getValueType(): string
    setEditable(value: boolean)
    getEditable(): boolean
    setUpdateDisabled(value: boolean)
    getUpdateDisabled(): boolean
    setAttributePath(value: string)
    getAttributePath(): string
    invalidateControl()
    updateControls()
    getEditedValue()
    getEditedContext()
}
