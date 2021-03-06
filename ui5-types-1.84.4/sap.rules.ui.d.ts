// For Library Version: 1.84.0

declare namespace sap {
  namespace rules {
    /**
     * UI5 library: sap.rules.ui.
     */
    namespace ui {
      namespace services {
        /**
         * Provides the AstExpressionLanguage service functionality, such as expression validations, expression
         * parsing, auto-complete suggestions, retrieving expression metadata and tokens, and performing runtime
         * services (fetching data objects, outputs, etc).
         */
        class AstExpressionLanguage extends Element {
          /**
           * Constructor for a new AstExpressionLanguage element.
           */
          constructor();

          /**
           * Attaches event handler `fnFunction` to the {@link #event:dataChange dataChange} event of this `sap.rules.ui.services.AstExpressionLanguage`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.rules.ui.services.AstExpressionLanguage` itself.
           */
          attachDataChange(
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
             * Context object to call the event handler with. Defaults to this `sap.rules.ui.services.AstExpressionLanguage`
             * itself
             */
            oListener?: object
          ): sap.rules.ui.services.AstExpressionLanguage;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:dataChange dataChange} event of this `sap.rules.ui.services.AstExpressionLanguage`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachDataChange(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.rules.ui.services.AstExpressionLanguage;
          /**
           * Creates a new subclass of class sap.rules.ui.services.AstExpressionLanguage with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
          ): Function;
          /**
           * Fires event {@link #event:dataChange dataChange} to attached listeners.
           */
          fireDataChange(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.rules.ui.services.AstExpressionLanguage;
          /**
           * Gets current value of property {@link #getBindingContextPath bindingContextPath}.
           *
           * Path to a Vocabulary object in the model data, which is used for the definition of relative context bindings
           * inside the Ast Expression Language control (mandatory). Example: "/Vocabularies(Id='0050569181751ED683EFEEC6AA2B73C5')"
           */
          getBindingContextPath(): string;
          /**
           * Returns a metadata object for class sap.rules.ui.services.AstExpressionLanguage.
           */
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getBindingContextPath bindingContextPath}.
           *
           * Path to a Vocabulary object in the model data, which is used for the definition of relative context bindings
           * inside the Ast Expression Language control (mandatory). Example: "/Vocabularies(Id='0050569181751ED683EFEEC6AA2B73C5')"
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setBindingContextPath(
            /**
             * New value for property `bindingContextPath`
             */
            sBindingContextPath: string
          ): sap.rules.ui.services.AstExpressionLanguage;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:dataChange dataChange} event of this `sap.rules.ui.services.AstExpressionLanguage`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.rules.ui.services.AstExpressionLanguage` itself.
           */
          attachDataChange(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.rules.ui.services.AstExpressionLanguage`
             * itself
             */
            oListener?: object
          ): sap.rules.ui.services.AstExpressionLanguage;
        }
        /**
         * Provides the ExpressionLanguage service functionality, such as expression validations, expression parsing,
         * auto-complete suggestions, retrieving expression metadata and tokens, and performing runtime services
         * (fetching data objects, outputs, etc).
         */
        class ExpressionLanguage extends Element {
          /**
           * Constructor for a new ExpressionLanguage element.
           */
          constructor();

