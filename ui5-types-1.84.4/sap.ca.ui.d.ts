// For Library Version: 1.84.0

declare namespace sap {
  namespace ca {
    /**
     * @deprecated (since 1.28) - All controls and helpers in this library meanwhile have been deprecated. Check
     * the individual classes or packages for actual replacements.
     *
     * SAP UI library: Fiori Commons
     */
    namespace ui {
      /**
       * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and VizFrame in 1.24. The UI5
       * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
       * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
       * not be supported anymore from 1.24.
       */
      namespace charts {
        /**
         * Types of chart supported in the sap.ca library.
         */
        namespace ChartType {
          /**
           * A Bar Chart using "viz/bar" chart
           */
          export const Bar: undefined;

          /**
           * A Bubble chart using "viz/bubble" chart
           */
          export const Bubble: undefined;

          /**
           * A Column Chart using "viz/column" chart
           */
          export const Column: undefined;

          /**
           * A Combination chart using "viz/combination" chart
           */
          export const Combination: undefined;

          /**
           * A Dual Stacked Bar Chart using "viz/dual_stacked_bar" chart
           */
          export const DualStackedBar: undefined;

          /**
           * A 100% Dual Stacked Bar Chart using "viz/100_dual_stacked_bar" chart
           */
          export const DualStackedBar100: undefined;

          /**
           * A Dual Stacked Column Chart using "viz/dual_stacked_column" chart
           */
          export const DualStackedColumn: undefined;

          /**
           * A 100% Dual Stacked Column Chart using "viz/100_dual_stacked_column" chart
           */
          export const DualStackedColumn100: undefined;

          /**
           * A Line Chart using "viz/line" chart
           */
          export const Line: undefined;

          /**
           * A Stacked Bar Chart using "viz/stacked_bar" chart
           */
          export const StackedBar: undefined;

          /**
           * A 100% Stacked Bar Chart using "viz/100_stacked_bar" chart
           */
          export const StackedBar100: undefined;

          /**
           * A Stacked Column Chart using "viz/stacked_column" chart
           */
          export const StackedColumn: undefined;

          /**
           * A 100% Stacked Column Chart using "viz/100_stacked_column" chart
           */
          export const StackedColumn100: undefined;
        }

        interface $BarListItemSettings extends sap.m.$ListItemBaseSettings {
          /**
           * List item label
           */
          axis?: string;

          /**
           * List item label
           */
          group?: string;

          /**
           * List item value
           */
          value?: string;
        }

        interface $BubbleChartSettings extends sap.ca.ui.charts.$ChartSettings {
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the dataLabelFormatter for any formatting
           * of data label
           *
           * Defines the formater string for the dataLabel value to be displayed on the bubble
           */
          dataLabelFormat?: any;

          /**
           * Flag to display the title for the chart, default is set to false
           */
          showTitle?: boolean;

          /**
           * Flag to set the visibility of x-axis label, default is set to true.
           */
          showXAxisLabel?: boolean;

          /**
           * Flag to define x-axis scale range.
           */
          xAxisFixedRange?: boolean;

          /**
           * Define the minimum value for x-axis scale
           */
          xAxisMinValue?: number;

          /**
           * Define the max value for x-axis scale
           */
          xAxisMaxValue?: number;

          /**
           * Flag to set the visibility of y-axis label, default is set to true.
           */
          showYAxisLabel?: boolean;

          /**
           * Flag to define y-axis scale range.
           */
          yAxisFixedRange?: boolean;

          /**
           * Define the minimum value for y-axis scale
           */
          yAxisMinValue?: number;

          /**
           * Define the max value for y-axis scale
           */
          yAxisMaxValue?: number;

          /**
           * The minimum size of the bubble before a label gets displayed
           */
          minimumLabelSize?: number;

          /**
           * Show / Hide the visibility the size legend of the chart
           */
          showSizeLegend?: boolean;

          /**
           * Set x-axis title
           */
          xAxisTitle?: string;

          /**
           * Set y-axis title
           */
          yAxisTitle?: string;

          /**
           * Flag to show custom data labels
           */
          showCustomLabels?: boolean;

          /**
           * Set the binding property values for the labels as array eg. ['property1','property2']. Only 2 labels
           * are supported.
           */
          labelProperty?: object;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the xAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Set the formatter function for the x-axis.
           */
          xAxisFormatFunction?: object;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the xAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Set the format string for x-axis
           */
          xAxisFormatString?: string;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the yAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Set the formatter function for the y-axis.
           */
          yAxisFormatFunction?: object;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the yAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Set the format string for y-axis
           */
          yAxisFormatString?: string;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the plotAreaAxisTooltipFormatter
           *
           * Flag to set the formatting of the tooltip on x-axis
           */
          axisTooltipFormatString?: any;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the plotAreaAxisTooltipFormatter
           *
           * Set the formatter function for the axis labels or tooltips
           */
          axisFormatFunction?: object;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Deprecated aggregation, do not use. Left for compatibility purposes.
           */
          content?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface $ChartSettings extends sap.ui.core.$ControlSettings {
          /**
           * Target width for the charting area
           */
          width?: sap.ui.core.CSSSize;

          /**
           * Target height for the charting area
           */
          height?: sap.ui.core.CSSSize;

          /**
           * Viz Dataset that will hold the data to be displayed.
           */
          dataset?: object;

          /**
           * Type of viz chart that will be displayed.
           */
          chartType?: string;

          /**
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           */
          minShapeSize?: sap.ui.core.CSSSize;

          /**
           * User friendly name for the current chart type
           */
          label?: string;

          /**
           * Title of the chart
           */
          title?: string;

          /**
           * Icon of the Chart
           */
          icon?: string;

          /**
           * Flag to show the second axis. Default is true
           */
          secondAxisVisible?: boolean;

          /**
           * Hide / Show the legend of the chart
           */
          showLegend?: boolean;

          /**
           * Define the selection mode for the chart
           */
          selectionMode?: sap.ca.ui.charts.ChartSelectionMode;

          /**
           * Hide / Show the hover background
           */
          showHoverBackground?: boolean;

          /**
           * Hide / Show the CVOM tooltip
           */
          showTooltip?: boolean;

          /**
           * Hide / Show the sap.ca popover that gives information about what is available
           */
          showPopover?: boolean;

          /**
           * Flag to display data values on the bar, default is set to true
           */
          showDataLabel?: boolean;

          /**
           * Formatter for Y Axis Label
           */
          yAxisLabelFormatter?: string;

          /**
           * Formatter for Y Axis 2 Label
           */
          yAxis2LabelFormatter?: string;

          /**
           * Formatter for X Axis Label
           */
          xAxisLabelFormatter?: string;

          /**
           * Formatter for X Axis 2 Label
           */
          xAxis2LabelFormatter?: string;

          /**
           * Formatter for plotArea Axis Tooltip in bubble charts
           */
          plotAreaAxisTooltipFormatter?: object;

          /**
           * Formatter for toolTip
           */
          tooltipFormatter?: object;

          /**
           * Formatter for Data Label
           */
          dataLabelFormatter?: object;

          /**
           * Formatter for popover
           */
          popoverFormatter?: object;

          /**
           * Formatter for group label in the popover
           */
          popoverGroupFormatter?: string;

          /**
           * Function that will be called when the chart is rendered in order to let the application decide which
           * color should be use for each bar. The method should take the following parameter as input : - The data
           * context of the current datashape And as output : - One of sap.ca.ui.charts.ChartSemanticColor type
           */
          chartSemanticColorFormatter?: object;

          /**
           * Retrieve the internal viz chart to allow some operation on it.
           */
          internalVizChart?: sap.ui.core.Control;

          /**
           * Retrieve the chart popover instance to allow some operation on it.
           */
          chartPopOver?: sap.ui.core.Control;

          /**
           * custom subHeader for popover
           */
          popoverSubHeader?: sap.ui.core.Control;

          /**
           * custom footer for popover
           */
          popoverFooter?: sap.ui.core.Control;

          /**
           * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
           */
          advancedChartSettings?: object;

          /**
           * You can use it if stacked bar width are to big. Disabled by default
           */
          stackedChartWidthEnhancer?: boolean;

          /**
           * Control tree to display when there is no data available
           */
          noData?: sap.ui.core.Control;

          /**
           * Event is fired when the data point is selected/unselected on the chart
           */
          selectDataPoint?: Function;

          /**
           * Event is fired before the popover is opened
           */
          popoverBeforeOpen?: Function;

          /**
           * Event is fired after the popover is opened
           */
          popoverAfterOpen?: Function;
        }

        interface $ChartToolBarSettings extends sap.ui.core.$ControlSettings {
          /**
           * Display or not the personalization icon into the ChartToolBar
           */
          showPersonalization?: boolean;

          /**
           * Display or not the full screen icon into the ChartToolBar
           */
          showFullScreen?: boolean;

          /**
           * Display the chart and the toolbar in full screen or normal mode
           */
          fullScreen?: boolean;

          /**
           * Display or not the legend on the contained charts.
           */
          showLegend?: boolean;

          /**
           * The string to display instead of the select boxes if there are no dimensions to display
           */
          chartTitle?: string;

          /**
           * Model path to the dimensions to display into the first select box
           */
          firstDimensionPath?: string;

          /**
           * Model path to the first select box items key
           */
          firstDimensionKeyPath?: string;

          /**
           * Model path to the first select box items displayed text
           */
          firstDimensionTextPath?: string;

          /**
           * Model path to the dimensions to display into the second select box
           */
          secondDimensionPath?: string;

          /**
           * Model path to the second select box items key
           */
          secondDimensionKeyPath?: string;

          /**
           * Model path to the displayed select box items displayed text
           */
          secondDimensionTextPath?: string;

          /**
           * Event fired when a user clicks on the personalization icon
           */
          personalizationPressed?: Function;

          /**
           * Event fired when a user selects an item from the first select box. This event is providing the item selectedKey
           * as parameter
           */
          firstDimensionKeySelected?: Function;

          /**
           * Event fired when a user selects an item from the second select box. This event is providing the item
           * selectedKey as parameter
           */
          secondDimensionKeySelected?: Function;

          /**
           * The charts to display. Theses charts are sap.ui.core/Control that implements the following properties:
           * - showLegend: boolean - icon: string (expected a string such as "sap-icon://line-chart")
           *
           * If the inserted control is an sap.m.Table, the icon is automatically set to "sap-icon://table-chart"
           */
          charts?: sap.ui.core.Control[] | sap.ui.core.Control;

          /**
           * The composite sap.m.Bar used for rendering select boxes and icons.
           */
          toolBar?: sap.m.Bar;

          /**
           * The ui5 control displayed
           */
          selectedChart?: sap.ui.core.Control | string;

          /**
           * The sap.m.Select inserted into the toolBar for handling the firstDimension selection
           */
          firstDimensionSelect?: sap.m.Select | string;

          /**
           * The sap.m.Select inserted into the toolBar for handling the secondDimension selection
           */
          secondDimensionSelect?: sap.m.Select | string;
        }

        interface $ClusterListItemSettings extends sap.m.$ListItemBaseSettings {
          /**
           * Title
           */
          title?: string;

          /**
           * Items
           */
          items?: object;
        }

        interface $CombinedChartSettings
          extends sap.ca.ui.charts.$ChartSettings {
          /**
           * Data of the Chart
           */
          data?: any;

          /**
           * Shapes for the internal viz chart primary axis
           */
          primaryAxis?: any;

          /**
           * Shapes for the internal viz chart second axis
           */
          secondAxis?: any;

          /**
           * scroll area that contains the graph plot
           */
          scrollArea?: sap.m.ScrollContainer;
        }

        interface $HorizontalBarChartSettings
          extends sap.ca.ui.charts.$ChartSettings {
          /**
           * The data to be used by the chart
           */
          data?: object;

          /**
           * The DOM ID where the chart will be added. Deprecated
           */
          container?: string;

          /**
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           */
          barHeight?: number;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * The scroll container
           */
          scroll?: sap.m.ScrollContainer;

          /**
           * The internal chart
           */
          horizontalBarChart?: sap.viz.ui5.Bar;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * The vertical area within the scroll container
           */
          verticalArea?: sap.m.VBox;
        }

        interface $LineChartSettings extends sap.ca.ui.charts.$ChartSettings {
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'title' property, do not use as it will be removed
           * in a future release.
           *
           * The title to display on the chart
           */
          chartTitle?: string;

          /**
           * The data format string to use to display the data labels on the graph, this is an array of arrays of
           * Format String following the 'sap.viz.ui5.Line' documentation
           */
          dataLabelFormat?: any;

          /**
           * @deprecated (since 1.0.0) - Please use the 'dataLabelFormatter' property, do not use as it will be removed
           * in a future release.
           *
           * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile
           * device, only applies if the chart width is not set
           */
          minTouchSize?: string;

          /**
           * @deprecated (since 1.0.0) - Please use the 'minShapeSize' property, do not use as it will be removed
           * in a future release.
           *
           * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile
           * device, only applies if the chart width is not set
           */
          minTouchWidth?: string;

          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'showDataLabel' property, do not use as it will be
           * removed in a future release.
           *
           * Show the data label value on the chart
           */
          showLabel?: boolean;

          /**
           * @deprecated (since 1.0.0) - Feature does not work correctly yet.
           *
           * Show the chart scroll context, (the preview of the whole chart as a small image when scrolling)
           */
          showScrollContext?: boolean;

          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'dataset' property, do not use as it will be removed
           * in a future release.
           *
           * Allow the Dataset for the chart to be set, includes the dimensions, and measures, any data binding is
           * removed, this will disable the chart scroll context view, use the dataset settings if you want the scroll
           * context to work
           */
          chartDataset?: any;

          /**
           * @deprecated (since 1.0.0) - This is property is not needed any more, do not use as it will be removed
           * in a future release.
           *
           * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally
           * two datasets are created, one for the main chart and one for the scroll context)
           */
          datasetSettings?: any;

          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'datasetSettings' property, do not use as it will be
           * removed in a future release.
           *
           * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally
           * two datasets are created, one for the main chart and one for the scroll context)
           */
          chartDatasetSettings?: any;

          /**
           * @deprecated (since 1.0.0) - Please use the binding on 'dataset', do not use as it will be removed in
           * a future release.
           *
           * Allow the data path for binding the model to the dimensions and measures to be set
           */
          dataPath?: string;

          /**
           * @deprecated (since 1.0.0) - Please use the binding on 'dataset', do not use as it will be removed in
           * a future release.
           *
           * Allow the chart data to be set, that is the measure and dimension values
           */
          data?: any;

          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'data' property, do not use as it will be removed in
           * a future release.
           *
           * Allow the chart data to be set, that is the measure and dimension values
           */
          chartBusinessData?: any;

          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Use a delayed resize event to cause the chart to render when navigated to after resize when in the background
           */
          useDelayedResize?: boolean;

          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Event fired when the details button is pressed on the selected Datapoint Popover
           */
          onDetailsSelected?: Function;

          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * The vertical layout
           */
          vertical?: sap.m.VBox;
        }

