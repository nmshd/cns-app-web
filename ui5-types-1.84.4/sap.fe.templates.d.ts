// For Library Version: 1.84.2

declare namespace sap {
  namespace fe {
    /**
     * Fiori Elements Templates Library
     */
    namespace templates {
      namespace ListReport {
        /**
         * @SINCE 1.79.0
         *
         * Extension API for list reports on SAP Fiori elements for OData V4.
         */
        class ExtensionAPI extends sap.fe.templates.ExtensionAPI {
          /**/
          constructor();

          /**
           * Creates a new subclass of class sap.fe.templates.ListReport.ExtensionAPI with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.fe.templates.ExtensionAPI.extend}.
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
           * Returns a metadata object for class sap.fe.templates.ListReport.ExtensionAPI.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Refreshes the List Report. This method currently only supports triggering the search (by clicking on
           * the GO button) in the List Report Filter Bar. It can be used to request the initial load or to refresh
           * the currently shown data based on the filters entered by the user. Please note: The Promise is resolved
           * once the search is triggered and not once the data is returned.
           */
          refresh(): any;
        }
      }

      namespace ObjectPage {
        /**
         * @SINCE 1.79.0
         *
         * Extension API for object pages on SAP Fiori elements for OData V4.
         */
        class ExtensionAPI extends sap.fe.templates.ExtensionAPI {
          /**/
          constructor();

          /**
           * Creates a new subclass of class sap.fe.templates.ObjectPage.ExtensionAPI with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.fe.templates.ExtensionAPI.extend}.
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
           * Returns a metadata object for class sap.fe.templates.ObjectPage.ExtensionAPI.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Refreshes the whole object page or portions of it.
           */
          refresh(
            /**
             * Path or array of paths referring to entities or properties to be refreshed. If omitted, the whole object
             * page is refreshed. The path "" refreshes the entity assigned to the object page without navigations
             */
            vPath?: string | string[]
          ): any;
        }
      }

      /**
       * @SINCE 1.79.0
       *
       * Common Extension API for all pages of SAP Fiori elements for OData V4.
       */
      class ExtensionAPI extends sap.ui.base.Object {
        /**/
        constructor();

        /**
         * Add any control as a dependent to this Fiori elements page.
         */
        addDependent(
          /**
           * Control to be added as dependent
           */
          oControl: sap.ui.core.Control
        ): void;
        /**
         * Creates a new subclass of class sap.fe.templates.ExtensionAPI with name `sClassName` and enriches it
         * with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
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
         * Returns a metadata object for class sap.fe.templates.ExtensionAPI.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Get access to models managed by Fiori elements.
         *  The following models can be accessed:
         * 	 - undefined: the undefined model returns the UI5 OData v4 model bound to this page
         * 	 - i18n / further data models defined in the manifest
         * 	 - ui: returns a UI5 JSON model containing UI information. Only the following properties are public,
         * 			don't rely on any other property as it might change in the future
         * 	editMode: contains either 'Editable' or 'Display'   .
         */
        getModel(
          /**
           * Name of the model
           */
          sModelName: string
        ): sap.ui.model.Model;
        /**
         * Load a fragment and go through the template preprocessor with the entityset context.
         */
        loadFragment(
          /**
           * The settings object
           */
          mSettings: {
            /**
             * The id of the fragment itself
             */
            id: string;
            /**
             * The name of the fragment to load
             */
            name: string;
            /**
             * The controller to attach to the fragment
             */
            controller: object;
          }
        ): any;
        /**
         * Navigate to another target.
         */
        navigateToTarget(
          /**
           * Name of the target route
           */
          sTarget: string,
          /**
           * Context instance
           */
          oContext?: sap.ui.model.Context
        ): void;
        /**
         * Remove a dependent control from this Fiori elements page.
         */
        removeDependent(
          /**
           * Control to be added as dependent
           */
          oControl: sap.ui.core.Control
        ): void;
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/fe/templates/ListReport/ExtensionAPI": undefined;

    "sap/fe/templates/ObjectPage/ExtensionAPI": undefined;

    "sap/fe/templates/ExtensionAPI": undefined;
  }
}
