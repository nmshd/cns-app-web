// For Library Version: 1.84.3

declare namespace sap {
  /**
   * Chart controls based on Vizframe
   */
  namespace chart {
    /**
     * Package with additional chart APIs
     */
    namespace api {
      /**
       * Get the Dimensions and Measures layout for a certain ChartType with provided Dimensions and Measures.
       */
      function getChartTypeLayout(
        /**
         * chart type
         */
        sChartType: string,
        /**
         * visible Dimensions of the form {name: sName} or {@link sap.chart.data.Dimension} instance.
         */
        aDimensions: object[] | sap.chart.data.Dimension[],
        /**
         * visible Measures of the form {name: sName} or {@link sap.chart.data.Measure} instance.
         */
        aMeasures: object[] | sap.chart.data.Measure[]
      ): object;
      /**
       * Returns all chart types currently supported by chart control (subset of viz types).
       */
      function getChartTypes(): object;
    }
    /**
     * Enumeration for supported chart types in analytical chart
     */
    namespace ChartType {
      /**
       * Bar Chart
       */
      export const Bar: undefined;

      /**
       * Bubble Chart
       */
      export const Bubble: undefined;

      /**
       * Bubble Chart
       */
      export const Bullet: undefined;

      /**
       * Column Chart
       */
      export const Column: undefined;

      /**
       * Combined Column Line Chart
       */
      export const Combination: undefined;

      /**
       * Donut Chart
       */
      export const Donut: undefined;

      /**
       * Bar Chart with 2 X-Axes
       */
      export const DualBar: undefined;

      /**
       * Column Chart with 2 Y-Axes
       */
      export const DualColumn: undefined;

      /**
       * Combined Column Line Chart with 2 Y-Axes
       */
      export const DualCombination: undefined;

      /**
       * Horizontal Combined Bar Line Chart with 2 X-Axes
       */
      export const DualHorizontalCombination: undefined;

      /**
       * Horizontal Combined Stacked Line Chart with 2 X-Axes
       */
      export const DualHorizontalStackedCombination: undefined;

      /**
       * Line Chart with 2 Y-Axes
       */
      export const DualLine: undefined;

      /**
       * Stacked Bar Chart with 2 X-Axes
       */
      export const DualStackedBar: undefined;

      /**
       * Stacked Column Chart with 2 Y-Axes
       */
      export const DualStackedColumn: undefined;

      /**
       * Combined Stacked Line Chart with 2 Y-Axes
       */
      export const DualStackedCombination: undefined;

      /**
       * Heat Map
       */
      export const Heatmap: undefined;

      /**
       * Horizontal Combined Stacked Line Chart
       */
      export const HorizontalStackedCombination: undefined;

      /**
       * Horizontal Waterfall Chart
       */
      export const HorizontalWaterfall: undefined;

      /**
       * Line Chart
       */
      export const Line: undefined;

      /**
       * 100% Donut Chart
       */
      export const PercentageDonut: undefined;

      /**
       * 100% Stacked Bar Chart with 2 X-Axes
       */
      export const PercentageDualStackedBar: undefined;

      /**
       * 100% Stacked Column Chart with 2 Y-Axes
       */
      export const PercentageDualStackedColumn: undefined;

      /**
       * 100% Stacked Bar Chart
       */
      export const PercentageStackedBar: undefined;

      /**
       * 100% Stacked Column Chart
       */
      export const PercentageStackedColumn: undefined;

      /**
       * Pie Chart
       */
      export const Pie: undefined;

      /**
       * Scatter Plot
       */
      export const Scatter: undefined;

      /**
       * Stacked Bar Chart
       */
      export const StackedBar: undefined;

      /**
       * Stacked Column Chart
       */
      export const StackedColumn: undefined;

      /**
       * Combined Stacked Line Chart
       */
      export const StackedCombination: undefined;

      /**
       * Vertical Bullet Chart
       */
      export const VerticalBullet: undefined;

      /**
       * Waterfall Chart
       */
      export const Waterfall: undefined;
    }
    /**
     * Package with colorings enumeration
     */
    namespace coloring {
      /**
       * Enumeration for supported criticality types in analytical chart
       */
      enum CriticalityType {
        /**
         * Critical
         */
        Critical,
        /**
         * Negative
         */
        Negative,
        /**
         * Neutral
         */
        Neutral,
        /**
         * Positive
         */
        Positive
      }
      /**
       * Enumeration for supported Gradation diverging color scheme in analytical chart
       */
      enum GradationDivergingColorScheme {
        /**
         * PositiveToNegative
         */
        ColdToHot,
        /**
         * HotToCold
         */
        HotToCold,
        /**
         * NegativeToPositive
         */
        NegativeToPositive,
        /**
         * NoSemantics
         */
        NoSemantics,
        /**
         * PositiveToNegative
         */
        PositiveToNegative
      }
      /**
       * Enumeration for supported Gradation color saturation in analytical chart
       */
      enum GradationSaturation {
        /**
         * DarkToLight
         */
        DarkToLight,
        /**
         * LightToDark
         */
        LightToDark
      }
      /**
       * Enumeration for supported Gradation single color scheme in analytical chart
       */
      enum GradationSingleColorScheme {
        /**
         * Negative
         */
        Negative,
        /**
         * NoSemantics
         */
        NoSemantics,
        /**
         * Positive
         */
        Positive
      }
      /**
       * Enumeration for supported Gradation target color scheme in analytical chart
       */
      enum GradationTargetColorScheme {
        /**
         * PositiveTarget
         */
        PositiveTarget
      }
      /**
       * Enumeration for supported ImprovementDirection types in analytical chart
       */
      enum ImprovementDirectionType {
        /**
         * Higher is better.
         *
         * Positive if the value is greater than or equal to `AcceptanceRangeLowValue`.
         *
         * Neutral if the value is lower than `AcceptanceRangeLowValue` and greater than or equal to `ToleranceRangeLowValue`.
         *
         * Critical if the value is lower than `ToleranceRangeLowValue` and greater than or equal to `DeviationRangeLowValue`.
         *
         * Negative if the value is lower than `DeviationRangeLowValue`.
         */
        Maximize,
        /**
         * Lower is better.
         *
         * Positive if the value is lower than or equal to `AcceptanceRangeHighValue`.
         *
         * Neutral if the value is greater than `AcceptanceRangeHighValue` and lower than or equal to `ToleranceRangeHighValue`.
         *
         * Critical if the value is greater than `ToleranceRangeHighValue` and lower than or equal to `DeviationRangeHighValue`.
         *
         * Negative if the value is greater than `DeviationRangeHighValue`.
         */
        Minimize,
        /**
         * Closer to the target is better.
         *
         * Positive if the value is greater than or equal to `AcceptanceRangeLowValue` and lower than or equal to
         * `AcceptanceRangeHighValue`.
         *
         * Neutral if the value is greater than or equal to `ToleranceRangeLowValue` and lower than `AcceptanceRangeLowValue`
         * OR greater than `AcceptanceRangeHighValue` and lower than or equal to `ToleranceRangeHighValue`.
         *
         * Critical if the value is greater than or equal to `DeviationRangeLowValue` and lower than `ToleranceRangeLowValue`
         * OR greater than `ToleranceRangeHighValue` and lower than or equal to `DeviationRangeHighValue`.
         *
         * Negative if the value is lower than `DeviationRangeLowValue` or greater than `DeviationRangeHighValue`.
         */
        Target
      }
    }
    /**
     * Package with additional chart data APIs
     */
    namespace data {
      interface $DimensionSettings extends sap.ui.core.$ElementSettings {
        /**
         * Property in the "data" model holding the (always unique) Dimension key.
         */
        name?: string;

        /**
         * Label for the Dimension, either as a string literal or by a pointer using the binding syntax to some
         * property containing the label.
         *
         * **NOTE:** This property was bound internally if automatically created via metadata of oData service and
         * please call "unbindProperty" before setting.
         */
        label?: string;

        /**
         * Function returning a formatted text for a Dimension key value that will be used for axis labelling. If
         * specified, this property takes precedence over the "textProperty" property of the Dimension. Dimension
         * key value and the corresponding text will be passed to the supplied function as parameters.
         */
        textFormatter?: Function;

        /**
         * Text for a Dimension key value, typically by a pointer using the binding syntax to some property containing
         * the text.
         *
         * **NOTE:** This property was bound internally if automatically created via metadata of oData service and
         * please call "unbindProperty" before setting.
         */
        textProperty?: string;

        /**
         * Whether a text is displayed. If the "textProperty" property has not been specified, it will be derived
         * from the metadata.
         */
        displayText?: boolean;

        /**
         * How the Dimension will influence the chart layout. Possible values are {@link sap.chart.data.DimensionRoleType
         * category}, {@link sap.chart.data.DimensionRoleType series} or {@link sap.chart.data.DimensionRoleType
         * category2}. The default is {@link sap.chart.data.DimensionRoleType category}.
         *
         * You can create a new dimension as follow:
         * ```javascript
         *
         * ...
         * new sap.chart.data.Dimension({name: "DIMENSION1", role: sap.chart.data.DimensionRoleType.category})
         * ...
         * ```
         *
         *
         * Detailed usage of dimension role. Please refer to {@link sap.chart.data.DimensionRoleType DimensionRoleType}
         *
         * **NOTE:** Has no effect if the Dimension is used as inResultDimensions by Chart
         */
        role?: string;
      }

      interface $HierarchyDimensionSettings
        extends sap.chart.data.$DimensionSettings {
        /**
         * Level restriction to be applied to this hierarchy dimension. NOTE: Setting this property will cause initialization
         * of drill stack. Getter of this property just returns level explicitly set by user, call {@link sap.chart.Chart#getDrillStack}
         * and refer to 'hierarchylevel' if you need current level after drilling
         */
        level?: number;
      }

      interface $MeasureSettings extends sap.ui.core.$ElementSettings {
        /**
         * Property in the "data" model holding the raw measure value.
         */
        name?: string;

        /**
         * Label for the Measure, either as a string literal or by a pointer using the binding syntax to some property
         * containing the label.
         */
        label?: string;

        /**
         * Unit for the measure, a pointer using the binding syntax to some field containing the unit. Value of
         * the given field from the same data record will be displayed after formatted measure value in data label,
         * tooltip and chart popover. NOTE: If the unit field is not set as visible dimension in chart, or more
         * than one unit value exists for any visible dimension value combination, it will be rendered in the chart
         * as well but with different layout when the field is set as visible dimension..
         */
        unitBinding?: string;

        /**
         * @deprecated - Please use {@link sap.chart.Chart#setVizProperties} to set related formatStrings instead.
         *
         * A (core UI5) format pattern to be used by the formatter to format the measure value.
         */
        valueFormat?: string;

        /**
         * How values of Measure will be rendered in the chart. Possible role values are {@link sap.chart.data.MeasureRoleType
         * axis1}, {@link sap.chart.data.MeasureRoleType axis2}, {@link sap.chart.data.MeasureRoleType axis3}, and
         * {@link sap.chart.data.MeasureRoleType axis4}. The default is {@link sap.chart.data.MeasureRoleType axis1}.
         * They correspond to the well-known concepts of axis identifiers in the Cartesian coordinate system, e.g.
         * a Y-axis in a bar/column/line chart, an X- and a Y-axis in a scatter chart, or two Y-axes in bar charts,
         * and an optional third axis for the weight/size/intensity/temperature of a data point.
         *
         * You can create a new measure as follow:
         * ```javascript
         *
         * ...
         * new sap.chart.data.Measure({name: "MEASURE1", role: sap.chart.data.MeasureRoleType.axis1})
         * ...
         * ```
         *
         *
         * Detailed usage of measure role. Please refer to {@link sap.chart.data.MeasureRoleType MeasureRoleType}
         *
         * **NOTE:** Role definition would not work for Bullet Chart and users need to set semantics instead.
         */
        role?: string;

        /**
         * The semantics of the measure.
         *
         * **NOTE:** Dimension-based coloring (see {@link sap.chart.Chart#setColorings}) does not work when semantics
         * is set to {@link sap.chart.data.MeasureSemantics.Projected} or {@link sap.chart.data.MeasureSemantics.Reference}
         * for visible measure(s).
         *
         * **NOTE:** In Bullet chart measure defined as "Reference" maps to targetValues and "Projected" maps to
         * additionalValues. Measures without definition will be recognized as actualValues.
         */
        semantics?: sap.chart.data.MeasureSemantics;

        /**
         * Semantically related measures for a measure with semantics "actual" value. It is an object with two properties:
         *
         * 	 - "projectedValueMeasure" identifing the projected value measure, and
         * 	 - "referenceValueMeasure" identifing the reference value measure.
         */
        semanticallyRelatedMeasures?: object;

        /**
         * @SINCE 1.63
         * @EXPERIMENTAL
         *
         * The analytical extra information
         */
        analyticalInfo?: object;
      }

