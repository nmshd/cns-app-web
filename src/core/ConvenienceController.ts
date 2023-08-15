import MessageStrip from "sap/m/MessageStrip"
import MessageToast from "sap/m/MessageToast"
import { Dock } from "sap/ui/core/Popup"
import { MessageType } from "sap/ui/core/library"
import Model from "sap/ui/model/Model"
import JSONModel from "sap/ui/model/json/JSONModel"
import App from "./App"
import BaseController from "./BaseController"

/**
 * @namespace nmshd.app.core
 */
export default abstract class ConvenienceController extends BaseController {
    public bindingPath = "/"
    private _loadingCounter = 0

    public onInit(omitClear: boolean = false) {
        this.getView()!.bindElement({ path: this.bindingPath })

        if (!omitClear) this.clear()
    }

    public refresh() {}

    public resetViewModel(): JSONModel {
        let viewModel = this.createViewModel()

        if (!(viewModel instanceof Model)) {
            viewModel = new JSONModel(viewModel)
        }

        const parsedViewModel = viewModel as JSONModel

        parsedViewModel.setDefaultBindingMode("OneWay")
        this.setModel(parsedViewModel, "v")
        return parsedViewModel
    }

    public showMessage(options: { quick?: boolean; sUserFriendlyMsg: string }) {
        const duration = options.quick ? 3000 : 6000
        MessageToast.show(options.sUserFriendlyMsg, {
            duration: duration,
            width: "15em",
            my: Dock.CenterBottom,
            at: Dock.CenterBottom,
            of: window,
            offset: "0 -100",
            collision: "fit fit",
            autoClose: true,
            animationTimingFunction: "ease",
            animationDuration: 500,
            closeOnBrowserNavigation: false
        })
    }

    protected createViewModel(): JSONModel | Object {
        const viewModel = new JSONModel({})
        return viewModel
    }

    public clear() {
        this._loadingCounter = 0
        this.resetViewModel()
    }

    public setMessage(message?: string, type: MessageType = MessageType.Information) {
        const strip = this.byId("message") as MessageStrip
        if (!strip || strip.getMetadata().getElementName() !== "MessageStrip") return

        if (!message) {
            strip.setText("")
            strip.setVisible(false)
        } else {
            strip.setText(message)
            strip.setVisible(true)
            strip.setType(type)
        }
    }

    /**
     * Returns the translated text of the current resource bundle with
     * given key and values
     * Example: resource("login.welcome", ["User"]) returns "Welcome User" when property "login.welcome=Welcome {0}"
     *
     * @param key The resource bundles key to fetch the translation from
     * @param values The array of values which should be taken into consideration while translating ({0} would be first index)
     * @returns The fully translated string
     */
    resource(key: string, values?: string[]): string {
        return this.getResourceBundle().getText(key, values) ?? ""
    }

    /**
     * Shortcut function to access the current item model with the given property. If value is empty
     * the property is read, if value is set, the property is written
     *
     * @param prop The property to read/write
     * @param value The value to set (leave blank to read property)
     * @returns The value of the property in the current item model
     */
    prop(prop: string, value?: any) {
        if (!this.getModel()) return

        //Get Prop
        if (typeof value === "undefined") {
            return this.getModel().getProperty(prop)
        }
        //Set Prop
        else {
            return this.getModel().setProperty(prop, value)
        }
    }

    /**
     * Shortcut function to access the current view model with the given property. If value is empty
     * the property is read, if value is set, the property is written
     *
     * @param prop The property to read/write
     * @param value The value to set (leave blank to read property)
     * @returns The value of the property in the current view model
     */
    viewProp(prop: string, value?: any) {
        if (!this.getModel("v")) return

        //Get Prop
        if (typeof value === "undefined") {
            return this.getModel("v").getProperty(prop)
        }
        //Set Prop
        else {
            return this.getModel("v").setProperty(prop, value)
        }
    }

    /**
     * Increments the current loading counter and set the "busy" view property to true
     */
    public loadInc() {
        this._loadingCounter++
        const route = this.viewProp("/route")
        App.Bus.publish("Content", "loadInc", { route: route, counter: this._loadingCounter })
        App.Bus.publish("Content", "loading", { route: route, counter: this._loadingCounter, loading: true })
        this.viewProp("/busy", true)
        const page = this.byId("page") as any
        if (page) {
            page.addStyleClass("loading")
        }
    }

    /**
     * Decrements the current loading counter and sets the "busy" view property to false
     * if the counter drops to or below 0
     */
    public loadDec() {
        const route = this.viewProp("/route")
        if (this._loadingCounter > 0) {
            this._loadingCounter--
            App.Bus.publish("Content", "loadDec", { route: route, counter: this._loadingCounter })
        }
        if (this._loadingCounter <= 0) {
            this.viewProp("/busy", false)
            App.Bus.publish("Content", "loading", {
                route: route,
                counter: this._loadingCounter,
                loading: false
            })
            const page = this.byId("page") as any
            if (page) {
                page.removeStyleClass("loading")
            }
        }
    }

    /**
     * Set the current "busy" view property to true or false
     * @param isLoading Whether or not the busy property should be true/false
     */
    public loadSet(isLoading: boolean) {
        this._loadingCounter = 0
        this.viewProp("/busy", !!isLoading)
    }

    /**
     * Shortcut function which takes a Promise and increments/decrements the
     * loading counter depending on its state.
     * Example: load(Data.getItems())
     */
    public load(promise: Promise<any>) {
        this.loadInc()
        return promise.finally(() => this.loadDec())
    }
}
