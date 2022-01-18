// For Library Version: 1.84.0

declare namespace sap {
  /**
   * UI5 library: sap.fileviewer.
   */
  namespace fileviewer {
    interface $FileViewerSettings extends sap.ui.core.$ControlSettings {
      /**
       * height property
       */
      height?: sap.ui.core.CSSSize;

      /**
       * width property
       */
      width?: sap.ui.core.CSSSize;

      /**
       * source property
       */
      source?: sap.ui.core.URI;

      /**
       * data property
       */
      data?: string;
    }
    /**
     * SAP UI5 FileViewer control can be used to view files. It's based on PDFJS.
     */
    class FileViewer extends sap.ui.core.Control {
      /**
       * Constructor for FileViewer control.
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
        mSettings?: $FileViewerSettings
      );

      /**
       * Creates a new subclass of class sap.fileviewer.FileViewer with name `sClassName` and enriches it with
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
       * Gets current value of property {@link #getData data}.
       *
       * data property
       */
      getData(): string;
      /**
       * Gets current value of property {@link #getHeight height}.
       *
       * height property
       *
       * Default value is `"100%"`.
       */
      getHeight(): sap.ui.core.CSSSize;
      /**
       * Returns a metadata object for class sap.fileviewer.FileViewer.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getSource source}.
       *
       * source property
       */
      getSource(): sap.ui.core.URI;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * width property
       *
       * Default value is `"100%"`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Sets a new value for property {@link #getData data}.
       *
       * data property
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setData(
        /**
         * New value for property `data`
         */
        sData: string
      ): sap.fileviewer.FileViewer;
      /**
       * Sets a new value for property {@link #getHeight height}.
       *
       * height property
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `"100%"`.
       */
      setHeight(
        /**
         * New value for property `height`
         */
        sHeight?: sap.ui.core.CSSSize
      ): sap.fileviewer.FileViewer;
      /**
       * Sets a new value for property {@link #getSource source}.
       *
       * source property
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSource(
        /**
         * New value for property `source`
         */
        sSource: sap.ui.core.URI
      ): sap.fileviewer.FileViewer;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * width property
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `"100%"`.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth?: sap.ui.core.CSSSize
      ): sap.fileviewer.FileViewer;
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/fileviewer/FileViewer": undefined;
  }
}