      interface $TimeDimensionSettings
        extends sap.chart.data.$DimensionSettings {
        /**
         * Detailed unit infomation of TimeDimension. Please refer to {@link sap.chart.TimeUnitType TimeUnitType}.
         */
        timeUnit?: sap.chart.TimeUnitType;

        /**
         * Detailed fiscalYearPeriodCount of TimeDimension. It contains period numbers of fiscal years, like
         * ```javascript
         *
         * {
         * 	 default: 12,
         * 	 deviations: {
         * 	 	 "2012": 10,
         * 	 	 "2013": 16
         * 	 }
         * }
         * ```
         */
        fiscalYearPeriodCount?: object;

        /**
         * A time value (aligned with 'timeUnit') to indicate the start point of projected values.
         */
        projectedValueStartTime?: any;
      }
      /**
       * @SINCE 1.32.0
       *
       * Definition of a single dimension in a chart
       *
       *   chartType binding rules   pie, donut All
       * dimensions are assigned to feed uid ???color???.   scatter, bubble All dimensions
       * with role category are assigned to feed uid ???shape???.   heatmap All dimensions
       * with role ???series??? and ???category2??? are assigned to the feed uid ???categoryAxis2???.   treemap
       * All dimensions are assigned to the feed uid ???categoryAxis??? in the default sequence.
       */
      class Dimension extends sap.ui.core.Element {
        /**
         * Constructor for a new ui5/data/Dimension.
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
          mSettings?: $DimensionSettings
        );

        /**
         * Creates a new subclass of class sap.chart.data.Dimension with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
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
         * Gets current value of property {@link #getDisplayText displayText}.
         *
         * Whether a text is displayed. If the "textProperty" property has not been specified, it will be derived
         * from the metadata.
         *
         * Default value is `true`.
         */
        getDisplayText(): boolean;
        /**
         * Gets current value of property {@link #getLabel label}.
         *
         * Label for the Dimension, either as a string literal or by a pointer using the binding syntax to some
         * property containing the label.
         *
         * **NOTE:** This property was bound internally if automatically created via metadata of oData service and
         * please call "unbindProperty" before setting.
         */
        getLabel(): string;
        /**
         * Returns a metadata object for class sap.chart.data.Dimension.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * Property in the "data" model holding the (always unique) Dimension key.
         */
        getName(): string;
        /**
         * Gets current value of property {@link #getRole role}.
         *
         * How the Dimension will influence the chart layout. Possible values are {@link sap.chart.data.DimensionRoleType
         * category}, {@link sap.chart.data.DimensionRoleType series} or {@link sap.chart.data.DimensionRoleType
         * category2}. The default is {@link sap.chart.data.DimensionRoleType category}.
         *
         * You can create a new dimension as follow:
         * ```javascript
         *
         * ...
         * new sap.chart.data.Dimension({name: "DIMENSION1", role: sap.chart.data.DimensionRoleType.category})
         * ...
         * ```
         *
         *
         * Detailed usage of dimension role. Please refer to {@link sap.chart.data.DimensionRoleType DimensionRoleType}
         *
         * **NOTE:** Has no effect if the Dimension is used as inResultDimensions by Chart
         *
         * Default value is `"category"`.
         */
        getRole(): string;
        /**
         * Gets current value of property {@link #getTextFormatter textFormatter}.
         *
         * Function returning a formatted text for a Dimension key value that will be used for axis labelling. If
         * specified, this property takes precedence over the "textProperty" property of the Dimension. Dimension
         * key value and the corresponding text will be passed to the supplied function as parameters.
         */
        getTextFormatter(): Function;
        /**
         * Gets current value of property {@link #getTextProperty textProperty}.
         *
         * Text for a Dimension key value, typically by a pointer using the binding syntax to some property containing
         * the text.
         *
         * **NOTE:** This property was bound internally if automatically created via metadata of oData service and
         * please call "unbindProperty" before setting.
         */
        getTextProperty(): string;
        /**
         * Sets a new value for property {@link #getDisplayText displayText}.
         *
         * Whether a text is displayed. If the "textProperty" property has not been specified, it will be derived
         * from the metadata.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setDisplayText(
          /**
           * New value for property `displayText`
           */
          bDisplayText?: boolean
        ): sap.chart.data.Dimension;
        /**
         * Sets a new value for property {@link #getLabel label}.
         *
         * Label for the Dimension, either as a string literal or by a pointer using the binding syntax to some
         * property containing the label.
         *
         * **NOTE:** This property was bound internally if automatically created via metadata of oData service and
         * please call "unbindProperty" before setting.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabel(
          /**
           * New value for property `label`
           */
          sLabel: string
        ): sap.chart.data.Dimension;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * Property in the "data" model holding the (always unique) Dimension key.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.chart.data.Dimension;
        /**
         * Sets a new value for property {@link #getRole role}.
         *
         * How the Dimension will influence the chart layout. Possible values are {@link sap.chart.data.DimensionRoleType
         * category}, {@link sap.chart.data.DimensionRoleType series} or {@link sap.chart.data.DimensionRoleType
         * category2}. The default is {@link sap.chart.data.DimensionRoleType category}.
         *
         * You can create a new dimension as follow:
         * ```javascript
         *
         * ...
         * new sap.chart.data.Dimension({name: "DIMENSION1", role: sap.chart.data.DimensionRoleType.category})
         * ...
         * ```
         *
         *
         * Detailed usage of dimension role. Please refer to {@link sap.chart.data.DimensionRoleType DimensionRoleType}
         *
         * **NOTE:** Has no effect if the Dimension is used as inResultDimensions by Chart
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `"category"`.
         */
        setRole(
          /**
           * New value for property `role`
           */
          sRole?: string
        ): sap.chart.data.Dimension;
        /**
         * Sets a new value for property {@link #getTextFormatter textFormatter}.
         *
         * Function returning a formatted text for a Dimension key value that will be used for axis labelling. If
         * specified, this property takes precedence over the "textProperty" property of the Dimension. Dimension
         * key value and the corresponding text will be passed to the supplied function as parameters.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTextFormatter(
          /**
           * New value for property `textFormatter`
           */
          fnTextFormatter: Function
        ): sap.chart.data.Dimension;
        /**
         * Sets a new value for property {@link #getTextProperty textProperty}.
         *
         * Text for a Dimension key value, typically by a pointer using the binding syntax to some property containing
         * the text.
         *
         * **NOTE:** This property was bound internally if automatically created via metadata of oData service and
         * please call "unbindProperty" before setting.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTextProperty(
          /**
           * New value for property `textProperty`
           */
          sTextProperty: string
        ): sap.chart.data.Dimension;
      }
      /**
       * @SINCE 1.54.0
       *
       * Definition of a single hierarchy dimension in a chart
       */
      class HierarchyDimension extends sap.chart.data.Dimension {
        /**
         * Constructor for a new ui5/data/HierarchyDimension.
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
          mSettings?: $HierarchyDimensionSettings
        );

        /**
         * Creates a new subclass of class sap.chart.data.HierarchyDimension with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.chart.data.Dimension.extend}.
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
         * Gets current value of property {@link #getLevel level}.
         *
         * Level restriction to be applied to this hierarchy dimension. NOTE: Setting this property will cause initialization
         * of drill stack. Getter of this property just returns level explicitly set by user, call {@link sap.chart.Chart#getDrillStack}
         * and refer to 'hierarchylevel' if you need current level after drilling
         *
         * Default value is `0`.
         */
        getLevel(): number;
        /**
         * Returns a metadata object for class sap.chart.data.HierarchyDimension.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Sets a new value for property {@link #getLevel level}.
         *
         * Level restriction to be applied to this hierarchy dimension. NOTE: Setting this property will cause initialization
         * of drill stack. Getter of this property just returns level explicitly set by user, call {@link sap.chart.Chart#getDrillStack}
         * and refer to 'hierarchylevel' if you need current level after drilling
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setLevel(
          /**
           * New value for property `level`
           */
          iLevel?: number
        ): sap.chart.data.HierarchyDimension;
      }
      /**
       * @SINCE 1.32.0
       *
       * Definition of a single measure in a chart
       *
       *   chartType binding rules   pie, donut The
       * measure is assigned to feed uid ???size???.   scatter The first measure with role
       * ???axis1???, or (if not exists) the first measure with role ???axis2??? or (if not exist) with role ???axis3???,
       * is assigned to the feed uid ???valueAxis???. The other measure is assigned to feed uid ???valueAxis2???.
       *   bubble The first measure with role ???axis1???, or (if not exists) the first measure
       * with role ???axis2??? or (if not exist) with role ???axis3???, is assigned to the feed uid ???valueAxis???.
       * The first measure with role ???axis2???, or (if not exists) the second measure with role ???axis1??? or (if not
       * exist) the first measure with role ???axis3???, is assigned to the feed uid ???valueAxis2???.
       * The remaining measure is assigned to feed uid ???bubbleWidth???.    heatmap The
       * measure is assigned to the feed uid ???color???.   treemap The first measure with
       * role ???axis1???, or (if not exists) the first measure with role ???axis2??? or (if not exist) with role ???axis3???,
       * is assigned to the feed uid ???color???. The other measure is assigned to feed uid ???weight???.
       * ..dual.. At least one measure is assigned to each of the feed uids ???valueAxis??? and ???valueAxis2???,
       * according to the general rule.
       */
      class Measure extends sap.ui.core.Element {
        /**
         * Constructor for a new ui5/data/Measure.
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
          mSettings?: $MeasureSettings
        );

        /**
         * Creates a new subclass of class sap.chart.data.Measure with name `sClassName` and enriches it with the
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
         * @SINCE 1.63
         * @EXPERIMENTAL
         *
         * Gets current value of property {@link #getAnalyticalInfo analyticalInfo}.
         *
         * The analytical extra information
         */
        getAnalyticalInfo(): object;
        /**
         * Gets current value of property {@link #getLabel label}.
         *
         * Label for the Measure, either as a string literal or by a pointer using the binding syntax to some property
         * containing the label.
         */
        getLabel(): string;
        /**
         * Returns a metadata object for class sap.chart.data.Measure.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * Property in the "data" model holding the raw measure value.
         */
        getName(): string;
        /**
         * Gets current value of property {@link #getRole role}.
         *
         * How values of Measure will be rendered in the chart. Possible role values are {@link sap.chart.data.MeasureRoleType
         * axis1}, {@link sap.chart.data.MeasureRoleType axis2}, {@link sap.chart.data.MeasureRoleType axis3}, and
         * {@link sap.chart.data.MeasureRoleType axis4}. The default is {@link sap.chart.data.MeasureRoleType axis1}.
         * They correspond to the well-known concepts of axis identifiers in the Cartesian coordinate system, e.g.
         * a Y-axis in a bar/column/line chart, an X- and a Y-axis in a scatter chart, or two Y-axes in bar charts,
         * and an optional third axis for the weight/size/intensity/temperature of a data point.
         *
         * You can create a new measure as follow:
         * ```javascript
         *
         * ...
         * new sap.chart.data.Measure({name: "MEASURE1", role: sap.chart.data.MeasureRoleType.axis1})
         * ...
         * ```
         *
         *
         * Detailed usage of measure role. Please refer to {@link sap.chart.data.MeasureRoleType MeasureRoleType}
         *
         * **NOTE:** Role definition would not work for Bullet Chart and users need to set semantics instead.
         *
         * Default value is `"axis1"`.
         */
        getRole(): string;
        /**
         * Gets current value of property {@link #getSemanticallyRelatedMeasures semanticallyRelatedMeasures}.
         *
         * Semantically related measures for a measure with semantics "actual" value. It is an object with two properties:
         *
         * 	 - "projectedValueMeasure" identifing the projected value measure, and
         * 	 - "referenceValueMeasure" identifing the reference value measure.
         */
        getSemanticallyRelatedMeasures(): object;
        /**
         * Gets current value of property {@link #getSemantics semantics}.
         *
         * The semantics of the measure.
         *
         * **NOTE:** Dimension-based coloring (see {@link sap.chart.Chart#setColorings}) does not work when semantics
         * is set to {@link sap.chart.data.MeasureSemantics.Projected} or {@link sap.chart.data.MeasureSemantics.Reference}
         * for visible measure(s).
         *
         * **NOTE:** In Bullet chart measure defined as "Reference" maps to targetValues and "Projected" maps to
         * additionalValues. Measures without definition will be recognized as actualValues.
         *
         * Default value is `Actual`.
         */
        getSemantics(): sap.chart.data.MeasureSemantics;
        /**
         * Gets current value of property {@link #getUnitBinding unitBinding}.
         *
         * Unit for the measure, a pointer using the binding syntax to some field containing the unit. Value of
         * the given field from the same data record will be displayed after formatted measure value in data label,
         * tooltip and chart popover. NOTE: If the unit field is not set as visible dimension in chart, or more
         * than one unit value exists for any visible dimension value combination, it will be rendered in the chart
         * as well but with different layout when the field is set as visible dimension..
         */
        getUnitBinding(): string;
        /**
         * @deprecated - Please use {@link sap.chart.Chart#setVizProperties} to set related formatStrings instead.
         *
         * Gets current value of property {@link #getValueFormat valueFormat}.
         *
         * A (core UI5) format pattern to be used by the formatter to format the measure value.
         */
        getValueFormat(): string;
        /**
         * @SINCE 1.63
         * @EXPERIMENTAL
         *
         * Sets a new value for property {@link #getAnalyticalInfo analyticalInfo}.
         *
         * The analytical extra information
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAnalyticalInfo(
          /**
           * New value for property `analyticalInfo`
           */
          oAnalyticalInfo?: object
        ): sap.chart.data.Measure;
        /**
         * Sets a new value for property {@link #getLabel label}.
         *
         * Label for the Measure, either as a string literal or by a pointer using the binding syntax to some property
         * containing the label.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabel(
          /**
           * New value for property `label`
           */
          sLabel: string
        ): sap.chart.data.Measure;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * Property in the "data" model holding the raw measure value.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.chart.data.Measure;
        /**
         * Sets a new value for property {@link #getRole role}.
         *
         * How values of Measure will be rendered in the chart. Possible role values are {@link sap.chart.data.MeasureRoleType
         * axis1}, {@link sap.chart.data.MeasureRoleType axis2}, {@link sap.chart.data.MeasureRoleType axis3}, and
         * {@link sap.chart.data.MeasureRoleType axis4}. The default is {@link sap.chart.data.MeasureRoleType axis1}.
         * They correspond to the well-known concepts of axis identifiers in the Cartesian coordinate system, e.g.
         * a Y-axis in a bar/column/line chart, an X- and a Y-axis in a scatter chart, or two Y-axes in bar charts,
         * and an optional third axis for the weight/size/intensity/temperature of a data point.
         *
         * You can create a new measure as follow:
         * ```javascript
         *
         * ...
         * new sap.chart.data.Measure({name: "MEASURE1", role: sap.chart.data.MeasureRoleType.axis1})
         * ...
         * ```
         *
         *
         * Detailed usage of measure role. Please refer to {@link sap.chart.data.MeasureRoleType MeasureRoleType}
         *
         * **NOTE:** Role definition would not work for Bullet Chart and users need to set semantics instead.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `"axis1"`.
         */
        setRole(
          /**
           * New value for property `role`
           */
          sRole?: string
        ): sap.chart.data.Measure;
        /**
         * Sets a new value for property {@link #getSemanticallyRelatedMeasures semanticallyRelatedMeasures}.
         *
         * Semantically related measures for a measure with semantics "actual" value. It is an object with two properties:
         *
         * 	 - "projectedValueMeasure" identifing the projected value measure, and
         * 	 - "referenceValueMeasure" identifing the reference value measure.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSemanticallyRelatedMeasures(
          /**
           * New value for property `semanticallyRelatedMeasures`
           */
          oSemanticallyRelatedMeasures?: object
        ): sap.chart.data.Measure;
        /**
         * Sets a new value for property {@link #getSemantics semantics}.
         *
         * The semantics of the measure.
         *
         * **NOTE:** Dimension-based coloring (see {@link sap.chart.Chart#setColorings}) does not work when semantics
         * is set to {@link sap.chart.data.MeasureSemantics.Projected} or {@link sap.chart.data.MeasureSemantics.Reference}
         * for visible measure(s).
         *
         * **NOTE:** In Bullet chart measure defined as "Reference" maps to targetValues and "Projected" maps to
         * additionalValues. Measures without definition will be recognized as actualValues.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Actual`.
         */
        setSemantics(
          /**
           * New value for property `semantics`
           */
          sSemantics?: sap.chart.data.MeasureSemantics
        ): sap.chart.data.Measure;
        /**
         * Sets a new value for property {@link #getUnitBinding unitBinding}.
         *
         * Unit for the measure, a pointer using the binding syntax to some field containing the unit. Value of
         * the given field from the same data record will be displayed after formatted measure value in data label,
         * tooltip and chart popover. NOTE: If the unit field is not set as visible dimension in chart, or more
         * than one unit value exists for any visible dimension value combination, it will be rendered in the chart
         * as well but with different layout when the field is set as visible dimension..
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setUnitBinding(
          /**
           * New value for property `unitBinding`
           */
          sUnitBinding: string
        ): sap.chart.data.Measure;
        /**
         * @deprecated - Please use {@link sap.chart.Chart#setVizProperties} to set related formatStrings instead.
         *
         * Sets a new value for property {@link #getValueFormat valueFormat}.
         *
         * A (core UI5) format pattern to be used by the formatter to format the measure value.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValueFormat(
          /**
           * New value for property `valueFormat`
           */
          sValueFormat?: string
        ): sap.chart.data.Measure;
      }
      /**
       * @SINCE 1.38.0
       *
       * Definition of a single time dimension in a chart
       *
       * If there is exactly one dimension with time semantics, then instead of line, time_line shall be used
       * (implicitly).
       *
       * TimeDmension is assigned to feed uid "timeAxis".
       */
      class TimeDimension extends sap.chart.data.Dimension {
        /**
         * Constructor for a new ui5/data/TimeDimension.
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
          mSettings?: $TimeDimensionSettings
        );

        /**
         * Creates a new subclass of class sap.chart.data.TimeDimension with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.chart.data.Dimension.extend}.
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
         * Gets current value of property {@link #getFiscalYearPeriodCount fiscalYearPeriodCount}.
         *
         * Detailed fiscalYearPeriodCount of TimeDimension. It contains period numbers of fiscal years, like
         * ```javascript
         *
         * {
         * 	 default: 12,
         * 	 deviations: {
         * 	 	 "2012": 10,
         * 	 	 "2013": 16
         * 	 }
         * }
         * ```
         */
        getFiscalYearPeriodCount(): object;
        /**
         * Returns a metadata object for class sap.chart.data.TimeDimension.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getProjectedValueStartTime projectedValueStartTime}.
         *
         * A time value (aligned with 'timeUnit') to indicate the start point of projected values.
         */
        getProjectedValueStartTime(): any;
        /**
         * Gets current value of property {@link #getTimeUnit timeUnit}.
         *
         * Detailed unit infomation of TimeDimension. Please refer to {@link sap.chart.TimeUnitType TimeUnitType}.
         */
        getTimeUnit(): sap.chart.TimeUnitType;
        /**
         * Sets a new value for property {@link #getFiscalYearPeriodCount fiscalYearPeriodCount}.
         *
         * Detailed fiscalYearPeriodCount of TimeDimension. It contains period numbers of fiscal years, like
         * ```javascript
         *
         * {
         * 	 default: 12,
         * 	 deviations: {
         * 	 	 "2012": 10,
         * 	 	 "2013": 16
         * 	 }
         * }
         * ```
         *
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFiscalYearPeriodCount(
          /**
           * New value for property `fiscalYearPeriodCount`
           */
          oFiscalYearPeriodCount: object
        ): sap.chart.data.TimeDimension;
        /**
         * Sets a new value for property {@link #getProjectedValueStartTime projectedValueStartTime}.
         *
         * A time value (aligned with 'timeUnit') to indicate the start point of projected values.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setProjectedValueStartTime(
          /**
           * New value for property `projectedValueStartTime`
           */
          oProjectedValueStartTime: any
        ): sap.chart.data.TimeDimension;
        /**
         * Sets a new value for property {@link #getTimeUnit timeUnit}.
         *
         * Detailed unit infomation of TimeDimension. Please refer to {@link sap.chart.TimeUnitType TimeUnitType}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTimeUnit(
          /**
           * New value for property `timeUnit`
           */
          sTimeUnit: sap.chart.TimeUnitType
        ): sap.chart.data.TimeDimension;
      }
      /**
       * Enum of supported role types for Dimension
       */
      enum DimensionRoleType {
        /**
         * All dimensions with role "category" are assigned to the feed uid "categoryAxis".
         *
         * **NOTE:** If the chart type requires at least one dimension on the feed "categoryAxis" (true for all
         * chart types except pie and donut), but no dimension has the role "category" or "category2", then the
         * first visible dimension is assigned to the "categoryAxis".
         */
        category,
        /**
         * If a chart type does not use the feed uid "categoryAxis2", then all dimensions with role "category2"
         * are treated as dimension with role "category" (appended).
         */
        category2,
        /**
         * All dimensions with role "series" are assigned to the feed uid "color".
         */
        series
      }
      /**
       * Enum of supported role types for Measure
       */
      enum MeasureRoleType {
        /**
         * General Rules for all chart types
         * 	 - All measues with role "axis1" are assigned to feed uid "valueaxis". All measures with role "axis2"
         * 			are assigned to feed uid "valueaxis2". All measures with role "axis3" are assigned to feed uid "bubbleWidth".
         *
         * 	 - If a chart type does not use the feed uid "valueaxis2", then all measures with role "axis2" are treated
         * 			as measures with role "axis1".
         * 	 - If a chart type requires at least 1 measure on the feed uid "valueaxis" (true for all non-"dual"
         * 			chart types), but there is no measure with role "axis1", then the first measure with role "axis2" is
         * 			assigned to feed uid "valueaxis"
         * 	 - If the chart type requires at least one measure on the feed uid "valueaxis2" (true for all "dual"
         * 			chart types"), but there is no measure with role "axis2", then the first measure with role "axis3" or
         * 			"axis4" or (if not exists) the last measure with role "axis1" is assigned to feed uid "valueaxis2".
         */
        axis1,
        /**
         * Measures with role "axis2" are assigned to feed uid "valueaxis2" if used. If a chart type does not use
         * the feed uid "bubbleWidth" (true for all chart types except bubble and radar), then all measures with
         * role "axis3" or "axis4" are treated as measures with role "axis2".
         */
        axis2,
        /**
         * Measures with role "axis3" are assigned to feed uid "bubbleWidth" if used.
         */
        axis3,
        /**
         * @deprecated - Please use other MeasureRoleType for specific usage.
         *
         * Once used by Bullet Chart, but as this chart layout is configured via semantic patterns instead, "Asix4"
         * has no special usage from now on.
         */
        axis4
      }
      /**
       * Enum of available semantics value for Measure.
       */
      enum MeasureSemantics {
        /**
         * facts that happened in the past.
         */
        Actual,
        /**
         * where values should be, e.g.: thresholds, targets.
         */
        Projected,
        /**
         * where values will be, e.g.: forecasts, estimations, predictions.
         */
        Reference
      }
    }

    interface $ChartSettings
      extends sap.viz.ui5.controls.common.$BaseControlSettings {
      /**
       * Type of the Chart.
       */
      chartType?: string;

      /**
       * Configuration for initialization to VizControl. This property could only set via settings parameter in
       * Constructor.
       */
      uiConfig?: object;

      /**
       * Names of the Dimensions to be displayed in the Chart, all available dimensions will automatically append
       * when the property isAnalytical is false.
       *
       * Depending on chart type, insufficient number of visible `Dimension`s will cause error.
       */
      visibleDimensions?: string[];

      /**
       * Names of the inResult dimensions.
       *
       * inResult dimension do not show up in chart layout, i.e. axis/legend. They do show in tooltip, popover,
       * and in selection results.
       */
      inResultDimensions?: string[];

      /**
       * Names of the Measures to be displayed in the Chart.
       *
       * Depending on chart type, insufficient number of visible `Measure`s will cause errors.
       */
      visibleMeasures?: string[];

      /**
       * Chart properties, refer to chart property documentation
       * for more details.
       */
      vizProperties?: object;

      /**
       * /** Chart scales, refer to chart property documentation
       * for more details.
       */
      vizScales?: object[];

      /**
       * Whether or not an aggregated entity set is bound to the chart.
       */
      isAnalytical?: boolean;

      /**
       * Chart selection behavior.
       */
      selectionBehavior?: sap.chart.SelectionBehavior;

      /**
       * Chart selection mode.
       */
      selectionMode?: sap.chart.SelectionMode;

      /**
       * Enable pagination mode.
       *
       * Pagination mode empowers users to visualize dataset page by page by scrolling back or forth. Currently
       * there are some limitations of this mode in some chart transversal features, such as:
       * 	 - Selection status might lost for new batch data
       * 	 - Keyboard navigation will be only available for current continuous batch data
       * 	 - Zoom out might have inconsistent behavior, Hence the gesture in mobile might have the same issue
       *
       * 	 - Time charts did not enable pagination yet
       * 	 - Series color might be inconsistent before/after jump pages
       * 	 - OData V4 Model with relative binding is not supported in pagination  Please refer to release
       * 			notes for details.
       */
      enablePagination?: boolean;

      /**
       * Enable Stable color mode. To keep the same colors for the same dimension values or measure names.
       */
      enableStableColor?: boolean;

      /**
       * Enable scaling factor.
       */
      enableScalingFactor?: boolean;

      /**
       * Chart custom messages.
       */
      customMessages?: object;

      /**
       * Chart colorings.
       *
       * Holds an object with information about the possible options how colors can be applied for indicating
       * `Criticality` or `Emphasis` in the chart.
       * ```javascript
       *
       * Colorings: {
       *     Criticality: {
       *         ???
       *     },
       *     Emphasis: {
       *         ???
       *     }
       * }
       * ```
       *
       *
       * **NOTE:** Dimension-based coloring does not work when {@link sap.chart.data.Measure#setSemantics} is
       * set to {@link sap.chart.data.MeasureSemantics.Projected} or {@link sap.chart.data.MeasureSemantics.Reference}
       * for visible measure(s).
       *
       * Refer to
       *  {@link sap.chart.ColoringType.Criticality}
       *  {@link sap.chart.ColoringType.Emphasis}
       *  for detailed usage
       */
      colorings?: object;

      /**
       * Active coloring configurations.
       *
       * specifies which coloring of the possible colorings is to be applied for the current chart layout. It
       * holds an object with two properties???
       *
       *
       * 	 - coloring: **mandatory**, specify which kind of coloring should take effect in current chart layout.
       * 			Possible values refer to {@link sap.chart.ColoringType} parameters:
       * 	 `Criticality` supports two parameters: `"dimension"` and `"measure"`. Both are **optional**, one (and
       * only one) must be provided. This setting disambiguates when multiple colorings for different visible
       * dimensions and measures are applicable.
       *
       * `"measure"` supports two input types:
       * 	 - `string` for single measure name
       * 	 - `string[]` of multiple measure names(only supported in **static**), which is relevant in case of
       * 			a **static** measure criticality defined on multiple measures.  `"dimension"` holds the dimension
       * 			name as string value.   `Emphasis` supports only one parameter: `"dimension"` which is **optional**.
       *
       * `"dimension"` holds the dimension name as string value.
       *
       * Example:
       * ```javascript
       *
       * activeColoring: {
       *     coloring: sap.chart.ColoringType.Criticality,
       *     parameters: {
       *         dimension: "AvailabilityStatus???
       *     }
       * }
       * ```
       */
      activeColoring?: object;

      /**
       * Value Axis Scale.
       *
       * Specifies the scale of the chart value axes.
       *
       *
       * 	 - scaleBehavior: **optional**, determines whether or not all value axes in the chart should have a
       * 			fixed scale. Possible values refer to {@link sap.chart.ScaleBehavior}. The default value is sap.chart.ScaleBehavior.AutoScale.
       * 			In order to apply a fixed scale, boundary values for minimum and maximum must have been specified for
       * 			all visible measures, and the axes boundaries are then created from the largest maximum and the smallest
       * 			minimum value of the measures put on the respective axis. If any visible measure lacks this information,
       * 			or scaleBehavior is set to sap.chart.ScaleBehavior.AutoScale, the chart will apply an automatic scaling
       * 			for all value axes.
       * 	 - fixedScaleSettings:
       * 	measureBoundaryValues: An object holding the fixed ???minimum??? and ???maximum??? values for all the measures.
       * Stacked chart with only one measure also uses this object to describe the fixed ???minimum??? and ???maximum???
       * value.
       * 	 `measure` Measure name
       * 	 - stackedMultipleMeasureBoundaryValues: An array of objects holding the fixed ???minimum??? and ???maximum???
       * 			values only for stacked chart with multiple measures.
       * 	 `measures` the array of measure name applied to the axis.
       * 	 -  `boundaryValues???` An object holding the fixed ???minimum??? and ???maximum??? value all the measures applied
       * 			to certain axis.
       * 	 - autoScaleSettings:
       * 	 `zeroAlwaysVisible` forces the value axis to always display the zero value (only a few chart types
       * support the opposite), which is **optional**. The default value is true.
       * 	 -  `syncWith` selects how the chart adapts the value axis to the data: The axis boundaries may be determined
       * 			from the loaded data, which is **optional**. The default value is "DataSet". Possible values refer to
       * 			{@link sap.chart.AutoScaleMode}.
       *
       * Example:
       * ```javascript
       *
       * valueAxisScale: {
       *     scaleBehavior: sap.chart.ScaleBehavior,
       *     fixedScaleSettings: {
       *         measureBoundaryValues: {
       *             measure_1: {
       *                 minimum: Number,
       *                 maximum: Number
       *             },
       *             measure_2: {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         },
       *         stackedMultipleMeasureBoundaryValues: [{
       *             measures: [ 'measure_1', 'measure_2', ??? ],
       *             boundaryValues??? {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         }??? {
       *             measures: [ 'measure_3', 'measure_4', ??? ],
       *             boundaryValues??? {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         }]
       *     },
       *     autoScaleSettings: {
       *         zeroAlwaysVisible: Boolean,
       *         syncWith: sap.chart.autoScaleMode
       *     }
       * }
       * ```
       *
       *
       * Refer to
       *  {@link sap.chart.AutoScaleMode.DataSet}
       *  {@link sap.chart.AutoScaleMode.VisibleData}
       *  {@link sap.chart.ScaleBehavior.AutoScale}
       *  {@link sap.chart.ScaleBehavior.FixedScale}
       *  for detailed usage
       */
      valueAxisScale?: object;

      /**
       * fired after a drill-down operation
       */
      drilledDown?: Function;

      /**
       * fired after a drill-up operation
       */
      drilledUp?: Function;

      /**
       * Event fires when the rendering ends.
       */
      renderComplete?: Function;

      /**
       * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed
       * in.
       */
      selectData?: Function;

      /**
       * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be
       * passed in
       */
      deselectData?: Function;

      /**
       * Event fires when fixed scale is turned off by adding or removing dimension
       */
      valueAxisFixedScaleTurnedOff?: Function;

      /**
       * Event fires when drill stack changed. API that relies on drill stack like {@link #drillDown}, {@link
       * #drillUp} shall be called in this event or after chart is rendered
       */
      drillStackChanged?: Function;

      /**
       * Actual data. It can be bound to an (analytical) ODataModel.
       *
       * **NOTE:** The metadataLoaded event {@link sap.ui.model.odata.v2.ODataModel#attachMetadataLoaded} need
       * to be listened when bind to v2 ODataModel.
       */
      data?: sap.ui.core.Element[] | sap.ui.core.Element;

      /**
       * Dimensions of the data.
       */
      dimensions?: sap.chart.data.Dimension[] | sap.chart.data.Dimension;

      /**
       * Measures of the data.
       */
      measures?: sap.chart.data.Measure[] | sap.chart.data.Measure;
    }
    /**
     * @SINCE 1.32.0
     *
     * UI5 Chart control
     */
    class Chart extends sap.viz.ui5.controls.common.BaseControl {
      /**
       * Constructor for a new Chart.
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
        mSettings?: $ChartSettings
      );

      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "addData" therefore
       * cannot be used programmatically!
       */
      addData(): void;
      /**
       * Adds some dimension to the aggregation dimensions.
       *
       * Render a chart with time axis when the dimension type is {@link sap.chart.data.TimeDimension}. Please
       * be advised that time axis is supported with limited chart types (column, line, combination, stacked_column,
       * bubble, scatter, dual_combination, vertical_bullet, waterfall).
       */
      addDimension(
        /**
         * The dimension to add; if empty, nothing is inserted
         */
        oDimension: sap.chart.data.Dimension | sap.chart.data.TimeDimension
      ): sap.chart.Chart;
      /**
       * Adds some measure to the aggregation {@link #getMeasures measures}.
       */
      addMeasure(
        /**
         * The measure to add; if empty, nothing is inserted
         */
        oMeasure: sap.chart.data.Measure
      ): sap.chart.Chart;
      /**
       * Add one or more categories to current category selections, specified by category objects.
       *
       * Category object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "CATEGORY"
       */
      addSelectedCategories(
        /**
         * an array of category objects
         */
        aCategories: any[]
      ): sap.chart.Chart;
      /**
       * Add one or more data points to current data point selection, specified by datapoint objects.
       *
       * Datapoint object has the following structure:
       * ```javascript
       *
       * {
       * 		groupId:  "groupId",		  // group ID (optional)
       * 		index:		index,				  // index of the data in the group
       * 		measures: ["measureId"]   // measure IDs
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "DATAPOINT"
       */
      addSelectedDataPoints(
        /**
         * an array of datapoint objects.
         */
        aDataPoints: any[]
      ): sap.chart.Chart;
      /**
       * Add one or more series to current series selections, specified by series objects.
       *
       * Series object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "SERIES"
       */
      addSelectedSeries(
        /**
         * an array of series objects
         */
        aSeries: any[]
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:deselectData deselectData} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be
       * passed in
       */
      attachDeselectData(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:drilledDown drilledDown} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * fired after a drill-down operation
       */
      attachDrilledDown(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:drilledUp drilledUp} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * fired after a drill-up operation
       */
      attachDrilledUp(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:drillStackChanged drillStackChanged} event of
       * this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when drill stack changed. API that relies on drill stack like {@link #drillDown}, {@link
       * #drillUp} shall be called in this event or after chart is rendered
       */
      attachDrillStackChanged(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:renderComplete renderComplete} event of this
       * `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when the rendering ends.
       */
      attachRenderComplete(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:selectData selectData} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed
       * in.
       */
      attachSelectData(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:valueAxisFixedScaleTurnedOff valueAxisFixedScaleTurnedOff}
       * event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when fixed scale is turned off by adding or removing dimension
       */
      attachValueAxisFixedScaleTurnedOff(
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
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Binds aggregation {@link #getData data} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
       * of the possible properties of `oBindingInfo`.
       *
       * **NOTE:** If the {@link sap.ui.model.odata.v4.ODataListBinding list binding} is suspended, data related
       * requests in Chart will be impacted, and the corresponding operations might not work as expected.
       */
      bindData(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.chart.Chart;
      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "destroyData" therefore
       * cannot be used programmatically!
       */
      destroyData(): void;
      /**
       * Destroys all the dimensions in the aggregation dimensions, only works when the property isAnalytical
       * is true.
       */
      destroyDimensions(): sap.chart.Chart;
      /**
       * Destroys all the measures in the aggregation {@link #getMeasures measures}.
       */
      destroyMeasures(): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:deselectData deselectData} event of this `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachDeselectData(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:drilledDown drilledDown} event of this `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachDrilledDown(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:drilledUp drilledUp} event of this `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachDrilledUp(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:drillStackChanged drillStackChanged} event
       * of this `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachDrillStackChanged(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:renderComplete renderComplete} event of this
       * `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachRenderComplete(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:selectData selectData} event of this `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachSelectData(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:valueAxisFixedScaleTurnedOff valueAxisFixedScaleTurnedOff}
       * event of this `sap.chart.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachValueAxisFixedScaleTurnedOff(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Drill down on specific Dimension(s), only works when the property isAnalytical is true.
       *
       * The drill down Dimension(s) must present in the Dimension aggregation and must NOT present in previous
       * drill down or be visible already.
       *
       * **NOTE:** parameter `oBindingInfo.length` during {@link sap.ui.base.ManagedObject#bindAggregation bindAggregation}
       * of {@link #getData data} always takes effect in drill workflow.
       */
      drillDown(
        /**
         * an array, or just a single instance, of either Dimension instance or Dimension name to drill down
         */
        vDimensions: any[]
      ): void;
      /**
       * Drill up to previous drill down state, only works when the property isAnalytical is true.
       *
       * **NOTE:** parameter `oBindingInfo.length` during {@link sap.ui.base.ManagedObject#bindAggregation bindAggregation}
       * of {@link #getData data} always takes effect in drill workflow.
       */
      drillUp(
        /**
         * index of drill state in history to drill up. Default to the previous state in history if available.
         */
        iIndex: number
      ): void;
      /**
       * Export the current chart as SVG String. The chart is ready to be exported to SVG ONLY after the initialization
       * is finished. Any attempt to export to SVG before that will result in an empty SVG string.
       */
      exportToSVGString(
        /**
         *
         * ```javascript
         *
         * {
         *     width: Number - the exported svg will be scaled to the specific width.
         *     height: Number - the exported svg will be scaled to the specific height.
         *     hideTitleLegend: Boolean - flag to indicate if the exported SVG includes the original title and legend.
         *     hideAxis: Boolean - flag to indicate if the exported SVG includes the original axis.
         * }
         * ```
         */
        option?: Object
      ): string;
      /**
       * Creates a new subclass of class sap.chart.Chart with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.viz.ui5.controls.common.BaseControl.extend}.
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
       * Fires event {@link #event:deselectData deselectData} to attached listeners.
       */
      fireDeselectData(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.chart.Chart;
      /**
       * Fires event {@link #event:drilledDown drilledDown} to attached listeners.
       */
      fireDrilledDown(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * array of strings holding the names of the added dimensions
           */
          dimensions?: string[];
        }
      ): sap.chart.Chart;
      /**
       * Fires event {@link #event:drilledUp drilledUp} to attached listeners.
       */
      fireDrilledUp(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * array of strings holding the names of the removed dimensions
           */
          dimensions?: string[];
        }
      ): sap.chart.Chart;
      /**
       * Fires event {@link #event:drillStackChanged drillStackChanged} to attached listeners.
       */
      fireDrillStackChanged(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.chart.Chart;
      /**
       * Fires event {@link #event:renderComplete renderComplete} to attached listeners.
       */
      fireRenderComplete(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.chart.Chart;
      /**
       * Fires event {@link #event:selectData selectData} to attached listeners.
       */
      fireSelectData(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.chart.Chart;
      /**
       * Fires event {@link #event:valueAxisFixedScaleTurnedOff valueAxisFixedScaleTurnedOff} to attached listeners.
       */
      fireValueAxisFixedScaleTurnedOff(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.chart.Chart;
      /**
       * Gets current value of property {@link #getActiveColoring activeColoring}.
       *
       * Active coloring configurations.
       *
       * specifies which coloring of the possible colorings is to be applied for the current chart layout. It
       * holds an object with two properties???
       *
       *
       * 	 - coloring: **mandatory**, specify which kind of coloring should take effect in current chart layout.
       * 			Possible values refer to {@link sap.chart.ColoringType} parameters:
       * 	 `Criticality` supports two parameters: `"dimension"` and `"measure"`. Both are **optional**, one (and
       * only one) must be provided. This setting disambiguates when multiple colorings for different visible
       * dimensions and measures are applicable.
       *
       * `"measure"` supports two input types:
       * 	 - `string` for single measure name
       * 	 - `string[]` of multiple measure names(only supported in **static**), which is relevant in case of
       * 			a **static** measure criticality defined on multiple measures.  `"dimension"` holds the dimension
       * 			name as string value.   `Emphasis` supports only one parameter: `"dimension"` which is **optional**.
       *
       * `"dimension"` holds the dimension name as string value.
       *
       * Example:
       * ```javascript
       *
       * activeColoring: {
       *     coloring: sap.chart.ColoringType.Criticality,
       *     parameters: {
       *         dimension: "AvailabilityStatus???
       *     }
       * }
       * ```
       */
      getActiveColoring(): object;
      /**
       * Returns available and unavailable chart types with current Dimensions and Measures. An error info will
       * be returned along with each unavailable chart types.
       *
       *
       * ```javascript
       *
       * {
       * 		 available: [{
       * 				 chart: "chartType"
       * 		 }, ...],
       * 		 unavailable: [{
       * 				 chart: "chartType"
       * 				 error: {
       * 						 missing: {
       * 								 Dimension: n,
       * 								 Measure: n,
       * 								 DateTimeDimension: n
       * 						 }
       * 				 }
       * 		 }, ...]
       * }
       * ```
       */
      getAvailableChartTypes(): object;
      /**
       * Gets current value of property {@link #getChartType chartType}.
       *
       * Type of the Chart.
       *
       * Default value is `"bar"`.
       */
      getChartType(): string;
      /**
       * Gets current value of property {@link #getColorings colorings}.
       *
       * Chart colorings.
       *
       * Holds an object with information about the possible options how colors can be applied for indicating
       * `Criticality` or `Emphasis` in the chart.
       * ```javascript
       *
       * Colorings: {
       *     Criticality: {
       *         ???
       *     },
       *     Emphasis: {
       *         ???
       *     }
       * }
       * ```
       *
       *
       * **NOTE:** Dimension-based coloring does not work when {@link sap.chart.data.Measure#setSemantics} is
       * set to {@link sap.chart.data.MeasureSemantics.Projected} or {@link sap.chart.data.MeasureSemantics.Reference}
       * for visible measure(s).
       *
       * Refer to
       *  {@link sap.chart.ColoringType.Criticality}
       *  {@link sap.chart.ColoringType.Emphasis}
       *  for detailed usage
       */
      getColorings(): object;
      /**
       * Gets current value of property {@link #getCustomMessages customMessages}.
       *
       * Chart custom messages.
       */
      getCustomMessages(): object;
      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "getData" therefore
       * cannot be used programmatically!
       */
      getData(): void;
      /**
       * Return Dimension with the given name.
       */
      getDimensionByName(
        /**
         * name of the Dimension to get
         */
        sName: string
      ): sap.chart.data.Dimension;
      /**
       * Gets content of aggregation {@link #getDimensions dimensions}.
       *
       * Dimensions of the data.
       */
      getDimensions(): sap.chart.data.Dimension[];
      /**
       * Return all drill down states, only works when the property isAnalytical is true.
       *
       * NOTE: If {@link sap.chart.data.HierarchyDimension} is used when calling {@link #setVisibleDimensions},
       * drill stack could not be determined synchronously. Listen to `drillStackChanged` event instead.
       */
      getDrillStack(): Object[];
      /**
       * Gets current value of property {@link #getEnablePagination enablePagination}.
       *
       * Enable pagination mode.
       *
       * Pagination mode empowers users to visualize dataset page by page by scrolling back or forth. Currently
       * there are some limitations of this mode in some chart transversal features, such as:
       * 	 - Selection status might lost for new batch data
       * 	 - Keyboard navigation will be only available for current continuous batch data
       * 	 - Zoom out might have inconsistent behavior, Hence the gesture in mobile might have the same issue
       *
       * 	 - Time charts did not enable pagination yet
       * 	 - Series color might be inconsistent before/after jump pages
       * 	 - OData V4 Model with relative binding is not supported in pagination  Please refer to release
       * 			notes for details.
       *
       * Default value is `false`.
       */
      getEnablePagination(): boolean;
      /**
       * Gets current value of property {@link #getEnableScalingFactor enableScalingFactor}.
       *
       * Enable scaling factor.
       *
       * Default value is `false`.
       */
      getEnableScalingFactor(): boolean;
      /**
       * Gets current value of property {@link #getEnableStableColor enableStableColor}.
       *
       * Enable Stable color mode. To keep the same colors for the same dimension values or measure names.
       *
       * Default value is `false`.
       */
      getEnableStableColor(): boolean;
      /**
       * Gets current value of property {@link #getInResultDimensions inResultDimensions}.
       *
       * Names of the inResult dimensions.
       *
       * inResult dimension do not show up in chart layout, i.e. axis/legend. They do show in tooltip, popover,
       * and in selection results.
       *
       * Default value is `[]`.
       */
      getInResultDimensions(): string[];
      /**
       * Gets current value of property isAnalytical.
       *
       * Whether or not an aggregated entity set is bound to the chart.
       *
       * The property isAnalytical will programmatically set according to data source. When the data source has
       * an aggregated entity set, isAnalytical is true, otherwise it's false.
       */
      getIsAnalytical(): boolean;
      /**
       * Return Measure with the given name.
       */
      getMeasureByName(
        /**
         * name of the Measure to get
         */
        sName: string
      ): sap.chart.data.Measure;
      /**
       * Gets content of aggregation {@link #getMeasures measures}.
       *
       * Measures of the data.
       */
      getMeasures(): sap.chart.data.Measure[];
      /**
       * Returns a metadata object for class sap.chart.Chart.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * return the scaling factor. Or return null when scaling factor is disable.
       */
      getScalingFactor(): object;
      /**
       * Return category objects of currently selected categories and a total number of selected data points.
       *
       * Category object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Return 0 and empty list if selectionBehavior is not "CATEGORY"
       */
      getSelectedCategories(): object;
      /**
       * Return a total number and an array of datapoint objects (including a Context object) of currently selected
       * data points.
       *
       * Datapoint object has the following structure:
       * ```javascript
       *
       * {
       * 		index:		index,		  // index of the data in the group
       * 		measures: ["measureId"]   // measure IDs (data points created from the same Context object
       * 														  // differing only in measure names are merged together)
       * 		context:  [Context]		   // Context object
       * 		unit: {
       * 			measureId : ""	  // unit of measure
       * 		}
       * 		dataName: {
       * 			measureId or dimensionId : ""      // dataName of measure or dimension
       * 		}
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "DATAPOINT"
       */
      getSelectedDataPoints(): object;
      /**
       * Return series objects of currently selected series and a total number of selected data points.
       *
       * Series object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Return 0 and empty list if selectionBehavior is not "SERIES"
       */
      getSelectedSeries(): object;
      /**
       * Gets current value of property {@link #getSelectionBehavior selectionBehavior}.
       *
       * Chart selection behavior.
       *
       * Default value is `DataPoint`.
       */
      getSelectionBehavior(): sap.chart.SelectionBehavior;
      /**
       * Gets current value of property {@link #getSelectionMode selectionMode}.
       *
       * Chart selection mode.
       *
       * Default value is `Multi`.
       */
      getSelectionMode(): sap.chart.SelectionMode;
      /**
       * Return all TimeDimensions from current Dimensions.
       */
      getTimeDimensions(): any[];
      /**
       * Gets current value of property {@link #getUiConfig uiConfig}.
       *
       * Configuration for initialization to VizControl. This property could only set via settings parameter in
       * Constructor.
       */
      // @ts-ignore
      getUiConfig(): object;
      /**
       * Gets current value of property {@link #getValueAxisScale valueAxisScale}.
       *
       * Value Axis Scale.
       *
       * Specifies the scale of the chart value axes.
       *
       *
       * 	 - scaleBehavior: **optional**, determines whether or not all value axes in the chart should have a
       * 			fixed scale. Possible values refer to {@link sap.chart.ScaleBehavior}. The default value is sap.chart.ScaleBehavior.AutoScale.
       * 			In order to apply a fixed scale, boundary values for minimum and maximum must have been specified for
       * 			all visible measures, and the axes boundaries are then created from the largest maximum and the smallest
       * 			minimum value of the measures put on the respective axis. If any visible measure lacks this information,
       * 			or scaleBehavior is set to sap.chart.ScaleBehavior.AutoScale, the chart will apply an automatic scaling
       * 			for all value axes.
       * 	 - fixedScaleSettings:
       * 	measureBoundaryValues: An object holding the fixed ???minimum??? and ???maximum??? values for all the measures.
       * Stacked chart with only one measure also uses this object to describe the fixed ???minimum??? and ???maximum???
       * value.
       * 	 `measure` Measure name
       * 	 - stackedMultipleMeasureBoundaryValues: An array of objects holding the fixed ???minimum??? and ???maximum???
       * 			values only for stacked chart with multiple measures.
       * 	 `measures` the array of measure name applied to the axis.
       * 	 -  `boundaryValues???` An object holding the fixed ???minimum??? and ???maximum??? value all the measures applied
       * 			to certain axis.
       * 	 - autoScaleSettings:
       * 	 `zeroAlwaysVisible` forces the value axis to always display the zero value (only a few chart types
       * support the opposite), which is **optional**. The default value is true.
       * 	 -  `syncWith` selects how the chart adapts the value axis to the data: The axis boundaries may be determined
       * 			from the loaded data, which is **optional**. The default value is "DataSet". Possible values refer to
       * 			{@link sap.chart.AutoScaleMode}.
       *
       * Example:
       * ```javascript
       *
       * valueAxisScale: {
       *     scaleBehavior: sap.chart.ScaleBehavior,
       *     fixedScaleSettings: {
       *         measureBoundaryValues: {
       *             measure_1: {
       *                 minimum: Number,
       *                 maximum: Number
       *             },
       *             measure_2: {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         },
       *         stackedMultipleMeasureBoundaryValues: [{
       *             measures: [ 'measure_1', 'measure_2', ??? ],
       *             boundaryValues??? {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         }??? {
       *             measures: [ 'measure_3', 'measure_4', ??? ],
       *             boundaryValues??? {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         }]
       *     },
       *     autoScaleSettings: {
       *         zeroAlwaysVisible: Boolean,
       *         syncWith: sap.chart.autoScaleMode
       *     }
       * }
       * ```
       *
       *
       * Refer to
       *  {@link sap.chart.AutoScaleMode.DataSet}
       *  {@link sap.chart.AutoScaleMode.VisibleData}
       *  {@link sap.chart.ScaleBehavior.AutoScale}
       *  {@link sap.chart.ScaleBehavior.FixedScale}
       *  for detailed usage
       */
      getValueAxisScale(): object;
      /**
       * Gets current value of property {@link #getVisibleDimensions visibleDimensions}.
       *
       * Names of the Dimensions to be displayed in the Chart, all available dimensions will automatically append
       * when the property isAnalytical is false.
       *
       * Depending on chart type, insufficient number of visible `Dimension`s will cause error.
       *
       * Default value is `[]`.
       */
      getVisibleDimensions(): string[];
      /**
       * Gets current value of property {@link #getVisibleMeasures visibleMeasures}.
       *
       * Names of the Measures to be displayed in the Chart.
       *
       * Depending on chart type, insufficient number of visible `Measure`s will cause errors.
       *
       * Default value is `[]`.
       */
      getVisibleMeasures(): string[];
      /**
       * Return Chart's properties.
       *
       * Refer to chart property documentation for more
       * details.
       */
      getVizProperties(): object;
      /**
       * Return Chart's scales.
       *
       * Refer to chart property documentation for more
       * details.
       */
      getVizScales(): object[];
      /**
       * Get the UID for Chart. It supports other controls to connect to a viz instance.
       */
      getVizUid(): string;
      /**
       * @SINCE 1.54
       *
       * Get zoom information.
       *
       * Return the zooming enablement and current zooming level of chart.
       *
       * Object has the following structure:
       *
       * Example:
       * ```javascript
       *
       * {
       *     "enabled":true,
       *     "currentZoomLevel":0.16
       * }
       * ```
       */
      getZoomInfo(): object;
      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "indexOfData" therefore
       * cannot be used programmatically!
       */
      indexOfData(): void;
      /**
       * Checks for the provided `sap.chart.data.Dimension` in the aggregation {@link #getDimensions dimensions}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfDimension(
        /**
         * The dimension whose index is looked for
         */
        oDimension: sap.chart.data.Dimension
      ): number;
      /**
       * Checks for the provided `sap.chart.data.Measure` in the aggregation {@link #getMeasures measures}. and
       * returns its index if found or -1 otherwise.
       */
      indexOfMeasure(
        /**
         * The measure whose index is looked for
         */
        oMeasure: sap.chart.data.Measure
      ): number;
      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "insertData" therefore
       * cannot be used programmatically!
       */
      insertData(): void;
      /**
       * Inserts a dimension into the aggregation {@link #getDimensions dimensions}.
       */
      insertDimension(
        /**
         * The dimension to insert; if empty, nothing is inserted
         */
        oDimension: sap.chart.data.Dimension,
        /**
         * The `0`-based index the dimension should be inserted at; for a negative value of `iIndex`, the dimension
         * is inserted at position 0; for a value greater than the current size of the aggregation, the dimension
         * is inserted at the last position
         */
        iIndex: number
      ): sap.chart.Chart;
      /**
       * Inserts a measure into the aggregation {@link #getMeasures measures}.
       */
      insertMeasure(
        /**
         * The measure to insert; if empty, nothing is inserted
         */
        oMeasure: sap.chart.data.Measure,
        /**
         * The `0`-based index the measure should be inserted at; for a negative value of `iIndex`, the measure
         * is inserted at position 0; for a value greater than the current size of the aggregation, the measure
         * is inserted at the last position
         */
        iIndex: number
      ): sap.chart.Chart;
      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "removeAllData" therefore
       * cannot be used programmatically!
       */
      removeAllData(): void;
      /**
       * Removes all the controls from the aggregation dimensions, only works when the property isAnalytical is
       * true.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllDimensions(): sap.chart.data.Dimension[];
      /**
       * Removes all the controls from the aggregation {@link #getMeasures measures}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllMeasures(): sap.chart.data.Measure[];
      /**
       * Unsupported. Chart manages the "data" aggregation only via data binding. The method "removeData" therefore
       * cannot be used programmatically!
       */
      removeData(): void;
      /**
       * Removes a dimension from the aggregation dimensions, remove a visible dimension is unsupported when the
       * property isAnalytical is false.
       */
      removeDimension(
        /**
         * The dimension to remove or its index or id.
         */
        oDimension: number | string | sap.chart.data.Dimension
      ): sap.chart.data.Dimension;
      /**
       * Removes a measure from the aggregation {@link #getMeasures measures}.
       */
      removeMeasure(
        /**
         * The measure to remove or its index or id
         */
        vMeasure: number | string | sap.chart.data.Measure
      ): sap.chart.data.Measure;
      /**
       * Deselect one or more categories from current category selections, specified by category objects.
       *
       * Category object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "CATEGORY"
       */
      removeSelectedCategories(
        /**
         * an array of category objects
         */
        aCategories: any[]
      ): sap.chart.Chart;
      /**
       * Deselect one or more data points from current data point selections, specified by datapoint objects.
       *
       * Datapoint object has the following structure:
       * ```javascript
       *
       * {
       * 		groupId:  "groupId",		  // group ID (optional)
       * 		index:		index,				  // index of the data in the group
       * 		measures: ["measureId"]   // measure IDs
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "DATAPOINT"
       */
      removeSelectedDataPoints(
        /**
         * an array of datapoint objects.
         */
        aDataPoints: any[]
      ): sap.chart.Chart;
      /**
       * Deselect one or more series from current series selections, specified by series objects.
       *
       * Series object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "SERIES"
       */
      removeSelectedSeries(
        /**
         * an array of series objects
         */
        aSeries: any[]
      ): sap.chart.Chart;
      /**
       * Reset to visible layout.
       */
      resetLayout(): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getActiveColoring activeColoring}.
       *
       * Active coloring configurations.
       *
       * specifies which coloring of the possible colorings is to be applied for the current chart layout. It
       * holds an object with two properties???
       *
       *
       * 	 - coloring: **mandatory**, specify which kind of coloring should take effect in current chart layout.
       * 			Possible values refer to {@link sap.chart.ColoringType} parameters:
       * 	 `Criticality` supports two parameters: `"dimension"` and `"measure"`. Both are **optional**, one (and
       * only one) must be provided. This setting disambiguates when multiple colorings for different visible
       * dimensions and measures are applicable.
       *
       * `"measure"` supports two input types:
       * 	 - `string` for single measure name
       * 	 - `string[]` of multiple measure names(only supported in **static**), which is relevant in case of
       * 			a **static** measure criticality defined on multiple measures.  `"dimension"` holds the dimension
       * 			name as string value.   `Emphasis` supports only one parameter: `"dimension"` which is **optional**.
       *
       * `"dimension"` holds the dimension name as string value.
       *
       * Example:
       * ```javascript
       *
       * activeColoring: {
       *     coloring: sap.chart.ColoringType.Criticality,
       *     parameters: {
       *         dimension: "AvailabilityStatus???
       *     }
       * }
       * ```
       *
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setActiveColoring(
        /**
         * New value for property `activeColoring`
         */
        oActiveColoring?: object
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getChartType chartType}.
       *
       * Type of the Chart.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `"bar"`.
       */
      setChartType(
        /**
         * New value for property `chartType`
         */
        sChartType?: string
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getColorings colorings}.
       *
       * Chart colorings.
       *
       * Holds an object with information about the possible options how colors can be applied for indicating
       * `Criticality` or `Emphasis` in the chart.
       * ```javascript
       *
       * Colorings: {
       *     Criticality: {
       *         ???
       *     },
       *     Emphasis: {
       *         ???
       *     }
       * }
       * ```
       *
       *
       * **NOTE:** Dimension-based coloring does not work when {@link sap.chart.data.Measure#setSemantics} is
       * set to {@link sap.chart.data.MeasureSemantics.Projected} or {@link sap.chart.data.MeasureSemantics.Reference}
       * for visible measure(s).
       *
       * Refer to
       *  {@link sap.chart.ColoringType.Criticality}
       *  {@link sap.chart.ColoringType.Emphasis}
       *  for detailed usage
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setColorings(
        /**
         * New value for property `colorings`
         */
        oColorings?: object
      ): sap.chart.Chart;
      /**
       * Set the chart custom messages. Supported messages please refer to enum {@link sap.chart.MessageId}.
       *
       * The user should handle the message localization.
       *
       * Example:
       *
       *
       * ```javascript
       *
       * oChart.setCustomMessages({
       * 	 'NO_DATA': "No data. Please change your filter"
       * });
       * ```
       *
       *
       * When called with an invalid value, the default value will be restored.
       */
      setCustomMessages(
        /**
         * object containing customMessage values to update
         */
        oCustomMessages: object
      ): sap.chart.Chart;
      /**
       * Sets a new value for property enablePagination, only works for oData model.
       *
       * **NOTE:** setEnablePagination currently only works in constructor.
       *
       * Enable pagination mode.
       *
       * Pagination mode empowers users to visualize dataset page by page by scrolling back or forth. Currently
       * there are some limitations of this mode in some chart transversal features, such as:
       * 	 - Selection status might lost for new batch data
       * 	 - Keyboard navigation will be only available for current continuous batch data
       * 	 - Zoom out might have inconsistent behavior, hence the gesture in mobile might have the same issue
       *
       * 	 - Time charts did not enable pagination yet
       * 	 - Series color might be inconsistent before/after jump pages
       * 	 - parameter `oBindingInfo.length` during {@link sap.ui.base.ManagedObject#bindAggregation bindAggregation}
       * 			of {@link #getData data} will not be respected in value axis scale  Please refer to release notes
       * 			for details.
       *
       * When called with a value of null or undefined, the default value of the property will be restored.
       *
       * Default value is false.
       */
      setEnablePagination(
        /**
         * New value for property enablePagination
         */
        bEnablePagination: boolean
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getEnableScalingFactor enableScalingFactor}.
       *
       * Enable scaling factor.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setEnableScalingFactor(
        /**
         * New value for property `enableScalingFactor`
         */
        bEnableScalingFactor?: boolean
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getEnableStableColor enableStableColor}.
       *
       * Enable Stable color mode. To keep the same colors for the same dimension values or measure names.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setEnableStableColor(
        /**
         * New value for property `enableStableColor`
         */
        bEnableStableColor?: boolean
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getInResultDimensions inResultDimensions}.
       *
       * Names of the inResult dimensions.
       *
       * inResult dimension do not show up in chart layout, i.e. axis/legend. They do show in tooltip, popover,
       * and in selection results.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `[]`.
       */
      setInResultDimensions(
        /**
         * New value for property `inResultDimensions`
         */
        sInResultDimensions?: string[]
      ): sap.chart.Chart;
      /**
       * Whether or not an aggregated entity set is bound to the chart. Deprecated.
       */
      setIsAnalytical(): sap.chart.Chart;
      /**
       * Select one or more categories, specified by category objects.
       *
       * Category object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "CATEGORY"
       */
      setSelectedCategories(
        /**
         * an array of category objects
         */
        aCategories: any[]
      ): sap.chart.Chart;
      /**
       * Select one or more data points, specified by datapoint objects.
       *
       * Datapoint object has the following structure:
       * ```javascript
       *
       * {
       * 		groupId:  "groupId",		  // group ID (optional)
       * 		index:		index,				  // index of the data in the group
       * 		measures: ["measureId"]   // measure IDs
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "DATAPOINT"
       */
      setSelectedDataPoints(
        /**
         * an array of datapoint objects.
         */
        aDataPoints: any[]
      ): sap.chart.Chart;
      /**
       * Select one or more series, specified by series objects.
       *
       * Series object has the following structure:
       * ```javascript
       *
       * {
       * 	   measure: measureName,
       * 	   dimensions: {
       * 		   dimensionName1: dimensionValue1,
       * 		   dimensionName2: dimensionValue2,
       * 		   ...
       * 	   }
       * }
       * ```
       *
       *
       * Only works when selectionBehavior is "SERIES"
       */
      setSelectedSeries(
        /**
         * an array of series objects
         */
        aSeries: any[]
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getSelectionBehavior selectionBehavior}.
       *
       * Chart selection behavior.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `DataPoint`.
       */
      setSelectionBehavior(
        /**
         * New value for property `selectionBehavior`
         */
        sSelectionBehavior?: sap.chart.SelectionBehavior
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getSelectionMode selectionMode}.
       *
       * Chart selection mode.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Multi`.
       */
      setSelectionMode(
        /**
         * New value for property `selectionMode`
         */
        sSelectionMode?: sap.chart.SelectionMode
      ): sap.chart.Chart;
      /**
       * Setter for property uiConfig. uiConfig could only set via settings parameter of constructor.
       *
       * uiConfig from base type could config the instance. Supported uiConfig keyword: applicationSet, showErrorMessage
       *
       * Example:
       *
       *
       * ```javascript
       *
       * var chart = new sap.chart.Chart({
       *  'chartType' : 'bar',
       *  'uiConfig' : {
       * 		  'applicationSet' : 'fiori',
       * 		  'showErrorMessage' : true
       *  }
       * });
       * ```
       */
      // @ts-ignore
      setUiConfig(
        /**
         * the UI configuration
         */
        oUiConfig: object
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getValueAxisScale valueAxisScale}.
       *
       * Value Axis Scale.
       *
       * Specifies the scale of the chart value axes.
       *
       *
       * 	 - scaleBehavior: **optional**, determines whether or not all value axes in the chart should have a
       * 			fixed scale. Possible values refer to {@link sap.chart.ScaleBehavior}. The default value is sap.chart.ScaleBehavior.AutoScale.
       * 			In order to apply a fixed scale, boundary values for minimum and maximum must have been specified for
       * 			all visible measures, and the axes boundaries are then created from the largest maximum and the smallest
       * 			minimum value of the measures put on the respective axis. If any visible measure lacks this information,
       * 			or scaleBehavior is set to sap.chart.ScaleBehavior.AutoScale, the chart will apply an automatic scaling
       * 			for all value axes.
       * 	 - fixedScaleSettings:
       * 	measureBoundaryValues: An object holding the fixed ???minimum??? and ???maximum??? values for all the measures.
       * Stacked chart with only one measure also uses this object to describe the fixed ???minimum??? and ???maximum???
       * value.
       * 	 `measure` Measure name
       * 	 - stackedMultipleMeasureBoundaryValues: An array of objects holding the fixed ???minimum??? and ???maximum???
       * 			values only for stacked chart with multiple measures.
       * 	 `measures` the array of measure name applied to the axis.
       * 	 -  `boundaryValues???` An object holding the fixed ???minimum??? and ???maximum??? value all the measures applied
       * 			to certain axis.
       * 	 - autoScaleSettings:
       * 	 `zeroAlwaysVisible` forces the value axis to always display the zero value (only a few chart types
       * support the opposite), which is **optional**. The default value is true.
       * 	 -  `syncWith` selects how the chart adapts the value axis to the data: The axis boundaries may be determined
       * 			from the loaded data, which is **optional**. The default value is "DataSet". Possible values refer to
       * 			{@link sap.chart.AutoScaleMode}.
       *
       * Example:
       * ```javascript
       *
       * valueAxisScale: {
       *     scaleBehavior: sap.chart.ScaleBehavior,
       *     fixedScaleSettings: {
       *         measureBoundaryValues: {
       *             measure_1: {
       *                 minimum: Number,
       *                 maximum: Number
       *             },
       *             measure_2: {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         },
       *         stackedMultipleMeasureBoundaryValues: [{
       *             measures: [ 'measure_1', 'measure_2', ??? ],
       *             boundaryValues??? {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         }??? {
       *             measures: [ 'measure_3', 'measure_4', ??? ],
       *             boundaryValues??? {
       *                 minimum: Number,
       *                 maximum: Number
       *             }
       *         }]
       *     },
       *     autoScaleSettings: {
       *         zeroAlwaysVisible: Boolean,
       *         syncWith: sap.chart.autoScaleMode
       *     }
       * }
       * ```
       *
       *
       * Refer to
       *  {@link sap.chart.AutoScaleMode.DataSet}
       *  {@link sap.chart.AutoScaleMode.VisibleData}
       *  {@link sap.chart.ScaleBehavior.AutoScale}
       *  {@link sap.chart.ScaleBehavior.FixedScale}
       *  for detailed usage
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setValueAxisScale(
        /**
         * New value for property `valueAxisScale`
         */
        oValueAxisScale?: object
      ): sap.chart.Chart;
      /**
       * Sets a new value for property visibleDimensions.
       *
       * Names of the Dimensions to be displayed in the Chart, all available dimensions will automatically append
       * when the property isAnalytical is false.
       *
       * Depending on chart type, insufficient number of visible Dimensions will cause error.
       *
       * When called with a value of null or undefined, the default value of the property will be restored.
       *
       * Default value is [].
       */
      setVisibleDimensions(
        /**
         * New value for property visibleDimensions
         */
        sVisibleDimensions: string[]
      ): sap.chart.Chart;
      /**
       * Sets a new value for property {@link #getVisibleMeasures visibleMeasures}.
       *
       * Names of the Measures to be displayed in the Chart.
       *
       * Depending on chart type, insufficient number of visible `Measure`s will cause errors.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `[]`.
       */
      setVisibleMeasures(
        /**
         * New value for property `visibleMeasures`
         */
        sVisibleMeasures?: string[]
      ): sap.chart.Chart;
      /**
       * Change Chart's properties.
       *
       * Chart's properties will be updated with the parameter.
       *
       * Refer to chart property documentation for more
       * details.
       */
      setVizProperties(
        /**
         * object containing vizProperty values to update
         */
        oVizProperties: object
      ): sap.chart.Chart;
      /**
       * Change Chart's scales.
       *
       * Chart's scales will be updated with the parameters.
       *
       * Refer to chart property documentation for more
       * details.
       */
      setVizScales(
        /**
         * array of vizScale objects
         */
        oVizScales: object[]
      ): sap.chart.Chart;
      /**
       * Unbinds aggregation {@link #getData data} from model data.
       */
      unbindData(): sap.chart.Chart;
      /**
       * Zoom the chart plot.
       *
       * Example:
       * ```javascript
       *
       * 	var oChart = new sap.chart.Chart(...);
       * 	oChart.zoom({direction: "in"});
       * ```
       */
      zoom(
        /**
         * contains a "direction" attribute with value "in" or "out" indicating zoom to enlarge or shrink respectively
         */
        oConfig: object
      ): void;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:deselectData deselectData} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be
       * passed in
       */
      attachDeselectData(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:drilledDown drilledDown} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * fired after a drill-down operation
       */
      attachDrilledDown(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:drilledUp drilledUp} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * fired after a drill-up operation
       */
      attachDrilledUp(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:drillStackChanged drillStackChanged} event of
       * this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when drill stack changed. API that relies on drill stack like {@link #drillDown}, {@link
       * #drillUp} shall be called in this event or after chart is rendered
       */
      attachDrillStackChanged(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:renderComplete renderComplete} event of this
       * `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when the rendering ends.
       */
      attachRenderComplete(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:selectData selectData} event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed
       * in.
       */
      attachSelectData(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:valueAxisFixedScaleTurnedOff valueAxisFixedScaleTurnedOff}
       * event of this `sap.chart.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.chart.Chart` itself.
       *
       * Event fires when fixed scale is turned off by adding or removing dimension
       */
      attachValueAxisFixedScaleTurnedOff(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.chart.Chart` itself
         */
        oListener?: object
      ): sap.chart.Chart;
    }
    /**
     * Enumeration for how the analytical chart adapts the value axis to the data.
     */
    enum AutoScaleMode {
      /**
       * Minimum and maximum value is calculated from the entire data set in the backend, no matter data can be
       * loaded or not, visible or not.
       */
      DataSet,
      /**
       * Minimum and maximum value is calculated from the data that are currently visible. Scrolling will change
       * the scale.
       */
      VisibleData
    }
    /**
     * Enum of available colorings.
     */
    enum ColoringType {
      /**
       * Criticality is based on the semantic color palette.
       *
       * It can be defined for measure values and dimension values.
       * ```javascript
       *
       * Criticality: {
       *     MeasureValues: {
       *         ...
       *     },
       *     DimensionValues: {
       *         ...
       *     }
       * }
       * ```
       *
       *
       * **For measure values**, criticality can be based on `static`, `calculated`, `DynamicThresholds` and `ConstantThresholds`
       *
       * `Legend` is **optional** and can be used for custom legend labels.
       * ```javascript
       *
       * MeasureValues: {
       *     'measureName': {
       *         Static: ... ,
       *         Calculated: ... ,
       *         DynamicThresholds: {
       *             ...
       *         },
       *         ConstantThresholds: {
       *             ...
       *         },
       *         Legend: {
       *             Title: string,    // (optional) fixed, localized label
       *             Positive: string, // fixed, localized label
       *             Critical: string, // fixed, localized label
       *             Negative: string, // fixed, localized label
       *             Neutral:  string  // fixed, localized label
       *         }
       *     },
       *     'measureName': {
       *         ...
       *     }
       * }
       * ```
       *
       * 	`static`
       *
       * It indicates that the measure is always considered in the same way, for example positive.
       *
       * The value of `static` is listed in {@link sap.chart.coloring.CriticalityType}
       *
       * Example:
       *
       * In this case, all 'Profit' datapoints shall use Positive semantic color and all 'Revenue' datapoints
       * shall use Negative semantic color.
       * ```javascript
       *
       *   var oColorings = {
       *       Criticality: {
       *           MeasureValues: {
       *               Profit: {
       *                   Static: sap.chart.ColoringType.Positive
       *               },
       *               Revenue: {
       *                   Static: sap.chart.ColoringType.Negative
       *               }
       *           }
       *       }
       *   };
       *   var oActiveColoring = {
       *       coloring: sap.chart.ColoringType.Criticality,
       *       parameters: {
       *           measure: ['Profit', 'Revenue']
       *       }
       *   };
       *   ```
       *   `Calculated`
       *
       * Criticality is calculated by the backend service.
       *
       * For a `Calculated` criticality, the value will be determined from a property contained in the model of
       * the ???data??? aggregation. Since the calculation must always take the currently visible dimensions into
       * account, this property will be a measure holding an aggregated criticality for the current aggregation
       * level. The concrete possible values held by this property are defined in {@link sap.chart.coloring.CriticalityType}:
       * Neutral = 0, Negative = 1, Critical = 2, Positive =3.
       *
       * If Legend is present, the legend shows the title and the fixed, localized texts defined for the different
       * criticality classes. Otherwise, the chart uses the default texts ???Good???, ???Warning???, ???Bad???, and ???Neutral???
       * as localized labels in the legend.
       *
       * If the value of `Calculated` is a dimension name. The criticality of the measure of a datapoint is determined
       * by the value of this dimension and its textProperty(if exists) will be used as legend label.
       *
       * The possible values of this certain dimension are listed in {@link sap.chart.coloring.CriticalityType}.
       *
       * Example:
       *
       * In this case, the criticality of 'Profit' measure is determined by the value of 'ProfitCriticality' dimension
       * which is calculated by backend service.
       * ```javascript
       *
       *   var oColorings = {
       *       Criticality: {
       *           MeasureValues: {
       *               Profit: {
       *                   Calculated: 'ProfitCriticality'
       *               }
       *           }
       *       }
       *   };
       *   var oActiveColoring = {
       *       coloring: sap.chart.ColoringType.Criticality,
       *       parameters: {
       *           measure: ['Profit']
       *       }
       *   };
       *   ```
       *
       *
       * In this case, the criticality of 'Profit' measure is determined by the value of 'ProfitCriticalityM'
       * measure which is calculated by backend service.
       * ```javascript
       *
       *   var oColorings = {
       *       Criticality: {
       *           MeasureValues: {
       *               Profit: {
       *                   Calculated: 'ProfitCriticalityM',
       *                   Legend: {
       *                       Title: "Legend Title",
       *                       Positive: "Good",
       *                       Negative: "Weak",
       *                       Critical: "Soso",
       *                       Neutral: "Crossbench"
       *                   }
       *               }
       *           }
       *       }
       *   };
       *   var oActiveColoring = {
       *       coloring: sap.chart.ColoringType.Criticality,
       *       parameters: {
       *           measure: ['Profit']
       *       }
       *   };
       *   ```
       *   `DynamicThresholds`
       *
       * Criticality is expressed with thresholds for the boundaries between negative, critical, neutral, and
       * positive.
       *
       * The direction of improvement for measure values is mandatory, combined with corresponding thresholds.
       *
       * Thresholds are optional. For unassigned values, defaults are determined in this order:
       *
       * - For DeviationRange, an omitted LowValue translates into the smallest possible number (-INF), an omitted
       * 			HighValue translates into the largest possible number (+INF)
       *
       * - For ToleranceRange, an omitted LowValue will be initialized with DeviationRangeLowValue, an omitted
       * 			HighValue will be initialized with DeviationRangeHighValue
       *
       * - For AcceptanceRange, an omitted LowValue will be initialized with ToleranceRangeLowValue, an omitted
       * 			HighValue will be initialized with ToleranceRangeHighValue
       *
       * Please refer to {@link sap.chart.coloring.ImprovementDirectionType} for detailed usage.
       * ```javascript
       *
       *   DynamicThresholds: {
       *       ImprovementDirection: string,    // refer to sap.chart.coloring.ImprovementDirectionType for detailed definition
       *       AcceptanceRangeLowValue: string or number, // property name or number
       *       AcceptanceRangeHighValue: string or number, // property name or number
       *       ToleranceRangeLowValue: string or number, // property name or number
       *       ToleranceRangeHighValue: string or number, // property name or number
       *       DeviationRangeLowValue: string or number, // property name or number
       *       DeviationRangeHighValue: string or number, // property name or number
       *   }
       *   ```
       *  Example:
       *
       * In this case, the criticality of 'Profit' measure is determined by the value of 'ProfitAcceptanceRangeLowValue',
       * 'ProfitToleranceRangeLowValue' and 'ProfitDeviationRangeLowValue' measure calculated with improvement
       * direction `'Maximize'`.
       * ```javascript
       *
       *   var oColorings = {
       *       Criticality: {
       *           MeasureValues: {
       *               Profit: {
       *                    DynamicThresholds : {
       *                        ImprovementDirection: sap.chart.coloring.ImprovementDirectionType.Maximize,
       *                        AcceptanceRangeLowValue: 'ProfitAcceptanceRangeLowValue',
       *                        ToleranceRangeLowValue: 'ProfitToleranceRangeLowValue',
       *                        DeviationRangeLowValue: 'ProfitDeviationRangeLowValue'
       *                    }
       *               }
       *           }
       *       }
       *   };
       *   var oActiveColoring = {
       *       coloring: sap.chart.ColoringType.Criticality,
       *       parameters: {
       *           measure: ['Profit']
       *       }
       *   };
       *   ```
       *   `ConstantThresholds`
       *
       * Criticality is expressed with thresholds for the boundaries between negative, critical, neutral, and
       * positive.
       *
       * The direction of improvement for measure values is mandatory, combined with corresponding thresholds.
       *
       * Thresholds are optional. For unassigned values, defaults are determined in this order:
       *
       * - For DeviationRange, an omitted LowValue translates into the smallest possible number (-INF), an omitted
       * 			HighValue translates into the largest possible number (+INF)
       *
       * - For ToleranceRange, an omitted LowValue will be initialized with DeviationRangeLowValue, an omitted
       * 			HighValue will be initialized with DeviationRangeHighValue
       *
       * - For AcceptanceRange, an omitted LowValue will be initialized with ToleranceRangeLowValue, an omitted
       * 			HighValue will be initialized with ToleranceRangeHighValue
       *
       * Also Aggregation level (the visible dimensions) must be specified for providing the context for assessing
       * the criticality.
       *
       * Legend label is shown as value range and do not support customization in ConstantThresholds.
       *
       * Please refer to {@link sap.chart.coloring.ImprovementDirectionType} for detailed usage.
       * ```javascript
       *
       *   ConstantThresholds: {
       *       ImprovementDirection: string, refer to sap.chart.coloring.ImprovementDirectionType for detailed definition
       *       AggregationLevels: [{
       *            VisibleDimensions: ['dimensionName', ...],
       *            AcceptanceRangeLowValue: Number,
       *            AcceptanceRangeHighValue:Number,
       *            ToleranceRangeLowValue: Number,
       *            ToleranceRangeHighValue: Number,
       *            DeviationRangeLowValue: Number,
       *            DeviationRangeHighValue: Number
       *       },
       *       ...]
       *   }
       *   ```
       *  Example:
       *
       * In this case, the criticality of 'Profit' measure is determined by two concrete thresholds calculated
       * with improvement direction `'Maximize'`.
       * ```javascript
       *
       *   var oColorings = {
       *       Criticality: {
       *           MeasureValues: {
       *               Profit: {
       *                    ConstantThresholds : {
       *                        ImprovementDirection: sap.chart.coloring.ImprovementDirectionType.Maximize,
       *                        AcceptanceRangeLowValue:100,
       *                        ToleranceRangeLowValue: 80,
       *                        DeviationRangeLowValue: 60
       *                    }
       *               }
       *           }
       *       }
       *   };
       *   var oActiveColoring = {
       *       coloring: sap.chart.ColoringType.Criticality,
       *       parameters: {
       *           measure: ['Profit']
       *       }
       *   };
       *   ```
       *
       *
       * **For dimension values**
       *
       * Criticality can be expressed by assigning values to negative, critical, and positive. Unassigned dimension
       * values are automatically assigned to neutral.
       *
       * `'Values'` is used to specify concrete dimension value(s). `'Legend'` is used to customize legend label
       * which is mandatory when multiple dimension values defined in `'Values'`.
       *
       *
       * ```javascript
       *
       * DimensionValues: {
       *     'dimensionName': {
       *          Positive: {
       *              Values: 'dimensionValue' or ['dimensionValue', ...]
       *              Legend: string // mandatory for value array
       *          },
       *          Critical: {
       *              Values: 'dimensionValue' or ['dimensionValue', ...]
       *              Legend: string // mandatory for value array
       *          },
       *          Negative: {
       *              Values: 'dimensionValue' or ['dimensionValue', ...]
       *              Legend: string // mandatory for value array
       *          },
       *          Neutral: {
       *              Values: 'dimensionValue' or ['dimensionValue', ...]
       *              Legend: string // mandatory for value array
       *          }
       *     },
       *     'dimensionName': {
       *         ...
       *     }
       * }
       * ```
       *  Example:
       *
       * In this case, the criticality of 'OrderStatus' dimension is determined by values specified to different
       * criticality classes.
       * ```javascript
       *
       * var oColorings = {
       *     Criticality: {
       *         DimensionValues: {
       *             OrderStatus: {
       *                  Positive : {
       *                      Values: 'Finished'
       *                  },
       *                  Critical : {
       *                      Values: 'Pending'
       *                  },
       *                  Negative : {
       *                      Values: ['Stopped', 'Not Started'],
       *                      Legend: 'Alert'
       *                  },
       *                  Neutral : {
       *                      Values: ['Processing', 'Surveyed'],
       *                      Legend: 'Normal'
       *                  }
       *             }
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Criticality,
       *     parameters: {
       *         dimension: ['OrderStatus']
       *     }
       * };
       * ```
       */
      Criticality,
      /**
       * Emphasis is about highlighting certain data points in a chart.
       *
       * It can be defined for dimension values.
       * ```javascript
       *
       * Emphasis: {
       *     DimensionValues: {
       *         ...
       *     }
       * }
       * ```
       *  **For dimension values**
       *
       * Highlight a specified set of values of a dimension visible in the current chart layout. The qualitative
       * color palette is used.
       *
       * `'Values'` is used to specify dimension value(s) for highlight. `'Legend'` is used to customize legend
       * label whose `'Hightlighted'` is mandatory when multiple dimension values defined in `'Values'`.
       * ```javascript
       *
       * DimensionValues: {
       *     'dimensionName': {
       *         Values: 'dimensionValue' or ['dimensionValue', ...],
       *         Legend: {
       *            Highlighted: string // mandatory for value array
       *            Others: string      // optional
       *         }
       *     },
       *     'dimensionName': {
       *         ...
       *     }
       * }
       * ```
       *  Example:
       *
       * In this case, 'Germany' and 'France' are highlighted in 'Country' dimension with customized legend label
       * 'Europe'.
       * ```javascript
       *
       * var oColorings = {
       *     Emphasis: {
       *         DimensionValues: {
       *             Country: {
       *                 Values: ['Germany', 'France']
       *                 Legend: 'Europe'
       *             }
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Emphasis,
       *     parameters: {
       *         dimension: ['Country']
       *     }
       * };
       * ```
       */
      Emphasis,
      /**
       * Gradation introduces the notion of levels to visually separate chart elements by different hues of colors.
       *
       * Gradation coloring is based on predefined color palettes implementing one of the following color schemes:
       *
       * 1. Single-color scheme:
       *
       * Palette consists of a linear sequence of hues of the same color in increasing or decreasing saturation.
       * Every hue represents a level.
       *
       * 2. Diverging color scheme:
       *
       * Palette consists of two hues of different colors at the outer ends, and a linear sequence of other color
       * hues between them. Every color hue represents a level. The palette has a central mid area with an own
       * color separating the levels before and after the midpoint.
       *
       * 3. Target color scheme:
       *
       * Palette consists of two instances of a diverging color scheme palette, where the second is appended at
       * the end of the first with reverse order of hues. Every color hue represents a level. The palette has
       * a central midpoint for the target value positioned between the two palette instances, separating the
       * levels before and after the midpoint.
       *
       * Whether a gradation can be applied depends on the chart layout. The `Colorings.Gradation` object has
       * the overall structure:
       * ```javascript
       *
       * Gradation: {
       *     RankedMeasureValues: { // Only for heatmap charts, if the measure is visible in the chart layout.
       *         ???
       *     },
       *     DelineatedMeasures: { // More than one of these measures is visible in the chart layout.
       *         ???
       *     },
       *     DelineatedDimensionValues: { // If the dimension is the only visible dimension in the chart layout and has the category role, or if the dimension is the only dimension with the series role.
       *         ???
       *     }
       * }
       * ```
       *
       *
       * The option for ranked measure values can be specified for one or more measures identified by name:
       * ```javascript
       *
       * RankedMeasureValues: {
       *     'measureName': {
       *         SingleColorScheme: {
       *             Scheme: string, // enumeration: NoSemantics, Positive, Negative
       *             Saturation: string, // enumeration: LightToDark, DarkToLight
       *             NumberOfLevels: number, // between 2-6
       *             RankingPerAggregationLevel: [
       *                 {
       *                     VisibleDimensions: [ 'dimensionName', ??? ],
       *                     LevelBoundaries: [ number, ??? ] // array with 1-5 numbers
       *                 },
       *                 ???
       *             ]
       *         },
       *         DivergingColorScheme: {
       *             Scheme: string, // enumeration: NoSemantics, PositiveToNegative, NegativeToPositive, ColdToHot, HotToCold
       *             NumberOfLevels: {
       *                 BelowMidArea: number, // between 2-6
       *                 AboveMidArea: number  // between 2-6
       *             },
       *             RankingPerAggregationLevel: [
       *                 {
       *                     VisibleDimensions: [ 'dimensionName', ??? ],
       *                     MidAreaLowValue: number,
       *                     MidAreaHighValue: number
       *                 },
       *                 ???
       *             ]
       *         },
       *         TargetColorScheme: {
       *             Scheme: string, // enumeration: PositiveTarget
       *             NumberOfLevels: {
       *                 BelowTargetMidpoint: number, // between 2-6
       *                 AboveTargetMidpoint: number  // between 2-6
       *             },
       *             RankingPerAggregationLevel: [
       *                 {
       *                     VisibleDimensions: [ 'dimensionName', ??? ],
       *                     TargetMidpoint: number
       *                 },
       *                 ???
       *             ]
       *         },
       *     },
       *     'measureName': { ??? },
       *     ...
       * }
       * ```
       *
       *
       * For a single color scheme, Scheme names the scheme to be applied. If it is not specified, the default
       * is NoSemantics. The possible values of scheme name are listed in {@link sap.chart.coloring.GradationSingleColorScheme}.
       * If Saturation is not specified, the default is LightToDark. The possible values of saturation are listed
       * in {@link sap.chart.coloring.GradationSaturation}
       *
       * For an aggregation level specified by a list of visible dimensions, the level boundary array is a strictly
       * increasing sequence of numbers establishing a series of consecutive value intervals. In case VisibleDimensions
       * is omitted, the level boundaries are applied independent of the aggregation level in the current chart
       * layout.
       *
       * If RankingPerAggregationLevel is not provided, the chart will apply a default ranking by determining
       * the minimum and maximum value of the measure in the data set and cutting this value range into equally
       * sized intervals for the requested NumberOfLevels. If NumberOfLevels to be distinguished is not specified,
       * the default is 5 levels.
       *
       * Example: In this case, the values of 'Age' are ranked as 4 levels following the color scheme 'Positive'
       * from dark to light.
       * ```javascript
       *
       * var oColorings = {
       *     Gradation: {
       *         RankedMeasureValues: {
       *             Age: {
       *                  SingleColorScheme : {
       *                      Scheme: 'Positive',
       *                      Saturation: 'DarkToLight',
       *                      RankingPerAggregationLevel: [
       *                          {
       *                              VisibleDimensions: ["Name"],
       *                              LevelBoundaries: [20, 25, 28]
       *                          }
       *                      ]
       *                  }
       *             }
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Gradation
       * };
       * ```
       *
       *
       * For a diverging color scheme, Scheme names the scheme to be applied. If it is not specified, the default
       * is NoSemantics. The possible values of scheme name are listed in {@link sap.chart.coloring.GradationDivergingColorScheme}.
       *
       * A diverging color scheme circles around a mid area represented by a level on its own. Therefore, two
       * level counts are to be specified, one for the range of values below the mid area, and another for the
       * range above the mid area.
       *
       * For an aggregation level specified by a list of visible dimensions, the boundary values for the mid area
       * must be specified in MidAreaLowValue and MidAreaHighValue. If both values are equal, the mid area collapses
       * into a single point and the mid area level vanishes.
       *
       * The chart determines the minimum and maximum values from the data set. To cut the value range before
       * the mid area into the specified number of levels NumberOfLevels.BelowMidArea, the value interval from
       * the MidAreaLowValue down to the minimum value is divided into as many equally sized intervals. In the
       * same way, the value interval above the mid area is cut into the specified number of levels NumberOfLevels.AboveMidArea
       * above the mid area using the determined maximum value.
       *
       * In case VisibleDimensions is omitted, this ranking becomes the default and is applied independent of
       * the aggregation level in the current chart layout. Further entries in RankingPerAggregationLevel must
       * then include VisibleDimensions and are used to describe exceptions from the default ranking for the specified
       * aggregation level.
       *
       * Example: In this case, the values of 'Age' are ranked as 7 levels with a mid area [22, 27] following
       * the color scheme 'PositiveToNegative'.
       * ```javascript
       *
       * var oColorings = {
       *     Gradation: {
       *         RankedMeasureValues: {
       *             Age: {
       *                  DivergingColorScheme : {
       *                      Scheme: 'PositiveToNegative',
       *                      NumberOfLevels: {
       *                          BelowMidArea: 3,
       *                          AboveMidArea: 3
       *                      },
       *                      RankingPerAggregationLevel: [
       *                          {
       *                              VisibleDimensions: ["Name"],
       *                              MidAreaLowValue: 22,
       *                              MidAreaHighValue: 27
       *                          }
       *                      ]
       *                  }
       *             }
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Gradation
       * };
       * ```
       *
       *
       * For a target color scheme, Scheme names the scheme to be applied. If it is not specified, the default
       * is PositiveTarget. The possible values of scheme name are listed in {@link sap.chart.coloring.GradationTargetColorScheme}.
       *
       * For an aggregation level specified by a list of visible dimensions, the measure value to be used as target
       * midpoint must be specified in TargetMidpoint.
       *
       * The chart determines the minimum and maximum values from the data set. To cut the value range before
       * the target midpoint into the specified number of levels NumberOfLevels.BelowTargetMidPoint, the value
       * interval from the TargetMidpoint down to the minimum value is divided into as many equally sized intervals.
       * In the same way, the value interval above the midpoint is cut into the specified number of levels NumberOfLevels.AboveTargetMidPoint
       * above the midpoint using the determined maximum value.
       *
       * In case VisibleDimensions is omitted, the midpoint is applied independent of the aggregation level in
       * the current chart layout. Further entries in RankingPerAggregationLevel must then include VisibleDimensions
       * and are used to describe exceptions from the general midpoint for the specified aggregation level.
       *
       * Example: In this case, the values of 'Age' are ranked as 12 levels with a target mid point following
       * the color scheme 'PositiveTarget'.
       * ```javascript
       *
       * var oColorings = {
       *     Gradation: {
       *         RankedMeasureValues: {
       *             Age: {
       *                  TargetColorScheme : {
       *                      Scheme: 'PositiveTarget',
       *                      NumberOfLevels: {
       *                          BelowTargetMidpoint: 6,
       *                          AboveTargetMidpoint: 6
       *                      },
       *                      RankingPerAggregationLevel: [
       *                          {
       *                              VisibleDimensions: ["Name"],
       *                              TargetMidpoint: 25
       *                          }
       *                      ]
       *                  }
       *             }
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Gradation
       * };
       * ```
       *
       *
       * If no gradation has been specified for a measure (meaning: neither a single nor a diverging color nor
       * a target scheme), then the ranked measure values option still can be applied via activeColoring. In this
       * case, the default is a single-color scheme with defaults applied to all its component as described above.
       *
       * The option for delineated measures maps (between two and six) measures identified by name to gradation
       * levels, with increasing index numbers. It shall be applied only if the measures visible in the chart
       * are a subset of those specified here:
       * ```javascript
       *
       * DelineatedMeasures: {
       *     SingleColorScheme: string, // enumeration of schemes-see above
       *     Saturation: string, // enumeration: LightToDark, DarkToLight
       *     Levels: [ 'measureName', ??? ] // between 2-6 members
       * }
       * ```
       *
       *
       * If the color scheme is not specified, the default is NoSemantic. If Saturation is not specified, the
       * default is LightToDark.
       *
       * If delineated measure gradation is to be shown, and if the chart layout contains further visible measures
       * not mentioned in the delineated measure configuration, then gradation coloring must not be applied.
       *
       * Example: In this case, the value of 'Win', 'Draw' and 'Lose' are shown in 3 color levels.
       * ```javascript
       *
       * var oColorings = {
       *     Gradation: {
       *         DelineatedMeasures: {
       *             SingleColorScheme: 'PositiveTarget',
       *             Saturation: 'DarkToLight',
       *             Levels: ['Win', 'Draw', 'Lose']
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Gradation
       * };
       * ```
       *
       *
       * The option for delineated dimension values can map (between two and six) dimension values to gradation
       * levels, with increasing index numbers. It shall be applied only if the data set to be visualized contains
       * no dimension values other than those specified.
       * ```javascript
       *
       * DelineatedDimensionValues: {
       *     SingleColorScheme: string, // enumeration of schemes-see above
       *     Saturation: string, // enumeration: LightToDark, DarkToLight
       *     'dimensionName': {
       *         Levels: [ 'dimensionValue', ??? ] // between 2-6 members
       *     },
       *     'dimensionName': {...},
       *     ...
       * }
       * ```
       *
       *
       * If color scheme is not specified, the default is NoSemantic. If Saturation is not specified, the default
       * is LightToDark.
       *
       * If delineated dimension value gradation is to be shown, and the ???data??? model contains dimension values
       * not mentioned in the configuration, then gradation coloring must not be applied.
       *
       * Example: In this case, the measures mapping to the dimension value 'Injured', 'Normal', 'Superb' and
       * 'Tired' are shown in 4 color levels.
       * ```javascript
       *
       * var oColorings = {
       *     Gradation: {
       *         DelineatedDimensionValues: {
       *             SingleColorScheme: 'PositiveTarget',
       *             Saturation: 'DarkToLight',
       *             Fitness: {
       *                 Levels: ['Injured', 'Normal', 'Superb', 'Tired']
       *             }
       *         }
       *     }
       * };
       * var oActiveColoring = {
       *     coloring: sap.chart.ColoringType.Gradation
       * };
       * ```
       */
      Gradation
    }
    /**
     * Enumeration for supported message types in analytical chart.
     */
    enum MessageId {
      /**
       * Multiple units message, multiple unites are not allowed in one measure for analytical chart.
       */
      MultipleUnits,
      /**
       * No data message, metadata is defined but all data values are empty.
       */
      NoData
    }
    /**
     * Enumeration for the value axes scale behavior of analytical chart.
     */
    enum ScaleBehavior {
      /**
       * Value axes scale is automatic.
       */
      AutoScale,
      /**
       * Value axes scale is fixed.
       */
      FixedScale
    }
    /**
     * Enumeration for supported selection behavior in analytical chart
     */
    enum SelectionBehavior {
      /**
       * Category selection behavior, one category of data points can be selected at once.
       */
      Category,
      /**
       * Data point selection behavior, only one data point can be selected at once.
       */
      DataPoint,
      /**
       * Series selection behavior, one seies of data points can be selected at once.
       */
      Series
    }
    /**
     * Enumeration for supported selection mode in analytical chart
     */
    enum SelectionMode {
      /**
       * Multi selection mode, multiple sets of data points can be selected at once.
       */
      Multi,
      /**
       * None selection mode, no data points can be selected.
       */
      None,
      /**
       * Single selection mode, only one set of data points can be selected at once.
       */
      Single
    }
    /**
     * Enumeration for supported time unit types in analytical chart
     */
    enum TimeUnitType {
      /**
       * type is Edm.DateTime and V2 annotation sap:display-format is "Date" or timestamp, and type is Edm.Date
       * in V4
       */
      Date,
      /**
       * type is Edm.string, like "YYYY"
       */
      fiscalyear,
      /**
       * type is Edm.string, like "YYYYPPP"
       */
      fiscalyearperiod,
      /**
       * type is Edm.string, like "yyyyMM"
       */
      yearmonth,
      /**
       * type is Edm.string and V2 annotation sap:semantics is "yearmonthday", like "yyyyMMdd"
       */
      yearmonthday,
      /**
       * type is Edm.string, like "yyyyQQQQQ"
       */
      yearquarter,
      /**
       * type is Edm.string, like "yyyyww"
       */
      yearweek
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/chart/data/Dimension": undefined;

    "sap/chart/data/HierarchyDimension": undefined;

    "sap/chart/data/Measure": undefined;

    "sap/chart/data/TimeDimension": undefined;

    "sap/chart/Chart": undefined;
  }
}
