// For Library Version: 1.84.3

declare namespace sap {
  /**
   * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This library
   * will not be supported anymore from 1.38.
   *
   * Mobile Chart controls based on the Sybase MAKIT charting lib.
   */
  namespace makit {
    interface $AxisSettings extends sap.ui.core.$ElementSettings {
      /**
       * Indicates whether to show label of the Axis by the primary line
       */
      showLabel?: boolean;

      /**
       * Indicates whether to show the primary line of the Axis on the chart area
       */
      showPrimaryLine?: boolean;

      /**
       * Indicates whether to show grid of the Axis in the chart area
       */
      showGrid?: boolean;

      /**
       * The line thickness of the primary line
       */
      thickness?: number;

      /**
       * Color of the primary line. Accept the following format: standard name format: gray, red, black, etc hex
       * format: #ff00ff rgb format: rgb(256, 0, 256)
       */
      color?: string;
    }

    interface $CategorySettings extends sap.ui.core.$ElementSettings {
      /**
       * Specify the name of the column to be mapped to the Category Axis's value.
       */
      column?: string;

      /**
       * The text label representing this Category(on value bubble or table's header)
       */
      displayName?: string;

      /**
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       */
      format?: string;
    }

    interface $CategoryAxisSettings extends sap.makit.$AxisSettings {
      /**
       * Sort order of the chart
       */
      sortOrder?: sap.makit.SortOrder;

      /**
       * Whether to always display the last label on the axis regardless of the automatic resize
       */
      displayLastLabel?: boolean;

      /**
       * Specify whether to display all the category values when there are multiple category data regions.
       */
      displayAll?: boolean;
    }

    interface $ChartSettings extends sap.ui.core.$ControlSettings {
      /**
       * The width of the Chart
       */
      width?: sap.ui.core.CSSSize;

      /**
       * The height of the Chart
       */
      height?: sap.ui.core.CSSSize;

      /**
       * Chart type
       */
      type?: sap.makit.ChartType;

      /**
       * Specify whether the range selector should be visible.
       */
      showRangeSelector?: boolean;

      /**
       * Toggle to display table view
       */
      showTableView?: boolean;

      /**
       * Legend position all chart types except Bar chart. Default position for Pie/Donut chart is Left. All other
       * chart's default position is None. Note: the default legend position is set when the chart type is set
       * first time, subsequent change to the chart type will keep using initial legend position unless it is
       * changed explicitly by user.
       */
      legendPosition?: sap.makit.LegendPosition;

      /**
       * Specify the line thickness of the line graph. Only applies to Line chart type.
       */
      lineThickness?: number;

      /**
       * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
       */
      showTableValue?: boolean;

      /**
       * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will
       * be categorised into a single slice. Only applies to Pie/Donut.
       */
      maxSliceCount?: number;

      /**
       * Allow a chart???s color palette to be modified without affecting the other charts' color palette. If not
       * set, the chart will use the default color palette defined in the theme. Accept an array of color in string
       * format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      primaryColorPalette?: any;

      /**
       * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar
       * chart.
       */
      showTotalValue?: boolean;

      /**
       * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not
       * set, the number of visible categories will be automatically adjusted depending on the screen size
       */
      numberOfVisibleCategories?: number;

      /**
       * Specify the range selector start position, default value is 0.
       */
      rangeSelectorStartPosition?: number;

      /**
       * Double tap event on the chart
       */
      doubletap?: Function;

      /**
       * Single tap event on the chart
       */
      tap?: Function;

      /**
       * Long press event on the chart
       */
      longpress?: Function;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * The data rows of the chart. User should bind these to their data source
       */
      rows?: sap.makit.Row[] | sap.makit.Row;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * The data column map of the chart.
       */
      columns?: sap.makit.Column[] | sap.makit.Column;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Data region property of the chart's Series
       */
      series?: sap.makit.Series;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Data region property of the chart's Values
       */
      values?: sap.makit.Value[] | sap.makit.Value;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Data region property of the chart's Categories
       */
      categoryRegions?: sap.makit.Category[] | sap.makit.Category;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Data region property of the chart's Category
       */
      category?: sap.makit.Category;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
       */
      categoryAxis?: sap.makit.CategoryAxis;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Value Axis property of the Chart. Accept only an instance of ValueAxis element.
       */
      valueAxis?: sap.makit.ValueAxis;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
       */
      valueBubble?: sap.makit.ValueBubble;
    }

    interface $ColumnSettings extends sap.ui.core.$ElementSettings {
      /**
       * The name representing the Column
       */
      name?: string;

      /**
       * The value mapped to this Column (User should map this using data binding)
       */
      value?: any;

      /**
       * The data type of the Column: number string datetime
       */
      type?: string;
    }

    interface $CombinationChartSettings extends sap.ui.core.$ControlSettings {
      /**
       * The width of the Chart
       */
      width?: sap.ui.core.CSSSize;

      /**
       * The height of the Chart
       */
      height?: sap.ui.core.CSSSize;

      /**
       * Specify whether the range selector should be visible.
       */
      showRangeSelector?: boolean;

      /**
       * Legend position for Pie /Donut chart only.
       */
      legendPosition?: sap.makit.LegendPosition;

      /**
       * Allow a combination chart???s primary axis color palette to be modified without affecting other charts'
       * color palette. If not set, the chart will use the default color palette defined in the theme. Accept
       * an array of color in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      primaryColorPalette?: any;

      /**
       * Allow a combination chart???s secondary axis color palette to be modified without affecting other charts'
       * color palette. If not set, the chart will use the default color palette defined in the theme. Accept
       * an array of color in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      secondaryColorPalette?: any;

      /**
       * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
       */
      showTableValue?: boolean;

      /**
       * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not
       * set, the number of visible categories will be automatically adjusted depending on the screen size
       */
      numberOfVisibleCategories?: number;

      /**
       * Specify the range selector start position, default value is 0.
       */
      rangeSelectorStartPosition?: number;

      /**
       * Double tap event on the chart
       */
      doubletap?: Function;

      /**
       * Single tap event on the chart
       */
      tap?: Function;

      /**
       * Long press event on the chart
       */
      longpress?: Function;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Data region property of the chart's Categories
       */
      categoryRegions?: sap.makit.Category[] | sap.makit.Category;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * The collection of charts
       */
      layers?: sap.makit.Layer[] | sap.makit.Layer;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
       */
      categoryAxis?: sap.makit.CategoryAxis;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Property of the Combination Chart's primary Value Axis. Accept only an instance of ValueAxis element.
       */
      primaryValueAxis?: sap.makit.ValueAxis;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Property of the Combination Chart's secondary Value Axis. Accept only an instance of ValueAxis element.
       */
      secondaryValueAxis?: sap.makit.ValueAxis;

      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
       */
      valueBubble?: sap.makit.ValueBubble;
    }

    interface $LayerSettings extends sap.ui.core.$ElementSettings {
      /**
       * Chart type
       */
      type?: sap.makit.ChartType;

      /**
       * Specify the line thickness of the line graph. Only applies to Line chart type.
       */
      lineThickness?: number;

      /**
       * Allow a layer???s primary axis color palette to be modified without affecting other charts in the same
       * screen. If not set, the chart will use the default color palette defined in the theme. This property
       * will take precedence over other CombinationChart's color palette properties. Accept an array of color
       * in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      primaryColorPalette?: any;

      /**
       * Specifiy whether this layer should be drawn on the secondary axis.
       */
      drawOnSecondaryAxis?: boolean;

      /**
       * The data rows of the chart. User should bind these to their data source
       */
      rows?: sap.makit.Row[] | sap.makit.Row;

      /**
       * The data column map of the chart.
       */
      columns?: sap.makit.Column[] | sap.makit.Column;

      /**
       * Data region property of the chart's Series
       */
      series?: sap.makit.Series;

