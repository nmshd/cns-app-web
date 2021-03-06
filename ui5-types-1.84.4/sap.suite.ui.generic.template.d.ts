// For Library Version: 1.84.2

declare namespace sap {
  namespace suite {
    namespace ui {
      namespace generic {
        /**
         * Library with generic Suite UI templates.
         */
        namespace template {
          namespace AnalyticalListPage {
            /**
             * This class contains all extension functions that have been defined for the AnalyticalListPage floorplan.
             */
            namespace controllerFrameworkExtensions {
              /**
               * This method can be called before external navigation to modify the target app info i.e. semanticObject
               * and action along with the SelectionVariant to be passed.
               */
              function adaptNavigationParameterExtension(
                /**
                 * The SelectionVariant.
                 */
                oSelectionVariant: sap.ui.generic.app.navigation.service.SelectionVariant,
                /**
                 * The object storing target app info.
                 */
                oObjectInfo: object
              ): void;
              /**
               * This method can be used to customize transient messages.
               */
              function adaptTransientMessageExtension(): void;
              /**
               * The content of the custom field shall be stored in the app state, so that it can be restored later. For
               * example, after a back navigation. The developer has to ensure that the content of the field is stored
               * in the object that is returned by this method.
               */
              function getCustomAppStateDataExtension(
                /**
                 * The object storing the custom data.
                 */
                oCustomData: object
              ): void;
              /**
               * This method is used to return an array of all selection fields in the SmartFilterBar for which defaults
               * are defined (see method `setSmartFilterBarDefaults) and which are currently visible. This is required
               * by _getBackNavigationParameters` in the NavigationController.
               */
              function getVisibleSelectionsWithDefaults(): any;
              /**
               * This method can be used to modify the SelectionVariant of the SmartFilterBar when launching the app.
               */
              function modifyStartupExtension(
                /**
                 * oStartupObject.selectionVariant used to modify the SelectionVariant.
                 */
                oStartupObject: object
              ): void;
              /**
               * This method called before the chart rebind can be used to define app-specific logic before the chart
               * is rendered. This allows for binding additional parameters, such as custom filters or chart queries.
               */
              function onBeforeRebindChartExtension(
                /**
                 * The {@link sap.ui.comp.smartchart.SmartChart.prototype.event:beforeRebindChart} event.
                 */
                oEvent: sap.ui.base.Event
              ): void;
              /**
               * This method called before a filterable KPI rebind can be used to modify the existing filters or parameter
               * values or custom filters for a filterable KPI.
               */
              function onBeforeRebindFilterableKPIExtension(
                /**
                 * The SelectionVariant.
                 */
                oSelectionVariant: sap.ui.generic.app.navigation.service.SelectionVariant,
                /**
                 * The filterable KPI's entity type.
                 */
                sEntityType: string,
                /**
                 * The filterable KPI's Id.
                 */
                sKPIId: string
              ): void;
              /**
               * This method called before the table rebind can be used to define app-specific logic before the table
               * is rendered. This allows for binding additional parameters from custom filters to the table query.
               */
              function onBeforeRebindTableExtension(
                /**
                 * The {@link sap.ui.comp.smarttable.SmartTable.prototype.event:beforeRebindTable} event.
                 */
                oEvent: sap.ui.base.Event
              ): void;
              /**
               * This method called before a visual filter rebind can be used to modify custom filter/parameter values
               * to the visual filter, add a custom query parameter to the visual filter call or influence the sorting
               * order of the visual filter. In this extension, app developer can aso access incoming navigation context
               * of the app through `getNavigationContext` API.
               */
              function onBeforeRebindVisualFilterExtension(
                /**
                 * The visual filter entity type.
                 */
                sEntityType: string,
                /**
                 * The visual filter dimension.
                 */
                sDimension: string,
                /**
                 * The visual filter measure.
                 */
                sMeasure: string,
                /**
                 * The context to modify for the custom filter/parameter, query parameter or sort order.
                 */
                oContext: {
                  /**
                   * The object can be modified for the entity set parameters to be applied to the visual filter call.
                   */
                  entityParameters: object;
                  /**
                   * The object can be modified for the custom query parameters to be applied to the visual filter call.
                   */
                  queryParameter: object;
                  /**
                   * The combined filter array can be modified by users to influence the filters applied to the visual filter
                   * call.
                   */
                  filters: sap.ui.model.Filter[];
                  /**
                   * The combined sorter array can be modified by users to influence the sorting order of the visual filter.
                   */
                  sorters: sap.ui.model.Sorter[];
                }
              ): void;
              /**
               * This method is needed to define the logic to handle the clear event for custom filters. This method is
               * triggered by ALP when the Clear button is pressed on the filter bar or the filter dialog, which clears
               * all filter dimensions.
               */
              function onClearFilterExtension(
                /**
                 * The press event fired when the Clear button is pressed.
                 */
                oEvent: sap.ui.base.Event
              ): void;
              /**
               * The custom field in the SmartFilterBar may be bound to a custom data model. Should a value change in
               * these field trigger a follow up action, this method is the place to define and bind an event handler
               * to the custom field. This method is triggered by ALP when the SmartFilterBar is initialized.
               */
              function onInitSmartFilterBarExtension(
                /**
                 * The initialise event of the SmartFilterBar.
                 */
                oEvent: sap.ui.base.Event
              ): void;
              /**
               * This method can be used to perform conditional (internal or external) navigation from different rows
               * of the SmartTable based on the context available in the selected table record. Such custom navigation
               * should be triggered via corresponding methods of {@link sap.suite.ui.generic.template.extensionAPI.NavigationController}.
               */
              function onListNavigationExtension(
                /**
                 * The press event fired when navigating from a row in the SmartTable. It is recommended to ignore this
                 * parameter and use `oBindingContext` instead.
                 */
                oEvent: sap.ui.base.Event,
                /**
                 * The context of the corresponding table row.
                 */
                oBindingContext: sap.ui.model.Context,
                /**
                 * This parameter should be considered if the method triggers an internal navigation. Pass this parameter
                 * to `oNavigationData.replaceInHistory` in this case.
                 */
                bReplaceInHistory: boolean
              ): undefined;
              /**
               * This method can be used to let the app decide the URL to be used for dynamic tiles. This method is called
               * when Save as Tile is clicked.
               */
              function onSaveAsTileExtension(
                /**
                 * The tile info object.
                 */
                oShareInfo: object
              ): void;
              /**
               * This method is needed in order to restore the content of the custom field in the SmartFilterBar. For
               * example, after a back navigation, an object with the content is handed over to this method and the develper
               * has to ensure that the content of the custom field is set accordingly. Also, empty properties have to
               * be set.
               */
              function restoreCustomAppStateDataExtension(
                /**
                 * The object storing the custom data.
                 */
                oCustomdata: object
              ): void;
            }

