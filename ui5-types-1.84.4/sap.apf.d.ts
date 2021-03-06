// For Library Version: 1.84.0

declare namespace sap {
  /**
   * Analysis Path Framework
   */
  namespace apf {
    /**
     * @deprecated (since 1.23.1) - Use sap.apf.core.constants instead.
     *
     * Constants to be used by APF consumers.
     */
    export const constants: Object;

    namespace base {
      /**
       * Base Component for all APF based applications.
       */
      class Component extends sap.ui.core.UIComponent {
        /**/
        constructor();

        /**
         * Creates the content of the component. A component that extends this component shall call this method.
         */
        // @ts-ignore
        createContent(): sap.ui.core.Control;
        /**
         * Cleanup the Component instance. The component that extends this component should call this method.
         */
        // @ts-ignore
        exit(): void;
        /**
         * Creates a new subclass of class sap.apf.base.Component with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.UIComponent.extend}.
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
         * Returns the instance of the APF API.
         */
        getApi(): sap.apf.Api;
        /**
         * @SINCE 1.38.4
         * @EXPERIMENTAL
         *
         * This function is optional and can be implemented in any extending Component.js. Its return value is an
         * object containing injected constructors, functions, references and exits. The injected sub entities are
         * all optional and will be used by the APF logic when defined. Exits are used to change predefined enhancement
         * points. Instances, functions and constructors are used for test isolation. Probe is used in tests to
         * access internal APF references.
         */
        getInjections(): object;
        /**
         * Returns a metadata object for class sap.apf.base.Component.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ComponentMetadata;
      }
    }

    namespace core {
      /**
       * The message object represents the APF specific message object for detailed evaluation. The message object
       * shall be created by method {@link sap.apf.Api#createMessageObject}.
       */
      class MessageObject {
        /**/
        constructor(oConfig: object);

        /**
         * Returns the calling object
         */
        getCallingObject(): object;
        /**
         * Returns the message code.
         */
        getCode(): string;
        /**
         * Returns the version of jQuery
         */
        getJQueryVersion(): string;
        /**
         * Returns the message text.
         */
        getMessage(): string;
        /**
         * Returns the parameter which were passed over
         */
        getParameters(): any[];
        /**
         * Gets the previous message object.
         */
        getPrevious(): sap.apf.core.MessageObject;
        /**
         * Returns raw text.
         */
        getRawText(): string;
        /**
         * Returns the version of SAP UI5
         */
        getSapUi5Version(): string;
        /**
         * Returns the severity.
         */
        getSeverity(): string;
        /**
         * Returns the stack of the error object to get the line number and source file
         */
        getStack(): string;
        /**
         * Returns the time stamp of the message object in seconds after 1970
         */
        getTimestamp(): number;
        /**
         * Returns the time stamp of the message object as a date
         */
        getTimestampAsdateObject(): Date;
        /**
         * Returns true, if a raw text is set.
         */
        hasRawText(): boolean;
        /**
         * Sets the code, that classifies the message.
         */
        setCode(code: string): undefined;
        /**
         * Sets the message text.
         */
        setMessage(sTextMessage: string): undefined;
        /**
         * Sets the previous message object. One can add a message object to this message object, that describes
         * a previous message. The message in the previous message object will also be displayed in the log (as
         * previous entry).
         */
        setPrevious(
          oPreviousMessageObject: sap.apf.core.MessageObject
        ): undefined;
        /**
         * Sets the severity , which classifies the message.
         */
        setSeverity(
          /**
           * Only for to build in error messages. Allowed values are defined in {@link sap.apf.constants.severity}.
           */
          severity: string
        ): undefined;
      }
      /**
       * Facade for sap.apf.core.Request for getting data via the OData protocol. This corresponds to a normal
       * HTTP GET method. Creation is done via APF API.
       */
      class ReadRequest {
        /**/
        constructor(
          /**
           * Injection object.
           */
          oInject: object,
          /**
           * The object represents an OData GET request.
           */
          oRequest: object,
          /**
           * Service defined by the analytical content configuration.
           */
          sService: string,
          /**
           * Entity type defined by the analytical content configuration.
           */
          sEntityType: string
        );

