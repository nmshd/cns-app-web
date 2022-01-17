// For Library Version: 1.84.3

declare namespace sap {
  namespace ui {
    /**
     * SAPUI5 library with controls specialized for SAP Fiori apps.
     */
    namespace integration {
      namespace designtime {
        namespace baseEditor {
          namespace layout {
            interface Form {}
          }

          namespace propertyEditor {
            namespace iconEditor {
              /**
               * @SINCE 1.81
               * @EXPERIMENTAL
               *
               * Validates if the provided value belongs to the icon pool.
               */
              namespace IsInIconPool {
                /**
                 * Validator function
                 */
                function validate(
                  /**
                   * Value to validate
                   */
                  vValue: boolean | string
                ): boolean;
              }
            }

            interface arrayEditor {}

            interface booleanEditor {}

            interface dateEditor {}

            interface dateTimeEditor {}

            interface enumStringEditor {}

            interface groupEditor {}

            interface integerEditor {}

            interface jsonEditor {}

            interface listEditor {}

            interface mapEditor {}

            interface numberEditor {}

            interface selectEditor {}

            interface stringEditor {}

            interface textAreaEditor {}
          }

          namespace validator {
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value is a boolean or binding string.
             */
            namespace IsBoolean {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                vValue: boolean | string
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value can be parsed to a valid date.
             */
            namespace IsDate {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Date string to validate
                 */
                sDateString: string
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value is an integer or binding string.
             */
            namespace IsInteger {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                vValue: number | string
              ): boolean;
            }
            /**
             * @SINCE 1.85
             * @EXPERIMENTAL
             *
             * Validates if the provided value is a boolean or binding string.
             */
            namespace IsJSONObject {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                vValue: object
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value is a number or binding string.
             */
            namespace IsNumber {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                vValue: number | string
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value is one of the given keys.
             */
            namespace IsSelectedKey {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Key to validate
                 */
                sValue: string,
                /**
                 * Validator config
                 */
                oConfig: {
                  /**
                   * Available keys
                   */
                  keys: string[];
                }
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if none of the provided values is an invalid binding.
             */
            namespace IsStringList {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Strings to validate
                 */
                aValue: string[]
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided key is unique in a list of given keys.
             */
            namespace IsUniqueKey {
              /**
               * Validator function
               */
              function validate(
                /**
                 * New key value to validate
                 */
                sValue: string,
                /**
                 * Validator config
                 */
                oConfig: {
                  /**
                   * Existing keys
                   */
                  keys: string[];
                  /**
                   * Previous key value
                   */
                  currentKey: string;
                }
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided list contains no duplicates.
             */
            namespace IsUniqueList {
              /**
               * Validator function
               */
              function validate(
                /**
                 * List to validate
                 */
                aValue: string
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value is a valid binding.
             */
            namespace IsValidBinding {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                sValue: string,
                /**
                 * Validator config
                 */
                oConfig: {
                  /**
                   * Whether strings which don't contain a binding are allowed, default is false
                   */
                  allowPlainStrings: boolean;
                }
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value doesn't exceed the maximum length.
             */
            namespace MaxLength {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                vValue: boolean | string
              ): boolean;
            }
            /**
             * @SINCE 1.81
             * @EXPERIMENTAL
             *
             * Validates if the provided value doesn't contain a binding.
             */
            namespace NotABinding {
              /**
               * Validator function
               */
              function validate(
                /**
                 * Value to validate
                 */
                sValue: string
              ): boolean;
            }
          }
        }

        namespace cardEditor {
          namespace propertyEditor {
            interface complexMapEditor {}

            interface destinationsEditor {}

            interface iconEditor {}

            interface parametersEditor {}
          }
        }

        namespace editor {
          namespace fields {
            interface viz {}
          }
        }

        interface propertyEditors {}
      }

