// For Library Version: 1.84.0

declare namespace sap {
  /**
   * SAP UI library: SAP Collaboration for Social Media Integration.
   */
  namespace collaboration {
    namespace components {
      namespace feed {
        /**
         * @SINCE 1.30
         *
         * The Feed Component is an SAPUI5 component that allows you to display SAP Jam feeds. It includes the option
         * to add new posts and reply to entries and view other users' social profiles from SAP Jam.
         */
        class Component extends sap.ui.core.UIComponent {
          /**
           * Constructor for the Feed Component.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers.
           *
           * The supported settings are:
           * 	 - Properties
           * 	{@link #getAxisOrientation axisOrientation} : sap.suite.ui.commons.TimelineAxisOrientation (default:
           * sap.suite.ui.commons.TimelineAxisOrientation.Vertical)
           * 	 - {@link #getFeedSources feedSources} : map|string[]
           * 	 - {@link #getEnableScroll enableScroll} : boolean (default: true)
           */
          constructor(
            /**
             * id for the new component, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new component. See the documentation of the component's properties for the structure
             * of the expected data.
             */
            mSettings?: any
          );

          /**
           * The method to create the Content (UI Control Tree) of the Component.
           */
          // @ts-ignore
          static createContent(): void;
          /**
           * Cleans up the component instance before destruction.
           */
          // @ts-ignore
          static exit(): void;
          /**
           * Getter for property `axisOrientation`.
           *
           * Default value is `Vertical`
           */
          getAxisOrientation(): sap.suite.ui.commons.TimelineAxisOrientation;
          /**
           * Getter for property `enableScroll`.
           */
          getEnableScroll(): boolean;
          /**
           * Getter for property `feedSources`.
           */
          getFeedSources(): any;
          /**
           * Returns the selected Group.
           */
          static getSelectedGroup(): any;
          /**
           * Initializes the Component instance after creation.
           */
          // @ts-ignore
          static init(): void;
          /**
           * Function is called when the rendering of the Component Container is completed.
           */
          // @ts-ignore
          static onAfterRendering(): void;
          /**
           * Function is called when the rendering of the Component Container is started.
           */
          // @ts-ignore
          static onBeforeRendering(): void;
          /**
           * Setter for property `axisOrientation`.
           *
           * Default value is `Vertical`
           */
          setAxisOrientation(
            /**
             * new value for property `axisOrientation`
             */
            oAxisOrientation: sap.suite.ui.commons.TimelineAxisOrientation
          ): sap.collaboration.components.feed.Component;
          /**
           * Set the axis orientation for the Timeline.
           */
          static setAxisOrientation(
            axisOrientation: sap.suite.ui.commons.TimelineAxisOrientation
          ): void;
          /**
           * Setter for property `enableScroll`.
           *
           * Sets the property enableScroll on the Timeline.
           *
           * Setting this property to false will remove the scrollbar on the Timeline.
           *
           *
           * Default value is `true`
           */
          setEnableScroll(
            /**
             * new value for property `enableScroll`
             */
            bEnableScroll: boolean
          ): sap.collaboration.components.feed.Component;
          /**
           * Sets the enableScroll property for the Timeline.
           */
          static setEnableScroll(enableScroll: boolean): void;
          /**
           * Setter for property `feedSources`.
           *
           * The feedSources is either an array of strings (SAP Jam Group IDs) or a map in the following structure:
           *  { mode : sap.collaboration.FeedType, data : any }
           *  Based on the mode, the data is either required or not.
           */
          setFeedSources(
            /**
             * new value for property `feedSources`
             */
            oFeedSources: any
          ): void;
          /**
           * Sets the sources for the feed. Array of strings representing the Jam group IDs (e.g. ["groupid1", "groupid2"]).
           */
          static setFeedSources(feedSources: object): void;
          /**
           * Sets all the properties passed in oSettings.
           */
          static setSettings(
            /**
             * key/value map for settings
             */
            settings: any
          ): void;
        }
      }

      namespace fiori {
        namespace feed {
          namespace dialog {
            /**
             * @deprecated (since 1.34.0) - For new integrations and existing implementations running on release 1.32
             * or later, use the Group Feed component (sap.collaboration.components.feed.Component), Business Object
             * mode(sap.collaboration.FeedType.BusinessObjectGroups). Note that the Group Feed component does not display
             * the full public feed for the object in SAP Jam (object wall), but rather is restricted to the feed for
             * the object within a specific group (group object wall).
             *
             * Feed Dialog Component
             *
             * A Feed Dialog Component is a ui5 component that applications can use to render the feed widget view in
             * a dialog in order to discuss information in SAP JAM by adding and replying to feed posts related to a
             * specific Business Object.
             */
            class Component extends sap.ui.core.UIComponent {
              /**
               * Constructor for the Feed Dialog Component.
               *
               * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
               * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
               * of the syntax of the settings object.
               */
              constructor(
                /**
                 * A JSON object passed to the Feed Dialog Component. This object represents business related information,
                 * such as a sales order, an opportunity, etc. It contains the following properties:
                 * 	 - {string} appContext: The application context. Example: "CRM", "CB", "SD", etc.
                 * 	 - {string} odataServicePath: The path to the OData Service and the Service name. Example:
                 * 			"/sap/opu/odata/sap/APPLICATION_SRV".
                 * 	 - {string} collection: The name of the OData Collection. Example: "Account", "Opportunity",
                 * 			etc.
                 * 	 - {string} key: The key to identify a particular instance of the Business Object. It can be
                 * 			a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'",
                 * 			etc.
                 * 	 - {string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity
                 * 			123", "Account 123", etc.
                 * 	 - {string} ui_url: The URL to navigate to the same business object in the application.
                 */
                businessObject: object,
                /**
                 * **[DEPRECATED]** The OData service URL needed for the Feed Dialog Component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV".
                 */
                oDataServiceUrl?: sap.ui.core.URI,
                /**
                 * **[DEPRECATED]** The type of feed to be displayed.
                 */
                feedType?: sap.collaboration.FeedType,
                /**
                 * **[DEPRECATED]** A comma separated list of group IDs.
                 */
                groupIds?: string,
                /**
                 * **[DEPRECATED]** A JSON object passed to the Feed Dialog Component. Use **businessObject** instead.
                 * This object represents business related information, such as a sales order, an opportunity, etc. It contains
                 * the following properties:
                 * 	 - id: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData URL
                 * 			containing the relative path to the object in the back-end.
                 * 	 - type: the type of the business object. It can be any text or it can be the OData meta data
                 * 			URL to the object Entity Type.
                 * 	 - name (optional): the description of the business object to be displayed in SAP Jam, i.e.
                 * 			"SO 57746", "Opportunity 123", etc.
                 * 	 - ui_url (optional): the URL to navigate to the same business object in the application.
                 * 			Note: The object is passed by reference, which means that the attributes will be modified in the original
                 * 			object, for example, when the URLs contained in the id and type attributes are mapped (via OData call).
                 */
                object?: object
              );

