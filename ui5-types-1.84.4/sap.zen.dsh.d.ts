// For Library Version: 1.84.3

declare namespace sap {
  namespace zen {
    /**
     * Design Studio Runtime Library. Intended only to be used within S/4 HANA Fiori applications.
     */
    namespace dsh {
      interface $AnalyticGridSettings extends sap.ui.core.$ControlSettings {
        /**
         * Desired width of the AnalyticGrid control
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Desired width of the AnalyticGrid control
         */
        height?: sap.ui.core.CSSSize;

        /**
         * A SelectionVariant specifying the initial selection state used by the AnalyticGrid. Depending on the
         * specific query and selection variant state, this will result in setting one or more variables' values
         * and setting one or more filters on the datasource.
         */
        selection?: object;

        /**
         * Name of the Query to bind the AnalyticGrid to.
         */
        queryName?: string;

        /**
         * Target System alias for data connectivity
         */
        systemAlias?: string;

        /**
         * A string representing the current state of the analytic grid, including data selection and navigation
         * state. Intended to be used for saving and recreating inner application state in navigation scenarios,
         * for example.
         */
        state?: string;

        /**
         * Event is triggered when the state of the AnalyticGrid is changed.
         */
        stateChange?: Function;

        /**
         * Event is triggered when the selection is changed.
         */
        selectionChange?: Function;
      }

      interface $DshSettings extends sap.ui.core.$ControlSettings {
        /**
         * Name of the Design Studio application to be opened.
         */
        dshAppName?: string;

        /**
         * Path to application specified by dshAppName
         */
        repoPath?: string;

        /**
         * Desired width of the Design Studio Control
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Desired height of the Design Studio Control
         */
        height?: sap.ui.core.CSSSize;

        deployment?: string;

        protocol?: string;

        client?: string;

        language?: string;

        semanticMappings?: object;

        appComponent?: object;

        deferCreation?: boolean;