      namespace widgets {
        /**
         * @EXPERIMENTAL (since 1.79)
         *
         * Facade of the {@link sap.ui.integration.widgets.Card} control.
         */
        interface CardFacade {
          /**
           * @SINCE 1.70
           * @EXPERIMENTAL (since 1.70)
           *
           * Gets current value of property {@link #getBaseUrl baseUrl}.
           *
           * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
           * of a URL.
           */
          getBaseUrl(): sap.ui.core.URI;
          /**
           * @EXPERIMENTAL (since 1.77)
           *
           * Gets values of manifest parameters combined with the parameters from `parameters` property.
           *
           * **Notes**
           *
           * - Use this method when the manifest is ready. Check `manifestReady` event.
           *
           * - Use when developing a Component card.
           */
          getCombinedParameters(): any;
          /**
           * @EXPERIMENTAL (since 1.77)
           *
           * Returns a value from the Manifest based on the specified path.
           *
           * **Note** Use this method when the manifest is ready. Check `manifestReady` event.
           */
          getManifestEntry(
            /**
             * The path to return a value for.
             */
            sPath: string
          ): Object;
          /**
           * @EXPERIMENTAL (since 1.65)
           *
           * Gets current value of property {@link #getParameters parameters}.
           *
           * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
           * containing parameters in format `{parameterKey: parameterValue}`.
           */
          getParameters(): object;
          /**
           * @EXPERIMENTAL (since 1.83)
           *
           * Gets translated text from the i18n properties files configured for this card.
           *
           * For more details see {@link sap.base.i18n.ResourceBundle#getText}.
           */
          getTranslatedText(
            /**
             * Key to retrieve the text for
             */
            sKey: string,
            /**
             * List of parameter values which should replace the placeholders "{n}" (n is the index) in
             * the found locale-specific string value. Note that the replacement is done whenever `aArgs` is given,
             * no matter whether the text contains placeholders or not and no matter whether `aArgs` contains a value
             * for n or not.
             */
            aArgs?: string[],
            /**
             * If set, `undefined` is returned instead of the key string, when the key is not found in any bundle or
             * fallback bundle.
             */
            bIgnoreKeyFallback?: boolean
          ): string;
          /**
           * @EXPERIMENTAL (since 1.79)
           *
           * Performs an HTTP request using the given configuration.
           */
          request(
            /**
             * The configuration of the request.
             */
            oConfiguration: {
              /**
               * The URL of the resource.
               */
              url: string;
              /**
               * The mode of the request. Possible values are "cors", "no-cors", "same-origin".
               */
              mode?: string;
              /**
               * The HTTP method. Possible values are "GET", "POST".
               */
              method?: string;
              /**
               * The request parameters. If the method is "POST" the parameters will be put as key/value pairs into the
               * body of the request.
               */
              parameters?: Object;
              /**
               * The expected Content-Type of the response. Possible values are "xml", "json", "text", "script", "html",
               * "jsonp". Note: Complex Binding is not supported when a dataType is provided. Serialization of the response
               * to an object is up to the developer.
               */
              dataType?: Object;
              /**
               * The HTTP headers of the request.
               */
              headers?: Object;
              /**
               * Indicates whether cross-site requests should be made using credentials.
               */
              withCredentials?: boolean;
            }
          ): any;
          /**
           * @EXPERIMENTAL (since 1.81)
           *
           * Displays a message strip on top of the content with the given text.
           *
           * **Note** Currently only available for an Adaptive Card.
           */
          showMessage(
            /**
             * The message.
             */
            sMessage: string,
            /**
             * Type of the message.
             */
            sType: any
          ): void;
          /**
           * @EXPERIMENTAL (since 1.84)
           *
           * Triggers an action inside the card.
           *
           * Use this method if you need to trigger an action programmatically from inside an `Extension` or from
           * a Component card.
           *
           * For other use cases use the manifest to define the actions. See {@link https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions}
           *
           * Example:
           * ```javascript
           *
           * oCard.triggerAction({
           *     type: "Navigation",
           *     parameters: {
           *         url: "...",
           *         target: "_blank"
           *     }
           * });
           * ```
           */
          triggerAction(
            /**
             * The settings of the action.
             */
            oAction: {
              /**
               * The type of the action.
               */
              type: sap.ui.integration.CardActionType;
              /**
               * Additional parameters which will be used by the action handler to perform the action.
               */
              parameters?: object;
            }
          ): void;
        }

        interface $CardSettings extends sap.f.$CardBaseSettings {
          /**
           * The URL of the manifest or an object.
           */
          manifest?: any;