      /**
       * Data region property of the chart's Values
       */
      values?: sap.makit.Value[] | sap.makit.Value;
    }

    interface $MakitLibSettings extends sap.ui.core.$ElementSettings {}

    interface $RowSettings extends sap.ui.core.$ElementSettings {
      /**
       * Representing the cells of the row. User should not add individual cells. The cells will be added automatically
       * via Column mapping.
       */
      cells?: sap.makit.Column[] | sap.makit.Column;
    }

    interface $SeriesSettings extends sap.ui.core.$ElementSettings {
      /**
       * The name of the column that will be mapped to the chart's Series value
       */
      column?: string;

      /**
       * The displayed name of the Series
       */
      displayName?: string;

      /**
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       */
      format?: string;
    }

    interface $ValueSettings extends sap.ui.core.$ElementSettings {
      /**
       * The user should map the column on this property. The expression allows more advanced column mapping.
       * Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language
       * e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the
       * following expression: "revenueValue - operatingCost" the resulting value displayed in the chart will
       * be the arithmatic operation result on these two columns.
       */
      expression?: string;

      /**
       * The text label representing this Value (on value bubble or table's header)
       */
      displayName?: string;

      /**
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       */
      format?: string;

      /**
       * Comma separated locales for specifiying values in different locale. The locale will be mapped in the
       * same order as the series data. e.g. zh-CH, en-US, de-DE The first zh-CH will be applied to the value
       * of the first series, en-US will be applied to the second series. Currently will only work with 'currency'
       * format. Supported locales: en, zh, de, fr, es, ru, ja, pt and their more specific variations such as
       * en-CA, es-AR, zh-HK, etc.
       */
      locale?: string;
    }

    interface $ValueAxisSettings extends sap.makit.$AxisSettings {
      /**
       * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major
       * tick value depending on the value's range). Set to empty string to switch back to automatic calculation.
       */
      min?: string;

      /**
       * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major
       * tick value depending on the value's range)
       */
      max?: string;
    }

    interface $ValueBubbleSettings extends sap.ui.core.$ElementSettings {
      /**
       * Whether to display category's text on the Value Bubble
       */
      showCategoryText?: boolean;

      /**
       * Whether to display category's display name on the Value Bubble
       */
      showCategoryDisplayName?: boolean;

      /**
       * Whether to display value's display name on the Value Bubble
       */
      showValueDisplayName?: boolean;

      /**
       * Whether to display value on Pie or Donut chart
       */
      showValueOnPieChart?: boolean;

      /**
       * Whether to display legend's label (Pie or Donut chart only)
       */
      showLegendLabel?: boolean;

      /**
       * Whether to render null item on the Value Bubble
       */
      showNullValue?: boolean;

      /**
       * The position of the Value Bubble (Pie or Donut chart only)
       */
      position?: sap.makit.ValueBubblePosition;

      /**
       * Value Bubble positioning style (All the chart types except: Pie/Donut/HBar chart)
       */
      style?: sap.makit.ValueBubbleStyle;