              /**
               * Creates a new subclass of class sap.collaboration.components.fiori.feed.dialog.Component with name `sClassName`
               * and enriches it with the information contained in `oClassInfo`.
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
               * Gets current value of property {@link #getBusinessObject businessObject}.
               */
              getBusinessObject(): object;
              /**
               * Gets current value of property {@link #getFeedType feedType}.
               *
               * Default value is `FeedType.object`.
               */
              getFeedType(): string;
              /**
               * Gets current value of property {@link #getGroupIds groupIds}.
               */
              getGroupIds(): string;
              /**
               * Gets current value of property {@link #getHeight height}.
               *
               * Default value is `"605px"`.
               */
              getHeight(): sap.ui.core.CSSSize;
              /**
               * Returns a metadata object for class sap.collaboration.components.fiori.feed.dialog.Component.
               */
              // @ts-ignore
              static getMetadata(): sap.ui.core.ComponentMetadata;
              /**
               * Gets current value of property {@link #getObject object}.
               */
              getObject(): object;
              /**
               * Gets current value of property {@link #getWidth width}.
               *
               * Default value is `"575px"`.
               */
              getWidth(): sap.ui.core.CSSSize;
              /**
               * Open the Feed Dialog.
               */
              open(): void;
              /**
               * Sets a new value for property {@link #getBusinessObject businessObject}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               */
              setBusinessObject(
                /**
                 * New value for property `businessObject`
                 */
                oBusinessObject: object
              ): sap.collaboration.components.fiori.feed.dialog.Component;
              /**
               * Sets a new value for property {@link #getFeedType feedType}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               *
               * Default value is `FeedType.object`.
               */
              setFeedType(
                /**
                 * New value for property `feedType`
                 */
                sFeedType?: string
              ): sap.collaboration.components.fiori.feed.dialog.Component;
              /**
               * Sets a new value for property {@link #getGroupIds groupIds}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               */
              setGroupIds(
                /**
                 * New value for property `groupIds`
                 */
                sGroupIds: string
              ): sap.collaboration.components.fiori.feed.dialog.Component;
              /**
               * Sets a new value for property {@link #getHeight height}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               *
               * Default value is `"605px"`.
               */
              setHeight(
                /**
                 * New value for property `height`
                 */
                sHeight?: sap.ui.core.CSSSize
              ): sap.collaboration.components.fiori.feed.dialog.Component;
              /**
               * Sets a new value for property {@link #getObject object}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               */
              setObject(
                /**
                 * New value for property `object`
                 */
                oObject: object
              ): sap.collaboration.components.fiori.feed.dialog.Component;
              /**
               * Contract for passing the settings to the Component.
               */
              setSettings(
                /**
                 * A JSON object containing the following attributes:
                 * 	 - {object} businessObject: the representation of a business object.
                 * 	 - {sap.collaboration.FeedType} **[DEPRECATED]** feedType: the type of feed to be displayed.
                 *
                 * 	 - {string} **[DEPRECATED]** [groupIds?]: a comma separated list of group IDs.
                 * 	 - {object} **[DEPRECATED]** object: the representation of a business object. Use businessObject
                 * 			instead
                 */
                oSettings: object
              ): void;
              /**
               * Sets a new value for property {@link #getWidth width}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               *
               * Default value is `"575px"`.
               */
              setWidth(
                /**
                 * New value for property `width`
                 */
                sWidth?: sap.ui.core.CSSSize
              ): sap.collaboration.components.fiori.feed.dialog.Component;
            }
          }

          /**
           * @deprecated (since 1.26.0) - Please use sap.collaboration.components.fiori.feed.dialog.Component instead.
           *
           * Feed Component
           *
           *
           * A Feed Component is a ui5 component that applications can use to render a sap.m.App that embeds
           * the JAM Feed Widget.
           *  The Component class extends the base UI5 UIComponent class.
           *  This class defines the Reusable UI5 Component structure, i.e properties, aggregations and events, if
           * any, and creates the UI5 controls to be displayed.
           */
          class Component extends sap.ui.core.UIComponent {
            /**
             * Constructor for the Feed Component.
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the Feed Component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV".
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * The type of feed to be displayed.
               */
              feedType: sap.collaboration.FeedType,
              /**
               * A comma separated list of group IDs.
               */
              groupIds?: string,
              /**
               * A JSON object passed to the Feed component. It is required when the value of feedType is sap.collaboration.FeedType.object
               * or sap.collaboration.FeedType.objectGroup. This object represents business related information,
               * such as a sales order, an opportunity, etc. It contains the following properties:
               * 	 - **id**: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData
               * 			URL containing the relative path to the object in the back-end.
               * 	 - **type**: The type of the Business Object. It needs to be the OData meta data URL to the
               * 			corresponding Entity Collection.
               * 	 - **name?** (optional): The description of the Business Object to be displayed in SAP Jam,
               * 			i.e. "SO 57746", "Opportunity 123", etc.
               * 	 - **ui_url?** (optional): The URL to navigate to the same Business Object in the application.
               */
              object?: object
            );
            /**
             * Constructor for the Feed Component.
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The type of feed to be displayed.
               */
              feedType: sap.collaboration.FeedType,
              /**
               * A comma separated list of group IDs.
               */
              groupIds?: string,
              /**
               * A JSON object passed to the Feed component. It is required when the value of feedType is sap.collaboration.FeedType.object
               * or sap.collaboration.FeedType.objectGroup. This object represents business related information,
               * such as a sales order, an opportunity, etc. It contains the following properties:
               * 	 - **id**: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData
               * 			URL containing the relative path to the object in the back-end.
               * 	 - **type**: The type of the Business Object. It needs to be the OData meta data URL to the
               * 			corresponding Entity Collection.
               * 	 - **name?** (optional): The description of the Business Object to be displayed in SAP Jam,
               * 			i.e. "SO 57746", "Opportunity 123", etc.
               * 	 - **ui_url?** (optional): The URL to navigate to the same Business Object in the application.
               */
              object?: object
            );

