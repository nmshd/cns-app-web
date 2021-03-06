// For Library Version: 1.84.3

declare namespace sap {
  /**
   * SAPUI5 library with controls with native device capabilities.
   */
  namespace ndc {
    /**
     * @SINCE 1.28.0
     *
     * TODO: description
     *
     * As `BarcodeScanner` is a static class, a `jQuery.sap.require("sap.ndc.BarcodeScanner");` statement must
     * be explicitly executed before the class can be used. Example: *
     * ```javascript
     *
     * jQuery.sap.require("sap.ndc.BarcodeScanner");
     * sap.ndc.BarcodeScanner.scan(
     *     function (oResult) { / * process scan result * / },
     *     function (oError) { / * handle scan error * / },
     *     function (oResult) { / * handle input dialog change * / }
     * );
     * ```
     */
    namespace BarcodeScanner {
      /**
       * Closes the bar code input dialog. It can be used to close the dialog before the user presses the OK or
       * the Cancel button (e.g. in the fnLiveUpdate callback function of the {@link sap.ndc.BarcodeScanner.scan}
       * method.)
       */
      function closeScanDialog(): void;
      /**
       * Returns the status model of the BarcodeScanner. It is a JSON model which contains a single boolean property
       * '`available`' indicating whether or not the bar code scanner feature is available. It can be used to
       * bind to the `visible` property of UI controls which have to be hidden in case the feature is unavailable.
       */
      function getStatusModel(): sap.ui.model.json.JSONModel;
      /**
       * Starts the bar code scanning process either showing the live input from the camera or displaying a dialog
       * to enter the value directly if the bar code scanning feature is not available.
       *
       *
       * ```javascript
       *
       * sap.ndc.BarcodeScanner.scan(fnSuccess, fnFail, fnLiveUpdate)
       * ```
       *
       *
       * The bar code scanning is done asynchronously. When it is triggered, this function returns without waiting
       * for the scanning process to finish. The applications have to provide callback functions to react to the
       * events of a successful scanning, an error during scanning, and the live input on the dialog.
       *
       * `fnSuccess` is passed an object with text, format and cancelled properties. Text is the text representation
       * of the bar code data, format is the type of the bar code detected, and cancelled is whether or not the
       * user cancelled the scan. `fnError` is given the error, `fnLiveUpdate` is passed the new value entered
       * in the dialog's input field. An example:
       *
       *
       * ```javascript
       *
       * sap.ndc.BarcodeScanner.scan(
       *    function (mResult) {
       *       alert("We got a bar code\n" +
       *             "Result: " + mResult.text + "\n" +
       *             "Format: " + mResult.format + "\n" +
       *             "Cancelled: " + mResult.cancelled);
       *    },
       *    function (Error) {
       *       alert("Scanning failed: " + Error);
       *    },
       *    function (mParams) {
       *       alert("Value entered: " + mParams.newValue);
       *    }
       * );
       * ```
       */
      function scan(
        /**
         * Function to be called when the scanning is done or cancelled
         */
        fnSuccess?: Function,
        /**
         * Function to be called when the scanning is failed
         */
        fnFail?: Function,
        /**
         * Function to be called when value of the dialog's input is changed
         */
        fnLiveUpdate?: Function
      ): void;
    }

    interface $BarcodeScannerButtonSettings
      extends sap.ui.core.$ControlSettings {
      /**
       * If set to true, the button remains visible if the scanner is not available and triggers a dialog to enter
       * bar code.
       */
      provideFallback?: boolean;

      /**
       * The invisible bar code scanner button is not rendered regardless of the availability of the native scan
       * feature.
       */
      visible?: boolean;

      /**
       * Defines the width of the scanner button.
       */
      width?: sap.ui.core.CSSSize;

      /**
       * Event is fired when the scanning is finished or cancelled
       */
      scanSuccess?: Function;

      /**
       * Event is fired when the native scanning process is failed.
       */
      scanFail?: Function;

      /**
       * Event is fired when the text in the dialog's input field is changed.
       */
      inputLiveUpdate?: Function;
    }
    /**
     * A button control (displaying a bar code icon) to start the bar code scanning process. If the native scanning
     * feature is not available, the button is either hidden or it provides a fallback by opening a dialog with
     * an input field where the bar code can be entered manually.
     */
    class BarcodeScannerButton extends sap.ui.core.Control {
      /**
       * Constructor for a new BarcodeScannerButton.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       */
      constructor(
        /**
         * id for the new control, generated automatically if no id is given
         */
        sId?: string,
        /**
         * initial settings for the new control
         */
        mSettings?: $BarcodeScannerButtonSettings
      );

