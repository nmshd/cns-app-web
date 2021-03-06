// For Library Version: 1.84.0

declare namespace sap {
    namespace ui {
        namespace generic {
            /**
             * SAPUI5 library that provides generic reuse functionality which can be used by Applications.
             */
            namespace app {
                /**
                 * @deprecated (since 1.83.0)
                 */
                namespace navigation {
                    /**
                     * @deprecated (since 1.83.0)
                     */
                    namespace service {
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.NavError} instead.
                         *
                         * An object that provides error handling information during runtime.
                         */
                        class NavError {
                            /**/
                            constructor(
                                /**
                                 * The code for an internal error of a consumer that allows you to track the source locations
                                 */
                                sErrorCode: string
                            )

                            /**
                             * Creates a new subclass of class sap.ui.generic.app.navigation.service.NavError with name `sClassName`
                             * and enriches it with the information contained in `oClassInfo`.
                             *
                             * `oClassInfo` might contain the same kind of information as described in {@link sap.fe.navigation.NavError.extend}.
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
                            ): Function
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the error code with which the instance has been created.
                             */
                            // @ts-ignore
                            getErrorCode(): string
                            /**
                             * Returns a metadata object for class sap.ui.generic.app.navigation.service.NavError.
                             */
                            // @ts-ignore
                            static getMetadata(): sap.ui.base.Metadata
                        }
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.NavigationHandler} instead.
                         *
                         * Creates a new NavigationHandler class by providing the required environment.
                         *  The `NavigationHandler` supports the verification of sensitive information. All properties that are
                         * part of `selectionVariant` and `valueTexts` will be verified if they are annotated as `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive`
                         * or `com.sap.vocabularies.UI.v1.ExcludeFromNavigationContext` and will be removed before the data is persisted
                         * as the app state.
                         *  Also, all properties annotated as `com.sap.vocabularies.Analytics.v1.Measure` will be removed from the
                         * data stored as the xapp state.
                         *  To verify the information to be removed, the `NavigationHandler` requires an unnamed model of type {@link
                         * sap.ui.model.odata.v2.ODataModel} on component level. It is possible to set such a model using the `setModel`
                         * method.
                         *  **Note:** The check for excluded data requires that the OData metadata has already been loaded completely.
                         *  If the OData metadata model has not been loaded completely, all properties are removed from the application
                         * context.
                         *  **Note:** This class requires that the UShell {@link sap.ushell.services.CrossApplicationNavigation}
                         * is available and initialized.
                         */
                        class NavigationHandler {
                            /**/
                            constructor(
                                /**
                                 * UI5 controller that contains a router and a component; typically the main controller of your application,
                                 * for example, a subclass of the sap.ca.scfld.md.controller.BaseFullscreenController if scaffolding is
                                 * used
                                 */
                                oController: object,
                                /**
                                 * Mode to be used to handle conflicts when merging URL parameters and the SelectionVariant class, see {@link
                                 * sap.ui.generic.app.navigation.service.ParamHandlingMode}
                                 */
                                sParamHandlingMode?: string
                            )