        /**
         * Returns {sap.apf.core.MetadataFacade} which provides convenience methods for accessing metadata (only
         * for the service document, which is assigned to this read request instance).
         */
        getMetadataFacade(
          /**
           * Service defined by the request configuration.
           */
          sService: string
        ): any;
        /**
         * Executes an OData request.
         */
        send(
          oFilter: sap.apf.utils.Filter | null | undefined,
          /**
           * The first argument of the callback function is the received data (as Array). The second argument is {sap.apf.core.EntityTypeMetadata}.
           * The third argument is {sap.apf.core.MessageObject}.
           */
          fnCallback: Function,
          /**
           * An optional object containing additional query string options Format: { orderby : [{ property : ,
           * order : }], top : , skip :  }
           */
          oRequestOptions: Object
        ): undefined;
      }
      /**
       * Facade for sap.apf.core.Request for getting data via the OData protocol. This corresponds to a normal
       * HTTP GET method. Creation is done via APF API. In addition to the handed over filter argument in method
       * send(), the required filters and parameter entity set key properties of the configured entity type are
       * applied, which are determined from path filter.
       */
      class ReadRequestByRequiredFilter {
        /**/
        constructor(
          /**
           * Injection object.
           */
          oInject: object,
          /**
           * The object represents an OData GET request.
           */
          oRequest: object,
          /**
           * Service defined by the analytical content configuration.
           */
          sService: string,
          /**
           * Entity type defined by the analytical content configuration.
           */
          sEntityType: string
        );

        /**
         * Returns {sap.apf.core.MetadataFacade} which provides convenience methods for accessing metadata (only
         * for the service document, which is assigned to this read request instance).
         */
        getMetadataFacade(
          /**
           * Service defined by the request configuration.
           */
          sService: string
        ): any;
        /**
         * Executes an OData request.
         */
        send(
          oFilter: sap.apf.utils.Filter | null | undefined,
          /**
           * The first argument of the callback function is the received data (as Array). The second argument is {sap.apf.core.EntityTypeMetadata}.
           * The third argument is {sap.apf.core.MessageObject}.
           */
          fnCallback: Function,
          /**
           * An optional object containing additional query string options Format: { orderby : [{ property : ,
           * order : }], top : , skip :  }
           */
          oRequestOptions: Object
        ): undefined;
      }
    }

    namespace ui {
      namespace representations {
        /**
         * @EXPERIMENTAL
         *
         * This is not a runtime class, but it describes the interface that a representation (chart) has to implement
         * for to interact with the APF.
         */
        class representationInterface {
          /**/
          constructor(
            /**
             * specific interface proxy for communication between the representation and APF.
             */
            dependencies: sap.apf.ui.representations.RepresentationInterfaceProxy,
            /**
             * Configuration object that allows to define representation specific configuration values.
             *  Fixed interface property names:
             * 	**alternateRepresentationTypeId**: A reference to a representation type in analytical configuration
             * **alternateRepresentationType**: A property dynamically added to the parameter object by APF core
             * based on reference in alternateRepresentationTypeId and containing configuration values of the representation
             * type ID referenced by alternateRepresentationTypeId.
             */
            configuration: object
          );