          /**
           * Attaches event handler `fnFunction` to the {@link #event:dataChange dataChange} event of this `sap.rules.ui.services.ExpressionLanguage`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.rules.ui.services.ExpressionLanguage` itself.
           */
          attachDataChange(
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
             * Context object to call the event handler with. Defaults to this `sap.rules.ui.services.ExpressionLanguage`
             * itself
             */
            oListener?: object
          ): sap.rules.ui.services.ExpressionLanguage;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:dataChange dataChange} event of this `sap.rules.ui.services.ExpressionLanguage`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachDataChange(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.rules.ui.services.ExpressionLanguage;
          /**
           * Creates a new subclass of class sap.rules.ui.services.ExpressionLanguage with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
          ): Function;
          /**
           * Fires event {@link #event:dataChange dataChange} to attached listeners.
           */
          fireDataChange(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.rules.ui.services.ExpressionLanguage;
          /**
           * Gets current value of property {@link #getBindingContextPath bindingContextPath}.
           *
           * Path to a Vocabulary object in the model data, which is used for the definition of relative context bindings
           * inside the Expression Language control (mandatory). Example: "/Vocabularies(Id='0050569181751ED683EFEEC6AA2B73C5')"
           */
          getBindingContextPath(): string;
          /**
           * Returns a metadata object for class sap.rules.ui.services.ExpressionLanguage.
           */
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getValueHelpCallback valueHelpCallback}.
           *
           * The valueHelpCallback is a function that receives by reference an array of value help metadata and adds
           * to each item an OData model instance. The OData model is used for suggesting allowed values and for validating
           * values that are used in the rule.
           */
          getValueHelpCallback(): any;
          /**
           * Sets a new value for property {@link #getBindingContextPath bindingContextPath}.
           *
           * Path to a Vocabulary object in the model data, which is used for the definition of relative context bindings
           * inside the Expression Language control (mandatory). Example: "/Vocabularies(Id='0050569181751ED683EFEEC6AA2B73C5')"
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setBindingContextPath(
            /**
             * New value for property `bindingContextPath`
             */
            sBindingContextPath: string
          ): sap.rules.ui.services.ExpressionLanguage;
          /**
           * Sets a new value for property {@link #getValueHelpCallback valueHelpCallback}.
           *
           * The valueHelpCallback is a function that receives by reference an array of value help metadata and adds
           * to each item an OData model instance. The OData model is used for suggesting allowed values and for validating
           * values that are used in the rule.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValueHelpCallback(
            /**
             * New value for property `valueHelpCallback`
             */
            oValueHelpCallback: any
          ): sap.rules.ui.services.ExpressionLanguage;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:dataChange dataChange} event of this `sap.rules.ui.services.ExpressionLanguage`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.rules.ui.services.ExpressionLanguage` itself.
           */
          attachDataChange(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.rules.ui.services.ExpressionLanguage`
             * itself
             */
            oListener?: object
          ): sap.rules.ui.services.ExpressionLanguage;
        }
      }

      interface $DecisionTableConfigurationSettings
        extends sap.ui.core.$ElementSettings {
        /**
         * @deprecated - This attribute is deprecated since version 1.52.8, use the decisionTableFormat property.
         *
         * The value determines the user input mode for the corresponding rule cells when creating or editing a
         * rule.
         */
        cellFormat?: sap.rules.ui.DecisionTableCellFormat;

        /**
         * The value determines how the results of the decision table are evaluated when more than one rule is matched
         * for a given set of inputs.
         */
        hitPolicies?: sap.rules.ui.RuleHitPolicy[];

        /**
         * The value determines whether the Settings button is displayed in a decision table when the control is
         * used with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         */
        enableSettings?: boolean;

        /**
         * The value determines whether the user can set the rendering of the decision Table to be based on cellFormat
         * or rule Format
         */
        decisionTableFormat?: sap.rules.ui.DecisionTableFormat;

        /**
         * The threshold defines how many additional (not yet visible records) shall be pre-fetched to enable smooth
         * scrolling. The threshold is always added to the visibleRowCount. If the visibleRowCount is 10 and the
         * threshold is 100, there will be 110 records fetched with the initial load.
         */
        threshold?: number;

        /**
         * Number of visible rows of the table.
         */
        visibleRowCount?: number;

        change?: Function;
      }

      interface $RuleBuilderSettings extends sap.ui.core.$ControlSettings {
        /**
         * Available types that can be created using the `sap.rules.ui.RuleBuilder` control. If empty, all rule
         * types will be available for selection. If only one type exists, the Rule Builder will open it automatically.
         */
        types?: sap.rules.ui.RuleType[];

        /**
         * Path to a Rule object in the model data, which is used for the definition of relative context bindings
         * inside the RuleBuilder control (mandatory). Example: "/Rules(Id='0050569181751ED683EFEEC6AA2B73C5',Version='000001')"
         */
        bindingContextPath?: string;

        /**
         * Indicates whether or not the controls of the RuleBuilder are editable.
         */
        editable?: boolean;

        /**
         * Configuration for rule of type 'decision table'.
         */
        decisionTableConfiguration?: sap.rules.ui.DecisionTableConfiguration;

        /**
         * Configuration for rule of type 'Text Rule'.
         */
        textRuleConfiguration?: sap.rules.ui.TextRuleConfiguration;

        /**
         * Expression language to model English like expressions. Should not be used when sap.rules.ui.services.AstExpressionLanguage
         * is used.
         */
        expressionLanguage?: sap.rules.ui.services.ExpressionLanguage | string;

        /**
         * Expression language to use DMN SFEEL for modelling expressions. Should not be used when sap.rules.ui.services.ExpressionLanguage
         * is used.
         */
        astExpressionLanguage?:
          | sap.rules.ui.services.AstExpressionLanguage
          | string;
      }

      interface $TextRuleConfigurationSettings
        extends sap.ui.core.$ElementSettings {
        /**
         * The value determines whether the Settings button is displayed in a Text Rule when the control is used
         * with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         */
        enableSettings?: boolean;

        /**
         * The value determines whether the Else section is displayed in a Text Rule when the control is used with
         * S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         */
        enableElse?: boolean;

        /**
         * The value determines whether the Else If section is displayed in a Text Rule when the control is used
         * with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         */
        enableElseIf?: boolean;

        change?: Function;
      }
      /**
       * @SINCE 1.4
       *
       * The `sap.rules.ui.DecisionTableConfiguration` element provides the ability to define specific properties
       * that will be applied when rendering the `sap.rules.ui.RuleBuilder` in decision table mode.
       */
      class DecisionTableConfiguration extends sap.ui.core.Element {
        /**
         * Constructor for a new DecisionTableConfiguration.
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
          mSettings?: $DecisionTableConfigurationSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.rules.ui.DecisionTableConfiguration`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.rules.ui.DecisionTableConfiguration` itself.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.rules.ui.DecisionTableConfiguration`
           * itself
           */
          oListener?: object
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.rules.ui.DecisionTableConfiguration`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Creates a new subclass of class sap.rules.ui.DecisionTableConfiguration with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            name?: any;

            value?: any;
          }
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * @deprecated - This attribute is deprecated since version 1.52.8, use the decisionTableFormat property.
         *
         * Gets current value of property {@link #getCellFormat cellFormat}.
         *
         * The value determines the user input mode for the corresponding rule cells when creating or editing a
         * rule.
         *
         * Default value is `Both`.
         */
        getCellFormat(): sap.rules.ui.DecisionTableCellFormat;
        /**
         * Gets current value of property {@link #getDecisionTableFormat decisionTableFormat}.
         *
         * The value determines whether the user can set the rendering of the decision Table to be based on cellFormat
         * or rule Format
         *
         * Default value is `CellFormat`.
         */
        getDecisionTableFormat(): sap.rules.ui.DecisionTableFormat;
        /**
         * Gets current value of property {@link #getEnableSettings enableSettings}.
         *
         * The value determines whether the Settings button is displayed in a decision table when the control is
         * used with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * Default value is `false`.
         */
        getEnableSettings(): boolean;
        /**
         * Gets current value of property {@link #getHitPolicies hitPolicies}.
         *
         * The value determines how the results of the decision table are evaluated when more than one rule is matched
         * for a given set of inputs.
         *
         * Default value is `[FirstMatch, AllMatch]`.
         */
        getHitPolicies(): sap.rules.ui.RuleHitPolicy[];
        /**
         * Returns a metadata object for class sap.rules.ui.DecisionTableConfiguration.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getThreshold threshold}.
         *
         * The threshold defines how many additional (not yet visible records) shall be pre-fetched to enable smooth
         * scrolling. The threshold is always added to the visibleRowCount. If the visibleRowCount is 10 and the
         * threshold is 100, there will be 110 records fetched with the initial load.
         *
         * Default value is `30`.
         */
        getThreshold(): number;
        /**
         * Gets current value of property {@link #getVisibleRowCount visibleRowCount}.
         *
         * Number of visible rows of the table.
         *
         * Default value is `30`.
         */
        getVisibleRowCount(): number;
        /**
         * @deprecated - This attribute is deprecated since version 1.52.8, use the decisionTableFormat property.
         *
         * Sets a new value for property {@link #getCellFormat cellFormat}.
         *
         * The value determines the user input mode for the corresponding rule cells when creating or editing a
         * rule.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Both`.
         */
        setCellFormat(
          /**
           * New value for property `cellFormat`
           */
          sCellFormat?: sap.rules.ui.DecisionTableCellFormat
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Sets a new value for property {@link #getDecisionTableFormat decisionTableFormat}.
         *
         * The value determines whether the user can set the rendering of the decision Table to be based on cellFormat
         * or rule Format
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `CellFormat`.
         */
        setDecisionTableFormat(
          /**
           * New value for property `decisionTableFormat`
           */
          sDecisionTableFormat?: sap.rules.ui.DecisionTableFormat
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Sets a new value for property {@link #getEnableSettings enableSettings}.
         *
         * The value determines whether the Settings button is displayed in a decision table when the control is
         * used with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableSettings(
          /**
           * New value for property `enableSettings`
           */
          bEnableSettings?: boolean
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Sets a new value for property {@link #getHitPolicies hitPolicies}.
         *
         * The value determines how the results of the decision table are evaluated when more than one rule is matched
         * for a given set of inputs.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `[FirstMatch, AllMatch]`.
         */
        setHitPolicies(
          /**
           * New value for property `hitPolicies`
           */
          sHitPolicies?: sap.rules.ui.RuleHitPolicy[]
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Sets a new value for property {@link #getThreshold threshold}.
         *
         * The threshold defines how many additional (not yet visible records) shall be pre-fetched to enable smooth
         * scrolling. The threshold is always added to the visibleRowCount. If the visibleRowCount is 10 and the
         * threshold is 100, there will be 110 records fetched with the initial load.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `30`.
         */
        setThreshold(
          /**
           * New value for property `threshold`
           */
          iThreshold?: number
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Sets a new value for property {@link #getVisibleRowCount visibleRowCount}.
         *
         * Number of visible rows of the table.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `30`.
         */
        setVisibleRowCount(
          /**
           * New value for property `visibleRowCount`
           */
          iVisibleRowCount?: number
        ): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.rules.ui.DecisionTableConfiguration`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.rules.ui.DecisionTableConfiguration` itself.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.rules.ui.DecisionTableConfiguration`
           * itself
           */
          oListener?: object
        ): sap.rules.ui.DecisionTableConfiguration;
      }
      /**
       * The `sap.rules.ui.RuleBuilder` control allows business users to create rules using a business language.
       */
      class RuleBuilder extends sap.ui.core.Control {
        /**
         * Constructor for a new RuleBuilder control.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given.
           */
          sId?: string,
          /**
           * Initial settings for the new control.
           */
          mSettings?: $RuleBuilderSettings
        );

        /**
         * Destroys the decisionTableConfiguration in the aggregation {@link #getDecisionTableConfiguration decisionTableConfiguration}.
         */
        destroyDecisionTableConfiguration(): sap.rules.ui.RuleBuilder;
        /**
         * Destroys the textRuleConfiguration in the aggregation {@link #getTextRuleConfiguration textRuleConfiguration}.
         */
        destroyTextRuleConfiguration(): sap.rules.ui.RuleBuilder;
        /**
         * Creates a new subclass of class sap.rules.ui.RuleBuilder with name `sClassName` and enriches it with
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
         * ID of the element which is the current target of the association {@link #getAstExpressionLanguage astExpressionLanguage},
         * or `null`.
         */
        getAstExpressionLanguage(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getBindingContextPath bindingContextPath}.
         *
         * Path to a Rule object in the model data, which is used for the definition of relative context bindings
         * inside the RuleBuilder control (mandatory). Example: "/Rules(Id='0050569181751ED683EFEEC6AA2B73C5',Version='000001')"
         */
        getBindingContextPath(): string;
        /**
         * Gets content of aggregation {@link #getDecisionTableConfiguration decisionTableConfiguration}.
         *
         * Configuration for rule of type 'decision table'.
         */
        getDecisionTableConfiguration(): sap.rules.ui.DecisionTableConfiguration;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Indicates whether or not the controls of the RuleBuilder are editable.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * ID of the element which is the current target of the association {@link #getExpressionLanguage expressionLanguage},
         * or `null`.
         */
        getExpressionLanguage(): sap.ui.core.ID;
        /**
         * Returns a metadata object for class sap.rules.ui.RuleBuilder.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets content of aggregation {@link #getTextRuleConfiguration textRuleConfiguration}.
         *
         * Configuration for rule of type 'Text Rule'.
         */
        getTextRuleConfiguration(): sap.rules.ui.TextRuleConfiguration;
        /**
         * Gets current value of property {@link #getTypes types}.
         *
         * Available types that can be created using the `sap.rules.ui.RuleBuilder` control. If empty, all rule
         * types will be available for selection. If only one type exists, the Rule Builder will open it automatically.
         *
         * Default value is `[DecisionTable, TextRule]`.
         */
        getTypes(): sap.rules.ui.RuleType[];
        /**
         * Sets the associated {@link #getAstExpressionLanguage astExpressionLanguage}.
         */
        setAstExpressionLanguage(
          /**
           * ID of an element which becomes the new target of this astExpressionLanguage association; alternatively,
           * an element instance may be given
           */
          oAstExpressionLanguage:
            | sap.ui.core.ID
            | sap.rules.ui.services.AstExpressionLanguage
        ): sap.rules.ui.RuleBuilder;
        /**
         * Sets a new value for property {@link #getBindingContextPath bindingContextPath}.
         *
         * Path to a Rule object in the model data, which is used for the definition of relative context bindings
         * inside the RuleBuilder control (mandatory). Example: "/Rules(Id='0050569181751ED683EFEEC6AA2B73C5',Version='000001')"
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setBindingContextPath(
          /**
           * New value for property `bindingContextPath`
           */
          sBindingContextPath: string
        ): sap.rules.ui.RuleBuilder;
        /**
         * Sets the aggregated {@link #getDecisionTableConfiguration decisionTableConfiguration}.
         */
        setDecisionTableConfiguration(
          /**
           * The decisionTableConfiguration to set
           */
          oDecisionTableConfiguration: sap.rules.ui.DecisionTableConfiguration
        ): sap.rules.ui.RuleBuilder;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Indicates whether or not the controls of the RuleBuilder are editable.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEditable(
          /**
           * New value for property `editable`
           */
          bEditable?: boolean
        ): sap.rules.ui.RuleBuilder;
        /**
         * Sets the associated {@link #getExpressionLanguage expressionLanguage}.
         */
        setExpressionLanguage(
          /**
           * ID of an element which becomes the new target of this expressionLanguage association; alternatively,
           * an element instance may be given
           */
          oExpressionLanguage:
            | sap.ui.core.ID
            | sap.rules.ui.services.ExpressionLanguage
        ): sap.rules.ui.RuleBuilder;
        /**
         * Sets the aggregated {@link #getTextRuleConfiguration textRuleConfiguration}.
         */
        setTextRuleConfiguration(
          /**
           * The textRuleConfiguration to set
           */
          oTextRuleConfiguration: sap.rules.ui.TextRuleConfiguration
        ): sap.rules.ui.RuleBuilder;
        /**
         * Sets a new value for property {@link #getTypes types}.
         *
         * Available types that can be created using the `sap.rules.ui.RuleBuilder` control. If empty, all rule
         * types will be available for selection. If only one type exists, the Rule Builder will open it automatically.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `[DecisionTable, TextRule]`.
         */
        setTypes(
          /**
           * New value for property `types`
           */
          sTypes?: sap.rules.ui.RuleType[]
        ): sap.rules.ui.RuleBuilder;
      }
      /**
       * @SINCE 1.4
       *
       * The `sap.rules.ui.TextRuleConfiguration` element provides the ability to define specific properties that
       * will be applied when rendering the `sap.rules.ui.RuleBuilder` in decision table mode.
       */
      class TextRuleConfiguration extends sap.ui.core.Element {
        /**
         * Constructor for a new TextRuleConfiguration.
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
          mSettings?: $TextRuleConfigurationSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.rules.ui.TextRuleConfiguration`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.rules.ui.TextRuleConfiguration` itself.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.rules.ui.TextRuleConfiguration`
           * itself
           */
          oListener?: object
        ): sap.rules.ui.TextRuleConfiguration;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.rules.ui.TextRuleConfiguration`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.rules.ui.TextRuleConfiguration;
        /**
         * Creates a new subclass of class sap.rules.ui.TextRuleConfiguration with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            name?: any;

            value?: any;
          }
        ): sap.rules.ui.TextRuleConfiguration;
        /**
         * Gets current value of property {@link #getEnableElse enableElse}.
         *
         * The value determines whether the Else section is displayed in a Text Rule when the control is used with
         * S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * Default value is `true`.
         */
        getEnableElse(): boolean;
        /**
         * Gets current value of property {@link #getEnableElseIf enableElseIf}.
         *
         * The value determines whether the Else If section is displayed in a Text Rule when the control is used
         * with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * Default value is `true`.
         */
        getEnableElseIf(): boolean;
        /**
         * Gets current value of property {@link #getEnableSettings enableSettings}.
         *
         * The value determines whether the Settings button is displayed in a Text Rule when the control is used
         * with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * Default value is `false`.
         */
        getEnableSettings(): boolean;
        /**
         * Returns a metadata object for class sap.rules.ui.TextRuleConfiguration.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Sets a new value for property {@link #getEnableElse enableElse}.
         *
         * The value determines whether the Else section is displayed in a Text Rule when the control is used with
         * S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableElse(
          /**
           * New value for property `enableElse`
           */
          bEnableElse?: boolean
        ): sap.rules.ui.TextRuleConfiguration;
        /**
         * Sets a new value for property {@link #getEnableElseIf enableElseIf}.
         *
         * The value determines whether the Else If section is displayed in a Text Rule when the control is used
         * with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableElseIf(
          /**
           * New value for property `enableElseIf`
           */
          bEnableElseIf?: boolean
        ): sap.rules.ui.TextRuleConfiguration;
        /**
         * Sets a new value for property {@link #getEnableSettings enableSettings}.
         *
         * The value determines whether the Settings button is displayed in a Text Rule when the control is used
         * with S/4 HANA 17.05 (Cloud) or 17.09 (On Premise) and higher (On Premise).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableSettings(
          /**
           * New value for property `enableSettings`
           */
          bEnableSettings?: boolean
        ): sap.rules.ui.TextRuleConfiguration;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.rules.ui.TextRuleConfiguration`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.rules.ui.TextRuleConfiguration` itself.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.rules.ui.TextRuleConfiguration`
           * itself
           */
          oListener?: object
        ): sap.rules.ui.TextRuleConfiguration;
      }
      /**
       * @deprecated - This attribute is deprecated since version 1.52.8, use the property decisionTableFormat.
       *
       * An enumeration that defines how a cell in a decision table is formulated by the rule creator.
       */
      enum DecisionTableCellFormat {
        /**
         * Specifies that both rule formats are available in the decision table; allowing the rule creator to choose
         * whether to formulate the decision table cells in either the basic or advanced format.
         */
        Both,
        /**
         * Specifies that the content of the decision table cell is restricted to values relevant to the data type
         * of the table column's expression.
         */
        Guided,
        /**
         * Specifies that the content of the decision table cell receives all possible suggestions (relevant functions,
         * attributes and values) that are relevant to the data type of the table column's expression.
         */
        Text
      }
      /**
       * An enumeration that decides the rendering format for decisionTable.
       */
      enum DecisionTableFormat {
        /**
         * @deprecated - This attribute is deprecated since version 1.52.8, use the attribute RuleFormat instead.
         *
         * Specifies that the rendering of a cell is based on cellFormat and each cell can have a different format
         * during rendering
         */
        CellFormat,
        /**
         * Specifies that the rendering is at the rule level. The value set here is applicable for all the cells
         * in the rule.
         */
        RuleFormat
      }
      /**
       * An enumeration that defines the different business data types for an expression
       */
      enum ExpressionType {
        /**
         * Specifies that the expression can be of any of the supported business data types.
         */
        All,
        /**
         * Specifies that the expression must represent a Boolean data type: true, false.
         */
        Boolean,
        /**
         * Specifies that the expression must represent a date only.
         */
        Date,
        /**
         * Specifies that the expression must represent a real number with or without dot-decimal notation.
         */
        Number,
        /**
         * Specifies that the expression must represent a single-quoted UTF-8 encoded string.
         */
        String,
        /**
         * Specifies that the expression must represent a time only.
         */
        Time,
        /**
         * Specifies that the expression must represent a time difference in milliseconds.
         */
        TimeSpan,
        /**
         * Specifies that the expression must represent a date and timestamp.
         */
        Timestamp
      }
      /**
       * An enumeration that defines the output when more than one rule in the decision table is matched for a
       * given set of inputs.
       */
      enum RuleHitPolicy {
        /**
         * Specifies that all conditions that match the input (each matching row in the decision table) are returned
         * as an output.
         */
        AllMatch,
        /**
         * Specifies that only the first condition that matches the input (the first matching row by order in the
         * decision table) is returned as an output.
         */
        FirstMatch
      }
      /**
       * An enumeration that defines whether the rule is formulated as a table with multiple rules instead of
       * a rule with a single associated condition.
       */
      enum RuleType {
        /**
         * Specifies that the rule is formulated as a table that allows complex rules to be visualized according
         * to an if-then-else logic.
         */
        DecisionTable,
        /**
         * Specifies that the rule is formulated as a single condition, which is written directly in a business
         * language.
         */
        TextRule
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/rules/ui/services/AstExpressionLanguage": undefined;

    "sap/rules/ui/services/ExpressionLanguage": undefined;

    "sap/rules/ui/DecisionTableConfiguration": undefined;

    "sap/rules/ui/RuleBuilder": undefined;

    "sap/rules/ui/TextRuleConfiguration": undefined;
  }
}