                            /**
                             * @SINCE 1.60.2
                             * @deprecated (since 1.83.0)
                             *
                             * The method creates a context url based on provided data. This context url can either be used as {@link
                             * sap.ui.generic.app.navigation.service.NavigationHandler#setParameterContextUrl ParameterContextUrl} or
                             * {@link sap.ui.generic.app.navigation.service.NavigationHandler#setFilterContextUrl FilterContextUrl}
                             */
                            // @ts-ignore
                            static constructContextUrl(
                                /**
                                 * used for url determination
                                 */
                                sEntitySetName: string,
                                /**
                                 * used for url determination. If omitted, the NavigationHandler model is used.
                                 */
                                oModel?: sap.ui.model.odata.v2.ODataModel
                            ): string
                            /**
                             * Creates a new subclass of class sap.ui.generic.app.navigation.service.NavigationHandler with name `sClassName`
                             * and enriches it with the information contained in `oClassInfo`.
                             *
                             * `oClassInfo` might contain the same kind of information as described in {@link sap.fe.navigation.NavigationHandler.extend}.
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
                            ): Function
                            /**
                             * Returns a metadata object for class sap.ui.generic.app.navigation.service.NavigationHandler.
                             */
                            // @ts-ignore
                            static getMetadata(): sap.ui.base.Metadata
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the application specific technical parameters. Technical parameters will not be added to the selection
                             * variant passed to the application. As a default the following values are considered as technical parameters:
                             *
                             * 	 - `sap-system`
                             * 	 - `sap-ushell-defaultedParameterNames`
                             * 	 - `"hcpApplicationId"`
                             */
                            // @ts-ignore
                            static getTechnicalParameters(): any[]
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Combines the given parameters and selection variant into a new selection variant containing properties
                             * from both, with the parameters overriding existing properties in the selection variant. The new selection
                             * variant does not contain any parameters. All parameters are merged into select options. The output of
                             * this function, converted to a JSON string, can be used for the {@link #.navigate NavigationHandler.navigate}
                             * method.
                             */
                            // @ts-ignore
                            static mixAttributesAndSelectionVariant(
                                /**
                                 * Object containing key/value pairs
                                 */
                                mSemanticAttributes: object,
                                /**
                                 * The selection variant in string format as provided by the SmartFilterBar control
                                 */
                                sSelectionVariant: string,
                                /**
                                 * Indicates whether semantic attributes with special values (see {@link sap.ui.generic.app.navigation.service.SuppressionBehavior
                                 * suppression behavior}) must be suppressed before they are combined with the selection variant; several
                                 * {@link sap.ui.generic.app.navigation.service.SuppressionBehavior suppression behaviors} can be combined
                                 * with the bitwise OR operator (|)
                                 */
                                iSuppressionBehavior?: number
                            ): object
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Navigation parameters as an object with key/value pairs or as a string representation of such an object.
                                 * If passed as an object, the properties are not checked against the `IsPotentialSensitive` or `Measure`
                                 * type.
                                 */
                                vNavigationParameters: object | string,
                                /**
                                 * Object for storing current state of the app
                                 */
                                oInnerAppData: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                     */
                                    selectionVariant?: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store arbitrary data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui state of the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * Callback that is called if an error occurs during navigation
                                 */
                                fnOnError: Function,
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Parses the incoming URL and returns a Promise. If this method detects a back navigation, the inner app
                             * state is returned in the resolved Promise. Otherwise startup parameters will be merged into the app state
                             * provided by cross app navigation, and a combined app state will be returned. The conflict resolution
                             * can be influenced with sParamHandlingMode defined in the constructor.
                             */
                            // @ts-ignore
                            static parseNavigation(): object
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `mInnerAppData` data.
                             *
                             *
                             * Processes navigation-related tasks related to beforePopoverOpens event handling for the SmartLink control
                             * and returns a Promise object. In particular, the following tasks are performed before the SmartLink popover
                             * can be opened:
                             * 	 - If `mInnerAppData` is provided, this inner app state is saved for back navigation at a later time.
                             *
                             * 	 - The table event parameters (semantic attributes) and the selection variant data are combined by calling
                             * 			the method {@link #.mixAttributesAndSelectionVariant mixAttributesAndSelectionVariant}.
                             * 	 - The combined data is saved as the cross app state to be handed over to the target app, and the corresponding
                             * 			sap-xapp-state key is set in the URL.
                             * 	 - All single selections ("including equal") of the combined selection data are passed to the SmartLink
                             * 			popover as semantic attributes.
                             * 	 - The method `oTableEventParameters.open()` is called. Note that this does not really open the popover,
                             * 			but the SmartLink control proceeds with firing the event `navigationTargetsObtained`.
                             */
                            // @ts-ignore
                            static processBeforeSmartLinkPopoverOpens(
                                /**
                                 * The parameters made available by the SmartTable control when the SmartLink control has been clicked,
                                 * an instance of a PopOver object
                                 */
                                oTableEventParameters: object,
                                /**
                                 * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                 */
                                sSelectionVariant: string,
                                /**
                                 * Object containing the current state of the app. If provided, opening the Popover is deferred until the
                                 * inner app data is saved in a consistent way.
                                 */
                                mInnerAppData?: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the the SmartFilterBar
                                     * control; if provided, the selection is merged into the semantic attributes
                                     */
                                    selectionVariant?: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store additional app-specific data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui presentationVariantof the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * Object containing the state which will be passed to the target screen.
                                 */
                                oExternalAppData?: {
                                    /**
                                     * Object containing selectionVariant, which will be passed to the target screen. If not set the sSelectionVariant
                                     * will be used.
                                     */
                                    selectionVariant?: object
                                    /**
                                     * Object containing the current ui presentationVariant of the app, which will be passed to the target screen
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions, which will be passed to the target screen
                                     */
                                    valueTexts?: object
                                }
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Changes the URL according to the current sAppStateKey. As an reaction route change event will be triggered.
                             */
                            // @ts-ignore
                            static replaceHash(
                                /**
                                 * the new app state key.
                                 */
                                sAppStateKey: string
                            ): void
                            /**
                             * @SINCE 1.60.0
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the model that is used for verification of sensitive information. If the model is not set, the unnamed
                             * component model is used for the verification of sensitive information.
                             */
                            // @ts-ignore
                            static setModel(
                                /**
                                 * for checking sensitive information
                                 */
                                oModel: sap.ui.model.odata.v2.ODataModel
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the application specific technical parameters. Technical parameters will not be added to the selection
                             * variant passed to the application. As a default the following values are considered as technical parameters:
                             *
                             * 	 - `sap-system`
                             * 	 - `sap-ushell-defaultedParameterNames`
                             * 	 - `"hcpApplicationId"`
                             */
                            // @ts-ignore
                            static setTechnicalParameters(
                                /**
                                 * list of parameter names to be considered as technical parameters. `null` or `undefined` may be used to
                                 * reset the complete list.
                                 */
                                aTechnicalParameters: any[]
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Changes the URL according to the current app state and stores the app state for later retrieval.
                             */
                            // @ts-ignore
                            static storeInnerAppState(
                                /**
                                 * Object containing the current state of the app
                                 */
                                mInnerAppData: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                     */
                                    selectionVariant: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store additional app-specific data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui state of the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * If set to false, the inner app hash will not be replaced until storing is successful; do not set to false
                                 * if you cannot react to the resolution of the Promise, for example, when calling the beforeLinkPressed
                                 * event
                                 */
                                bImmediateHashReplace?: boolean
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Changes the URL according to the current app state and stores the app state for later retrieval.
                             */
                            // @ts-ignore
                            static storeInnerAppStateWithImmediateReturn(
                                /**
                                 * Object containing the current state of the app
                                 */
                                mInnerAppData: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                     */
                                    selectionVariant: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store additional app-specific data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui state of the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * If set to false, the inner app hash will not be replaced until storing is successful; do not set to false
                                 * if you cannot react to the resolution of the Promise, for example, when calling the beforeLinkPressed
                                 * event. **Note:**If not provided it will be treated as set to false. **Note:**If set to true, the calling
                                 * instance has to ensure that a follow-on call to `replaceHash` will take place!
                                 */
                                bImmediateHashReplace?: boolean
                            ): Object
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Navigation parameters as an object with key/value pairs or as a string representation of such an object.
                                 * If passed as an object, the properties are not checked against the `IsPotentialSensitive` or `Measure`
                                 * type.
                                 */
                                vNavigationParameters: object | string,
                                /**
                                 * Object for storing current state of the app
                                 */
                                oInnerAppData: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                     */
                                    selectionVariant?: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store arbitrary data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui state of the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Navigation parameters as an object with key/value pairs or as a string representation of such an object.
                                 * If passed as an object, the properties are not checked against the `IsPotentialSensitive` or `Measure`
                                 * type.
                                 */
                                vNavigationParameters: object | string,
                                /**
                                 * Callback that is called if an error occurs during navigation
                                 */
                                fnOnError: Function,
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Object for storing current state of the app
                                 */
                                oInnerAppData: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                     */
                                    selectionVariant?: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store arbitrary data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui state of the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * Callback that is called if an error occurs during navigation
                                 */
                                fnOnError: Function,
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Navigation parameters as an object with key/value pairs or as a string representation of such an object.
                                 * If passed as an object, the properties are not checked against the `IsPotentialSensitive` or `Measure`
                                 * type.
                                 */
                                vNavigationParameters: object | string,
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Object for storing current state of the app
                                 */
                                oInnerAppData: {
                                    /**
                                     * Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
                                     */
                                    selectionVariant?: string
                                    /**
                                     * ID of the SmartTable variant
                                     */
                                    tableVariantId?: string
                                    /**
                                     * Object that can be used to store arbitrary data
                                     */
                                    customData?: object
                                    /**
                                     * Object containing the current ui state of the app
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions
                                     */
                                    valueTexts?: object
                                    /**
                                     * Object containing semanticDates filter information
                                     */
                                    semanticDates?: object
                                },
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Callback that is called if an error occurs during navigation
                                 */
                                fnOnError: Function,
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0) -
                             *  **Node:** If the `oExternalAppData` parameter is not supplied, the external app data will be calculated
                             * based on the `oInnerAppData` data.
                             *  SmartFilterBar control **Parameters:**   {object} **oError**
                             * Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
                             * which kind of error occurred  {string} **oError.errorCode**
                             * Code to identify the error  {string} **oError.type** Severity
                             * of the error (info/warning/error)  {array} **oError.params**
                             * An array of objects (typically strings) that describe additional value parameters required for generating
                             * the message
                             *
                             * Triggers a cross-app navigation after saving the inner and the cross-app states. Since 1.52.0 the navigation
                             * mode based on `sap-ushell-next-navmode` is taken into account. If set to `explace` the inner app state
                             * will not be changed. **Note:** The `sNavMode` argument can be used to overwrite the SAP Fiori launchpad
                             * default navigation for opening a URL in-place or ex-place.
                             */
                            // @ts-ignore
                            static navigate(
                                /**
                                 * Name of the semantic object of the target app
                                 */
                                sSemanticObject: string,
                                /**
                                 * Name of the action of the target app
                                 */
                                sActionName: string,
                                /**
                                 * Object for storing the state which will be forwarded to the target component.
                                 */
                                oExternalAppData: {
                                    /**
                                     * Object containing the current ui state of the app which will be forwarded to the target component.
                                     */
                                    presentationVariant?: object
                                    /**
                                     * Object containing value descriptions which will be forwarded to the target component.
                                     */
                                    valueTexts?: object
                                    /**
                                     * Stringified JSON object, which will be forwarded to the target component. If not provided the selectionVariant
                                     * will be constructed based on the vNavigationParameters.
                                     */
                                    selectionVariant?: object
                                },
                                /**
                                 * Argument is used to overwrite the FLP-configured target for opening a URL. If used, only the `explace`
                                 * or `inplace` values are allowed. Any other value will lead to an exception `NavigationHandler.INVALID_NAV_MODE`.
                                 */
                                sNavMode?: string
                            ): void
                        }
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.PresentationVariant} instead.
                         *
                         * Creates a new instance of a PresentationVariant class. If no parameter is passed, an new empty instance
                         * is created whose ID has been set to `""`. Passing a JSON-serialized string complying to the Selection
                         * Variant Specification will parse it, and the newly created instance will contain the same information.
                         */
                        class PresentationVariant {
                            /**/
                            constructor(
                                /**
                                 * If of type `string`, the selection variant is JSON-formatted; if of type `object`, the object represents
                                 * a selection variant
                                 */
                                vPresentationVariant?: string | object
                            )

                            /**
                             * Creates a new subclass of class sap.ui.generic.app.navigation.service.PresentationVariant with name `sClassName`
                             * and enriches it with the information contained in `oClassInfo`.
                             *
                             * `oClassInfo` might contain the same kind of information as described in {@link sap.fe.navigation.PresentationVariant.extend}.
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
                            ): Function
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the chart visualization property.
                             */
                            // @ts-ignore
                            static getChartVisualization(): any
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the current context URL intended for the query.
                             */
                            // @ts-ignore
                            static getContextUrl(): string
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the identification of the selection variant.
                             */
                            // @ts-ignore
                            static getID(): string
                            /**
                             * Returns a metadata object for class sap.ui.generic.app.navigation.service.PresentationVariant.
                             */
                            // @ts-ignore
                            static getMetadata(): sap.ui.base.Metadata
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the more trivial properties. Basically all properties with the exception of the Visualization.
                             */
                            // @ts-ignore
                            static getProperties(): any
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the table visualization property.
                             */
                            // @ts-ignore
                            static getTableVisualization(): any
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the current text / description of this selection variant.
                             */
                            // @ts-ignore
                            static getText(): string
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns `true` if the presentation variant does not contain any properties. nor ranges.
                             */
                            // @ts-ignore
                            static isEmpty(): boolean
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the chart visualization property.
                             */
                            // @ts-ignore
                            static setChartVisualization(
                                /**
                                 * to be used for the chart visualization.
                                 */
                                mProperties: any
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the context URL.
                             */
                            // @ts-ignore
                            static setContextUrl(
                                /**
                                 * The URL of the context
                                 */
                                sURL: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the identification of the selection variant.
                             */
                            // @ts-ignore
                            static setID(
                                /**
                                 * The new identification of the selection variant
                                 */
                                sId: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the more trivial properties. Basically all properties with the exception of the Visualization.
                             */
                            // @ts-ignore
                            static setProperties(
                                /**
                                 * properties to be used.
                                 */
                                mProperties: any
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the table visualization property.
                             */
                            // @ts-ignore
                            static setTableVisualization(
                                /**
                                 * to be used for the table visualization.
                                 */
                                mProperties: any
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the text / description of the selection variant.
                             */
                            // @ts-ignore
                            static setText(
                                /**
                                 * The new description to be used
                                 */
                                sNewText: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the external representation of the selection variant as JSON object.
                             */
                            // @ts-ignore
                            static toJSONObject(): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Serializes this instance into a JSON-formatted string.
                             */
                            // @ts-ignore
                            static toJSONString(): string
                        }
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.SelectionVariant} instead.
                         *
                         * Creates a new instance of a SelectionVariant class. If no parameter is passed, an new empty instance
                         * is created whose ID has been set to `""`. Passing a JSON-serialized string complying to the Selection
                         * Variant Specification will parse it, and the newly created instance will contain the same information.
                         */
                        class SelectionVariant {
                            /**/
                            constructor(
                                /**
                                 * If of type `string`, the selection variant is JSON-formatted; if of type `object`, the object represents
                                 * a selection variant
                                 */
                                vSelectionVariant?: string | object
                            )

                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the value of a parameter called `sName` to the new value `sValue`. If the parameter has already
                             * been set before, its value is overwritten.
                             */
                            // @ts-ignore
                            static addParameter(
                                /**
                                 * The name of the parameter to be set; the `null` value is not allowed
                                 */
                                sName: string,
                                /**
                                 * The value of the parameter to be set
                                 */
                                sValue: string
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Adds a new range to the list of select options for a given parameter.
                             */
                            // @ts-ignore
                            static addSelectOption(
                                /**
                                 * The name of the property for which the selection range is added
                                 */
                                sPropertyName: string,
                                /**
                                 * The sign of the range (**I**nclude or **E**xclude)
                                 */
                                sSign: string,
                                /**
                                 * The option of the range (**EQ** for "equals", **NE** for "not equals", **LE** for "less or equals", **GE**
                                 * for "greater or equals", **LT** for "less than" (and not equals), **GT** for "greater than" (and not
                                 * equals), **BT** for "between", or **CP** for "contains pattern" (ABAP-styled pattern matching with the
                                 * asterisk as wildcard)
                                 */
                                sOption: string,
                                /**
                                 * The single value or the lower boundary of the interval; the `null` value is not allowed
                                 */
                                sLow: string,
                                /**
                                 * Set only if sOption is **BT**: the upper boundary of the interval; must be `undefined` or `null` in all
                                 * other cases
                                 */
                                sHigh?: string
                            ): object
                            /**
                             * Creates a new subclass of class sap.ui.generic.app.navigation.service.SelectionVariant with name `sClassName`
                             * and enriches it with the information contained in `oClassInfo`.
                             *
                             * `oClassInfo` might contain the same kind of information as described in {@link sap.fe.navigation.SelectionVariant.extend}.
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
                            ): Function
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the current context URL intended for the filters.
                             */
                            // @ts-ignore
                            static getFilterContextUrl(): string
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the identification of the selection variant.
                             */
                            // @ts-ignore
                            static getID(): string
                            /**
                             * Returns a metadata object for class sap.ui.generic.app.navigation.service.SelectionVariant.
                             */
                            // @ts-ignore
                            static getMetadata(): sap.ui.base.Metadata
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the value of the parameter called `sName` if it has been set. If the parameter has never been
                             * set or has been removed, `undefined` is returned.
                             */
                            // @ts-ignore
                            static getParameter(
                                /**
                                 * The name of the parameter to be returned
                                 */
                                sName: string
                            ): string
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Gets the current context URL intended for the parameters.
                             */
                            // @ts-ignore
                            static getParameterContextUrl(): string
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the set of parameter names available in this selection variant
                             */
                            // @ts-ignore
                            static getParameterNames(): any[]
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the names of the parameter and select option properties available for this instance.
                             */
                            // @ts-ignore
                            static getPropertyNames(): any[]
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the set of select options/ranges available for a given property name.
                             */
                            // @ts-ignore
                            static getSelectOption(
                                /**
                                 * The name of the property for which the set of select options/ranges is returned
                                 */
                                sPropertyName: string
                            ): any[]
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the names of the properties available for this instance.
                             */
                            // @ts-ignore
                            static getSelectOptionsPropertyNames(): any[]
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the current text / description of this selection variant.
                             */
                            // @ts-ignore
                            static getText(): string
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * First tries to retrieve the set of select options/ranges available for `sName` as property name. If successful,
                             * this array of selections is being returned. If it fails, an attempt to find a parameter, whose name is
                             * `sName`, is made. If the latter succeeds, the single value is converted to fit into an array of selections
                             * to make it type compatible with ranges. This array is then returned.  If neither a select option
                             * nor a parameter could be found, `undefined` is returned.
                             */
                            // @ts-ignore
                            static getValue(
                                /**
                                 * The name of the attribute for which the value is retrieved
                                 */
                                sName: string
                            ): any[]
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns `true` if the selection variant does neither contain parameters nor ranges.
                             */
                            // @ts-ignore
                            static isEmpty(): boolean
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Adds a set of select options to the list of select options for a given parameter.
                             */
                            // @ts-ignore
                            static massAddSelectOption(
                                /**
                                 * The name of the property for which the set of select options is added
                                 */
                                sPropertyName: string,
                                /**
                                 * Set of select options to be added
                                 */
                                aSelectOptions: any[]
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Removes a parameter called `sName` from the selection variant.
                             */
                            // @ts-ignore
                            static removeParameter(
                                /**
                                 * The name of the parameter to be removed
                                 */
                                sName: string
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Removes a select option called `sName` from the selection variant.
                             */
                            // @ts-ignore
                            static removeSelectOption(
                                /**
                                 * The name of the select option to be removed
                                 */
                                sName: string
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Renames a parameter called `sNameOld` to `sNameNew`. If a parameter or a select option with the name
                             * `sNameNew` already exist, an error is thrown. If a parameter with the name `sNameOld` does not exist,
                             * nothing is changed.
                             */
                            // @ts-ignore
                            static renameParameter(
                                /**
                                 * The current name of the parameter to be renamed
                                 */
                                sNameOld: string,
                                /**
                                 * The new name of the parameter
                                 */
                                sNameNew: string
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Renames a select option called `sNameOld` to `sNameNew`. If a select option or a parameter with the name
                             * `sNameNew` already exist, an error is thrown. If a select option with the name `sNameOld` does not exist,
                             * nothing is changed.
                             */
                            // @ts-ignore
                            static renameSelectOption(
                                /**
                                 * The current name of the select option property to be renamed
                                 */
                                sNameOld: string,
                                /**
                                 * The new name of the select option property
                                 */
                                sNameNew: string
                            ): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the context URL intended for the filters.
                             */
                            // @ts-ignore
                            static setFilterContextUrl(
                                /**
                                 * The URL of the filters
                                 */
                                sURL: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the identification of the selection variant.
                             */
                            // @ts-ignore
                            static setID(
                                /**
                                 * The new identification of the selection variant
                                 */
                                sId: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the context URL intended for the parameters.
                             */
                            // @ts-ignore
                            static setParameterContextUrl(
                                /**
                                 * The URL of the parameter context
                                 */
                                sURL: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Sets the text / description of the selection variant.
                             */
                            // @ts-ignore
                            static setText(
                                /**
                                 * The new description to be used
                                 */
                                sNewText: string
                            ): void
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Returns the external representation of the selection variant as JSON object.
                             */
                            // @ts-ignore
                            static toJSONObject(): object
                            /**
                             * @deprecated (since 1.83.0)
                             *
                             * Serializes this instance into a JSON-formatted string
                             */
                            // @ts-ignore
                            static toJSONString(): string
                        }
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.NavType} instead.
                         *
                         * A static enumeration type which indicates the type of inbound navigation
                         */
                        enum NavType {
                            /**
                             * Back navigation with sap-iapp-state parameter
                             */
                            iAppState,
                            /**
                             * Initial startup without any navigation or default parameters
                             */
                            initial,
                            /**
                             * Basic cross-app navigation with URL parameters only (without sap-xapp-state) or initial start with default
                             * parameters
                             */
                            URLParams,
                            /**
                             * Cross-app navigation with sap-xapp-state parameter (and URL parameters), defaulted parameters may be
                             * added
                             */
                            xAppState
                        }
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.ParamHandlingMode} instead.
                         *
                         * A static enumeration type which indicates the conflict resolution method when merging URL parameters
                         * into select options
                         */
                        enum ParamHandlingMode {
                            /**
                             * The conflict resolution adds URL parameters to the SelectionVariant
                             */
                            InsertInSelOpt,
                            /**
                             * The conflict resolution favors the SelectionVariant over URL parameters
                             */
                            SelVarWins,
                            /**
                             * The conflict resolution favors the URL parameters over the SelectionVariant. Caution: In case of cross-app
                             * navigation a navigation parameter value from the source app is overwritten by a default, if a default
                             * is maintained in the launchpad designer for this parameter in the target app!
                             */
                            URLParamWins
                        }
                        /**
                         * @deprecated (since 1.83.0) - Please use {@link sap.fe.navigation.SuppressionBehavior} instead.
                         *
                         * A static enumeration type which indicates whether semantic attributes with values `null`, `undefined`
                         * or `""` (empty string) shall be suppressed, before they are mixed in to the selection variant in the
                         * method {@link sap.ui.generic.app.navigation.service.NavigationHandler.mixAttributesAndSelectionVariant
                         * mixAttributesAndSelectionVariant} of the {@link sap.ui.generic.app.navigation.service.NavigationHandler
                         * NavigationHandler}
                         */
                        enum SuppressionBehavior {
                            /**
                             * Semantic attributes with an empty string are ignored, the remaining attributes are mixed in to the selection
                             * variant. Warning! Consider the impact on Boolean variable values!
                             */
                            ignoreEmptyString,
                            /**
                             * Semantic attributes with a `null` value lead to an {@link sap.fin.central.lib.error.Error error} of type
                             * NavigationHandler.INVALID_INPUT
                             */
                            raiseErrorOnNull,
                            /**
                             * Semantic attributes with an `undefined` value lead to an {@link sap.fin.central.lib.error.Error error}
                             * of type NavigationHandler.INVALID_INPUT
                             */
                            raiseErrorOnUndefined,
                            /**
                             * Standard suppression behavior: semantic attributes with a `null` or an `undefined` value are ignored,
                             * the remaining attributes are mixed in to the selection variant
                             */
                            standard
                        }
                    }
                }

                namespace transaction {
                    /**
                     * @SINCE 1.30.0
                     *
                     * The class provides access to information on draft handling that is available in the OData service's metadata
                     * as it interprets draft-specific annotations.
                     */
                    class DraftContext extends sap.ui.base.Object {
                        /**
                         * Constructor for meta-model access class.
                         */
                        constructor(
                            /**
                             * The OData model currently used
                             */
                            oModel: sap.ui.model.odata.ODataModel
                        )

                        /**
                         * @deprecated (since 1.32.0)
                         *
                         * Checks whether an OData property is annotated with UpdateOnChange. The method is used in context of a
                         * validation success event.
                         */
                        checkUpdateOnChange(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string,
                            /**
                             * The name of the property
                             */
                            sProperty: string
                        ): boolean
                        /**
                         * Frees all resources claimed during the life-time of this instance.
                         */
                        // @ts-ignore
                        destroy(): void
                        /**
                         * Creates a new subclass of class sap.ui.generic.app.transaction.DraftContext with name `sClassName` and
                         * enriches it with the information contained in `oClassInfo`.
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
                        ): Function
                        /**
                         * Returns a metadata object for class sap.ui.generic.app.transaction.DraftContext.
                         */
                        // @ts-ignore
                        static getMetadata(): sap.ui.base.Metadata
                        /**
                         * Returns the name of the function import to be used.
                         */
                        getODataDraftFunctionImportName(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context,
                            /**
                             * The draft function import
                             */
                            sDraftFunctionImport: string
                        ): string
                        /**
                         * Returns the semantic keys for a given entity set.
                         */
                        getSemanticKey(
                            /**
                             * The given entity set
                             */
                            sEntitySet: string
                        ): any[]
                        /**
                         * Checks whether an entity set is draft-enabled. The entity set name is derived from the given binding
                         * context
                         */
                        hasDraft(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): boolean
                        /**
                         * Checks whether administrative data for a given draft is available.
                         */
                        hasDraftAdministrativeData(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string
                        ): boolean
                        /**
                         * Checks whether an entity set has a draft preparation action. The entity set name is derived from the
                         * given binding context.
                         */
                        hasDraftPreparationAction(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): boolean
                        /**
                         * Checks whether an entity set is draft root. The entity set name is derived from the given binding context.
                         */
                        hasDraftRoot(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): boolean
                        /**
                         * Checks whether an entity set has a draft validation function. The entity set name is derived from the
                         * given binding context.
                         */
                        hasDraftValidationFunction(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): boolean
                        /**
                         * @SINCE 1.38
                         *
                         * Checks if the parameter "PreserveChanges" is supported by the edit function. If the edit action is triggered
                         * with the parameter set to `true` the ABAP application infrastructure will respond with HTTP response
                         * code 409 if unsaved changes (from another user) exist.
                         */
                        hasPreserveChanges(): boolean
                        /**
                         * Checks whether a sibling entity for a given entity set is available.
                         */
                        hasSiblingEntity(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string
                        ): boolean
                        /**
                         * Checks whether a given entity set is draft-enabled.
                         */
                        isDraftEnabled(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string
                        ): boolean
                        /**
                         * Checks whether a given entity set is a draft root.
                         */
                        isDraftRoot(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string
                        ): boolean
                        /**
                         * Checks whether a given key is a semantic key.
                         */
                        isSemanticKey(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string,
                            /**
                             * The given key
                             */
                            oKeys: object
                        ): boolean
                        /**
                         * Checks whether a given key is a technical key.
                         */
                        isTechnicalKey(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string,
                            /**
                             * The given key
                             */
                            oKeys: object
                        ): boolean
                    }
                    class BaseController extends sap.ui.core.mvc.Controller {}
                    /**
                     * @SINCE 1.30.0
                     *
                     * Gives access to runtime draft handling for applications. Assuming state-less communication, each single
                     * data modification request (or change set in an OData $batch request) is a "mini-transaction", which saves
                     * data to the database. The class implements the transactional interaction patterns specified for OData
                     * services that support draft documents and provides methods for draft-specific actions, for example validate,
                     * prepare, activate.
                     *
                     * Additionally, it handles transactional request processing, ensures concurrency control and correct ETag
                     * handling. It provides access to the simple interaction patterns of runtime handling for drafts according
                     * to the draft specification. These can be combined as required by client applications. Additionally, error
                     * handling is provided to notify client implementations of error situations. The event `fatalError` is
                     * thrown, if fatal errors occur during execution of OData requests.
                     */
                    class DraftController extends sap.ui.generic.app.transaction.BaseController {
                        /**
                         * Constructor for a new draft controller instance.
                         */
                        constructor(
                            /**
                             * The OData model currently used
                             */
                            oModel: sap.ui.model.odata.ODataModel,
                            /**
                             * Optional HTTP request queue
                             */
                            oQueue: any
                        )

                        /**
                         * Submits changes to the back-end and activates a draft entity in the back-end.
                         */
                        activateDraftEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context,
                            /**
                             * Set to `true` to activate the draft even if warnings exist
                             */
                            bIsLenient?: boolean
                        ): any
                        /**
                         * Creates an edit draft in the back-end. Additionally, possible changes that have been collected on the
                         * client are sent to the back-end.
                         */
                        createEditDraftEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context,
                            /**
                             * Set to `true` to avoid the creation of a new draft when unsaved changes exist in the back-end
                             */
                            bPreserveChanges?: boolean,
                            /**
                             * indicates whether root needs to expanded
                             */
                            sRootExpand?: string
                        ): any
                        /**
                         * Creates a new edit draft on the client and sends it to the back-end. Additionally, possible changes that
                         * have been collected on the client are sent to the back-end.
                         */
                        createNewDraftEntity(
                            /**
                             * The name of the entity set
                             */
                            sEntitySet: string,
                            /**
                             * Path identifying the new entity instance
                             */
                            sPath: string,
                            /**
                             * An array that specifies a set of properties or the entry
                             */
                            vPredefinedValues?: any[] | object,
                            /**
                             * information whether the canonicalRequest parameter should be set for the create request
                             */
                            bCanonicalRequest?: boolean,
                            /**
                             * parameters to be passed to the function
                             */
                            oParameters?: {
                                /**
                                 * indicates whether root needs to expanded
                                 */
                                sRootExpand?: boolean
                                /**
                                 * controller object required to create ActionUtil instance
                                 */
                                oController?: object
                                /**
                                 * applicationController object required to create ActionUtil instance
                                 */
                                oApplicationController?: object
                                /**
                                 * manifest entry indicating whether newAction has to be used for draft reation
                                 */
                                bUseNewActionForCreate?: boolean
                                /**
                                 * callback to set the busy indicator
                                 */
                                fnSetBusy?: Function
                            }
                        ): any
                        /**
                         * Frees all resources claimed during the life-time of this instance.
                         */
                        destroy(): void
                        /**
                         * Creates a new subclass of class sap.ui.generic.app.transaction.DraftController with name `sClassName`
                         * and enriches it with the information contained in `oClassInfo`.
                         *
                         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.generic.app.transaction.BaseController.extend}.
                         */
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
                        ): Function
                        /**
                         * Should create a request to read the instance specified in the context with the expands in the argument.
                         * This method can be used when the consumer also want to retrieve the header data with selected associations
                         * expanded.
                         */
                        fetchHeader(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context,
                            /**
                             * Parameters to control the behavior of the request
                             */
                            mParameters: any
                        ): any
                        /**
                         * Returns the current draft context instance. If no instance exists, it is created lazily.
                         */
                        getDraftContext(): sap.ui.generic.app.transaction.DraftContext
                        /**
                         * @SINCE 1.32.0
                         *
                         * Retrieves a possibly existing draft entity for the given active entity using the binding context of the
                         * active entity from the back-end.
                         */
                        getDraftForActiveEntity(
                            /**
                             * The binding context of the active entity
                             */
                            oContext: sap.ui.model.Context
                        ): any
                        /**
                         * Returns a metadata object for class sap.ui.generic.app.transaction.DraftController.
                         */
                        static getMetadata(): sap.ui.base.Metadata
                        /**
                         * @SINCE 1.32.0
                         *
                         * Checks whether an entity has an active entity associated.
                         */
                        hasActiveEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): boolean
                        /**
                         * Checks whether an entity set is active. The entity set name is derived from the given binding context
                         */
                        isActiveEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): boolean
                        /**
                         * Submits changes to the back-end and prepares an existing draft entity in the back-end for later activation
                         * by invoking the preparation action.
                         */
                        prepareDraftEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): any
                        /**
                         * Submits changes to the back-end and prepares a draft entity in the back-end for later activation by invoking
                         * the preparation action.
                         */
                        saveAndPrepareDraftEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context,
                            /**
                             * Parameters to control the behavior of the request
                             */
                            mParameters: any
                        ): any
                        /**
                         * Submits changes to the back-end and prepares an existing draft entity in the back-end for later activation
                         * by invoking the validation action.
                         */
                        validateDraftEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context
                        ): any
                    }
                    /**
                     * @SINCE 1.30.0
                     *
                     * Assuming state-less communication, each single data modification request (or change set in an OData $batch
                     * request) is a "mini-transaction", which saves data to the database. The class allows you to submit changes,
                     * invoke actions, OData CRUD operations in general, and trigger client-side validations. It ensures concurrency
                     * control and correct ETag handling.
                     *
                     * The class gives access to runtime draft handling for applications. Additionally error handling capabilities
                     * are provided to notify client implementations of error situations. The event `fatalError` is thrown,
                     * if fatal errors occur during execution of OData requests.
                     */
                    class TransactionController extends sap.ui.generic.app.transaction.BaseController {
                        /**
                         * Constructor for a new transaction controller instance.
                         */
                        constructor(
                            /**
                             * The OData model currently used
                             */
                            oModel: sap.ui.model.odata.ODataModel,
                            /**
                             * Optional HTTP request queue
                             */
                            oQueue: any,
                            /**
                             * Optional configuration parameters
                             */
                            mParams: {
                                /**
                                 * Suppresses creation of batch groups
                                 */
                                noBatchGroups: boolean
                            }
                        )

                        /**
                         * @SINCE 1.38
                         * @EXPERIMENTAL
                         *
                         * Submits changes to the backend system and deletes a group of entities in the backend system. These entities
                         * can be both draft or active entities.
                         */
                        deleteEntities(
                            /**
                             * Binding contexts or paths (strings) which identify the entities
                             */
                            aEntities: any[],
                            /**
                             * Parameters that control the behavior of the request
                             */
                            mParameters: any
                        ): any
                        /**
                         * Submits changes to the backend system and deletes an entity in the backend system. This entity can be
                         * either a draft or an active entity.
                         */
                        deleteEntity(
                            /**
                             * Binding context or path of the entity
                             */
                            vEntity: sap.ui.model.Context | string,
                            /**
                             * Parameters that control the behavior of the request
                             */
                            mParameters: any
                        ): any
                        /**
                         * Frees all resources claimed during the life-time of this instance.
                         */
                        destroy(): void
                        /**
                         * Prepares an entity for editing. If the entity is active and draft enabled, a new draft document is created.
                         * If not, the control is automatically returned to the caller of the method by returning a resolved promise.
                         */
                        editEntity(
                            /**
                             * The given binding context
                             */
                            oContext: sap.ui.model.Context,
                            /**
                             * Set to `true` to avoid the creation of a new draft when unsaved changes exist in the back-end
                             */
                            bPreserveChanges?: boolean,
                            /**
                             * indicates whether root needs to expanded
                             */
                            sRootExpand?: string
                        ): any
                        /**
                         * Creates a new subclass of class sap.ui.generic.app.transaction.TransactionController with name `sClassName`
                         * and enriches it with the information contained in `oClassInfo`.
                         *
                         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.generic.app.transaction.BaseController.extend}.
                         */
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
                        ): Function
                        /**
                         * Returns the current draft controller instance.
                         */
                        getDraftController(): sap.ui.generic.app.transaction.DraftController
                        /**
                         * Returns a metadata object for class sap.ui.generic.app.transaction.TransactionController.
                         */
                        static getMetadata(): sap.ui.base.Metadata
                        /**
                         * Resets changes that have been tracked by the current instance of `sap.ui.model.odata.v2.ODatatModel`.
                         * These changes have been created by invoking the `setProperty` method of `sap.ui.model.odata.v2.ODatatModel`.
                         */
                        resetChanges(): void
                    }
                }

                /**
                 * @SINCE 1.32.0
                 * @EXPERIMENTAL (since 1.32.0)
                 *
                 * Application Controller.
                 */
                class ApplicationController extends sap.ui.generic.app.transaction.BaseController {
                    /**
                     * Constructor for application controller.
                     */
                    constructor(
                        /**
                         * The OData model currently used
                         */
                        oModel: sap.ui.model.odata.v2.ODataModel,
                        /**
                         * The current view
                         */
                        oView: sap.ui.core.mvc.View
                    )

                    /**
                     * @EXPERIMENTAL (since 1.32.0)
                     *
                     * Frees all resources claimed during the life-time of this instance.
                     */
                    destroy(): void
                    /**
                     * Executes annotated side effects for properties/navigation properties or navigation entities. If no properties
                     * or entities are passed the unspecified side effect is executed. This unspecified side effect uses either
                     * the annotated targets of the unspecified side effect or - in case of no available annotation - triggers
                     * a complete model refresh on the OData model.
                     */
                    executeSideEffects(
                        /**
                         * The given binding context
                         */
                        oContext: sap.ui.model.Context,
                        /**
                         * An array of properties of the given context or properties in a 1:1 association for those side effects
                         * shall be executed. Can be `undefined`.
                         */
                        aSourceProperties: any[],
                        /**
                         * An array of entities (navigation properties) with the side effects that shall be executed. Can be `undefined`.
                         */
                        aSourceEntities: any[],
                        /**
                         * If not explicitly set to `false` a global model refresh is triggered.
                         */
                        bForceGlobalRefresh: boolean
                    ): any
                    /**
                     * Creates a new subclass of class sap.ui.generic.app.ApplicationController with name `sClassName` and enriches
                     * it with the information contained in `oClassInfo`.
                     *
                     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.generic.app.transaction.BaseController.extend}.
                     */
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
                    ): Function
                    /**
                     * Returns a metadata object for class sap.ui.generic.app.ApplicationController.
                     */
                    static getMetadata(): sap.ui.base.Metadata
                    /**
                     * @SINCE 1.38
                     * @EXPERIMENTAL
                     *
                     * Creates a context for an action call (OData function import)
                     */
                    getNewActionContext(
                        /**
                         * Name of the function import that shall be triggered.
                         */
                        sFunctionName: string,
                        /**
                         * The given binding context of the object on which the action is called.
                         */
                        oEntityContext: object,
                        /**
                         * Parameters to control the behavior of the request.
                         */
                        mParameters: any
                    ): any
                    /**
                     * Returns the current transaction controller instance.
                     */
                    getTransactionController(): sap.ui.generic.app.transaction.TransactionController
                    /**
                     * Invokes an action for every provided context where the properties are taken as input from. The changes
                     * are submitted directly to the back-end.
                     */
                    invokeActions(
                        /**
                         * The name of the function or action that shall be triggered.
                         */
                        sFunctionName: string,
                        /**
                         * The given binding contexts where the parameters of the action shall be filled from.
                         */
                        aContexts: any[],
                        /**
                         * Parameters to control the behavior of the request.
                         */
                        mParameters: {
                            /**
                             * if set to "com.sap.vocabularies.UI.v1.OperationGroupingType/ChangeSet" for every actition call a new
                             * group is used.
                             */
                            operationGrouping: String
                        }
                    ): any
                    /**
                     * @EXPERIMENTAL (since 1.32.0)
                     *
                     * Notifies the application controller of a change of a property. Please note that the method is not meant
                     * for productive use currently. It is experimental.
                     */
                    propertyChanged(
                        /**
                         * The path to the changed property
                         */
                        sPath: string,
                        /**
                         * The binding context in which the change occured
                         */
                        oContext: object
                    ): any
                    /**
                     * @EXPERIMENTAL (since 1.32.0)
                     *
                     * Registers a change for the given group id.
                     */
                    registerGroupChange(
                        /**
                         * The group id where changes were done
                         */
                        sGroupId: string
                    ): void
                    /**
                     * @EXPERIMENTAL (since 1.32.0)
                     *
                     * Registers the given view with the Application Controller.
                     */
                    registerView(
                        /**
                         * The view to be registered
                         */
                        oView: sap.ui.core.mvc.View
                    ): void
                }
            }
        }
    }

    interface IUI5DefineDependencyNames {
        "sap/ui/generic/app/navigation/service/NavError": undefined

        "sap/ui/generic/app/navigation/service/NavigationHandler": undefined

        "sap/ui/generic/app/navigation/service/PresentationVariant": undefined

        "sap/ui/generic/app/navigation/service/SelectionVariant": undefined

        "sap/ui/generic/app/transaction/DraftContext": undefined

        "sap/ui/generic/app/transaction/DraftController": undefined

        "sap/ui/generic/app/transaction/TransactionController": undefined

        "sap/ui/generic/app/ApplicationController": undefined
    }
}