          /**
           * Called on representation by binding when a representation type is set. Intention is to trigger transfer
           * of selections that might exist on a representation (source) that is replaced by the "new" representation
           * (target) to be set. Therefore the target representation receives a reference pointing to the source representation.
           * In order to check whether selection transfer is possible the target representation initiates a negotiation
           * process with the source representations (3-way-handshake). If a common method can be determined between
           * target and source representation the selection will be exchanged.
           */
          adoptSelection(
            /**
             * Source representation implementing the representationInterface.
             */
            oSourceRepresentation: object
          ): void;
          /**
           * This method uses the serialization information from serialized data and sets the selection to representation
           * based on mode and selection string returned.
           */
          deserialize(oSerializationInformation: object): void;
          /**
           * Returns the alternate representation of current step (i.e. list representation for the charts)
           */
          getAlternateRepresentation(): object;
          /**
           * Returns data for representation type
           */
          getData(): any[];
          /**
           * This method has to be implemented so that binding can determine which method has to be used for the filter
           * retrieval from a representations.
           */
          getFilterMethodType(): any;
          /**
           * This method holds the logic to draw the content to be shown on main representation area.
           */
          getMainContent(): object;
          /**
           * Returns meta data for representation type
           */
          getMetaData(): any;
          /**
           * The method returns the constructor arguments which will be used to create toggle representation.
           */
          getParameter(): object;
          /**
           * This method holds the logic to draw the content to be printed.
           */
          getPrintContent(): object;
          /**
           * Additionally to parameters being set in the request configuration and filter values that are derived
           * from the path logic, a request can be enriched with additional options such as **$top**, **$skip** and
           * **$orderby**. Dependent on the actual options a representation may require for a request, an object
           * containing the correspondent properties may be returned by this method.
           * In case no additional options are required an empty object should be returned.
           *
           * The supported optional properties of the return object are:
           * 	**paging**: An object containing optional properties
           * 	**top** for OData system query option $top
           * A numeric value is expected**skip** for query string option $skip
           *  A numeric value is expected **inlineCount** for OData system query option $inlineCount
           * A boolean value 'true' is expected if inline count is requested **orderby** for OData system
           * query option $orderby: Values could be of type
           * 	**string** that holds a property name (in this case the default sort order 'ascending' is applied) **object**
           * with properties:
           * 	'property' A string containing the property name is expected. 'ascending' A boolean value 'true'
           * is expected, if ascending sort order is required for the property. If omitted default sort order 'descending'
           * is applied.  **array** holding objects with properties 'property' and 'ascending' as described
           * above.
           */
          getRequestOptions(): object;
          /**
           * This is the basic method with which the step can detect data selected in the chart.
           */
          getSelectionAsArray(): number[];
          /**
           * This method holds the logic to draw the content to be shown on thumbnail area.
           */
          getThumbnailContent(): object;
          /**
           * This method holds the logic to draw the content to be shown as tooltip for a thumbnail. It will be shown
           * inside a tooltip Popup when the thumbnail content overflows the thumbnail container area with a gradient
           * effect to indicate that it is overflowing.
           */
          getTooltipContent(): object;
          /**
           * This method holds the logic to remove all selection from the chart. It also updates the step.
           */
          removeAllSelection(): void;
          /**
           * This method returns the selection for serialization. This is required for the Persisting selection of
           * current representation. It includes selection mode and selections.
           */
          serialize(): object;
          /**
           * The binding sets the data (received from the request) that has to be visualized. The array aDataResponse
           * is shared between all representations of a step and the binding. When lines are moved, deleted or changed,
           * you modify the visualization of the original data! When displaying the data, one can determine which
           * record is selected by aSelectedIndices.
           */
          setData(
            /**
             * oMetadata holds meta information about the received data.
             */
            oMetadata: any,
            /**
             * Data response from the request.
             */
            aDataResponse: any[]
          ): void;
          /**
           * Called during path update for treetable representation. As treetable has its own data model, the request
           * handling is done on representation side.
           */
          updateTreetable(
            /**
             * Contains filters and parameters for treetable request handling
             */
            controlObject: object,
            /**
             * OData model for the service of treetable
             */
            oModel: sap.ui.model.odata.v2.ODataModel,
            /**
             * Function to be called after request processing
             */
            callbackAfterRequest: Function,
            /**
             * Convenience functions for metadata handling
             */
            entityTypeMetadata: any
          ): void;
        }
        /**
         * @EXPERIMENTAL
         *
         * The interface proxy passed to a representation which provides access to required APF methods. This constructor
         * is used by apf.api. It can be also used to build unit tests that need an interface proxy between APF
         * and representations.
         */
        class RepresentationInterfaceProxy {
          /**/
          constructor(
            oCoreApi: any,

            oUiApi: any
          );

          /**
           * see {@link sap.apf.Api#createFilter}
           */
          createFilter(): void;
          /**
           * see {@link sap.apf.Api#createMessageObject}
           */
          createMessageObject(): void;
          /**
           * get exits registered on oInject
           */
          getExits(): void;
          /**
           * see {@link sap.apf.Api#getTextNotHtmlEncoded}
           */
          getTextNotHtmlEncoded(): void;
          /**
           * returns the oUiAPi
           */
          getUiApi(): void;
          /**
           * see {@link sap.apf.Api#putMessage}
           */
          putMessage(): void;
        }
      }
    }

    namespace utils {
      /**
       * Filter object
       */
      class Filter {
        /**
         * It is designed to be used for supplying context information for the application. In addition, it can
         * be used for exchanging filter values between the path and the facet filters. This function object supports
         * the top down construction of filter expressions.
         */
        constructor(oMessageHandler: any);