          /**
           * @EXPERIMENTAL (since 1.65)
           *
           * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
           * containing parameters in format `{parameterKey: parameterValue}`.
           */
          parameters?: object;

          /**
           * @SINCE 1.65
           * @EXPERIMENTAL (since 1.65)
           *
           * Defines the state of the `Card`. When set to `Inactive`, the `Card` doesn't make requests.
           */
          dataMode?: sap.ui.integration.CardDataMode;

          /**
           * @SINCE 1.70
           * @EXPERIMENTAL (since 1.70)
           *
           * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
           * of a URL.
           */
          baseUrl?: sap.ui.core.URI;

          /**
           * @SINCE 1.76
           * @EXPERIMENTAL (since 1.76)
           *
           * Defines a list of configuration settings, which will be merged into the original manifest.
           *
           * This can be a list of flexibility changes generated during designtime.
           *
           * Each level of changes is an item in the list. The change has property "content" which contains the configuration,
           * which will be merged on top of the original `sap.card` section.
           *
           * Example:
           * ```javascript
           *
           * [
           *     {"content": {"header": {"title": "My title"}}},
           *     {"content": {"header": {"title": "My new title"}}}
           * ]
           * ```
           */
          manifestChanges?: object[];

          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Fired when an action is triggered on the card.
           */
          action?: Function;

          /**
           * @EXPERIMENTAL (since 1.72)
           *
           * Fired when the manifest is loaded.
           */
          manifestReady?: Function;