      /**
       * Whether the Value Bubble is visible
       */
      visible?: boolean;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Base element for the Axis object for the Chart.
     */
    class Axis extends sap.ui.core.Element {
      /**
       * Constructor for a new Axis.
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
        mSettings?: $AxisSettings
      );

      /**
       * Creates a new subclass of class sap.makit.Axis with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets current value of property {@link #getColor color}.
       *
       * Color of the primary line. Accept the following format: standard name format: gray, red, black, etc hex
       * format: #ff00ff rgb format: rgb(256, 0, 256)
       *
       * Default value is `'gray'`.
       */
      getColor(): string;
      /**
       * Returns a metadata object for class sap.makit.Axis.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getShowGrid showGrid}.
       *
       * Indicates whether to show grid of the Axis in the chart area
       *
       * Default value is `false`.
       */
      getShowGrid(): boolean;
      /**
       * Gets current value of property {@link #getShowLabel showLabel}.
       *
       * Indicates whether to show label of the Axis by the primary line
       *
       * Default value is `true`.
       */
      getShowLabel(): boolean;
      /**
       * Gets current value of property {@link #getShowPrimaryLine showPrimaryLine}.
       *
       * Indicates whether to show the primary line of the Axis on the chart area
       *
       * Default value is `true`.
       */
      getShowPrimaryLine(): boolean;
      /**
       * Gets current value of property {@link #getThickness thickness}.
       *
       * The line thickness of the primary line
       *
       * Default value is `1`.
       */
      getThickness(): number;
      /**
       * Sets a new value for property {@link #getColor color}.
       *
       * Color of the primary line. Accept the following format: standard name format: gray, red, black, etc hex
       * format: #ff00ff rgb format: rgb(256, 0, 256)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'gray'`.
       */
      setColor(
        /**
         * New value for property `color`
         */
        sColor?: string
      ): sap.makit.Axis;
      /**
       * Sets a new value for property {@link #getShowGrid showGrid}.
       *
       * Indicates whether to show grid of the Axis in the chart area
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowGrid(
        /**
         * New value for property `showGrid`
         */
        bShowGrid?: boolean
      ): sap.makit.Axis;
      /**
       * Sets a new value for property {@link #getShowLabel showLabel}.
       *
       * Indicates whether to show label of the Axis by the primary line
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowLabel(
        /**
         * New value for property `showLabel`
         */
        bShowLabel?: boolean
      ): sap.makit.Axis;
      /**
       * Sets a new value for property {@link #getShowPrimaryLine showPrimaryLine}.
       *
       * Indicates whether to show the primary line of the Axis on the chart area
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowPrimaryLine(
        /**
         * New value for property `showPrimaryLine`
         */
        bShowPrimaryLine?: boolean
      ): sap.makit.Axis;
      /**
       * Sets a new value for property {@link #getThickness thickness}.
       *
       * The line thickness of the primary line
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `1`.
       */
      setThickness(
        /**
         * New value for property `thickness`
         */
        fThickness?: number
      ): sap.makit.Axis;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Represents the Category data region of the Chart.
     */
    class Category extends sap.ui.core.Element {
      /**
       * Constructor for a new Category.
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
        mSettings?: $CategorySettings
      );

      /**
       * Creates a new subclass of class sap.makit.Category with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets current value of property {@link #getColumn column}.
       *
       * Specify the name of the column to be mapped to the Category Axis's value.
       */
      getColumn(): string;
      /**
       * Gets current value of property {@link #getDisplayName displayName}.
       *
       * The text label representing this Category(on value bubble or table's header)
       */
      getDisplayName(): string;
      /**
       * Gets current value of property {@link #getFormat format}.
       *
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       */
      getFormat(): string;
      /**
       * Returns a metadata object for class sap.makit.Category.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Sets a new value for property {@link #getColumn column}.
       *
       * Specify the name of the column to be mapped to the Category Axis's value.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setColumn(
        /**
         * New value for property `column`
         */
        sColumn?: string
      ): sap.makit.Category;
      /**
       * Sets a new value for property {@link #getDisplayName displayName}.
       *
       * The text label representing this Category(on value bubble or table's header)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDisplayName(
        /**
         * New value for property `displayName`
         */
        sDisplayName?: string
      ): sap.makit.Category;
      /**
       * Sets a new value for property {@link #getFormat format}.
       *
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setFormat(
        /**
         * New value for property `format`
         */
        sFormat?: string
      ): sap.makit.Category;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Contains the properties of the Category's Axis.
     */
    class CategoryAxis extends sap.makit.Axis {
      /**
       * Constructor for a new CategoryAxis.
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
        mSettings?: $CategoryAxisSettings
      );

      /**
       * Creates a new subclass of class sap.makit.CategoryAxis with name `sClassName` and enriches it with the
       * information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.makit.Axis.extend}.
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
       * Gets current value of property {@link #getDisplayAll displayAll}.
       *
       * Specify whether to display all the category values when there are multiple category data regions.
       *
       * Default value is `true`.
       */
      getDisplayAll(): boolean;
      /**
       * Gets current value of property {@link #getDisplayLastLabel displayLastLabel}.
       *
       * Whether to always display the last label on the axis regardless of the automatic resize
       *
       * Default value is `false`.
       */
      getDisplayLastLabel(): boolean;
      /**
       * Returns a metadata object for class sap.makit.CategoryAxis.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getSortOrder sortOrder}.
       *
       * Sort order of the chart
       *
       * Default value is `None`.
       */
      getSortOrder(): sap.makit.SortOrder;
      /**
       * Sets a new value for property {@link #getDisplayAll displayAll}.
       *
       * Specify whether to display all the category values when there are multiple category data regions.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setDisplayAll(
        /**
         * New value for property `displayAll`
         */
        bDisplayAll?: boolean
      ): sap.makit.CategoryAxis;
      /**
       * Sets a new value for property {@link #getDisplayLastLabel displayLastLabel}.
       *
       * Whether to always display the last label on the axis regardless of the automatic resize
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setDisplayLastLabel(
        /**
         * New value for property `displayLastLabel`
         */
        bDisplayLastLabel?: boolean
      ): sap.makit.CategoryAxis;
      /**
       * Sets a new value for property {@link #getSortOrder sortOrder}.
       *
       * Sort order of the chart
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `None`.
       */
      setSortOrder(
        /**
         * New value for property `sortOrder`
         */
        sSortOrder?: sap.makit.SortOrder
      ): sap.makit.CategoryAxis;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and VizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * The Chart control.
     */
    class Chart extends sap.ui.core.Control {
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
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Adds some column to the aggregation {@link #getColumns columns}.
       */
      addColumn(
        /**
         * The column to add; if empty, nothing is inserted
         */
        oColumn: sap.makit.Column
      ): sap.makit.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:doubletap doubletap} event of this `sap.makit.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.Chart` itself.
       *
       * Double tap event on the chart
       */
      attachDoubletap(
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
         * Context object to call the event handler with. Defaults to this `sap.makit.Chart` itself
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:longpress longpress} event of this `sap.makit.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.Chart` itself.
       *
       * Long press event on the chart
       */
      attachLongpress(
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
         * Context object to call the event handler with. Defaults to this `sap.makit.Chart` itself
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.makit.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.Chart` itself.
       *
       * Single tap event on the chart
       */
      attachTap(
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
         * Context object to call the event handler with. Defaults to this `sap.makit.Chart` itself
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Binds aggregation {@link #getColumns columns} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
       * of the possible properties of `oBindingInfo`.
       */
      bindColumns(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Binds aggregation {@link #getRows rows} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
       * of the possible properties of `oBindingInfo`.
       */
      bindRows(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the categoryAxis in the aggregation {@link #getCategoryAxis categoryAxis}.
       */
      destroyCategoryAxis(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys all the categoryRegions in the aggregation {@link #getCategoryRegions categoryRegions}.
       */
      destroyCategoryRegions(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys all the columns in the aggregation {@link #getColumns columns}.
       */
      destroyColumns(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the series in the aggregation {@link #getSeries series}.
       */
      destroySeries(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the valueAxis in the aggregation {@link #getValueAxis valueAxis}.
       */
      destroyValueAxis(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the valueBubble in the aggregation {@link #getValueBubble valueBubble}.
       */
      destroyValueBubble(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys all the values in the aggregation {@link #getValues values}.
       */
      destroyValues(): sap.makit.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:doubletap doubletap} event of this `sap.makit.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachDoubletap(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:longpress longpress} event of this `sap.makit.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachLongpress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:tap tap} event of this `sap.makit.Chart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachTap(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Creates a new subclass of class sap.makit.Chart with name `sClassName` and enriches it with the information
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
       * Fires event {@link #event:doubletap doubletap} to attached listeners.
       */
      fireDoubletap(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.makit.Chart;
      /**
       * Fires event {@link #event:longpress longpress} to attached listeners.
       */
      fireLongpress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.makit.Chart;
      /**
       * Fires event {@link #event:tap tap} to attached listeners.
       */
      fireTap(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getCategoryAxis categoryAxis}.
       *
       * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
       */
      getCategoryAxis(): sap.makit.CategoryAxis;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getCategoryRegions categoryRegions}.
       *
       * Data region property of the chart's Categories
       */
      getCategoryRegions(): sap.makit.Category[];
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getColumns columns}.
       *
       * The data column map of the chart.
       */
      getColumns(): sap.makit.Column[];
      /**
       * Gets current value of property {@link #getHeight height}.
       *
       * The height of the Chart
       *
       * Default value is `'100%'`.
       */
      getHeight(): sap.ui.core.CSSSize;
      /**
       * Gets current value of property {@link #getLegendPosition legendPosition}.
       *
       * Legend position all chart types except Bar chart. Default position for Pie/Donut chart is Left. All other
       * chart's default position is None. Note: the default legend position is set when the chart type is set
       * first time, subsequent change to the chart type will keep using initial legend position unless it is
       * changed explicitly by user.
       */
      getLegendPosition(): sap.makit.LegendPosition;
      /**
       * Gets current value of property {@link #getLineThickness lineThickness}.
       *
       * Specify the line thickness of the line graph. Only applies to Line chart type.
       *
       * Default value is `1`.
       */
      getLineThickness(): number;
      /**
       * Gets current value of property {@link #getMaxSliceCount maxSliceCount}.
       *
       * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will
       * be categorised into a single slice. Only applies to Pie/Donut.
       *
       * Default value is `12`.
       */
      getMaxSliceCount(): number;
      /**
       * Returns a metadata object for class sap.makit.Chart.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Get the number of distinct category values
       */
      getNumberOfCategories(): number;
      /**
       * Gets current value of property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
       *
       * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not
       * set, the number of visible categories will be automatically adjusted depending on the screen size
       */
      getNumberOfVisibleCategories(): number;
      /**
       * Gets current value of property {@link #getPrimaryColorPalette primaryColorPalette}.
       *
       * Allow a chart???s color palette to be modified without affecting the other charts' color palette. If not
       * set, the chart will use the default color palette defined in the theme. Accept an array of color in string
       * format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      getPrimaryColorPalette(): any;
      /**
       * Gets current value of property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
       *
       * Specify the range selector start position, default value is 0.
       *
       * Default value is `0`.
       */
      getRangeSelectorStartPosition(): number;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getRows rows}.
       *
       * The data rows of the chart. User should bind these to their data source
       */
      getRows(): sap.makit.Row[];
      /**
       * Get the value of the currently highlighted category
       */
      getSelectedCategory(): string;
      /**
       * Return an array of categories value that is currently selected.
       */
      getSelectedCategoryGroup(): object;
      /**
       * Get the value of the currently highlighted series
       */
      getSelectedSeries(): string;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getSeries series}.
       *
       * Data region property of the chart's Series
       */
      getSeries(): sap.makit.Series;
      /**
       * Gets current value of property {@link #getShowRangeSelector showRangeSelector}.
       *
       * Specify whether the range selector should be visible.
       *
       * Default value is `true`.
       */
      getShowRangeSelector(): boolean;
      /**
       * Gets current value of property {@link #getShowTableValue showTableValue}.
       *
       * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
       *
       * Default value is `true`.
       */
      getShowTableValue(): boolean;
      /**
       * Gets current value of property {@link #getShowTableView showTableView}.
       *
       * Toggle to display table view
       *
       * Default value is `false`.
       */
      getShowTableView(): boolean;
      /**
       * Gets current value of property {@link #getShowTotalValue showTotalValue}.
       *
       * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar
       * chart.
       *
       * Default value is `false`.
       */
      getShowTotalValue(): boolean;
      /**
       * Gets current value of property {@link #getType type}.
       *
       * Chart type
       *
       * Default value is `Column`.
       */
      getType(): sap.makit.ChartType;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getValueAxis valueAxis}.
       *
       * Value Axis property of the Chart. Accept only an instance of ValueAxis element.
       */
      getValueAxis(): sap.makit.ValueAxis;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getValueBubble valueBubble}.
       *
       * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
       */
      getValueBubble(): sap.makit.ValueBubble;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getValues values}.
       *
       * Data region property of the chart's Values
       */
      getValues(): sap.makit.Value[];
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * The width of the Chart
       *
       * Default value is `'100%'`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Checks for the provided `sap.makit.Category` in the aggregation {@link #getCategoryRegions categoryRegions}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfCategoryRegion(
        /**
         * The categoryRegion whose index is looked for
         */
        oCategoryRegion: sap.makit.Category
      ): number;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Checks for the provided `sap.makit.Column` in the aggregation {@link #getColumns columns}. and returns
       * its index if found or -1 otherwise.
       */
      indexOfColumn(
        /**
         * The column whose index is looked for
         */
        oColumn: sap.makit.Column
      ): number;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Checks for the provided `sap.makit.Row` in the aggregation {@link #getRows rows}. and returns its index
       * if found or -1 otherwise.
       */
      indexOfRow(
        /**
         * The row whose index is looked for
         */
        oRow: sap.makit.Row
      ): number;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Checks for the provided `sap.makit.Value` in the aggregation {@link #getValues values}. and returns its
       * index if found or -1 otherwise.
       */
      indexOfValue(
        /**
         * The value whose index is looked for
         */
        oValue: sap.makit.Value
      ): number;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Inserts a column into the aggregation {@link #getColumns columns}.
       */
      insertColumn(
        /**
         * The column to insert; if empty, nothing is inserted
         */
        oColumn: sap.makit.Column,
        /**
         * The `0`-based index the column should be inserted at; for a negative value of `iIndex`, the column is
         * inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted
         * at the last position
         */
        iIndex: number
      ): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Removes all the controls from the aggregation {@link #getColumns columns}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllColumns(): sap.makit.Column[];
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Removes a column from the aggregation {@link #getColumns columns}.
       */
      removeColumn(
        /**
         * The column to remove or its index or id
         */
        vColumn: number | string | sap.makit.Column
      ): sap.makit.Column;
      /**
       * Sets a new value for property {@link #getHeight height}.
       *
       * The height of the Chart
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'100%'`.
       */
      setHeight(
        /**
         * New value for property `height`
         */
        sHeight?: sap.ui.core.CSSSize
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getLegendPosition legendPosition}.
       *
       * Legend position all chart types except Bar chart. Default position for Pie/Donut chart is Left. All other
       * chart's default position is None. Note: the default legend position is set when the chart type is set
       * first time, subsequent change to the chart type will keep using initial legend position unless it is
       * changed explicitly by user.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendPosition(
        /**
         * New value for property `legendPosition`
         */
        sLegendPosition?: sap.makit.LegendPosition
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getLineThickness lineThickness}.
       *
       * Specify the line thickness of the line graph. Only applies to Line chart type.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `1`.
       */
      setLineThickness(
        /**
         * New value for property `lineThickness`
         */
        fLineThickness?: number
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getMaxSliceCount maxSliceCount}.
       *
       * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will
       * be categorised into a single slice. Only applies to Pie/Donut.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `12`.
       */
      setMaxSliceCount(
        /**
         * New value for property `maxSliceCount`
         */
        iMaxSliceCount?: number
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
       *
       * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not
       * set, the number of visible categories will be automatically adjusted depending on the screen size
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setNumberOfVisibleCategories(
        /**
         * New value for property `numberOfVisibleCategories`
         */
        iNumberOfVisibleCategories?: number
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
       *
       * Specify the range selector start position, default value is 0.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `0`.
       */
      setRangeSelectorStartPosition(
        /**
         * New value for property `rangeSelectorStartPosition`
         */
        iRangeSelectorStartPosition?: number
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getShowRangeSelector showRangeSelector}.
       *
       * Specify whether the range selector should be visible.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowRangeSelector(
        /**
         * New value for property `showRangeSelector`
         */
        bShowRangeSelector?: boolean
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getShowTableValue showTableValue}.
       *
       * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowTableValue(
        /**
         * New value for property `showTableValue`
         */
        bShowTableValue?: boolean
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getShowTableView showTableView}.
       *
       * Toggle to display table view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowTableView(
        /**
         * New value for property `showTableView`
         */
        bShowTableView?: boolean
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getShowTotalValue showTotalValue}.
       *
       * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar
       * chart.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowTotalValue(
        /**
         * New value for property `showTotalValue`
         */
        bShowTotalValue?: boolean
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * Chart type
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Column`.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: sap.makit.ChartType
      ): sap.makit.Chart;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * The width of the Chart
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'100%'`.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth?: sap.ui.core.CSSSize
      ): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Unbinds aggregation {@link #getColumns columns} from model data.
       */
      unbindColumns(): sap.makit.Chart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Unbinds aggregation {@link #getRows rows} from model data.
       */
      unbindRows(): sap.makit.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:doubletap doubletap} event of this `sap.makit.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.Chart` itself.
       *
       * Double tap event on the chart
       */
      attachDoubletap(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.makit.Chart` itself
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:longpress longpress} event of this `sap.makit.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.Chart` itself.
       *
       * Long press event on the chart
       */
      attachLongpress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.makit.Chart` itself
         */
        oListener?: object
      ): sap.makit.Chart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.makit.Chart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.Chart` itself.
       *
       * Single tap event on the chart
       */
      attachTap(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.makit.Chart` itself
         */
        oListener?: object
      ): sap.makit.Chart;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * The data column of the Chart's data table
     */
    class Column extends sap.ui.core.Element {
      /**
       * Constructor for a new Column.
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
        mSettings?: $ColumnSettings
      );

      /**
       * Creates a new subclass of class sap.makit.Column with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Returns a metadata object for class sap.makit.Column.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getName name}.
       *
       * The name representing the Column
       */
      getName(): string;
      /**
       * Gets current value of property {@link #getType type}.
       *
       * The data type of the Column: number string datetime
       *
       * Default value is `'string'`.
       */
      getType(): string;
      /**
       * Gets current value of property {@link #getValue value}.
       *
       * The value mapped to this Column (User should map this using data binding)
       */
      getValue(): any;
      /**
       * Sets a new value for property {@link #getName name}.
       *
       * The name representing the Column
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setName(
        /**
         * New value for property `name`
         */
        sName?: string
      ): sap.makit.Column;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * The data type of the Column: number string datetime
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'string'`.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: string
      ): sap.makit.Column;
      /**
       * Sets a new value for property {@link #getValue value}.
       *
       * The value mapped to this Column (User should map this using data binding)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setValue(
        /**
         * New value for property `value`
         */
        oValue?: any
      ): sap.makit.Column;
    }
    /**
     * @SINCE 1.12
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * The CombinationChart control.
     */
    class CombinationChart extends sap.ui.core.Control {
      /**
       * Constructor for a new CombinationChart.
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
        mSettings?: $CombinationChartSettings
      );

      /**
       * Attaches event handler `fnFunction` to the {@link #event:doubletap doubletap} event of this `sap.makit.CombinationChart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.CombinationChart` itself.
       *
       * Double tap event on the chart
       */
      attachDoubletap(
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
         * Context object to call the event handler with. Defaults to this `sap.makit.CombinationChart` itself
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:longpress longpress} event of this `sap.makit.CombinationChart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.CombinationChart` itself.
       *
       * Long press event on the chart
       */
      attachLongpress(
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
         * Context object to call the event handler with. Defaults to this `sap.makit.CombinationChart` itself
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.makit.CombinationChart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.CombinationChart` itself.
       *
       * Single tap event on the chart
       */
      attachTap(
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
         * Context object to call the event handler with. Defaults to this `sap.makit.CombinationChart` itself
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the categoryAxis in the aggregation {@link #getCategoryAxis categoryAxis}.
       */
      destroyCategoryAxis(): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys all the categoryRegions in the aggregation {@link #getCategoryRegions categoryRegions}.
       */
      destroyCategoryRegions(): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys all the layers in the aggregation {@link #getLayers layers}.
       */
      destroyLayers(): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the primaryValueAxis in the aggregation {@link #getPrimaryValueAxis primaryValueAxis}.
       */
      destroyPrimaryValueAxis(): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the secondaryValueAxis in the aggregation {@link #getSecondaryValueAxis secondaryValueAxis}.
       */
      destroySecondaryValueAxis(): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Destroys the valueBubble in the aggregation {@link #getValueBubble valueBubble}.
       */
      destroyValueBubble(): sap.makit.CombinationChart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:doubletap doubletap} event of this `sap.makit.CombinationChart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachDoubletap(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:longpress longpress} event of this `sap.makit.CombinationChart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachLongpress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:tap tap} event of this `sap.makit.CombinationChart`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachTap(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Creates a new subclass of class sap.makit.CombinationChart with name `sClassName` and enriches it with
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
       * Fires event {@link #event:doubletap doubletap} to attached listeners.
       */
      fireDoubletap(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.makit.CombinationChart;
      /**
       * Fires event {@link #event:longpress longpress} to attached listeners.
       */
      fireLongpress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.makit.CombinationChart;
      /**
       * Fires event {@link #event:tap tap} to attached listeners.
       */
      fireTap(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.makit.CombinationChart;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getCategoryAxis categoryAxis}.
       *
       * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
       */
      getCategoryAxis(): sap.makit.CategoryAxis;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getCategoryRegions categoryRegions}.
       *
       * Data region property of the chart's Categories
       */
      getCategoryRegions(): sap.makit.Category[];
      /**
       * Gets current value of property {@link #getHeight height}.
       *
       * The height of the Chart
       *
       * Default value is `'100%'`.
       */
      getHeight(): sap.ui.core.CSSSize;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getLayers layers}.
       *
       * The collection of charts
       */
      getLayers(): sap.makit.Layer[];
      /**
       * Gets current value of property {@link #getLegendPosition legendPosition}.
       *
       * Legend position for Pie /Donut chart only.
       *
       * Default value is `Left`.
       */
      getLegendPosition(): sap.makit.LegendPosition;
      /**
       * Returns a metadata object for class sap.makit.CombinationChart.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Get the number of distinct category values
       */
      getNumberOfCategories(): number;
      /**
       * Gets current value of property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
       *
       * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not
       * set, the number of visible categories will be automatically adjusted depending on the screen size
       */
      getNumberOfVisibleCategories(): number;
      /**
       * Gets current value of property {@link #getPrimaryColorPalette primaryColorPalette}.
       *
       * Allow a combination chart???s primary axis color palette to be modified without affecting other charts'
       * color palette. If not set, the chart will use the default color palette defined in the theme. Accept
       * an array of color in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      getPrimaryColorPalette(): any;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getPrimaryValueAxis primaryValueAxis}.
       *
       * Property of the Combination Chart's primary Value Axis. Accept only an instance of ValueAxis element.
       */
      getPrimaryValueAxis(): sap.makit.ValueAxis;
      /**
       * Gets current value of property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
       *
       * Specify the range selector start position, default value is 0.
       *
       * Default value is `0`.
       */
      getRangeSelectorStartPosition(): number;
      /**
       * Gets current value of property {@link #getSecondaryColorPalette secondaryColorPalette}.
       *
       * Allow a combination chart???s secondary axis color palette to be modified without affecting other charts'
       * color palette. If not set, the chart will use the default color palette defined in the theme. Accept
       * an array of color in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      getSecondaryColorPalette(): any;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getSecondaryValueAxis secondaryValueAxis}.
       *
       * Property of the Combination Chart's secondary Value Axis. Accept only an instance of ValueAxis element.
       */
      getSecondaryValueAxis(): sap.makit.ValueAxis;
      /**
       * Get the value of the currently highlighted category
       */
      getSelectedCategory(): string;
      /**
       * Return an array of categories value that is currently selected.
       */
      getSelectedCategoryGroup(): object;
      /**
       * Gets current value of property {@link #getShowRangeSelector showRangeSelector}.
       *
       * Specify whether the range selector should be visible.
       *
       * Default value is `true`.
       */
      getShowRangeSelector(): boolean;
      /**
       * Gets current value of property {@link #getShowTableValue showTableValue}.
       *
       * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
       *
       * Default value is `true`.
       */
      getShowTableValue(): boolean;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Gets content of aggregation {@link #getValueBubble valueBubble}.
       *
       * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
       */
      getValueBubble(): sap.makit.ValueBubble;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * The width of the Chart
       *
       * Default value is `'100%'`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Checks for the provided `sap.makit.Category` in the aggregation {@link #getCategoryRegions categoryRegions}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfCategoryRegion(
        /**
         * The categoryRegion whose index is looked for
         */
        oCategoryRegion: sap.makit.Category
      ): number;
      /**
       * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
       * will not be supported anymore from 1.38.
       *
       * Checks for the provided `sap.makit.Layer` in the aggregation {@link #getLayers layers}. and returns its
       * index if found or -1 otherwise.
       */
      indexOfLayer(
        /**
         * The layer whose index is looked for
         */
        oLayer: sap.makit.Layer
      ): number;
      /**
       * Sets a new value for property {@link #getHeight height}.
       *
       * The height of the Chart
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'100%'`.
       */
      setHeight(
        /**
         * New value for property `height`
         */
        sHeight?: sap.ui.core.CSSSize
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getLegendPosition legendPosition}.
       *
       * Legend position for Pie /Donut chart only.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Left`.
       */
      setLegendPosition(
        /**
         * New value for property `legendPosition`
         */
        sLegendPosition?: sap.makit.LegendPosition
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
       *
       * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not
       * set, the number of visible categories will be automatically adjusted depending on the screen size
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setNumberOfVisibleCategories(
        /**
         * New value for property `numberOfVisibleCategories`
         */
        iNumberOfVisibleCategories?: number
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getPrimaryColorPalette primaryColorPalette}.
       *
       * Allow a combination chart???s primary axis color palette to be modified without affecting other charts'
       * color palette. If not set, the chart will use the default color palette defined in the theme. Accept
       * an array of color in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setPrimaryColorPalette(
        /**
         * New value for property `primaryColorPalette`
         */
        oPrimaryColorPalette?: any
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
       *
       * Specify the range selector start position, default value is 0.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `0`.
       */
      setRangeSelectorStartPosition(
        /**
         * New value for property `rangeSelectorStartPosition`
         */
        iRangeSelectorStartPosition?: number
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getSecondaryColorPalette secondaryColorPalette}.
       *
       * Allow a combination chart???s secondary axis color palette to be modified without affecting other charts'
       * color palette. If not set, the chart will use the default color palette defined in the theme. Accept
       * an array of color in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSecondaryColorPalette(
        /**
         * New value for property `secondaryColorPalette`
         */
        oSecondaryColorPalette?: any
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getShowRangeSelector showRangeSelector}.
       *
       * Specify whether the range selector should be visible.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowRangeSelector(
        /**
         * New value for property `showRangeSelector`
         */
        bShowRangeSelector?: boolean
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getShowTableValue showTableValue}.
       *
       * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowTableValue(
        /**
         * New value for property `showTableValue`
         */
        bShowTableValue?: boolean
      ): sap.makit.CombinationChart;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * The width of the Chart
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'100%'`.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth?: sap.ui.core.CSSSize
      ): sap.makit.CombinationChart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:doubletap doubletap} event of this `sap.makit.CombinationChart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.CombinationChart` itself.
       *
       * Double tap event on the chart
       */
      attachDoubletap(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.makit.CombinationChart` itself
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:longpress longpress} event of this `sap.makit.CombinationChart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.CombinationChart` itself.
       *
       * Long press event on the chart
       */
      attachLongpress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.makit.CombinationChart` itself
         */
        oListener?: object
      ): sap.makit.CombinationChart;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.makit.CombinationChart`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.makit.CombinationChart` itself.
       *
       * Single tap event on the chart
       */
      attachTap(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.makit.CombinationChart` itself
         */
        oListener?: object
      ): sap.makit.CombinationChart;
    }
    /**
     * @SINCE 1.12
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Layer represent a chart in the CombinationChart
     */
    class Layer extends sap.ui.core.Element {
      /**
       * Constructor for a new Layer.
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
        mSettings?: $LayerSettings
      );

      /**
       * Adds some column to the aggregation {@link #getColumns columns}.
       */
      addColumn(
        /**
         * The column to add; if empty, nothing is inserted
         */
        oColumn: sap.makit.Column
      ): sap.makit.Layer;
      /**
       * Binds aggregation {@link #getColumns columns} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
       * of the possible properties of `oBindingInfo`.
       */
      bindColumns(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.makit.Layer;
      /**
       * Binds aggregation {@link #getRows rows} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
       * of the possible properties of `oBindingInfo`.
       */
      bindRows(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.makit.Layer;
      /**
       * Destroys all the columns in the aggregation {@link #getColumns columns}.
       */
      destroyColumns(): sap.makit.Layer;
      /**
       * Destroys the series in the aggregation {@link #getSeries series}.
       */
      destroySeries(): sap.makit.Layer;
      /**
       * Destroys all the values in the aggregation {@link #getValues values}.
       */
      destroyValues(): sap.makit.Layer;
      /**
       * Creates a new subclass of class sap.makit.Layer with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets content of aggregation {@link #getColumns columns}.
       *
       * The data column map of the chart.
       */
      getColumns(): sap.makit.Column[];
      /**
       * Gets current value of property {@link #getDrawOnSecondaryAxis drawOnSecondaryAxis}.
       *
       * Specifiy whether this layer should be drawn on the secondary axis.
       *
       * Default value is `false`.
       */
      getDrawOnSecondaryAxis(): boolean;
      /**
       * Gets current value of property {@link #getLineThickness lineThickness}.
       *
       * Specify the line thickness of the line graph. Only applies to Line chart type.
       *
       * Default value is `1`.
       */
      getLineThickness(): number;
      /**
       * Returns a metadata object for class sap.makit.Layer.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getPrimaryColorPalette primaryColorPalette}.
       *
       * Allow a layer???s primary axis color palette to be modified without affecting other charts in the same
       * screen. If not set, the chart will use the default color palette defined in the theme. This property
       * will take precedence over other CombinationChart's color palette properties. Accept an array of color
       * in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       */
      getPrimaryColorPalette(): any;
      /**
       * Gets content of aggregation {@link #getRows rows}.
       *
       * The data rows of the chart. User should bind these to their data source
       */
      getRows(): sap.makit.Row[];
      /**
       * Get the value of the currently highlighted series
       */
      getSelectedSeries(): string;
      /**
       * Gets content of aggregation {@link #getSeries series}.
       *
       * Data region property of the chart's Series
       */
      getSeries(): sap.makit.Series;
      /**
       * Gets current value of property {@link #getType type}.
       *
       * Chart type
       *
       * Default value is `Column`.
       */
      getType(): sap.makit.ChartType;
      /**
       * Gets content of aggregation {@link #getValues values}.
       *
       * Data region property of the chart's Values
       */
      getValues(): sap.makit.Value[];
      /**
       * Checks for the provided `sap.makit.Column` in the aggregation {@link #getColumns columns}. and returns
       * its index if found or -1 otherwise.
       */
      indexOfColumn(
        /**
         * The column whose index is looked for
         */
        oColumn: sap.makit.Column
      ): number;
      /**
       * Checks for the provided `sap.makit.Row` in the aggregation {@link #getRows rows}. and returns its index
       * if found or -1 otherwise.
       */
      indexOfRow(
        /**
         * The row whose index is looked for
         */
        oRow: sap.makit.Row
      ): number;
      /**
       * Checks for the provided `sap.makit.Value` in the aggregation {@link #getValues values}. and returns its
       * index if found or -1 otherwise.
       */
      indexOfValue(
        /**
         * The value whose index is looked for
         */
        oValue: sap.makit.Value
      ): number;
      /**
       * Inserts a column into the aggregation {@link #getColumns columns}.
       */
      insertColumn(
        /**
         * The column to insert; if empty, nothing is inserted
         */
        oColumn: sap.makit.Column,
        /**
         * The `0`-based index the column should be inserted at; for a negative value of `iIndex`, the column is
         * inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted
         * at the last position
         */
        iIndex: number
      ): sap.makit.Layer;
      /**
       * Inserts a value into the aggregation {@link #getValues values}.
       */
      insertValue(
        /**
         * The value to insert; if empty, nothing is inserted
         */
        oValue: sap.makit.Value,
        /**
         * The `0`-based index the value should be inserted at; for a negative value of `iIndex`, the value is inserted
         * at position 0; for a value greater than the current size of the aggregation, the value is inserted at
         * the last position
         */
        iIndex: number
      ): sap.makit.Layer;
      /**
       * Removes all the controls from the aggregation {@link #getColumns columns}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllColumns(): sap.makit.Column[];
      /**
       * Removes all the controls from the aggregation {@link #getValues values}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllValues(): sap.makit.Value[];
      /**
       * Removes a column from the aggregation {@link #getColumns columns}.
       */
      removeColumn(
        /**
         * The column to remove or its index or id
         */
        vColumn: number | string | sap.makit.Column
      ): sap.makit.Column;
      /**
       * Removes a value from the aggregation {@link #getValues values}.
       */
      removeValue(
        /**
         * The value to remove or its index or id
         */
        vValue: number | string | sap.makit.Value
      ): sap.makit.Value;
      /**
       * Sets a new value for property {@link #getDrawOnSecondaryAxis drawOnSecondaryAxis}.
       *
       * Specifiy whether this layer should be drawn on the secondary axis.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setDrawOnSecondaryAxis(
        /**
         * New value for property `drawOnSecondaryAxis`
         */
        bDrawOnSecondaryAxis?: boolean
      ): sap.makit.Layer;
      /**
       * Sets a new value for property {@link #getLineThickness lineThickness}.
       *
       * Specify the line thickness of the line graph. Only applies to Line chart type.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `1`.
       */
      setLineThickness(
        /**
         * New value for property `lineThickness`
         */
        fLineThickness?: number
      ): sap.makit.Layer;
      /**
       * Sets a new value for property {@link #getPrimaryColorPalette primaryColorPalette}.
       *
       * Allow a layer???s primary axis color palette to be modified without affecting other charts in the same
       * screen. If not set, the chart will use the default color palette defined in the theme. This property
       * will take precedence over other CombinationChart's color palette properties. Accept an array of color
       * in string format or hex format. e.g. 0xff0000 "red" "rgb(255,0,0)"
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setPrimaryColorPalette(
        /**
         * New value for property `primaryColorPalette`
         */
        oPrimaryColorPalette?: any
      ): sap.makit.Layer;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * Chart type
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Column`.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: sap.makit.ChartType
      ): sap.makit.Layer;
      /**
       * Unbinds aggregation {@link #getColumns columns} from model data.
       */
      unbindColumns(): sap.makit.Layer;
      /**
       * Unbinds aggregation {@link #getRows rows} from model data.
       */
      unbindRows(): sap.makit.Layer;
    }
    /**
     * @SINCE 1.12
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Wrapper for MAKit Chart Library. Only to be used used internally.
     */
    class MakitLib extends sap.ui.core.Element {
      /**
       * Constructor for a new MakitLib.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       *
       * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Element#constructor
       * sap.ui.core.Element} can be used.
       */
      constructor(
        /**
         * id for the new control, generated automatically if no id is given
         */
        sId?: string,
        /**
         * initial settings for the new control
         */
        mSettings?: $MakitLibSettings
      );

      /**
       * Creates a new subclass of class sap.makit.MakitLib with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Returns a metadata object for class sap.makit.MakitLib.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * The data row of the Chart's data table
     */
    class Row extends sap.ui.core.Element {
      /**
       * Constructor for a new Row.
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
        mSettings?: $RowSettings
      );

      /**
       * Adds some cell to the aggregation {@link #getCells cells}.
       */
      addCell(
        /**
         * The cell to add; if empty, nothing is inserted
         */
        oCell: sap.makit.Column
      ): sap.makit.Row;
      /**
       * Destroys all the cells in the aggregation {@link #getCells cells}.
       */
      destroyCells(): sap.makit.Row;
      /**
       * Creates a new subclass of class sap.makit.Row with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets content of aggregation {@link #getCells cells}.
       *
       * Representing the cells of the row. User should not add individual cells. The cells will be added automatically
       * via Column mapping.
       */
      getCells(): sap.makit.Column[];
      /**
       * Returns a metadata object for class sap.makit.Row.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Checks for the provided `sap.makit.Column` in the aggregation {@link #getCells cells}. and returns its
       * index if found or -1 otherwise.
       */
      indexOfCell(
        /**
         * The cell whose index is looked for
         */
        oCell: sap.makit.Column
      ): number;
      /**
       * Inserts a cell into the aggregation {@link #getCells cells}.
       */
      insertCell(
        /**
         * The cell to insert; if empty, nothing is inserted
         */
        oCell: sap.makit.Column,
        /**
         * The `0`-based index the cell should be inserted at; for a negative value of `iIndex`, the cell is inserted
         * at position 0; for a value greater than the current size of the aggregation, the cell is inserted at
         * the last position
         */
        iIndex: number
      ): sap.makit.Row;
      /**
       * Removes all the controls from the aggregation {@link #getCells cells}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllCells(): sap.makit.Column[];
      /**
       * Removes a cell from the aggregation {@link #getCells cells}.
       */
      removeCell(
        /**
         * The cell to remove or its index or id
         */
        vCell: number | string | sap.makit.Column
      ): sap.makit.Column;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Represents the Series data region of the Chart.
     */
    class Series extends sap.ui.core.Element {
      /**
       * Constructor for a new Series.
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
        mSettings?: $SeriesSettings
      );

      /**
       * Creates a new subclass of class sap.makit.Series with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets current value of property {@link #getColumn column}.
       *
       * The name of the column that will be mapped to the chart's Series value
       */
      getColumn(): string;
      /**
       * Gets current value of property {@link #getDisplayName displayName}.
       *
       * The displayed name of the Series
       */
      getDisplayName(): string;
      /**
       * Gets current value of property {@link #getFormat format}.
       *
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       */
      getFormat(): string;
      /**
       * Returns a metadata object for class sap.makit.Series.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Sets a new value for property {@link #getColumn column}.
       *
       * The name of the column that will be mapped to the chart's Series value
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setColumn(
        /**
         * New value for property `column`
         */
        sColumn?: string
      ): sap.makit.Series;
      /**
       * Sets a new value for property {@link #getDisplayName displayName}.
       *
       * The displayed name of the Series
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDisplayName(
        /**
         * New value for property `displayName`
         */
        sDisplayName?: string
      ): sap.makit.Series;
      /**
       * Sets a new value for property {@link #getFormat format}.
       *
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setFormat(
        /**
         * New value for property `format`
         */
        sFormat?: string
      ): sap.makit.Series;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Represents the Value data region of the Chart.
     */
    class Value extends sap.ui.core.Element {
      /**
       * Constructor for a new Value.
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
        mSettings?: $ValueSettings
      );

      /**
       * Creates a new subclass of class sap.makit.Value with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets current value of property {@link #getDisplayName displayName}.
       *
       * The text label representing this Value (on value bubble or table's header)
       */
      getDisplayName(): string;
      /**
       * Gets current value of property {@link #getExpression expression}.
       *
       * The user should map the column on this property. The expression allows more advanced column mapping.
       * Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language
       * e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the
       * following expression: "revenueValue - operatingCost" the resulting value displayed in the chart will
       * be the arithmatic operation result on these two columns.
       */
      getExpression(): string;
      /**
       * Gets current value of property {@link #getFormat format}.
       *
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       */
      getFormat(): string;
      /**
       * Gets current value of property {@link #getLocale locale}.
       *
       * Comma separated locales for specifiying values in different locale. The locale will be mapped in the
       * same order as the series data. e.g. zh-CH, en-US, de-DE The first zh-CH will be applied to the value
       * of the first series, en-US will be applied to the second series. Currently will only work with 'currency'
       * format. Supported locales: en, zh, de, fr, es, ru, ja, pt and their more specific variations such as
       * en-CA, es-AR, zh-HK, etc.
       */
      getLocale(): string;
      /**
       * Returns a metadata object for class sap.makit.Value.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Sets a new value for property {@link #getDisplayName displayName}.
       *
       * The text label representing this Value (on value bubble or table's header)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDisplayName(
        /**
         * New value for property `displayName`
         */
        sDisplayName?: string
      ): sap.makit.Value;
      /**
       * Sets a new value for property {@link #getExpression expression}.
       *
       * The user should map the column on this property. The expression allows more advanced column mapping.
       * Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language
       * e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the
       * following expression: "revenueValue - operatingCost" the resulting value displayed in the chart will
       * be the arithmatic operation result on these two columns.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setExpression(
        /**
         * New value for property `expression`
         */
        sExpression?: string
      ): sap.makit.Value;
      /**
       * Sets a new value for property {@link #getFormat format}.
       *
       * Number formatting for the value. Accepted values: number currency percent roundedN - where N represents
       * number of decimal places e.g. rounded4
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setFormat(
        /**
         * New value for property `format`
         */
        sFormat?: string
      ): sap.makit.Value;
      /**
       * Sets a new value for property {@link #getLocale locale}.
       *
       * Comma separated locales for specifiying values in different locale. The locale will be mapped in the
       * same order as the series data. e.g. zh-CH, en-US, de-DE The first zh-CH will be applied to the value
       * of the first series, en-US will be applied to the second series. Currently will only work with 'currency'
       * format. Supported locales: en, zh, de, fr, es, ru, ja, pt and their more specific variations such as
       * en-CA, es-AR, zh-HK, etc.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLocale(
        /**
         * New value for property `locale`
         */
        sLocale?: string
      ): sap.makit.Value;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Contains the properties of the Value's Axis.
     */
    class ValueAxis extends sap.makit.Axis {
      /**
       * Constructor for a new ValueAxis.
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
        mSettings?: $ValueAxisSettings
      );

      /**
       * Creates a new subclass of class sap.makit.ValueAxis with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.makit.Axis.extend}.
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
       * Gets current value of property {@link #getMax max}.
       *
       * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major
       * tick value depending on the value's range)
       */
      getMax(): string;
      /**
       * Returns a metadata object for class sap.makit.ValueAxis.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getMin min}.
       *
       * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major
       * tick value depending on the value's range). Set to empty string to switch back to automatic calculation.
       */
      getMin(): string;
      /**
       * Sets a new value for property {@link #getMax max}.
       *
       * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major
       * tick value depending on the value's range)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setMax(
        /**
         * New value for property `max`
         */
        sMax?: string
      ): sap.makit.ValueAxis;
      /**
       * Sets a new value for property {@link #getMin min}.
       *
       * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major
       * tick value depending on the value's range). Set to empty string to switch back to automatic calculation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setMin(
        /**
         * New value for property `min`
         */
        sMin?: string
      ): sap.makit.ValueAxis;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * The properties of the Chart's Value Bubble.
     */
    class ValueBubble extends sap.ui.core.Element {
      /**
       * Constructor for a new ValueBubble.
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
        mSettings?: $ValueBubbleSettings
      );

      /**
       * Creates a new subclass of class sap.makit.ValueBubble with name `sClassName` and enriches it with the
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
       * Returns a metadata object for class sap.makit.ValueBubble.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getPosition position}.
       *
       * The position of the Value Bubble (Pie or Donut chart only)
       *
       * Default value is `Top`.
       */
      getPosition(): sap.makit.ValueBubblePosition;
      /**
       * Gets current value of property {@link #getShowCategoryDisplayName showCategoryDisplayName}.
       *
       * Whether to display category's display name on the Value Bubble
       *
       * Default value is `true`.
       */
      getShowCategoryDisplayName(): boolean;
      /**
       * Gets current value of property {@link #getShowCategoryText showCategoryText}.
       *
       * Whether to display category's text on the Value Bubble
       *
       * Default value is `true`.
       */
      getShowCategoryText(): boolean;
      /**
       * Gets current value of property {@link #getShowLegendLabel showLegendLabel}.
       *
       * Whether to display legend's label (Pie or Donut chart only)
       *
       * Default value is `true`.
       */
      getShowLegendLabel(): boolean;
      /**
       * Gets current value of property {@link #getShowNullValue showNullValue}.
       *
       * Whether to render null item on the Value Bubble
       *
       * Default value is `true`.
       */
      getShowNullValue(): boolean;
      /**
       * Gets current value of property {@link #getShowValueDisplayName showValueDisplayName}.
       *
       * Whether to display value's display name on the Value Bubble
       *
       * Default value is `true`.
       */
      getShowValueDisplayName(): boolean;
      /**
       * Gets current value of property {@link #getShowValueOnPieChart showValueOnPieChart}.
       *
       * Whether to display value on Pie or Donut chart
       *
       * Default value is `false`.
       */
      getShowValueOnPieChart(): boolean;
      /**
       * Gets current value of property {@link #getStyle style}.
       *
       * Value Bubble positioning style (All the chart types except: Pie/Donut/HBar chart)
       *
       * Default value is `Top`.
       */
      getStyle(): sap.makit.ValueBubbleStyle;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * Whether the Value Bubble is visible
       *
       * Default value is `true`.
       */
      getVisible(): boolean;
      /**
       * Sets a new value for property {@link #getPosition position}.
       *
       * The position of the Value Bubble (Pie or Donut chart only)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Top`.
       */
      setPosition(
        /**
         * New value for property `position`
         */
        sPosition?: sap.makit.ValueBubblePosition
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getShowCategoryDisplayName showCategoryDisplayName}.
       *
       * Whether to display category's display name on the Value Bubble
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowCategoryDisplayName(
        /**
         * New value for property `showCategoryDisplayName`
         */
        bShowCategoryDisplayName?: boolean
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getShowCategoryText showCategoryText}.
       *
       * Whether to display category's text on the Value Bubble
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowCategoryText(
        /**
         * New value for property `showCategoryText`
         */
        bShowCategoryText?: boolean
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getShowLegendLabel showLegendLabel}.
       *
       * Whether to display legend's label (Pie or Donut chart only)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowLegendLabel(
        /**
         * New value for property `showLegendLabel`
         */
        bShowLegendLabel?: boolean
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getShowNullValue showNullValue}.
       *
       * Whether to render null item on the Value Bubble
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowNullValue(
        /**
         * New value for property `showNullValue`
         */
        bShowNullValue?: boolean
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getShowValueDisplayName showValueDisplayName}.
       *
       * Whether to display value's display name on the Value Bubble
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowValueDisplayName(
        /**
         * New value for property `showValueDisplayName`
         */
        bShowValueDisplayName?: boolean
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getShowValueOnPieChart showValueOnPieChart}.
       *
       * Whether to display value on Pie or Donut chart
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowValueOnPieChart(
        /**
         * New value for property `showValueOnPieChart`
         */
        bShowValueOnPieChart?: boolean
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getStyle style}.
       *
       * Value Bubble positioning style (All the chart types except: Pie/Donut/HBar chart)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Top`.
       */
      setStyle(
        /**
         * New value for property `style`
         */
        sStyle?: sap.makit.ValueBubbleStyle
      ): sap.makit.ValueBubble;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * Whether the Value Bubble is visible
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setVisible(
        /**
         * New value for property `visible`
         */
        bVisible?: boolean
      ): sap.makit.ValueBubble;
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Enumeration for chart type
     */
    enum ChartType {
      /**
       * Horizontal table bar chart
       */
      Bar,
      /**
       * Bubble chart
       */
      Bubble,
      /**
       * Column chart
       */
      Column,
      /**
       * Donut chart
       */
      Donut,
      /**
       * 100% stacked column chart
       */
      HundredPercentStackedColumn,
      /**
       * Line chart
       */
      Line,
      /**
       * Pie chart
       */
      Pie,
      /**
       * Stacked column chart
       */
      StackedColumn,
      /**
       * Waterfall Bar chart
       */
      WaterfallBar,
      /**
       * Waterfall Column chart
       */
      WaterfallColumn
    }
    /**
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Enumeration for legend position.
     */
    enum LegendPosition {
      /**
       * Legend location is on the bottom of the chart
       */
      Bottom,
      /**
       * Legend location is on the left of the chart
       */
      Left,
      /**
       * Hide the legend
       */
      None,
      /**
       * Legend location is on the right of the chart
       */
      Right,
      /**
       * Legend location is on the top of the chart
       */
      Top
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Enumeration for sort order
     */
    enum SortOrder {
      /**
       * Ascending sort
       */
      Ascending,
      /**
       * Descending sort
       */
      Descending,
      /**
       * No sorting
       */
      None,
      /**
       * Partially sort
       */
      Partial
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Position for Value Bubble only applies to Pie/Donut Chart.
     */
    enum ValueBubblePosition {
      /**
       * Value Bubble position set to beside the chart
       */
      Side,
      /**
       * Value Bubble position set to above the chart
       */
      Top
    }
    /**
     * @SINCE 1.8
     * @deprecated (since 1.38) - MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control
     * will not be supported anymore from 1.38.
     *
     * Enumeration for Value Bubble's positioning style. This applies all chart types except Pie/Donut/HBar
     * chart.
     */
    enum ValueBubbleStyle {
      /**
       * The Value Bubble floats on the touch point, chart's size will not change.
       */
      Float,
      /**
       * The Value Bubble floats and snaps above of the chart, chart's size will not change.
       */
      FloatTop,
      /**
       * The Value Bubble snaps above of the chart, the chart height will adjust accordingly.
       */
      Top
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/makit/Axis": undefined;

    "sap/makit/Category": undefined;

    "sap/makit/CategoryAxis": undefined;

    "sap/makit/Chart": undefined;

    "sap/makit/Column": undefined;

    "sap/makit/CombinationChart": undefined;

    "sap/makit/Layer": undefined;

    "sap/makit/MakitLib": undefined;

    "sap/makit/Row": undefined;

    "sap/makit/Series": undefined;

    "sap/makit/Value": undefined;

    "sap/makit/ValueAxis": undefined;

    "sap/makit/ValueBubble": undefined;
  }
}