        /**
         * Creates a filter from json format, that comes from selection variant. Apf creates this filter format
         * with method Filter#mapToSapUI5FilterExpression. See there for description of the format.
         */
        createFilterFromSapUi5FilterJSON(): sap.apf.utils.Filter;
        /**
         * Returns filter object or expression for a given ID, if exists.
         */
        getById(
          /**
           * ID of the object to be returned.
           */
          sId: string
        ):
          | sap.apf.utils.FilterAnd
          | sap.apf.utils.FilterOr
          | sap.apf.utils.FilterExpression
          | undefined;
        /**
         * Returns the logical operations and the boolean expressions of a Filter object as nested arrays for the
         * logical operations and single level objects for the boolean expressions. Depending on the nesting level
         * of the arrays the logical operators for the terms in the arrays alternates between AND and OR. The array
         * on the highest level has the logical operator AND. It corresponds to the TopAnd filter term. Terms in
         * general can be composed of the logical operation AND (see the FilterAnd object) or OR (see the FilterOr
         * object) or be a boolean expression (see the FilterExpression object). AND and OR terms are returned as
         * arrays; boolean expressions are returned as objects.
         */
        getExpressions(): object[];
        /**
         * Convenience function to get the OData operators which are defined in {constants.FilterOperators}.
         */
        getOperators(): any;
        /**
         * Returns the top 'AND' object of the filter.
         */
        getTopAnd(): sap.apf.utils.FilterAnd;
        /**
         * Build the intersection of the this filter object with the supplied filter(s). The method does not change
         * the "this"-instance.
         */
        intersectWith(
          /**
           * Single filter object {@link sap.apf.utils.Filter}, a comma separated parameter list of filter objects,
           * or an array of filter objects
           */
          args: sap.apf.utils.Filter | sap.apf.utils.Filter[]
        ): sap.apf.utils.Filter;
        /**
         * Updates an expression.
         */
        updateExpression(
          /**
           * ID of expression to be updated
           */
          sId: string,
          /**
           * Expression object containing the updated properties
           */
          oExpression: {
            /**
             * Updated expression ID
             */
            id: string;
            /**
             * Updated expression name
             */
            name: string;
            /**
             * Updated expression operator of type {constants.FilterOperators}
             */
            operator: string;
            /**
             * Updated expression low value
             */
            value: string | number;
            /**
             * Updated expression high value
             */
            high: string | number;
          }
        ): undefined;
        /**
         * Updates a value of an expression object.
         */
        updateValue(
          /**
           * ID of the expression object to be updated
           */
          sId: string,
          /**
           * The new low value for the expression (optional)
           */
          value: string,
          /**
           * The new high value for the expression (optional)
           */
          high: string
        ): undefined;
      }

      class FilterAnd {
        /**/
        constructor(
          oMessageHandler: any,
          /**
           * Identifier for the object
           */
          sId: string
        );

        /**
         * Adds an expression object to this filter.
         */
        addExpression(
          /**
           * Expression object
           */
          oExpression: {
            /**
             * Expression ID
             */
            id: undefined;
            /**
             * Expression name
             */
            name: undefined;
            /**
             * Expression operator of type
             */
            operator: any;
            /**
             * Expression value
             */
            value: undefined;
          }
        ): sap.apf.utils.FilterAnd;
        /**
         * Adds an object of type {sap.apf.utils.FilterOr}.
         */
        addOr(
          /**
           * Identifier for the object to be added.
           */
          sId: string
        ): sap.apf.utils.FilterOr;
        /**
         * Returns ID of this filter object.
         */
        getId(): string;
      }
      /**
       * Filter expression
       */
      class FilterExpression {
        /**/
        constructor(
          oMessageHandler: any,
          /**
           * Expression object
           */
          oExpression: {
            /**
             * Expression ID
             */
            id: undefined;
            /**
             * Expression name
             */
            name: undefined;
            /**
             * Expression operator of type
             */
            operator: any;
            /**
             * Expression value
             */
            value: undefined;
            /**
             * Expression high value
             */
            high: undefined;
          }
        );
      }

      class FilterOr {
        /**/
        constructor(
          oMessageHandler: any,
          /**
           * Identifier for the object
           */
          sId: string,
          /**
           * Parent object
           */
          oAnd: sap.apf.utils.FilterAnd
        );

        /**
         * Adds an object of type {@link sap.apf.utils.FilterAnd}.
         */
        addAnd(
          /**
           * Identifier for the object to be added.
           */
          sId: string
        ): sap.apf.utils.FilterAnd;
        /**
         * Adds an expression object to this filter.
         */
        addExpression(
          /**
           * Expression object
           */
          oExpression: {
            /**
             * Expression ID
             */
            id: undefined;
            /**
             * Expression name
             */
            name: undefined;
            /**
             * Expression operator of type
             */
            operator: any;
            /**
             * Expression value
             */
            value: undefined;
          }
        ): sap.apf.utils.FilterOr;
        /**
         * Retrieves an ID of the term.
         */
        getId(): string;
      }
    }