          /**
           * The host.
           */
          host?: sap.ui.core.Control | string;
        }
        /**
         * @SINCE 1.62
         *
         * A control that represents a container with a header and content.
         *
         * Overview: Cards are small user interface elements which provide the most important information from an
         * app, related to a specific role or task. The information is represented in a compact manner, allowing
         * for actions to be executed. Cards can be described as small representations of an app which can be integrated
         * in different systems.
         *
         * The integration card is defined in a declarative way, using a manifest.json to be:
         * 	 - Easily integrated into apps
         * 	 - Easily reused across apps
         * 	 - Understandable by other technologies
         * 	 - Self-contained (has a built-in functionality and doesn't need external configuration)
         * 	 - Dynamic parameter handling
         * 	 - Clear separation of the roles of the card and app developers
         *
         * The role of the card developer is to describe the card in a manifest.json file and define:
         * 	 - Header
         * 	 - Content
         * 	 - Data source
         * 	 - Possible actions
         *
         * The role of the app developer is to integrate the card into the app and define:
         * 	 - The dimensions of the card inside a layout of choice, using the `width` and `height` properties
         * 	 - The behavior for the actions described in the manifest.json file, using the action event
         *
         * **You can learn more about integration cards in the Card
         * Explorer**
         *
         * When to use
         * 	 - When you want to reuse the card across apps.
         * 	 - When you need easy integration and configuration.
         *
         * When not to use
         * 	 - When you need more header and content flexibility.
         * 	 - When you have to achieve simple card visualization. For such cases, use: {@link sap.f.Card sap.f.Card}.
         *
         * 	 - When you have to use an application model. For such cases, use: {@link sap.f.Card sap.f.Card}.
         * 	 - When you need complex behavior. For such cases, use: {@link sap.f.Card sap.f.Card}.
         */
        class Card extends sap.f.CardBase {
          /**
           * Constructor for a new `Card`.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           * See:
           * 	{@link topic:5b46b03f024542ba802d99d67bc1a3f4 Cards}
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $CardSettings
          );

          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
           *
           * Fired when an action is triggered on the card.
           */
          attachAction(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.72)
           *
           * Attaches event handler `fnFunction` to the {@link #event:manifestReady manifestReady} event of this `sap.ui.integration.widgets.Card`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
           *
           * Fired when the manifest is loaded.
           */
          attachManifestReady(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachAction(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.72)
           *
           * Detaches event handler `fnFunction` from the {@link #event:manifestReady manifestReady} event of this
           * `sap.ui.integration.widgets.Card`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachManifestReady(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * Creates a new subclass of class sap.ui.integration.widgets.Card with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.f.CardBase.extend}.
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
           * @EXPERIMENTAL (since 1.64)
           *
           * Fires event {@link #event:action action} to attached listeners.
           *
           * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
           * event object. The return value of this method indicates whether the default action should be executed.
           */
          fireAction(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * The action source.
               */
              actionSource?: sap.ui.core.Control;
              /**
               * The manifest parameters related to the triggered action.
               */
              manifestParameters?: object;
              /**
               * The parameters related to the triggered action.
               */
              parameters?: object;
              /**
               * The type of the action.
               */
              type?: sap.ui.integration.CardActionType;
            }
          ): boolean;
          /**
           * @EXPERIMENTAL (since 1.72)
           *
           * Fires event {@link #event:manifestReady manifestReady} to attached listeners.
           */
          fireManifestReady(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * @SINCE 1.70
           * @EXPERIMENTAL (since 1.70)
           *
           * Gets current value of property {@link #getBaseUrl baseUrl}.
           *
           * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
           * of a URL.
           */
          getBaseUrl(): sap.ui.core.URI;
          /**
           * Implements sap.f.ICard interface.
           */
          // @ts-ignore
          getCardContent(): sap.ui.core.Control;
          /**
           * Implements sap.f.ICard interface.
           */
          // @ts-ignore
          getCardHeader(): sap.f.cards.IHeader;
          /**
           * Implements sap.f.ICard interface.
           */
          // @ts-ignore
          getCardHeaderPosition(): sap.f.cards.HeaderPosition;
          /**
           * @EXPERIMENTAL (since 1.77)
           *
           * Gets values of manifest parameters combined with the parameters from `parameters` property.
           *
           * **Notes**
           *
           * - Use this method when the manifest is ready. Check `manifestReady` event.
           *
           * - Use when developing a Component card.
           */
          getCombinedParameters(): any;
          /**
           * @SINCE 1.65
           * @EXPERIMENTAL (since 1.65)
           *
           * Gets current value of property {@link #getDataMode dataMode}.
           *
           * Defines the state of the `Card`. When set to `Inactive`, the `Card` doesn't make requests.
           *
           * Default value is `Active`.
           */
          getDataMode(): sap.ui.integration.CardDataMode;
          /**
           * Returns the DOM Element that should get the focus.
           */
          // @ts-ignore
          getFocusDomRef(): Element;
          /**
           * ID of the element which is the current target of the association {@link #getHost host}, or `null`.
           */
          getHost(): sap.ui.core.ID;
          /**
           * @EXPERIMENTAL (since 1.77)
           *
           * Gets the instance of the `host` association.
           */
          getHostInstance(): sap.ui.integration.Host;
          /**
           * Overwrites getter for card manifest.
           */
          getManifest(): string | Object;
          /**
           * @SINCE 1.76
           * @EXPERIMENTAL (since 1.76)
           *
           * Gets current value of property {@link #getManifestChanges manifestChanges}.
           *
           * Defines a list of configuration settings, which will be merged into the original manifest.
           *
           * This can be a list of flexibility changes generated during designtime.
           *
           * Each level of changes is an item in the list. The change has property "content" which contains the configuration,
           * which will be merged on top of the original `sap.card` section.
           *
           * Example:
           * ```javascript
           *
           * [
           *     {"content": {"header": {"title": "My title"}}},
           *     {"content": {"header": {"title": "My new title"}}}
           * ]
           * ```
           */
          getManifestChanges(): object[];
          /**
           * @EXPERIMENTAL (since 1.77)
           *
           * Returns a value from the Manifest based on the specified path.
           *
           * **Note** Use this method when the manifest is ready. Check `manifestReady` event.
           */
          getManifestEntry(
            /**
             * The path to return a value for.
             */
            sPath: string
          ): Object;
          /**
           * Returns a metadata object for class sap.ui.integration.widgets.Card.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @EXPERIMENTAL (since 1.83)
           *
           * Gets translated text from the i18n properties files configured for this card.
           *
           * For more details see {@link sap.base.i18n.ResourceBundle#getText}.
           */
          getTranslatedText(
            /**
             * Key to retrieve the text for
             */
            sKey: string,
            /**
             * List of parameter values which should replace the placeholders "{n}" (n is the index) in
             * the found locale-specific string value. Note that the replacement is done whenever `aArgs` is given,
             * no matter whether the text contains placeholders or not and no matter whether `aArgs` contains a value
             * for n or not.
             */
            aArgs?: string[],
            /**
             * If set, `undefined` is returned instead of the key string, when the key is not found in any bundle or
             * fallback bundle.
             */
            bIgnoreKeyFallback?: boolean
          ): string;
          /**
           * @EXPERIMENTAL (since 1.65)
           */
          isReady(): boolean;
          /**
           * @EXPERIMENTAL (since 1.73)
           *
           * Loads the module designtime/Card.designtime or the module given in "sap.card": { "designtime": "designtime/Own.designtime"
           * } This file should contain the designtime configuration for the card.
           *
           * Returns a promise that resolves with an object { designtime: the designtime modules response manifest:
           * the complete manifest json } The promise is rejected if the module cannot be loaded with an object: {
           * error: "Card.designtime not found" }
           */
          loadDesigntime(): any;
          /**
           * @EXPERIMENTAL (since 1.65)
           *
           * Refreshes the card by re-applying the manifest settings and triggering all data requests.
           */
          refresh(): void;
          /**
           * @EXPERIMENTAL (since 1.79)
           *
           * Performs an HTTP request using the given configuration.
           */
          request(
            /**
             * The configuration of the request.
             */
            oConfiguration: {
              /**
               * The URL of the resource.
               */
              url: string;
              /**
               * The mode of the request. Possible values are "cors", "no-cors", "same-origin".
               */
              mode?: string;
              /**
               * The HTTP method. Possible values are "GET", "POST".
               */
              method?: string;
              /**
               * The request parameters. If the method is "POST" the parameters will be put as key/value pairs into the
               * body of the request.
               */
              parameters?: Object;
              /**
               * The expected Content-Type of the response. Possible values are "xml", "json", "text", "script", "html",
               * "jsonp". Note: Complex Binding is not supported when a dataType is provided. Serialization of the response
               * to an object is up to the developer.
               */
              dataType?: Object;
              /**
               * The HTTP headers of the request.
               */
              headers?: Object;
              /**
               * Indicates whether cross-site requests should be made using credentials.
               */
              withCredentials?: boolean;
            }
          ): any;
          /**
           * @SINCE 1.70
           * @EXPERIMENTAL (since 1.70)
           *
           * Sets a new value for property {@link #getBaseUrl baseUrl}.
           *
           * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
           * of a URL.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setBaseUrl(
            /**
             * New value for property `baseUrl`
             */
            sBaseUrl?: sap.ui.core.URI
          ): sap.ui.integration.widgets.Card;
          /**
           * @SINCE 1.65
           * @EXPERIMENTAL (since 1.65)
           *
           * Sets a new value for the `dataMode` property.
           */
          setDataMode(
            /**
             * The mode to set to the Card.
             */
            sMode: sap.ui.integration.CardDataMode
          ): sap.ui.integration.widgets.Card;
          /**
           * Sets the associated {@link #getHost host}.
           */
          setHost(
            /**
             * ID of an element which becomes the new target of this host association; alternatively, an element instance
             * may be given
             */
            oHost: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.integration.widgets.Card;
          /**
           * Sets a new value for property {@link #getManifest manifest}.
           *
           * The URL of the manifest or an object.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setManifest(
            /**
             * New value for property `manifest`
             */
            oManifest?: any
          ): sap.ui.integration.widgets.Card;
          /**
           * @SINCE 1.76
           * @EXPERIMENTAL (since 1.76)
           *
           * Sets a new value for property {@link #getManifestChanges manifestChanges}.
           *
           * Defines a list of configuration settings, which will be merged into the original manifest.
           *
           * This can be a list of flexibility changes generated during designtime.
           *
           * Each level of changes is an item in the list. The change has property "content" which contains the configuration,
           * which will be merged on top of the original `sap.card` section.
           *
           * Example:
           * ```javascript
           *
           * [
           *     {"content": {"header": {"title": "My title"}}},
           *     {"content": {"header": {"title": "My new title"}}}
           * ]
           * ```
           *
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setManifestChanges(
            /**
             * New value for property `manifestChanges`
             */
            sManifestChanges: object[]
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.81)
           *
           * Displays a message strip on top of the content with the given text.
           *
           * **Note** Currently only available for an Adaptive Card.
           */
          showMessage(
            /**
             * The message.
             */
            sMessage: string,
            /**
             * Type of the message.
             */
            sType: any
          ): void;
          /**
           * @EXPERIMENTAL (since 1.84)
           *
           * Triggers an action inside the card.
           *
           * Use this method if you need to trigger an action programmatically from inside an `Extension` or from
           * a Component card.
           *
           * For other use cases use the manifest to define the actions. See {@link https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions}
           *
           * Example:
           * ```javascript
           *
           * oCard.triggerAction({
           *     type: "Navigation",
           *     parameters: {
           *         url: "...",
           *         target: "_blank"
           *     }
           * });
           * ```
           */
          triggerAction(
            /**
             * The settings of the action.
             */
            oAction: {
              /**
               * The type of the action.
               */
              type: sap.ui.integration.CardActionType;
              /**
               * Additional parameters which will be used by the action handler to perform the action.
               */
              parameters?: object;
            }
          ): void;
          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
           *
           * Fired when an action is triggered on the card.
           */
          attachAction(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.72)
           *
           * Attaches event handler `fnFunction` to the {@link #event:manifestReady manifestReady} event of this `sap.ui.integration.widgets.Card`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
           *
           * Fired when the manifest is loaded.
           */
          attachManifestReady(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
        }
      }

      interface $HostSettings extends sap.ui.core.$ElementSettings {
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * The actions configuration.
         */
        actions?: any;

        /**
         * A function that resolves the given destination name to a URL.
         *
         * The Card calls this function when it needs to send a request to a destination. Function returns the URL
         * to which the request is sent.
         *
         * If a card depends on a destination, but this callback is not implemented, an error will be logged.
         *
         * The callback receives `destinationName` as parameter and returns a string with the URL. Or alternatively
         * the callback may return a `Promise` with the URL as an argument.
         */
        resolveDestination?: Function;

        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Fired when an action is triggered.
         */
        action?: Function;
      }
      /**
       * @SINCE 1.75
       * @EXPERIMENTAL (since 1.75)
       *
       * Brings JavaScript capabilities for an {@link sap.ui.integration.widgets.Card} where custom logic can
       * be implemented.
       */
      class Designtime extends sap.ui.base.ManagedObject {
        /**
         * Constructor for a new `Designtime`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         *
         * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor
         * sap.ui.base.ManagedObject} can be used.
         */
        constructor(
          /**
           * ID for the new Designtime, generated automatically if no ID is given.
           */
          sId?: string,
          /**
           * Initial settings for the new Designtime.
           */
          mSettings?: object
        );

        /**
         * Creates a new subclass of class sap.ui.integration.Designtime with name `sClassName` and enriches it
         * with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
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
         * Returns an interface to the card, which uses this extension.
         */
        getCard(): sap.ui.integration.widgets.CardFacade;
        /**
         * Returns a metadata object for class sap.ui.integration.Designtime.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.ManagedObjectMetadata;
      }
      /**
       * @SINCE 1.75
       * @EXPERIMENTAL (since 1.75)
       *
       * Brings JavaScript capabilities for an {@link sap.ui.integration.widgets.Card} where custom logic can
       * be implemented.
       */
      class Extension extends sap.ui.base.ManagedObject {
        /**
         * Constructor for a new `Extension`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * ID for the new extension, generated automatically if no ID is given.
           */
          sId?: string,
          /**
           * Initial settings for the new extension.
           */
          mSettings?: object
        );

        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Extension`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.integration.Extension` itself.
         *
         * Fired when an action is triggered in the card.
         */
        attachAction(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.integration.Extension` itself
           */
          oListener?: object
        ): sap.ui.integration.Extension;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.Extension`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachAction(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.integration.Extension;
        /**
         * Creates a new subclass of class sap.ui.integration.Extension with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
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
         * @EXPERIMENTAL (since 1.75)
         *
         * Fires event {@link #event:action action} to attached listeners.
         *
         * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
         * event object. The return value of this method indicates whether the default action should be executed.
         */
        fireAction(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The card the action is fired from.
             */
            card?: sap.ui.core.Control;
            /**
             * The action configuration.
             */
            actionConfig?: object;
            /**
             * The action source.
             */
            actionSource?: sap.ui.core.Control;
            /**
             * The parameters related to the triggered action.
             */
            parameters?: object;
            /**
             * The type of the action.
             */
            type?: sap.ui.integration.CardActionType;
          }
        ): boolean;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Gets current value of property {@link #getActions actions}.
         *
         * The actions configuration.
         */
        getActions(): any;
        /**
         * Returns an interface to the card, which uses this extension.
         */
        getCard(): sap.ui.integration.widgets.CardFacade;
        /**
         * @EXPERIMENTAL (since 1.79)
         *
         * Gets current value of property {@link #getFormatters formatters}.
         *
         * The formatters, which can be used in the manifest.
         */
        getFormatters(): object;
        /**
         * Returns a metadata object for class sap.ui.integration.Extension.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.ManagedObjectMetadata;
        /**
         * Called when the card is ready.
         */
        onCardReady(): void;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Extension`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.integration.Extension` itself.
         *
         * Fired when an action is triggered in the card.
         */
        attachAction(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.integration.Extension` itself
           */
          oListener?: object
        ): sap.ui.integration.Extension;
      }
      /**
       * @SINCE 1.75
       * @EXPERIMENTAL (since 1.75)
       *
       * Provides application-level functions and services to an integration card.
       *
       * Examples may include, but are not limited to options like: share a card, remove a card.
       */
      class Host extends sap.ui.core.Element {
        /**
         * Constructor for a new `Host`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * ID for the new host, generated automatically if no ID is given.
           */
          sId?: string,
          /**
           * Initial settings for the new host.
           */
          mSettings?: $HostSettings
        );

        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Host`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.integration.Host` itself.
         *
         * Fired when an action is triggered.
         */
        attachAction(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
           */
          oListener?: object
        ): sap.ui.integration.Host;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.Host`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachAction(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.integration.Host;
        /**
         * Creates a new subclass of class sap.ui.integration.Host with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
         * @EXPERIMENTAL (since 1.75)
         *
         * Fires event {@link #event:action action} to attached listeners.
         *
         * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
         * event object. The return value of this method indicates whether the default action should be executed.
         */
        fireAction(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The card the action is fired from.
             */
            card?: sap.ui.core.Control;
            /**
             * The action configuration.
             */
            actionConfig?: object;
            /**
             * The action source.
             */
            actionSource?: sap.ui.core.Control;
            /**
             * The parameters related to the triggered action.
             */
            parameters?: object;
            /**
             * The type of the action.
             */
            type?: sap.ui.integration.CardActionType;
          }
        ): boolean;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Gets current value of property {@link #getActions actions}.
         *
         * The actions configuration.
         */
        getActions(): any;
        /**
         * @SINCE 1.83
         *
         * Returns the context object for the Card Editor design-time environment Contexts can be used to configure
         * Cards with information available in the host environment. Each entry in the list should contain design-time
         * information. A label, placeholder, and description should be provided.
         *
         * Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone
         * user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged
         * on user" } } } ... }
         *
         * The context information and texts should be translated as they appear in the design-time UI of the Card
         * Editor.
         */
        getContexts(): any;
        /**
         * @SINCE 1.83
         *
         * Resolves the value for a given path in the context of the host Contexts can be used to configure Cards
         * with information available in the host environment.
         *
         * Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone
         * user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged
         * on user" } } } ... }
         *
         * Example path to the current user id of the context sPath = "sap.workzone/currentUser/id" parameter: {
         * userId: { value: "{context>sap.workzone/currentUser/id}" resolves to UserId } }
         */
        getContextValue(
          /**
           * The path to a context
           */
          sPath: string
        ): any;
        /**
         * Resolves the destination and returns its URL.
         */
        getDestination(
          /**
           * The name of the destination. Most often the name which is used in the SAP Cloud Platform.
           */
          sDestinationName: string
        ): any;
        /**
         * @SINCE 1.83
         *
         * Returns the list of destinations for the Card Editor design-time environment List entries are objects
         * that contain at least the name. { "name": "DestinationName" }
         */
        getDestinations(): any;
        /**
         * Returns a metadata object for class sap.ui.integration.Host.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getResolveDestination resolveDestination}.
         *
         * A function that resolves the given destination name to a URL.
         *
         * The Card calls this function when it needs to send a request to a destination. Function returns the URL
         * to which the request is sent.
         *
         * If a card depends on a destination, but this callback is not implemented, an error will be logged.
         *
         * The callback receives `destinationName` as parameter and returns a string with the URL. Or alternatively
         * the callback may return a `Promise` with the URL as an argument.
         */
        getResolveDestination(): Function;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Sets a new value for property {@link #getActions actions}.
         *
         * The actions configuration.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setActions(
          /**
           * New value for property `actions`
           */
          sActions: any
        ): sap.ui.integration.Host;
        /**
         * Sets a new value for property {@link #getResolveDestination resolveDestination}.
         *
         * A function that resolves the given destination name to a URL.
         *
         * The Card calls this function when it needs to send a request to a destination. Function returns the URL
         * to which the request is sent.
         *
         * If a card depends on a destination, but this callback is not implemented, an error will be logged.
         *
         * The callback receives `destinationName` as parameter and returns a string with the URL. Or alternatively
         * the callback may return a `Promise` with the URL as an argument.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setResolveDestination(
          /**
           * New value for property `resolveDestination`
           */
          fnResolveDestination: Function
        ): sap.ui.integration.Host;
        /**
         * @EXPERIMENTAL (since 1.75)
         *
         * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Host`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.integration.Host` itself.
         *
         * Fired when an action is triggered.
         */
        attachAction(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
           */
          oListener?: object
        ): sap.ui.integration.Host;
      }
      /**
       * @EXPERIMENTAL (since 1.64)
       *
       * Enumeration of possible card action types.
       */
      enum CardActionType {
        /**
         * @EXPERIMENTAL (since 1.76)
         *
         * Used for custom actions
         */
        Custom,
        /**
         * Used for navigation actions
         */
        Navigation,
        /**
         * Used for submit actions
         */
        Submit
      }
      /**
       * @SINCE 1.65
       * @EXPERIMENTAL (since 1.65)
       *
       * Possible data modes for `{@link sap.ui.integration.widgets.Card}`.
       */
      enum CardDataMode {
        /**
         * When in this mode, the card can make requests.
         */
        Active,
        /**
         * When in this mode, the card cannot make requests.
         */
        Inactive
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/integration/designtime/baseEditor/propertyEditor/arrayEditor/ArrayEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/booleanEditor/BooleanEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/dateEditor/DateEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/dateTimeEditor/DateTimeEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/enumStringEditor/EnumStringEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/groupEditor/GroupEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/iconEditor/IconEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/integerEditor/IntegerEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/jsonEditor/JsonEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/listEditor/ListEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/mapEditor/MapEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/numberEditor/NumberEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/selectEditor/SelectEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/stringEditor/StringEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/textAreaEditor/TextAreaEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/BaseEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/PropertyEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/PropertyEditors": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/complexMapEditor/ComplexMapEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/destinationsEditor/DestinationsEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/iconEditor/IconEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/parametersEditor/ParametersEditor": undefined;

    "sap/ui/integration/designtime/editor/fields/viz/ColorSelect": undefined;

    "sap/ui/integration/designtime/editor/fields/viz/IconSelect": undefined;

    "sap/ui/integration/designtime/editor/fields/viz/ShapeSelect": undefined;

    "sap/ui/integration/designtime/editor/fields/BooleanField": undefined;

    "sap/ui/integration/designtime/editor/fields/DateField": undefined;

    "sap/ui/integration/designtime/editor/fields/DateTimeField": undefined;

    "sap/ui/integration/designtime/editor/fields/DestinationField": undefined;

    "sap/ui/integration/designtime/editor/fields/IntegerField": undefined;

    "sap/ui/integration/designtime/editor/fields/ListField": undefined;

    "sap/ui/integration/designtime/editor/fields/NumberField": undefined;

    "sap/ui/integration/designtime/editor/fields/StringField": undefined;

    "sap/ui/integration/designtime/propertyEditors/BaseField": undefined;

    "sap/ui/integration/designtime/Preview": undefined;

    "sap/ui/integration/widgets/Card": undefined;

    "sap/ui/integration/widgets/CardFacade": undefined;

    "sap/ui/integration/Designtime": undefined;

    "sap/ui/integration/Extension": undefined;

    "sap/ui/integration/Host": undefined;
  }
}