            /**
             * Creates a new subclass of class sap.collaboration.components.fiori.feed.Component with name `sClassName`
             * and enriches it with the information contained in `oClassInfo`.
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
             * Gets current value of property {@link #getFeedType feedType}.
             */
            getFeedType(): string;
            /**
             * Gets current value of property {@link #getGroupIds groupIds}.
             */
            getGroupIds(): string;
            /**
             * Gets current value of property {@link #getHeight height}.
             *
             * Default value is `empty string`.
             */
            getHeight(): sap.ui.core.CSSSize;
            /**
             * Returns a metadata object for class sap.collaboration.components.fiori.feed.Component.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.core.ComponentMetadata;
            /**
             * Gets current value of property {@link #getObject object}.
             */
            getObject(): object;
            /**
             * Gets current value of property {@link #getODataServiceUrl oDataServiceUrl}.
             *
             * Default value is `"/sap/opu/odata/sap/SM_INTEGRATION_SRV"`.
             */
            getODataServiceUrl(): sap.ui.core.URI;
            /**
             * Gets current value of property {@link #getWidth width}.
             *
             * Default value is `empty string`.
             */
            getWidth(): sap.ui.core.CSSSize;
            /**
             * Sets a new value for property {@link #getFeedType feedType}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setFeedType(
              /**
               * New value for property `feedType`
               */
              sFeedType: string
            ): sap.collaboration.components.fiori.feed.Component;
            /**
             * Sets a new value for property {@link #getGroupIds groupIds}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setGroupIds(
              /**
               * New value for property `groupIds`
               */
              sGroupIds: string
            ): sap.collaboration.components.fiori.feed.Component;
            /**
             * Sets a new value for property {@link #getHeight height}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `empty string`.
             */
            setHeight(
              /**
               * New value for property `height`
               */
              sHeight?: sap.ui.core.CSSSize
            ): sap.collaboration.components.fiori.feed.Component;
            /**
             * Sets a new value for property {@link #getObject object}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setObject(
              /**
               * New value for property `object`
               */
              oObject: object
            ): sap.collaboration.components.fiori.feed.Component;
            /**
             * Sets a new value for property {@link #getODataServiceUrl oDataServiceUrl}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `"/sap/opu/odata/sap/SM_INTEGRATION_SRV"`.
             */
            setODataServiceUrl(
              /**
               * New value for property `oDataServiceUrl`
               */
              sODataServiceUrl?: sap.ui.core.URI
            ): sap.collaboration.components.fiori.feed.Component;
            /**
             * Contract for passing the settings to the Component.
             */
            setSettings(
              /**
               * A JSON object containing the following attributes:
               * 	 - {sap.ui.core.URI} oDataServiceUrl: The URL of the OData Service needed for the Feed Component.
               *
               * 	 - {sap.collaboration.FeedType} feedType: The type of feed to be displayed.
               * 	 - {string} [groupIds?]: A comma separated list of Group IDs.
               * 	 - {object} object: The representation of a Business Object.
               */
              oSettings: object
            ): void;
            /**
             * Sets a new value for property {@link #getWidth width}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `empty string`.
             */
            setWidth(
              /**
               * New value for property `width`
               */
              sWidth?: sap.ui.core.CSSSize
            ): sap.collaboration.components.fiori.feed.Component;
          }
        }

        namespace notification {
          /**
           * @deprecated (since 1.26.0) - There is no replacement for this control. The Fiori Launchpad now provides
           * its own implementation for this control. This control was never meant to be used directly by third parties.
           *
           * Notification Component
           *
           * A Notification Component is a ui5 component that displays a SAP Jam member's latest notifications.
           *
           * This component refreshes itself when the number of seconds specified in the refreshInterval
           * parameter elapses. When refreshing, the backend is called to obtain the latest notifications.
           */
          class Component extends sap.ui.core.UIComponent {
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl: sap.ui.core.URI,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the maximum number of notifications to be displayed. The default value is 10.
               */
              numberOfNotifications: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the amount of time in seconds a notification is displayed before the next notification is displayed.
               * The default value is 10.
               */
              transitionInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * This is the amount of time in seconds before calling the backend to update the notifications. The default
               * value is 300.
               */
              refreshInterval: number,
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );
            /**
             * Constructor for the notification component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * When a user clicks on the component, a new browser tab will open at this URL.
               */
              notificationsTargetUrl: sap.ui.core.URI
            );

            /**
             * Creates a new subclass of class sap.collaboration.components.fiori.notification.Component with name `sClassName`
             * and enriches it with the information contained in `oClassInfo`.
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
             * Returns a metadata object for class sap.collaboration.components.fiori.notification.Component.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.core.ComponentMetadata;
            /**
             * Gets current value of property {@link #getNotificationsTargetUrl notificationsTargetUrl}.
             */
            getNotificationsTargetUrl(): sap.ui.core.URI;
            /**
             * Gets current value of property {@link #getNumberOfNotifications numberOfNotifications}.
             *
             * Default value is `10`.
             */
            getNumberOfNotifications(): number;
            /**
             * Gets current value of property {@link #getODataServiceUrl oDataServiceUrl}.
             *
             * Default value is `"/sap/opu/odata/sap/SM_INTEGRATION_SRV"`.
             */
            getODataServiceUrl(): sap.ui.core.URI;
            /**
             * Gets current value of property {@link #getRefreshInterval refreshInterval}.
             *
             * Default value is `300`.
             */
            getRefreshInterval(): number;
            /**
             * Gets current value of property {@link #getTransitionInterval transitionInterval}.
             *
             * Default value is `10`.
             */
            getTransitionInterval(): number;
            /**
             * Sets a new value for property {@link #getNotificationsTargetUrl notificationsTargetUrl}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setNotificationsTargetUrl(
              /**
               * New value for property `notificationsTargetUrl`
               */
              sNotificationsTargetUrl: sap.ui.core.URI
            ): sap.collaboration.components.fiori.notification.Component;
            /**
             * Sets a new value for property {@link #getNumberOfNotifications numberOfNotifications}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `10`.
             */
            setNumberOfNotifications(
              /**
               * New value for property `numberOfNotifications`
               */
              iNumberOfNotifications?: number
            ): sap.collaboration.components.fiori.notification.Component;
            /**
             * Sets a new value for property {@link #getODataServiceUrl oDataServiceUrl}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `"/sap/opu/odata/sap/SM_INTEGRATION_SRV"`.
             */
            setODataServiceUrl(
              /**
               * New value for property `oDataServiceUrl`
               */
              sODataServiceUrl?: sap.ui.core.URI
            ): sap.collaboration.components.fiori.notification.Component;
            /**
             * Sets a new value for property {@link #getRefreshInterval refreshInterval}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `300`.
             */
            setRefreshInterval(
              /**
               * New value for property `refreshInterval`
               */
              iRefreshInterval?: number
            ): sap.collaboration.components.fiori.notification.Component;
            /**
             * Sets a new value for property {@link #getTransitionInterval transitionInterval}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `10`.
             */
            setTransitionInterval(
              /**
               * New value for property `transitionInterval`
               */
              iTransitionInterval?: number
            ): sap.collaboration.components.fiori.notification.Component;
          }
        }

        namespace sharing {
          namespace attachment {
            /**
             * Attachment
             *
             * Attachment objects represent files.
             */
            class Attachment extends sap.ui.base.Object {
              /**
               * This constructor must be called in the following way: new Attachment("name", "mimeType", "url")
               * name, mimeType, and url are only place holders and can be any string.
               */
              constructor(
                /**
                 * The file's name.
                 */
                name: string,
                /**
                 * The file's mime type.
                 */
                mimeType: string,
                /**
                 * A url that points to the file.
                 */
                url: string
              );

              /**
               * Creates a new subclass of class sap.collaboration.components.fiori.sharing.attachment.Attachment with
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
               * Returns a metadata object for class sap.collaboration.components.fiori.sharing.attachment.Attachment.
               */
              // @ts-ignore
              static getMetadata(): sap.ui.base.Metadata;
            }
          }

          namespace dialog {
            /**
             * The Share Dialog component is an SAPUI5 component that you can use to create a dialog in your application
             * to enable you to enter or edit information shared to SAP Jam.
             */
            class Component extends sap.ui.core.UIComponent {
              /**
               * Constructor for the share dialog component
               *
               * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
               * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
               * of the syntax of the settings object.
               */
              constructor(
                /**
                 * DEPRECATED The OData service URL will no longer be taken into account.
                 */
                oDataServiceUrl?: sap.ui.core.URI,
                /**
                 * A JSON object passed to the share component. This object contains the following properties:
                 * 	 - id (optional): is the object Id to be shared in SAP Jam, i.e a URL( or a callback function that returns
                 * 			a URL) that navigates back to the same object in the application
                 * 	 - display (optional): is a UI5 control to be displayed in the component UI
                 *  **Note:** The preferred object to pass in the display parameter is `sap.m.ObjectListItem`. Using other
                 * type of objects (for example: `ap.ui.commons.TextView`) may result in problems in the rendering of the
                 * content which needs to be corrected by the application owners.
                 * 	 - share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too
                 */
                object?: object,
                /**
                 * A Business Object such as an Opportunity, Sales Order, Account, etc. from the back-end that will be shared
                 * as a Featured External Object in a Group in Jam.
                 * 	 - {string} appContext: The application context. Example: "CRM", "SD", etc.
                 * 	 - {string} odataServicePath: The relative path to the OData Service. Example: "/sap/opu/odata/sap/ODATA_SRV"
                 *
                 * 	 - {string} collection: The name of the OData Collection. Example: "Account", "Opportunity", etc.
                 * 	 - {string} key: The key to identify a particular instance of the Business Object. It can be a simple
                 * 			ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.
                 *
                 * 	 - {string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123",
                 * 			"Account 123", etc.   These attributes are not enforced by the UI (missing or incorrect values
                 * 			are not validated), but they are required to make the integration work. These attributes also should
                 * 			be mapped in the Back-end System and Jam in order to make the External Object work.
                 *  **Note:** the externalObject is dependent on object.id, therefore, the object.id must also be passed
                 * to the Share Component. See the parameter "object" for more information.
                 */
                externalObject?: object,
                /**
                 * When you want to provide the user with the option to share file attachments, then the following properties
                 * need to be specified:
                 * 	 - attachmentsArray: An array of {@link sap.collaboration.components.fiori.sharing.attachment.Attachment}
                 * 			objects. This array offers users a list of files they can attach.
                 */
                attachments?: object
              );

              /**
               * Creates a new subclass of class sap.collaboration.components.fiori.sharing.dialog.Component with name
               * `sClassName` and enriches it with the information contained in `oClassInfo`.
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
               * Gets current value of property {@link #getAttachments attachments}.
               */
              getAttachments(): object;
              /**
               * Gets current value of property {@link #getExternalObject externalObject}.
               */
              getExternalObject(): object;
              /**
               * Returns a metadata object for class sap.collaboration.components.fiori.sharing.dialog.Component.
               */
              // @ts-ignore
              static getMetadata(): sap.ui.core.ComponentMetadata;
              /**
               * Gets current value of property {@link #getObject object}.
               */
              getObject(): object;
              /**
               * Opens the share component dialog
               */
              open(): void;
              /**
               * Sets a new value for property {@link #getAttachments attachments}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               */
              setAttachments(
                /**
                 * New value for property `attachments`
                 */
                oAttachments: object
              ): sap.collaboration.components.fiori.sharing.dialog.Component;
              /**
               * Sets a new value for property {@link #getExternalObject externalObject}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               */
              setExternalObject(
                /**
                 * New value for property `externalObject`
                 */
                oExternalObject: object
              ): sap.collaboration.components.fiori.sharing.dialog.Component;
              /**
               * Sets a new value for property {@link #getObject object}.
               *
               * When called with a value of `null` or `undefined`, the default value of the property will be restored.
               */
              setObject(
                /**
                 * New value for property `object`
                 */
                oObject: object
              ): sap.collaboration.components.fiori.sharing.dialog.Component;
              /**
               * Setter for the Component settings.
               */
              setSettings(
                /**
                 * A JSON object used to set the component settings, this object should contains the same properties used
                 * in the constructor.
                 */
                oSettings: object
              ): void;
            }
          }

          /**
           * @deprecated (since 1.26.0) - Please use sap.collaboration.components.fiori.sharing.dialog.Component instead.
           *
           * Share Component
           *
           * A Share Component is a ui5 component that applications can use to share information to SAP Jam
           */
          class Component extends sap.ui.core.UIComponent {
            /**
             * Constructor for the share component
             *
             * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
             * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
             * of the syntax of the settings object.
             */
            constructor(
              /**
               * The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
               */
              oDataServiceUrl?: sap.ui.core.URI,
              /**
               * A JSON object passed to the share component. This object contains the following properties:
               * 	 - id (optional): is the object Id to be shared in SAP Jam, i.e a URL that navigates back to the same
               * 			object in the application
               * 	 - display (optional): is a UI5 control to be displayed in the component UI
               * 	 - share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too
               */
              object?: object,
              /**
               * A Business Object such as an Opportunity, Sales Order, Account, etc. from the back-end that will be shared
               * as a Featured External Object in a Group in Jam.
               * 	 - {string} appContext: The application context. Example: "CRM", "SD", etc.
               * 	 - {string} odataServicePath: The relative path to the OData Service. Example: "/sap/opu/odata/sap/ODATA_SRV"
               *
               * 	 - {string} collection: The name of the OData Collection. Example: "Account", "Opportunity", etc.
               * 	 - {string} key: The key to identify a particular instance of the Business Object. It can be a simple
               * 			ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.
               *
               * 	 - {string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123",
               * 			"Account 123", etc.   These attributes are not enforced by the UI (missing or incorrect values
               * 			are not validated), but they are required to make the integration work. These attributes also should
               * 			be mapped in the Back-end System and Jam in order to make the External Object work.
               * **Note:** the externalObject is dependent on object.id, therefore, the object.id must also be passed
               * to the Share Component. See the parameter "object" for more information.
               */
              externalObject?: object,
              /**
               * When you want to provide the user with the option to share file attachments, then the following properties
               * need to be specified:
               * 	 - attachmentsArray: An array of {@link sap.collaboration.components.fiori.sharing.attachment.Attachment}
               * 			objects. This array offers users a list of files they can attach.
               */
              attachments?: object
            );

            /**
             * Creates a new subclass of class sap.collaboration.components.fiori.sharing.Component with name `sClassName`
             * and enriches it with the information contained in `oClassInfo`.
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
             * Gets current value of property {@link #getAttachments attachments}.
             */
            getAttachments(): object;
            /**
             * Gets current value of property {@link #getCollaborationHostODataServiceUrl collaborationHostODataServiceUrl}.
             *
             * Default value is `"/sap/bc/ui2/smi/rest_tunnel/Jam/api/v1/OData"`.
             */
            getCollaborationHostODataServiceUrl(): sap.ui.core.URI;
            /**
             * Gets current value of property {@link #getExternalObject externalObject}.
             */
            getExternalObject(): object;
            /**
             * Gets current value of property {@link #getHeight height}.
             *
             * Default value is `"100%"`.
             */
            getHeight(): sap.ui.core.CSSSize;
            /**
             * Returns a metadata object for class sap.collaboration.components.fiori.sharing.Component.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.core.ComponentMetadata;
            /**
             * Gets current value of property {@link #getObject object}.
             */
            getObject(): object;
            /**
             * Gets current value of property {@link #getODataServiceUrl oDataServiceUrl}.
             *
             * Default value is `"/sap/opu/odata/sap/SM_INTEGRATION_V2_SRV"`.
             */
            getODataServiceUrl(): sap.ui.core.URI;
            /**
             * Gets current value of property {@link #getTunnelServiceUrl tunnelServiceUrl}.
             *
             * Default value is `"/sap/bc/z_sail_httproxy/Jam/api/v1/OData"`.
             */
            getTunnelServiceUrl(): sap.ui.core.URI;
            /**
             * Gets current value of property {@link #getWidth width}.
             *
             * Default value is `"100%"`.
             */
            getWidth(): sap.ui.core.CSSSize;
            /**
             * Sets a new value for property {@link #getAttachments attachments}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setAttachments(
              /**
               * New value for property `attachments`
               */
              oAttachments: object
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Sets a new value for property {@link #getCollaborationHostODataServiceUrl collaborationHostODataServiceUrl}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `"/sap/bc/ui2/smi/rest_tunnel/Jam/api/v1/OData"`.
             */
            setCollaborationHostODataServiceUrl(
              /**
               * New value for property `collaborationHostODataServiceUrl`
               */
              sCollaborationHostODataServiceUrl?: sap.ui.core.URI
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Sets a new value for property {@link #getExternalObject externalObject}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setExternalObject(
              /**
               * New value for property `externalObject`
               */
              oExternalObject: object
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Sets a new value for property {@link #getHeight height}.
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
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Sets a new value for property {@link #getObject object}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             */
            setObject(
              /**
               * New value for property `object`
               */
              oObject: object
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Sets a new value for property {@link #getODataServiceUrl oDataServiceUrl}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `"/sap/opu/odata/sap/SM_INTEGRATION_V2_SRV"`.
             */
            setODataServiceUrl(
              /**
               * New value for property `oDataServiceUrl`
               */
              sODataServiceUrl?: sap.ui.core.URI
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Setter for the Component settings.
             */
            setSettings(
              /**
               * A JSON object used to set the component settings, this object should contains the same properties used
               * in the constructor.
               */
              oSettings: object
            ): void;
            /**
             * Sets a new value for property {@link #getTunnelServiceUrl tunnelServiceUrl}.
             *
             * When called with a value of `null` or `undefined`, the default value of the property will be restored.
             *
             * Default value is `"/sap/bc/z_sail_httproxy/Jam/api/v1/OData"`.
             */
            setTunnelServiceUrl(
              /**
               * New value for property `tunnelServiceUrl`
               */
              sTunnelServiceUrl?: sap.ui.core.URI
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Sets a new value for property {@link #getWidth width}.
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
            ): sap.collaboration.components.fiori.sharing.Component;
            /**
             * Shares the data to Jam group
             */
            shareToJam(): void;
          }
        }
      }

      namespace socialprofile {
        /**
         * @EXPERIMENTAL
         *
         * Social Profile Component
         */
        class Component extends sap.ui.core.UIComponent {
          /**
           * Constructor for the Social Profile Component.
           *
           * !!! EXPERIMENTAL !!!
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers.
           *
           * If the name of a setting is ambiguous (e.g. a property has the same name as an event), then the framework
           * assumes property, aggregation, association, event in that order. To override this automatic resolution,
           * one of the prefixes "aggregation:", "association:" or "event:" can be added to the name of the setting
           * (such a prefixed name must be enclosed in single or double quotes).
           *
           * The supported settings are:
           * 	 - Properties
           * 	{@link #getPlacement placement} : sap.m.PlacementType (default: sap.m.PlacementType.Auto)
           * 	 - {@link #getMemberId memberId} : string
           * 	 - {@link #getMemberInfo memberInfo} : {object}
           * 	 - {@link #getOpeningControl openingControl} : {object}
           * 	 - {@link #getHeight height} : sap.ui.core.CSSSize (default: 380px)
           * 	 - {@link #getWidth width} : sap.ui.core.CSSSize (default: 300px)
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: object
          );

          /**
           * Cleans up the component instance before destruction. [borrowed from sap.ui.core.Component]
           */
          // @ts-ignore
          static exit(): void;
          /**
           * Creates a new subclass of class sap.collaboration.components.socialprofile.Component with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * Getter for property `height`. Gets the height of the Social Profile
           *
           * Default value is `380px`
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * Getter for property `memberId`. Gets the SAP Jam member id of the user
           */
          getMemberId(): string;
          /**
           * Getter for property `memberInfo`. Gets the SAP Jam member information
           */
          getMemberInfo(): object;
          /**
           * Returns a metadata object for class sap.collaboration.components.socialprofile.Component.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ComponentMetadata;
          /**
           * Getter for property `openingControl`. Gets the opening control for the Social Profile
           */
          getOpeningControl(): object;
          /**
           * Getter for property `placement`. Gets the placement of the Social Profile
           *
           * Default value is `sap.m.PlacementType.Auto`
           */
          getPlacement(): sap.m.PlacementType;
          /**
           * Getter for property `width`. Gets the width of the Social Profile
           *
           * Default value is `300px`
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Initializes the Component instance after creation. [borrowed from sap.ui.core.UIComponent]
           */
          // @ts-ignore
          static init(): void;
          /**
           * Function is called when the rendering of the Component Container is completed. [borrowed from sap.ui.core.UIComponent]
           */
          // @ts-ignore
          static onAfterRendering(): void;
          /**
           * Function is called when the rendering of the Component Container is started. [borrowed from sap.ui.core.UIComponent]
           */
          // @ts-ignore
          static onBeforeRendering(): void;
          /**
           * Opens the social profile component
           */
          static open(): void;
          /**
           * Setter for property `height`. Sets the height of the Social Profile
           *
           * Default value is `380px`
           */
          setHeight(
            /**
             * new value for property `height`
             */
            sHeight: string
          ): sap.collaboration.components.socialprofile.Component;
          /**
           * Setter for property `memberId`. Sets the memberId of the user
           */
          setMemberId(
            /**
             * new value for property `memberId`
             */
            sMemberId: string
          ): sap.collaboration.components.socialprofile.Component;
          /**
           * Setter for property `memberInfo`. Sets the memberInformation of the user
           */
          setMemberInfo(
            /**
             * new value for property `memberInfo`
             */
            oMemberInfo: object
          ): sap.collaboration.components.socialprofile.Component;
          /**
           * Setter for property `openingControl`. Sets the opening control for the Social Profile
           */
          setOpeningControl(
            /**
             * new value for property `openingControl`
             */
            oOpeningControl: object
          ): sap.collaboration.components.socialprofile.Component;
          /**
           * Setter for property `placement`. Sets the placement of the Social Profile
           *
           * Default value is `sap.m.PlacementType.Auto`
           */
          setPlacement(
            /**
             * new value for property `placement`
             */
            sPlacement: sap.m.PlacementType
          ): sap.collaboration.components.socialprofile.Component;
          /**
           * Setter for the Component settings
           */
          static setSettings(
            /**
             * A JSON object used to set the component settings, this object should contains the same properties used
             * in the constructor
             */
            oSettings: object
          ): void;
          /**
           * Setter for property `width`. Sets the width of the Social Profile
           *
           * Default value is `300px`
           */
          setWidth(
            /**
             * new value for property `width`
             */
            sWidth: string
          ): sap.collaboration.components.socialprofile.Component;
        }
      }

      namespace socialtimeline {
        /**
         * @deprecated (since 1.34.0) - For new integrations and existing implementations running on release 1.32
         * or later, use the Group Feed component (sap.collaboration.components.feed.Component), Business Object
         * mode(sap.collaboration.FeedType.BusinessObjectGroups). Note that the Group Feed component does not display
         * any updates related to the business object from the back-end system (system updates).
         *
         * Social Timeline
         */
        class Component extends sap.ui.core.UIComponent {
          /**
           * Constructor for the Social Timeline Component.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers.
           *
           * If the name of a setting is ambiguous (e.g. a property has the same name as an event), then the framework
           * assumes property, aggregation, association, event in that order. To override this automatic resolution,
           * one of the prefixes "aggregation:", "association:" or "event:" can be added to the name of the setting
           * (such a prefixed name must be enclosed in single or double quotes).
           *
           * The supported settings are:
           * 	 - Properties
           * 	{@link #getEnableSocial enableSocial} : boolean (default: true)
           * 	 - {@link #getAlignment alignment} : sap.suite.ui.commons.TimelineAlignment (default: sap.suite.ui.commons.TimelineAlignment.Right)
           *
           * 	 - {@link #getAxisOrientation axisOrientation} : sap.suite.ui.commons.TimelineAxisOrientation (default:
           * 			sap.suite.ui.commons.TimelineAxisOrientation.Vertical)
           * 	 - {@link #getNoDataText noDataText} : string
           * 	 - {@link #getShowIcons showIcons} : boolean (default: true)
           * 	 - {@link #getVisible visible} : boolean (default: true)
           * 	 - {@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')
           * 	 - {@link #getCustomFilter customFilter} : {object}
           * 	 - Events
           * 	{@link sap.collaboration.components.socialtimeline.Component:customActionPress customActionPress} :
           * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: object
          );

          /**
           * Attaches event handler `fnFunction` to the {@link #event:customActionPress customActionPress} event of
           * this `sap.collaboration.components.socialtimeline.Component`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.collaboration.components.socialtimeline.Component` itself.
           */
          attachCustomActionPress(
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
             * Context object to call the event handler with. Defaults to this `sap.collaboration.components.socialtimeline.Component`
             * itself
             */
            oListener?: object
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * The method to create the Content (UI Control Tree) of the Component.
           */
          // @ts-ignore
          static createContent(): void;
          /**
           * Delete a Timeline Entry. This method should be called when a custom action requires a deletion of a Timeline
           * entry and should only be called if an a delete to the backend is performed successfully.
           */
          static deleteTimelineEntry(
            /**
             * the id of the timeline entry to delete
             */
            sId: string
          ): void;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:customActionPress customActionPress} event
           * of this `sap.collaboration.components.socialtimeline.Component`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachCustomActionPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Cleans up the component instance before destruction.
           */
          // @ts-ignore
          static exit(): void;
          /**
           * Creates a new subclass of class sap.collaboration.components.socialtimeline.Component with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:customActionPress customActionPress} to attached listeners.
           */
          fireCustomActionPress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Gets current value of property {@link #getAlignment alignment}.
           *
           * Default value is `Right`.
           */
          getAlignment(): sap.suite.ui.commons.TimelineAlignment;
          /**
           * Getter for property `axisOrientation`. Timeline axis orientation.
           *
           * Default value is `Vertical`
           */
          getAxisOrientation(): sap.suite.ui.commons.TimelineAxisOrientation;
          /**
           * Getter for property `customFilter`.
           *
           * Default value is `[]`. The customFilter is an array of objects, each object contains text and value.
           * Text is the name of the filter category and value is the filter value.
           */
          getCustomFilter(): any[];
          /**
           * Gets current value of property {@link #getEnableSocial enableSocial}.
           *
           * Default value is `true`.
           */
          getEnableSocial(): boolean;
          /**
           * Returns a metadata object for class sap.collaboration.components.socialtimeline.Component.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ComponentMetadata;
          /**
           * Getter for property `noDataText`. This text is displayed when the control has no data.
           *
           * Default value is empty/`undefined`
           */
          getNoDataText(): string;
          /**
           * Getter for property `showIcons`. Show icon on each Timeline item.
           *
           * Default value is `true`
           */
          getShowIcons(): boolean;
          /**
           * Getter for property `visible`. Set Timeline control visibility
           *
           * Default value is `true`
           */
          getVisible(): boolean;
          /**
           * Getter for property `width`. Sets the width of the Timeline.
           *
           * Default value is `100%`
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Initializes the Component instance after creation.
           */
          // @ts-ignore
          static init(): void;
          /**
           * Function is called when the rendering of the Component Container is completed.
           */
          // @ts-ignore
          static onAfterRendering(): void;
          /**
           * Function is called when the rendering of the Component Container is started.
           */
          // @ts-ignore
          static onBeforeRendering(): void;
          /**
           * Sets a new value for property {@link #getAlignment alignment}.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Right`.
           */
          setAlignment(
            /**
             * New value for property `alignment`
             */
            sAlignment?: sap.suite.ui.commons.TimelineAlignment
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Setter for property `axisOrientation`.
           *
           * Default value is `Vertical`
           */
          setAxisOrientation(
            /**
             * new value for property `axisOrientation`
             */
            oAxisOrientation: sap.suite.ui.commons.TimelineAxisOrientation
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Set the current business object for the social timeline to display. Note: The function setBusinessObjectMap
           * must be called once before calling setBusinessObject for the first time.
           */
          static setBusinessObject(
            /**
             * an object that contains the key and name for the business object
             */
            oObject: object
          ): void;
          /**
           * @deprecated (since 1.28.5) - This method is deprecated, use method setBusinessObject instead.
           *
           * Set the current business object for the social timeline to display. Note: The function setBusinessObjectMap
           * must be called once before calling setBusinessObjectKey for the first time.
           */
          static setBusinessObjectKey(sKey: string): void;
          /**
           * Set the business object map. It is used to initialize the data needed to retrieve the timeline entries.
           * This function must be called once before calling setBusinessObjectKey for the first time.
           */
          static setBusinessObjectMap(
            /**
             * required - JSON object containing the following properties:
             * 	{sap.ui.model.odata.ODataModel} serviceModel required - OData model to retrieve timeline entries {string}
             * servicePath: The relative path to the OData service for the business object (example: "/sap/opu/odata/sap/ODATA_SRV")
             * {string} collection: Entity collection name of the business object {string} applicationContext:
             * The application context (example: "CRM", "SD", etc.) {function} customActionCallback: A callback
             * function to determine which timeline entries should receive the custom action. The function should return
             * an array of text/value objects.
             */
            businessObjectMap: object
          ): void;
          /**
           * Sets a new value for property {@link #getCustomFilter customFilter}.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setCustomFilter(
            /**
             * New value for property `customFilter`
             */
            sCustomFilter: object[]
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Sets a new value for property {@link #getEnableSocial enableSocial}.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setEnableSocial(
            /**
             * New value for property `enableSocial`
             */
            bEnableSocial?: boolean
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Setter for property `noDataText`.
           *
           * Default value is empty/`undefined`
           */
          setNoDataText(
            /**
             * new value for property `noDataText`
             */
            sNoDataText: string
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Set property of component
           */
          // @ts-ignore
          static setProperty(): void;
          /**
           * Setter for the Component settings.
           */
          static setSettings(
            /**
             * A JSON object used to set the component settings, this object should contains the same properties used
             * in the constructor.
             */
            settings: object
          ): void;
          /**
           * Setter for property `showIcons`.
           *
           * Default value is `true`
           */
          setShowIcons(
            /**
             * new value for property `showIcons`
             */
            bShowIcons: boolean
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Setter for property `visible`.
           *
           * Default value is `true`
           */
          setVisible(
            /**
             * new value for property `visible`
             */
            bVisible: boolean
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Setter for property `width`.
           *
           * Default value is `100%`
           */
          setWidth(
            /**
             * new value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.collaboration.components.socialtimeline.Component;
          /**
           * Update a Timeline Entry text. This method should be called when a custom action requires a content update
           * of a Timeline entry and should only be called if an an update to the backend is performed successfully.
           */
          static updateTimelineEntry(
            /**
             * the text that will be displayed in the content of the timeline entry
             */
            sText: string,
            /**
             * the id of the timeline entry to update
             */
            sId: string
          ): void;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:customActionPress customActionPress} event of
           * this `sap.collaboration.components.socialtimeline.Component`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.collaboration.components.socialtimeline.Component` itself.
           */
          attachCustomActionPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.collaboration.components.socialtimeline.Component`
             * itself
             */
            oListener?: object
          ): sap.collaboration.components.socialtimeline.Component;
        }
      }
    }

    /**
     * Application Type (Mode)
     */
    enum AppType {
      /**
       * Fiori Split App
       */
      split,
      /**
       * SAP Jam Feed Widget Wrapper
       */
      widget
    }
    /**
     * Feed Types to be displayed by the Social Timeline
     */
    enum DisplayFeedType {
      /**
       * The main feed for the Business Record Feed
       */
      BusinessRecordFeed,
      /**
       * Group feeds where the business record is primary or featured
       */
      GroupFeedsWhereBusinessRecordIsLinked
    }
    /**
     * Feed Types
     */
    enum FeedType {
      /**
       * The mode type that accepts the OData details of a business object. Users will be able to select groups
       * where the business object is featured or primary.
       */
      BusinessObjectGroups,
      /**
       * @deprecated (since 1.30.0) - The feed type was deprecated because the original feed dialog component
       * does not use it anymore. It also does not conform to naming conventions.
       *
       * Company feed type
       */
      company,
      /**
       * @deprecated (since 1.30.0) - The feed type was deprecated because the original feed dialog component
       * does not use it anymore. It also does not conform to naming conventions.
       *
       * Follows feed type
       */
      follows,
      /**
       * @deprecated (since 1.30.0) - The feed type was deprecated because the original feed dialog component
       * does not use it anymore. It also does not conform to naming conventions.
       *
       * Group feed type
       */
      group,
      /**
       * The mode type that accepts an array of group IDs. Users will be able to select these groups from a selector.
       * The list will have the groups' names.
       */
      GroupIds,
      /**
       * @deprecated (since 1.30.0) - The feed type was deprecated because the original feed dialog component
       * does not use it anymore. It also does not conform to naming conventions.
       *
       * Oject feed type
       */
      object,
      /**
       * @deprecated (since 1.30.0) - The feed type was deprecated because the original feed dialog component
       * does not use it anymore. It also does not conform to naming conventions.
       *
       * Object group feed type
       */
      objectGroup,
      /**
       * Users of this mode type will be able to select from groups where they are members. This mode is used
       * by the feed component. In the feed component, the list of groups displayed in the pop up will be the
       * current user's personal groups.
       */
      UserGroups
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/collaboration/components/feed/Component": undefined;

    "sap/collaboration/components/fiori/feed/dialog/Component": undefined;

    "sap/collaboration/components/fiori/feed/Component": undefined;

    "sap/collaboration/components/fiori/notification/Component": undefined;

    "sap/collaboration/components/fiori/sharing/attachment/Attachment": undefined;

    "sap/collaboration/components/fiori/sharing/dialog/Component": undefined;

    "sap/collaboration/components/fiori/sharing/Component": undefined;

    "sap/collaboration/components/socialprofile/Component": undefined;

    "sap/collaboration/components/socialtimeline/Component": undefined;
  }
}