    interface abap {}
    /**
     * Official API for Analysis Path Framework (APF)
     *   The APF API provides a consuming application access to the functionality of the APF. It is assumed
     * that the consuming application extends type {@link sap.apf.base.Component}. The API reference is returned
     * by method {@link sap.apf.base.Component#getApi}.
     *  Objects and types returned by methods of APF API or passed in parameters of APF API method also belong
     * to the API. These objects and types are documented in their respective sections of this documentation.
     * All methods, objects or types that are not explicitly documented as public are strictly internal and
     * may be changed without prior notice. This also includes all methods, objects or types being classified
     * as experimental.
     *  Furthermore there is no need to instantiate required entities directly by applying the JavaScript 'new'-operator
     * on their respective constructors. Instead they should be created by consumers using a create method available
     * on API-level, such as e.g. {@link sap.apf.Api#createMessageObject} for {@link sap.apf.core.MessageObject}
     * or {@link sap.apf.Api#createFilter} for {@link sap.apf.utils.Filter}.
     */
    class Api {
      /**/
      constructor(
        /**
         * A reference to the calling Component.js. The reference provides access to parameters and context.
         */
        oComponent: sap.apf.Component | sap.apf.base.Component,
        /**
         * injected constructors and functions for testing only.
         */
        inject?: Object,
        /**
         * manifests of the component and the base component itself
         */
        manifests?: Object
      );

      /**
       * @EXPERIMENTAL
       *
       * The handling of the window.onerror by the message handler is either switched on or off. Per default the
       * handling is deactivated.
       */
      activateOnErrorHandling(
        /**
         * Boolean true switches the winow.onerror handling on
         */
        bHandling: boolean
      ): undefined;
      /**
       * @deprecated (since 1.23.1) - Remains in api in order to maintain downward compatibility to 3 Wave 5 apps.
       * @EXPERIMENTAL
       *
       * Adds an element to the footer area.
       */
      addMasterFooterContent(
        /**
         * any valid UI5 control.
         */
        oControl: object
      ): void;
      /**
       * Adds a filter to the path. Subsequent changes need to be done by the update method providing the identifier.
       * Limitation: Only a single filter term or a disjunction/conjunction of single terms over a single property
       * is supported. Limitation: Only the operators EQ, LE (less equal than) and GE (greater equal than) are
       * supported.
       */
      addPathFilter(filter: sap.apf.utils.Filter): number;
      /**
       * Creates an empty filter object. Its methods can be used to create a logical filter expression.
       */
      createFilter(): sap.apf.utils.Filter;
      /**
       * Creates a message object, which is the mandatory parameter for API method putMessage. So first create
       * the message object and afterwards call putMessage with the message object as argument.
       */
      createMessageObject(
        /**
         * Configuration object for the message object.
         */
        oConfig: {
          /**
           * The message is classified by its code. The code identifies an entry in the message configuration.
           */
          code: string;
          /**
           * Additional parameters for the message. The parameters are filled into the message text, when the message
           * will be processed by the text resource handler.
           */
          aParameters?: any[];
          /**
           * Reference of the calling object. This can be used later to visualize on the user interface, where the
           * message occurred.
           */
          oCallingObject?: object;
          /**
           * Raw text for non translated messages.
           */
          rawText?: string;
        }
      ): sap.apf.core.MessageObject;
      /**
       * helps to call customer defined custom formatter function(fnCallback).
       */
      customFormat(
        /**
         * custom format function need to be called.
         */
        fnCallback: Function
      ): void;
      /**
       * Gets a path filter fragment for the given identifier by fully replacing the existing one.
       */
      getPathFilter(
        /**
         * Identifier of the path filter fragment as it was returned by addPathFilter method.
         */
        id: number | string
      ): sap.apf.utils.Filter;
      /**
       * Retrieves a text and applies HTML encoding
       */
      getTextHtmlEncoded(
        /**
         * || {string} Label object or text key
         */
        oLabel: object,
        /**
         * Array with parameters to replace place holders in text.
         */
        aParameters: string[]
      ): string;
      /**
       * Retrieves a text without application of HTML encoding
       */
      getTextNotHtmlEncoded(
        /**
         * || {string} Label object or text key
         */
        oLabel: object,
        /**
         * Array with parameters to replace place holders in text.
         */
        aParameters: string[]
      ): string;
      /**
       * @deprecated (since 1.23.1)
       * @EXPERIMENTAL
       *
       * Loads a new application configuration in JSON format. When called many times, the file is loaded only
       * the first time.
       */
      loadApplicationConfig(
        /**
         * The absolute path of an application configuration file. Host and port will be added in front of this
         * path.
         */
        sFilePath: string
      ): void;
      /**
       * A message is passed to the APF message handler for further processing. All message specific settings
       * (e.g. message code or severity) need to be passed within an APF message object instance.
       */
      putMessage(
        /**
         * The message object shall be created by method {@link sap.apf.Api#createMessageObject}.
         */
        oMessage: sap.apf.core.MessageObject
      ): undefined;
      /**
       * @EXPERIMENTAL
       *
       * Calls the sap.apf.core.instance#updatePath (also see {@link sap.apf.core.Path#update}) with proper callback
       * for UI. It also refreshes the steps either from the active step or all the steps depending on the boolean
       * value passed.
       */
      selectionChanged(bRefreshAllSteps: boolean): void;
      /**
       * Register the function callback to be executed after APF start-up and content has been created. Callback
       * is called with APF API instance as parameter and 'this' set to the Component instance.
       */
      setCallbackAfterApfStartup(
        /**
         * that will be executed after APF start-up and content has been created.
         */
        fnCallback: Function
      ): void;
      /**
       * Register the function callback to be executed before APF start-up. Callback is called with APF API instance
       * as parameter and 'this' set to the Component instance.
       */
      setCallbackBeforeApfStartup(
        /**
         * that will be executed before APF start-up.
         */
        fnCallback: Function
      ): void;
      /**
       * @EXPERIMENTAL
       *
       * Register the function callback to be executed on the given event type. fnCallback will be executed under
       * a context and will be passed with arguments depending on the event type.
       */
      setEventCallback(
        /**
         * is the type of event for registering the fnCallback for that particular event type printTriggered - Registers
         * a callback for initial page print, this callback returns 2d array contextChanged : Registers a callback
         * for context change, which will set the context of the application
         */
        sEventType: any,
        /**
         * that will be executed depending on the event type.
         */
        fnCallback: Function
      ): boolean;
      /**
       * true, when no fatal error occurred during startup phase. Startup phase includes the initialization +
       * startupApf
       */
      startupSucceeded(): boolean;
      /**
       * Updates a filter of the path. Limitation: Only a single filter term or a disjunction/conjunction of single
       * terms over a single property is supported. Limitation: Only the operators EQ, LE (less equal than) and
       * GE (greater equal than) are supported.
       */
      updatePathFilter(
        /**
         * Identifier of the path filter as it was returned by addPathFilter method. When using an ID of type string
         * the caller must ensure that it is unique.
         */
        id: number | string,

        filter: sap.apf.utils.Filter
      ): void;
    }
    /**
     * @deprecated - since SAP UI 1.30. This ./Component.js was used for any application build with UI5 Version
     * < 1.30. Use the new ./base/Component.js instead for any application build with UI5 Version >= 1.30
     *
     * Base Component for all APF based applications.
     */
    class Component extends sap.ui.core.UIComponent {
      /**/
      constructor();