      /**
       * Attaches event handler `fnFunction` to the {@link #event:inputLiveUpdate inputLiveUpdate} event of this
       * `sap.ndc.BarcodeScannerButton`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.ndc.BarcodeScannerButton` itself.
       *
       * Event is fired when the text in the dialog's input field is changed.
       */
      attachInputLiveUpdate(
        /**
         * An application-specific payload object that will be passed to the event handler along with the event
         * object when firing the event
         */
        oData: object,
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.ndc.BarcodeScannerButton` itself
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:scanFail scanFail} event of this `sap.ndc.BarcodeScannerButton`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.ndc.BarcodeScannerButton` itself.
       *
       * Event is fired when the native scanning process is failed.
       */
      attachScanFail(
        /**
         * An application-specific payload object that will be passed to the event handler along with the event
         * object when firing the event
         */
        oData: object,
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.ndc.BarcodeScannerButton` itself
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:scanSuccess scanSuccess} event of this `sap.ndc.BarcodeScannerButton`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.ndc.BarcodeScannerButton` itself.
       *
       * Event is fired when the scanning is finished or cancelled
       */
      attachScanSuccess(
        /**
         * An application-specific payload object that will be passed to the event handler along with the event
         * object when firing the event
         */
        oData: object,
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.ndc.BarcodeScannerButton` itself
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:inputLiveUpdate inputLiveUpdate} event of
       * this `sap.ndc.BarcodeScannerButton`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachInputLiveUpdate(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:scanFail scanFail} event of this `sap.ndc.BarcodeScannerButton`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachScanFail(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:scanSuccess scanSuccess} event of this `sap.ndc.BarcodeScannerButton`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachScanSuccess(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Creates a new subclass of class sap.ndc.BarcodeScannerButton with name `sClassName` and enriches it with
       * the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
       */
      // @ts-ignore
      static extend(
        /**
         * Name of the class being created
         */
        sClassName: string,
        /**
         * Object literal with information about the class
         */
        oClassInfo?: object,
        /**
         * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
         * used by this class
         */
        FNMetaImpl?: Function
      ): Function;
      /**
       * Fires event {@link #event:inputLiveUpdate inputLiveUpdate} to attached listeners.
       */
      fireInputLiveUpdate(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The new value of the input field.
           */
          newValue?: string;
        }
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Fires event {@link #event:scanFail scanFail} to attached listeners.
       */
      fireScanFail(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Fires event {@link #event:scanSuccess scanSuccess} to attached listeners.
       */
      fireScanSuccess(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The the text representation of the bar code data.
           */
          text?: string;
          /**
           * The type of the bar code detected.
           */
          format?: string;
          /**
           * Indicates whether or not the user cancelled the scan.
           */
          cancelled?: boolean;
        }
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Returns a metadata object for class sap.ndc.BarcodeScannerButton.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getProvideFallback provideFallback}.
       *
       * If set to true, the button remains visible if the scanner is not available and triggers a dialog to enter
       * bar code.
       *
       * Default value is `true`.
       */
      getProvideFallback(): boolean;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * The invisible bar code scanner button is not rendered regardless of the availability of the native scan
       * feature.
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * Defines the width of the scanner button.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Sets a new value for property {@link #getProvideFallback provideFallback}.
       *
       * If set to true, the button remains visible if the scanner is not available and triggers a dialog to enter
       * bar code.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setProvideFallback(
        /**
         * New value for property `provideFallback`
         */
        bProvideFallback?: boolean
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * The invisible bar code scanner button is not rendered regardless of the availability of the native scan
       * feature.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      // @ts-ignore
      setVisible(
        /**
         * New value for property `visible`
         */
        bVisible?: boolean
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * Defines the width of the scanner button.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth?: sap.ui.core.CSSSize
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:inputLiveUpdate inputLiveUpdate} event of this
       * `sap.ndc.BarcodeScannerButton`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.ndc.BarcodeScannerButton` itself.
       *
       * Event is fired when the text in the dialog's input field is changed.
       */
      attachInputLiveUpdate(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.ndc.BarcodeScannerButton` itself
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:scanFail scanFail} event of this `sap.ndc.BarcodeScannerButton`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.ndc.BarcodeScannerButton` itself.
       *
       * Event is fired when the native scanning process is failed.
       */
      attachScanFail(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.ndc.BarcodeScannerButton` itself
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:scanSuccess scanSuccess} event of this `sap.ndc.BarcodeScannerButton`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.ndc.BarcodeScannerButton` itself.
       *
       * Event is fired when the scanning is finished or cancelled
       */
      attachScanSuccess(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.ndc.BarcodeScannerButton` itself
         */
        oListener?: object
      ): sap.ndc.BarcodeScannerButton;
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ndc/BarcodeScannerButton": undefined;
  }
}