        systemAlias?: string;
      }
      /**
       * @SINCE 1.46
       * @EXPERIMENTAL (since 1.46)
       *
       * Control for embedding a Design Studio Analytic Grid in an S/4 HANA Fiori application
       */
      class AnalyticGrid extends sap.ui.core.Control {
        /**
         * Constructor for a new AnalyticGrid.
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
          mSettings?: $AnalyticGridSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
         * `sap.zen.dsh.AnalyticGrid`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.zen.dsh.AnalyticGrid` itself.
         *
         * Event is triggered when the selection is changed.
         */
        attachSelectionChange(
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
           * Context object to call the event handler with. Defaults to this `sap.zen.dsh.AnalyticGrid` itself
           */
          oListener?: object
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:stateChange stateChange} event of this `sap.zen.dsh.AnalyticGrid`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.zen.dsh.AnalyticGrid` itself.
         *
         * Event is triggered when the state of the AnalyticGrid is changed.
         */
        attachStateChange(
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
           * Context object to call the event handler with. Defaults to this `sap.zen.dsh.AnalyticGrid` itself
           */
          oListener?: object
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
         * this `sap.zen.dsh.AnalyticGrid`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSelectionChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:stateChange stateChange} event of this `sap.zen.dsh.AnalyticGrid`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStateChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Creates a new subclass of class sap.zen.dsh.AnalyticGrid with name `sClassName` and enriches it with
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
         * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
         */
        fireSelectionChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * A SelectionVariant specifying the current selection state of the AnalyticGrid.
             */
            selection?: object;
          }
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Fires event {@link #event:stateChange stateChange} to attached listeners.
         */
        fireStateChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Serialized state string.
             */
            state?: string;
          }
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Desired width of the AnalyticGrid control
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.zen.dsh.AnalyticGrid.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getQueryName queryName}.
         *
         * Name of the Query to bind the AnalyticGrid to.
         */
        getQueryName(): string;
        /**
         * Gets current value of property {@link #getSelection selection}.
         *
         * A SelectionVariant specifying the initial selection state used by the AnalyticGrid. Depending on the
         * specific query and selection variant state, this will result in setting one or more variables' values
         * and setting one or more filters on the datasource.
         */
        getSelection(): object;
        /**
         * Gets current value of property {@link #getState state}.
         *
         * A string representing the current state of the analytic grid, including data selection and navigation
         * state. Intended to be used for saving and recreating inner application state in navigation scenarios,
         * for example.
         */
        getState(): string;
        /**
         * Gets current value of property {@link #getSystemAlias systemAlias}.
         *
         * Target System alias for data connectivity
         */
        getSystemAlias(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Desired width of the AnalyticGrid control
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Desired width of the AnalyticGrid control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight?: sap.ui.core.CSSSize
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Sets a new value for property {@link #getQueryName queryName}.
         *
         * Name of the Query to bind the AnalyticGrid to.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setQueryName(
          /**
           * New value for property `queryName`
           */
          sQueryName?: string
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Sets a new value for property {@link #getSelection selection}.
         *
         * A SelectionVariant specifying the initial selection state used by the AnalyticGrid. Depending on the
         * specific query and selection variant state, this will result in setting one or more variables' values
         * and setting one or more filters on the datasource.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSelection(
          /**
           * New value for property `selection`
           */
          oSelection?: object
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Sets a new value for property {@link #getState state}.
         *
         * A string representing the current state of the analytic grid, including data selection and navigation
         * state. Intended to be used for saving and recreating inner application state in navigation scenarios,
         * for example.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setState(
          /**
           * New value for property `state`
           */
          sState?: string
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Sets a new value for property {@link #getSystemAlias systemAlias}.
         *
         * Target System alias for data connectivity
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSystemAlias(
          /**
           * New value for property `systemAlias`
           */
          sSystemAlias?: string
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Desired width of the AnalyticGrid control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth?: sap.ui.core.CSSSize
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
         * `sap.zen.dsh.AnalyticGrid`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.zen.dsh.AnalyticGrid` itself.
         *
         * Event is triggered when the selection is changed.
         */
        attachSelectionChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.zen.dsh.AnalyticGrid` itself
           */
          oListener?: object
        ): sap.zen.dsh.AnalyticGrid;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:stateChange stateChange} event of this `sap.zen.dsh.AnalyticGrid`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.zen.dsh.AnalyticGrid` itself.
         *
         * Event is triggered when the state of the AnalyticGrid is changed.
         */
        attachStateChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.zen.dsh.AnalyticGrid` itself
           */
          oListener?: object
        ): sap.zen.dsh.AnalyticGrid;
      }
      /**
       * @SINCE 1.44
       *
       * Control for embedding a Design Studio application full-screen in an S/4 HANA Fiori application
       */
      class Dsh extends sap.ui.core.Control {
        /**
         * Constructor for a new Dsh.
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
          mSettings?: $DshSettings
        );

        /**/
        addParameter(
          sName: string,

          sValue: string
        ): string;
        /**/
        createPage(): void;
        /**/
        executeScript(sScript: string): void;
        /**
         * Creates a new subclass of class sap.zen.dsh.Dsh with name `sClassName` and enriches it with the information
         * contained in `oClassInfo`.
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
         * Gets current value of property {@link #getAppComponent appComponent}.
         */
        getAppComponent(): object;
        /**
         * Gets current value of property {@link #getClient client}.
         */
        getClient(): string;
        /**/
        getComponent(sName: string): object;
        /**/
        getDataSource(sName: string): object;
        /**
         * Gets current value of property {@link #getDeferCreation deferCreation}.
         *
         * Default value is `false`.
         */
        getDeferCreation(): boolean;
        /**
         * Gets current value of property {@link #getDeployment deployment}.
         *
         * Default value is `'bw'`.
         */
        getDeployment(): string;
        /**
         * Gets current value of property {@link #getDshAppName dshAppName}.
         *
         * Name of the Design Studio application to be opened.
         *
         * Default value is `'0ANALYSIS'`.
         */
        getDshAppName(): string;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Desired height of the Design Studio Control
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getLanguage language}.
         */
        getLanguage(): string;
        /**
         * Returns a metadata object for class sap.zen.dsh.Dsh.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**/
        getPage(): object;
        /**
         * Gets current value of property {@link #getProtocol protocol}.
         */
        getProtocol(): string;
        /**
         * Gets current value of property {@link #getRepoPath repoPath}.
         *
         * Path to application specified by dshAppName
         */
        getRepoPath(): string;
        /**
         * Gets current value of property {@link #getSemanticMappings semanticMappings}.
         */
        getSemanticMappings(): object;
        /**
         * Gets current value of property {@link #getSystemAlias systemAlias}.
         */
        getSystemAlias(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Desired width of the Design Studio Control
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Initialize cross-application navigation state with an AppState object
         */
        initializeAppState(
          /**
           * The AppState object from which to retrieve and apply Application State.
           */
          oOStartupAppState: object,
          /**
           * Simple Javascript object containing name-value pairs of additional navigation state to be mixed in
           */
          oONavParams: object
        ): void;
        /**
         * Initialize cross-application navigation state directly with AppStateData. e.g., when calculated by sap.ui.generic.app.navigation.service.NavigationHandler
         */
        initializeAppStateData(
          /**
           * The AppStateData to apply
           */
          oOStateData: object,
          /**
           * Simple Javascript object containing name-value pairs of additional navigation state to be mixed in
           */
          oONavParams: object
        ): void;
        /**
         * Sets a new value for property {@link #getAppComponent appComponent}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAppComponent(
          /**
           * New value for property `appComponent`
           */
          oAppComponent?: object
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getClient client}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setClient(
          /**
           * New value for property `client`
           */
          sClient?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getDeferCreation deferCreation}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setDeferCreation(
          /**
           * New value for property `deferCreation`
           */
          bDeferCreation?: boolean
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getDeployment deployment}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'bw'`.
         */
        setDeployment(
          /**
           * New value for property `deployment`
           */
          sDeployment?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getDshAppName dshAppName}.
         *
         * Name of the Design Studio application to be opened.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'0ANALYSIS'`.
         */
        setDshAppName(
          /**
           * New value for property `dshAppName`
           */
          sDshAppName?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Desired height of the Design Studio Control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight?: sap.ui.core.CSSSize
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getLanguage language}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLanguage(
          /**
           * New value for property `language`
           */
          sLanguage?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getProtocol protocol}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setProtocol(
          /**
           * New value for property `protocol`
           */
          sProtocol?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getRepoPath repoPath}.
         *
         * Path to application specified by dshAppName
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRepoPath(
          /**
           * New value for property `repoPath`
           */
          sRepoPath?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getSemanticMappings semanticMappings}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSemanticMappings(
          /**
           * New value for property `semanticMappings`
           */
          oSemanticMappings?: object
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getSystemAlias systemAlias}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSystemAlias(
          /**
           * New value for property `systemAlias`
           */
          sSystemAlias?: string
        ): sap.zen.dsh.Dsh;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Desired width of the Design Studio Control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth?: sap.ui.core.CSSSize
        ): sap.zen.dsh.Dsh;
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/zen/dsh/AnalyticGrid": undefined;

    "sap/zen/dsh/Dsh": undefined;
  }
}