      /**
       * Creates the content of the component. A component, that extends this component should call this method.
       */
      // @ts-ignore
      createContent(): sap.ui.core.Control;
      /**
       * Cleanup the Component instance . The component, that extends this component should call this method.
       */
      // @ts-ignore
      exit(): void;
      /**
       * Creates a new subclass of class sap.apf.Component with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.UIComponent.extend}.
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
       * Returns the instance of the APF API.
       */
      getApi(): sap.apf.Api;
      /**
       * Returns a metadata object for class sap.apf.Component.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ComponentMetadata;
      /**
       * Initialize the Component instance after creation. The component, that extends this component should call
       * this method.
       */
      // @ts-ignore
      init(): void;
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/apf/abap/LrepConnector": undefined;

    "sap/apf/base/Component": undefined;

    "sap/apf/core/MessageObject": undefined;

    "sap/apf/core/ReadRequest": undefined;

    "sap/apf/core/ReadRequestByRequiredFilter": undefined;

    "sap/apf/ui/representations/representationInterface": undefined;

    "sap/apf/ui/representations/RepresentationInterfaceProxy": undefined;

    "sap/apf/utils/Filter": undefined;

    "sap/apf/utils/FilterAnd": undefined;

    "sap/apf/utils/FilterExpression": undefined;

    "sap/apf/utils/FilterOr": undefined;

    "sap/apf/Api": undefined;

    "sap/apf/Component": undefined;
  }
}