            namespace extensionAPI {
              class ExtensionAPI extends sap.ui.base.Object {
                /**
                 * API to be used in extensions of AnalyticalListPage. Breakout coding can access an instance of this class
                 * via `this.extensionAPI`. Do not instantiate yourself.
                 */
                constructor();

                /**
                 * Attaches a control to the current View. Should be called whenever a new control is created and used in
                 * the context of this view. This applies especially for dialogs, action sheets, popovers, ... This method
                 * cares for defining dependency and handling device specific style classes
                 */
                attachToView(
                  /**
                   * the control to be attached to the view
                   */
                  oControl: sap.ui.core.Control
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.AnalyticalListPage.extensionAPI.ExtensionAPI
                 * with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Returns a metadata object for class sap.suite.ui.generic.template.AnalyticalListPage.extensionAPI.ExtensionAPI.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * provides incoming navigation context of the app
                 */
                getNavigationContext(): Object;
                /**
                 * Get the navigation controller for navigation actions
                 */
                getNavigationController(): sap.suite.ui.generic.template.extensionAPI.NavigationController;
                /**
                 * Get the list entries currently selected
                 */
                getSelectedContexts(
                  /**
                   * the id identifying the ui element the selected context is requested for
                   */
                  sUiElementId: string
                ): sap.ui.model.Context[];
                /**
                 * This method should be called when any custom ui state handled by the getCustomAppStateDataExtension method
                 * changes. Note that changes applied to custom filters need not to be propagated this way, since the change
                 * event of the SmartFilterBar will automatically be handled by the smart template framework.
                 */
                onCustomAppStateChange(): void;
                /**
                 * Triggers rebinding on the list
                 */
                rebindTable(): void;
                /**
                 * Refreshes All controls in ALP
                 */
                refresh(): void;
                /**
                 * Refreshes the SmartTable
                 */
                refreshTable(): void;
                /**
                 * Secured execution of the given function. Ensures that the function is only executed when certain conditions
                 * are fulfilled.
                 * See:
                 * 	{@link topic:6a39150ad3e548a8b5304d32d560790a Using the SecuredExecutionMethod}
                 */
                securedExecution(
                  /**
                   * The function to be executed. Should return a promise that is settled after completion of the execution.
                   * If nothing is returned, immediate completion is assumed.
                   */
                  fnFunction: Function,
                  /**
                   * Parameters to define the preconditions to be checked before execution
                   */
                  mParameters?: {
                    /**
                     * Parameters regarding busy indication
                     */
                    busy?: {
                      /**
                       * Triggers a busy indication during function execution. Can be set to false in case of immediate completion.
                       */
                      set?: boolean;
                      /**
                       * Checks whether the application is currently busy. Function is only executed if not. Has to be set to
                       * false, if function is not triggered by direct user interaction, but as result of another function, that
                       * set the application busy.
                       */
                      check?: boolean;
                    };

                    /**
                     * Parameters regarding dataloss prevention
                     */
                    dataloss?: {
                      /**
                       * Provides a dataloss popup before execution of the function if needed (i.e. in non-draft case when model
                       * or registered methods contain pending changes).
                       */
                      popup?: boolean;
                      /**
                       * Indicates that execution of the function leads to a navigation, i.e. leaves the current page, which induces
                       * a slightly different text for the dataloss popup.
                       */
                      navigation?: boolean;
                    };

                    /**
                     * Tells the framework that objects will be deleted by `fnFunction`. Use the BindingContextPath as a key
                     * for the map. Fill the map with a `Promise` for each object which is to be deleted. The `Promise` must
                     * resolve after the deletion of the corresponding object or reject if the deletion is not successful.
                     */
                    mConsiderObjectsAsDeleted?: any;
                    /**
                     * In case of custom actions, the title of the message popup is set to sActionLabel.
                     */
                    sActionLabel?: string;
                  }
                ): any;
              }
            }
          }

          namespace Canvas {
            namespace extensionAPI {
              class ExtensionAPI extends sap.ui.base.Object {
                /**
                 * API to be used in extensions of Canvas. Breakout coding can access an instance of this class via `this.extensionAPI`.
                 * Do not instantiate yourself.
                 */
                constructor();