        interface $StackedHorizontalBarChartSettings
          extends sap.ca.ui.charts.$ChartSettings {
          /**
           * @deprecated (since 1.16.3) - type has been deprecated since 1.16.3. Please use the chartType instead.
           *
           * Mapped to charType property.
           */
          type?: string;

          /**
           * @deprecated (since 1.16.3) - minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize
           * instead.
           *
           * Mapped to minShapeSize property.
           */
          minTouchSize?: sap.ui.core.CSSSize;

          /**
           * Defines the formater string for the dataLabel value to be diaplyed on the bubble e.g [ [##]]
           */
          dataLabelFormat?: any;

          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Deprecated aggregation. Left for compatibility purposes.
           */
          content?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface $StackedVerticalColumnChartSettings
          extends sap.ca.ui.charts.$ChartSettings {
          /**
           * @deprecated (since 1.16.3) - type has been deprecated since 1.16.3. Please use the chartType instead.
           *
           * Mapped to charType property.
           */
          type?: string;

          /**
           * @deprecated (since 1.16.3) - minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize
           * instead.
           *
           * Mapped to minShapeSize property.
           */
          minTouchSize?: sap.ui.core.CSSSize;

          /**
           * @deprecated (since 1.16.3) - dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter
           * instead.
           *
           * Does not do anything anymore
           */
          dataLabelFormat?: any;

          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Deprecated aggregation. Left for compatibility purposes.
           */
          content?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface $VerticalBarChartSettings
          extends sap.ca.ui.charts.$ChartSettings {
          /**
           * The data to be used by the chart
           */
          data?: object;

          /**
           * The DOM ID where the chart will be added. Deprecated
           */
          container?: string;

          /**
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           */
          barWidth?: number;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Deprecated aggregation. Left for compatibility purposes.
           */
          content?: sap.ui.core.Control[] | sap.ui.core.Control;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * The scroll container
           */
          scroll?: sap.m.ScrollContainer;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * The chart
           */
          verticalBarChart?: sap.viz.ui5.Column;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * The vertical layout
           */
          verticalArea?: sap.m.VBox;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * The display list item consists of a label and a value.
         */
        class BarListItem extends sap.m.ListItemBase {
          /**
           * Constructor for a new charts/BarListItem.
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
            mSettings?: $BarListItemSettings
          );

          /**
           * Creates a new subclass of class sap.ca.ui.charts.BarListItem with name `sClassName` and enriches it with
           * the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
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
           * Gets current value of property {@link #getAxis axis}.
           *
           * List item label
           */
          getAxis(): string;
          /**
           * Gets current value of property {@link #getGroup group}.
           *
           * List item label
           */
          getGroup(): string;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.BarListItem.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * List item value
           */
          getValue(): string;
          /**
           * Sets a new value for property {@link #getAxis axis}.
           *
           * List item label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAxis(
            /**
             * New value for property `axis`
             */
            sAxis?: string
          ): sap.ca.ui.charts.BarListItem;
          /**
           * Sets a new value for property {@link #getGroup group}.
           *
           * List item label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setGroup(
            /**
             * New value for property `group`
             */
            sGroup?: string
          ): sap.ca.ui.charts.BarListItem;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * List item value
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue(
            /**
             * New value for property `value`
             */
            sValue?: string
          ): sap.ca.ui.charts.BarListItem;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Bubble chart.
         */
        class BubbleChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/BubbleChart.
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
            mSettings?: $BubbleChartSettings
          );
          /**
           * Clears the array of saved vertical lines.
           */
          clearVerticalLines: undefined;

          /**
           * Draws a vertical line at the given x axis value. Also display the text.
           */
          drawVerticalLineAt: undefined;

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ca.ui.charts.BubbleChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.BubbleChart with name `sClassName` and enriches it with
           * the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the plotAreaAxisTooltipFormatter
           *
           * Gets current value of property {@link #getAxisFormatFunction axisFormatFunction}.
           *
           * Set the formatter function for the axis labels or tooltips
           */
          getAxisFormatFunction(): object;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the plotAreaAxisTooltipFormatter
           *
           * Gets current value of property {@link #getAxisTooltipFormatString axisTooltipFormatString}.
           *
           * Flag to set the formatting of the tooltip on x-axis
           */
          getAxisTooltipFormatString(): any;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getContent content}.
           *
           * Deprecated aggregation, do not use. Left for compatibility purposes.
           */
          getContent(): sap.ui.core.Control[];
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the dataLabelFormatter for any formatting
           * of data label
           *
           * Gets current value of property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * Defines the formater string for the dataLabel value to be displayed on the bubble
           */
          getDataLabelFormat(): any;
          /**
           * Gets current value of property {@link #getLabelProperty labelProperty}.
           *
           * Set the binding property values for the labels as array eg. ['property1','property2']. Only 2 labels
           * are supported.
           */
          getLabelProperty(): object;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.BubbleChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getMinimumLabelSize minimumLabelSize}.
           *
           * The minimum size of the bubble before a label gets displayed
           *
           * Default value is `60`.
           */
          getMinimumLabelSize(): number;
          /**
           * Gets current value of property {@link #getShowCustomLabels showCustomLabels}.
           *
           * Flag to show custom data labels
           *
           * Default value is `false`.
           */
          getShowCustomLabels(): boolean;
          /**
           * Gets current value of property {@link #getShowSizeLegend showSizeLegend}.
           *
           * Show / Hide the visibility the size legend of the chart
           *
           * Default value is `false`.
           */
          getShowSizeLegend(): boolean;
          /**
           * Gets current value of property {@link #getShowTitle showTitle}.
           *
           * Flag to display the title for the chart, default is set to false
           *
           * Default value is `false`.
           */
          getShowTitle(): boolean;
          /**
           * Gets current value of property {@link #getShowXAxisLabel showXAxisLabel}.
           *
           * Flag to set the visibility of x-axis label, default is set to true.
           *
           * Default value is `true`.
           */
          getShowXAxisLabel(): boolean;
          /**
           * Gets current value of property {@link #getShowYAxisLabel showYAxisLabel}.
           *
           * Flag to set the visibility of y-axis label, default is set to true.
           *
           * Default value is `true`.
           */
          getShowYAxisLabel(): boolean;
          /**
           * Gets current value of property {@link #getXAxisFixedRange xAxisFixedRange}.
           *
           * Flag to define x-axis scale range.
           *
           * Default value is `false`.
           */
          getXAxisFixedRange(): boolean;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the xAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Gets current value of property {@link #getXAxisFormatFunction xAxisFormatFunction}.
           *
           * Set the formatter function for the x-axis.
           */
          getXAxisFormatFunction(): object;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the xAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Gets current value of property {@link #getXAxisFormatString xAxisFormatString}.
           *
           * Set the format string for x-axis
           */
          getXAxisFormatString(): string;
          /**
           * Gets current value of property {@link #getXAxisMaxValue xAxisMaxValue}.
           *
           * Define the max value for x-axis scale
           *
           * Default value is `0`.
           */
          getXAxisMaxValue(): number;
          /**
           * Gets current value of property {@link #getXAxisMinValue xAxisMinValue}.
           *
           * Define the minimum value for x-axis scale
           *
           * Default value is `0`.
           */
          getXAxisMinValue(): number;
          /**
           * Gets current value of property {@link #getXAxisTitle xAxisTitle}.
           *
           * Set x-axis title
           */
          getXAxisTitle(): string;
          /**
           * Gets current value of property {@link #getYAxisFixedRange yAxisFixedRange}.
           *
           * Flag to define y-axis scale range.
           *
           * Default value is `false`.
           */
          getYAxisFixedRange(): boolean;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the yAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Gets current value of property {@link #getYAxisFormatFunction yAxisFormatFunction}.
           *
           * Set the formatter function for the y-axis.
           */
          getYAxisFormatFunction(): object;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the yAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Gets current value of property {@link #getYAxisFormatString yAxisFormatString}.
           *
           * Set the format string for y-axis
           */
          getYAxisFormatString(): string;
          /**
           * Gets current value of property {@link #getYAxisMaxValue yAxisMaxValue}.
           *
           * Define the max value for y-axis scale
           *
           * Default value is `0`.
           */
          getYAxisMaxValue(): number;
          /**
           * Gets current value of property {@link #getYAxisMinValue yAxisMinValue}.
           *
           * Define the minimum value for y-axis scale
           *
           * Default value is `0`.
           */
          getYAxisMinValue(): number;
          /**
           * Gets current value of property {@link #getYAxisTitle yAxisTitle}.
           *
           * Set y-axis title
           */
          getYAxisTitle(): string;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfContent(
            /**
             * The content whose index is looked for
             */
            oContent: sap.ui.core.Control
          ): number;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Inserts a content into the aggregation {@link #getContent content}.
           */
          insertContent(
            /**
             * The content to insert; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control,
            /**
             * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
             * is inserted at position 0; for a value greater than the current size of the aggregation, the content
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Removes all the controls from the aggregation {@link #getContent content}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllContent(): sap.ui.core.Control[];
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Removes a content from the aggregation {@link #getContent content}.
           */
          removeContent(
            /**
             * The content to remove or its index or id
             */
            vContent: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the plotAreaAxisTooltipFormatter
           *
           * Sets a new value for property {@link #getAxisFormatFunction axisFormatFunction}.
           *
           * Set the formatter function for the axis labels or tooltips
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAxisFormatFunction(
            /**
             * New value for property `axisFormatFunction`
             */
            oAxisFormatFunction?: object
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the plotAreaAxisTooltipFormatter
           *
           * Sets a new value for property {@link #getAxisTooltipFormatString axisTooltipFormatString}.
           *
           * Flag to set the formatting of the tooltip on x-axis
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAxisTooltipFormatString(
            /**
             * New value for property `axisTooltipFormatString`
             */
            oAxisTooltipFormatString?: any
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the dataLabelFormatter for any formatting
           * of data label
           *
           * Sets a new value for property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * Defines the formater string for the dataLabel value to be displayed on the bubble
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDataLabelFormat(
            /**
             * New value for property `dataLabelFormat`
             */
            oDataLabelFormat?: any
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getLabelProperty labelProperty}.
           *
           * Set the binding property values for the labels as array eg. ['property1','property2']. Only 2 labels
           * are supported.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLabelProperty(
            /**
             * New value for property `labelProperty`
             */
            oLabelProperty?: object
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getMinimumLabelSize minimumLabelSize}.
           *
           * The minimum size of the bubble before a label gets displayed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `60`.
           */
          setMinimumLabelSize(
            /**
             * New value for property `minimumLabelSize`
             */
            iMinimumLabelSize?: number
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getShowCustomLabels showCustomLabels}.
           *
           * Flag to show custom data labels
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowCustomLabels(
            /**
             * New value for property `showCustomLabels`
             */
            bShowCustomLabels?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getShowSizeLegend showSizeLegend}.
           *
           * Show / Hide the visibility the size legend of the chart
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowSizeLegend(
            /**
             * New value for property `showSizeLegend`
             */
            bShowSizeLegend?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getShowTitle showTitle}.
           *
           * Flag to display the title for the chart, default is set to false
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowTitle(
            /**
             * New value for property `showTitle`
             */
            bShowTitle?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getShowXAxisLabel showXAxisLabel}.
           *
           * Flag to set the visibility of x-axis label, default is set to true.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowXAxisLabel(
            /**
             * New value for property `showXAxisLabel`
             */
            bShowXAxisLabel?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getShowYAxisLabel showYAxisLabel}.
           *
           * Flag to set the visibility of y-axis label, default is set to true.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowYAxisLabel(
            /**
             * New value for property `showYAxisLabel`
             */
            bShowYAxisLabel?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getXAxisFixedRange xAxisFixedRange}.
           *
           * Flag to define x-axis scale range.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setXAxisFixedRange(
            /**
             * New value for property `xAxisFixedRange`
             */
            bXAxisFixedRange?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the xAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Sets a new value for property {@link #getXAxisFormatFunction xAxisFormatFunction}.
           *
           * Set the formatter function for the x-axis.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setXAxisFormatFunction(
            /**
             * New value for property `xAxisFormatFunction`
             */
            oXAxisFormatFunction?: object
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the xAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Sets a new value for property {@link #getXAxisFormatString xAxisFormatString}.
           *
           * Set the format string for x-axis
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setXAxisFormatString(
            /**
             * New value for property `xAxisFormatString`
             */
            sXAxisFormatString?: string
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getXAxisMaxValue xAxisMaxValue}.
           *
           * Define the max value for x-axis scale
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setXAxisMaxValue(
            /**
             * New value for property `xAxisMaxValue`
             */
            fXAxisMaxValue?: number
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getXAxisMinValue xAxisMinValue}.
           *
           * Define the minimum value for x-axis scale
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setXAxisMinValue(
            /**
             * New value for property `xAxisMinValue`
             */
            fXAxisMinValue?: number
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getXAxisTitle xAxisTitle}.
           *
           * Set x-axis title
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setXAxisTitle(
            /**
             * New value for property `xAxisTitle`
             */
            sXAxisTitle?: string
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getYAxisFixedRange yAxisFixedRange}.
           *
           * Flag to define y-axis scale range.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setYAxisFixedRange(
            /**
             * New value for property `yAxisFixedRange`
             */
            bYAxisFixedRange?: boolean
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the yAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Sets a new value for property {@link #getYAxisFormatFunction yAxisFormatFunction}.
           *
           * Set the formatter function for the y-axis.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setYAxisFormatFunction(
            /**
             * New value for property `yAxisFormatFunction`
             */
            oYAxisFormatFunction?: object
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now. Use the yAxisLabelFormatter for any formatting
           * of the axis labels
           *
           * Sets a new value for property {@link #getYAxisFormatString yAxisFormatString}.
           *
           * Set the format string for y-axis
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setYAxisFormatString(
            /**
             * New value for property `yAxisFormatString`
             */
            sYAxisFormatString?: string
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getYAxisMaxValue yAxisMaxValue}.
           *
           * Define the max value for y-axis scale
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setYAxisMaxValue(
            /**
             * New value for property `yAxisMaxValue`
             */
            fYAxisMaxValue?: number
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getYAxisMinValue yAxisMinValue}.
           *
           * Define the minimum value for y-axis scale
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setYAxisMinValue(
            /**
             * New value for property `yAxisMinValue`
             */
            fYAxisMinValue?: number
          ): sap.ca.ui.charts.BubbleChart;
          /**
           * Sets a new value for property {@link #getYAxisTitle yAxisTitle}.
           *
           * Set y-axis title
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setYAxisTitle(
            /**
             * New value for property `yAxisTitle`
             */
            sYAxisTitle?: string
          ): sap.ca.ui.charts.BubbleChart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Chart implementation on top of sap.viz that takes care of common functionality. - Embedding in a scroll
         * container - Common color palette - Minimum bar / dot / blip ... size - Integration with ChartToolbar
         * and ChartPopover
         */
        class Chart extends sap.ui.core.Control {
          /**
           * Constructor for a new charts/Chart.
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
           * Creates an id for an Element prefixed with the control id
           */
          _createId(): string;
          /**
           * Setter for property `advancedChartSettings`.
           */
          advancedChartSettings(
            /**
             * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
             */
            settings: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:popoverAfterOpen popoverAfterOpen} event of
           * this `sap.ca.ui.charts.Chart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.Chart` itself.
           *
           * Event is fired after the popover is opened
           */
          attachPopoverAfterOpen(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.Chart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:popoverBeforeOpen popoverBeforeOpen} event of
           * this `sap.ca.ui.charts.Chart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.Chart` itself.
           *
           * Event is fired before the popover is opened
           */
          attachPopoverBeforeOpen(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.Chart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectDataPoint selectDataPoint} event of this
           * `sap.ca.ui.charts.Chart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.Chart` itself.
           *
           * Event is fired when the data point is selected/unselected on the chart
           */
          attachSelectDataPoint(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.Chart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Binds property {@link #getLabel label} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
           * of the possible properties of `oBindingInfo`
           */
          bindLabel(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `dataLabelFormatter`.
           */
          dataLabelFormatter(
            /**
             * new value for property `dataLabelFormatter` [formatterArray] must be a 2 dimensions array of formatters.
             * [ [ measure 1 of X Axis , ..., [measure n of X Axis] ], [ measure 1 of X Axis 2 , ..., [measure n of
             * X Axis 2] ] Each of these formatters can be: - a custom formatting function - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
             * If for an axis, formatters count < measures count, then first formatter of axis will be used for other
             * measures.
             */
            formatterArray: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:popoverAfterOpen popoverAfterOpen} event of
           * this `sap.ca.ui.charts.Chart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPopoverAfterOpen(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:popoverBeforeOpen popoverBeforeOpen} event
           * of this `sap.ca.ui.charts.Chart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPopoverBeforeOpen(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:selectDataPoint selectDataPoint} event of
           * this `sap.ca.ui.charts.Chart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachSelectDataPoint(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.Chart with name `sClassName` and enriches it with the
           * information contained in `oClassInfo`.
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
           * Fires event {@link #event:popoverAfterOpen popoverAfterOpen} to attached listeners.
           */
          firePopoverAfterOpen(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Fires event {@link #event:popoverBeforeOpen popoverBeforeOpen} to attached listeners.
           */
          firePopoverBeforeOpen(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Fires event {@link #event:selectDataPoint selectDataPoint} to attached listeners.
           */
          fireSelectDataPoint(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Gets current value of property {@link #getAdvancedChartSettings advancedChartSettings}.
           *
           * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
           */
          getAdvancedChartSettings(): object;
          /**
           * Getter for property `chartPopOver`. chart PopOver
           *
           * Default value is empty/`undefined`
           */
          getChartPopOver(): sap.m.ResponsivePopover;
          /**
           * Gets current value of property {@link #getChartSemanticColorFormatter chartSemanticColorFormatter}.
           *
           * Function that will be called when the chart is rendered in order to let the application decide which
           * color should be use for each bar. The method should take the following parameter as input : - The data
           * context of the current datashape And as output : - One of sap.ca.ui.charts.ChartSemanticColor type
           */
          getChartSemanticColorFormatter(): object;
          /**
           * Gets current value of property {@link #getChartType chartType}.
           *
           * Type of viz chart that will be displayed.
           *
           * Default value is `'Bar'`.
           */
          getChartType(): string;
          /**
           * Gets current value of property {@link #getDataLabelFormatter dataLabelFormatter}.
           *
           * Formatter for Data Label
           */
          getDataLabelFormatter(): object;
          /**
           * Getter for property `dataset`. Viz Dataset that will hold the data to be displayed.
           *
           * Default value is empty/`undefined`
           */
          getDataset(): object;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * Target height for the charting area
           *
           * Default value is `'100%'`.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getIcon icon}.
           *
           * Icon of the Chart
           *
           * Default value is `empty string`.
           */
          getIcon(): string;
          /**
           * Getter for property `internalVizChart`. internal Viz Chart
           *
           * Default value is empty/`undefined`
           */
          getInternalVizChart(): object;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * User friendly name for the current chart type
           *
           * Default value is `empty string`.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.Chart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getMinShapeSize minShapeSize}.
           *
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           *
           * Default value is `'48px'`.
           */
          getMinShapeSize(): sap.ui.core.CSSSize;
          /**
           * Getter for aggregation noData in Viz Chart. Control tree to display when there is no data available
           */
          getNoData(): sap.ui.core.Control;
          /**
           * Gets current value of property {@link #getPlotAreaAxisTooltipFormatter plotAreaAxisTooltipFormatter}.
           *
           * Formatter for plotArea Axis Tooltip in bubble charts
           */
          getPlotAreaAxisTooltipFormatter(): object;
          /**
           * Gets current value of property {@link #getPopoverFooter popoverFooter}.
           *
           * custom footer for popover
           */
          getPopoverFooter(): sap.ui.core.Control;
          /**
           * Gets current value of property {@link #getPopoverFormatter popoverFormatter}.
           *
           * Formatter for popover
           */
          getPopoverFormatter(): object;
          /**
           * Gets current value of property {@link #getPopoverGroupFormatter popoverGroupFormatter}.
           *
           * Formatter for group label in the popover
           */
          getPopoverGroupFormatter(): string;
          /**
           * Gets current value of property {@link #getPopoverSubHeader popoverSubHeader}.
           *
           * custom subHeader for popover
           */
          getPopoverSubHeader(): sap.ui.core.Control;
          /**
           * Gets current value of property {@link #getSecondAxisVisible secondAxisVisible}.
           *
           * Flag to show the second axis. Default is true
           *
           * Default value is `true`.
           */
          getSecondAxisVisible(): boolean;
          /**
           * Getter for property `selectionMode`.
           */
          getSelectionMode(): sap.ca.ui.charts.ChartSelectionMode;
          /**
           * Gets current value of property {@link #getShowDataLabel showDataLabel}.
           *
           * Flag to display data values on the bar, default is set to true
           *
           * Default value is `true`.
           */
          getShowDataLabel(): boolean;
          /**
           * Gets current value of property {@link #getShowHoverBackground showHoverBackground}.
           *
           * Hide / Show the hover background
           *
           * Default value is `false`.
           */
          getShowHoverBackground(): boolean;
          /**
           * Gets current value of property {@link #getShowLegend showLegend}.
           *
           * Hide / Show the legend of the chart
           *
           * Default value is `true`.
           */
          getShowLegend(): boolean;
          /**
           * Gets current value of property {@link #getShowPopover showPopover}.
           *
           * Hide / Show the sap.ca popover that gives information about what is available
           *
           * Default value is `true`.
           */
          getShowPopover(): boolean;
          /**
           * Gets current value of property {@link #getShowTooltip showTooltip}.
           *
           * Hide / Show the CVOM tooltip
           *
           * Default value is `false`.
           */
          getShowTooltip(): boolean;
          /**
           * Gets current value of property {@link #getStackedChartWidthEnhancer stackedChartWidthEnhancer}.
           *
           * You can use it if stacked bar width are to big. Disabled by default
           *
           * Default value is `false`.
           */
          getStackedChartWidthEnhancer(): boolean;
          /**
           * Gets current value of property {@link #getTitle title}.
           *
           * Title of the chart
           *
           * Default value is `empty string`.
           */
          getTitle(): string;
          /**
           * Gets current value of property {@link #getTooltipFormatter tooltipFormatter}.
           *
           * Formatter for toolTip
           */
          getTooltipFormatter(): object;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * Target width for the charting area
           *
           * Default value is `'100%'`.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getXAxis2LabelFormatter xAxis2LabelFormatter}.
           *
           * Formatter for X Axis 2 Label
           */
          getXAxis2LabelFormatter(): string;
          /**
           * Gets current value of property {@link #getXAxisLabelFormatter xAxisLabelFormatter}.
           *
           * Formatter for X Axis Label
           */
          getXAxisLabelFormatter(): string;
          /**
           * Gets current value of property {@link #getYAxis2LabelFormatter yAxis2LabelFormatter}.
           *
           * Formatter for Y Axis 2 Label
           */
          getYAxis2LabelFormatter(): string;
          /**
           * Gets current value of property {@link #getYAxisLabelFormatter yAxisLabelFormatter}.
           *
           * Formatter for Y Axis Label
           */
          getYAxisLabelFormatter(): string;
          /**
           * Setter for property `minShapeSize`. Note: doesn't work for the bubble chart's bubbles sizes.
           */
          minShapeSize(
            /**
             * Minimum shape size in pixels.
             */
            sMinShapeSize: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `popoverFormatter`.
           */
          popoverFormatter(
            /**
             * new value for property `popoverFormatter` [formatterArray] must be a 2 dimensions array of formatters.
             * [ [ measure 1 of X Axis , ..., [measure n of X Axis] ], [ measure 1 of X Axis 2 , ..., [measure n of
             * X Axis 2] ] Each of these formatters can be: - a custom formatting function - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
             * If for an axis, formatters count < measures count, then first formatter of axis will be used for other
             * measures.
             */
            formatterArray: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `popoverGroupFormatter`.
           */
          popoverGroupFormatter(
            /**
             * new value for property `popoverGroupFormatter` formatter can be: - a custom formatting function - a value
             * of enum sap.ca.ui.charts.DefaultFormatterFunction
             */
            formatter: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getAdvancedChartSettings advancedChartSettings}.
           *
           * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAdvancedChartSettings(
            /**
             * New value for property `advancedChartSettings`
             */
            oAdvancedChartSettings?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `chartPopOver`.
           */
          setChartPopOver(
            /**
             * new value for property `chartPopOver`
             */
            oChartPopOver: sap.m.ResponsivePopover
          ): sap.m.ResponsivePopover;
          /**
           * Sets a new value for property {@link #getChartSemanticColorFormatter chartSemanticColorFormatter}.
           *
           * Function that will be called when the chart is rendered in order to let the application decide which
           * color should be use for each bar. The method should take the following parameter as input : - The data
           * context of the current datashape And as output : - One of sap.ca.ui.charts.ChartSemanticColor type
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setChartSemanticColorFormatter(
            /**
             * New value for property `chartSemanticColorFormatter`
             */
            oChartSemanticColorFormatter?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getChartType chartType}.
           *
           * Type of viz chart that will be displayed.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'Bar'`.
           */
          setChartType(
            /**
             * New value for property `chartType`
             */
            sChartType?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getDataLabelFormatter dataLabelFormatter}.
           *
           * Formatter for Data Label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDataLabelFormatter(
            /**
             * New value for property `dataLabelFormatter`
             */
            oDataLabelFormatter?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `dataset`.
           *
           * Default value is empty/`undefined`
           */
          setDataset(
            /**
             * new value for property `dataset`
             */
            oDataset: sap.viz.ui5.data.Dataset
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `height`.
           *
           * Default value is `100%`
           */
          setHeight(
            /**
             * new value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getIcon icon}.
           *
           * Icon of the Chart
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setIcon(
            /**
             * New value for property `icon`
             */
            sIcon?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `internalVizChart`.
           *
           * Default value is `oChart`
           */
          setInternalVizChart(
            /**
             * new value for property `title`
             */
            oInternalVizChart: any
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * User friendly name for the current chart type
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setLabel(
            /**
             * New value for property `label`
             */
            sLabel?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getMinShapeSize minShapeSize}.
           *
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'48px'`.
           */
          setMinShapeSize(
            /**
             * New value for property `minShapeSize`
             */
            sMinShapeSize?: sap.ui.core.CSSSize
          ): sap.ca.ui.charts.Chart;
          /**
           * Catch the setModel call and make sure we refresh the size of the chart.
           */
          // @ts-ignore
          setModel(
            /**
             * the model to be set or `null` or `undefined`
             */
            oModel: sap.ui.model.Model
          ): sap.ca.ui.charts.Chart;
          /**
           * setter for aggregation noData in Viz Chart. Control tree to display when there is no data available
           */
          setNoData(
            /**
             * new value for aggregation noData
             */
            oControl: sap.ui.core.Control
          ): void;
          /**
           * Setter for property `plotAreaAxisTooltipFormatter`.
           */
          setPlotAreaAxisTooltipFormatter(
            /**
             * new value for property `plotAreaAxisTooltipFormatter` This is the tooltip for "bubbles" of bubble chart.
             * [formatterArray] must be an array of 2 formatters (one for X Axis, one for Y axis). Each of these formatters
             * can be: - a custom formatting function - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
             */
            formatterArray?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * setter for footer in the Popover.
           */
          setPopoverFooter(
            /**
             * new value for footer
             */
            oFooter: sap.m.Bar
          ): void;
          /**
           * Sets a new value for property {@link #getPopoverFormatter popoverFormatter}.
           *
           * Formatter for popover
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPopoverFormatter(
            /**
             * New value for property `popoverFormatter`
             */
            oPopoverFormatter?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getPopoverGroupFormatter popoverGroupFormatter}.
           *
           * Formatter for group label in the popover
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPopoverGroupFormatter(
            /**
             * New value for property `popoverGroupFormatter`
             */
            sPopoverGroupFormatter?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * setter for subHeader in the Popover.
           */
          setPopoverSubHeader(
            /**
             * new value for sub header
             */
            oSubHeader: sap.m.Bar
          ): void;
          /**
           * Sets a new value for property {@link #getSecondAxisVisible secondAxisVisible}.
           *
           * Flag to show the second axis. Default is true
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSecondAxisVisible(
            /**
             * New value for property `secondAxisVisible`
             */
            bSecondAxisVisible?: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `selectionMode`.
           *
           * Default value is `Multi`
           */
          setSelectionMode(
            /**
             * new value for property `selectionMode`
             */
            sSelectionMode: sap.ca.ui.charts.ChartSelectionMode
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getShowDataLabel showDataLabel}.
           *
           * Flag to display data values on the bar, default is set to true
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowDataLabel(
            /**
             * New value for property `showDataLabel`
             */
            bShowDataLabel?: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getShowHoverBackground showHoverBackground}.
           *
           * Hide / Show the hover background
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowHoverBackground(
            /**
             * New value for property `showHoverBackground`
             */
            bShowHoverBackground?: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `showLegend`.
           *
           * Default value is `true`
           */
          setShowLegend(
            /**
             * new value for property `showLegend`
             */
            bShowLegend: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getShowPopover showPopover}.
           *
           * Hide / Show the sap.ca popover that gives information about what is available
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowPopover(
            /**
             * New value for property `showPopover`
             */
            bShowPopover?: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `showTooltip`.
           *
           * Default value is `false`
           */
          setShowTooltip(
            /**
             * new value for property `showTooltip`
             */
            bShowTooltip: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getStackedChartWidthEnhancer stackedChartWidthEnhancer}.
           *
           * You can use it if stacked bar width are to big. Disabled by default
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setStackedChartWidthEnhancer(
            /**
             * New value for property `stackedChartWidthEnhancer`
             */
            bStackedChartWidthEnhancer?: boolean
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `title`.
           *
           * Default value is `Chart`
           */
          setTitle(
            /**
             * new value for property `title`
             */
            sTitle: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getTooltipFormatter tooltipFormatter}.
           *
           * Formatter for toolTip
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTooltipFormatter(
            /**
             * New value for property `tooltipFormatter`
             */
            oTooltipFormatter?: object
          ): sap.ca.ui.charts.Chart;
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
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getXAxis2LabelFormatter xAxis2LabelFormatter}.
           *
           * Formatter for X Axis 2 Label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setXAxis2LabelFormatter(
            /**
             * New value for property `xAxis2LabelFormatter`
             */
            sXAxis2LabelFormatter?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getXAxisLabelFormatter xAxisLabelFormatter}.
           *
           * Formatter for X Axis Label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setXAxisLabelFormatter(
            /**
             * New value for property `xAxisLabelFormatter`
             */
            sXAxisLabelFormatter?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getYAxis2LabelFormatter yAxis2LabelFormatter}.
           *
           * Formatter for Y Axis 2 Label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setYAxis2LabelFormatter(
            /**
             * New value for property `yAxis2LabelFormatter`
             */
            sYAxis2LabelFormatter?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Sets a new value for property {@link #getYAxisLabelFormatter yAxisLabelFormatter}.
           *
           * Formatter for Y Axis Label
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setYAxisLabelFormatter(
            /**
             * New value for property `yAxisLabelFormatter`
             */
            sYAxisLabelFormatter?: string
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `tooltipFormatter`.
           */
          tooltipFormatter(
            /**
             * new value for property `tooltipFormatter` [formatterArray] must be a 2 dimensions array of formatters.
             * [ [ measure 1 of X Axis , ..., [measure n of X Axis] ], [ measure 1 of X Axis 2 , ..., [measure n of
             * X Axis 2] ] Each of these formatters can be: - a custom formatting function - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
             * If for an axis, formatters count < measures count, then first formatter of axis will be used for other
             * measures.
             */
            formatterArray: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Unbinds property {@link #getLabel label} from model data.
           */
          unbindLabel(): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `xAxis2LabelFormatter`.
           */
          xAxis2LabelFormatter(
            /**
             * new value for property `xAxis2LabelFormatter` formatter can be: - a custom formatting function - a value
             * of enum sap.ca.ui.charts.DefaultFormatterFunction
             */
            formatter: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `xAxisLabelFormatter`.
           */
          xAxisLabelFormatter(
            /**
             * new value for property `xAxisLabelFormatter` formatter can be: - a custom formatting function - a value
             * of enum sap.ca.ui.charts.DefaultFormatterFunction
             */
            formatter: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `yAxis2LabelFormatter`.
           */
          yAxis2LabelFormatter(
            /**
             * new value for property `yAxis2LabelFormatter` formatter can be: - a custom formatting function - a value
             * of enum sap.ca.ui.charts.DefaultFormatterFunction
             */
            formatter: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Setter for property `yAxisLabelFormatter`.
           */
          yAxisLabelFormatter(
            /**
             * new value for property `yAxisLabelFormatter` formatter can be: - a custom formatting function - a value
             * of enum sap.ca.ui.charts.DefaultFormatterFunction
             */
            formatter: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:popoverAfterOpen popoverAfterOpen} event of
           * this `sap.ca.ui.charts.Chart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.Chart` itself.
           *
           * Event is fired after the popover is opened
           */
          attachPopoverAfterOpen(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.Chart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:popoverBeforeOpen popoverBeforeOpen} event of
           * this `sap.ca.ui.charts.Chart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.Chart` itself.
           *
           * Event is fired before the popover is opened
           */
          attachPopoverBeforeOpen(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.Chart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectDataPoint selectDataPoint} event of this
           * `sap.ca.ui.charts.Chart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.Chart` itself.
           *
           * Event is fired when the data point is selected/unselected on the chart
           */
          attachSelectDataPoint(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.Chart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.Chart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts and the ChartToolBar have been replaced with sap.viz and vizFrame
         * in 1.24. The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the
         * new charts. Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
         * This control will not be supported anymore from 1.24.
         *
         * ToolBar used for displaying one chart amongst several and provide additional features: - 2 select boxes
         * for selecting dimensions - fullscreen toggle - personalization icon - showLegend toggle
         */
        class ChartToolBar extends sap.ui.core.Control {
          /**
           * Constructor for a new charts/ChartToolBar.
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
            mSettings?: $ChartToolBarSettings
          );

          /**
           * Adds some chart to the aggregation {@link #getCharts charts}.
           */
          addChart(
            /**
             * The chart to add; if empty, nothing is inserted
             */
            oChart: sap.ui.core.Control
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:firstDimensionKeySelected firstDimensionKeySelected}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.ChartToolBar` itself.
           *
           * Event fired when a user selects an item from the first select box. This event is providing the item selectedKey
           * as parameter
           */
          attachFirstDimensionKeySelected(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.ChartToolBar` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:personalizationPressed personalizationPressed}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.ChartToolBar` itself.
           *
           * Event fired when a user clicks on the personalization icon
           */
          attachPersonalizationPressed(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.ChartToolBar` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:secondDimensionKeySelected secondDimensionKeySelected}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.ChartToolBar` itself.
           *
           * Event fired when a user selects an item from the second select box. This event is providing the item
           * selectedKey as parameter
           */
          attachSecondDimensionKeySelected(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.ChartToolBar` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Destroys all the charts in the aggregation {@link #getCharts charts}.
           */
          destroyCharts(): sap.ca.ui.charts.ChartToolBar;
          /**
           * Destroys the toolBar in the aggregation {@link #getToolBar toolBar}.
           */
          destroyToolBar(): sap.ca.ui.charts.ChartToolBar;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:firstDimensionKeySelected firstDimensionKeySelected}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachFirstDimensionKeySelected(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:personalizationPressed personalizationPressed}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPersonalizationPressed(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:secondDimensionKeySelected secondDimensionKeySelected}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachSecondDimensionKeySelected(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.ChartToolBar with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:firstDimensionKeySelected firstDimensionKeySelected} to attached listeners.
           */
          fireFirstDimensionKeySelected(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Fires event {@link #event:personalizationPressed personalizationPressed} to attached listeners.
           */
          firePersonalizationPressed(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Fires event {@link #event:secondDimensionKeySelected secondDimensionKeySelected} to attached listeners.
           */
          fireSecondDimensionKeySelected(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Gets content of aggregation {@link #getCharts charts}.
           *
           * The charts to display. Theses charts are sap.ui.core/Control that implements the following properties:
           * - showLegend: boolean - icon: string (expected a string such as "sap-icon://line-chart")
           *
           * If the inserted control is an sap.m.Table, the icon is automatically set to "sap-icon://table-chart"
           */
          getCharts(): sap.ui.core.Control[];
          /**
           * Gets current value of property {@link #getChartTitle chartTitle}.
           *
           * The string to display instead of the select boxes if there are no dimensions to display
           *
           * Default value is `empty string`.
           */
          getChartTitle(): string;
          /**
           * Gets current value of property {@link #getFirstDimensionKeyPath firstDimensionKeyPath}.
           *
           * Model path to the first select box items key
           *
           * Default value is `empty string`.
           */
          getFirstDimensionKeyPath(): string;
          /**
           * Gets current value of property {@link #getFirstDimensionPath firstDimensionPath}.
           *
           * Model path to the dimensions to display into the first select box
           *
           * Default value is `empty string`.
           */
          getFirstDimensionPath(): string;
          /**
           * ID of the element which is the current target of the association {@link #getFirstDimensionSelect firstDimensionSelect},
           * or `null`.
           */
          getFirstDimensionSelect(): sap.ui.core.ID;
          /**
           * Gets current value of property {@link #getFirstDimensionTextPath firstDimensionTextPath}.
           *
           * Model path to the first select box items displayed text
           *
           * Default value is `empty string`.
           */
          getFirstDimensionTextPath(): string;
          /**
           * Gets current value of property {@link #getFullScreen fullScreen}.
           *
           * Display the chart and the toolbar in full screen or normal mode
           *
           * Default value is `false`.
           */
          getFullScreen(): boolean;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.ChartToolBar.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getSecondDimensionKeyPath secondDimensionKeyPath}.
           *
           * Model path to the second select box items key
           *
           * Default value is `empty string`.
           */
          getSecondDimensionKeyPath(): string;
          /**
           * Gets current value of property {@link #getSecondDimensionPath secondDimensionPath}.
           *
           * Model path to the dimensions to display into the second select box
           *
           * Default value is `empty string`.
           */
          getSecondDimensionPath(): string;
          /**
           * ID of the element which is the current target of the association {@link #getSecondDimensionSelect secondDimensionSelect},
           * or `null`.
           */
          getSecondDimensionSelect(): sap.ui.core.ID;
          /**
           * Gets current value of property {@link #getSecondDimensionTextPath secondDimensionTextPath}.
           *
           * Model path to the displayed select box items displayed text
           *
           * Default value is `empty string`.
           */
          getSecondDimensionTextPath(): string;
          /**
           * ID of the element which is the current target of the association {@link #getSelectedChart selectedChart},
           * or `null`.
           */
          getSelectedChart(): sap.ui.core.ID;
          /**
           * Gets current value of property {@link #getShowFullScreen showFullScreen}.
           *
           * Display or not the full screen icon into the ChartToolBar
           *
           * Default value is `false`.
           */
          getShowFullScreen(): boolean;
          /**
           * Gets current value of property {@link #getShowLegend showLegend}.
           *
           * Display or not the legend on the contained charts.
           *
           * Default value is `true`.
           */
          getShowLegend(): boolean;
          /**
           * Gets current value of property {@link #getShowPersonalization showPersonalization}.
           *
           * Display or not the personalization icon into the ChartToolBar
           *
           * Default value is `false`.
           */
          getShowPersonalization(): boolean;
          /**
           * Gets content of aggregation {@link #getToolBar toolBar}.
           *
           * The composite sap.m.Bar used for rendering select boxes and icons.
           */
          getToolBar(): sap.m.Bar;
          /**
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCharts charts}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfChart(
            /**
             * The chart whose index is looked for
             */
            oChart: sap.ui.core.Control
          ): number;
          /**
           * Inserts a chart into the aggregation {@link #getCharts charts}.
           */
          insertChart(
            /**
             * The chart to insert; if empty, nothing is inserted
             */
            oChart: sap.ui.core.Control,
            /**
             * The `0`-based index the chart should be inserted at; for a negative value of `iIndex`, the chart is inserted
             * at position 0; for a value greater than the current size of the aggregation, the chart is inserted at
             * the last position
             */
            iIndex: number
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Removes all the controls from the aggregation {@link #getCharts charts}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllCharts(): sap.ui.core.Control[];
          /**
           * Removes a chart from the aggregation {@link #getCharts charts}.
           */
          removeChart(
            /**
             * The chart to remove or its index or id
             */
            vChart: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * Sets a new value for property {@link #getChartTitle chartTitle}.
           *
           * The string to display instead of the select boxes if there are no dimensions to display
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setChartTitle(
            /**
             * New value for property `chartTitle`
             */
            sChartTitle?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getFirstDimensionKeyPath firstDimensionKeyPath}.
           *
           * Model path to the first select box items key
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setFirstDimensionKeyPath(
            /**
             * New value for property `firstDimensionKeyPath`
             */
            sFirstDimensionKeyPath?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getFirstDimensionPath firstDimensionPath}.
           *
           * Model path to the dimensions to display into the first select box
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setFirstDimensionPath(
            /**
             * New value for property `firstDimensionPath`
             */
            sFirstDimensionPath?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets the associated {@link #getFirstDimensionSelect firstDimensionSelect}.
           */
          setFirstDimensionSelect(
            /**
             * ID of an element which becomes the new target of this firstDimensionSelect association; alternatively,
             * an element instance may be given
             */
            oFirstDimensionSelect: sap.ui.core.ID | sap.m.Select
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getFirstDimensionTextPath firstDimensionTextPath}.
           *
           * Model path to the first select box items displayed text
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setFirstDimensionTextPath(
            /**
             * New value for property `firstDimensionTextPath`
             */
            sFirstDimensionTextPath?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getFullScreen fullScreen}.
           *
           * Display the chart and the toolbar in full screen or normal mode
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setFullScreen(
            /**
             * New value for property `fullScreen`
             */
            bFullScreen?: boolean
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getSecondDimensionKeyPath secondDimensionKeyPath}.
           *
           * Model path to the second select box items key
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setSecondDimensionKeyPath(
            /**
             * New value for property `secondDimensionKeyPath`
             */
            sSecondDimensionKeyPath?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getSecondDimensionPath secondDimensionPath}.
           *
           * Model path to the dimensions to display into the second select box
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setSecondDimensionPath(
            /**
             * New value for property `secondDimensionPath`
             */
            sSecondDimensionPath?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets the associated {@link #getSecondDimensionSelect secondDimensionSelect}.
           */
          setSecondDimensionSelect(
            /**
             * ID of an element which becomes the new target of this secondDimensionSelect association; alternatively,
             * an element instance may be given
             */
            oSecondDimensionSelect: sap.ui.core.ID | sap.m.Select
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getSecondDimensionTextPath secondDimensionTextPath}.
           *
           * Model path to the displayed select box items displayed text
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setSecondDimensionTextPath(
            /**
             * New value for property `secondDimensionTextPath`
             */
            sSecondDimensionTextPath?: string
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets the associated {@link #getSelectedChart selectedChart}.
           */
          setSelectedChart(
            /**
             * ID of an element which becomes the new target of this selectedChart association; alternatively, an element
             * instance may be given
             */
            oSelectedChart: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getShowFullScreen showFullScreen}.
           *
           * Display or not the full screen icon into the ChartToolBar
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowFullScreen(
            /**
             * New value for property `showFullScreen`
             */
            bShowFullScreen?: boolean
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getShowLegend showLegend}.
           *
           * Display or not the legend on the contained charts.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowLegend(
            /**
             * New value for property `showLegend`
             */
            bShowLegend?: boolean
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets a new value for property {@link #getShowPersonalization showPersonalization}.
           *
           * Display or not the personalization icon into the ChartToolBar
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowPersonalization(
            /**
             * New value for property `showPersonalization`
             */
            bShowPersonalization?: boolean
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Sets the aggregated {@link #getToolBar toolBar}.
           */
          setToolBar(
            /**
             * The toolBar to set
             */
            oToolBar: sap.m.Bar
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:firstDimensionKeySelected firstDimensionKeySelected}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.ChartToolBar` itself.
           *
           * Event fired when a user selects an item from the first select box. This event is providing the item selectedKey
           * as parameter
           */
          attachFirstDimensionKeySelected(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.ChartToolBar` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:personalizationPressed personalizationPressed}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.ChartToolBar` itself.
           *
           * Event fired when a user clicks on the personalization icon
           */
          attachPersonalizationPressed(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.ChartToolBar` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:secondDimensionKeySelected secondDimensionKeySelected}
           * event of this `sap.ca.ui.charts.ChartToolBar`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.ChartToolBar` itself.
           *
           * Event fired when a user selects an item from the second select box. This event is providing the item
           * selectedKey as parameter
           */
          attachSecondDimensionKeySelected(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.ChartToolBar` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.ChartToolBar;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and VizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * The cluster list item consists of a title and items.
         */
        class ClusterListItem extends sap.m.ListItemBase {
          /**
           * Constructor for a new charts/ClusterListItem.
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
            mSettings?: $ClusterListItemSettings
          );

          /**
           * Creates a new subclass of class sap.ca.ui.charts.ClusterListItem with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
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
           * Gets current value of property {@link #getItems items}.
           *
           * Items
           */
          getItems(): object;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.ClusterListItem.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getTitle title}.
           *
           * Title
           */
          getTitle(): string;
          /**
           * Sets a new value for property {@link #getItems items}.
           *
           * Items
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setItems(
            /**
             * New value for property `items`
             */
            oItems?: object
          ): sap.ca.ui.charts.ClusterListItem;
          /**
           * Sets a new value for property {@link #getTitle title}.
           *
           * Title
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTitle(
            /**
             * New value for property `title`
             */
            sTitle?: string
          ): sap.ca.ui.charts.ClusterListItem;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Allows you to create a chart using vertical bars and lines to represent the data
         */
        class CombinedChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/CombinedChart.
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
            mSettings?: $CombinedChartSettings
          );

          /**
           * Destroys the scrollArea in the aggregation {@link #getScrollArea scrollArea}.
           */
          destroyScrollArea(): sap.ca.ui.charts.CombinedChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.CombinedChart with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * Gets current value of property {@link #getData data}.
           *
           * Data of the Chart
           */
          getData(): any;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.CombinedChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getPrimaryAxis primaryAxis}.
           *
           * Shapes for the internal viz chart primary axis
           */
          getPrimaryAxis(): any;
          /**
           * Gets content of aggregation {@link #getScrollArea scrollArea}.
           *
           * scroll area that contains the graph plot
           */
          getScrollArea(): sap.m.ScrollContainer;
          /**
           * Gets current value of property {@link #getSecondAxis secondAxis}.
           *
           * Shapes for the internal viz chart second axis
           */
          getSecondAxis(): any;
          /**
           * Sets a new value for property {@link #getData data}.
           *
           * Data of the Chart
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setData(
            /**
             * New value for property `data`
             */
            oData?: any
          ): sap.ca.ui.charts.CombinedChart;
          /**
           * Sets a new value for property {@link #getPrimaryAxis primaryAxis}.
           *
           * Shapes for the internal viz chart primary axis
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPrimaryAxis(
            /**
             * New value for property `primaryAxis`
             */
            oPrimaryAxis?: any
          ): sap.ca.ui.charts.CombinedChart;
          /**
           * Sets the aggregated {@link #getScrollArea scrollArea}.
           */
          setScrollArea(
            /**
             * The scrollArea to set
             */
            oScrollArea: sap.m.ScrollContainer
          ): sap.ca.ui.charts.CombinedChart;
          /**
           * Sets a new value for property {@link #getSecondAxis secondAxis}.
           *
           * Shapes for the internal viz chart second axis
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setSecondAxis(
            /**
             * New value for property `secondAxis`
             */
            oSecondAxis?: any
          ): sap.ca.ui.charts.CombinedChart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Allows you to create a chart using horizontal bars to represent the data
         */
        class HorizontalBarChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/HorizontalBarChart.
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
            mSettings?: $HorizontalBarChartSettings
          );

          /**
           * Destroys the horizontalBarChart in the aggregation {@link #getHorizontalBarChart horizontalBarChart}.
           */
          destroyHorizontalBarChart(): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys the scroll in the aggregation {@link #getScroll scroll}.
           */
          destroyScroll(): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys the verticalArea in the aggregation {@link #getVerticalArea verticalArea}.
           */
          destroyVerticalArea(): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.HorizontalBarChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * Gets current value of property {@link #getBarHeight barHeight}.
           *
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           *
           * Default value is `48`.
           */
          getBarHeight(): number;
          /**
           * Gets current value of property {@link #getContainer container}.
           *
           * The DOM ID where the chart will be added. Deprecated
           *
           * Default value is `'chart'`.
           */
          getContainer(): string;
          /**
           * Gets current value of property {@link #getData data}.
           *
           * The data to be used by the chart
           */
          getData(): object;
          /**
           * Gets content of aggregation {@link #getHorizontalBarChart horizontalBarChart}.
           *
           * The internal chart
           */
          getHorizontalBarChart(): sap.viz.ui5.Bar;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.HorizontalBarChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getScroll scroll}.
           *
           * The scroll container
           */
          getScroll(): sap.m.ScrollContainer;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getVerticalArea verticalArea}.
           *
           * The vertical area within the scroll container
           */
          getVerticalArea(): sap.m.VBox;
          /**
           * Sets a new value for property {@link #getBarHeight barHeight}.
           *
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `48`.
           */
          setBarHeight(
            /**
             * New value for property `barHeight`
             */
            iBarHeight?: number
          ): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * Sets a new value for property {@link #getContainer container}.
           *
           * The DOM ID where the chart will be added. Deprecated
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'chart'`.
           */
          setContainer(
            /**
             * New value for property `container`
             */
            sContainer?: string
          ): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * Sets a new value for property {@link #getData data}.
           *
           * The data to be used by the chart
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setData(
            /**
             * New value for property `data`
             */
            oData?: object
          ): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * Sets the aggregated {@link #getHorizontalBarChart horizontalBarChart}.
           */
          setHorizontalBarChart(
            /**
             * The horizontalBarChart to set
             */
            oHorizontalBarChart: sap.viz.ui5.Bar
          ): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Sets the aggregated {@link #getScroll scroll}.
           */
          setScroll(
            /**
             * The scroll to set
             */
            oScroll: sap.m.ScrollContainer
          ): sap.ca.ui.charts.HorizontalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Sets the aggregated {@link #getVerticalArea verticalArea}.
           */
          setVerticalArea(
            /**
             * The verticalArea to set
             */
            oVerticalArea: sap.m.VBox
          ): sap.ca.ui.charts.HorizontalBarChart;
        }
        /**
         * @SINCE 1.0.0
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Line Chart for the Fiori Project
         */
        class LineChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/LineChart.
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
            mSettings?: $LineChartSettings
          );

          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Attaches event handler `fnFunction` to the {@link #event:onDetailsSelected onDetailsSelected} event of
           * this `sap.ca.ui.charts.LineChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.LineChart` itself.
           *
           * Event fired when the details button is pressed on the selected Datapoint Popover
           */
          attachOnDetailsSelected(
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
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.LineChart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Destroys the vertical in the aggregation {@link #getVertical vertical}.
           */
          destroyVertical(): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Detaches event handler `fnFunction` from the {@link #event:onDetailsSelected onDetailsSelected} event
           * of this `sap.ca.ui.charts.LineChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachOnDetailsSelected(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ca.ui.charts.LineChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.LineChart with name `sClassName` and enriches it with
           * the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Fires event {@link #event:onDetailsSelected onDetailsSelected} to attached listeners.
           */
          fireOnDetailsSelected(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'data' property, do not use as it will be removed in
           * a future release.
           *
           * Gets current value of property {@link #getChartBusinessData chartBusinessData}.
           *
           * Allow the chart data to be set, that is the measure and dimension values
           */
          getChartBusinessData(): any;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'dataset' property, do not use as it will be removed
           * in a future release.
           *
           * Gets current value of property {@link #getChartDataset chartDataset}.
           *
           * Allow the Dataset for the chart to be set, includes the dimensions, and measures, any data binding is
           * removed, this will disable the chart scroll context view, use the dataset settings if you want the scroll
           * context to work
           */
          getChartDataset(): any;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'datasetSettings' property, do not use as it will be
           * removed in a future release.
           *
           * Gets current value of property {@link #getChartDatasetSettings chartDatasetSettings}.
           *
           * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally
           * two datasets are created, one for the main chart and one for the scroll context)
           */
          getChartDatasetSettings(): any;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'title' property, do not use as it will be removed
           * in a future release.
           *
           * Gets current value of property {@link #getChartTitle chartTitle}.
           *
           * The title to display on the chart
           *
           * Default value is `'Line Chart'`.
           */
          getChartTitle(): string;
          /**
           * @deprecated (since 1.0.0) - Please use the binding on 'dataset', do not use as it will be removed in
           * a future release.
           *
           * Gets current value of property {@link #getData data}.
           *
           * Allow the chart data to be set, that is the measure and dimension values
           */
          getData(): any;
          /**
           * Gets current value of property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * The data format string to use to display the data labels on the graph, this is an array of arrays of
           * Format String following the 'sap.viz.ui5.Line' documentation
           *
           * Default value is `'#0'`.
           */
          getDataLabelFormat(): any;
          /**
           * @deprecated (since 1.0.0) - Please use the binding on 'dataset', do not use as it will be removed in
           * a future release.
           *
           * Gets current value of property {@link #getDataPath dataPath}.
           *
           * Allow the data path for binding the model to the dimensions and measures to be set
           */
          getDataPath(): string;
          /**
           * @deprecated (since 1.0.0) - This is property is not needed any more, do not use as it will be removed
           * in a future release.
           *
           * Gets current value of property {@link #getDatasetSettings datasetSettings}.
           *
           * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally
           * two datasets are created, one for the main chart and one for the scroll context)
           */
          getDatasetSettings(): any;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.LineChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @deprecated (since 1.0.0) - Please use the 'dataLabelFormatter' property, do not use as it will be removed
           * in a future release.
           *
           * Gets current value of property {@link #getMinTouchSize minTouchSize}.
           *
           * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile
           * device, only applies if the chart width is not set
           *
           * Default value is `'48px'`.
           */
          getMinTouchSize(): string;
          /**
           * @deprecated (since 1.0.0) - Please use the 'minShapeSize' property, do not use as it will be removed
           * in a future release.
           *
           * Gets current value of property {@link #getMinTouchWidth minTouchWidth}.
           *
           * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile
           * device, only applies if the chart width is not set
           *
           * Default value is `'48px'`.
           */
          getMinTouchWidth(): string;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'showDataLabel' property, do not use as it will be
           * removed in a future release.
           *
           * Gets current value of property {@link #getShowLabel showLabel}.
           *
           * Show the data label value on the chart
           *
           * Default value is `true`.
           */
          getShowLabel(): boolean;
          /**
           * @deprecated (since 1.0.0) - Feature does not work correctly yet.
           *
           * Gets current value of property {@link #getShowScrollContext showScrollContext}.
           *
           * Show the chart scroll context, (the preview of the whole chart as a small image when scrolling)
           *
           * Default value is `false`.
           */
          getShowScrollContext(): boolean;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Gets current value of property {@link #getUseDelayedResize useDelayedResize}.
           *
           * Use a delayed resize event to cause the chart to render when navigated to after resize when in the background
           *
           * Default value is `false`.
           */
          getUseDelayedResize(): boolean;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Gets content of aggregation {@link #getVertical vertical}.
           *
           * The vertical layout
           */
          getVertical(): sap.m.VBox;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'data' property, do not use as it will be removed in
           * a future release.
           *
           * Sets a new value for property {@link #getChartBusinessData chartBusinessData}.
           *
           * Allow the chart data to be set, that is the measure and dimension values
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setChartBusinessData(
            /**
             * New value for property `chartBusinessData`
             */
            oChartBusinessData?: any
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'dataset' property, do not use as it will be removed
           * in a future release.
           *
           * Sets a new value for property {@link #getChartDataset chartDataset}.
           *
           * Allow the Dataset for the chart to be set, includes the dimensions, and measures, any data binding is
           * removed, this will disable the chart scroll context view, use the dataset settings if you want the scroll
           * context to work
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setChartDataset(
            /**
             * New value for property `chartDataset`
             */
            oChartDataset?: any
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'datasetSettings' property, do not use as it will be
           * removed in a future release.
           *
           * Sets a new value for property {@link #getChartDatasetSettings chartDatasetSettings}.
           *
           * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally
           * two datasets are created, one for the main chart and one for the scroll context)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setChartDatasetSettings(
            /**
             * New value for property `chartDatasetSettings`
             */
            oChartDatasetSettings?: any
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'title' property, do not use as it will be removed
           * in a future release.
           *
           * Sets a new value for property {@link #getChartTitle chartTitle}.
           *
           * The title to display on the chart
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'Line Chart'`.
           */
          setChartTitle(
            /**
             * New value for property `chartTitle`
             */
            sChartTitle?: string
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Please use the binding on 'dataset', do not use as it will be removed in
           * a future release.
           *
           * Sets a new value for property {@link #getData data}.
           *
           * Allow the chart data to be set, that is the measure and dimension values
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setData(
            /**
             * New value for property `data`
             */
            oData?: any
          ): sap.ca.ui.charts.LineChart;
          /**
           * Sets a new value for property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * The data format string to use to display the data labels on the graph, this is an array of arrays of
           * Format String following the 'sap.viz.ui5.Line' documentation
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'#0'`.
           */
          setDataLabelFormat(
            /**
             * New value for property `dataLabelFormat`
             */
            oDataLabelFormat?: any
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Please use the binding on 'dataset', do not use as it will be removed in
           * a future release.
           *
           * Sets a new value for property {@link #getDataPath dataPath}.
           *
           * Allow the data path for binding the model to the dimensions and measures to be set
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDataPath(
            /**
             * New value for property `dataPath`
             */
            sDataPath?: string
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - This is property is not needed any more, do not use as it will be removed
           * in a future release.
           *
           * Sets a new value for property {@link #getDatasetSettings datasetSettings}.
           *
           * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally
           * two datasets are created, one for the main chart and one for the scroll context)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDatasetSettings(
            /**
             * New value for property `datasetSettings`
             */
            oDatasetSettings?: any
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Please use the 'dataLabelFormatter' property, do not use as it will be removed
           * in a future release.
           *
           * Sets a new value for property {@link #getMinTouchSize minTouchSize}.
           *
           * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile
           * device, only applies if the chart width is not set
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'48px'`.
           */
          setMinTouchSize(
            /**
             * New value for property `minTouchSize`
             */
            sMinTouchSize?: string
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Please use the 'minShapeSize' property, do not use as it will be removed
           * in a future release.
           *
           * Sets a new value for property {@link #getMinTouchWidth minTouchWidth}.
           *
           * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile
           * device, only applies if the chart width is not set
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'48px'`.
           */
          setMinTouchWidth(
            /**
             * New value for property `minTouchWidth`
             */
            sMinTouchWidth?: string
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - This is a copy of the 'showDataLabel' property, do not use as it will be
           * removed in a future release.
           *
           * Sets a new value for property {@link #getShowLabel showLabel}.
           *
           * Show the data label value on the chart
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
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Feature does not work correctly yet.
           *
           * Sets a new value for property {@link #getShowScrollContext showScrollContext}.
           *
           * Show the chart scroll context, (the preview of the whole chart as a small image when scrolling)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowScrollContext(
            /**
             * New value for property `showScrollContext`
             */
            bShowScrollContext?: boolean
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Sets a new value for property {@link #getUseDelayedResize useDelayedResize}.
           *
           * Use a delayed resize event to cause the chart to render when navigated to after resize when in the background
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setUseDelayedResize(
            /**
             * New value for property `useDelayedResize`
             */
            bUseDelayedResize?: boolean
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Sets the aggregated {@link #getVertical vertical}.
           */
          setVertical(
            /**
             * The vertical to set
             */
            oVertical: sap.m.VBox
          ): sap.ca.ui.charts.LineChart;
          /**
           * @deprecated (since 1.0.0) - Do not use as it will be removed in a future release.
           *
           * Attaches event handler `fnFunction` to the {@link #event:onDetailsSelected onDetailsSelected} event of
           * this `sap.ca.ui.charts.LineChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ca.ui.charts.LineChart` itself.
           *
           * Event fired when the details button is pressed on the selected Datapoint Popover
           */
          attachOnDetailsSelected(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ca.ui.charts.LineChart` itself
             */
            oListener?: object
          ): sap.ca.ui.charts.LineChart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Stacked Horizontal Bar Chart wrapper around the viz StackedBarChart / MultipleStackedBarChart. To be
         * used in conjunction with the chart toolbar.
         */
        class StackedHorizontalBarChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/StackedHorizontalBarChart.
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
            mSettings?: $StackedHorizontalBarChartSettings
          );

          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control
          ): sap.ca.ui.charts.StackedHorizontalBarChart;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ca.ui.charts.StackedHorizontalBarChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.StackedHorizontalBarChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Gets content of aggregation {@link #getContent content}.
           *
           * Deprecated aggregation. Left for compatibility purposes.
           */
          getContent(): sap.ui.core.Control[];
          /**
           * Gets current value of property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * Defines the formater string for the dataLabel value to be diaplyed on the bubble e.g [ [##]]
           *
           * Default value is `[["##"]]`.
           */
          getDataLabelFormat(): any;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.StackedHorizontalBarChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @deprecated (since 1.16.3) - minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize
           * instead.
           *
           * Gets current value of property {@link #getMinTouchSize minTouchSize}.
           *
           * Mapped to minShapeSize property.
           *
           * Default value is `'48px'`.
           */
          getMinTouchSize(): sap.ui.core.CSSSize;
          /**
           * @deprecated (since 1.16.3) - type has been deprecated since 1.16.3. Please use the chartType instead.
           *
           * Gets current value of property {@link #getType type}.
           *
           * Mapped to charType property.
           *
           * Default value is `'StackedBar'`.
           */
          getType(): string;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfContent(
            /**
             * The content whose index is looked for
             */
            oContent: sap.ui.core.Control
          ): number;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Inserts a content into the aggregation {@link #getContent content}.
           */
          insertContent(
            /**
             * The content to insert; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control,
            /**
             * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
             * is inserted at position 0; for a value greater than the current size of the aggregation, the content
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ca.ui.charts.StackedHorizontalBarChart;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Removes all the controls from the aggregation {@link #getContent content}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllContent(): sap.ui.core.Control[];
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Removes a content from the aggregation {@link #getContent content}.
           */
          removeContent(
            /**
             * The content to remove or its index or id
             */
            vContent: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * Sets a new value for property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * Defines the formater string for the dataLabel value to be diaplyed on the bubble e.g [ [##]]
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `[["##"]]`.
           */
          setDataLabelFormat(
            /**
             * New value for property `dataLabelFormat`
             */
            oDataLabelFormat?: any
          ): sap.ca.ui.charts.StackedHorizontalBarChart;
          /**
           * @deprecated (since 1.16.3) - minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize
           * instead.
           *
           * Sets a new value for property {@link #getMinTouchSize minTouchSize}.
           *
           * Mapped to minShapeSize property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'48px'`.
           */
          setMinTouchSize(
            /**
             * New value for property `minTouchSize`
             */
            sMinTouchSize?: sap.ui.core.CSSSize
          ): sap.ca.ui.charts.StackedHorizontalBarChart;
          /**
           * @deprecated (since 1.16.3) - type has been deprecated since 1.16.3. Please use the chartType instead.
           *
           * Sets a new value for property {@link #getType type}.
           *
           * Mapped to charType property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'StackedBar'`.
           */
          setType(
            /**
             * New value for property `type`
             */
            sType?: string
          ): sap.ca.ui.charts.StackedHorizontalBarChart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Stacked Vertical Column Chart wrapper around the viz StackedColumnChart / MultipleStackedColumnChart.
         * To be used in conjunction with the chart toolbar.
         */
        class StackedVerticalColumnChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/StackedVerticalColumnChart.
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
            mSettings?: $StackedVerticalColumnChartSettings
          );

          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control
          ): sap.ca.ui.charts.StackedVerticalColumnChart;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ca.ui.charts.StackedVerticalColumnChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.StackedVerticalColumnChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Gets content of aggregation {@link #getContent content}.
           *
           * Deprecated aggregation. Left for compatibility purposes.
           */
          getContent(): sap.ui.core.Control[];
          /**
           * @deprecated (since 1.16.3) - dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter
           * instead.
           *
           * Gets current value of property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * Does not do anything anymore
           *
           * Default value is `[["##"]]`.
           */
          getDataLabelFormat(): any;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.StackedVerticalColumnChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @deprecated (since 1.16.3) - minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize
           * instead.
           *
           * Gets current value of property {@link #getMinTouchSize minTouchSize}.
           *
           * Mapped to minShapeSize property.
           *
           * Default value is `'48px'`.
           */
          getMinTouchSize(): sap.ui.core.CSSSize;
          /**
           * @deprecated (since 1.16.3) - type has been deprecated since 1.16.3. Please use the chartType instead.
           *
           * Gets current value of property {@link #getType type}.
           *
           * Mapped to charType property.
           *
           * Default value is `'StackedColumn'`.
           */
          getType(): string;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfContent(
            /**
             * The content whose index is looked for
             */
            oContent: sap.ui.core.Control
          ): number;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Inserts a content into the aggregation {@link #getContent content}.
           */
          insertContent(
            /**
             * The content to insert; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control,
            /**
             * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
             * is inserted at position 0; for a value greater than the current size of the aggregation, the content
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ca.ui.charts.StackedVerticalColumnChart;
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Removes all the controls from the aggregation {@link #getContent content}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllContent(): sap.ui.core.Control[];
          /**
           * @deprecated (since 1.16.3) - content has been deprecated since 1.16.3. The only visible content in the
           * chart now is the internalVizChart.
           *
           * Removes a content from the aggregation {@link #getContent content}.
           */
          removeContent(
            /**
             * The content to remove or its index or id
             */
            vContent: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * @deprecated (since 1.16.3) - dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter
           * instead.
           *
           * Sets a new value for property {@link #getDataLabelFormat dataLabelFormat}.
           *
           * Does not do anything anymore
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `[["##"]]`.
           */
          setDataLabelFormat(
            /**
             * New value for property `dataLabelFormat`
             */
            oDataLabelFormat?: any
          ): sap.ca.ui.charts.StackedVerticalColumnChart;
          /**
           * @deprecated (since 1.16.3) - minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize
           * instead.
           *
           * Sets a new value for property {@link #getMinTouchSize minTouchSize}.
           *
           * Mapped to minShapeSize property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'48px'`.
           */
          setMinTouchSize(
            /**
             * New value for property `minTouchSize`
             */
            sMinTouchSize?: sap.ui.core.CSSSize
          ): sap.ca.ui.charts.StackedVerticalColumnChart;
          /**
           * @deprecated (since 1.16.3) - type has been deprecated since 1.16.3. Please use the chartType instead.
           *
           * Sets a new value for property {@link #getType type}.
           *
           * Mapped to charType property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'StackedColumn'`.
           */
          setType(
            /**
             * New value for property `type`
             */
            sType?: string
          ): sap.ca.ui.charts.StackedVerticalColumnChart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Allows you to create a chart using vertical bars to represent the data
         */
        class VerticalBarChart extends sap.ca.ui.charts.Chart {
          /**
           * Constructor for a new charts/VerticalBarChart.
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
            mSettings?: $VerticalBarChartSettings
          );

          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys the scroll in the aggregation {@link #getScroll scroll}.
           */
          destroyScroll(): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys the verticalArea in the aggregation {@link #getVerticalArea verticalArea}.
           */
          destroyVerticalArea(): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Destroys the verticalBarChart in the aggregation {@link #getVerticalBarChart verticalBarChart}.
           */
          destroyVerticalBarChart(): sap.ca.ui.charts.VerticalBarChart;
          /**
           * Creates a new subclass of class sap.ca.ui.charts.VerticalBarChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ca.ui.charts.Chart.extend}.
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
           * Gets current value of property {@link #getBarWidth barWidth}.
           *
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           *
           * Default value is `48`.
           */
          getBarWidth(): number;
          /**
           * Gets current value of property {@link #getContainer container}.
           *
           * The DOM ID where the chart will be added. Deprecated
           *
           * Default value is `'chart'`.
           */
          getContainer(): string;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getContent content}.
           *
           * Deprecated aggregation. Left for compatibility purposes.
           */
          getContent(): sap.ui.core.Control[];
          /**
           * Gets current value of property {@link #getData data}.
           *
           * The data to be used by the chart
           */
          getData(): object;
          /**
           * Returns a metadata object for class sap.ca.ui.charts.VerticalBarChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getScroll scroll}.
           *
           * The scroll container
           */
          getScroll(): sap.m.ScrollContainer;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getVerticalArea verticalArea}.
           *
           * The vertical layout
           */
          getVerticalArea(): sap.m.VBox;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Gets content of aggregation {@link #getVerticalBarChart verticalBarChart}.
           *
           * The chart
           */
          getVerticalBarChart(): sap.viz.ui5.Column;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfContent(
            /**
             * The content whose index is looked for
             */
            oContent: sap.ui.core.Control
          ): number;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Inserts a content into the aggregation {@link #getContent content}.
           */
          insertContent(
            /**
             * The content to insert; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control,
            /**
             * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
             * is inserted at position 0; for a value greater than the current size of the aggregation, the content
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Removes all the controls from the aggregation {@link #getContent content}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllContent(): sap.ui.core.Control[];
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Removes a content from the aggregation {@link #getContent content}.
           */
          removeContent(
            /**
             * The content to remove or its index or id
             */
            vContent: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * Sets a new value for property {@link #getBarWidth barWidth}.
           *
           * Minimum shape size for touch enabled actions, default and minimum to 48px !
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `48`.
           */
          setBarWidth(
            /**
             * New value for property `barWidth`
             */
            iBarWidth?: number
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * Sets a new value for property {@link #getContainer container}.
           *
           * The DOM ID where the chart will be added. Deprecated
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `'chart'`.
           */
          setContainer(
            /**
             * New value for property `container`
             */
            sContainer?: string
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * Sets a new value for property {@link #getData data}.
           *
           * The data to be used by the chart
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setData(
            /**
             * New value for property `data`
             */
            oData?: object
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Sets the aggregated {@link #getScroll scroll}.
           */
          setScroll(
            /**
             * The scroll to set
             */
            oScroll: sap.m.ScrollContainer
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Sets the aggregated {@link #getVerticalArea verticalArea}.
           */
          setVerticalArea(
            /**
             * The verticalArea to set
             */
            oVerticalArea: sap.m.VBox
          ): sap.ca.ui.charts.VerticalBarChart;
          /**
           * @deprecated (since 7.20.0) - This method is deprecated now.
           *
           * Sets the aggregated {@link #getVerticalBarChart verticalBarChart}.
           */
          setVerticalBarChart(
            /**
             * The verticalBarChart to set
             */
            oVerticalBarChart: sap.viz.ui5.Column
          ): sap.ca.ui.charts.VerticalBarChart;
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and VizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Enumeration of available color to be used in sap.ca.ui charts.
         */
        enum ChartColor {
          /**
           * Sap Ui Chart 1
           */
          sapUiChart1,
          /**
           * Sap Ui Chart 10
           */
          sapUiChart10,
          /**
           * Sap Ui Chart 11
           */
          sapUiChart11,
          /**
           * Sap Ui Chart 2
           */
          sapUiChart2,
          /**
           * Sap Ui Chart 3
           */
          sapUiChart3,
          /**
           * Sap Ui Chart 4
           */
          sapUiChart4,
          /**
           * Sap Ui Chart 5
           */
          sapUiChart5,
          /**
           * Sap Ui Chart 6
           */
          sapUiChart6,
          /**
           * Sap Ui Chart 7
           */
          sapUiChart7,
          /**
           * Sap Ui Chart 8
           */
          sapUiChart8,
          /**
           * Sap Ui Chart 9
           */
          sapUiChart9
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and VizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Determines the selection mode of a Chart.
         */
        enum ChartSelectionMode {
          /**
           * The chart will allow multi selection.
           */
          Multiple,
          /**
           * The chart will not allow any selection
           */
          None,
          /**
           * The chart will only allow single selection
           */
          Single
        }
        /**
         * @deprecated (since 1.24) - Sap.ca charts have been replaced with sap.viz and VizFrame in 1.24. The UI5
         * control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts. Now
         * that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead! This control will
         * not be supported anymore from 1.24.
         *
         * Enumeration of available semantic color to be used in sap.Ca.ui
         */
        enum ChartSemanticColor {
          /**
           * Bad color
           */
          Bad,
          /**
           * Darker Bad color
           */
          BadDark,
          /**
           * Lighter Bad color
           */
          BadLight,
          /**
           * Critical colro
           */
          Critical,
          /**
           * Darker Critical color
           */
          CriticalDark,
          /**
           * Lighter Critical color
           */
          CriticalLight,
          /**
           * Good color
           */
          Good,
          /**
           * Darker Good color
           */
          GoodDark,
          /**
           * Lighter Good color
           */
          GoodLight,
          /**
           * Neutral color
           */
          Neutral,
          /**
           * Darker Neutral color
           */
          NeutralDark,
          /**
           * Lighter Neutral color
           */
          NeutralLight
        }
      }
      /**
       * @deprecated (since 1.26) - The content of this package is deprecated since 1.26 as per central UX requirements.
       * Please use {@link sap.m.Dialog} instead.
       */
      namespace dialog {
        /**
         * @deprecated (since 1.26) - this control is deprecated per central UX requirements. Please use |@link
         * sap.m.Dialog} instead.
         *
         * Provides methods to show a confirmation dialog in the Fiori style.
         *
         * `sap.ca.ui.dialog.confirmation` is a static class, the statement `jQuery.sap.require("sap.ca.ui.dialog.factory")`
         * needs to be called before the function can be used. Example:
         * ```javascript
         *
         *    jQuery.sap.require("sap.ca.ui.dialog.factory");
         *
         *    // provide your callback function, so that you can get informed if the enduser confirms or cancels the dialog
         *    var fnClose = function(oResult) {
         *        if (oResult) {
         *            console.log("isConfirmed:" + oResult.isConfirmed);
         *            if (oResult.sNote) {
         *                console.log(oResult.sNote);
         *            }
         *        }
         *    }
         *
         *    //open the confirmation dialog
         *    sap.ca.ui.dialog.confirmation.open({
         *        question : "Send your decision on the shopping card submitted by Henry Emerald?",
         *        showNote : true,
         *        title : "Send",
         *        confirmButtonLabel : "Send"
         *    }, fnClose);
         * ```
         */
        namespace confirmation {
          /**
           * Opens the confirmation dialog
           */
          function open(
            /**
             * settings for the confirmation dialog The supported settings are: additionalInformation : {array}
             * optional, up-to 4 lines can be shown, every line has the structure: {label: "Leave Type", text: "Vacation"}
             * confirmButtonLabel {string} text for the confirm button noteMandatory :{boolean} optional,
             * default false question : {string} the question/action which the user needs to confirm showNote
             * : {boolean} default true title : {string} title of the dialog
             */
            oSettings?: object,
            /**
             * the function will be called if the confirmation dialog is closed. there are 2 default values can be
             * retrieved: isConfirmed : {boolean} true if the user confirms the action; false if
             * the user cancels the dialog sNote : {string} the note text provided by the user
             */
            fnClose?: Function
          ): void;
        }
      }
      /**
       * @deprecated (since 1.28) - this control is deprecated as per central UX requirements. Please use {@link
       * sap.m.MessageBox} instead.
       *
       * Provides methods to show messages with type of **Success**, **Error**, **Warning** and **Information**
       * in a Fiori style.
       *
       * `sap.ca.ui.message` is a static class, the statement `jQuery.sap.require("sap.ca.ui.message.message")`
       * needs to be called before the function can be used. Example:
       * ```javascript
       *
       *    jQuery.sap.require("sap.ca.ui.message.message");
       *
       *    // provide your callback function, if you want to get informed after the user closes the MessageBox
       *    var bIsMsgBoxClosed = false;
       *    var fnClose = function(){
       *        bIsMsgBoxClosed = true;
       *    };
       *
       *    // show the erorr message in a MessageBox
       *    sap.ca.ui.message.showMessageBox({
       *        type: sap.ca.ui.message.Type.ERROR,
       *        message: "No connection can be established to the backend system ABC",
       *        details: "Lorem ipsum dolor sit amet, eum an vidit ..."
       *    }, fnClose);
       * ```
       */
      namespace message {
        /**
         * Shows the messages with type of Success, Error, Warning, Info, in a Fiori style of MessageBox
         */
        function showMessageBox(
          /**
           * settings for the message box The supported settings are: type : {sap.ca.ui.message.Type}
           * message : {string} short text, the leading and ending white spaces will be removed details
           * : {string} long text (optional), the detailed information will only be shown if the text is available
           * and different to the message text
           */
          oSettings?: object,
          /**
           * the function will be called if the message box is closed
           */
          fnClose?: Function
        ): void;
        /**
         * Shows the success message as a MessageToast
         */
        function showMessageToast(
          /**
           * message to be shown in the MessageToast
           */
          sMessage?: string
        ): void;

        /**
         * Enumeration of supported message types.
         */
        enum Type {}
      }
      /**
       * @deprecated (since 1.28)
       */
      namespace model {
        /**
         * @deprecated (since 1.28) - Please refer to the individual formatters to learn about their replacement.
         */
        namespace format {
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use classes from
           * package {@link sap.ui.core.format} instead! This control will not be supported anymore.
           *
           * Constructor for FormattingLibrary
           */
          export const FormattingLibrary: undefined;

          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.core.format.NumberFormat.getCurrencyInstance}
           * instead! This control will not be supported anymore.
           *
           * The AmountFormat is a static class for formatting and parsing file size values according to a set of
           * format options.
           *
           * If no pattern is specified a default pattern according to the locale settings is used.
           */
          class AmountFormat {
            /**
             * Constructor for AmountFormat - must not be used: To get a AmountFormat instance, please use getInstance.
             */
            constructor();

            /**
             * Format an amount according to the given format options.
             */
            format(
              /**
               * the value to format
               */
              oValue: number
            ): string;
            /**
             * Convenience static function Format an amount in short Style. Number of decimals for values not "shortified"
             * will be set : Using Decimals if specified else using the standard number of decimal for the given currency
             * if decimals == "preserve", the number of decimals of the source value will be preserved (currency not
             * taken into account).
             */
            static FormatAmountShort(
              /**
               * the string containing a formatted value
               */
              oValue: string,

              currencyCode: string,

              decimals: string
            ): string;
            /**
             * Convenience static function Format an amount in short Style with the currency code according to the cldr
             * currency format. Number of decimals for values not "shortified" will be set : Using Decimals if specified
             * else using the standard number of decimal for the given currency If decimals == "preserve", the number
             * of decimals of the source value will be preserved (currency not taken into account).
             */
            static FormatAmountShortWithCurrency(
              /**
               * the string containing a formatted value
               */
              sValue: string,

              sCurrencyCode: string,

              decimals: string
            ): string;
            /**
             * Convenience static function Format an amount in standard Style. Number of decimals will be set: Using
             * Decimals if specified else using the standard number of decimal for the given currency if decimals ==
             * "preserve", the number of decimals of the source value will be preserved (currency not taken into account).
             */
            static FormatAmountStandard(
              /**
               * the string containing a formatted value
               */
              oValue: string,

              currencyCode: string,

              decimals: string
            ): string;
            /**
             * Convenience static function Format an amount in standard Style with the currency code according to the
             * cldr currency format. Number of decimals will be set: Using decimals if specified else using the standard
             * number of decimal for the given currency if decimals == "preserve", the number of decimals of the source
             * value will be preserved (currency not taken into account).
             */
            static FormatAmountStandardWithCurrency(
              /**
               * the string containing a formatted value
               */
              sValue: string,

              sCurrencyCode: string,

              decimals: string
            ): string;
            /**
             * Format an amount with the currency code according to the cldr currency format.
             */
            formatWithCurrency(
              /**
               * the string containing a formatted value
               */
              sValue: string,
              /**
               * the string containing the currency code
               */
              sCurrencyCode: string
            ): string;
            /**
             * Get a instance of the AmountFormat, which can be used for formatting.
             */
            static getInstance(
              /**
               * Object which defines the format options
               */
              oFormatOptions?: {
                /**
                 * either empty or 'standard or 'short'. If no pattern is given, a locale dependent default pattern of that
                 * style is used from the LocaleData class.
                 */
                style?: string;
              },
              /**
               * Locale to ask for locale specific texts/settings
               */
              oLocale?: sap.ui.core.Locale
            ): sap.ca.ui.model.format.AmountFormat;
            /**
             * Parse a string which is formatted according to the given format options.
             */
            parse(
              /**
               * the string containing a formatted value
               */
              sValue: string
            ): number;
          }
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.core.format.DateFormat}
           * instead! This control will not be supported anymore.
           *
           * The DateFormat is a static class for formatting and parsing date and time values according to a set of
           * format options.
           *
           * It uses sap.ui.core.format.DateFormat to format and parse dates, and adds a new style daysAgo for Date
           * instances. With this style:
           * 	 - For today: "Today" will be displayed (localized)
           * 	 - For yesterday: "1 day ago" will be displayed (localized)
           * 	 - Between 2 days and 6 days in the past: "x days ago" will be displayed (localized)
           * 	 - In the future or more than 6 days in the past: the date will be formatted with a medium style
           * 			The daysAgo style can be formatted in UTC.
           *
           * Supported format options are pattern based on Unicode LDML Date Format notation. If no pattern is specified
           * a default pattern according to the locale settings is used.
           */
          class DateFormat {
            /**
             * Constructor for DateFormat - must not be used: To get a DateFormat instance, please use getInstance,
             * getDateTimeInstance or getTimeInstance.
             * See:
             * 	http://unicode.org/reports/tr35/#Date_Field_Symbol_Table
             */
            constructor();

            /**
             * Format a date according to the given format options.
             *
             * If oValue contains a JSON date ("/Date(milliseconds)/"), it will be converted to a Date before to be
             * formatted.
             */
            format(
              /**
               * the vale to format
               */
              oValue: Date | string,
              /**
               * whether to use UTC
               */
              bUTC: boolean
            ): string;
            /**
             * Get a date instance of the DateFormat, which can be used for formatting.
             */
            static getDateInstance(
              /**
               * Object which defines the format options
               */
              oFormatOptions?: {
                /**
                 * a data pattern in LDML format. It is not verified whether the pattern represents only a date.
                 */
                pattern?: string;
                /**
                 * either empty or 'short, 'medium', 'long' or 'daysAgo'. If no pattern is given, a locale dependent default
                 * date pattern of that style is used from the LocaleData class.
                 */
                style?: string;
              },
              /**
               * Locale to ask for locale specific texts/settings
               */
              oLocale?: sap.ui.core.Locale
            ): sap.ca.ui.model.format.DateFormat;
            /**
             * Get a datetime instance of the DateFormat, which can be used for formatting.
             */
            static getDateTimeInstance(
              /**
               * Object which defines the format options
               */
              oFormatOptions?: {
                /**
                 * a datetime pattern in LDML format. It is not verified whether the pattern represents a full datetime.
                 */
                pattern?: string;
                /**
                 * either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default datetime
                 * pattern of that style is used from the LocaleData class.
                 */
                style?: string;
              },
              /**
               * Locale to ask for locale specific texts/settings
               */
              oLocale?: sap.ui.core.Locale
            ): sap.ca.ui.model.format.DateFormat;
            /**
             * Get a time instance of the DateFormat, which can be used for formatting.
             */
            static getTimeInstance(
              /**
               * Object which defines the format options
               */
              oFormatOptions?: {
                /**
                 * a time pattern in LDML format. It is not verified whether the pattern only represents a time.
                 */
                pattern?: string;
                /**
                 * either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default time pattern
                 * of that style is used from the LocaleData class.
                 */
                style?: string;
              },
              /**
               * Locale to ask for locale specific texts/settings
               */
              oLocale?: sap.ui.core.Locale
            ): sap.ca.ui.model.format.DateFormat;
            /**
             * Parse a string which is formatted according to the given format options. The strings specific to the
             * daysAgo style will not be well-parsed.
             */
            parse(
              /**
               * the string containing a formatted date/time value
               */
              sValue: string
            ): Date;
          }
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.core.format.FileSizeFormat}
           * instead! This control will not be supported anymore.
           *
           * The FileSizeFormat is a static class for formatting and parsing file size values according to a set of
           * format options.
           *
           * Simplified logic: display in kB for 1e3
           */
          class FileSizeFormat {
            /**
             * Constructor for FileSizeFormat - must not be used: To get a FileSizeFormat instance, please use getInstance.
             */
            constructor();

            /**
             * Format according to the given format options.
             */
            format(
              /**
               * the value to format
               */
              oValue: number
            ): string;
            /**
             * Get a instance of the FileSizeFormat, which can be used for formatting.
             */
            static getInstance(
              /**
               * Object which defines the format options
               */
              oFormatOptions?: {
                /**
                 * number of decimals to use.
                 */
                shortDecimals?: number;
              },
              /**
               * Locale to ask for locale specific texts/settings
               */
              oLocale?: sap.ui.core.Locale
            ): sap.ca.ui.model.format.FileSizeFormat;
            /**
             * Parse a string which is formatted according to the given format options.
             */
            parse(
              /**
               * the string containing a formatted value
               */
              sValue: string
            ): number;
          }
          /**
           * @deprecated (since 1.28) - There is no replacement for the QuantityFormat in sap.ui.core.format. Please
           * refer to {@link sap.ui.core.format} and set the `minFractionDigits` and `maxFractionDigits` on the formatter
           * as required. This control will not be supported anymore.
           *
           * The QuantityFormat is a static class for formatting and parsing file size values according to a set of
           * format options.
           *
           * If no pattern is specified a default pattern according to the locale settings is used.
           */
          class QuantityFormat {
            /**
             * Constructor for QuantityFormat - must not be used: To get a QuantityFormat instance, please use getInstance.
             */
            constructor();

            /**
             * Format a value according to the given format options.
             */
            format(
              /**
               * the value to format
               */
              oValue: object
            ): string;
            /**
             * Convenience static function Format an quantity in short Style. Number of decimals will be set : Using
             * Decimals if specified else using the standard number of decimal for the given unit
             */
            static FormatQuantityShort(
              /**
               * the string containing a formatted value
               */
              sValue: string,

              unitCode: string,

              decimals: string
            ): string;
            /**
             * Convenience static function Format an quantity in standard Style. Number of decimals will be set : Using
             * Decimals if specified else using the standard number of decimal for the given unit
             */
            static FormatQuantityStandard(
              /**
               * the string containing a formatted value
               */
              sValue: string,

              unitCode: string,

              decimals: string
            ): string;
            /**
             * Get a instance of the QuantityFormat, which can be used for formatting.
             */
            static getInstance(
              /**
               * Object which defines the format options
               */
              oFormatOptions?: {
                /**
                 * either empty or 'standard or 'short'. If no pattern is given, a locale dependent default pattern of that
                 * style is used from the LocaleData class.
                 */
                style?: string;
              },
              /**
               * Locale to ask for locale specific texts/settings
               */
              oLocale?: sap.ui.core.Locale
            ): sap.ca.ui.model.format.QuantityFormat;
            /**
             * Parse a string which is formatted according to the given format options.
             */
            parse(
              /**
               * the string containing a formatted value
               */
              sValue: string
            ): number;
          }
        }
        /**
         * @deprecated (since 1.28) - Please refer to the individual types to learn about their replacement.
         */
        namespace type {
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.model.type.Date}
           * instead! This control will not be supported anymore.
           *
           * This class represents date simple types.
           */
          class Date extends sap.ui.model.SimpleType {
            /**
             * Constructor for a Date type.
             */
            constructor(
              /**
               * options used to create a DateFormat for formatting / parsing. Supports the same options as {@link sap.ca.ui.model.format.DateFormat.getDateInstance
               * DateFormat.getDateInstance}. You can use an extra boolean option UTC to format in UTC ({style: "short",
               * UTC: true}).
               */
              oFormatOptions?: {
                /**
                 * additional set of options used to create a second DateFormat object for conversions between string values
                 * in the data source (e.g. model) and Date. This second format object is used to convert from a model string
                 * to Date before converting the Date to string with the primary format object. Vice versa, this 'source'
                 * format is also used to format an already parsed external value (e.g. user input) into the string format
                 * expected by the data source. Supports the same set of options as {@link sap.ca.ui.model.format.DateFormat.getDateInstance
                 * DateFormat.getDateInstance}.
                 */
                source?: object;
              },
              /**
               * value constraints.
               */
              oConstraints?: {
                /**
                 * smallest value allowed for this type. Values for constraints must use the same type as configured via
                 * `oFormatOptions.source`
                 */
                minimum?: Date | string;
                /**
                 * largest value allowed for this type. Values for constraints must use the same type as configured via
                 * `oFormatOptions.source`
                 */
                maximum?: Date | string;
              }
            );

            /**
             * Creates a new subclass of class sap.ca.ui.model.type.Date with name `sClassName` and enriches it with
             * the information contained in `oClassInfo`.
             *
             * For a detailed description of `oClassInfo` or `FNMetaImpl` see {@link sap.ui.base.Object.extend Object.extend}.
             */
            // @ts-ignore
            static extend(
              /**
               * name of the class to be created
               */
              sClassName: string,
              /**
               * object literal with informations about the class
               */
              oClassInfo?: object,
              /**
               * alternative constructor for a metadata object
               */
              FNMetaImpl?: Function
            ): Function;
            /**
             * Returns a metadata object for class sap.ca.ui.model.type.Date.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.base.Metadata;
            /**/
            getOutputPattern(): void;
          }
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.model.type.DateTime}
           * instead! This control will not be supported anymore.
           *
           * This class represents datetime simple types.
           */
          class DateTime extends sap.ca.ui.model.type.Date {
            /**
             * Constructor for a DateTime type.
             */
            constructor(
              /**
               * options used to create a DateFormat for formatting / parsing to/from external values and optionally for
               * a second DateFormat to convert between the data source format (Model) and the internally used JavaScript
               * Date.format. For both DateFormat objects, the same options are supported as for {@link sap.ca.ui.model.format.DateFormat.getDateTimeInstance
               * DateFormat.getDateTimeInstance}. You can use an extra boolean option UTC to format in UTC ({style: "short",
               * UTC: true}). Note that this differs from the base type.
               */
              oFormatOptions?: object,
              /**
               * value constraints. Supports the same kind of constraints as its base type Date, but note the different
               * format options (Date vs. DateTime)
               */
              oConstraints?: object
            );

            /**
             * Creates a new subclass of class sap.ca.ui.model.type.DateTime with name `sClassName` and enriches it
             * with the information contained in `oClassInfo`.
             *
             * For a detailed description of `oClassInfo` or `FNMetaImpl` see {@link sap.ui.base.Object.extend Object.extend}.
             */
            // @ts-ignore
            static extend(
              /**
               * name of the class to be created
               */
              sClassName: string,
              /**
               * object literal with informations about the class
               */
              oClassInfo?: object,
              /**
               * alternative constructor for a metadata object
               */
              FNMetaImpl?: Function
            ): Function;
            /**
             * Returns a metadata object for class sap.ca.ui.model.type.DateTime.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.base.Metadata;
          }
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.model.type.FileSize}
           * instead! This control will not be supported anymore.
           *
           * This class represents file size types.
           */
          class FileSize extends sap.ui.model.SimpleType {
            /**
             * Constructor for a FileSize type.
             */
            constructor(
              /**
               * formatting options. Supports the same options as {@link sap.ui.core.format.NumberFormat.getFloatInstance
               * NumberFormat.getFloatInstance}
               */
              oFormatOptions?: object,
              /**
               * value constraints.
               */
              oConstraint?: object
            );

            /**
             * Creates a new subclass of class sap.ca.ui.model.type.FileSize with name `sClassName` and enriches it
             * with the information contained in `oClassInfo`.
             *
             * For a detailed description of `oClassInfo` or `FNMetaImpl` see {@link sap.ui.base.Object.extend Object.extend}.
             */
            // @ts-ignore
            static extend(
              /**
               * name of the class to be created
               */
              sClassName: string,
              /**
               * object literal with informations about the class
               */
              oClassInfo?: object,
              /**
               * alternative constructor for a metadata object
               */
              FNMetaImpl?: Function
            ): Function;
            /**
             * Returns a metadata object for class sap.ca.ui.model.type.FileSize.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.base.Metadata;
          }
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.model.type.Float}
           * or sap.ui.model.type.Integer with sap.ui.core.format.NumberFormat instead! This control will not be supported
           * anymore.
           *
           * This class represents number simple types.
           */
          class Number extends sap.ui.model.SimpleType {
            /**
             * Constructor for a Number type.
             */
            constructor(
              /**
               * formatting options. Supports the same options as {@link sap.ui.core.format.NumberFormat.getNumberInstance
               * NumberFormat.getNumberInstance}
               */
              oFormatOptions?: object,
              /**
               * value constraints.
               */
              oConstraint?: object
            );

            /**
             * Creates a new subclass of class sap.ca.ui.model.type.Number with name `sClassName` and enriches it with
             * the information contained in `oClassInfo`.
             *
             * For a detailed description of `oClassInfo` or `FNMetaImpl` see {@link sap.ui.base.Object.extend Object.extend}.
             */
            // @ts-ignore
            static extend(
              /**
               * name of the class to be created
               */
              sClassName: string,
              /**
               * object literal with informations about the class
               */
              oClassInfo?: object,
              /**
               * alternative constructor for a metadata object
               */
              FNMetaImpl?: Function
            ): Function;
            /**
             * Returns a metadata object for class sap.ca.ui.model.type.Number.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.base.Metadata;
          }
          /**
           * @deprecated (since 1.28) - This control has been made available in sap.ui.core. Please use {@link sap.ui.model.type.Time}
           * instead! This control will not be supported anymore.
           *
           * This class represents time simple types.
           */
          class Time extends sap.ca.ui.model.type.Date {
            /**
             * Constructor for a Time type.
             */
            constructor(
              /**
               * options used to create a DateFormat for formatting / parsing to/from external values and optionally for
               * a second DateFormat to convert between the data source format (Model) and the internally used JavaScript
               * Date.format. For both DateFormat objects, the same options are supported as for {@link sap.ca.ui.model.format.DateFormat.getTimeInstance
               * DateFormat.getTimeInstance}. You can use an extra boolean option UTC to format in UTC ({style: "short",
               * UTC: true}). Note that this differs from the base type.
               */
              oFormatOptions?: object,
              /**
               * value constraints. Supports the same kind of constraints as its base type Date, but note the different
               * format options (Date vs. Time)
               */
              oConstraints?: object
            );

            /**
             * Creates a new subclass of class sap.ca.ui.model.type.Time with name `sClassName` and enriches it with
             * the information contained in `oClassInfo`.
             *
             * For a detailed description of `oClassInfo` or `FNMetaImpl` see {@link sap.ui.base.Object.extend Object.extend}.
             */
            // @ts-ignore
            static extend(
              /**
               * name of the class to be created
               */
              sClassName: string,
              /**
               * object literal with informations about the class
               */
              oClassInfo?: object,
              /**
               * alternative constructor for a metadata object
               */
              FNMetaImpl?: Function
            ): Function;
            /**
             * Returns a metadata object for class sap.ca.ui.model.type.Time.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.base.Metadata;
          }
        }
      }
      /**
       * @deprecated (since 1.26) - The content of this package is deprecated since 1.26 as per central UX requirements.
       * Please use {@link sap.m.BusyDialog} instead.
       */
      namespace utils {
        /**
         * @deprecated (since 1.26) - this control is deprecated as per central UX requirements. Please use {@link
         * sap.m.BusyDialog} instead.
         *
         * Provides methods to show/remove the waiting/blocking screen in the Fiori style.
         *
         * `sap.ca.ui.utils.busydialog` is a static class, the statement `jQuery.sap.require("sap.ca.ui.utils.busydialog")`
         * needs to be called before the function can be used. Example:
         * ```javascript
         *
         *    jQuery.sap.require("sap.ca.ui.utils.busydialog");
         *
         *    // request the BusyDialog to show the waiting/blocking screen
         *    sap.ca.ui.utils.busydialog.requireBusyDialog({
         *        text:"Loading..." //text is optional
         *    });
         *
         *    // release the BusyDialog to remove the waiting/blocking screen
         *    sap.ca.ui.utils.busydialog.releaseBusyDialog();
         * ```
         *
         *
         * **Note**
         * 	 - this BusyDialog will be shown with 1.5 seconds delay at the moment;
         * 	 - in a possible embedded function calls, you can require this BusyDialog more than once, but you need
         * 			to take care to release the BusyDialog correspondingly in pair. (The text will be overwritten.)
         */
        namespace busydialog {
          /**
           * Destroys the waiting/blocking screen (this method is only recommended if the App developer or the "Unified
           * Shell" has a clean-up strategy and want to release the memory on purpose)
           */
          function destroyBusyDialog(): void;
          /**
           * Removes the waiting/blocking screen, and is used in pair with the method "requireBusyDialog"
           */
          function releaseBusyDialog(): void;
          /**
           * Shows the waiting/blocking screen
           */
          function requireBusyDialog(
            /**
             * settings for the busy dialog: text : {string} (optional) loading text
             */
            oSettings?: object
          ): void;
        }
      }

      interface $AddPictureSettings extends sap.ui.core.$ControlSettings {
        /**
         * The page container type in which the button is embedded : Tab or Form
         */
        buttonPageType?: string;

        /**
         * Defines whether the button should appear or not.
         */
        editable?: boolean;

        /**
         * Defines the maximum number of pictures you can add. Default is set to 10
         */
        maxPictureNumber?: number;

        /**
         * Url of server we wish to upload to, only used as a fallback when FileReader is not supported by the browser
         */
        uploadUrl?: string;

        /**
         * The width of the control.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The text of the button.
         */
        text?: string;

        /**
         * The text of the button.
         */
        pictureAlign?: sap.ui.core.TextAlign;

        /**
         * Defines thumbnail size (height / width) in Pixels
         */
        itemSize?: number;

        /**
         * Defines whether or not you want to maximize the compression. Possible values : "Low" (thumbnail size)
         * or "High" (screen size)
         */
        compression?: string;

        /**
         * Indicates that the user wishes to view the picture
         */
        show?: Function;

        /**
         * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the
         * browser
         */
        pictureAdded?: Function;

        /**
         * Indicates that the limit number of pictures has been reached
         */
        maxPictureLimitReached?: Function;

        /**
         * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the
         * browser
         */
        imageUploadFailed?: Function;

        /**
         * Image upload failed, only supports image format files
         */
        fileNotSupported?: Function;

        /**
         * The list of pictures
         */
        pictures?: sap.ca.ui.PictureItem[] | sap.ca.ui.PictureItem;
      }

      interface $CustomerContextSettings extends sap.ui.core.$ControlSettings {
        /**
         * Name of your app that shall be unique.
         */
        personalizationPageName?: string;

        /**
         * Display or not the customers sales area as well as its name and id.
         */
        showSalesArea?: boolean;

        /**
         * Model path to the customer collection to be displayed
         */
        path?: string;

        /**
         * Property name of the customer ID
         */
        customerIDProperty?: string;

        /**
         * Property name of the customer name
         */
        customerNameProperty?: string;

        /**
         * Property name of the sales organization name
         */
        salesOrganizationNameProperty?: string;

        /**
         * Property name of the distribution channel name
         */
        distributionChannelNameProperty?: string;

        /**
         * Property name of the division name
         */
        divisionNameProperty?: string;

        /**
         * Overrides the default Dialog title
         */
        dialogTitle?: string;

        /**
         * Fired when a customer is selected in the list. The fired customer can be empty in case the user press
         * the cancel button while the Customer Context has been open using select()
         */
        customerSelected?: Function;
      }

      interface $CustomerControlListItemSettings
        extends sap.m.$CustomListItemSettings {
        /**
         * Display or not the customers sales area as well as its name and id.
         */
        showSalesArea?: boolean;

        /**
         * The ID of the customer
         */
        customerID?: string;

        /**
         * The name of the customer
         */
        customerName?: string;

        /**
         * The sales organization name
         */
        salesOrganizationName?: string;

        /**
         * The distribution channel name
         */
        distributionChannelName?: string;

        /**
         * The division name
         */
        divisionName?: string;
      }

      interface $DatePickerSettings extends sap.m.$InputBaseSettings {
        /**
         * This property is used to offset the first day of the week (0 = sunday). Returns int, default 0
         */
        firstDayOffset?: number;

        /**
         * This is a date string formatted as per the format for the control. If there is no valid input for the
         * control, this value will be null.
         */
        dateValue?: string;
      }

      interface $ExpansibleFeedListItemSettings
        extends sap.m.$FeedListItemSettings {
        /**
         * The maximum number of lines to display before adding the "See more" link.
         */
        maxLines?: number;
      }

      interface $FileUploadSettings extends sap.ui.core.$ControlSettings {
        /**
         * Url of server we wish to upload to
         */
        uploadUrl?: string;

        /**
         * Relative path in model, pointing to property that stores the name of a file.
         */
        fileName?: string;

        /**
         * Relative path in model, pointing to property that stores the size of a file.
         */
        size?: string;

        /**
         * Relative path in model, pointing to property that stores the url at which the file is stored.
         */
        url?: string;

        /**
         * Relative path in model, pointing to property that stores the date at which a file was uploaded.
         */
        uploadedDate?: string;

        /**
         * Relative path in model, pointing to property that stores the name of the person who uploaded the file.
         */
        contributor?: string;

        /**
         * Relative path in model, pointing to property that stores the uploaded files extension. Note: either fileExtension
         * or mimeType may be used, but mimeType is preferable.
         */
        fileExtension?: string;

        /**
         * Relative path in model, pointing to property that stores the file's mimeType. Note: either fileExtension
         * or mimeType may be used, but mimeType is preferable.
         */
        mimeType?: string;

        /**
         * The base path in the model for the control. Avoid trailing forward slashes in value, as per default value.
         */
        items?: string;

        /**
         * This property enables & disables the ability to upload a file
         */
        uploadEnabled?: boolean;

        /**
         * An identifier property name that is used to uniquely reference the file on the server.
         */
        fileId?: string;

        /**
         * The XSRF token the control should use when making the upload request. If it is not set, the control will
         * not use a security token.
         */
        xsrfToken?: string;

        /**
         * Indicates if the control should send multipart/form data request when uploading
         */
        useMultipart?: boolean;

        /**
         * The Accept request header the control should use when sending the upload request
         */
        acceptRequestHeader?: string;

        /**
         * Url of server that will base64 encode the file
         */
        encodeUrl?: string;

        /**
         * Indicates whether rename functionality should be enabled
         */
        renameEnabled?: boolean;

        /**
         * Indicates whether delete functionality should be enabled
         */
        deleteEnabled?: boolean;

        /**
         * Indicates whether the user is allowed to select multiple file at once from his desktop
         */
        multipleSelectionEnabled?: boolean;

        /**
         * Show the label "No data" when the control doesn't have files
         */
        showNoData?: boolean;

        /**
         * Indicates whether file uploads should occur sequentially or in parallel. The default is in parallel.
         */
        sequentialUploadsEnabled?: boolean;

        /**
         * Show the Attachments count label
         */
        showAttachmentsLabel?: boolean;

        /**
         * Show the edit user controls to rename and delete files (same as deleteEnabled and renameEnabled)
         */
        useEditControls?: boolean;

        /**
         * @deprecated (since 1.21.0) - This method is deprecated now. Use the showAttachmentsLabel instead
         *
         * Show the Attachments label in edit mode
         */
        showAttachmentsLabelInEditMode?: boolean;

        /**
         * @deprecated (since 1.21.0) - This method is deprecatd now. If you want to prevent edit you can use useEditControls
         * property or the deleteEnabled, renameEnabed and uploadEnabled properties
         *
         * Property to allow toggling between edit and view screens.
         */
        editMode?: boolean;

        /**
         * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor
         * json for the file to be deleted is passed in the event data
         */
        deleteFile?: Function;

        /**
         * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event
         * data and also a property, newFilename, that contains the new filename.
         */
        renameFile?: Function;

        /**
         * Fired when a file is uploaded and the response comes back from service. The service response for the
         * file to be added to the list is passed in the event data and the consumer must format it in the correct
         * json structure and pass it back to the control using commitUploadFile method.
         */
        uploadFile?: Function;

        /**
         * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer
         * should handle the error by showing the appropriate message.
         */
        fileUploadFailed?: Function;

        /**
         * Fired just before the control is about to make a file upload request. The data passed is the file object
         * selected by the user. You may handle this event to attach custom headers for example if your service
         * implementation requires it.
         */
        beforeUploadFile?: Function;

        /**
         * @deprecated (since 1.21.1) - This method is deprecated now. The rename or delete event is enough and
         * should be use to commit the action immediatly
         *
         * Fired when the save button is clicked. The consumer should handle the event and save all the file renames
         * to backend.
         */
        saveClicked?: Function;

        /**
         * @deprecated (since 1.21.1) - This method is deprecated now
         *
         * Fired when the cancel button is clicked. The consumer may handle the event if required.
         */
        cancelClicked?: Function;

        /**
         * Aggregation that displays the current number of items that are being uploaded
         */
        uploadProgressLabel?: sap.m.Label;

        /**
         * @deprecated (since 1.21.0) - This aggregation is deprecatd now. The label is part of the ToolBar
         *
         * Aggregation that shows the number of files currently uploaded
         */
        attachmentNumberLabel?: sap.m.Label;

        /**
         * Aggregation that contains the buttons for adding
         */
        toolBar?: sap.m.Toolbar;
      }

      interface $GrowingTileContainerSettings
        extends sap.m.$ScrollContainerSettings {
        /**
         * growing enablement
         */
        growing?: boolean;

        /**
         * growing Threshold
         */
        growingThreshold?: number;

        /**
         * load when scrolling
         */
        growingScrollToLoad?: boolean;
      }

      interface $HierarchicalSelectDialogSettings
        extends sap.m.$DialogSettings {
        /**
         * Thrown when user selects an item
         */
        select?: Function;

        /**
         * Thrown when user clicks cancel
         */
        cancel?: Function;

        /**
         * Type checker, only HierarchicalSelectDialogItem are allowed. Please do NOT use the "content" aggregation
         * of the dialog
         */
        items?:
          | sap.ca.ui.HierarchicalSelectDialogItem[]
          | sap.ca.ui.HierarchicalSelectDialogItem;
      }

      interface $HierarchicalSelectDialogItemSettings
        extends sap.ui.core.$ItemSettings {
        /**
         * Dialog title for this item
         */
        title?: string;

        /**
         * Property used for the binding
         */
        entityName?: string;

        /**
         * Used as a template for each list item of the page
         */
        listItemTemplate?: sap.m.ListItemBase;
      }

      interface $HierarchySettings extends sap.ui.core.$ControlSettings {
        /**
         * Hide the levels marked optional. An expand button will appear
         */
        hideOptionalLevels?: boolean;

        /**
         * The array of HierarchyItem ordered and starting from the root hierarchy
         */
        items?: sap.ca.ui.HierarchyItem[] | sap.ca.ui.HierarchyItem;
      }

      interface $HierarchyItemSettings extends sap.ui.core.$ControlSettings {
        /**
         * Icon for the item
         */
        icon?: sap.ui.core.URI;

        /**
         * Level type
         */
        levelType?: string;

        /**
         * Title
         */
        title?: string;

        /**
         * Identifier text
         */
        identifier?: string;

        /**
         * Text of the link
         */
        link?: string;

        /**
         * Does the item looks emphasized
         */
        emphasized?: boolean;

        /**
         * Is the item optional, so we hide it if option is set on the Hierarchy control
         */
        optional?: boolean;

        /**
         * Event when a link is pressed
         */
        linkPress?: Function;
      }

      interface $InPlaceEditSettings extends sap.ui.core.$ControlSettings {
        /**
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If
         * the content control has a own valueState property this will be used.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * If undo is enabled after changing the text an undo button appears.
         */
        undoEnabled?: boolean;

        /**
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter
         * key is pressed.
         */
        change?: Function;

        /**
         * Content control of the InPlaceEdit. The following control is allowed: sap.m.Input, sap.m.Link
         */
        content?: sap.ui.core.Control;
      }

      interface $NotesSettings extends sap.m.$ListSettings {
        /**
         * If set to true, this control will render an additional control to create new notes.
         */
        showNoteInput?: boolean;

        /**
         * max text input length
         */
        textMaxLength?: number;

        /**
         * Placeholder text shown when no value available . Default value is "Add note".
         */
        placeholder?: string;

        /**
         * press event for button
         *
         * (oControlEvent) Event is fired when the user clicks on the control.
         *
         * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]
         */
        addNote?: Function;
      }

      interface $OverflowContainerSettings
        extends sap.ui.core.$ControlSettings {
        /**
         * The height of the container when not expanded. It should be determined by the application. The default
         * value is set to 200px.
         */
        overflowHeight?: sap.ui.core.CSSSize;

        /**
         * This property allows to fully expand the container
         */
        expanded?: boolean;

        /**
         * Controls to be embedded.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface $OverviewTileSettings extends sap.m.$TileSettings {
        /**
         * This property is used to set the title of the tile
         */
        title?: string;

        /**
         * This property is used to set the image of the tile
         */
        icon?: sap.ui.core.URI;

        /**
         * This property is used to set the contact of the tile
         */
        contact?: string;

        /**
         * This property is used to set the address field in the form of the tile
         */
        address?: string;

        /**
         * This property is used to set the opportunities field in the form of the tile
         */
        opportunities?: string;

        /**
         * This property is used to set the rating field in the form of the tile
         */
        rating?: string;

        /**
         * This property is used to set the last contact field in the form of the tile
         */
        lastContact?: string;

        /**
         * This property is used to set the next contact field in the form of the tile
         */
        nextContact?: string;

        /**
         * This property is used to set the revenue to date field in the form of the tile
         */
        revenue?: string;

        /**
         * This property is used to show/hide the tile
         */
        visible?: boolean;

        /**
         * This property is used to set the width of the control
         */
        width?: sap.ui.core.CSSSize;

        /**
         * This property is used to enable an event to be thrown when clicking on the contact's name
         */
        contactActive?: boolean;

        /**
         * This event is fired when the end user clicks on the contact link.
         */
        contactPress?: Function;
      }

      interface $PictureItemSettings extends sap.ui.core.$ControlSettings {
        /**
         * The status of the picture / photo : Added, Deleted, Read
         */
        status?: string;

        /**
         * The content of the picture. Either the uri or base64 content.
         */
        source?: string;

        /**
         * The original name of the picture.
         */
        name?: string;

        /**
         * @deprecated (since 1.16.2) - Width is defined by the AddPicture control
         *
         * The width of the picture.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * @deprecated (since 1.16.2) - Height is defined by the AddPicture control
         *
         * The height of the picture.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Fired when the Image is really loaded
         */
        loaded?: Function;
      }

      interface $PictureTileSettings extends sap.m.$CustomTileSettings {
        /**
         * height (in pixels) of the picture viewer control.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * width (in pixels) of the picture viewer control.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Fired when the user deletes a picture
         */
        pictureDelete?: Function;

        /**
         * Reference to one PictureViewerItem coming from the PictureViewer.
         */
        tileContent?: sap.ca.ui.PictureViewerItem | string;
      }

      interface $PictureViewerSettings extends sap.m.$TileContainerSettings {
        /**
         * Percentage of the space occupied by the image in the picture viewer control. Please note that if the
         * factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
         */
        tileScaling?: number;

        /**
         * Defines whether or not you can remove a picture
         */
        removable?: boolean;

        /**
         * Thrown when user delete an image
         */
        pictureDeleted?: Function;

        /**
         * Aggregation of PictureViewerItem that contains either a picture URI or the actual Image control.
         */
        items?: sap.ca.ui.PictureViewerItem[] | sap.ca.ui.PictureViewerItem;
      }

      interface $PictureViewerItemSettings
        extends sap.ui.core.$ControlSettings {
        /**
         * Image source url.
         */
        src?: string;

        /**
         * Pass in an existing Image control to be used inside the PictureViewer
         */
        image?: sap.m.Image;
      }

      interface $ZoomableScrollContainerSettings
        extends sap.m.$ScrollContainerSettings {
        /**
         * Activate or not the zooming functionality. If FALSE, it acts exactly as a basic ScrollContainer.
         */
        zoomable?: boolean;

        /**
         * Initial scaling factor
         */
        initialScale?: number;

        /**
         * Lowest scaling factor allowed
         */
        minScale?: number;

        /**
         * Highest scaling factor allowed
         */
        maxScale?: number;
      }
      /**
       * @deprecated (since 1.26) - As per central UX requirements, this control is replaced by sap.m.UploadCollection.
       * Please use the new control if you start developing an application instead of using this AddPicture control.
       *
       * Enables users to add pictures into a form. Contains PictureItem controls that describe the media. It
       * is designed to be used simultaneously with the PictureViewer control
       */
      class AddPicture extends sap.ui.core.Control {
        /**
         * Constructor for a new AddPicture.
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
          mSettings?: $AddPictureSettings
        );

        /**
         * Adds some picture to the aggregation {@link #getPictures pictures}.
         */
        addPicture(
          /**
           * The picture to add; if empty, nothing is inserted
           */
          oPicture: sap.ca.ui.PictureItem
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileNotSupported fileNotSupported} event of
         * this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Image upload failed, only supports image format files
         */
        attachFileNotSupported(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:imageUploadFailed imageUploadFailed} event of
         * this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the
         * browser
         */
        attachImageUploadFailed(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:maxPictureLimitReached maxPictureLimitReached}
         * event of this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the limit number of pictures has been reached
         */
        attachMaxPictureLimitReached(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:pictureAdded pictureAdded} event of this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the
         * browser
         */
        attachPictureAdded(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:show show} event of this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the user wishes to view the picture
         */
        attachShow(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Binds aggregation {@link #getPictures pictures} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindPictures(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ca.ui.AddPicture;
        /**
         * Destroys all the pictures in the aggregation {@link #getPictures pictures}.
         */
        destroyPictures(): sap.ca.ui.AddPicture;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:fileNotSupported fileNotSupported} event of
         * this `sap.ca.ui.AddPicture`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFileNotSupported(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:imageUploadFailed imageUploadFailed} event
         * of this `sap.ca.ui.AddPicture`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachImageUploadFailed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:maxPictureLimitReached maxPictureLimitReached}
         * event of this `sap.ca.ui.AddPicture`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachMaxPictureLimitReached(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:pictureAdded pictureAdded} event of this `sap.ca.ui.AddPicture`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPictureAdded(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:show show} event of this `sap.ca.ui.AddPicture`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachShow(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Creates a new subclass of class sap.ca.ui.AddPicture with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
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
         * Fires event {@link #event:fileNotSupported fileNotSupported} to attached listeners.
         */
        fireFileNotSupported(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * An array containing the file names that are not supported
             */
            fileNames?: any;
          }
        ): sap.ca.ui.AddPicture;
        /**
         * Fires event {@link #event:imageUploadFailed imageUploadFailed} to attached listeners.
         */
        fireImageUploadFailed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Fires event {@link #event:maxPictureLimitReached maxPictureLimitReached} to attached listeners.
         */
        fireMaxPictureLimitReached(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Fires event {@link #event:pictureAdded pictureAdded} to attached listeners.
         */
        firePictureAdded(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Fires event {@link #event:show show} to attached listeners.
         */
        fireShow(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Gets current value of property {@link #getButtonPageType buttonPageType}.
         *
         * The page container type in which the button is embedded : Tab or Form
         *
         * Default value is `'Tab'`.
         */
        getButtonPageType(): string;
        /**
         * Gets current value of property {@link #getCompression compression}.
         *
         * Defines whether or not you want to maximize the compression. Possible values : "Low" (thumbnail size)
         * or "High" (screen size)
         *
         * Default value is `'low'`.
         */
        getCompression(): string;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Defines whether the button should appear or not.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getItemSize itemSize}.
         *
         * Defines thumbnail size (height / width) in Pixels
         *
         * Default value is `64`.
         */
        getItemSize(): number;
        /**
         * Gets current value of property {@link #getMaxPictureNumber maxPictureNumber}.
         *
         * Defines the maximum number of pictures you can add. Default is set to 10
         *
         * Default value is `10`.
         */
        getMaxPictureNumber(): number;
        /**
         * Returns a metadata object for class sap.ca.ui.AddPicture.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getPictureAlign pictureAlign}.
         *
         * The text of the button.
         *
         * Default value is `Left`.
         */
        getPictureAlign(): sap.ui.core.TextAlign;
        /**
         * Gets content of aggregation {@link #getPictures pictures}.
         *
         * The list of pictures
         */
        getPictures(): sap.ca.ui.PictureItem[];
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The text of the button.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getUploadUrl uploadUrl}.
         *
         * Url of server we wish to upload to, only used as a fallback when FileReader is not supported by the browser
         */
        getUploadUrl(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the control.
         *
         * Default value is `'100%'`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ca.ui.PictureItem` in the aggregation {@link #getPictures pictures}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfPicture(
          /**
           * The picture whose index is looked for
           */
          oPicture: sap.ca.ui.PictureItem
        ): number;
        /**
         * Inserts a picture into the aggregation {@link #getPictures pictures}.
         */
        insertPicture(
          /**
           * The picture to insert; if empty, nothing is inserted
           */
          oPicture: sap.ca.ui.PictureItem,
          /**
           * The `0`-based index the picture should be inserted at; for a negative value of `iIndex`, the picture
           * is inserted at position 0; for a value greater than the current size of the aggregation, the picture
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ca.ui.AddPicture;
        /**
         * Removes all the controls from the aggregation {@link #getPictures pictures}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllPictures(): sap.ca.ui.PictureItem[];
        /**
         * Removes a picture from the aggregation {@link #getPictures pictures}.
         */
        removePicture(
          /**
           * The picture to remove or its index or id
           */
          vPicture: number | string | sap.ca.ui.PictureItem
        ): sap.ca.ui.PictureItem;
        /**
         * Sets a new value for property {@link #getButtonPageType buttonPageType}.
         *
         * The page container type in which the button is embedded : Tab or Form
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'Tab'`.
         */
        setButtonPageType(
          /**
           * New value for property `buttonPageType`
           */
          sButtonPageType?: string
        ): sap.ca.ui.AddPicture;
        /**
         * Sets a new value for property {@link #getCompression compression}.
         *
         * Defines whether or not you want to maximize the compression. Possible values : "Low" (thumbnail size)
         * or "High" (screen size)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'low'`.
         */
        setCompression(
          /**
           * New value for property `compression`
           */
          sCompression?: string
        ): sap.ca.ui.AddPicture;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Defines whether the button should appear or not.
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
        ): sap.ca.ui.AddPicture;
        /**
         * Sets a new value for property {@link #getItemSize itemSize}.
         *
         * Defines thumbnail size (height / width) in Pixels
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `64`.
         */
        setItemSize(
          /**
           * New value for property `itemSize`
           */
          iItemSize?: number
        ): sap.ca.ui.AddPicture;
        /**
         * Sets a new value for property {@link #getMaxPictureNumber maxPictureNumber}.
         *
         * Defines the maximum number of pictures you can add. Default is set to 10
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `10`.
         */
        setMaxPictureNumber(
          /**
           * New value for property `maxPictureNumber`
           */
          iMaxPictureNumber?: number
        ): sap.ca.ui.AddPicture;
        /**
         * Sets a new value for property {@link #getPictureAlign pictureAlign}.
         *
         * The text of the button.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Left`.
         */
        setPictureAlign(
          /**
           * New value for property `pictureAlign`
           */
          sPictureAlign?: sap.ui.core.TextAlign
        ): sap.ca.ui.AddPicture;
        /**
         * Set the text for the button
         */
        setText(sValue: string): void;
        /**
         * Sets a new value for property {@link #getUploadUrl uploadUrl}.
         *
         * Url of server we wish to upload to, only used as a fallback when FileReader is not supported by the browser
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setUploadUrl(
          /**
           * New value for property `uploadUrl`
           */
          sUploadUrl?: string
        ): sap.ca.ui.AddPicture;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the control.
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
        ): sap.ca.ui.AddPicture;
        /**
         * Unbinds aggregation {@link #getPictures pictures} from model data.
         */
        unbindPictures(): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileNotSupported fileNotSupported} event of
         * this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Image upload failed, only supports image format files
         */
        attachFileNotSupported(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:imageUploadFailed imageUploadFailed} event of
         * this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the
         * browser
         */
        attachImageUploadFailed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:maxPictureLimitReached maxPictureLimitReached}
         * event of this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the limit number of pictures has been reached
         */
        attachMaxPictureLimitReached(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:pictureAdded pictureAdded} event of this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the
         * browser
         */
        attachPictureAdded(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:show show} event of this `sap.ca.ui.AddPicture`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.AddPicture` itself.
         *
         * Indicates that the user wishes to view the picture
         */
        attachShow(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.AddPicture` itself
           */
          oListener?: object
        ): sap.ca.ui.AddPicture;
      }
      /**
       * @deprecated (since 1.24.3) - This control is not required anymore as per central UX requirements. Please
       * use Contextual Filter design instead! This control will not be supported anymore.
       *
       * This control allows you to open a dialog containing a list of customers for users to pick. The chosen
       * selected customer is persisted using sap.ushell services that shall be fully configured outside of this
       * control.
       *
       * The dialog can be open following two modes: "select" : exiting without choosing a customer is firing
       * the customerSelected event with a null customer before closing the dialog "change" : exiting without
       * choosing a customer is simply closing the dialog
       *
       * When opening the dialog in "select" mode, if a customer has been persisted in a previous session, it
       * will be retrieved and the dialog won't open at all.
       */
      class CustomerContext extends sap.ui.core.Control {
        /**
         * Constructor for a new CustomerContext.
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
          mSettings?: $CustomerContextSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:customerSelected customerSelected} event of
         * this `sap.ca.ui.CustomerContext`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.CustomerContext` itself.
         *
         * Fired when a customer is selected in the list. The fired customer can be empty in case the user press
         * the cancel button while the Customer Context has been open using select()
         */
        attachCustomerSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.CustomerContext` itself
           */
          oListener?: object
        ): sap.ca.ui.CustomerContext;
        /**
         * Open the Customer Context dialog
         */
        change(): void;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:customerSelected customerSelected} event of
         * this `sap.ca.ui.CustomerContext`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCustomerSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.CustomerContext;
        /**
         * Creates a new subclass of class sap.ca.ui.CustomerContext with name `sClassName` and enriches it with
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
         * Fires event {@link #event:customerSelected customerSelected} to attached listeners.
         */
        fireCustomerSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.CustomerContext;
        /**
         * Gets current value of property {@link #getCustomerIDProperty customerIDProperty}.
         *
         * Property name of the customer ID
         *
         * Default value is `'CustomerID'`.
         */
        getCustomerIDProperty(): string;
        /**
         * Gets current value of property {@link #getCustomerNameProperty customerNameProperty}.
         *
         * Property name of the customer name
         *
         * Default value is `'CustomerName'`.
         */
        getCustomerNameProperty(): string;
        /**
         * Gets current value of property {@link #getDialogTitle dialogTitle}.
         *
         * Overrides the default Dialog title
         */
        getDialogTitle(): string;
        /**
         * Gets current value of property {@link #getDistributionChannelNameProperty distributionChannelNameProperty}.
         *
         * Property name of the distribution channel name
         *
         * Default value is `'DistributionChannelName'`.
         */
        getDistributionChannelNameProperty(): string;
        /**
         * Gets current value of property {@link #getDivisionNameProperty divisionNameProperty}.
         *
         * Property name of the division name
         *
         * Default value is `'DivisionName'`.
         */
        getDivisionNameProperty(): string;
        /**
         * Returns a metadata object for class sap.ca.ui.CustomerContext.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getPath path}.
         *
         * Model path to the customer collection to be displayed
         *
         * Default value is `'/Customers'`.
         */
        getPath(): string;
        /**
         * Gets current value of property {@link #getPersonalizationPageName personalizationPageName}.
         *
         * Name of your app that shall be unique.
         *
         * Default value is `'AppCustomerContext'`.
         */
        getPersonalizationPageName(): string;
        /**
         * Gets current value of property {@link #getSalesOrganizationNameProperty salesOrganizationNameProperty}.
         *
         * Property name of the sales organization name
         *
         * Default value is `'SalesOrganizationName'`.
         */
        getSalesOrganizationNameProperty(): string;
        /**
         * Gets current value of property {@link #getShowSalesArea showSalesArea}.
         *
         * Display or not the customers sales area as well as its name and id.
         *
         * Default value is `false`.
         */
        getShowSalesArea(): boolean;
        /**
         * Delete the user selected customer
         */
        reset(): void;
        /**
         * Open the Customer Context dialog and fires a null customerSelected if the cancel button is clicked
         */
        select(): void;
        /**
         * Sets a new value for property {@link #getCustomerIDProperty customerIDProperty}.
         *
         * Property name of the customer ID
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'CustomerID'`.
         */
        setCustomerIDProperty(
          /**
           * New value for property `customerIDProperty`
           */
          sCustomerIDProperty?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getCustomerNameProperty customerNameProperty}.
         *
         * Property name of the customer name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'CustomerName'`.
         */
        setCustomerNameProperty(
          /**
           * New value for property `customerNameProperty`
           */
          sCustomerNameProperty?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getDialogTitle dialogTitle}.
         *
         * Overrides the default Dialog title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDialogTitle(
          /**
           * New value for property `dialogTitle`
           */
          sDialogTitle?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getDistributionChannelNameProperty distributionChannelNameProperty}.
         *
         * Property name of the distribution channel name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'DistributionChannelName'`.
         */
        setDistributionChannelNameProperty(
          /**
           * New value for property `distributionChannelNameProperty`
           */
          sDistributionChannelNameProperty?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getDivisionNameProperty divisionNameProperty}.
         *
         * Property name of the division name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'DivisionName'`.
         */
        setDivisionNameProperty(
          /**
           * New value for property `divisionNameProperty`
           */
          sDivisionNameProperty?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Setter for the control model
         */
        // @ts-ignore
        setModel(): void;
        /**
         * Sets a new value for property {@link #getPath path}.
         *
         * Model path to the customer collection to be displayed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'/Customers'`.
         */
        setPath(
          /**
           * New value for property `path`
           */
          sPath?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getPersonalizationPageName personalizationPageName}.
         *
         * Name of your app that shall be unique.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'AppCustomerContext'`.
         */
        setPersonalizationPageName(
          /**
           * New value for property `personalizationPageName`
           */
          sPersonalizationPageName?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getSalesOrganizationNameProperty salesOrganizationNameProperty}.
         *
         * Property name of the sales organization name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'SalesOrganizationName'`.
         */
        setSalesOrganizationNameProperty(
          /**
           * New value for property `salesOrganizationNameProperty`
           */
          sSalesOrganizationNameProperty?: string
        ): sap.ca.ui.CustomerContext;
        /**
         * Sets a new value for property {@link #getShowSalesArea showSalesArea}.
         *
         * Display or not the customers sales area as well as its name and id.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowSalesArea(
          /**
           * New value for property `showSalesArea`
           */
          bShowSalesArea?: boolean
        ): sap.ca.ui.CustomerContext;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:customerSelected customerSelected} event of
         * this `sap.ca.ui.CustomerContext`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.CustomerContext` itself.
         *
         * Fired when a customer is selected in the list. The fired customer can be empty in case the user press
         * the cancel button while the Customer Context has been open using select()
         */
        attachCustomerSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.CustomerContext` itself
           */
          oListener?: object
        ): sap.ca.ui.CustomerContext;
      }
      /**
       * @deprecated (since 1.24.3) - This control is not required anymore as per central UX requirements. Please
       * use Contextual Filter design instead! This control will not be supported anymore.
       *
       * Extends the ObjectListItem to display a line in the customer context control.
       */
      class CustomerControlListItem extends sap.m.CustomListItem {
        /**
         * Constructor for a new CustomerControlListItem.
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
          mSettings?: $CustomerControlListItemSettings
        );

        /**
         * Creates a new subclass of class sap.ca.ui.CustomerControlListItem with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.CustomListItem.extend}.
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
         * Gets current value of property {@link #getCustomerID customerID}.
         *
         * The ID of the customer
         *
         * Default value is `'CustomerID'`.
         */
        getCustomerID(): string;
        /**
         * Gets current value of property {@link #getCustomerName customerName}.
         *
         * The name of the customer
         *
         * Default value is `'CustomerName'`.
         */
        getCustomerName(): string;
        /**
         * Gets current value of property {@link #getDistributionChannelName distributionChannelName}.
         *
         * The distribution channel name
         *
         * Default value is `'DistributionChannelName'`.
         */
        getDistributionChannelName(): string;
        /**
         * Gets current value of property {@link #getDivisionName divisionName}.
         *
         * The division name
         *
         * Default value is `'DivisionName'`.
         */
        getDivisionName(): string;
        /**
         * Returns a metadata object for class sap.ca.ui.CustomerControlListItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getSalesOrganizationName salesOrganizationName}.
         *
         * The sales organization name
         *
         * Default value is `'SalesOrganizationName'`.
         */
        getSalesOrganizationName(): string;
        /**
         * Gets current value of property {@link #getShowSalesArea showSalesArea}.
         *
         * Display or not the customers sales area as well as its name and id.
         *
         * Default value is `false`.
         */
        getShowSalesArea(): boolean;
        /**
         * Sets a new value for property {@link #getCustomerID customerID}.
         *
         * The ID of the customer
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'CustomerID'`.
         */
        setCustomerID(
          /**
           * New value for property `customerID`
           */
          sCustomerID?: string
        ): sap.ca.ui.CustomerControlListItem;
        /**
         * Sets a new value for property {@link #getCustomerName customerName}.
         *
         * The name of the customer
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'CustomerName'`.
         */
        setCustomerName(
          /**
           * New value for property `customerName`
           */
          sCustomerName?: string
        ): sap.ca.ui.CustomerControlListItem;
        /**
         * Sets a new value for property {@link #getDistributionChannelName distributionChannelName}.
         *
         * The distribution channel name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'DistributionChannelName'`.
         */
        setDistributionChannelName(
          /**
           * New value for property `distributionChannelName`
           */
          sDistributionChannelName?: string
        ): sap.ca.ui.CustomerControlListItem;
        /**
         * Sets a new value for property {@link #getDivisionName divisionName}.
         *
         * The division name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'DivisionName'`.
         */
        setDivisionName(
          /**
           * New value for property `divisionName`
           */
          sDivisionName?: string
        ): sap.ca.ui.CustomerControlListItem;
        /**
         * Sets a new value for property {@link #getSalesOrganizationName salesOrganizationName}.
         *
         * The sales organization name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'SalesOrganizationName'`.
         */
        setSalesOrganizationName(
          /**
           * New value for property `salesOrganizationName`
           */
          sSalesOrganizationName?: string
        ): sap.ca.ui.CustomerControlListItem;
        /**
         * Sets a new value for property {@link #getShowSalesArea showSalesArea}.
         *
         * Display or not the customers sales area as well as its name and id.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowSalesArea(
          /**
           * New value for property `showSalesArea`
           */
          bShowSalesArea?: boolean
        ): sap.ca.ui.CustomerControlListItem;
      }
      /**
       * @deprecated (since 1.22) - This control has been made available in sap.m. Please use the sap.m.DatePicker
       * instead! This control will not be supported anymore.
       *
       * Allows end users to interact with dates. Entries can directly be written in, or selected from a calendar
       * pad.
       */
      class DatePicker extends sap.m.InputBase {
        /**
         * Constructor for a new DatePicker.
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
          mSettings?: $DatePickerSettings
        );

        /**
         * Creates a new subclass of class sap.ca.ui.DatePicker with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
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
         * returns selected date as a Date object
         */
        getDate(): object;
        /**
         * Gets current value of property {@link #getDateValue dateValue}.
         *
         * This is a date string formatted as per the format for the control. If there is no valid input for the
         * control, this value will be null.
         */
        getDateValue(): string;
        /**
         * Gets current value of property {@link #getFirstDayOffset firstDayOffset}.
         *
         * This property is used to offset the first day of the week (0 = sunday). Returns int, default 0
         *
         * Default value is `0`.
         */
        getFirstDayOffset(): number;
        /**
         * Returns a metadata object for class sap.ca.ui.DatePicker.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Sets a new value for property {@link #getDateValue dateValue}.
         *
         * This is a date string formatted as per the format for the control. If there is no valid input for the
         * control, this value will be null.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDateValue(
          /**
           * New value for property `dateValue`
           */
          sDateValue?: string
        ): sap.ca.ui.DatePicker;
        /**
         * Sets a new value for property {@link #getFirstDayOffset firstDayOffset}.
         *
         * This property is used to offset the first day of the week (0 = sunday). Returns int, default 0
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setFirstDayOffset(
          /**
           * New value for property `firstDayOffset`
           */
          iFirstDayOffset?: number
        ): sap.ca.ui.DatePicker;
      }
      /**
       * @deprecated (since 1.24) - This control has been made available in sap.m. Please use sap.m.FeedListItem
       * instead! This control will not be supported anymore.
       *
       * Extends the FeedListItem to hide text when it is longer than maxLines. When text is hidden a See more
       * link is displayed, clicking on the link displays the entire text.
       */
      class ExpansibleFeedListItem extends sap.m.FeedListItem {
        /**
         * Constructor for a new ExpansibleFeedListItem.
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
          mSettings?: $ExpansibleFeedListItemSettings
        );

        /**
         * Creates a new subclass of class sap.ca.ui.ExpansibleFeedListItem with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.FeedListItem.extend}.
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
         * Gets current value of property {@link #getMaxLines maxLines}.
         *
         * The maximum number of lines to display before adding the "See more" link.
         *
         * Default value is `5`.
         */
        getMaxLines(): number;
        /**
         * Returns a metadata object for class sap.ca.ui.ExpansibleFeedListItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Sets a new value for property {@link #getMaxLines maxLines}.
         *
         * The maximum number of lines to display before adding the "See more" link.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `5`.
         */
        setMaxLines(
          /**
           * New value for property `maxLines`
           */
          iMaxLines?: number
        ): sap.ca.ui.ExpansibleFeedListItem;
      }
      /**
       * @deprecated (since 1.26) - This control is available in sap.m in 1.26, as sap.m.UploadCollection. Please
       * use UploadCollection, as sap.ca.ui.FileUpload will not be supported anymore from 1.26.
       *
       * Allows you to display a list of uploaded files. You can also upload a new one, rename or delete them
       */
      class FileUpload extends sap.ui.core.Control {
        /**
         * Constructor for a new FileUpload.
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
          mSettings?: $FileUploadSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:beforeUploadFile beforeUploadFile} event of
         * this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired just before the control is about to make a file upload request. The data passed is the file object
         * selected by the user. You may handle this event to attach custom headers for example if your service
         * implementation requires it.
         */
        attachBeforeUploadFile(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now
         *
         * Attaches event handler `fnFunction` to the {@link #event:cancelClicked cancelClicked} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when the cancel button is clicked. The consumer may handle the event if required.
         */
        attachCancelClicked(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:deleteFile deleteFile} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor
         * json for the file to be deleted is passed in the event data
         */
        attachDeleteFile(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileUploadFailed fileUploadFailed} event of
         * this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer
         * should handle the error by showing the appropriate message.
         */
        attachFileUploadFailed(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:renameFile renameFile} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event
         * data and also a property, newFilename, that contains the new filename.
         */
        attachRenameFile(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now. The rename or delete event is enough and
         * should be use to commit the action immediatly
         *
         * Attaches event handler `fnFunction` to the {@link #event:saveClicked saveClicked} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when the save button is clicked. The consumer should handle the event and save all the file renames
         * to backend.
         */
        attachSaveClicked(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:uploadFile uploadFile} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file is uploaded and the response comes back from service. The service response for the
         * file to be added to the list is passed in the event data and the consumer must format it in the correct
         * json structure and pass it back to the control using commitUploadFile method.
         */
        attachUploadFile(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.0) - This aggregation is deprecatd now. The label is part of the ToolBar
         *
         * Destroys the attachmentNumberLabel in the aggregation {@link #getAttachmentNumberLabel attachmentNumberLabel}.
         */
        destroyAttachmentNumberLabel(): sap.ca.ui.FileUpload;
        /**
         * Destroys the toolBar in the aggregation {@link #getToolBar toolBar}.
         */
        destroyToolBar(): sap.ca.ui.FileUpload;
        /**
         * Destroys the uploadProgressLabel in the aggregation {@link #getUploadProgressLabel uploadProgressLabel}.
         */
        destroyUploadProgressLabel(): sap.ca.ui.FileUpload;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:beforeUploadFile beforeUploadFile} event of
         * this `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachBeforeUploadFile(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now
         *
         * Detaches event handler `fnFunction` from the {@link #event:cancelClicked cancelClicked} event of this
         * `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCancelClicked(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:deleteFile deleteFile} event of this `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachDeleteFile(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:fileUploadFailed fileUploadFailed} event of
         * this `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFileUploadFailed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:renameFile renameFile} event of this `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachRenameFile(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now. The rename or delete event is enough and
         * should be use to commit the action immediatly
         *
         * Detaches event handler `fnFunction` from the {@link #event:saveClicked saveClicked} event of this `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSaveClicked(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:uploadFile uploadFile} event of this `sap.ca.ui.FileUpload`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachUploadFile(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Creates a new subclass of class sap.ca.ui.FileUpload with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
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
         * Fires event {@link #event:beforeUploadFile beforeUploadFile} to attached listeners.
         */
        fireBeforeUploadFile(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now
         *
         * Fires event {@link #event:cancelClicked cancelClicked} to attached listeners.
         */
        fireCancelClicked(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Fires event {@link #event:deleteFile deleteFile} to attached listeners.
         */
        fireDeleteFile(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Fires event {@link #event:fileUploadFailed fileUploadFailed} to attached listeners.
         */
        fireFileUploadFailed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Fires event {@link #event:renameFile renameFile} to attached listeners.
         */
        fireRenameFile(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now. The rename or delete event is enough and
         * should be use to commit the action immediatly
         *
         * Fires event {@link #event:saveClicked saveClicked} to attached listeners.
         */
        fireSaveClicked(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Fires event {@link #event:uploadFile uploadFile} to attached listeners.
         */
        fireUploadFile(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Gets current value of property {@link #getAcceptRequestHeader acceptRequestHeader}.
         *
         * The Accept request header the control should use when sending the upload request
         *
         * Default value is `'application/json'`.
         */
        getAcceptRequestHeader(): string;
        /**
         * Gets current value of property {@link #getContributor contributor}.
         *
         * Relative path in model, pointing to property that stores the name of the person who uploaded the file.
         */
        getContributor(): string;
        /**
         * Gets current value of property {@link #getDeleteEnabled deleteEnabled}.
         *
         * Indicates whether delete functionality should be enabled
         */
        getDeleteEnabled(): boolean;
        /**
         * @deprecated (since 1.21.0) - This method is deprecatd now. If you want to prevent edit you can use useEditControls
         * property or the deleteEnabled, renameEnabed and uploadEnabled properties
         *
         * Gets current value of property {@link #getEditMode editMode}.
         *
         * Property to allow toggling between edit and view screens.
         *
         * Default value is `false`.
         */
        getEditMode(): boolean;
        /**
         * Gets current value of property {@link #getEncodeUrl encodeUrl}.
         *
         * Url of server that will base64 encode the file
         */
        getEncodeUrl(): string;
        /**
         * Gets current value of property {@link #getFileExtension fileExtension}.
         *
         * Relative path in model, pointing to property that stores the uploaded files extension. Note: either fileExtension
         * or mimeType may be used, but mimeType is preferable.
         */
        getFileExtension(): string;
        /**
         * Gets current value of property {@link #getFileId fileId}.
         *
         * An identifier property name that is used to uniquely reference the file on the server.
         */
        getFileId(): string;
        /**
         * Gets current value of property {@link #getFileName fileName}.
         *
         * Relative path in model, pointing to property that stores the name of a file.
         */
        getFileName(): string;
        /**
         * Gets current value of property {@link #getItems items}.
         *
         * The base path in the model for the control. Avoid trailing forward slashes in value, as per default value.
         */
        getItems(): string;
        /**
         * Returns a metadata object for class sap.ca.ui.FileUpload.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getMimeType mimeType}.
         *
         * Relative path in model, pointing to property that stores the file's mimeType. Note: either fileExtension
         * or mimeType may be used, but mimeType is preferable.
         */
        getMimeType(): string;
        /**
         * Gets current value of property {@link #getMultipleSelectionEnabled multipleSelectionEnabled}.
         *
         * Indicates whether the user is allowed to select multiple file at once from his desktop
         *
         * Default value is `true`.
         */
        getMultipleSelectionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getRenameEnabled renameEnabled}.
         *
         * Indicates whether rename functionality should be enabled
         */
        getRenameEnabled(): boolean;
        /**
         * Gets current value of property {@link #getSequentialUploadsEnabled sequentialUploadsEnabled}.
         *
         * Indicates whether file uploads should occur sequentially or in parallel. The default is in parallel.
         *
         * Default value is `false`.
         */
        getSequentialUploadsEnabled(): boolean;
        /**
         * Gets current value of property {@link #getShowAttachmentsLabel showAttachmentsLabel}.
         *
         * Show the Attachments count label
         *
         * Default value is `true`.
         */
        getShowAttachmentsLabel(): boolean;
        /**
         * @deprecated (since 1.21.0) - This method is deprecated now. Use the showAttachmentsLabel instead
         *
         * Gets current value of property {@link #getShowAttachmentsLabelInEditMode showAttachmentsLabelInEditMode}.
         *
         * Show the Attachments label in edit mode
         *
         * Default value is `true`.
         */
        getShowAttachmentsLabelInEditMode(): boolean;
        /**
         * Gets current value of property {@link #getShowNoData showNoData}.
         *
         * Show the label "No data" when the control doesn't have files
         *
         * Default value is `false`.
         */
        getShowNoData(): boolean;
        /**
         * Gets current value of property {@link #getSize size}.
         *
         * Relative path in model, pointing to property that stores the size of a file.
         */
        getSize(): string;
        /**
         * Gets content of aggregation {@link #getToolBar toolBar}.
         *
         * Aggregation that contains the buttons for adding
         */
        getToolBar(): sap.m.Toolbar;
        /**
         * Gets current value of property {@link #getUploadedDate uploadedDate}.
         *
         * Relative path in model, pointing to property that stores the date at which a file was uploaded.
         */
        getUploadedDate(): string;
        /**
         * Gets current value of property {@link #getUploadEnabled uploadEnabled}.
         *
         * This property enables & disables the ability to upload a file
         */
        getUploadEnabled(): boolean;
        /**
         * Gets content of aggregation {@link #getUploadProgressLabel uploadProgressLabel}.
         *
         * Aggregation that displays the current number of items that are being uploaded
         */
        getUploadProgressLabel(): sap.m.Label;
        /**
         * Gets current value of property {@link #getUploadUrl uploadUrl}.
         *
         * Url of server we wish to upload to
         */
        getUploadUrl(): string;
        /**
         * Gets current value of property {@link #getUrl url}.
         *
         * Relative path in model, pointing to property that stores the url at which the file is stored.
         */
        getUrl(): string;
        /**
         * Gets current value of property {@link #getUseEditControls useEditControls}.
         *
         * Show the edit user controls to rename and delete files (same as deleteEnabled and renameEnabled)
         *
         * Default value is `false`.
         */
        getUseEditControls(): boolean;
        /**
         * Gets current value of property {@link #getUseMultipart useMultipart}.
         *
         * Indicates if the control should send multipart/form data request when uploading
         *
         * Default value is `false`.
         */
        getUseMultipart(): boolean;
        /**
         * Gets current value of property {@link #getXsrfToken xsrfToken}.
         *
         * The XSRF token the control should use when making the upload request. If it is not set, the control will
         * not use a security token.
         */
        getXsrfToken(): string;
        /**
         * Sets a new value for property {@link #getAcceptRequestHeader acceptRequestHeader}.
         *
         * The Accept request header the control should use when sending the upload request
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'application/json'`.
         */
        setAcceptRequestHeader(
          /**
           * New value for property `acceptRequestHeader`
           */
          sAcceptRequestHeader?: string
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.0) - This aggregation is deprecatd now. The label is part of the ToolBar
         *
         * Sets the aggregated {@link #getAttachmentNumberLabel attachmentNumberLabel}.
         */
        setAttachmentNumberLabel(
          /**
           * The attachmentNumberLabel to set
           */
          oAttachmentNumberLabel: sap.m.Label
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getEncodeUrl encodeUrl}.
         *
         * Url of server that will base64 encode the file
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setEncodeUrl(
          /**
           * New value for property `encodeUrl`
           */
          sEncodeUrl?: string
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getFileId fileId}.
         *
         * An identifier property name that is used to uniquely reference the file on the server.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFileId(
          /**
           * New value for property `fileId`
           */
          sFileId?: string
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getMultipleSelectionEnabled multipleSelectionEnabled}.
         *
         * Indicates whether the user is allowed to select multiple file at once from his desktop
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setMultipleSelectionEnabled(
          /**
           * New value for property `multipleSelectionEnabled`
           */
          bMultipleSelectionEnabled?: boolean
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getSequentialUploadsEnabled sequentialUploadsEnabled}.
         *
         * Indicates whether file uploads should occur sequentially or in parallel. The default is in parallel.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSequentialUploadsEnabled(
          /**
           * New value for property `sequentialUploadsEnabled`
           */
          bSequentialUploadsEnabled?: boolean
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getShowNoData showNoData}.
         *
         * Show the label "No data" when the control doesn't have files
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowNoData(
          /**
           * New value for property `showNoData`
           */
          bShowNoData?: boolean
        ): sap.ca.ui.FileUpload;
        /**
         * Sets the aggregated {@link #getToolBar toolBar}.
         */
        setToolBar(
          /**
           * The toolBar to set
           */
          oToolBar: sap.m.Toolbar
        ): sap.ca.ui.FileUpload;
        /**
         * Sets the aggregated {@link #getUploadProgressLabel uploadProgressLabel}.
         */
        setUploadProgressLabel(
          /**
           * The uploadProgressLabel to set
           */
          oUploadProgressLabel: sap.m.Label
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getUploadUrl uploadUrl}.
         *
         * Url of server we wish to upload to
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setUploadUrl(
          /**
           * New value for property `uploadUrl`
           */
          sUploadUrl?: string
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getUseMultipart useMultipart}.
         *
         * Indicates if the control should send multipart/form data request when uploading
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setUseMultipart(
          /**
           * New value for property `useMultipart`
           */
          bUseMultipart?: boolean
        ): sap.ca.ui.FileUpload;
        /**
         * Sets a new value for property {@link #getXsrfToken xsrfToken}.
         *
         * The XSRF token the control should use when making the upload request. If it is not set, the control will
         * not use a security token.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setXsrfToken(
          /**
           * New value for property `xsrfToken`
           */
          sXsrfToken?: string
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:beforeUploadFile beforeUploadFile} event of
         * this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired just before the control is about to make a file upload request. The data passed is the file object
         * selected by the user. You may handle this event to attach custom headers for example if your service
         * implementation requires it.
         */
        attachBeforeUploadFile(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now
         *
         * Attaches event handler `fnFunction` to the {@link #event:cancelClicked cancelClicked} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when the cancel button is clicked. The consumer may handle the event if required.
         */
        attachCancelClicked(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:deleteFile deleteFile} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor
         * json for the file to be deleted is passed in the event data
         */
        attachDeleteFile(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileUploadFailed fileUploadFailed} event of
         * this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer
         * should handle the error by showing the appropriate message.
         */
        attachFileUploadFailed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:renameFile renameFile} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event
         * data and also a property, newFilename, that contains the new filename.
         */
        attachRenameFile(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * @deprecated (since 1.21.1) - This method is deprecated now. The rename or delete event is enough and
         * should be use to commit the action immediatly
         *
         * Attaches event handler `fnFunction` to the {@link #event:saveClicked saveClicked} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when the save button is clicked. The consumer should handle the event and save all the file renames
         * to backend.
         */
        attachSaveClicked(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:uploadFile uploadFile} event of this `sap.ca.ui.FileUpload`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.FileUpload` itself.
         *
         * Fired when a file is uploaded and the response comes back from service. The service response for the
         * file to be added to the list is passed in the event data and the consumer must format it in the correct
         * json structure and pass it back to the control using commitUploadFile method.
         */
        attachUploadFile(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.FileUpload` itself
           */
          oListener?: object
        ): sap.ca.ui.FileUpload;
      }
      /**
       * @deprecated (since 1.24.3) - This control is not required anymore as per central UX requirements. This
       * control will not be supported anymore.
       *
       * A Tile container for the Overview tile with growing capabilities
       */
      class GrowingTileContainer extends sap.m.ScrollContainer {
        /**
         * Constructor for a new GrowingTileContainer.
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
          mSettings?: $GrowingTileContainerSettings
        );

        /**
         * Creates a new subclass of class sap.ca.ui.GrowingTileContainer with name `sClassName` and enriches it
         * with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ScrollContainer.extend}.
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
         * Gets current value of property {@link #getGrowing growing}.
         *
         * growing enablement
         *
         * Default value is `false`.
         */
        getGrowing(): boolean;
        /**
         * Gets current value of property {@link #getGrowingScrollToLoad growingScrollToLoad}.
         *
         * load when scrolling
         *
         * Default value is `false`.
         */
        getGrowingScrollToLoad(): boolean;
        /**
         * Gets current value of property {@link #getGrowingThreshold growingThreshold}.
         *
         * growing Threshold
         *
         * Default value is `20`.
         */
        getGrowingThreshold(): number;
        /**
         * Returns a metadata object for class sap.ca.ui.GrowingTileContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Sets a new value for property {@link #getGrowing growing}.
         *
         * growing enablement
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setGrowing(
          /**
           * New value for property `growing`
           */
          bGrowing?: boolean
        ): sap.ca.ui.GrowingTileContainer;
        /**
         * Sets a new value for property {@link #getGrowingScrollToLoad growingScrollToLoad}.
         *
         * load when scrolling
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setGrowingScrollToLoad(
          /**
           * New value for property `growingScrollToLoad`
           */
          bGrowingScrollToLoad?: boolean
        ): sap.ca.ui.GrowingTileContainer;
        /**
         * Sets a new value for property {@link #getGrowingThreshold growingThreshold}.
         *
         * growing Threshold
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `20`.
         */
        setGrowingThreshold(
          /**
           * New value for property `growingThreshold`
           */
          iGrowingThreshold?: number
        ): sap.ca.ui.GrowingTileContainer;
      }
      /**
       * @deprecated (since 1.24.1) - HierarchicalSelectDialog is deprecated as per central UX requirements. This
       * control will not be supported anymore.
       *
       * Select an item in a dialog from a hierarchical list
       */
      class HierarchicalSelectDialog extends sap.m.Dialog {
        /**
         * Constructor for a new HierarchicalSelectDialog.
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
          mSettings?: $HierarchicalSelectDialogSettings
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ca.ui.HierarchicalSelectDialogItem
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ca.ui.HierarchicalSelectDialog`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.HierarchicalSelectDialog` itself.
         *
         * Thrown when user clicks cancel
         */
        attachCancel(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.HierarchicalSelectDialog`
           * itself
           */
          oListener?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ca.ui.HierarchicalSelectDialog`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.HierarchicalSelectDialog` itself.
         *
         * Thrown when user selects an item
         */
        attachSelect(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.HierarchicalSelectDialog`
           * itself
           */
          oListener?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ca.ui.HierarchicalSelectDialog`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCancel(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ca.ui.HierarchicalSelectDialog`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSelect(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Creates a new subclass of class sap.ca.ui.HierarchicalSelectDialog with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
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
         * Fires event {@link #event:cancel cancel} to attached listeners.
         */
        fireCancel(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Type checker, only HierarchicalSelectDialogItem are allowed. Please do NOT use the "content" aggregation
         * of the dialog
         */
        getItems(): sap.ca.ui.HierarchicalSelectDialogItem[];
        /**
         * Returns a metadata object for class sap.ca.ui.HierarchicalSelectDialog.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Checks for the provided `sap.ca.ui.HierarchicalSelectDialogItem` in the aggregation {@link #getItems
         * items}. and returns its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ca.ui.HierarchicalSelectDialogItem
        ): number;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ca.ui.HierarchicalSelectDialogItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ca.ui.HierarchicalSelectDialogItem
        ): sap.ca.ui.HierarchicalSelectDialogItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ca.ui.HierarchicalSelectDialog`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.HierarchicalSelectDialog` itself.
         *
         * Thrown when user clicks cancel
         */
        attachCancel(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.HierarchicalSelectDialog`
           * itself
           */
          oListener?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ca.ui.HierarchicalSelectDialog`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.HierarchicalSelectDialog` itself.
         *
         * Thrown when user selects an item
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.HierarchicalSelectDialog`
           * itself
           */
          oListener?: object
        ): sap.ca.ui.HierarchicalSelectDialog;
      }
      /**
       * @deprecated (since 1.24) - This control is deprecated as per central UX requirements. This control will
       * not be supported anymore.
       *
       * Kind of item required by the sap.ca.ui.HierarchicalSelectDialog control. An item is actually one page
       * of the Dialog.
       */
      class HierarchicalSelectDialogItem extends sap.ui.core.Item {
        /**
         * Constructor for a new HierarchicalSelectDialogItem.
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
          mSettings?: $HierarchicalSelectDialogItemSettings
        );

        /**
         * Destroys the listItemTemplate in the aggregation {@link #getListItemTemplate listItemTemplate}.
         */
        destroyListItemTemplate(): sap.ca.ui.HierarchicalSelectDialogItem;
        /**
         * Creates a new subclass of class sap.ca.ui.HierarchicalSelectDialogItem with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
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
         * Gets current value of property {@link #getEntityName entityName}.
         *
         * Property used for the binding
         */
        getEntityName(): string;
        /**
         * Gets content of aggregation {@link #getListItemTemplate listItemTemplate}.
         *
         * Used as a template for each list item of the page
         */
        getListItemTemplate(): sap.m.ListItemBase;
        /**
         * Returns a metadata object for class sap.ca.ui.HierarchicalSelectDialogItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Dialog title for this item
         */
        getTitle(): string;
        /**
         * Sets a new value for property {@link #getEntityName entityName}.
         *
         * Property used for the binding
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setEntityName(
          /**
           * New value for property `entityName`
           */
          sEntityName?: string
        ): sap.ca.ui.HierarchicalSelectDialogItem;
        /**
         * Sets the aggregated {@link #getListItemTemplate listItemTemplate}.
         */
        setListItemTemplate(
          /**
           * The listItemTemplate to set
           */
          oListItemTemplate: sap.m.ListItemBase
        ): sap.ca.ui.HierarchicalSelectDialogItem;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Dialog title for this item
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle?: string
        ): sap.ca.ui.HierarchicalSelectDialogItem;
      }
      /**
       * @deprecated (since 1.24.3) - This control is not required anymore as per central UX requirements. This
       * control will not be supported anymore.
       *
       * Display the Hierarchy of an item. Useful to indicates where an object stand in a chain of hierarchical
       * data. The emphasized item shows the one item to display. Optional item can be hidden using the hideOptionalLevels
       * property. Hidden items will stay accessible with an expand button.
       */
      class Hierarchy extends sap.ui.core.Control {
        /**
         * Constructor for a new Hierarchy.
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
          mSettings?: $HierarchySettings
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ca.ui.HierarchyItem
        ): sap.ca.ui.Hierarchy;
        /**
         * Binds aggregation {@link #getItems items} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindItems(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ca.ui.Hierarchy;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ca.ui.Hierarchy;
        /**
         * Creates a new subclass of class sap.ca.ui.Hierarchy with name `sClassName` and enriches it with the information
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
         * Gets current value of property {@link #getHideOptionalLevels hideOptionalLevels}.
         *
         * Hide the levels marked optional. An expand button will appear
         *
         * Default value is `true`.
         */
        getHideOptionalLevels(): boolean;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * The array of HierarchyItem ordered and starting from the root hierarchy
         */
        getItems(): sap.ca.ui.HierarchyItem[];
        /**
         * Returns a metadata object for class sap.ca.ui.Hierarchy.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Checks for the provided `sap.ca.ui.HierarchyItem` in the aggregation {@link #getItems items}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ca.ui.HierarchyItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ca.ui.HierarchyItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ca.ui.Hierarchy;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ca.ui.HierarchyItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ca.ui.HierarchyItem
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getHideOptionalLevels hideOptionalLevels}.
         *
         * Hide the levels marked optional. An expand button will appear
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setHideOptionalLevels(
          /**
           * New value for property `hideOptionalLevels`
           */
          bHideOptionalLevels?: boolean
        ): sap.ca.ui.Hierarchy;
        /**
         * Unbinds aggregation {@link #getItems items} from model data.
         */
        unbindItems(): sap.ca.ui.Hierarchy;
      }
      /**
       * @deprecated (since 1.24) - This control is deprecated as per central UX requirements. This control will
       * not be supported anymore.
       *
       * Item that represent a line of the Hierarchy control. The emphasized property should apply to the item
       * that we want to represent in his hierarchy. Optionals item will be hidden if the option is true on the
       * Hierarchy control.
       */
      class HierarchyItem extends sap.ui.core.Control {
        /**
         * Constructor for a new HierarchyItem.
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
          mSettings?: $HierarchyItemSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:linkPress linkPress} event of this `sap.ca.ui.HierarchyItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.HierarchyItem` itself.
         *
         * Event when a link is pressed
         */
        attachLinkPress(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.HierarchyItem` itself
           */
          oListener?: object
        ): sap.ca.ui.HierarchyItem;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:linkPress linkPress} event of this `sap.ca.ui.HierarchyItem`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLinkPress(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.HierarchyItem;
        /**
         * Creates a new subclass of class sap.ca.ui.HierarchyItem with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
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
         * Fires event {@link #event:linkPress linkPress} to attached listeners.
         */
        fireLinkPress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.HierarchyItem;
        /**
         * Gets current value of property {@link #getEmphasized emphasized}.
         *
         * Does the item looks emphasized
         *
         * Default value is `false`.
         */
        getEmphasized(): boolean;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon for the item
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIdentifier identifier}.
         *
         * Identifier text
         */
        getIdentifier(): string;
        /**
         * Gets current value of property {@link #getLevelType levelType}.
         *
         * Level type
         */
        getLevelType(): string;
        /**
         * Gets current value of property {@link #getLink link}.
         *
         * Text of the link
         */
        getLink(): string;
        /**
         * Returns a metadata object for class sap.ca.ui.HierarchyItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getOptional optional}.
         *
         * Is the item optional, so we hide it if option is set on the Hierarchy control
         *
         * Default value is `false`.
         */
        getOptional(): boolean;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Title
         */
        getTitle(): string;
        /**
         * Sets a new value for property {@link #getEmphasized emphasized}.
         *
         * Does the item looks emphasized
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEmphasized(
          /**
           * New value for property `emphasized`
           */
          bEmphasized?: boolean
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Icon for the item
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon?: sap.ui.core.URI
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getIdentifier identifier}.
         *
         * Identifier text
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIdentifier(
          /**
           * New value for property `identifier`
           */
          sIdentifier?: string
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getLevelType levelType}.
         *
         * Level type
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLevelType(
          /**
           * New value for property `levelType`
           */
          sLevelType?: string
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getLink link}.
         *
         * Text of the link
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLink(
          /**
           * New value for property `link`
           */
          sLink?: string
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getOptional optional}.
         *
         * Is the item optional, so we hide it if option is set on the Hierarchy control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setOptional(
          /**
           * New value for property `optional`
           */
          bOptional?: boolean
        ): sap.ca.ui.HierarchyItem;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle?: string
        ): sap.ca.ui.HierarchyItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:linkPress linkPress} event of this `sap.ca.ui.HierarchyItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.HierarchyItem` itself.
         *
         * Event when a link is pressed
         */
        attachLinkPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.HierarchyItem` itself
           */
          oListener?: object
        ): sap.ca.ui.HierarchyItem;
      }
      /**
       * @deprecated (since 1.22) - This control is not required anymore as per central UX requirements. Please
       * use sap.m.Input instead! This control will not be supported anymore.
       *
       * This control is used to switch between readonly and edit modes. A typical use case would be to change
       * the value of a Label.
       */
      class InPlaceEdit extends sap.ui.core.Control {
        /**
         * Constructor for a new InPlaceEdit.
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
          mSettings?: $InPlaceEditSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ca.ui.InPlaceEdit`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.InPlaceEdit` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter
         * key is pressed.
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.InPlaceEdit` itself
           */
          oListener?: object
        ): sap.ca.ui.InPlaceEdit;
        /**
         * Clear the old text after a change to disable the undo functionality. If undoEnabled is false this has
         * no effect.
         */
        clearOldText(): void;
        /**
         * Destroys the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ca.ui.InPlaceEdit;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ca.ui.InPlaceEdit`.
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
        ): sap.ca.ui.InPlaceEdit;
        /**
         * Creates a new subclass of class sap.ca.ui.InPlaceEdit with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The new / changed value of the InPlaceEdit.
             */
            newValue?: string;
          }
        ): sap.ca.ui.InPlaceEdit;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Content control of the InPlaceEdit. The following control is allowed: sap.m.Input, sap.m.Link
         */
        getContent(): sap.ui.core.Control;
        /**
         * Returns a metadata object for class sap.ca.ui.InPlaceEdit.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Returns the tooltip for this InPlaceEdit if any or an undefined value. The tooltip can either be a simple
         * string or a subclass of {@link sap.ui.core.TooltipBase}.
         *
         * Callers that are only interested in tooltips of type string (e.g. to render them as a `title` attribute),
         * should call the convenience method {@link #getTooltip_AsString} instead. If they want to get a tooltip
         * text no matter where it comes from (be it a string tooltip or the text from a TooltipBase instance) then
         * they could call {@link #getTooltip_Text} instead.
         *
         * If a content control is assigned to the InPlaceEdit the tooltip of this control is used. A directly set
         * tooltip to the InPlaceEdit is ignored in this case.
         */
        // @ts-ignore
        getTooltip(): string | sap.ui.core.TooltipBase;
        /**
         * Gets current value of property {@link #getUndoEnabled undoEnabled}.
         *
         * If undo is enabled after changing the text an undo button appears.
         *
         * Default value is `false`.
         */
        getUndoEnabled(): boolean;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If
         * the content control has a own valueState property this will be used.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Sets the aggregated {@link #getContent content}.
         */
        setContent(
          /**
           * The content to set
           */
          oContent: sap.ui.core.Control
        ): sap.ca.ui.InPlaceEdit;
        /**
         * Sets a new tooltip for this InPlaceEdit. The tooltip can either be a simple string (which in most cases
         * will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         *
         * If a new tooltip is set, any previously set tooltip is deactivated.
         *
         * If a content control is assigned to the InPlaceEdit the tooltip of this control is used. A directly set
         * tooltip to the InPlaceEdit is ignored in this case.
         */
        // @ts-ignore
        setTooltip(): void;
        /**
         * Sets a new value for property {@link #getUndoEnabled undoEnabled}.
         *
         * If undo is enabled after changing the text an undo button appears.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setUndoEnabled(
          /**
           * New value for property `undoEnabled`
           */
          bUndoEnabled?: boolean
        ): sap.ca.ui.InPlaceEdit;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If
         * the content control has a own valueState property this will be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState?: sap.ui.core.ValueState
        ): sap.ca.ui.InPlaceEdit;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ca.ui.InPlaceEdit`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.InPlaceEdit` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter
         * key is pressed.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.InPlaceEdit` itself
           */
          oListener?: object
        ): sap.ca.ui.InPlaceEdit;
      }
      /**
       * @deprecated (since 1.22) - This control has been made available in sap.m. Please use sap.m.FeedInput
       * with sap.m.FeedListItem instead! This control will not be supported anymore.
       *
       * This control is a List with the ability to render an additional control on top of it to add new notes.
       * The developer is responsible to give the correct template to use to display notes (recommended are either
       * the FeedListItem or the ExpansibleFeedListItem). The developer is also responsible to implement the code
       * to send the notes to the backend system, by responding to the addNote event.
       */
      class Notes extends sap.m.List {
        /**
         * Constructor for a new Notes.
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
          mSettings?: $NotesSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:addNote addNote} event of this `sap.ca.ui.Notes`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.Notes` itself.
         *
         * press event for button
         *
         * (oControlEvent) Event is fired when the user clicks on the control.
         *
         * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]
         */
        attachAddNote(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.Notes` itself
           */
          oListener?: object
        ): sap.ca.ui.Notes;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:addNote addNote} event of this `sap.ca.ui.Notes`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachAddNote(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.Notes;
        /**
         * Creates a new subclass of class sap.ca.ui.Notes with name `sClassName` and enriches it with the information
         * contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.List.extend}.
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
         * Fires event {@link #event:addNote addNote} to attached listeners.
         */
        fireAddNote(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.Notes;
        /**
         * Returns a metadata object for class sap.ca.ui.Notes.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getPlaceholder placeholder}.
         *
         * Placeholder text shown when no value available . Default value is "Add note".
         */
        getPlaceholder(): string;
        /**
         * Gets current value of property {@link #getShowNoteInput showNoteInput}.
         *
         * If set to true, this control will render an additional control to create new notes.
         *
         * Default value is `true`.
         */
        getShowNoteInput(): boolean;
        /**
         * Gets current value of property {@link #getTextMaxLength textMaxLength}.
         *
         * max text input length
         *
         * Default value is `1000`.
         */
        getTextMaxLength(): number;
        /**
         * Sets a new value for property {@link #getPlaceholder placeholder}.
         *
         * Placeholder text shown when no value available . Default value is "Add note".
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setPlaceholder(
          /**
           * New value for property `placeholder`
           */
          sPlaceholder?: string
        ): sap.ca.ui.Notes;
        /**
         * Sets a new value for property {@link #getShowNoteInput showNoteInput}.
         *
         * If set to true, this control will render an additional control to create new notes.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowNoteInput(
          /**
           * New value for property `showNoteInput`
           */
          bShowNoteInput?: boolean
        ): sap.ca.ui.Notes;
        /**
         * Sets a new value for property {@link #getTextMaxLength textMaxLength}.
         *
         * max text input length
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1000`.
         */
        setTextMaxLength(
          /**
           * New value for property `textMaxLength`
           */
          iTextMaxLength?: number
        ): sap.ca.ui.Notes;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:addNote addNote} event of this `sap.ca.ui.Notes`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.Notes` itself.
         *
         * press event for button
         *
         * (oControlEvent) Event is fired when the user clicks on the control.
         *
         * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]
         */
        attachAddNote(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.Notes` itself
           */
          oListener?: object
        ): sap.ca.ui.Notes;
      }
      /**
       * @deprecated (since 1.24.1) - OverflowContainer is deprecated as per central UX requirements. This control
       * will not be supported anymore.
       *
       * The OverflowContainer allows the content of a control to be partially displayed before being fully expanded.
       * It will cut its content to a fixed height that can be defined. It is fully suitable within an IconTabBar.
       */
      class OverflowContainer extends sap.ui.core.Control {
        /**
         * Constructor for a new OverflowContainer.
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
          mSettings?: $OverflowContainerSettings
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ca.ui.OverflowContainer;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ca.ui.OverflowContainer;
        /**
         * Creates a new subclass of class sap.ca.ui.OverflowContainer with name `sClassName` and enriches it with
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
         * Gets content of aggregation {@link #getContent content}.
         *
         * Controls to be embedded.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getExpanded expanded}.
         *
         * This property allows to fully expand the container
         *
         * Default value is `false`.
         */
        getExpanded(): boolean;
        /**
         * Returns a metadata object for class sap.ca.ui.OverflowContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getOverflowHeight overflowHeight}.
         *
         * The height of the container when not expanded. It should be determined by the application. The default
         * value is set to 200px.
         *
         * Default value is `'200px'`.
         */
        getOverflowHeight(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ca.ui.OverflowContainer;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getExpanded expanded}.
         *
         * This property allows to fully expand the container
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setExpanded(
          /**
           * New value for property `expanded`
           */
          bExpanded?: boolean
        ): sap.ca.ui.OverflowContainer;
        /**
         * Sets a new value for property {@link #getOverflowHeight overflowHeight}.
         *
         * The height of the container when not expanded. It should be determined by the application. The default
         * value is set to 200px.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'200px'`.
         */
        setOverflowHeight(
          /**
           * New value for property `overflowHeight`
           */
          sOverflowHeight?: sap.ui.core.CSSSize
        ): sap.ca.ui.OverflowContainer;
      }
      /**
       * @deprecated (since 1.24.3) - This control is not required anymore as per central UX requirements. This
       * control will not be supported anymore.
       *
       * Display aTile that presents an overview of a customer
       */
      class OverviewTile extends sap.m.Tile {
        /**
         * Constructor for a new OverviewTile.
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
          mSettings?: $OverviewTileSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:contactPress contactPress} event of this `sap.ca.ui.OverviewTile`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.OverviewTile` itself.
         *
         * This event is fired when the end user clicks on the contact link.
         */
        attachContactPress(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.OverviewTile` itself
           */
          oListener?: object
        ): sap.ca.ui.OverviewTile;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:contactPress contactPress} event of this `sap.ca.ui.OverviewTile`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachContactPress(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.OverviewTile;
        /**
         * Creates a new subclass of class sap.ca.ui.OverviewTile with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Tile.extend}.
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
         * Fires event {@link #event:contactPress contactPress} to attached listeners.
         */
        fireContactPress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.OverviewTile;
        /**
         * Gets current value of property {@link #getAddress address}.
         *
         * This property is used to set the address field in the form of the tile
         *
         * Default value is `'null'`.
         */
        getAddress(): string;
        /**
         * Gets current value of property {@link #getContact contact}.
         *
         * This property is used to set the contact of the tile
         *
         * Default value is `'null'`.
         */
        getContact(): string;
        /**
         * Gets current value of property {@link #getContactActive contactActive}.
         *
         * This property is used to enable an event to be thrown when clicking on the contact's name
         *
         * Default value is `false`.
         */
        getContactActive(): boolean;
        /**
         * Gets current value of property {@link #getLastContact lastContact}.
         *
         * This property is used to set the last contact field in the form of the tile
         *
         * Default value is `'null'`.
         */
        getLastContact(): string;
        /**
         * Returns a metadata object for class sap.ca.ui.OverviewTile.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getNextContact nextContact}.
         *
         * This property is used to set the next contact field in the form of the tile
         *
         * Default value is `'null'`.
         */
        getNextContact(): string;
        /**
         * Gets current value of property {@link #getOpportunities opportunities}.
         *
         * This property is used to set the opportunities field in the form of the tile
         *
         * Default value is `'null'`.
         */
        getOpportunities(): string;
        /**
         * Gets current value of property {@link #getRating rating}.
         *
         * This property is used to set the rating field in the form of the tile
         *
         * Default value is `'null'`.
         */
        getRating(): string;
        /**
         * Gets current value of property {@link #getRevenue revenue}.
         *
         * This property is used to set the revenue to date field in the form of the tile
         *
         * Default value is `'null'`.
         */
        getRevenue(): string;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * This property is used to set the title of the tile
         *
         * Default value is `'null'`.
         */
        getTitle(): string;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * This property is used to show/hide the tile
         *
         * Default value is `true`.
         */
        // @ts-ignore
        getVisible(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * This property is used to set the width of the control
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * The initialization method
         */
        // @ts-ignore
        init(): void;
        /**
         * Sets a new value for property {@link #getAddress address}.
         *
         * This property is used to set the address field in the form of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setAddress(
          /**
           * New value for property `address`
           */
          sAddress?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getContact contact}.
         *
         * This property is used to set the contact of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setContact(
          /**
           * New value for property `contact`
           */
          sContact?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getContactActive contactActive}.
         *
         * This property is used to enable an event to be thrown when clicking on the contact's name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setContactActive(
          /**
           * New value for property `contactActive`
           */
          bContactActive?: boolean
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * This property is used to set the image of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon?: sap.ui.core.URI
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getLastContact lastContact}.
         *
         * This property is used to set the last contact field in the form of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setLastContact(
          /**
           * New value for property `lastContact`
           */
          sLastContact?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getNextContact nextContact}.
         *
         * This property is used to set the next contact field in the form of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setNextContact(
          /**
           * New value for property `nextContact`
           */
          sNextContact?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getOpportunities opportunities}.
         *
         * This property is used to set the opportunities field in the form of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setOpportunities(
          /**
           * New value for property `opportunities`
           */
          sOpportunities?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getRating rating}.
         *
         * This property is used to set the rating field in the form of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setRating(
          /**
           * New value for property `rating`
           */
          sRating?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getRevenue revenue}.
         *
         * This property is used to set the revenue to date field in the form of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setRevenue(
          /**
           * New value for property `revenue`
           */
          sRevenue?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * This property is used to set the title of the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'null'`.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle?: string
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getVisible visible}.
         *
         * This property is used to show/hide the tile
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        // @ts-ignore
        setVisible(
          /**
           * New value for property `visible`
           */
          bVisible?: boolean
        ): sap.ca.ui.OverviewTile;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * This property is used to set the width of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth?: sap.ui.core.CSSSize
        ): sap.ca.ui.OverviewTile;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:contactPress contactPress} event of this `sap.ca.ui.OverviewTile`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.OverviewTile` itself.
         *
         * This event is fired when the end user clicks on the contact link.
         */
        attachContactPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.OverviewTile` itself
           */
          oListener?: object
        ): sap.ca.ui.OverviewTile;
      }
      /**
       * @deprecated (since 1.22) - This control has been made available in sap.m. Please use the sap.m.Carousel
       * instead! This control will not be supported anymore.
       *
       * A picture / photo Item for AddPicture and PictureViewer Controls
       */
      class PictureItem extends sap.ui.core.Control {
        /**
         * Constructor for a new PictureItem.
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
          mSettings?: $PictureItemSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:loaded loaded} event of this `sap.ca.ui.PictureItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.PictureItem` itself.
         *
         * Fired when the Image is really loaded
         */
        attachLoaded(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.PictureItem` itself
           */
          oListener?: object
        ): sap.ca.ui.PictureItem;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:loaded loaded} event of this `sap.ca.ui.PictureItem`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLoaded(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.PictureItem;
        /**
         * Creates a new subclass of class sap.ca.ui.PictureItem with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
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
         * Fires event {@link #event:loaded loaded} to attached listeners.
         */
        fireLoaded(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.PictureItem;
        /**
         * @deprecated (since 1.16.2) - Height is defined by the AddPicture control
         *
         * Gets current value of property {@link #getHeight height}.
         *
         * The height of the picture.
         *
         * Default value is `'62px'`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ca.ui.PictureItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * The original name of the picture.
         */
        getName(): string;
        /**
         * Gets current value of property {@link #getSource source}.
         *
         * The content of the picture. Either the uri or base64 content.
         */
        getSource(): string;
        /**
         * Gets current value of property {@link #getStatus status}.
         *
         * The status of the picture / photo : Added, Deleted, Read
         */
        getStatus(): string;
        /**
         * @deprecated (since 1.16.2) - Width is defined by the AddPicture control
         *
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the picture.
         *
         * Default value is `'62px'`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Set the File object
         */
        setFile(
          file: File,
          /**
           * Canvas config
           */
          oConfig: Object
        ): void;
        /**
         * @deprecated (since 1.16.2) - Height is defined by the AddPicture control
         *
         * Sets a new value for property {@link #getHeight height}.
         *
         * The height of the picture.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'62px'`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight?: sap.ui.core.CSSSize
        ): sap.ca.ui.PictureItem;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * The original name of the picture.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName?: string
        ): sap.ca.ui.PictureItem;
        /**
         * Set the source for the picture, either uri or data url scheme (base64 information).
         */
        setSource(
          /**
           * The URI of the image or the DATA URL scheme. Samples: 1 - "./images/IMG_0095.PNG" 2 - "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAhtJREFUOE+tkF9oUlEcx11pmbnVkw+lvkQwWPXQoMegl57qrZcIpjEqqociiOoloraBIIxRG7UoSNhsq1axGpmatRUEaTljbm56s6b3rnmdXv+k13/ffsfYIPKxH3y53/M953zOl6tYN57y/Q81vUxdVCiHeajtAvRjP9E8IkA5xGPDsFD3m0kq8lr6toz+ydi+iu6wM6tSPRTs658n1Yp9T+LwiTISxSrCmTI63MswPPiBCPlJoQDlAAdbKIvvuTI4yhyLBeweiUFz5xs0g6S70RcbbTGtgs2zhQxShQpOT8TR+zGBvfcjOPNaAJtqDWi/F8ErLguJHrviXkLyVwWPQxmorbNo6Z2b0vaHdXUQm6EvSZQqNYwF0zg6GsWW69N4H83BF8tDzJfR83YJEyEJy9SsrS+IkFjEB9rfdM3/aatlRr8GYqatx49Hn0UIkoxiuQarR4BM8C5HDJ4FCQE+D8dsGhWqyUslZIsVWFzxgOayd8dfILZov+HDfosfR/pn6g3ZJTacWIBIbeqQtAyJfsUFexjHBoPzO6/6Wv8BseC2axEruRL4lIwcvSqXq4gmCuh+ysE6HqW2VZRI8ZUidKfe8bqzk3sagli469wUTgx8xSXbHA51eXH8ZgCHu73Qmd3Y1vkGpr5pdN4KsDy1/aTngLHD2Ww0ORvzjGYnDCYn9KRVb6CM+bW1yZnXm10HCdJKOk9qakT7DfsPyGaTv0W2AAAAAElFTkSuQmCC"
           */
          sValue: string
        ): void;
        /**
         * Sets a new value for property {@link #getStatus status}.
         *
         * The status of the picture / photo : Added, Deleted, Read
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStatus(
          /**
           * New value for property `status`
           */
          sStatus?: string
        ): sap.ca.ui.PictureItem;
        /**
         * @deprecated (since 1.16.2) - Width is defined by the AddPicture control
         *
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the picture.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'62px'`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth?: sap.ui.core.CSSSize
        ): sap.ca.ui.PictureItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:loaded loaded} event of this `sap.ca.ui.PictureItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.PictureItem` itself.
         *
         * Fired when the Image is really loaded
         */
        attachLoaded(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.PictureItem` itself
           */
          oListener?: object
        ): sap.ca.ui.PictureItem;
      }
      /**
       * @deprecated (since 1.22) - PictureTile is used in PictureViewer control and is not meant to be consumed
       * outside of PictureViewer usage. PictureViewer was replacing the sap.m.Carousel as it wasn't supporting
       * some versions of MS Internet Explorer. Now, the sap.m.Carousel is fully functional, please use sap.m.Carousel
       * instead. This control will not be supported anymore.
       *
       * Tile control embedding an image and allowing custom sizing
       */
      class PictureTile extends sap.m.CustomTile {
        /**
         * Constructor for a new PictureTile.
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
          mSettings?: $PictureTileSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:pictureDelete pictureDelete} event of this `sap.ca.ui.PictureTile`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.PictureTile` itself.
         *
         * Fired when the user deletes a picture
         */
        attachPictureDelete(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.PictureTile` itself
           */
          oListener?: object
        ): sap.ca.ui.PictureTile;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:pictureDelete pictureDelete} event of this
         * `sap.ca.ui.PictureTile`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPictureDelete(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.PictureTile;
        /**
         * Creates a new subclass of class sap.ca.ui.PictureTile with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.CustomTile.extend}.
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
         * Fires event {@link #event:pictureDelete pictureDelete} to attached listeners.
         */
        firePictureDelete(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.PictureTile;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * height (in pixels) of the picture viewer control.
         *
         * Default value is `'32px'`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ca.ui.PictureTile.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * ID of the element which is the current target of the association {@link #getTileContent tileContent},
         * or `null`.
         */
        getTileContent(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * width (in pixels) of the picture viewer control.
         *
         * Default value is `'32px'`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * height (in pixels) of the picture viewer control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'32px'`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight?: sap.ui.core.CSSSize
        ): sap.ca.ui.PictureTile;
        /**
         * Reference to one PictureViewerItem coming from the PictureViewer.
         */
        setTileContent(
          /**
           * Id of an element which becomes the new target of this `tileContent` association. Alternatively, an element
           * instance may be given.
           */
          vTileContent: string | sap.ca.ui.PictureViewerItem
        ): sap.ca.ui.PictureTile;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * width (in pixels) of the picture viewer control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'32px'`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth?: sap.ui.core.CSSSize
        ): sap.ca.ui.PictureTile;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:pictureDelete pictureDelete} event of this `sap.ca.ui.PictureTile`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.PictureTile` itself.
         *
         * Fired when the user deletes a picture
         */
        attachPictureDelete(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.PictureTile` itself
           */
          oListener?: object
        ): sap.ca.ui.PictureTile;
      }
      /**
       * @deprecated (since 1.22) - PictureViewer was replacing the Carousel as it wasn't supporting some versions
       * of MS Internet Explorer. Now, the sap.m.Carousel is fully functional, please use sap.m.Carousel instead.
       * This control will not be supported anymore.
       *
       * Picture viewer control relying on the TileContainer control
       */
      class PictureViewer extends sap.m.TileContainer {
        /**
         * Constructor for a new PictureViewer.
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
          mSettings?: $PictureViewerSettings
        );

        /**
         * @deprecated - Use aggregation "tiles"
         *
         * Adds some item `oItem` to the aggregation named `items`.
         */
        addItem(
          /**
           * the item to add; if empty, nothing is inserted
           */
          oItem: sap.ca.ui.PictureViewerItem
        ): sap.ca.ui.PictureViewer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:pictureDeleted pictureDeleted} event of this
         * `sap.ca.ui.PictureViewer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.PictureViewer` itself.
         *
         * Thrown when user delete an image
         */
        attachPictureDeleted(
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
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.PictureViewer` itself
           */
          oListener?: object
        ): sap.ca.ui.PictureViewer;
        /**
         * Removes the picture at index `iIndex` from the `items` aggregation.
         */
        deletePicture(
          /**
           * the index of the picture to delete; if empty, the current picture is deleted
           */
          iIndex: sap.ca.ui.PictureViewerItem
        ): sap.ca.ui.PictureViewer;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ca.ui.PictureViewer;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:pictureDeleted pictureDeleted} event of this
         * `sap.ca.ui.PictureViewer`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPictureDeleted(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ca.ui.PictureViewer;
        /**
         * Creates a new subclass of class sap.ca.ui.PictureViewer with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.TileContainer.extend}.
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
         * Fires event {@link #event:pictureDeleted pictureDeleted} to attached listeners.
         */
        firePictureDeleted(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ca.ui.PictureViewer;
        /**
         * Gets the current picture index.
         */
        getCurrentPictureIndex(): sap.ca.ui.PictureViewer;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Aggregation of PictureViewerItem that contains either a picture URI or the actual Image control.
         */
        getItems(): sap.ca.ui.PictureViewerItem[];
        /**
         * Returns a metadata object for class sap.ca.ui.PictureViewer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRemovable removable}.
         *
         * Defines whether or not you can remove a picture
         *
         * Default value is `false`.
         */
        getRemovable(): boolean;
        /**
         * Gets current value of property {@link #getTileScaling tileScaling}.
         *
         * Percentage of the space occupied by the image in the picture viewer control. Please note that if the
         * factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
         *
         * Default value is `0.95`.
         */
        getTileScaling(): number;
        /**
         * Checks for the provided `sap.ca.ui.PictureViewerItem` in the aggregation {@link #getItems items}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ca.ui.PictureViewerItem
        ): number;
        /**
         * @deprecated - Use aggregation "tiles"
         *
         * Inserts a item into the aggregation named `items`. When adding a new item to the aggregation, a sap.ca.ui.PictureTile
         * is actually created with its own ID and added to the internal TileContainer.
         */
        insertItem(
          /**
           * the item to insert; if empty, nothing is inserted
           */
          oItem: sap.ca.ui.PictureViewerItem,
          /**
           * the `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ca.ui.PictureViewer;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ca.ui.PictureViewerItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ca.ui.PictureViewerItem
        ): sap.ca.ui.PictureViewerItem;
        /**
         * Select the picture at index `iIndex` from the `items` aggregation.
         */
        selectPicture(
          /**
           * the index of the picture to select; if empty, the first picture is selected
           */
          iIndex: sap.ca.ui.PictureViewerItem
        ): sap.ca.ui.PictureViewer;
        /**
         * Specify whether or not you can delete a picture. If FALSE the delete button will never be visible. Default
         * value is TRUE
         */
        setRemovable(): void;
        /**
         * Set the percentage of the space occupied by the image in the picture viewer control. Please note that
         * if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be
         * available
         */
        setTileScaling(fTileScale: undefined): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:pictureDeleted pictureDeleted} event of this
         * `sap.ca.ui.PictureViewer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ca.ui.PictureViewer` itself.
         *
         * Thrown when user delete an image
         */
        attachPictureDeleted(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ca.ui.PictureViewer` itself
           */
          oListener?: object
        ): sap.ca.ui.PictureViewer;
      }
      /**
       * @deprecated (since 1.22) - PictureViewerItem is used in PictureViewer control and is not meant to be
       * consumed outside of PictureViewer usage. PictureViewer was replacing the Carousel as it wasn't supporting
       * some versions of MS Internet Explorer. Now, the sap.m.Carousel is fully functional, please use sap.m.Carousel
       * instead. This control will not be supported anymore.
       *
       * Picture viewer control relying on the TileContainer control
       */
      class PictureViewerItem extends sap.ui.core.Control {
        /**
         * Constructor for a new PictureViewerItem.
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
          mSettings?: $PictureViewerItemSettings
        );

        /**
         * Destroys the image in the aggregation {@link #getImage image}.
         */
        destroyImage(): sap.ca.ui.PictureViewerItem;
        /**
         * Creates a new subclass of class sap.ca.ui.PictureViewerItem with name `sClassName` and enriches it with
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
         * Gets content of aggregation {@link #getImage image}.
         *
         * Pass in an existing Image control to be used inside the PictureViewer
         */
        getImage(): sap.m.Image;
        /**
         * Returns a metadata object for class sap.ca.ui.PictureViewerItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getSrc src}.
         *
         * Image source url.
         */
        getSrc(): string;
        /**
         * Sets the aggregated {@link #getImage image}.
         */
        setImage(
          /**
           * The image to set
           */
          oImage: sap.m.Image
        ): sap.ca.ui.PictureViewerItem;
        /**
         * Setter for property `src`.
         *
         * Default value is empty/`undefined`
         */
        setSrc(
          /**
           * new value for property `src`
           */
          sSrc: string
        ): sap.ca.ui.PictureViewerItem;
      }
      /**
       * @deprecated (since 1.22) - ZoomableScrollContainer is used in PictureViewer control and is not meant
       * to be consumed outside of PictureViewer usage. PictureViewer was replacing the Carousel as it wasn't
       * supporting some versions of MS Internet Explorer. Now, the sap.m.Carousel is fully functional, please
       * use sap.m.Carousel instead. This control will not be supported anymore.
       *
       * Based on a ScrollContainer, it allows you to pinch and zoom on mobile devices
       */
      class ZoomableScrollContainer extends sap.m.ScrollContainer {
        /**
         * Constructor for a new ZoomableScrollContainer.
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
          mSettings?: $ZoomableScrollContainerSettings
        );

        /**
         * Creates a new subclass of class sap.ca.ui.ZoomableScrollContainer with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ScrollContainer.extend}.
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
         * Gets current value of property {@link #getInitialScale initialScale}.
         *
         * Initial scaling factor
         *
         * Default value is `1`.
         */
        getInitialScale(): number;
        /**
         * Gets current value of property {@link #getMaxScale maxScale}.
         *
         * Highest scaling factor allowed
         *
         * Default value is `4`.
         */
        getMaxScale(): number;
        /**
         * Returns a metadata object for class sap.ca.ui.ZoomableScrollContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getMinScale minScale}.
         *
         * Lowest scaling factor allowed
         *
         * Default value is `1`.
         */
        getMinScale(): number;
        /**
         * Gets current value of property {@link #getZoomable zoomable}.
         *
         * Activate or not the zooming functionality. If FALSE, it acts exactly as a basic ScrollContainer.
         *
         * Default value is `true`.
         */
        getZoomable(): boolean;
        /**
         * Sets a new value for property {@link #getInitialScale initialScale}.
         *
         * Initial scaling factor
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setInitialScale(
          /**
           * New value for property `initialScale`
           */
          fInitialScale?: number
        ): sap.ca.ui.ZoomableScrollContainer;
        /**
         * Sets a new value for property {@link #getMaxScale maxScale}.
         *
         * Highest scaling factor allowed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `4`.
         */
        setMaxScale(
          /**
           * New value for property `maxScale`
           */
          fMaxScale?: number
        ): sap.ca.ui.ZoomableScrollContainer;
        /**
         * Sets a new value for property {@link #getMinScale minScale}.
         *
         * Lowest scaling factor allowed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setMinScale(
          /**
           * New value for property `minScale`
           */
          fMinScale?: number
        ): sap.ca.ui.ZoomableScrollContainer;
        /**
         * Sets a new value for property {@link #getZoomable zoomable}.
         *
         * Activate or not the zooming functionality. If FALSE, it acts exactly as a basic ScrollContainer.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setZoomable(
          /**
           * New value for property `zoomable`
           */
          bZoomable?: boolean
        ): sap.ca.ui.ZoomableScrollContainer;
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ca/ui/charts/BarListItem": undefined;

    "sap/ca/ui/charts/BubbleChart": undefined;

    "sap/ca/ui/charts/Chart": undefined;

    "sap/ca/ui/charts/ChartToolBar": undefined;

    "sap/ca/ui/charts/ClusterListItem": undefined;

    "sap/ca/ui/charts/CombinedChart": undefined;

    "sap/ca/ui/charts/HorizontalBarChart": undefined;

    "sap/ca/ui/charts/LineChart": undefined;

    "sap/ca/ui/charts/StackedHorizontalBarChart": undefined;

    "sap/ca/ui/charts/StackedVerticalColumnChart": undefined;

    "sap/ca/ui/charts/VerticalBarChart": undefined;

    "sap/ca/ui/model/format/AmountFormat": undefined;

    "sap/ca/ui/model/format/DateFormat": undefined;

    "sap/ca/ui/model/format/FileSizeFormat": undefined;

    "sap/ca/ui/model/format/QuantityFormat": undefined;

    "sap/ca/ui/model/type/Date": undefined;

    "sap/ca/ui/model/type/DateTime": undefined;

    "sap/ca/ui/model/type/FileSize": undefined;

    "sap/ca/ui/model/type/Number": undefined;

    "sap/ca/ui/model/type/Time": undefined;

    "sap/ca/ui/AddPicture": undefined;

    "sap/ca/ui/CustomerContext": undefined;

    "sap/ca/ui/CustomerControlListItem": undefined;

    "sap/ca/ui/DatePicker": undefined;

    "sap/ca/ui/ExpansibleFeedListItem": undefined;

    "sap/ca/ui/FileUpload": undefined;

    "sap/ca/ui/GrowingTileContainer": undefined;

    "sap/ca/ui/HierarchicalSelectDialog": undefined;

    "sap/ca/ui/HierarchicalSelectDialogItem": undefined;

    "sap/ca/ui/Hierarchy": undefined;

    "sap/ca/ui/HierarchyItem": undefined;

    "sap/ca/ui/InPlaceEdit": undefined;

    "sap/ca/ui/Notes": undefined;

    "sap/ca/ui/OverflowContainer": undefined;

    "sap/ca/ui/OverviewTile": undefined;

    "sap/ca/ui/PictureItem": undefined;

    "sap/ca/ui/PictureTile": undefined;

    "sap/ca/ui/PictureViewer": undefined;

    "sap/ca/ui/PictureViewerItem": undefined;

    "sap/ca/ui/ZoomableScrollContainer": undefined;
  }
}
