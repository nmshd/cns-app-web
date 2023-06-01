//import Device from "sap/ui/Device";
import Device from "sap/ui/Device";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import App from "./core/App";

/**
 * DO NOT REMOVE @namespace!
 * @namespace nmshd.app
 */
export default class Component extends UIComponent {
	public static metadata = {
		manifest: "json"
	};

	private _sContentDensityClass:string

	
	public async init() {
		// call the base component's init function
		super.init()

		// @ts-ignore
		jQuery.sap.log.setLevel(1)

		const oDeviceModel = new JSONModel(Device)
		oDeviceModel.setDefaultBindingMode("OneWay")
		oDeviceModel.setData(Device)
		this.setModel(oDeviceModel, "d")
		
		await App.initializeApp(this)
		this.getRouter().initialize()
	}

	
	/**
       * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
       * design mode class should be set, which influences the size appearance of some controls.
       * @public
       * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
       */
	  
	public getContentDensityClass() {
        if (this._sContentDensityClass === undefined) {
          // check whether FLP has already set the content density class; do nothing in this case
          if (
            jQuery(document.body).hasClass("sapUiSizeCozy") ||
            jQuery(document.body).hasClass("sapUiSizeCompact")
          ) {
            this._sContentDensityClass = "";
			//@ts-ignore
          } else if (!Device.support.touch) {
            // apply "compact" mode if touch is not supported
            this._sContentDensityClass = "sapUiSizeCompact";
          } else {
            // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
            this._sContentDensityClass = "sapUiSizeCozy";
          }
        }
        return this._sContentDensityClass;
      }
	  
}