                /**
                 * Can be used to add the standard footer bar for detail pages to this canvas page. It also allows to pass
                 * an array of buttons to be added to the footer. Note that the usage of the standard footer bar must have
                 * been switched on in the settings of the page
                 */
                addFooterBarToPage(
                  /**
                   * the page the standard footer bar should be set for
                   */
                  oPage: sap.m.Page | sap.uxap.ObjectPageLayout,
                  /**
                   * an array of controls(for example; Buttons) to be added to the footer.
                   */
                  aActions: any[]
                ): void;
                /**
                 * Attach a handler to the PageDataLoaded event. This event is fired each time the object page is navigated
                 * to or the object to be displayed is changed Note, that the event will not be fired before:
                 * the navigation to the page has been completed the header data of the object are available
                 */
                attachPageDataLoaded(
                  /**
                   * the handler function. Note that the event passed to this function possesses an attribute `context` which
                   * contains the current header context
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attaches a control to the current View. Should be called whenever a new control is created and used in
                 * the context of this view. This applies especially for dialogs, action sheets, popovers, ... This method
                 * cares for defining dependency and handling device specific style classes
                 */
                attachToView(
                  /**
                   * the control to be attached to the view
                   */
                  oControl: sap.ui.core.Control
                ): void;
                /**
                 * Detach a handler from the PageDataLoaded event
                 */
                detachPageDataLoaded(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.Canvas.extensionAPI.ExtensionAPI with name
                 * `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Get the Flexible Column Layout Action Buttons(Fullscreen, Exit Fullscreen and Close).
                 */
                getFlexibleColumnLayoutActionButtons(): object;
                /**
                 * Returns a metadata object for class sap.suite.ui.generic.template.Canvas.extensionAPI.ExtensionAPI.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * Get the navigation controller for navigation actions
                 */
                getNavigationController(): sap.suite.ui.generic.template.extensionAPI.NavigationController;
                /**
                 * Get the transaction controller for editing actions on the page. Note that the methods provided by this
                 * transaction controller depend on whether the object supports drafts or not.
                 */
                getTransactionController():
                  | sap.suite.ui.generic.template.ObjectPage.extensionAPI.DraftTransactionController
                  | sap.suite.ui.generic.template.ObjectPage.extensionAPI.NonDraftTransactionController;
                /**
                 * Invokes multiple time the action with the given name and submits changes to the back-end.
                 */
                invokeActions(
                  /**
                   * The name of the function or action
                   */
                  sFunctionName: string,
                  /**
                   * The given binding contexts
                   */
                  vContext: any[] | sap.ui.model.Context,
                  /**
                   * The URL parameters (name-value pairs) for the function or action. This is not in oSettings for backward
                   * compatibility
                   */
                  mUrlParameters: any,
                  /**
                   * Parameters which are used to set patameters for involing Application controller's incokeActions method
                   */
                  oSettings: {
                    /**
                     * determined whether common or unique changeset will be sent in batch
                     */
                    bInvocationGroupingChangeSet: boolean;
                  }
                ): any;
                /**
                 * Call this method to indicate that the state of custom controls has changed. This is only necessary when
                 * methods `stGetCurrentState` and `stApplyState` have been implemented by the reuse component in the Canvas
                 * page, such that the corresponding state can be stored and restored.
                 */
                onCustomStateChange(): void;
                /**
                 * Allow parent components to be refreshed on next activation
                 */
                refreshAncestors(
                  /**
                   * Number of parent components to be refreshed 1 - Refresh the immediate parent component Undefined or faulty
                   * - Refresh all parent components
                   */
                  iLevel: number
                ): void;
                /**
                 * Registers a filter provider for the the message popover
                 */
                registerMessageFilterProvider(
                  /**
                   * function which will be called each time a new context is set for the object page. The function should
                   * return an instance of sap.ui.model.Filter, an array of sap.ui.model.Filter or a Promise which resolves
                   * to one of these.
                   */
                  fnProviderCallback: Function
                ): void;
                /**
                 * Secured execution of the given function. Ensures that the function is only executed when certain conditions
                 * are fulfilled.
                 * See:
                 * 	{@link topic:6a39150ad3e548a8b5304d32d560790a Using the SecuredExecutionMethod}
                 */
                securedExecution(
                  /**
                   * The function to be executed. Should return a promise that is settled after completion of the execution.
                   * If nothing is returned, immediate completion is assumed.
                   */
                  fnFunction: Function,
                  /**
                   * Parameters to define the preconditions to be checked before execution
                   */
                  mParameters?: {
                    /**
                     * Parameters regarding busy indication
                     */
                    busy?: {
                      /**
                       * Triggers a busy indication during function execution. Can be set to false in case of immediate completion.
                       */
                      set?: boolean;
                      /**
                       * Checks whether the application is currently busy. Function is only executed if not. Has to be set to
                       * false, if function is not triggered by direct user interaction, but as result of another function, that
                       * set the application busy.
                       */
                      check?: boolean;
                    };

                    /**
                     * Parameters regarding dataloss prevention
                     */
                    dataloss?: {
                      /**
                       * Provides a dataloss popup before execution of the function if needed (i.e. in non-draft case when model
                       * or registered methods contain pending changes).
                       */
                      popup?: boolean;
                      /**
                       * Indicates that execution of the function leads to a navigation, i.e. leaves the current page, which induces
                       * a slightly different text for the dataloss popup.
                       */
                      navigation?: boolean;
                    };

                    /**
                     * Tells the framework that objects will be deleted by `fnFunction`. Use the BindingContextPath as a key
                     * for the map. Fill the map with a `Promise` for each object which is to be deleted. The `Promise` must
                     * resolve after the deletion of the corresponding object or reject if the deletion is not successful.
                     */
                    mConsiderObjectsAsDeleted?: any;
                    /**
                     * In case of custom actions, the title of the message popup is set to sActionLabel.
                     */
                    sActionLabel?: string;
                  }
                ): any;
                /**
                 * Invokes multiple time the action with the given name and submits changes to the back-end.
                 */
                invokeActions(
                  /**
                   * The name of the function or action
                   */
                  sFunctionName: string,
                  /**
                   * The given binding contexts
                   */
                  vContext: any[] | sap.ui.model.Context,
                  /**
                   * Parameters which are used to set patameters for involing Application controller's incokeActions method
                   */
                  oSettings: {
                    /**
                     * determined whether common or unique changeset will be sent in batch
                     */
                    bInvocationGroupingChangeSet: boolean;
                  }
                ): any;
              }
            }
          }

          namespace extensionAPI {
            /**
             * Static access to extension API for Smart Template Application development
             */
            namespace extensionAPI {
              /**
               * Get the extension API valid for the specified control embedded in a SAP Fiori elements view. Note that
               * extension API can also be retrieved directly from the controller of the SAP Fiori elements view. Therefore,
               * this method only needs to be called in scenarios where this controller is not directly accessible. The
               * most prominent use case for this would be the context of a controller of a view extension. In this case,
               * it is recommended to pass the extending view to this method.
               *  Note that this method does not return the extension API directly, but a Promise that resolves to the
               * extension API. Thus, a typical use of this method might look as follows:
               *  `sap.ui.define(["sap/suite/ui/generic/template/extensionAPI/extensionAPI"], function(extensionAPI){
               *  ...
               *  extensionAPI.getExtensionAPIPromise(oView).then(function(oExtensionAPI){
               *  oExtensionAPI.someMethod();
               *  });
               *  ...
               *  });`
               */
              function getExtensionAPIPromise(
                /**
                 * a control which is embedded into a SAP Fiori elements view.
                 */
                oControl: sap.ui.core.Control
              ): any;
              /**
               * This method can be used to define specific controller extension(s) for a template which is used more
               * than once within a SAP Fiori elements application. More precisely: In the manifest of a SAP Fiori elements
               * application, you can register a controller extension. This controller extension is defined at `sap.ui5/extends/extensions/sap.ui.controllerExtensions/{template}`.
               * This means that {template} identifies the template to be extended, e.g. `sap.suite.ui.generic.template.ObjectPage.view.Details`
               * for the standard object page. Property controllerName of the manifest entry specifies the controller
               * extension to be used. Even if the same template is used more than once, this single controller extension
               * will be instantiated once for each page based on this template. As a consequence, the extension code
               * for all these pages needs to be collected in one controller extension, which results in code that is
               * difficult to maintain.
               *  `registerControllerExtensions` provides a tool to distribute the extension code according to pages they
               * are actually used on.
               *  To use this tool, you should create separate classes implementing the logic for each single page.
               *  All event handlers and formatters used in the view extensions of the corrsponding page should be defined
               * as public instance methods of this class. The same applies to all extension functions that should be
               * overridden by extension code. Each of these classes can contain an optional method `onInit(oController)`.
               *
               *  This method can be used to initialize the class as usual. Moreover, it is possible to store `oController`
               * in a member variable. This variable can be used whenever standard controller functionality is needed
               * (e.g. `oController.byId()` or `oController.extensionAPI`.
               *  In the definition of the controller extension specified in the manifest, simply call `registerControllerExtensions`.
               */
              function registerControllerExtensions(
                /**
                 * the name of the controller extension as specified in the manifest
                 */
                sControllerExtensionName: undefined,
                /**
                 * a map. As a key, use the name of the entity set for which the (controller of the) page should be extended.
                 * As a value, use an instance of the corresponding class as described above.
                 */
                mEntitySetToImplementation: undefined
              ): void;
            }
            /**
             * Static access to a function that allows a regular UIComponent to be used as a Reuse Component within
             * SmartTemplate applications
             */
            namespace ReuseComponentSupport {
              /**
               * Mixin function to transform a regular UIComponent instance into a reuse component for smart templates
               *
               * By using the mixInto method the existing component is checked if it implements the following functions:
               *
               * 	 - `stStart(oModel, oBindingContext, oExtensionAPI)` - is called when the model and the context is set
               * 			for the first time above the compoenent
               * 	 - `stRefresh(oModel, oBindingContext, oExtensionAPI)` - is called everytime a new context is set above
               * 			the component or the page context is forced to be refreshed  Note that both functions can be called
               * 			with `oBindingContext` being empty. This happens in case the page the component is positioned on is opened
               * 			for creating a new object in a non-draft scenario.
               */
              function mixInto(
                /**
                 * the component to be transformed. The following restrictions apply to this component:
                 * 	The object must not define or access any properties or methods starting with `_st`. This namespace is
                 * reserved for smart template specific coding. The object must not define any property or method starting
                 * with `st` with the exception of the methods described above.
                 */
                oComponent: sap.ui.core.UIComponent,
                /**
                 * if this paramater is truthy a JSON model will created that contains the properties defined in the meatdata
                 * of `oComponent`. The model will be attached to the component with the given name. Moreover, a method
                 * `getComponentModel` will be added to `oComponent` giving access to this model. The properties in the
                 * component model will be automatically synced with the corresponding properties of `oComponent`.
                 */
                sComponentModelName?: string,
                /**
                 * This parameters specifies the synchronisation between the properties of the component and the corresponding
                 * properties of the component model.
                 *  Changes applied to a property of the component will always be forwarded to the corresponding property
                 * of the component model.
                 *  Changes applied to a property of the component model which corresponds to a property of the component
                 * will only be forwarded accordingly if the parameter `bTwoWaySync` is truthy.
                 */
                bTwoWaySync?: boolean
              ): void;
            }

            class NavigationController extends sap.ui.base.Object {
              /**
               * API to be used for navigation in extensions of Smart Template Applications. Breakout coding can access
               * an instance of this class via {@link sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI}
               * or {@link sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI}. Do not instantiate yourself.
               */
              constructor();

              /**
               * Creates a new subclass of class sap.suite.ui.generic.template.extensionAPI.NavigationController with
               * name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
               * Returns a metadata object for class sap.suite.ui.generic.template.extensionAPI.NavigationController.
               */
              // @ts-ignore
              static getMetadata(): sap.ui.base.Metadata;
              /**
               * Navigates to the given intent
               */
              navigateExternal(
                /**
                 * The name of the outbound defined in the manifest
                 */
                sOutbound: string,
                /**
                 * map with parameters for the navigation. If no parameters are provided, default are the parameters defined
                 * in the manifest
                 */
                mParameters?: object
              ): void;
              /**
               * Triggers a navigation to another page within the application
               */
              navigateInternal(
                /**
                 * The target context for the navigation. vContext as String, to navigate to specified target vContext as
                 * Array [hierarchyOfContext] target context being the last context of hierarchyOfContext E.g to directly
                 * navigate from LR to Sub object page, the hierarchyOfContext would be [contextOfMainObjectPage, contextOfSubObjectPage]
                 * vContext as sap.ui.model.Context if only one context has to be passed, send it as an Object instead of
                 * Array, to navigate to specified Target If the parameter is faulty (and oNavigationData does not specify
                 * a route itself) the root page of the app is considered to be the target of the application.
                 */
                vContext:
                  | sap.ui.model.Context
                  | String
                  | sap.ui.model.Context[],
                /**
                 * object containing navigation data
                 */
                oNavigationData?: {
                  /**
                   * The navigation property identifying the target of the navigation
                   */
                  navigationProperty?: string;
                  /**
                   * If this is truthy the page navigated to will replace the current page in the browser history
                   */
                  replaceInHistory?: boolean;
                }
              ): void;
            }
          }

          namespace ListReport {
            /**
             * This class contains all extension functions that have been defined for the ListReport floorplan.
             */
            namespace controllerFrameworkExtensions {
              /**/
              function adaptNavigationParameterExtension(): void;
              /**/
              function adaptTransientMessageExtension(): void;
              /**/
              function beforeDeleteExtension(): void;
              /**/
              function getCustomAppStateDataExtension(): void;
              /**/
              function getPredefinedValuesForCreateExtension(): void;
              /**/
              function getVisibleSelectionsWithDefaults(): void;
              /**/
              function modifyStartupExtension(): void;
              /**/
              function onBeforeRebindChartExtension(): void;
              /**/
              function onBeforeRebindTableExtension(): void;
              /**/
              function onInitSmartFilterBarExtension(): void;
              /**
               * This method can be used to perform conditional (internal or external) navigation from different rows
               * of the SmartTable based on the context available in the selected table record. Such custom navigation
               * should be triggered via corresponding methods of {@link sap.suite.ui.generic.template.extensionAPI.NavigationController}.
               */
              function onListNavigationExtension(
                /**
                 * The press event fired when navigating from a row in the SmartTable. It is recommended to ignore this
                 * parameter and use `oBindingContext` instead.
                 */
                oEvent: sap.ui.base.Event,
                /**
                 * The context of the corresponding table row.
                 */
                oBindingContext: sap.ui.model.Context,
                /**
                 * This parameter should be considered if the method triggers an internal navigation. Pass this parameter
                 * to `oNavigationData.replaceInHistory` in this case.
                 */
                bReplaceInHistory: boolean
              ): undefined;
              /**/
              function onSaveAsTileExtension(): void;
              /**/
              function restoreCustomAppStateDataExtension(): void;
            }

            namespace extensionAPI {
              class ExtensionAPI extends sap.ui.base.Object {
                /**
                 * API to be used in extensions of ListReport. Breakout coding can access an instance of this class via
                 * `this.extensionAPI`. Do not instantiate yourself.
                 */
                constructor();

                /**
                 * Attaches a control to the current View. Should be called whenever a new control is created and used in
                 * the context of this view. This applies especially for dialogs, action sheets, popovers, ... This method
                 * cares for defining dependency and handling device specific style classes
                 */
                attachToView(
                  /**
                   * the control to be attached to the view
                   */
                  oControl: sap.ui.core.Control
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI with
                 * name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Returns a metadata object for class sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * Get the navigation controller for navigation actions
                 */
                getNavigationController(): sap.suite.ui.generic.template.extensionAPI.NavigationController;
                /**
                 * @EXPERIMENTAL
                 *
                 * If switching between different table views is enabled, this function returns the selected key.
                 */
                getQuickVariantSelectionKey(): string;
                /**
                 * Get the list entries currently selected
                 */
                getSelectedContexts(): sap.ui.model.Context[];
                /**
                 * Get the transaction controller for editing actions on the list. Note: Currently implemented for non draft
                 * case
                 */
                getTransactionController(): sap.suite.ui.generic.template.ListReport.extensionAPI.NonDraftTransactionController;
                /**
                 * Invokes multiple time the action with the given name and submits changes to the back-end.
                 */
                invokeActions(
                  /**
                   * The name of the function or action
                   */
                  sFunctionName: string,
                  /**
                   * The given binding contexts
                   */
                  vContext: any[] | sap.ui.model.Context,
                  /**
                   * The URL parameters (name-value pairs) for the function or action. This is not in oSettings for backward
                   * compatibility
                   */
                  mUrlParameters: any,
                  /**
                   * Parameters which are used to set patameters for involing Application controller's incokeActions method
                   */
                  oSettings: {
                    /**
                     * determined whether common or unique changeset will be sent in batch
                     */
                    bInvocationGroupingChangeSet: boolean;
                  }
                ): any;
                /**
                 * This method should be called when any custom ui state handled by the get/restoreCustomAppStateDataExtension-methods
                 * changes. Note that changes applied to custom filters need not to be propagated this way, since the change
                 * event of the SmartFilterBar will automatically be handled by the smart template framework.
                 */
                onCustomAppStateChange(): void;
                /**
                 * Triggers rebinding on the list.
                 *  Note that in a multi table tab scenarios the situation is more complex: By default the rebinding is
                 * performed on all tabs as soon as they get visible the next time (immediately for the already visible
                 * one). This applies to charts as well as tables.
                 *  Optional parameter `vTabKey` can be used to restrict the set of affected tabs.
                 */
                rebindTable(
                  /**
                   * in multiple table tab scenario keys for the tables that should be rebound
                   */
                  vTabKey?: any[] | string
                ): void;
                /**
                 * Refreshes the List from the backend Note that in a multi table tab scenarios the situation is more complex:
                 * By default the refresh is performed on all tabs as soon as they get visible the next time (immediately
                 * for the already visible one). This applies to charts as well as tables.
                 *  Optional parameter `vTabKey` can be used to restrict the set of affected tabs.
                 */
                refreshTable(
                  /**
                   * in multiple table tab scenario keys for the tables that should be refreshed
                   */
                  vTabKey?: any[] | string
                ): void;
                /**
                 * Secured execution of the given function. Ensures that the function is only executed when certain conditions
                 * are fulfilled. For more information, see {@link topic:6a39150ad3e548a8b5304d32d560790a Using the SecuredExecutionMethod}.
                 */
                securedExecution(
                  /**
                   * The function to be executed. Should return a promise that is settled after completion of the execution.
                   * If nothing is returned, immediate completion is assumed.
                   */
                  fnFunction: Function,
                  /**
                   * Parameters to define the preconditions to be checked before execution
                   */
                  mParameters?: {
                    /**
                     * Parameters regarding busy indication
                     */
                    busy?: {
                      /**
                       * Triggers a busy indication during function execution. Can be set to false in case of immediate completion.
                       */
                      set?: boolean;
                      /**
                       * Checks whether the application is currently busy. Function is only executed if not. Has to be set to
                       * false, if function is not triggered by direct user interaction, but as result of another function, that
                       * set the application busy.
                       */
                      check?: boolean;
                    };

                    /**
                     * Parameters regarding dataloss prevention
                     */
                    dataloss?: {
                      /**
                       * Provides a dataloss popup before execution of the function if needed (i.e. in non-draft case when model
                       * or registered methods contain pending changes).
                       */
                      popup?: boolean;
                      /**
                       * Indicates that execution of the function leads to a navigation, i.e. leaves the current page, which induces
                       * a slightly different text for the dataloss popup.
                       */
                      navigation?: boolean;
                    };

                    /**
                     * Tells the framework that objects will be deleted by `fnFunction`. Use the BindingContextPath as a key
                     * for the map. Fill the map with a `Promise` for each object which is to be deleted. The `Promise` must
                     * resolve after the deletion of the corresponding object or reject if the deletion is not successful.
                     */
                    mConsiderObjectsAsDeleted?: any;
                    /**
                     * In case of custom actions, the title of the message popup is set to sActionLabel.
                     */
                    sActionLabel?: string;
                  }
                ): any;
                /**
                 * @EXPERIMENTAL
                 *
                 * If switching between different table views is enabled, this function sets the selected key.
                 */
                setQuickVariantSelectionKey(
                  /**
                   * The key of the variant item that is currently selected.
                   */
                  sKey: string
                ): void;
                /**
                 * Invokes multiple time the action with the given name and submits changes to the back-end.
                 */
                invokeActions(
                  /**
                   * The name of the function or action
                   */
                  sFunctionName: string,
                  /**
                   * The given binding contexts
                   */
                  vContext: any[] | sap.ui.model.Context,
                  /**
                   * Parameters which are used to set patameters for involing Application controller's incokeActions method
                   */
                  oSettings: {
                    /**
                     * determined whether common or unique changeset will be sent in batch
                     */
                    bInvocationGroupingChangeSet: boolean;
                  }
                ): any;
              }

              class NonDraftTransactionController extends sap.ui.base.Object {
                /**
                 * Non draft transaction controller to be used in extensions of ListReport. Breakout coding can access an
                 * instance of this class via `ExtensionAPI.getTransactionController`. Do not instantiate yourself.
                 *
                 * Note: Only one object can be edited at a given point in time.
                 */
                constructor();

                /**
                 * Cancel editing
                 */
                cancel(): void;
                /**
                 * This method can be called when a new entry with predefined values should be created (e.g. in a copy scenario).
                 */
                createEntry(
                  /**
                   * an object containing predefined values for the new entity (see parameter `mParameters.properties` of
                   * {@link sap.ui.model.odata.v2.ODataModel#createEntry} for details)
                   */
                  vPredefinedValues: undefined,
                  /**
                   * this parameter only needs to be used in multi entitySet scenarios, in order to specify another entity
                   * set than the main entity set of the ListReport
                   */
                  sEntitySet?: string
                ): sap.ui.model.Context;
                /**
                 * Start editing one list entry
                 */
                edit(
                  /**
                   * the context identifying the entry to be edited
                   */
                  oContext: sap.ui.model.Context
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.ListReport.extensionAPI.NonDraftTransactionController
                 * with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Returns a metadata object for class sap.suite.ui.generic.template.ListReport.extensionAPI.NonDraftTransactionController.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * Save the changes which have been applied to the OData model. Sets the application busy during execution
                 * and doesn't execute if application is already busy when called (i.e. don't use `ExtensionAPI.securedExecution`
                 * to call this method).
                 */
                save(): any;
              }
            }
          }

          namespace ObjectPage {
            /**
             * This class contains all extension functions that have been defined for the ObjectPage floorplan.
             */
            namespace controllerFrameworkExtensions {
              /**/
              function adaptNavigationParameterExtension(): void;
              /**/
              function adaptTransientMessageExtension(): void;
              /**/
              function applyCustomStateExtension(): void;
              /**/
              function beforeDeleteExtension(): void;
              /**/
              function beforeLineItemDeleteExtension(): void;
              /**/
              function beforeSaveExtension(): void;
              /**
               * This method can be used to influence the data retrieval for tables on the object page.
               */
              function onBeforeRebindTableExtension(
                /**
                 * the {@link sap.ui.comp.smarttable.SmartTable.prototype.event:beforeRebindTable} event. Use `getSource()`
                 * to retrieve the {@link sap.ui.comp.smarttable.SmartTable} for which the event was triggered. Use parameter
                 * bindingParams to get access to the binding parameters.
                 */
                oEvent: sap.ui.base.Event
              ): void;
              /**
               * This method can be used to perform conditional (internal or external) navigation from different rows
               * of the SmartTable based on the context available in the selected table record. Such custom navigation
               * should be triggered via corresponding methods of {@link sap.suite.ui.generic.template.extensionAPI.NavigationController}.
               */
              function onListNavigationExtension(
                /**
                 * The press event fired when navigating from a row in the SmartTable. It is recommended to ignore this
                 * parameter and use `oBindingContext` instead.
                 */
                oEvent: sap.ui.base.Event,
                /**
                 * The context of the corresponding table row.
                 */
                oBindingContext: sap.ui.model.Context,
                /**
                 * This parameter should be considered if the method triggers an internal navigation. Pass this parameter
                 * to `oNavigationData.replaceInHistory` in this case.
                 */
                bReplaceInHistory: boolean
              ): undefined;
              /**/
              function onSaveAsTileExtension(): void;
              /**/
              function provideCustomStateExtension(): void;
            }

            namespace extensionAPI {
              class DraftTransactionController extends sap.ui.base.Object {
                /**
                 * Draft transaction controller to be used in extensions of ObjectPage. Breakout coding can access an instance
                 * of this class via `ExtensionAPI.getTransactionController`. Do not instantiate yourself.
                 */
                constructor();

                /**
                 * Attach a handler to the activate event
                 */
                attachAfterActivate(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attach a handler to the discard event
                 */
                attachAfterCancel(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attach a handler to the delete event
                 */
                attachAfterDelete(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attach a handler to the line item delete event (for smart tables in object page)
                 */
                attachAfterLineItemDelete(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Detach a handler from the activate event
                 */
                detachAfterActivate(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Detach a handler from the discard event
                 */
                detachAfterCancel(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Detach a handler from the delete event
                 */
                detachAfterDelete(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * @EXPERIMENTAL
                 *
                 * Cancel the draft. Note that this method only works when you are on the root of a draft. The normal navigation
                 * which follows the cancellation of a draft is executed. Moreover, note that executing this method will
                 * set the App to be busy. However, it does not ensure, that the method is only called, when the App is
                 * currently unbusy. If you want to ensure that, you have to use {@link sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI#securedExecution}.
                 */
                discardDraft(): Function;
                /**
                 * @EXPERIMENTAL
                 *
                 * checks if side effects exist for the given properties or entities and executes them. if there are pending
                 * changes in the model those pending changes are sent as a patch request with the side effect batch request.
                 * If no source property and no source entity is passed a global side effect is executed
                 */
                executeSideEffects(
                  /**
                   * object containing any of the following properties:
                   */
                  oSideEffects?: {
                    /**
                     * array with property paths
                     */
                    sourceProperties: any[];
                    /**
                     * array with navigation property paths
                     */
                    sourceEntities: any[];
                  }
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.ObjectPage.extensionAPI.DraftTransactionController
                 * with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Returns a metadata object for class sap.suite.ui.generic.template.ObjectPage.extensionAPI.DraftTransactionController.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * Perform a draft saving operation. This method only needs to be used, when more than one OData model is
                 * used to handle the data for the current draft. Using more than one OData models is only sensible, when
                 * more than one OData service is being used to store the data for the object. The Fiori Elements framework
                 * cares for all changes being applied to the standard OData model (even if they are applied within breakouts).
                 * However, if additional OData models are in place the breakout implementation which has introduced these
                 * models also needs to take care for saving the data in these models as soon as possible.
                 *  In these rare cases this method should be used to intergate the saving operation into the general draft
                 * saving process.
                 *  Note that this method may be enhanced in the future in order to introduce a better error handling.
                 */
                saveDraft(
                  /**
                   * function that saves the draft in the additional OData model(s). This method must return a Promise that
                   * is resolved, when the draft saving is finished successfully. Otherwise the Promise should be rejected.
                   */
                  fnFunction: Function
                ): void;
              }

              class ExtensionAPI extends sap.ui.base.Object {
                /**
                 * API to be used in extensions of ObjectPage. Breakout coding can access an instance of this class via
                 * `this.extensionAPI`. Do not instantiate yourself.
                 */
                constructor();

                /**
                 * Attach a handler to the PageDataLoaded event. This event is fired each time the object page is navigated
                 * to or the object to be displayed is changed Note, that the event will not be fired before:
                 * the navigation to the page has been completed the header data of the object are available
                 */
                attachPageDataLoaded(
                  /**
                   * the handler function. Note that the event passed to this function possesses an attribute `context` which
                   * contains the current header context
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attaches a control to the current View. Should be called whenever a new control is created and used in
                 * the context of this view. This applies especially for dialogs, action sheets, popovers, ... This method
                 * cares for defining dependency and handling device specific style classes
                 */
                attachToView(
                  /**
                   * the control to be attached to the view
                   */
                  oControl: sap.ui.core.Control
                ): void;
                /**
                 * Detach a handler from the PageDataLoaded event
                 */
                detachPageDataLoaded(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI with
                 * name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Returns a metadata object for class sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * Get the navigation controller for navigation actions
                 */
                getNavigationController(): sap.suite.ui.generic.template.extensionAPI.NavigationController;
                /**
                 * @EXPERIMENTAL
                 *
                 * This function returns the selected key of selected table of Object Page.
                 */
                getQuickVariantSelectionKey(
                  /**
                   * id of the section in Object Page mentioned in manifest of the application
                   */
                  sSectionKey: string
                ): string;
                /**
                 * Get the entries currently selected in one ui element
                 */
                getSelectedContexts(
                  /**
                   * the id identifying the ui element the selected context is requested for
                   */
                  sUiElementId: string
                ): sap.ui.model.Context[];
                /**
                 * Get the transaction controller for editing actions on the page. Note that the methods provided by this
                 * transaction controller depend on whether the object supports drafts or not.
                 */
                getTransactionController():
                  | sap.suite.ui.generic.template.ObjectPage.extensionAPI.DraftTransactionController
                  | sap.suite.ui.generic.template.ObjectPage.extensionAPI.NonDraftTransactionController;
                /**
                 * Get the id of the view this extension api belongs to
                 */
                getViewId(): string;
                /**
                 * Invokes multiple time the action with the given name and submits changes to the back-end.
                 */
                invokeActions(
                  /**
                   * The name of the function or action
                   */
                  sFunctionName: string,
                  /**
                   * The given binding contexts
                   */
                  vContext: any[] | sap.ui.model.Context,
                  /**
                   * The URL parameters (name-value pairs) for the function or action. This is not in oSettings for backward
                   * compatibility
                   */
                  mUrlParameters: any,
                  /**
                   * Parameters which are used to set patameters for involing Application controller's incokeActions method
                   */
                  oSettings: {
                    /**
                     * determined whether common or unique changeset will be sent in batch
                     */
                    bInvocationGroupingChangeSet: boolean;
                  }
                ): any;
                /**
                 * Call this method to indicate that the state of custom controls has changed. This is only necessary when
                 * methods `provideCustomStateExtension` and `applyCustomStateExtension` have been overridden, such that
                 * the corresponding state can be stored and restored.
                 */
                onCustomStateChange(): any;
                /**
                 * Rebinds the given SmartTable
                 */
                rebind(
                  /**
                   * the id identifying the control to refresh the binding
                   */
                  sUiElementId: string
                ): void;
                /**
                 * Refreshes the specified control from the backend. Currently only supported for tables.
                 */
                refresh(
                  /**
                   * the id identifying the control that should be refeshed. If the parameter is faulty the whole page is
                   * refreshed.
                   */
                  sUiElementId: string
                ): void;
                /**
                 * Allow parent components to be refreshed on next activation
                 */
                refreshAncestors(
                  /**
                   * Number of parent components to be refreshed 1 - Refresh the immediate parent component Undefined or faulty
                   * - Refresh all parent components
                   */
                  iLevel: number
                ): void;
                /**
                 * Registers a filter provider for the the message popover
                 */
                registerMessageFilterProvider(
                  /**
                   * function which will be called each time a new context is set for the object page. The function should
                   * return an instance of sap.ui.model.Filter, an array of sap.ui.model.Filter or a Promise which resolves
                   * to one of these.
                   */
                  fnProviderCallback: Function
                ): void;
                /**
                 * Secured execution of the given function. Ensures that the function is only executed when certain conditions
                 * are fulfilled.
                 * See:
                 * 	{@link topic:6a39150ad3e548a8b5304d32d560790a Using the SecuredExecutionMethod}
                 */
                securedExecution(
                  /**
                   * The function to be executed. Should return a promise that is settled after completion of the execution.
                   * If nothing is returned, immediate completion is assumed.
                   */
                  fnFunction: Function,
                  /**
                   * Parameters to define the preconditions to be checked before execution
                   */
                  mParameters?: {
                    /**
                     * Parameters regarding busy indication
                     */
                    busy?: {
                      /**
                       * Triggers a busy indication during function execution. Can be set to false in case of immediate completion.
                       */
                      set?: boolean;
                      /**
                       * Checks whether the application is currently busy. Function is only executed if not. Has to be set to
                       * false, if function is not triggered by direct user interaction, but as result of another function, that
                       * set the application busy.
                       */
                      check?: boolean;
                    };

                    /**
                     * Parameters regarding dataloss prevention
                     */
                    dataloss?: {
                      /**
                       * Provides a dataloss popup before execution of the function if needed (i.e. in non-draft case when model
                       * or registered methods contain pending changes).
                       */
                      popup?: boolean;
                      /**
                       * Indicates that execution of the function leads to a navigation, i.e. leaves the current page, which induces
                       * a slightly different text for the dataloss popup.
                       */
                      navigation?: boolean;
                    };

                    /**
                     * Tells the framework that objects will be deleted by `fnFunction`. Use the BindingContextPath as a key
                     * for the map. Fill the map with a `Promise` for each object which is to be deleted. The `Promise` must
                     * resolve after the deletion of the corresponding object or reject if the deletion is not successful.
                     */
                    mConsiderObjectsAsDeleted?: any;
                    /**
                     * In case of custom actions, the title of the message popup is set to sActionLabel.
                     */
                    sActionLabel?: string;
                  }
                ): any;
                /**
                 * @EXPERIMENTAL
                 *
                 * This function sets the key in the selected section of the table of Object Page.
                 */
                setQuickVariantSelectionKey(
                  /**
                   * id of the section in Object Page mentioned in manifest of the application
                   */
                  sSectionKey: string,
                  /**
                   * The key of variant item that is currently need to be set.
                   */
                  sKey: string
                ): void;
                /**
                 * Invokes multiple time the action with the given name and submits changes to the back-end.
                 */
                invokeActions(
                  /**
                   * The name of the function or action
                   */
                  sFunctionName: string,
                  /**
                   * The given binding contexts
                   */
                  vContext: any[] | sap.ui.model.Context,
                  /**
                   * Parameters which are used to set patameters for involing Application controller's incokeActions method
                   */
                  oSettings: {
                    /**
                     * determined whether common or unique changeset will be sent in batch
                     */
                    bInvocationGroupingChangeSet: boolean;
                  }
                ): any;
              }

              class NonDraftTransactionController extends sap.ui.base.Object {
                /**
                 * Non Draft transaction controller to be used in extensions of ObjectPage. Breakout coding can access an
                 * instance of this class via `ExtensionAPI.getTransactionController`. Do not instantiate yourself.
                 */
                constructor();

                /**
                 * Attach a handler to the cancel event
                 */
                attachAfterCancel(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attach a handler to the delete event
                 */
                attachAfterDelete(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attach a handler to the line item delete event (for smart tables in object page)
                 */
                attachAfterLineItemDelete(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Attach a handler to the save event
                 */
                attachAfterSave(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * This method can be called when a new entry with predefined values should be created (e.g. in a copy scenario).
                 */
                createEntry(
                  /**
                   * an object containing predefined values for the new entity (see parameter `mParameters.properties` of
                   * {@link sap.ui.model.odata.v2.ODataModel#createEntry} for details)
                   */
                  vPredefinedValues: undefined
                ): sap.ui.model.Context;
                /**
                 * Detach a handler from the cancel event
                 */
                detachAfterCancel(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Detach a handler from the delete event
                 */
                detachAfterDelete(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Detach a handler from the save event
                 */
                detachAfterSave(
                  /**
                   * the handler function
                   */
                  fnFunction: Function
                ): void;
                /**
                 * Creates a new subclass of class sap.suite.ui.generic.template.ObjectPage.extensionAPI.NonDraftTransactionController
                 * with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
                 * Returns a metadata object for class sap.suite.ui.generic.template.ObjectPage.extensionAPI.NonDraftTransactionController.
                 */
                // @ts-ignore
                static getMetadata(): sap.ui.base.Metadata;
                /**
                 * Registers a function that provides information whether there are unsaved custom data
                 *
                 * This method must be used when an extension ui may contain user input that is **not** bound to the standard
                 * OData model of the app. In this case a function must be provided that returns the information whether
                 * the extension ui still contains unsaved user changes.
                 */
                registerUnsavedDataCheckFunction(
                  /**
                   * Callback function returning either true or false
                   */
                  fnHasUnsavedData: Function
                ): void;
              }
            }
          }
        }
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/suite/ui/generic/template/AnalyticalListPage/extensionAPI/ExtensionAPI": undefined;

    "sap/suite/ui/generic/template/Canvas/extensionAPI/ExtensionAPI": undefined;

    "sap/suite/ui/generic/template/extensionAPI/NavigationController": undefined;

    "sap/suite/ui/generic/template/ListReport/extensionAPI/ExtensionAPI": undefined;

    "sap/suite/ui/generic/template/ListReport/extensionAPI/NonDraftTransactionController": undefined;

    "sap/suite/ui/generic/template/ObjectPage/extensionAPI/DraftTransactionController": undefined;

    "sap/suite/ui/generic/template/ObjectPage/extensionAPI/ExtensionAPI": undefined;

    "sap/suite/ui/generic/template/ObjectPage/extensionAPI/NonDraftTransactionController": undefined;
  }
}
