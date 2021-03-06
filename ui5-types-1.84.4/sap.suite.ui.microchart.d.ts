// For Library Version: 1.84.3

declare namespace sap {
  namespace suite {
    namespace ui {
      /**
       * UI5 library: sap.suite.ui.microchart.
       */
      namespace microchart {
        interface $AreaMicroChartSettings extends sap.ui.core.$ControlSettings {
          /**
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           */
          size?: sap.m.Size;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * If this property is set, it indicates the value the X-axis ends with.
           */
          maxXValue?: number;

          /**
           * If this property is set it indicates the value X axis ends with.
           */
          minXValue?: number;

          /**
           * If this property is set it indicates the value X axis ends with.
           */
          maxYValue?: number;

          /**
           * If this property is set it indicates the value X axis ends with.
           */
          minYValue?: number;

          /**
           * The view of the chart.
           */
          view?: sap.suite.ui.microchart.AreaMicroChartViewType;

          /**
           * The color palette for the chart. If this property is set, semantic colors defined in AreaMicroChartItem
           * are ignored. As a result, colors of the palette are assigned to each line. When all the palette colors
           * are used up, assignment of the colors starts again from the beginning of the palette.
           */
          colorPalette?: string[];

          /**
           * Determines if the labels are displayed or not.
           */
          showLabel?: boolean;

          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.60)
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed or by the width and height property.
           */
          isResponsive?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is triggered when the chart is pressed.
           */
          press?: Function;

          /**
           * The configuration of the actual values line. The color property defines the color of the line. Points
           * are rendered in the same sequence as in this aggregation.
           */
          chart?: sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * The configuration of the max threshold area. The color property defines the color of the area above the
           * max threshold line. Points are rendered in the same sequence as in this aggregation.
           */
          maxThreshold?: sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * The configuration of the upper line of the inner threshold area. The color property defines the color
           * of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold
           * and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this
           * aggregation.
           */
          innerMaxThreshold?: sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * The configuration of the bottom line of the inner threshold area. The color property is ignored. For
           * rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must
           * be defined. Points are rendered in the same sequence as in this aggregation.
           */
          innerMinThreshold?: sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * The configuration of the min threshold area. The color property defines the color of the area below the
           * min threshold line. Points are rendered in the same sequence as in this aggregation.
           */
          minThreshold?: sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * The configuration of the target values line. The color property defines the color of the line. Points
           * are rendered in the same sequence as in this aggregation.
           */
          target?: sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * The label on X axis for the first point of the chart.
           */
          firstXLabel?: sap.suite.ui.microchart.AreaMicroChartLabel;

          /**
           * The label on Y axis for the first point of the chart.
           */
          firstYLabel?: sap.suite.ui.microchart.AreaMicroChartLabel;

          /**
           * The label on X axis for the last point of the chart.
           */
          lastXLabel?: sap.suite.ui.microchart.AreaMicroChartLabel;

          /**
           * The label on Y axis for the last point of the chart.
           */
          lastYLabel?: sap.suite.ui.microchart.AreaMicroChartLabel;

          /**
           * The label for the maximum point of the chart.
           */
          maxLabel?: sap.suite.ui.microchart.AreaMicroChartLabel;

          /**
           * The label for the minimum point of the chart.
           */
          minLabel?: sap.suite.ui.microchart.AreaMicroChartLabel;

          /**
           * The set of lines.
           */
          lines?:
            | sap.suite.ui.microchart.AreaMicroChartItem[]
            | sap.suite.ui.microchart.AreaMicroChartItem;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $AreaMicroChartItemSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The graphic element color.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * The line title.
           */
          title?: string;

          /**
           * The set of points for this graphic element.
           */
          points?:
            | sap.suite.ui.microchart.AreaMicroChartPoint[]
            | sap.suite.ui.microchart.AreaMicroChartPoint;
        }

        interface $AreaMicroChartLabelSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The graphic element color.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * The line title.
           */
          label?: string;
        }

        interface $AreaMicroChartPointSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * X value for the given point.
           */
          x?: number;

          /**
           * Y value for the given point.
           */
          y?: number;
        }

        interface $BulletMicroChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           */
          size?: sap.m.Size;

          /**
           * The mode of displaying the actual value itself or the delta between the actual value and the target value.
           * If not set, the actual value is displayed.
           */
          mode?: sap.suite.ui.microchart.BulletMicroChartModeType;

          /**
           * The scaling suffix that is added to all values.
           */
          scale?: string;

          /**
           * The forecast value that is displayed in Actual mode only. If set, the forecast value bar appears in the
           * background of the actual value bar.
           */
          forecastValue?: number;

          /**
           * The target value that is displayed as a black vertical bar.
           */
          targetValue?: number;

          /**
           * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances
           * of this control.
           */
          minValue?: number;

          /**
           * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances
           * of this control.
           */
          maxValue?: number;

          /**
           * If set to true, shows the numeric actual value. This property works in Actual mode only.
           */
          showActualValue?: boolean;

          /**
           * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the
           * showActualValue setting. This property works in Delta mode only.
           */
          showDeltaValue?: boolean;

          /**
           * If set to true, shows the numeric actual value and possibly hides the delta value, if showDeltaValue
           * is set to true. This property works in Delta mode only and has priority over showDeltaValue.
           */
          showActualValueInDeltaMode?: boolean;

          /**
           * If set to true, shows the numeric target value.
           */
          showTargetValue?: boolean;

          /**
           * If set to true, shows the value marker.
           */
          showValueMarker?: boolean;

          /**
           * If set to true, shows the threshold markers.
           */
          showThresholds?: boolean;

          /**
           * If set, displays a specified label instead of the numeric actual value.
           */
          actualValueLabel?: string;

          /**
           * If set, displays a specified label instead of the calculated numeric delta value.
           */
          deltaValueLabel?: string;

          /**
           * If set, displays a specified label instead of the numeric target value.
           */
          targetValueLabel?: string;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * The background color of the scale. The theming is enabled only for the default value of this property.
           */
          scaleColor?: sap.suite.ui.microchart.CommonBackgroundType;

          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.58)
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed or by the width and height property.
           */
          isResponsive?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is triggered when the chart is pressed.
           */
          press?: Function;

          /**
           * Actual data of the BulletMicroChart.
           */
          actual?: sap.suite.ui.microchart.BulletMicroChartData;

          /**
           * Threshold data of the BulletMicroChart.
           */
          thresholds?:
            | sap.suite.ui.microchart.BulletMicroChartData[]
            | sap.suite.ui.microchart.BulletMicroChartData;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $BulletMicroChartDataSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The actual value.
           */
          value?: number;

          /**
           * The semantic color of the actual value.
           */
          color?: sap.m.ValueColor;
        }

        interface $ColumnMicroChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the column micro chart is included.
           */
          size?: sap.m.Size;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.60.0)
           *
           * If set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size, width and height properties are ignored in this case.
           */
          isResponsive?: boolean;

          /**
           * If this property is set to `false`, both top labels are hidden.
           */
          showTopLabels?: boolean;

          /**
           * If this property is set to `false`, both bottom labels are hidden.
           */
          showBottomLabels?: boolean;

          /**
           * If set to true and there is enough space, top labels of the chart are hidden and labels for each column
           * are shown instead.
           *
           * * @since 1.60.0
           */
          allowColumnLabels?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is triggered when the chart is pressed.
           */
          press?: Function;

          /**
           * The column chart data.
           */
          columns?:
            | sap.suite.ui.microchart.ColumnMicroChartData[]
            | sap.suite.ui.microchart.ColumnMicroChartData;

          /**
           * The label on the left top corner of the chart.
           */
          leftTopLabel?: sap.suite.ui.microchart.ColumnMicroChartLabel;

          /**
           * The label on the right top corner of the chart.
           */
          rightTopLabel?: sap.suite.ui.microchart.ColumnMicroChartLabel;

          /**
           * The label on the left bottom corner of the chart.
           */
          leftBottomLabel?: sap.suite.ui.microchart.ColumnMicroChartLabel;

          /**
           * The label on the right bottom corner of the chart.
           */
          rightBottomLabel?: sap.suite.ui.microchart.ColumnMicroChartLabel;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $ColumnMicroChartDataSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The graphic element color.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * The line title.
           */
          label?: string;

          /**
           * Overrides the value with a string that is shown when used in combination with {@link sap.suite.ui.microchart.ColumnMicroChart}
           * `allowColumnLabels`.
           */
          displayValue?: string;

          /**
           * The actual value.
           */
          value?: number;

          /**
           * The event is fired when the user chooses the column data.
           */
          press?: Function;
        }

        interface $ColumnMicroChartLabelSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The graphic element color.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * The line title.
           */
          label?: string;
        }

        interface $ComparisonMicroChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           */
          size?: sap.m.Size;

          /**
           * The scaling suffix that is added to the actual and target values.
           */
          scale?: string;

          /**
           * @SINCE 1.42.0
           *
           * The minimum scale value for the chart used to define the value range of the scale for comparing different
           * values.
           */
          minValue?: number;

          /**
           * @SINCE 1.42.0
           *
           * The maximum scale value for the chart used to define the value range of the scale for comparing different
           * values.
           */
          maxValue?: number;

          /**
           * The view of the chart. If not set, the Normal view is used by default.
           */
          view?: sap.suite.ui.microchart.ComparisonMicroChartViewType;

          /**
           * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are
           * ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors
           * are used, assignment of the colors begins from the first palette color.
           */
          colorPalette?: string[];

          /**
           * If it is set to true, the height of the control is defined by its content.
           */
          shrinkable?: boolean;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.58)
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size and Width properties are ignored in such case.
           */
          isResponsive?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is triggered when the chart is pressed.
           */
          press?: Function;

          /**
           * The comparison chart bar data.
           */
          data?:
            | sap.suite.ui.microchart.ComparisonMicroChartData[]
            | sap.suite.ui.microchart.ComparisonMicroChartData;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $ComparisonMicroChartDataSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The value for comparison.
           */
          value?: number;

          /**
           * The semantic color of the value.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * The comparison bar title.
           */
          title?: string;

          /**
           * If this property is set then it will be displayed instead of value.
           */
          displayValue?: string;

          /**
           * The event is fired when the user chooses the comparison chart bar.
           */
          press?: Function;
        }

        interface $DeltaMicroChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The first value for delta calculation.
           */
          value1?: number;

          /**
           * The second value for delta calculation.
           */
          value2?: number;

          /**
           * The first value title.
           */
          title1?: string;

          /**
           * The second value title.
           */
          title2?: string;

          /**
           * If this property is set, it is rendered instead of value1.
           */
          displayValue1?: string;

          /**
           * If this property is set, it is rendered instead of value2.
           */
          displayValue2?: string;

          /**
           * If this property is set, it is rendered instead of a calculated delta.
           */
          deltaDisplayValue?: string;

          /**
           * The semantic color of the delta value.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * @SINCE 1.61.0
           *
           * The view of the chart. If not set, the `Normal` view is used by default.
           */
          view?: sap.suite.ui.microchart.DeltaMicroChartViewType;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the delta micro chart is included.
           */
          size?: sap.m.Size;

          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.61.0)
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size and Width properties are ignored in such case.
           */
          isResponsive?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is triggered when the chart is pressed.
           */
          press?: Function;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $HarveyBallMicroChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The total value. The total value is represented by a full circle, or 360 degrees value on the chart.
           */
          total?: number;

          /**
           * The total label. If specified, it is displayed instead of the total value.
           */
          totalLabel?: string;

          /**
           * The scaling factor that is displayed next to the total value.
           */
          totalScale?: string;

          /**
           * If set to `true`, the `totalLabel` property is used instead of the combination of the total value and
           * its scaling factor.
           * The default value is `false`, which means that the total value, defined by the `total` property, and
           * the scaling factor, defined by the `totalScale` property, are displayed separately.
           */
          formattedLabel?: boolean;

          /**
           * If set to `true`, the total value is displayed next to the chart. The default setting is `true`.
           */
          showTotal?: boolean;

          /**
           * If set to `true`, the fraction values are displayed next to the chart. The default setting is `true`.
           */
          showFractions?: boolean;

          /**
           * The size of the chart. If not set, the default size is applied based on the device type.
           */
          size?: sap.m.Size;

          /**
           * The color palette for the chart. Currently only a single color (first color in the array) is supported.
           *
           * If this property is defined, the semantic color defined in the {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}
           * is ignored.
           */
          colorPalette?: string[];

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.62.0
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.62.0
           *
           * The alignment of the content. If not set, the `Left` alignment type is used.
           */
          alignContent?: sap.suite.ui.microchart.HorizontalAlignmentType;

          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.62.0)
           *
           * If set to `true`, the width and height of the control are determined by the width and height of the parent
           * container, in which case the `size` and `width` properties are ignored.
           */
          isResponsive?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * This event is fired when the chart is clicked or tapped.
           */
          press?: Function;

          /**
           * The set of items. Currently only a single item is supported.
           */
          items?:
            | sap.suite.ui.microchart.HarveyBallMicroChartItem[]
            | sap.suite.ui.microchart.HarveyBallMicroChartItem;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $HarveyBallMicroChartItemSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The color of the sector representing the fraction value.
           * The same color is used for the fraction value label defined either by the `fraction` property or by the
           * `fractionLabel` property.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * The fraction value that defines the size of the colored sector.
           * This property must be set to a value that is a fraction of the `total` value defined for the {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
           */
          fraction?: number;

          /**
           * The fraction label. If this property is specified, it is displayed instead of the label that is based
           * on the `fraction` property.
           */
          fractionLabel?: string;

          /**
           * The scaling factor that is displayed after the fraction value.
           */
          fractionScale?: string;

          /**
           * If set to `true`, the `fractionLabel` property is used instead of the combination of the fraction value
           * and scaling factor.
           * The default value is `false`, which means that the fraction value, defined by the `fraction` property,
           * and the scaling factor, defined by the `fractionScale` property are displayed separately.
           */
          formattedLabel?: boolean;
        }

        interface $InteractiveBarChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The number of displayed bars.
           */
          displayedBars?: number;

          /**
           * Width of the labels column in the resulting layout (in percentage). Possible range of values from 0 to
           * 100. A value of 40 results in the labels column taking up 40% of available space.
           */
          labelWidth?: sap.ui.core.Percentage;

          /**
           * Enables the selection in the chart.
           */
          selectionEnabled?: boolean;

          /**
           * Begin of displayed scale.
           */
          min?: number;

          /**
           * End of displayed scale.
           */
          max?: number;

          /**
           * Event is fired when user has selected or deselected a bar.
           */
          selectionChanged?: Function;

          /**
           * The event is fired when the user presses the chart while its bars are not selectable in non-interactive
           * mode. This is decided internally, depending on the size of the bars.
           */
          press?: Function;

          /**
           * Bars displayed on the chart.
           */
          bars?:
            | sap.suite.ui.microchart.InteractiveBarChartBar[]
            | sap.suite.ui.microchart.InteractiveBarChartBar;

          /**
           * Association to controls which label this control (see WAI-ARIA attribute aria-labelledby).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $InteractiveBarChartBarSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The label for the chart bar.
           */
          label?: string;

          /**
           * Determines if the chart bar is selected.
           */
          selected?: boolean;

          /**
           * The value label to be displayed on the bar in the chart.
           */
          displayedValue?: string;

          /**
           * @SINCE 1.50.0
           *
           * Determines the color of the bar.
           */
          color?: sap.m.ValueColor;

          /**
           * The numeric value of the chart bar to be displayed on the bar.
           */
          value?: number;
        }

        interface $InteractiveDonutChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * Number of segments to be displayed.
           */
          displayedSegments?: number;

          /**
           * Switch which enables or disables selection.
           */
          selectionEnabled?: boolean;

          /**
           * Event is fired when a user has selected or deselected a segment or a legend entry.
           */
          selectionChanged?: Function;

          /**
           * The event is fired when the user presses the chart while its segments are not selectable in non-interactive
           * mode. This is decided internally, depending on the size of the chart.
           */
          press?: Function;

          /**
           * Aggregation which contains all segments.
           */
          segments?:
            | sap.suite.ui.microchart.InteractiveDonutChartSegment[]
            | sap.suite.ui.microchart.InteractiveDonutChartSegment;

          /**
           * Association to controls which label this control (see WAI-ARIA attribute aria-labelledby).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $InteractiveDonutChartSegmentSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * Displayed text for the segment.
           */
          label?: string;

          /**
           * Indicator for the selected state.
           */
          selected?: boolean;

          /**
           * The value representing a percentage or an absolute value.
           */
          value?: number;

          /**
           * The value that is directly displayed on the legend.
           */
          displayedValue?: string;

          /**
           * @SINCE 1.50.0
           *
           * Determines the color of the segment.
           */
          color?: sap.m.ValueColor;
        }

        interface $InteractiveLineChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The maximum number of points to be displayed on the chart.
           */
          displayedPoints?: number;

          /**
           * Abstract invisible point outside of the chart that ensures that the graph flows smoothly into the visible
           * part of the chart.
           */
          precedingPoint?: number;

          /**
           * Abstract invisible point outside of the chart that ensures that the graph flows smoothly out of the visible
           * part of the chart.
           */
          succeedingPoint?: number;

          /**
           * If this property is set to true, one or multiple points are selectable.
           */
          selectionEnabled?: boolean;

          /**
           * Event is fired when a user has selected or deselected a point.
           */
          selectionChanged?: Function;

          /**
           * The event is fired only in non-interactive mode when the user presses the chart; in this mode, the points
           * and surrounding areas are not selectable. Non-interactive mode is decided upon internally, depending
           * on the size of the areas surrounding the points.
           */
          press?: Function;

          /**
           * Points displayed in the chart.
           */
          points?:
            | sap.suite.ui.microchart.InteractiveLineChartPoint[]
            | sap.suite.ui.microchart.InteractiveLineChartPoint;

          /**
           * Association to controls which label this control (see WAI-ARIA attribute aria-labelledby).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $InteractiveLineChartPointSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The bottom label for the chart point.
           */
          label?: string;

          /**
           * The label that is displayed right below the `label`..
           */
          secondaryLabel?: string;

          /**
           * Determines if the chart point is selected.
           */
          selected?: boolean;

          /**
           * The numeric value of the chart point.
           */
          value?: number;

          /**
           * The value label to be displayed near the point in the chart.
           */
          displayedValue?: string;

          /**
           * @SINCE 1.50.0
           *
           * Determines the color of the point.
           */
          color?: sap.m.ValueColor;
        }

        interface $LineMicroChartSettings extends sap.ui.core.$ControlSettings {
          /**
           * The size of the chart. If not set, the default size is applied based on the type of the device.
           */
          size?: sap.m.Size;

          /**
           * Determines the chart threshold which is used for vertical normalization. If the threshold does not belong
           * to the value range given by minYValue...maxYValue, the threshold is ignored. By setting the threshold
           * property's value to null, the threshold is disabled and excluded from range calculations.
           */
          threshold?: number;

          /**
           * If this property is set to `false`, the threshold line is hidden.
           */
          showThresholdLine?: boolean;

          /**
           * If this property is set to `false`, the threshold value is hidden.
           * If this property is set to `true`, the value will be shown only if the `showThresholdLine` property is
           * also set to `true`.
           */
          showThresholdValue?: boolean;

          /**
           * Overrides the threshold value with a string that is shown instead.
           */
          thresholdDisplayValue?: string;

          /**
           * If this property is set, it indicates the value the X-axis starts with.
           */
          minXValue?: number;

          /**
           * If this property is set, it indicates the value the X-axis ends with.
           */
          maxXValue?: number;

          /**
           * If this property is set, it indicates the value the Y-axis starts with.
           */
          minYValue?: number;

          /**
           * If this property is set, it indicates the value the Y-axis ends with.
           */
          maxYValue?: number;

          /**
           * Describes the left top label of the chart. The label color is determined by the color property of the
           * first LineMicroChartPoint in the points aggregation. The space for the label is not reserved if the label
           * is not set.
           */
          leftTopLabel?: string;

          /**
           * Describes the right top label of the chart. The label color is determined by the color property of the
           * last LineMicroChartPoint in the points aggregation. The space for the label is not reserved if the label
           * is not set.
           */
          rightTopLabel?: string;

          /**
           * Describes the left bottom label of the chart. The label color is set internally. The space for the label
           * is not reserved if the label is not set.
           */
          leftBottomLabel?: string;

          /**
           * Describes the right bottom label of the chart. The label color is set automatically. The space for the
           * label is not reserved if the label is not set.
           */
          rightBottomLabel?: string;

          /**
           * If this property is set to `false`, both top labels are hidden.
           */
          showTopLabels?: boolean;

          /**
           * If this property is set to `false`, both bottom labels are hidden.
           */
          showBottomLabels?: boolean;

          /**
           * Describes the color of the chart.
           * In conjunction with emphasized points, it is only used if all points have the sap.m.ValueColor.Neutral
           * color.
           * The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the 'above|' and
           * 'below' properties that determine the color of the graph above and below the threshold, respectively.
           *
           *
           * The `color` property of {@link sap.suite.ui.microchart.LineMicroChartLine} has priority over this property
           * in case it is set.
           */
          color?: any;

          /**
           * Defines if the control renders the points or not.
           * If emphasized points are used, there is no effect.
           * If the value is true, the points in the aggregation are shown.
           *
           *
           * The `showPoints` property of the {@link sap.suite.ui.microchart.LineMicroChartLine} control has priority
           * over this property in case it is set.
           */
          showPoints?: boolean;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is triggered when the chart is pressed.
           */
          press?: Function;

          /**
           * Aggregation that contains all data points that should be provided in an ordered way. If both the `points`
           * and `lines` aggregations are used, the chart is rendered based on the `points` aggregation, while the
           * lines from the `lines` aggregations are ignored.
           * The `points` aggregation can be used to ensure backward compatibility. However in general, the `lines`
           * aggregation should be preferred.
           */
          points?:
            | sap.suite.ui.microchart.LineMicroChartPoint[]
            | sap.suite.ui.microchart.LineMicroChartPoint;

          /**
           * Aggregation that containes lines with data points.
           * This aggregation should be used instead of the `points` aggregation.
           */
          lines?:
            | sap.suite.ui.microchart.LineMicroChartLine[]
            | sap.suite.ui.microchart.LineMicroChartLine;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $LineMicroChartEmphasizedPointSettings
          extends sap.suite.ui.microchart.$LineMicroChartPointSettings {
          /**
           * Determines the color of the emphasized point. The property has an effect only if the 'show' property
           * is true. If at least one emphasized point has a color different from Neutral, the graph is grey; otherwise,
           * the graph is blue.
           */
          color?: sap.m.ValueCSSColor;

          /**
           * Determines whether the chart point should be displayed or not.
           */
          show?: boolean;
        }

        interface $LineMicroChartLineSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * Defines the color of the chart.
           * In conjunction with emphasized points, this property is only used if all points have the {@link sap.m.ValueColor.Neutral}
           * color. The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the `above`
           * and `below` properties that determine the color of the graph above and below the threshold, respectively.
           *
           *
           * This property has priority over the property `color` of {@link sap.suite.ui.microchart.LineMicroChart}
           * in case it is set.
           * If this property is not defined, the value of the `color` property from the parent {@link sap.suite.ui.microchart.LineMicroChart}
           * is used instead.
           */
          color?: any;

          /**
           * Defines whether the points are shown.
           * If emphasized points are used, this property is ignored.
           * If this property is set to `true`, the points in the `points` aggregation are shown.
           *
           *
           * This property has priority over the property `showPoints` of {@link sap.suite.ui.microchart.LineMicroChart}
           * in case it is set.
           * If this property is not defined, the `showPoints` property of the {@link sap.suite.ui.microchart.LineMicroChart}
           * is used instead.
           */
          showPoints?: boolean;

          /**
           * Defines the type of the line.
           */
          type?: sap.suite.ui.microchart.LineType;

          /**
           * Aggregation that contains all data points that should be provided in an ordered way.
           *
           *
           * **Note:** Points can be bound without template/factory method.
           * This approach is more efficient when many points are used, because no new objects will be created for
           * them and only their representation in the model will be kept. See the {@link https://ui5.sap.com/#/sample/sap.suite.ui.microchart.sample.LineMicroChartBinding/preview
           * samples}.
           * To use emphasized points, the `emphasized` property has to be set in the model of the point and can be
           * used together with the properties `show` and `color`, as shown in the sample. When this binding method
           * is used, the #getPoints method will always return an empty array.
           */
          points?:
            | sap.suite.ui.microchart.LineMicroChartPoint[]
            | sap.suite.ui.microchart.LineMicroChartPoint;
        }

        interface $LineMicroChartPointSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The point's horizontal position.
           */
          x?: number;

          /**
           * The point's vertical position.
           */
          y?: number;
        }

        interface $StackedBarMicroChartSettings
          extends sap.ui.core.$ControlSettings {
          /**
           * The size of the chart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the stacked bar micro chart is included.
           */
          size?: sap.m.Size;

          /**
           * The maximum value can be set to scale StackedBarMicroChartBar values to the same base. If maxValue is
           * smaller than the sum of all StackedMicroChartBar values, the maxValue is ignored. All values are shown
           * as percentage values (same behavior as maxValue is not used). If maxValue is equal or bigger than the
           * sum of all StackedMicroChartBars, all values are scaled to the value of maxValue and the percentage mode
           * is turned off. Absolute values are shown instead. The difference between the sum and maxValue is shown
           * as invisible bar, thus e.g. different StackedBarMicroChart instances can be compared.
           */
          maxValue?: number;

          /**
           * The precision of the rounding for the calculated percentage values of the bars. It defines how many digits
           * after the decimal point are displayed. The default is set to 1 digit.
           */
          precision?: number;

          /**
           * @SINCE 1.76
           *
           * Defines whether stacked bars with zero value should be rendered. The default is `true` where these zero
           * value stacked bars are rendered with a minimum width of 0.25rem.
           */
          displayZeroValue?: boolean;

          /**
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * Defines whether the bar labels should be rendered. If set to `true`, the labels that were specified for
           * each bar become visible.
           */
          showLabels?: boolean;

          /**
           * @SINCE 1.84
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           */
          hideOnNoData?: boolean;

          /**
           * The event is fired when the user chooses the microchart.
           */
          press?: Function;

          /**
           * The stacked bar chart items.
           */
          bars?:
            | sap.suite.ui.microchart.StackedBarMicroChartBar[]
            | sap.suite.ui.microchart.StackedBarMicroChartBar;

          /**
           * @SINCE 1.60.0
           *
           * Controls or IDs that label this control. Can be used by screen reader software.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface $StackedBarMicroChartBarSettings
          extends sap.ui.core.$ElementSettings {
          /**
           * The value for stacked bar chart. It is used in order to determine the width of the bar
           */
          value?: number;

          /**
           * The color of the bar.
           */
          valueColor?: sap.m.ValueCSSColor;

          /**
           * If this property is set, then it will be displayed instead of value.
           */
          displayValue?: string;
        }
        /**
         * @SINCE 1.34
         *
         *
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string. The aggregated data of the microchart
         * can also be customized.
         */
        class AreaMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new AreaMicroChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $AreaMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Adds some line to the aggregation {@link #getLines lines}.
           */
          addLine(
            /**
             * The line to add; if empty, nothing is inserted
             */
            oLine: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.AreaMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.AreaMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.AreaMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Binds aggregation {@link #getChart chart} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindChart(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Binds aggregation {@link #getLines lines} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindLines(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Binds aggregation {@link #getTarget target} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindTarget(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the chart in the aggregation {@link #getChart chart}.
           */
          destroyChart(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the firstXLabel in the aggregation {@link #getFirstXLabel firstXLabel}.
           */
          destroyFirstXLabel(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the firstYLabel in the aggregation {@link #getFirstYLabel firstYLabel}.
           */
          destroyFirstYLabel(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the innerMaxThreshold in the aggregation {@link #getInnerMaxThreshold innerMaxThreshold}.
           */
          destroyInnerMaxThreshold(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the innerMinThreshold in the aggregation {@link #getInnerMinThreshold innerMinThreshold}.
           */
          destroyInnerMinThreshold(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the lastXLabel in the aggregation {@link #getLastXLabel lastXLabel}.
           */
          destroyLastXLabel(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the lastYLabel in the aggregation {@link #getLastYLabel lastYLabel}.
           */
          destroyLastYLabel(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys all the lines in the aggregation {@link #getLines lines}.
           */
          destroyLines(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the maxLabel in the aggregation {@link #getMaxLabel maxLabel}.
           */
          destroyMaxLabel(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the maxThreshold in the aggregation {@link #getMaxThreshold maxThreshold}.
           */
          destroyMaxThreshold(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the minLabel in the aggregation {@link #getMinLabel minLabel}.
           */
          destroyMinLabel(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the minThreshold in the aggregation {@link #getMinThreshold minThreshold}.
           */
          destroyMinThreshold(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Destroys the target in the aggregation {@link #getTarget target}.
           */
          destroyTarget(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.AreaMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Enables x-values of all points are automatically indexed with numeric, equidistant values.
           */
          enableXIndexing(
            /**
             * Flag to activate automatic index
             */
            useIndex: boolean
          ): void;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets content of aggregation {@link #getChart chart}.
           *
           * The configuration of the actual values line. The color property defines the color of the line. Points
           * are rendered in the same sequence as in this aggregation.
           */
          getChart(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Gets current value of property {@link #getColorPalette colorPalette}.
           *
           * The color palette for the chart. If this property is set, semantic colors defined in AreaMicroChartItem
           * are ignored. As a result, colors of the palette are assigned to each line. When all the palette colors
           * are used up, assignment of the colors starts again from the beginning of the palette.
           *
           * Default value is `[]`.
           */
          getColorPalette(): string[];
          /**
           * Gets content of aggregation {@link #getFirstXLabel firstXLabel}.
           *
           * The label on X axis for the first point of the chart.
           */
          getFirstXLabel(): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getFirstYLabel firstYLabel}.
           *
           * The label on Y axis for the first point of the chart.
           */
          getFirstYLabel(): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * Gets content of aggregation {@link #getInnerMaxThreshold innerMaxThreshold}.
           *
           * The configuration of the upper line of the inner threshold area. The color property defines the color
           * of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold
           * and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this
           * aggregation.
           */
          getInnerMaxThreshold(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Gets content of aggregation {@link #getInnerMinThreshold innerMinThreshold}.
           *
           * The configuration of the bottom line of the inner threshold area. The color property is ignored. For
           * rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must
           * be defined. Points are rendered in the same sequence as in this aggregation.
           */
          getInnerMinThreshold(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.60)
           *
           * Gets current value of property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed or by the width and height property.
           *
           * Default value is `false`.
           */
          getIsResponsive(): boolean;
          /**
           * Gets content of aggregation {@link #getLastXLabel lastXLabel}.
           *
           * The label on X axis for the last point of the chart.
           */
          getLastXLabel(): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getLastYLabel lastYLabel}.
           *
           * The label on Y axis for the last point of the chart.
           */
          getLastYLabel(): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getLines lines}.
           *
           * The set of lines.
           */
          getLines(): sap.suite.ui.microchart.AreaMicroChartItem[];
          /**
           * Gets content of aggregation {@link #getMaxLabel maxLabel}.
           *
           * The label for the maximum point of the chart.
           */
          getMaxLabel(): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getMaxThreshold maxThreshold}.
           *
           * The configuration of the max threshold area. The color property defines the color of the area above the
           * max threshold line. Points are rendered in the same sequence as in this aggregation.
           */
          getMaxThreshold(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Gets current value of property {@link #getMaxXValue maxXValue}.
           *
           * If this property is set, it indicates the value the X-axis ends with.
           */
          getMaxXValue(): number;
          /**
           * Gets current value of property {@link #getMaxYValue maxYValue}.
           *
           * If this property is set it indicates the value X axis ends with.
           */
          getMaxYValue(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets content of aggregation {@link #getMinLabel minLabel}.
           *
           * The label for the minimum point of the chart.
           */
          getMinLabel(): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getMinThreshold minThreshold}.
           *
           * The configuration of the min threshold area. The color property defines the color of the area below the
           * min threshold line. Points are rendered in the same sequence as in this aggregation.
           */
          getMinThreshold(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Gets current value of property {@link #getMinXValue minXValue}.
           *
           * If this property is set it indicates the value X axis ends with.
           */
          getMinXValue(): number;
          /**
           * Gets current value of property {@link #getMinYValue minYValue}.
           *
           * If this property is set it indicates the value X axis ends with.
           */
          getMinYValue(): number;
          /**
           * Gets current value of property {@link #getShowLabel showLabel}.
           *
           * Determines if the labels are displayed or not.
           *
           * Default value is `true`.
           */
          getShowLabel(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets content of aggregation {@link #getTarget target}.
           *
           * The configuration of the target values line. The color property defines the color of the line. Points
           * are rendered in the same sequence as in this aggregation.
           */
          getTarget(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Gets current value of property {@link #getView view}.
           *
           * The view of the chart.
           *
           * Default value is `"Normal"`.
           */
          getView(): sap.suite.ui.microchart.AreaMicroChartViewType;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.AreaMicroChartItem` in the aggregation {@link #getLines
           * lines}. and returns its index if found or -1 otherwise.
           */
          indexOfLine(
            /**
             * The line whose index is looked for
             */
            oLine: sap.suite.ui.microchart.AreaMicroChartItem
          ): number;
          /**
           * Inserts a line into the aggregation {@link #getLines lines}.
           */
          insertLine(
            /**
             * The line to insert; if empty, nothing is inserted
             */
            oLine: sap.suite.ui.microchart.AreaMicroChartItem,
            /**
             * The `0`-based index the line should be inserted at; for a negative value of `iIndex`, the line is inserted
             * at position 0; for a value greater than the current size of the aggregation, the line is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getLines lines}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllLines(): sap.suite.ui.microchart.AreaMicroChartItem[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a line from the aggregation {@link #getLines lines}.
           */
          removeLine(
            /**
             * The line to remove or its index or id
             */
            vLine: number | string | sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Sets the aggregated {@link #getChart chart}.
           */
          setChart(
            /**
             * The chart to set
             */
            oChart: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets a new value for property {@link #getColorPalette colorPalette}.
           *
           * The color palette for the chart. If this property is set, semantic colors defined in AreaMicroChartItem
           * are ignored. As a result, colors of the palette are assigned to each line. When all the palette colors
           * are used up, assignment of the colors starts again from the beginning of the palette.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `[]`.
           */
          setColorPalette(
            /**
             * New value for property `colorPalette`
             */
            sColorPalette?: string[]
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getFirstXLabel firstXLabel}.
           */
          setFirstXLabel(
            /**
             * The firstXLabel to set
             */
            oFirstXLabel: sap.suite.ui.microchart.AreaMicroChartLabel
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getFirstYLabel firstYLabel}.
           */
          setFirstYLabel(
            /**
             * The firstYLabel to set
             */
            oFirstYLabel: sap.suite.ui.microchart.AreaMicroChartLabel
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getInnerMaxThreshold innerMaxThreshold}.
           */
          setInnerMaxThreshold(
            /**
             * The innerMaxThreshold to set
             */
            oInnerMaxThreshold: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getInnerMinThreshold innerMinThreshold}.
           */
          setInnerMinThreshold(
            /**
             * The innerMinThreshold to set
             */
            oInnerMinThreshold: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.60)
           *
           * Sets a new value for property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed or by the width and height property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIsResponsive(
            /**
             * New value for property `isResponsive`
             */
            bIsResponsive?: boolean
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getLastXLabel lastXLabel}.
           */
          setLastXLabel(
            /**
             * The lastXLabel to set
             */
            oLastXLabel: sap.suite.ui.microchart.AreaMicroChartLabel
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getLastYLabel lastYLabel}.
           */
          setLastYLabel(
            /**
             * The lastYLabel to set
             */
            oLastYLabel: sap.suite.ui.microchart.AreaMicroChartLabel
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getMaxLabel maxLabel}.
           */
          setMaxLabel(
            /**
             * The maxLabel to set
             */
            oMaxLabel: sap.suite.ui.microchart.AreaMicroChartLabel
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getMaxThreshold maxThreshold}.
           */
          setMaxThreshold(
            /**
             * The maxThreshold to set
             */
            oMaxThreshold: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Property setter for the Max X value
           */
          setMaxXValue(
            /**
             * new value Max X
             */
            value: number,
            /**
             * Suppress in validate
             */
            bSuppressInvalidate: boolean
          ): void;
          /**
           * Property setter for the Max Y value
           */
          setMaxYValue(
            /**
             * new value Max Y
             */
            value: number,
            /**
             * Suppress in validate
             */
            bSuppressInvalidate: boolean
          ): void;
          /**
           * Sets the aggregated {@link #getMinLabel minLabel}.
           */
          setMinLabel(
            /**
             * The minLabel to set
             */
            oMinLabel: sap.suite.ui.microchart.AreaMicroChartLabel
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getMinThreshold minThreshold}.
           */
          setMinThreshold(
            /**
             * The minThreshold to set
             */
            oMinThreshold: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Property setter for the Min X value
           */
          setMinXValue(
            /**
             * new value Min X
             */
            value: number,
            /**
             * Suppress in validate
             */
            bSuppressInvalidate: boolean
          ): void;
          /**
           * Property setter for the Min Y value
           */
          setMinYValue(
            /**
             * new value Min Y
             */
            value: number,
            /**
             * Suppress in validate
             */
            bSuppressInvalidate: boolean
          ): void;
          /**
           * Sets a new value for property {@link #getShowLabel showLabel}.
           *
           * Determines if the labels are displayed or not.
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
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets the aggregated {@link #getTarget target}.
           */
          setTarget(
            /**
             * The target to set
             */
            oTarget: sap.suite.ui.microchart.AreaMicroChartItem
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets a new value for property {@link #getView view}.
           *
           * The view of the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Normal"`.
           */
          setView(
            /**
             * New value for property `view`
             */
            sView?: sap.suite.ui.microchart.AreaMicroChartViewType
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Unbinds aggregation {@link #getChart chart} from model data.
           */
          unbindChart(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Unbinds aggregation {@link #getLines lines} from model data.
           */
          unbindLines(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Unbinds aggregation {@link #getTarget target} from model data.
           */
          unbindTarget(): sap.suite.ui.microchart.AreaMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.AreaMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.AreaMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.AreaMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.AreaMicroChart;
        }
        /**
         * @SINCE 1.34
         *
         * Graphical representation of the area micro chart regarding the value lines, the thresholds, and the target
         * values.
         */
        class AreaMicroChartItem extends sap.ui.core.Element {
          /**
           * The configuration of the graphic element on the chart.
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
            mSettings?: $AreaMicroChartItemSettings
          );

          /**
           * Adds some point to the aggregation {@link #getPoints points}.
           */
          addPoint(
            /**
             * The point to add; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.AreaMicroChartPoint
          ): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Binds aggregation {@link #getPoints points} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindPoints(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Destroys all the points in the aggregation {@link #getPoints points}.
           */
          destroyPoints(): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartItem with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * The graphic element color.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartItem.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets content of aggregation {@link #getPoints points}.
           *
           * The set of points for this graphic element.
           */
          getPoints(): sap.suite.ui.microchart.AreaMicroChartPoint[];
          /**
           * Gets current value of property {@link #getTitle title}.
           *
           * The line title.
           */
          getTitle(): string;
          /**
           * Checks for the provided `sap.suite.ui.microchart.AreaMicroChartPoint` in the aggregation {@link #getPoints
           * points}. and returns its index if found or -1 otherwise.
           */
          indexOfPoint(
            /**
             * The point whose index is looked for
             */
            oPoint: sap.suite.ui.microchart.AreaMicroChartPoint
          ): number;
          /**
           * Inserts a point into the aggregation {@link #getPoints points}.
           */
          insertPoint(
            /**
             * The point to insert; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.AreaMicroChartPoint,
            /**
             * The `0`-based index the point should be inserted at; for a negative value of `iIndex`, the point is inserted
             * at position 0; for a value greater than the current size of the aggregation, the point is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Removes all the controls from the aggregation {@link #getPoints points}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllPoints(): sap.suite.ui.microchart.AreaMicroChartPoint[];
          /**
           * Removes a point from the aggregation {@link #getPoints points}.
           */
          removePoint(
            /**
             * The point to remove or its index or id
             */
            vPoint:
              | number
              | string
              | sap.suite.ui.microchart.AreaMicroChartPoint
          ): sap.suite.ui.microchart.AreaMicroChartPoint;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The graphic element color.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Sets a new value for property {@link #getTitle title}.
           *
           * The line title.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTitle(
            /**
             * New value for property `title`
             */
            sTitle?: string
          ): sap.suite.ui.microchart.AreaMicroChartItem;
          /**
           * Unbinds aggregation {@link #getPoints points} from model data.
           */
          unbindPoints(): sap.suite.ui.microchart.AreaMicroChartItem;
        }
        /**
         * @SINCE 1.34
         *
         * Displays or hides the labels for start and end dates, start and end values, and minimum and maximum values.
         */
        class AreaMicroChartLabel extends sap.ui.core.Element {
          /**
           * Constructor for a new AreaMicroChart control.
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
            mSettings?: $AreaMicroChartLabelSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartLabel with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * The graphic element color.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * The line title.
           *
           * Default value is `empty string`.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartLabel.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The graphic element color.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.AreaMicroChartLabel;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * The line title.
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
          ): sap.suite.ui.microchart.AreaMicroChartLabel;
        }
        /**
         * @SINCE 1.34
         *
         * Contains the data for the point.
         */
        class AreaMicroChartPoint extends sap.ui.core.Element {
          /**
           * This control contains data for the point.
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
            mSettings?: $AreaMicroChartPointSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartPoint with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartPoint.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getX x}.
           *
           * X value for the given point.
           */
          getX(): number;
          /**
           * Returns the x value. It returns 'undefined', if the x property was not set or an invalid number was set.
           */
          getXValue(): number;
          /**
           * Gets current value of property {@link #getY y}.
           *
           * Y value for the given point.
           */
          getY(): number;
          /**
           * Returns the y value. It returns 'undefined', if the y property was not set or an invalid number was set.
           */
          getYValue(): number;
          /**
           * Sets a new value for property {@link #getX x}.
           *
           * X value for the given point.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setX(
            /**
             * New value for property `x`
             */
            fX?: number
          ): sap.suite.ui.microchart.AreaMicroChartPoint;
          /**
           * Sets a new value for property {@link #getY y}.
           *
           * Y value for the given point.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setY(
            /**
             * New value for property `y`
             */
            fY?: number
          ): sap.suite.ui.microchart.AreaMicroChartPoint;
        }
        /**
         * @SINCE 1.34
         *
         * Displays a colored horizontal bar representing a current value on top of a background bar representing
         * the compared value. The vertical bars can represent the numeric values, the scaling factors, the thresholds,
         * and the target values. This control replaces the deprecated sap.suite.ui.commons.BulletChart.
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string. The aggregated data of the microchart
         * can also be customized.
         */
        class BulletMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new BulletMicroChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $BulletMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Adds some threshold to the aggregation {@link #getThresholds thresholds}.
           */
          addThreshold(
            /**
             * The threshold to add; if empty, nothing is inserted
             */
            oThreshold: sap.suite.ui.microchart.BulletMicroChartData
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.BulletMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.BulletMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.BulletMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Binds aggregation {@link #getActual actual} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindActual(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Binds aggregation {@link #getThresholds thresholds} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindThresholds(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Destroys the actual in the aggregation {@link #getActual actual}.
           */
          destroyActual(): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Destroys all the thresholds in the aggregation {@link #getThresholds thresholds}.
           */
          destroyThresholds(): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.BulletMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.BulletMicroChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Gets content of aggregation {@link #getActual actual}.
           *
           * Actual data of the BulletMicroChart.
           */
          getActual(): sap.suite.ui.microchart.BulletMicroChartData;
          /**
           * Gets current value of property {@link #getActualValueLabel actualValueLabel}.
           *
           * If set, displays a specified label instead of the numeric actual value.
           *
           * Default value is `empty string`.
           */
          getActualValueLabel(): string;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getDeltaValueLabel deltaValueLabel}.
           *
           * If set, displays a specified label instead of the calculated numeric delta value.
           *
           * Default value is `empty string`.
           */
          getDeltaValueLabel(): string;
          /**
           * Gets current value of property {@link #getForecastValue forecastValue}.
           *
           * The forecast value that is displayed in Actual mode only. If set, the forecast value bar appears in the
           * background of the actual value bar.
           */
          getForecastValue(): number;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.58)
           *
           * Gets current value of property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed or by the width and height property.
           *
           * Default value is `false`.
           */
          getIsResponsive(): boolean;
          /**
           * Gets current value of property {@link #getMaxValue maxValue}.
           *
           * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances
           * of this control.
           */
          getMaxValue(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.BulletMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getMinValue minValue}.
           *
           * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances
           * of this control.
           */
          getMinValue(): number;
          /**
           * Gets current value of property {@link #getMode mode}.
           *
           * The mode of displaying the actual value itself or the delta between the actual value and the target value.
           * If not set, the actual value is displayed.
           *
           * Default value is `"Actual"`.
           */
          getMode(): sap.suite.ui.microchart.BulletMicroChartModeType;
          /**
           * Gets current value of property {@link #getScale scale}.
           *
           * The scaling suffix that is added to all values.
           *
           * Default value is `empty string`.
           */
          getScale(): string;
          /**
           * Gets current value of property {@link #getScaleColor scaleColor}.
           *
           * The background color of the scale. The theming is enabled only for the default value of this property.
           *
           * Default value is `"MediumLight"`.
           */
          getScaleColor(): sap.suite.ui.microchart.CommonBackgroundType;
          /**
           * Gets current value of property {@link #getShowActualValue showActualValue}.
           *
           * If set to true, shows the numeric actual value. This property works in Actual mode only.
           *
           * Default value is `true`.
           */
          getShowActualValue(): boolean;
          /**
           * Gets current value of property {@link #getShowActualValueInDeltaMode showActualValueInDeltaMode}.
           *
           * If set to true, shows the numeric actual value and possibly hides the delta value, if showDeltaValue
           * is set to true. This property works in Delta mode only and has priority over showDeltaValue.
           *
           * Default value is `false`.
           */
          getShowActualValueInDeltaMode(): boolean;
          /**
           * Gets current value of property {@link #getShowDeltaValue showDeltaValue}.
           *
           * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the
           * showActualValue setting. This property works in Delta mode only.
           *
           * Default value is `true`.
           */
          getShowDeltaValue(): boolean;
          /**
           * Gets current value of property {@link #getShowTargetValue showTargetValue}.
           *
           * If set to true, shows the numeric target value.
           *
           * Default value is `true`.
           */
          getShowTargetValue(): boolean;
          /**
           * Gets current value of property {@link #getShowThresholds showThresholds}.
           *
           * If set to true, shows the threshold markers.
           *
           * Default value is `true`.
           */
          getShowThresholds(): boolean;
          /**
           * Gets current value of property {@link #getShowValueMarker showValueMarker}.
           *
           * If set to true, shows the value marker.
           *
           * Default value is `false`.
           */
          getShowValueMarker(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getTargetValue targetValue}.
           *
           * The target value that is displayed as a black vertical bar.
           */
          getTargetValue(): number;
          /**
           * Gets current value of property {@link #getTargetValueLabel targetValueLabel}.
           *
           * If set, displays a specified label instead of the numeric target value.
           *
           * Default value is `empty string`.
           */
          getTargetValueLabel(): string;
          /**
           * Gets content of aggregation {@link #getThresholds thresholds}.
           *
           * Threshold data of the BulletMicroChart.
           */
          getThresholds(): sap.suite.ui.microchart.BulletMicroChartData[];
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.BulletMicroChartData` in the aggregation {@link #getThresholds
           * thresholds}. and returns its index if found or -1 otherwise.
           */
          indexOfThreshold(
            /**
             * The threshold whose index is looked for
             */
            oThreshold: sap.suite.ui.microchart.BulletMicroChartData
          ): number;
          /**
           * Inserts a threshold into the aggregation {@link #getThresholds thresholds}.
           */
          insertThreshold(
            /**
             * The threshold to insert; if empty, nothing is inserted
             */
            oThreshold: sap.suite.ui.microchart.BulletMicroChartData,
            /**
             * The `0`-based index the threshold should be inserted at; for a negative value of `iIndex`, the threshold
             * is inserted at position 0; for a value greater than the current size of the aggregation, the threshold
             * is inserted at the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getThresholds thresholds}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllThresholds(): sap.suite.ui.microchart.BulletMicroChartData[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a threshold from the aggregation {@link #getThresholds thresholds}.
           */
          removeThreshold(
            /**
             * The threshold to remove or its index or id
             */
            vThreshold:
              | number
              | string
              | sap.suite.ui.microchart.BulletMicroChartData
          ): sap.suite.ui.microchart.BulletMicroChartData;
          /**
           * Sets the aggregated {@link #getActual actual}.
           */
          setActual(
            /**
             * The actual to set
             */
            oActual: sap.suite.ui.microchart.BulletMicroChartData
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getActualValueLabel actualValueLabel}.
           *
           * If set, displays a specified label instead of the numeric actual value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setActualValueLabel(
            /**
             * New value for property `actualValueLabel`
             */
            sActualValueLabel?: string
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getDeltaValueLabel deltaValueLabel}.
           *
           * If set, displays a specified label instead of the calculated numeric delta value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setDeltaValueLabel(
            /**
             * New value for property `deltaValueLabel`
             */
            sDeltaValueLabel?: string
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getForecastValue forecastValue}.
           *
           * The forecast value that is displayed in Actual mode only. If set, the forecast value bar appears in the
           * background of the actual value bar.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setForecastValue(
            /**
             * New value for property `forecastValue`
             */
            fForecastValue?: number
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.58)
           *
           * Sets a new value for property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed or by the width and height property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIsResponsive(
            /**
             * New value for property `isResponsive`
             */
            bIsResponsive?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getMaxValue maxValue}.
           *
           * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances
           * of this control.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMaxValue(
            /**
             * New value for property `maxValue`
             */
            fMaxValue?: number
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getMinValue minValue}.
           *
           * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances
           * of this control.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMinValue(
            /**
             * New value for property `minValue`
             */
            fMinValue?: number
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getMode mode}.
           *
           * The mode of displaying the actual value itself or the delta between the actual value and the target value.
           * If not set, the actual value is displayed.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Actual"`.
           */
          setMode(
            /**
             * New value for property `mode`
             */
            sMode?: sap.suite.ui.microchart.BulletMicroChartModeType
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getScale scale}.
           *
           * The scaling suffix that is added to all values.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setScale(
            /**
             * New value for property `scale`
             */
            sScale?: string
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getScaleColor scaleColor}.
           *
           * The background color of the scale. The theming is enabled only for the default value of this property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"MediumLight"`.
           */
          setScaleColor(
            /**
             * New value for property `scaleColor`
             */
            sScaleColor?: sap.suite.ui.microchart.CommonBackgroundType
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getShowActualValue showActualValue}.
           *
           * If set to true, shows the numeric actual value. This property works in Actual mode only.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowActualValue(
            /**
             * New value for property `showActualValue`
             */
            bShowActualValue?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getShowActualValueInDeltaMode showActualValueInDeltaMode}.
           *
           * If set to true, shows the numeric actual value and possibly hides the delta value, if showDeltaValue
           * is set to true. This property works in Delta mode only and has priority over showDeltaValue.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowActualValueInDeltaMode(
            /**
             * New value for property `showActualValueInDeltaMode`
             */
            bShowActualValueInDeltaMode?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getShowDeltaValue showDeltaValue}.
           *
           * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the
           * showActualValue setting. This property works in Delta mode only.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowDeltaValue(
            /**
             * New value for property `showDeltaValue`
             */
            bShowDeltaValue?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getShowTargetValue showTargetValue}.
           *
           * If set to true, shows the numeric target value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowTargetValue(
            /**
             * New value for property `showTargetValue`
             */
            bShowTargetValue?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getShowThresholds showThresholds}.
           *
           * If set to true, shows the threshold markers.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowThresholds(
            /**
             * New value for property `showThresholds`
             */
            bShowThresholds?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getShowValueMarker showValueMarker}.
           *
           * If set to true, shows the value marker.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowValueMarker(
            /**
             * New value for property `showValueMarker`
             */
            bShowValueMarker?: boolean
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getTargetValue targetValue}.
           *
           * The target value that is displayed as a black vertical bar.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTargetValue(
            /**
             * New value for property `targetValue`
             */
            fTargetValue?: number
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getTargetValueLabel targetValueLabel}.
           *
           * If set, displays a specified label instead of the numeric target value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setTargetValueLabel(
            /**
             * New value for property `targetValueLabel`
             */
            sTargetValueLabel?: string
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Unbinds aggregation {@link #getActual actual} from model data.
           */
          unbindActual(): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Unbinds aggregation {@link #getThresholds thresholds} from model data.
           */
          unbindThresholds(): sap.suite.ui.microchart.BulletMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.BulletMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.BulletMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.BulletMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.BulletMicroChart;
        }
        /**
         * @SINCE 1.34
         *
         * Contains the thresholds data.
         */
        class BulletMicroChartData extends sap.ui.core.Element {
          /**
           * Constructor for a new BulletMicroChartData.
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
            mSettings?: $BulletMicroChartDataSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.BulletMicroChartData with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * The semantic color of the actual value.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueColor;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.BulletMicroChartData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The actual value.
           *
           * Default value is `"0"`.
           */
          getValue(): number;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The semantic color of the actual value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueColor
          ): sap.suite.ui.microchart.BulletMicroChartData;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The actual value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"0"`.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue?: number
          ): sap.suite.ui.microchart.BulletMicroChartData;
        }
        /**
         * @SINCE 1.34
         *
         * Compares different values which are represented as vertical bars. This control replaces the deprecated
         * sap.suite.ui.commons.ColumnMicroChart.
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string. The aggregated data of the microchart
         * can also be customized.
         */
        class ColumnMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new ColumnMicroChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $ColumnMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Adds some column to the aggregation {@link #getColumns columns}.
           */
          addColumn(
            /**
             * The column to add; if empty, nothing is inserted
             */
            oColumn: sap.suite.ui.microchart.ColumnMicroChartData
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ColumnMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ColumnMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ColumnMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ColumnMicroChart;
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
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Destroys all the columns in the aggregation {@link #getColumns columns}.
           */
          destroyColumns(): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Destroys the leftBottomLabel in the aggregation {@link #getLeftBottomLabel leftBottomLabel}.
           */
          destroyLeftBottomLabel(): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Destroys the leftTopLabel in the aggregation {@link #getLeftTopLabel leftTopLabel}.
           */
          destroyLeftTopLabel(): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Destroys the rightBottomLabel in the aggregation {@link #getRightBottomLabel rightBottomLabel}.
           */
          destroyRightBottomLabel(): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Destroys the rightTopLabel in the aggregation {@link #getRightTopLabel rightTopLabel}.
           */
          destroyRightTopLabel(): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.ColumnMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Gets current value of property {@link #getAllowColumnLabels allowColumnLabels}.
           *
           * If set to true and there is enough space, top labels of the chart are hidden and labels for each column
           * are shown instead.
           */
          getAllowColumnLabels(): boolean;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets content of aggregation {@link #getColumns columns}.
           *
           * The column chart data.
           */
          getColumns(): sap.suite.ui.microchart.ColumnMicroChartData[];
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.60.0)
           *
           * Gets current value of property {@link #getIsResponsive isResponsive}.
           *
           * If set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size, width and height properties are ignored in this case.
           *
           * Default value is `false`.
           */
          getIsResponsive(): boolean;
          /**
           * Gets content of aggregation {@link #getLeftBottomLabel leftBottomLabel}.
           *
           * The label on the left bottom corner of the chart.
           */
          getLeftBottomLabel(): sap.suite.ui.microchart.ColumnMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getLeftTopLabel leftTopLabel}.
           *
           * The label on the left top corner of the chart.
           */
          getLeftTopLabel(): sap.suite.ui.microchart.ColumnMicroChartLabel;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets content of aggregation {@link #getRightBottomLabel rightBottomLabel}.
           *
           * The label on the right bottom corner of the chart.
           */
          getRightBottomLabel(): sap.suite.ui.microchart.ColumnMicroChartLabel;
          /**
           * Gets content of aggregation {@link #getRightTopLabel rightTopLabel}.
           *
           * The label on the right top corner of the chart.
           */
          getRightTopLabel(): sap.suite.ui.microchart.ColumnMicroChartLabel;
          /**
           * Gets current value of property {@link #getShowBottomLabels showBottomLabels}.
           *
           * If this property is set to `false`, both bottom labels are hidden.
           *
           * Default value is `true`.
           */
          getShowBottomLabels(): boolean;
          /**
           * Gets current value of property {@link #getShowTopLabels showTopLabels}.
           *
           * If this property is set to `false`, both top labels are hidden.
           *
           * Default value is `true`.
           */
          getShowTopLabels(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the column micro chart is included.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.ColumnMicroChartData` in the aggregation {@link #getColumns
           * columns}. and returns its index if found or -1 otherwise.
           */
          indexOfColumn(
            /**
             * The column whose index is looked for
             */
            oColumn: sap.suite.ui.microchart.ColumnMicroChartData
          ): number;
          /**
           * Inserts a column into the aggregation {@link #getColumns columns}.
           */
          insertColumn(
            /**
             * The column to insert; if empty, nothing is inserted
             */
            oColumn: sap.suite.ui.microchart.ColumnMicroChartData,
            /**
             * The `0`-based index the column should be inserted at; for a negative value of `iIndex`, the column is
             * inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted
             * at the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getColumns columns}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllColumns(): sap.suite.ui.microchart.ColumnMicroChartData[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a column from the aggregation {@link #getColumns columns}.
           */
          removeColumn(
            /**
             * The column to remove or its index or id
             */
            vColumn:
              | number
              | string
              | sap.suite.ui.microchart.ColumnMicroChartData
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * @SINCE 1.60.0
           *
           * Sets a new value for property {@link #getAllowColumnLabels allowColumnLabels}.
           *
           * If set to true and there is enough space, top labels of the chart are hidden and labels for each column
           * are shown instead.
           */
          setAllowColumnLabels(
            /**
             * New value for property `allowColumnLabels`
             */
            bAllowColumnLabels?: boolean
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.60.0)
           *
           * Sets a new value for property {@link #getIsResponsive isResponsive}.
           *
           * If set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size, width and height properties are ignored in this case.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIsResponsive(
            /**
             * New value for property `isResponsive`
             */
            bIsResponsive?: boolean
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets the aggregated {@link #getLeftBottomLabel leftBottomLabel}.
           */
          setLeftBottomLabel(
            /**
             * The leftBottomLabel to set
             */
            oLeftBottomLabel: sap.suite.ui.microchart.ColumnMicroChartLabel
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets the aggregated {@link #getLeftTopLabel leftTopLabel}.
           */
          setLeftTopLabel(
            /**
             * The leftTopLabel to set
             */
            oLeftTopLabel: sap.suite.ui.microchart.ColumnMicroChartLabel
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets the aggregated {@link #getRightBottomLabel rightBottomLabel}.
           */
          setRightBottomLabel(
            /**
             * The rightBottomLabel to set
             */
            oRightBottomLabel: sap.suite.ui.microchart.ColumnMicroChartLabel
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets the aggregated {@link #getRightTopLabel rightTopLabel}.
           */
          setRightTopLabel(
            /**
             * The rightTopLabel to set
             */
            oRightTopLabel: sap.suite.ui.microchart.ColumnMicroChartLabel
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets a new value for property {@link #getShowBottomLabels showBottomLabels}.
           *
           * If this property is set to `false`, both bottom labels are hidden.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowBottomLabels(
            /**
             * New value for property `showBottomLabels`
             */
            bShowBottomLabels?: boolean
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets a new value for property {@link #getShowTopLabels showTopLabels}.
           *
           * If this property is set to `false`, both top labels are hidden.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowTopLabels(
            /**
             * New value for property `showTopLabels`
             */
            bShowTopLabels?: boolean
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the column micro chart is included.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Unbinds aggregation {@link #getColumns columns} from model data.
           */
          unbindColumns(): sap.suite.ui.microchart.ColumnMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ColumnMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ColumnMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ColumnMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ColumnMicroChart;
        }
        /**
         * @SINCE 1.34
         *
         * Defines the column chart data.
         */
        class ColumnMicroChartData extends sap.ui.core.Element {
          /**
           * Constructor for a new ColumnMicroChartData control.
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
            mSettings?: $ColumnMicroChartDataSettings
          );

          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ColumnMicroChartData`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ColumnMicroChartData` itself.
           *
           * The event is fired when the user chooses the column data.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ColumnMicroChartData`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.ColumnMicroChartData`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChartData with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Gets current value of property {@link #getColor color}.
           *
           * The graphic element color.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Gets current value of property {@link #getDisplayValue displayValue}.
           *
           * Overrides the value with a string that is shown when used in combination with {@link sap.suite.ui.microchart.ColumnMicroChart}
           * `allowColumnLabels`.
           */
          getDisplayValue(): string;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * The line title.
           *
           * Default value is `empty string`.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChartData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The actual value.
           */
          getValue(): number;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The graphic element color.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Sets a new value for property {@link #getDisplayValue displayValue}.
           *
           * Overrides the value with a string that is shown when used in combination with {@link sap.suite.ui.microchart.ColumnMicroChart}
           * `allowColumnLabels`.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayValue(
            /**
             * New value for property `displayValue`
             */
            sDisplayValue: string
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * The line title.
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
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The actual value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue: number
          ): sap.suite.ui.microchart.ColumnMicroChartData;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ColumnMicroChartData`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ColumnMicroChartData` itself.
           *
           * The event is fired when the user chooses the column data.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ColumnMicroChartData`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ColumnMicroChartData;
        }
        /**
         * @SINCE 1.34
         *
         * Displays or hides the labels of a column micro chart.
         */
        class ColumnMicroChartLabel extends sap.ui.core.Element {
          /**
           * Constructor for a new ColumnMicroChartLabel control.
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
            mSettings?: $ColumnMicroChartLabelSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChartLabel with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * The graphic element color.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * The line title.
           *
           * Default value is `empty string`.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChartLabel.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The graphic element color.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.ColumnMicroChartLabel;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * The line title.
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
          ): sap.suite.ui.microchart.ColumnMicroChartLabel;
        }
        /**
         * @SINCE 1.34
         *
         * Illustrates values as colored bar charts with title, numeric value, and scaling factor in the content
         * area. This control replaces the deprecated sap.suite.ui.commons.ComparisonChart.
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string. The aggregated data of the microchart
         * can also be customized.
         */
        class ComparisonMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new ComparisonMicroChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $ComparisonMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Adds some data to the aggregation {@link #getData data}.
           */
          addData(
            /**
             * The data to add; if empty, nothing is inserted
             */
            oData: sap.suite.ui.microchart.ComparisonMicroChartData
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ComparisonMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ComparisonMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ComparisonMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Binds aggregation {@link #getData data} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindData(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Destroys all the data in the aggregation {@link #getData data}.
           */
          destroyData(): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.ComparisonMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.ComparisonMicroChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getColorPalette colorPalette}.
           *
           * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are
           * ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors
           * are used, assignment of the colors begins from the first palette color.
           *
           * Default value is `[]`.
           */
          getColorPalette(): string[];
          /**
           * Gets content of aggregation {@link #getData data}.
           *
           * The comparison chart bar data.
           */
          getData(): sap.suite.ui.microchart.ComparisonMicroChartData[];
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.58)
           *
           * Gets current value of property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size and Width properties are ignored in such case.
           *
           * Default value is `false`.
           */
          getIsResponsive(): boolean;
          /**
           * @SINCE 1.42.0
           *
           * Gets current value of property {@link #getMaxValue maxValue}.
           *
           * The maximum scale value for the chart used to define the value range of the scale for comparing different
           * values.
           */
          getMaxValue(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.ComparisonMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * @SINCE 1.42.0
           *
           * Gets current value of property {@link #getMinValue minValue}.
           *
           * The minimum scale value for the chart used to define the value range of the scale for comparing different
           * values.
           */
          getMinValue(): number;
          /**
           * Gets current value of property {@link #getScale scale}.
           *
           * The scaling suffix that is added to the actual and target values.
           *
           * Default value is `empty string`.
           */
          getScale(): string;
          /**
           * Gets current value of property {@link #getShrinkable shrinkable}.
           *
           * If it is set to true, the height of the control is defined by its content.
           *
           * Default value is `false`.
           */
          getShrinkable(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getView view}.
           *
           * The view of the chart. If not set, the Normal view is used by default.
           *
           * Default value is `"Normal"`.
           */
          getView(): sap.suite.ui.microchart.ComparisonMicroChartViewType;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.ComparisonMicroChartData` in the aggregation {@link
           * #getData data}. and returns its index if found or -1 otherwise.
           */
          indexOfData(
            /**
             * The data whose index is looked for
             */
            oData: sap.suite.ui.microchart.ComparisonMicroChartData
          ): number;
          /**
           * Inserts a data into the aggregation {@link #getData data}.
           */
          insertData(
            /**
             * The data to insert; if empty, nothing is inserted
             */
            oData: sap.suite.ui.microchart.ComparisonMicroChartData,
            /**
             * The `0`-based index the data should be inserted at; for a negative value of `iIndex`, the data is inserted
             * at position 0; for a value greater than the current size of the aggregation, the data is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getData data}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllData(): sap.suite.ui.microchart.ComparisonMicroChartData[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a data from the aggregation {@link #getData data}.
           */
          removeData(
            /**
             * The data to remove or its index or id
             */
            vData:
              | number
              | string
              | sap.suite.ui.microchart.ComparisonMicroChartData
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Sets a new value for property {@link #getColorPalette colorPalette}.
           *
           * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are
           * ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors
           * are used, assignment of the colors begins from the first palette color.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `[]`.
           */
          setColorPalette(
            /**
             * New value for property `colorPalette`
             */
            sColorPalette?: string[]
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.58)
           *
           * Sets a new value for property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size and Width properties are ignored in such case.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIsResponsive(
            /**
             * New value for property `isResponsive`
             */
            bIsResponsive?: boolean
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * @SINCE 1.42.0
           *
           * Sets a new value for property {@link #getMaxValue maxValue}.
           *
           * The maximum scale value for the chart used to define the value range of the scale for comparing different
           * values.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMaxValue(
            /**
             * New value for property `maxValue`
             */
            fMaxValue?: number
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * @SINCE 1.42.0
           *
           * Sets a new value for property {@link #getMinValue minValue}.
           *
           * The minimum scale value for the chart used to define the value range of the scale for comparing different
           * values.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMinValue(
            /**
             * New value for property `minValue`
             */
            fMinValue?: number
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Sets a new value for property {@link #getScale scale}.
           *
           * The scaling suffix that is added to the actual and target values.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setScale(
            /**
             * New value for property `scale`
             */
            sScale?: string
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Sets a new value for property {@link #getShrinkable shrinkable}.
           *
           * If it is set to true, the height of the control is defined by its content.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShrinkable(
            /**
             * New value for property `shrinkable`
             */
            bShrinkable?: boolean
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the bullet micro chart is included.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Sets a new value for property {@link #getView view}.
           *
           * The view of the chart. If not set, the Normal view is used by default.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Normal"`.
           */
          setView(
            /**
             * New value for property `view`
             */
            sView?: sap.suite.ui.microchart.ComparisonMicroChartViewType
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Unbinds aggregation {@link #getData data} from model data.
           */
          unbindData(): sap.suite.ui.microchart.ComparisonMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ComparisonMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ComparisonMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ComparisonMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ComparisonMicroChart;
        }
        /**
         * @SINCE 1.34
         *
         * Contains the values of the comparison chart.
         */
        class ComparisonMicroChartData extends sap.ui.core.Element {
          /**
           * Constructor for a new ComparisonMicroChartData.
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
            mSettings?: $ComparisonMicroChartDataSettings
          );

          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ComparisonMicroChartData`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ComparisonMicroChartData` itself.
           *
           * The event is fired when the user chooses the comparison chart bar.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ComparisonMicroChartData`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.ComparisonMicroChartData`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.ComparisonMicroChartData with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Gets current value of property {@link #getColor color}.
           *
           * The semantic color of the value.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Gets current value of property {@link #getDisplayValue displayValue}.
           *
           * If this property is set then it will be displayed instead of value.
           *
           * Default value is `empty string`.
           */
          getDisplayValue(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.ComparisonMicroChartData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getTitle title}.
           *
           * The comparison bar title.
           *
           * Default value is `empty string`.
           */
          getTitle(): string;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The value for comparison.
           *
           * Default value is `"0"`.
           */
          getValue(): number;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The semantic color of the value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Sets a new value for property {@link #getDisplayValue displayValue}.
           *
           * If this property is set then it will be displayed instead of value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setDisplayValue(
            /**
             * New value for property `displayValue`
             */
            sDisplayValue?: string
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Sets a new value for property {@link #getTitle title}.
           *
           * The comparison bar title.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setTitle(
            /**
             * New value for property `title`
             */
            sTitle?: string
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The value for comparison.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"0"`.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue?: number
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.ComparisonMicroChartData`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.ComparisonMicroChartData` itself.
           *
           * The event is fired when the user chooses the comparison chart bar.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.ComparisonMicroChartData`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.ComparisonMicroChartData;
        }
        /**
         * @SINCE 1.34
         *
         * Represents the delta of two values as a chart. This control replaces the deprecated sap.suite.ui.commons.DeltaMicroChart.
         *
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string.
         */
        class DeltaMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new DeltaMicroChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $DeltaMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.DeltaMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.DeltaMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.DeltaMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.DeltaMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.DeltaMicroChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getColor color}.
           *
           * The semantic color of the delta value.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Gets current value of property {@link #getDeltaDisplayValue deltaDisplayValue}.
           *
           * If this property is set, it is rendered instead of a calculated delta.
           */
          getDeltaDisplayValue(): string;
          /**
           * Gets current value of property {@link #getDisplayValue1 displayValue1}.
           *
           * If this property is set, it is rendered instead of value1.
           */
          getDisplayValue1(): string;
          /**
           * Gets current value of property {@link #getDisplayValue2 displayValue2}.
           *
           * If this property is set, it is rendered instead of value2.
           */
          getDisplayValue2(): string;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.61.0)
           *
           * Gets current value of property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size and Width properties are ignored in such case.
           *
           * Default value is `false`.
           */
          getIsResponsive(): boolean;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.DeltaMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the delta micro chart is included.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getTitle1 title1}.
           *
           * The first value title.
           */
          getTitle1(): string;
          /**
           * Gets current value of property {@link #getTitle2 title2}.
           *
           * The second value title.
           */
          getTitle2(): string;
          /**
           * Gets current value of property {@link #getValue1 value1}.
           *
           * The first value for delta calculation.
           */
          getValue1(): number;
          /**
           * Gets current value of property {@link #getValue2 value2}.
           *
           * The second value for delta calculation.
           */
          getValue2(): number;
          /**
           * @SINCE 1.61.0
           *
           * Gets current value of property {@link #getView view}.
           *
           * The view of the chart. If not set, the `Normal` view is used by default.
           *
           * Default value is `"Normal"`.
           */
          getView(): sap.suite.ui.microchart.DeltaMicroChartViewType;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The semantic color of the delta value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getDeltaDisplayValue deltaDisplayValue}.
           *
           * If this property is set, it is rendered instead of a calculated delta.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDeltaDisplayValue(
            /**
             * New value for property `deltaDisplayValue`
             */
            sDeltaDisplayValue?: string
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getDisplayValue1 displayValue1}.
           *
           * If this property is set, it is rendered instead of value1.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayValue1(
            /**
             * New value for property `displayValue1`
             */
            sDisplayValue1?: string
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getDisplayValue2 displayValue2}.
           *
           * If this property is set, it is rendered instead of value2.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayValue2(
            /**
             * New value for property `displayValue2`
             */
            sDisplayValue2?: string
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.61.0)
           *
           * Sets a new value for property {@link #getIsResponsive isResponsive}.
           *
           * If this set to true, width and height of the control are determined by the width and height of the container
           * in which the control is placed. Size and Width properties are ignored in such case.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIsResponsive(
            /**
             * New value for property `isResponsive`
             */
            bIsResponsive?: boolean
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the delta micro chart is included.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getTitle1 title1}.
           *
           * The first value title.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTitle1(
            /**
             * New value for property `title1`
             */
            sTitle1?: string
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getTitle2 title2}.
           *
           * The second value title.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTitle2(
            /**
             * New value for property `title2`
             */
            sTitle2?: string
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getValue1 value1}.
           *
           * The first value for delta calculation.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue1(
            /**
             * New value for property `value1`
             */
            fValue1: number
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getValue2 value2}.
           *
           * The second value for delta calculation.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue2(
            /**
             * New value for property `value2`
             */
            fValue2: number
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * @SINCE 1.61.0
           *
           * Sets a new value for property {@link #getView view}.
           *
           * The view of the chart. If not set, the `Normal` view is used by default.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Normal"`.
           */
          setView(
            /**
             * New value for property `view`
             */
            sView?: sap.suite.ui.microchart.DeltaMicroChartViewType
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.DeltaMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.DeltaMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.DeltaMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.DeltaMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.DeltaMicroChart;
        }
        /**
         * @SINCE 1.34
         *
         * A radial chart that displays a value compared to its total.
         * Unlike a pie chart, which shows multiple values or sectors, a Harvey Ball microchart shows only one value
         * from a total.
         * The sector that represents a value being compared to a total is defined by {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}.
         *
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string. The aggregated data of the microchart
         * can also be customized.
         */
        class HarveyBallMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new HarveyBallMicroChart.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $HarveyBallMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Adds some item to the aggregation {@link #getItems items}.
           */
          addItem(
            /**
             * The item to add; if empty, nothing is inserted
             */
            oItem: sap.suite.ui.microchart.HarveyBallMicroChartItem
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.HarveyBallMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.HarveyBallMicroChart` itself.
           *
           * This event is fired when the chart is clicked or tapped.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.HarveyBallMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
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
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Destroys all the items in the aggregation {@link #getItems items}.
           */
          destroyItems(): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.HarveyBallMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.HarveyBallMicroChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * @SINCE 1.62.0
           *
           * Gets current value of property {@link #getAlignContent alignContent}.
           *
           * The alignment of the content. If not set, the `Left` alignment type is used.
           *
           * Default value is `"Left"`.
           */
          getAlignContent(): sap.suite.ui.microchart.HorizontalAlignmentType;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getColorPalette colorPalette}.
           *
           * The color palette for the chart. Currently only a single color (first color in the array) is supported.
           *
           * If this property is defined, the semantic color defined in the {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}
           * is ignored.
           *
           * Default value is `[]`.
           */
          getColorPalette(): string[];
          /**
           * Gets current value of property {@link #getFormattedLabel formattedLabel}.
           *
           * If set to `true`, the `totalLabel` property is used instead of the combination of the total value and
           * its scaling factor.
           * The default value is `false`, which means that the total value, defined by the `total` property, and
           * the scaling factor, defined by the `totalScale` property, are displayed separately.
           *
           * Default value is `false`.
           */
          getFormattedLabel(): boolean;
          /**
           * @SINCE 1.62.0
           *
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.62.0)
           *
           * Gets current value of property {@link #getIsResponsive isResponsive}.
           *
           * If set to `true`, the width and height of the control are determined by the width and height of the parent
           * container, in which case the `size` and `width` properties are ignored.
           *
           * Default value is `false`.
           */
          getIsResponsive(): boolean;
          /**
           * Gets content of aggregation {@link #getItems items}.
           *
           * The set of items. Currently only a single item is supported.
           */
          getItems(): sap.suite.ui.microchart.HarveyBallMicroChartItem[];
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.HarveyBallMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getShowFractions showFractions}.
           *
           * If set to `true`, the fraction values are displayed next to the chart. The default setting is `true`.
           *
           * Default value is `true`.
           */
          getShowFractions(): boolean;
          /**
           * Gets current value of property {@link #getShowTotal showTotal}.
           *
           * If set to `true`, the total value is displayed next to the chart. The default setting is `true`.
           *
           * Default value is `true`.
           */
          getShowTotal(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the chart. If not set, the default size is applied based on the device type.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getTotal total}.
           *
           * The total value. The total value is represented by a full circle, or 360 degrees value on the chart.
           */
          getTotal(): number;
          /**
           * Gets current value of property {@link #getTotalLabel totalLabel}.
           *
           * The total label. If specified, it is displayed instead of the total value.
           */
          getTotalLabel(): string;
          /**
           * Gets current value of property {@link #getTotalScale totalScale}.
           *
           * The scaling factor that is displayed next to the total value.
           */
          getTotalScale(): string;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.HarveyBallMicroChartItem` in the aggregation {@link
           * #getItems items}. and returns its index if found or -1 otherwise.
           */
          indexOfItem(
            /**
             * The item whose index is looked for
             */
            oItem: sap.suite.ui.microchart.HarveyBallMicroChartItem
          ): number;
          /**
           * Inserts a item into the aggregation {@link #getItems items}.
           */
          insertItem(
            /**
             * The item to insert; if empty, nothing is inserted
             */
            oItem: sap.suite.ui.microchart.HarveyBallMicroChartItem,
            /**
             * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
             * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getItems items}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllItems(): sap.suite.ui.microchart.HarveyBallMicroChartItem[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a item from the aggregation {@link #getItems items}.
           */
          removeItem(
            /**
             * The item to remove or its index or id
             */
            vItem:
              | number
              | string
              | sap.suite.ui.microchart.HarveyBallMicroChartItem
          ): sap.suite.ui.microchart.HarveyBallMicroChartItem;
          /**
           * @SINCE 1.62.0
           *
           * Sets a new value for property {@link #getAlignContent alignContent}.
           *
           * The alignment of the content. If not set, the `Left` alignment type is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Left"`.
           */
          setAlignContent(
            /**
             * New value for property `alignContent`
             */
            sAlignContent?: sap.suite.ui.microchart.HorizontalAlignmentType
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getColorPalette colorPalette}.
           *
           * The color palette for the chart. Currently only a single color (first color in the array) is supported.
           *
           * If this property is defined, the semantic color defined in the {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}
           * is ignored.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `[]`.
           */
          setColorPalette(
            /**
             * New value for property `colorPalette`
             */
            sColorPalette?: string[]
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getFormattedLabel formattedLabel}.
           *
           * If set to `true`, the `totalLabel` property is used instead of the combination of the total value and
           * its scaling factor.
           * The default value is `false`, which means that the total value, defined by the `total` property, and
           * the scaling factor, defined by the `totalScale` property, are displayed separately.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setFormattedLabel(
            /**
             * New value for property `formattedLabel`
             */
            bFormattedLabel?: boolean
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * @SINCE 1.62.0
           *
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * @SINCE 1.38.0
           * @deprecated (since 1.62.0)
           *
           * Sets a new value for property {@link #getIsResponsive isResponsive}.
           *
           * If set to `true`, the width and height of the control are determined by the width and height of the parent
           * container, in which case the `size` and `width` properties are ignored.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIsResponsive(
            /**
             * New value for property `isResponsive`
             */
            bIsResponsive?: boolean
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getShowFractions showFractions}.
           *
           * If set to `true`, the fraction values are displayed next to the chart. The default setting is `true`.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowFractions(
            /**
             * New value for property `showFractions`
             */
            bShowFractions?: boolean
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getShowTotal showTotal}.
           *
           * If set to `true`, the total value is displayed next to the chart. The default setting is `true`.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowTotal(
            /**
             * New value for property `showTotal`
             */
            bShowTotal?: boolean
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the chart. If not set, the default size is applied based on the device type.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getTotal total}.
           *
           * The total value. The total value is represented by a full circle, or 360 degrees value on the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTotal(
            /**
             * New value for property `total`
             */
            fTotal?: number
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getTotalLabel totalLabel}.
           *
           * The total label. If specified, it is displayed instead of the total value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTotalLabel(
            /**
             * New value for property `totalLabel`
             */
            sTotalLabel: string
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getTotalScale totalScale}.
           *
           * The scaling factor that is displayed next to the total value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTotalScale(
            /**
             * New value for property `totalScale`
             */
            sTotalScale: string
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Unbinds aggregation {@link #getItems items} from model data.
           */
          unbindItems(): sap.suite.ui.microchart.HarveyBallMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.HarveyBallMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.HarveyBallMicroChart` itself.
           *
           * This event is fired when the chart is clicked or tapped.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.HarveyBallMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.HarveyBallMicroChart;
        }
        /**
         * @SINCE 1.34
         *
         * Defines the fraction value that is compared with total in a {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
         */
        class HarveyBallMicroChartItem extends sap.ui.core.Element {
          /**
           * Constructor for a new HarveyBallMicroChartItem to be used in a {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
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
            mSettings?: $HarveyBallMicroChartItemSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.HarveyBallMicroChartItem with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * The color of the sector representing the fraction value.
           * The same color is used for the fraction value label defined either by the `fraction` property or by the
           * `fractionLabel` property.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Gets current value of property {@link #getFormattedLabel formattedLabel}.
           *
           * If set to `true`, the `fractionLabel` property is used instead of the combination of the fraction value
           * and scaling factor.
           * The default value is `false`, which means that the fraction value, defined by the `fraction` property,
           * and the scaling factor, defined by the `fractionScale` property are displayed separately.
           *
           * Default value is `false`.
           */
          getFormattedLabel(): boolean;
          /**
           * Gets current value of property {@link #getFraction fraction}.
           *
           * The fraction value that defines the size of the colored sector.
           * This property must be set to a value that is a fraction of the `total` value defined for the {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
           *
           * Default value is `0`.
           */
          getFraction(): number;
          /**
           * Gets current value of property {@link #getFractionLabel fractionLabel}.
           *
           * The fraction label. If this property is specified, it is displayed instead of the label that is based
           * on the `fraction` property.
           */
          getFractionLabel(): string;
          /**
           * Gets current value of property {@link #getFractionScale fractionScale}.
           *
           * The scaling factor that is displayed after the fraction value.
           */
          getFractionScale(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.HarveyBallMicroChartItem.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * The color of the sector representing the fraction value.
           * The same color is used for the fraction value label defined either by the `fraction` property or by the
           * `fractionLabel` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.HarveyBallMicroChartItem;
          /**
           * Sets a new value for property {@link #getFormattedLabel formattedLabel}.
           *
           * If set to `true`, the `fractionLabel` property is used instead of the combination of the fraction value
           * and scaling factor.
           * The default value is `false`, which means that the fraction value, defined by the `fraction` property,
           * and the scaling factor, defined by the `fractionScale` property are displayed separately.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setFormattedLabel(
            /**
             * New value for property `formattedLabel`
             */
            bFormattedLabel?: boolean
          ): sap.suite.ui.microchart.HarveyBallMicroChartItem;
          /**
           * Sets a new value for property {@link #getFraction fraction}.
           *
           * The fraction value that defines the size of the colored sector.
           * This property must be set to a value that is a fraction of the `total` value defined for the {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setFraction(
            /**
             * New value for property `fraction`
             */
            fFraction?: number
          ): sap.suite.ui.microchart.HarveyBallMicroChartItem;
          /**
           * Sets a new value for property {@link #getFractionLabel fractionLabel}.
           *
           * The fraction label. If this property is specified, it is displayed instead of the label that is based
           * on the `fraction` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setFractionLabel(
            /**
             * New value for property `fractionLabel`
             */
            sFractionLabel: string
          ): sap.suite.ui.microchart.HarveyBallMicroChartItem;
          /**
           * Sets a new value for property {@link #getFractionScale fractionScale}.
           *
           * The scaling factor that is displayed after the fraction value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setFractionScale(
            /**
             * New value for property `fractionScale`
             */
            sFractionScale: string
          ): sap.suite.ui.microchart.HarveyBallMicroChartItem;
        }
        /**
         * @SINCE 1.42.0
         *
         * The InteractiveBarChart control belongs to a chart control group in the MicroChart library with a number
         * of interactive features. These interactive features provide more information on a chart value. For example,
         * by selecting a bar you can get more details on the displayed value.
         */
        class InteractiveBarChart extends sap.ui.core.Control {
          /**
           * Constructor for a new InteractiveBarChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: $InteractiveBarChartSettings
          );

          /**
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Adds some bar to the aggregation {@link #getBars bars}.
           */
          addBar(
            /**
             * The bar to add; if empty, nothing is inserted
             */
            oBar: sap.suite.ui.microchart.InteractiveBarChartBar
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveBarChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveBarChart` itself.
           *
           * The event is fired when the user presses the chart while its bars are not selectable in non-interactive
           * mode. This is decided internally, depending on the size of the bars.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveBarChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveBarChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveBarChart` itself.
           *
           * Event is fired when user has selected or deselected a bar.
           */
          attachSelectionChanged(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveBarChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Binds aggregation {@link #getBars bars} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindBars(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Destroys all the bars in the aggregation {@link #getBars bars}.
           */
          destroyBars(): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveBarChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveBarChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachSelectionChanged(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.InteractiveBarChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
           */
          fireSelectionChanged(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * All bars which are in selected state.
               */
              selectedBars?: sap.suite.ui.microchart.InteractiveBarChartBar[];
              /**
               * The bar being selected or deselected.
               */
              bar?: sap.suite.ui.microchart.InteractiveBarChartBar;
              /**
               * The selection state of the bar being selected or deselected.
               */
              selected?: boolean;
            }
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets content of aggregation {@link #getBars bars}.
           *
           * Bars displayed on the chart.
           */
          getBars(): sap.suite.ui.microchart.InteractiveBarChartBar[];
          /**
           * Gets current value of property {@link #getDisplayedBars displayedBars}.
           *
           * The number of displayed bars.
           *
           * Default value is `3`.
           */
          getDisplayedBars(): number;
          /**
           * Gets current value of property {@link #getLabelWidth labelWidth}.
           *
           * Width of the labels column in the resulting layout (in percentage). Possible range of values from 0 to
           * 100. A value of 40 results in the labels column taking up 40% of available space.
           *
           * Default value is `"40%"`.
           */
          getLabelWidth(): sap.ui.core.Percentage;
          /**
           * Gets current value of property {@link #getMax max}.
           *
           * End of displayed scale.
           */
          getMax(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.InteractiveBarChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getMin min}.
           *
           * Begin of displayed scale.
           */
          getMin(): number;
          /**
           * Gets all selected bars.
           */
          getSelectedBars(): sap.suite.ui.microchart.InteractiveBarChartBar[];
          /**
           * Gets current value of property {@link #getSelectionEnabled selectionEnabled}.
           *
           * Enables the selection in the chart.
           *
           * Default value is `true`.
           */
          getSelectionEnabled(): boolean;
          /**
           * Checks for the provided `sap.suite.ui.microchart.InteractiveBarChartBar` in the aggregation {@link #getBars
           * bars}. and returns its index if found or -1 otherwise.
           */
          indexOfBar(
            /**
             * The bar whose index is looked for
             */
            oBar: sap.suite.ui.microchart.InteractiveBarChartBar
          ): number;
          /**
           * Inserts a bar into the aggregation {@link #getBars bars}.
           */
          insertBar(
            /**
             * The bar to insert; if empty, nothing is inserted
             */
            oBar: sap.suite.ui.microchart.InteractiveBarChartBar,
            /**
             * The `0`-based index the bar should be inserted at; for a negative value of `iIndex`, the bar is inserted
             * at position 0; for a value greater than the current size of the aggregation, the bar is inserted at the
             * last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getBars bars}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllBars(): sap.suite.ui.microchart.InteractiveBarChartBar[];
          /**
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a bar from the aggregation {@link #getBars bars}.
           */
          removeBar(
            /**
             * The bar to remove or its index or id
             */
            vBar:
              | number
              | string
              | sap.suite.ui.microchart.InteractiveBarChartBar
          ): sap.suite.ui.microchart.InteractiveBarChartBar;
          /**
           * Sets a new value for property {@link #getDisplayedBars displayedBars}.
           *
           * The number of displayed bars.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `3`.
           */
          setDisplayedBars(
            /**
             * New value for property `displayedBars`
             */
            iDisplayedBars?: number
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Sets a new value for property {@link #getLabelWidth labelWidth}.
           *
           * Width of the labels column in the resulting layout (in percentage). Possible range of values from 0 to
           * 100. A value of 40 results in the labels column taking up 40% of available space.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"40%"`.
           */
          setLabelWidth(
            /**
             * New value for property `labelWidth`
             */
            sLabelWidth?: sap.ui.core.Percentage
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Sets a new value for property {@link #getMax max}.
           *
           * End of displayed scale.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMax(
            /**
             * New value for property `max`
             */
            fMax: number
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Sets a new value for property {@link #getMin min}.
           *
           * Begin of displayed scale.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMin(
            /**
             * New value for property `min`
             */
            fMin: number
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Already selected bars will be deselected and members of the selectedBars parameter which are part of
           * the bars aggregation will be set to selected state.
           */
          setSelectedBars(
            /**
             * A bar element or an array of bars for which the status should be set to selected.
             */
            selectedBars:
              | sap.suite.ui.microchart.InteractiveBarChartBar
              | sap.suite.ui.microchart.InteractiveBarChartBar[]
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Sets a new value for property {@link #getSelectionEnabled selectionEnabled}.
           *
           * Enables the selection in the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSelectionEnabled(
            /**
             * New value for property `selectionEnabled`
             */
            bSelectionEnabled?: boolean
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Unbinds aggregation {@link #getBars bars} from model data.
           */
          unbindBars(): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveBarChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveBarChart` itself.
           *
           * The event is fired when the user presses the chart while its bars are not selectable in non-interactive
           * mode. This is decided internally, depending on the size of the bars.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveBarChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveBarChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveBarChart` itself.
           *
           * Event is fired when user has selected or deselected a bar.
           */
          attachSelectionChanged(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveBarChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveBarChart;
        }
        /**
         * @SINCE 1.42.0
         *
         * A bar element for the InteractiveBarChart.
         */
        class InteractiveBarChartBar extends sap.ui.core.Element {
          /**
           * Constructor for the bar element of the InteractiveBarChart.
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
            mSettings?: $InteractiveBarChartBarSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.InteractiveBarChartBar with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * @SINCE 1.50.0
           *
           * Gets current value of property {@link #getColor color}.
           *
           * Determines the color of the bar.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueColor;
          /**
           * Gets current value of property {@link #getDisplayedValue displayedValue}.
           *
           * The value label to be displayed on the bar in the chart.
           */
          getDisplayedValue(): string;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * The label for the chart bar.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.InteractiveBarChartBar.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getSelected selected}.
           *
           * Determines if the chart bar is selected.
           *
           * Default value is `false`.
           */
          getSelected(): boolean;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The numeric value of the chart bar to be displayed on the bar.
           */
          getValue(): number;
          /**
           * @SINCE 1.50.0
           *
           * Sets a new value for property {@link #getColor color}.
           *
           * Determines the color of the bar.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueColor
          ): sap.suite.ui.microchart.InteractiveBarChartBar;
          /**
           * Sets a new value for property {@link #getDisplayedValue displayedValue}.
           *
           * The value label to be displayed on the bar in the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayedValue(
            /**
             * New value for property `displayedValue`
             */
            sDisplayedValue?: string
          ): sap.suite.ui.microchart.InteractiveBarChartBar;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * The label for the chart bar.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLabel(
            /**
             * New value for property `label`
             */
            sLabel?: string
          ): sap.suite.ui.microchart.InteractiveBarChartBar;
          /**
           * Sets a new value for property {@link #getSelected selected}.
           *
           * Determines if the chart bar is selected.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setSelected(
            /**
             * New value for property `selected`
             */
            bSelected?: boolean
          ): sap.suite.ui.microchart.InteractiveBarChartBar;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The numeric value of the chart bar to be displayed on the bar.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue: number
          ): sap.suite.ui.microchart.InteractiveBarChartBar;
        }
        /**
         * @SINCE 1.42.0
         *
         * The InteractiveDonutChart control belongs to a chart control group in the MicroChart library with a number
         * of interactive features. These interactive features provide more information on a chart value. For example,
         * by selecting a segment you can get more details on the displayed value.
         */
        class InteractiveDonutChart extends sap.ui.core.Control {
          /**
           * Constructor for InteractiveDonutChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: $InteractiveDonutChartSettings
          );

          /**
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Adds some segment to the aggregation {@link #getSegments segments}.
           */
          addSegment(
            /**
             * The segment to add; if empty, nothing is inserted
             */
            oSegment: sap.suite.ui.microchart.InteractiveDonutChartSegment
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveDonutChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveDonutChart` itself.
           *
           * The event is fired when the user presses the chart while its segments are not selectable in non-interactive
           * mode. This is decided internally, depending on the size of the chart.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveDonutChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveDonutChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveDonutChart` itself.
           *
           * Event is fired when a user has selected or deselected a segment or a legend entry.
           */
          attachSelectionChanged(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveDonutChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Binds aggregation {@link #getSegments segments} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindSegments(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Destroys all the segments in the aggregation {@link #getSegments segments}.
           */
          destroySegments(): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveDonutChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveDonutChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachSelectionChanged(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.InteractiveDonutChart with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
           */
          fireSelectionChanged(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * Contains all selected segments.
               */
              selectedSegments?: sap.suite.ui.microchart.InteractiveDonutChartSegment[];
              /**
               * The segment whose selection state has changed.
               */
              segment?: sap.suite.ui.microchart.InteractiveDonutChartSegment;
              /**
               * Indicates whether the segment "segment" is selected or not.
               */
              selected?: boolean;
            }
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getDisplayedSegments displayedSegments}.
           *
           * Number of segments to be displayed.
           *
           * Default value is `3`.
           */
          getDisplayedSegments(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.InteractiveDonutChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets content of aggregation {@link #getSegments segments}.
           *
           * Aggregation which contains all segments.
           */
          getSegments(): sap.suite.ui.microchart.InteractiveDonutChartSegment[];
          /**
           * Gets all selected segments or an empty array if there is no segment selected yet
           */
          getSelectedSegments(): sap.suite.ui.microchart.InteractiveDonutChartSegment[];
          /**
           * Gets current value of property {@link #getSelectionEnabled selectionEnabled}.
           *
           * Switch which enables or disables selection.
           *
           * Default value is `true`.
           */
          getSelectionEnabled(): boolean;
          /**
           * Checks for the provided `sap.suite.ui.microchart.InteractiveDonutChartSegment` in the aggregation {@link
           * #getSegments segments}. and returns its index if found or -1 otherwise.
           */
          indexOfSegment(
            /**
             * The segment whose index is looked for
             */
            oSegment: sap.suite.ui.microchart.InteractiveDonutChartSegment
          ): number;
          /**
           * Inserts a segment into the aggregation {@link #getSegments segments}.
           */
          insertSegment(
            /**
             * The segment to insert; if empty, nothing is inserted
             */
            oSegment: sap.suite.ui.microchart.InteractiveDonutChartSegment,
            /**
             * The `0`-based index the segment should be inserted at; for a negative value of `iIndex`, the segment
             * is inserted at position 0; for a value greater than the current size of the aggregation, the segment
             * is inserted at the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getSegments segments}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSegments(): sap.suite.ui.microchart.InteractiveDonutChartSegment[];
          /**
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a segment from the aggregation {@link #getSegments segments}.
           */
          removeSegment(
            /**
             * The segment to remove or its index or id
             */
            vSegment:
              | number
              | string
              | sap.suite.ui.microchart.InteractiveDonutChartSegment
          ): sap.suite.ui.microchart.InteractiveDonutChartSegment;
          /**
           * Sets a new value for property {@link #getDisplayedSegments displayedSegments}.
           *
           * Number of segments to be displayed.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `3`.
           */
          setDisplayedSegments(
            /**
             * New value for property `displayedSegments`
             */
            iDisplayedSegments?: number
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Already selected segments will be unselected and members of selectedSegments attribute which are part
           * of the segments aggregation will be set to selected state.
           */
          setSelectedSegments(
            /**
             * A segment element or an array of segments for which the status should be set to selected
             */
            selectedSegments:
              | sap.suite.ui.microchart.InteractiveDonutChartSegment
              | sap.suite.ui.microchart.InteractiveDonutChartSegment[]
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Sets a new value for property {@link #getSelectionEnabled selectionEnabled}.
           *
           * Switch which enables or disables selection.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSelectionEnabled(
            /**
             * New value for property `selectionEnabled`
             */
            bSelectionEnabled?: boolean
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Unbinds aggregation {@link #getSegments segments} from model data.
           */
          unbindSegments(): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveDonutChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveDonutChart` itself.
           *
           * The event is fired when the user presses the chart while its segments are not selectable in non-interactive
           * mode. This is decided internally, depending on the size of the chart.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveDonutChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveDonutChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveDonutChart` itself.
           *
           * Event is fired when a user has selected or deselected a segment or a legend entry.
           */
          attachSelectionChanged(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveDonutChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveDonutChart;
        }
        /**
         * @SINCE 1.42.0
         *
         * A donut chart segment.
         */
        class InteractiveDonutChartSegment extends sap.ui.core.Element {
          /**
           * Constructor for InteractiveDonutChartSegment element.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * initial settings for the new element
             */
            mSettings?: $InteractiveDonutChartSegmentSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.InteractiveDonutChartSegment with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * @SINCE 1.50.0
           *
           * Gets current value of property {@link #getColor color}.
           *
           * Determines the color of the segment.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueColor;
          /**
           * Gets current value of property {@link #getDisplayedValue displayedValue}.
           *
           * The value that is directly displayed on the legend.
           */
          getDisplayedValue(): string;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * Displayed text for the segment.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.InteractiveDonutChartSegment.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getSelected selected}.
           *
           * Indicator for the selected state.
           *
           * Default value is `false`.
           */
          getSelected(): boolean;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The value representing a percentage or an absolute value.
           */
          getValue(): number;
          /**
           * @SINCE 1.50.0
           *
           * Sets a new value for property {@link #getColor color}.
           *
           * Determines the color of the segment.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueColor
          ): sap.suite.ui.microchart.InteractiveDonutChartSegment;
          /**
           * Sets a new value for property {@link #getDisplayedValue displayedValue}.
           *
           * The value that is directly displayed on the legend.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayedValue(
            /**
             * New value for property `displayedValue`
             */
            sDisplayedValue?: string
          ): sap.suite.ui.microchart.InteractiveDonutChartSegment;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * Displayed text for the segment.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLabel(
            /**
             * New value for property `label`
             */
            sLabel?: string
          ): sap.suite.ui.microchart.InteractiveDonutChartSegment;
          /**
           * Sets a new value for property {@link #getSelected selected}.
           *
           * Indicator for the selected state.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setSelected(
            /**
             * New value for property `selected`
             */
            bSelected?: boolean
          ): sap.suite.ui.microchart.InteractiveDonutChartSegment;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The value representing a percentage or an absolute value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue?: number
          ): sap.suite.ui.microchart.InteractiveDonutChartSegment;
        }
        /**
         * @SINCE 1.42.0
         *
         * The InteractiveLineChart control belongs to a chart control group in the MicroChart library having a
         * number of interactive features.
         */
        class InteractiveLineChart extends sap.ui.core.Control {
          /**
           * Constructor for a new InteractiveLineChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: $InteractiveLineChartSettings
          );

          /**
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Adds some point to the aggregation {@link #getPoints points}.
           */
          addPoint(
            /**
             * The point to add; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.InteractiveLineChartPoint
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveLineChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveLineChart` itself.
           *
           * The event is fired only in non-interactive mode when the user presses the chart; in this mode, the points
           * and surrounding areas are not selectable. Non-interactive mode is decided upon internally, depending
           * on the size of the areas surrounding the points.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveLineChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveLineChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveLineChart` itself.
           *
           * Event is fired when a user has selected or deselected a point.
           */
          attachSelectionChanged(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveLineChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Binds aggregation {@link #getPoints points} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindPoints(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Destroys all the points in the aggregation {@link #getPoints points}.
           */
          destroyPoints(): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveLineChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveLineChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachSelectionChanged(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.InteractiveLineChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
           */
          fireSelectionChanged(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * All points which are in selected state.
               */
              selectedPoints?: sap.suite.ui.microchart.InteractiveLineChartPoint[];
              /**
               * The point which is pressed.
               */
              point?: sap.suite.ui.microchart.InteractiveLineChartPoint;
              /**
               * The selection state of the point which is pressed.
               */
              selected?: boolean;
            }
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getDisplayedPoints displayedPoints}.
           *
           * The maximum number of points to be displayed on the chart.
           *
           * Default value is `6`.
           */
          getDisplayedPoints(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.InteractiveLineChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets content of aggregation {@link #getPoints points}.
           *
           * Points displayed in the chart.
           */
          getPoints(): sap.suite.ui.microchart.InteractiveLineChartPoint[];
          /**
           * Gets current value of property {@link #getPrecedingPoint precedingPoint}.
           *
           * Abstract invisible point outside of the chart that ensures that the graph flows smoothly into the visible
           * part of the chart.
           *
           * Default value is `0`.
           */
          getPrecedingPoint(): number;
          /**
           * Retrieves the selected point elements from the points aggregation and returns them.
           */
          getSelectedPoints(): sap.suite.ui.microchart.InteractiveLineChartPoint[];
          /**
           * Gets current value of property {@link #getSelectionEnabled selectionEnabled}.
           *
           * If this property is set to true, one or multiple points are selectable.
           *
           * Default value is `true`.
           */
          getSelectionEnabled(): boolean;
          /**
           * Gets current value of property {@link #getSucceedingPoint succeedingPoint}.
           *
           * Abstract invisible point outside of the chart that ensures that the graph flows smoothly out of the visible
           * part of the chart.
           *
           * Default value is `0`.
           */
          getSucceedingPoint(): number;
          /**
           * Checks for the provided `sap.suite.ui.microchart.InteractiveLineChartPoint` in the aggregation {@link
           * #getPoints points}. and returns its index if found or -1 otherwise.
           */
          indexOfPoint(
            /**
             * The point whose index is looked for
             */
            oPoint: sap.suite.ui.microchart.InteractiveLineChartPoint
          ): number;
          /**
           * Inserts a point into the aggregation {@link #getPoints points}.
           */
          insertPoint(
            /**
             * The point to insert; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.InteractiveLineChartPoint,
            /**
             * The `0`-based index the point should be inserted at; for a negative value of `iIndex`, the point is inserted
             * at position 0; for a value greater than the current size of the aggregation, the point is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getPoints points}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllPoints(): sap.suite.ui.microchart.InteractiveLineChartPoint[];
          /**
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a point from the aggregation {@link #getPoints points}.
           */
          removePoint(
            /**
             * The point to remove or its index or id
             */
            vPoint:
              | number
              | string
              | sap.suite.ui.microchart.InteractiveLineChartPoint
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
          /**
           * Sets a new value for property {@link #getDisplayedPoints displayedPoints}.
           *
           * The maximum number of points to be displayed on the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `6`.
           */
          setDisplayedPoints(
            /**
             * New value for property `displayedPoints`
             */
            iDisplayedPoints?: number
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Sets a new value for property {@link #getPrecedingPoint precedingPoint}.
           *
           * Abstract invisible point outside of the chart that ensures that the graph flows smoothly into the visible
           * part of the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setPrecedingPoint(
            /**
             * New value for property `precedingPoint`
             */
            fPrecedingPoint?: number
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Already selected points will be deselected and members of the selectedPoints attribute which are part
           * of the points aggregation will be set to selected state.
           */
          setSelectedPoints(
            /**
             * A point element or an array of points for which the status should be set to selected.
             */
            selectedPoints:
              | sap.suite.ui.microchart.InteractiveLineChartPoint
              | sap.suite.ui.microchart.InteractiveLineChartPoint[]
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Sets a new value for property {@link #getSelectionEnabled selectionEnabled}.
           *
           * If this property is set to true, one or multiple points are selectable.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSelectionEnabled(
            /**
             * New value for property `selectionEnabled`
             */
            bSelectionEnabled?: boolean
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Sets a new value for property {@link #getSucceedingPoint succeedingPoint}.
           *
           * Abstract invisible point outside of the chart that ensures that the graph flows smoothly out of the visible
           * part of the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setSucceedingPoint(
            /**
             * New value for property `succeedingPoint`
             */
            fSucceedingPoint?: number
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Unbinds aggregation {@link #getPoints points} from model data.
           */
          unbindPoints(): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.InteractiveLineChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveLineChart` itself.
           *
           * The event is fired only in non-interactive mode when the user presses the chart; in this mode, the points
           * and surrounding areas are not selectable. Non-interactive mode is decided upon internally, depending
           * on the size of the areas surrounding the points.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveLineChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
           * this `sap.suite.ui.microchart.InteractiveLineChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.InteractiveLineChart` itself.
           *
           * Event is fired when a user has selected or deselected a point.
           */
          attachSelectionChanged(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.InteractiveLineChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.InteractiveLineChart;
        }
        /**
         * @SINCE 1.42.0
         *
         * A point element for the InteractiveLineChart.
         */
        class InteractiveLineChartPoint extends sap.ui.core.Element {
          /**
           * Constructor for the point element of the InteractiveLineChart.
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
            mSettings?: $InteractiveLineChartPointSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.InteractiveLineChartPoint with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * @SINCE 1.50.0
           *
           * Gets current value of property {@link #getColor color}.
           *
           * Determines the color of the point.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueColor;
          /**
           * Gets current value of property {@link #getDisplayedValue displayedValue}.
           *
           * The value label to be displayed near the point in the chart.
           */
          getDisplayedValue(): string;
          /**
           * Gets current value of property {@link #getLabel label}.
           *
           * The bottom label for the chart point.
           */
          getLabel(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.InteractiveLineChartPoint.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getSecondaryLabel secondaryLabel}.
           *
           * The label that is displayed right below the `label`..
           */
          getSecondaryLabel(): string;
          /**
           * Gets current value of property {@link #getSelected selected}.
           *
           * Determines if the chart point is selected.
           *
           * Default value is `false`.
           */
          getSelected(): boolean;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The numeric value of the chart point.
           */
          getValue(): number;
          /**
           * @SINCE 1.50.0
           *
           * Sets a new value for property {@link #getColor color}.
           *
           * Determines the color of the point.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueColor
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
          /**
           * Sets a new value for property {@link #getDisplayedValue displayedValue}.
           *
           * The value label to be displayed near the point in the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayedValue(
            /**
             * New value for property `displayedValue`
             */
            sDisplayedValue?: string
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
          /**
           * Sets a new value for property {@link #getLabel label}.
           *
           * The bottom label for the chart point.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLabel(
            /**
             * New value for property `label`
             */
            sLabel?: string
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
          /**
           * Sets a new value for property {@link #getSecondaryLabel secondaryLabel}.
           *
           * The label that is displayed right below the `label`..
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setSecondaryLabel(
            /**
             * New value for property `secondaryLabel`
             */
            sSecondaryLabel?: string
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
          /**
           * Sets a new value for property {@link #getSelected selected}.
           *
           * Determines if the chart point is selected.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setSelected(
            /**
             * New value for property `selected`
             */
            bSelected?: boolean
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The numeric value of the chart point.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue?: number
          ): sap.suite.ui.microchart.InteractiveLineChartPoint;
        }
        /**
         * @SINCE 1.48.0
         *
         * Chart that displays the history of values as segmented lines along a threshold line. The scale is optional
         * and showing the points is also optional.
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string.
         */
        class LineMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new LineMicroChart control.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: $LineMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Adds some line to the aggregation {@link #getLines lines}.
           */
          addLine(
            /**
             * The line to add; if empty, nothing is inserted
             */
            oLine: sap.suite.ui.microchart.LineMicroChartLine
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Adds some point to the aggregation {@link #getPoints points}.
           */
          addPoint(
            /**
             * The point to add; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.LineMicroChartPoint
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.LineMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.LineMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.LineMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Binds aggregation {@link #getLines lines} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindLines(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Binds aggregation {@link #getPoints points} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindPoints(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Destroys all the lines in the aggregation {@link #getLines lines}.
           */
          destroyLines(): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Destroys all the points in the aggregation {@link #getPoints points}.
           */
          destroyPoints(): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.LineMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getColor color}.
           *
           * Describes the color of the chart.
           * In conjunction with emphasized points, it is only used if all points have the sap.m.ValueColor.Neutral
           * color.
           * The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the 'above|' and
           * 'below' properties that determine the color of the graph above and below the threshold, respectively.
           *
           *
           * The `color` property of {@link sap.suite.ui.microchart.LineMicroChartLine} has priority over this property
           * in case it is set.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): any;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * Gets current value of property {@link #getLeftBottomLabel leftBottomLabel}.
           *
           * Describes the left bottom label of the chart. The label color is set internally. The space for the label
           * is not reserved if the label is not set.
           */
          getLeftBottomLabel(): string;
          /**
           * Gets current value of property {@link #getLeftTopLabel leftTopLabel}.
           *
           * Describes the left top label of the chart. The label color is determined by the color property of the
           * first LineMicroChartPoint in the points aggregation. The space for the label is not reserved if the label
           * is not set.
           */
          getLeftTopLabel(): string;
          /**
           * Gets content of aggregation {@link #getLines lines}.
           *
           * Aggregation that containes lines with data points.
           * This aggregation should be used instead of the `points` aggregation.
           */
          getLines(): sap.suite.ui.microchart.LineMicroChartLine[];
          /**
           * Gets current value of property {@link #getMaxXValue maxXValue}.
           *
           * If this property is set, it indicates the value the X-axis ends with.
           */
          getMaxXValue(): number;
          /**
           * Gets current value of property {@link #getMaxYValue maxYValue}.
           *
           * If this property is set, it indicates the value the Y-axis ends with.
           */
          getMaxYValue(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getMinXValue minXValue}.
           *
           * If this property is set, it indicates the value the X-axis starts with.
           */
          getMinXValue(): number;
          /**
           * Gets current value of property {@link #getMinYValue minYValue}.
           *
           * If this property is set, it indicates the value the Y-axis starts with.
           */
          getMinYValue(): number;
          /**
           * Gets content of aggregation {@link #getPoints points}.
           *
           * Aggregation that contains all data points that should be provided in an ordered way. If both the `points`
           * and `lines` aggregations are used, the chart is rendered based on the `points` aggregation, while the
           * lines from the `lines` aggregations are ignored.
           * The `points` aggregation can be used to ensure backward compatibility. However in general, the `lines`
           * aggregation should be preferred.
           */
          getPoints(): sap.suite.ui.microchart.LineMicroChartPoint[];
          /**
           * Gets current value of property {@link #getRightBottomLabel rightBottomLabel}.
           *
           * Describes the right bottom label of the chart. The label color is set automatically. The space for the
           * label is not reserved if the label is not set.
           */
          getRightBottomLabel(): string;
          /**
           * Gets current value of property {@link #getRightTopLabel rightTopLabel}.
           *
           * Describes the right top label of the chart. The label color is determined by the color property of the
           * last LineMicroChartPoint in the points aggregation. The space for the label is not reserved if the label
           * is not set.
           */
          getRightTopLabel(): string;
          /**
           * Gets current value of property {@link #getShowBottomLabels showBottomLabels}.
           *
           * If this property is set to `false`, both bottom labels are hidden.
           *
           * Default value is `true`.
           */
          getShowBottomLabels(): boolean;
          /**
           * Gets current value of property {@link #getShowPoints showPoints}.
           *
           * Defines if the control renders the points or not.
           * If emphasized points are used, there is no effect.
           * If the value is true, the points in the aggregation are shown.
           *
           *
           * The `showPoints` property of the {@link sap.suite.ui.microchart.LineMicroChartLine} control has priority
           * over this property in case it is set.
           *
           * Default value is `false`.
           */
          getShowPoints(): boolean;
          /**
           * Gets current value of property {@link #getShowThresholdLine showThresholdLine}.
           *
           * If this property is set to `false`, the threshold line is hidden.
           *
           * Default value is `true`.
           */
          getShowThresholdLine(): boolean;
          /**
           * Gets current value of property {@link #getShowThresholdValue showThresholdValue}.
           *
           * If this property is set to `false`, the threshold value is hidden.
           * If this property is set to `true`, the value will be shown only if the `showThresholdLine` property is
           * also set to `true`.
           *
           * Default value is `false`.
           */
          getShowThresholdValue(): boolean;
          /**
           * Gets current value of property {@link #getShowTopLabels showTopLabels}.
           *
           * If this property is set to `false`, both top labels are hidden.
           *
           * Default value is `true`.
           */
          getShowTopLabels(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the chart. If not set, the default size is applied based on the type of the device.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getThreshold threshold}.
           *
           * Determines the chart threshold which is used for vertical normalization. If the threshold does not belong
           * to the value range given by minYValue...maxYValue, the threshold is ignored. By setting the threshold
           * property's value to null, the threshold is disabled and excluded from range calculations.
           *
           * Default value is `0`.
           */
          getThreshold(): number;
          /**
           * Gets current value of property {@link #getThresholdDisplayValue thresholdDisplayValue}.
           *
           * Overrides the threshold value with a string that is shown instead.
           */
          getThresholdDisplayValue(): string;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.LineMicroChartLine` in the aggregation {@link #getLines
           * lines}. and returns its index if found or -1 otherwise.
           */
          indexOfLine(
            /**
             * The line whose index is looked for
             */
            oLine: sap.suite.ui.microchart.LineMicroChartLine
          ): number;
          /**
           * Checks for the provided `sap.suite.ui.microchart.LineMicroChartPoint` in the aggregation {@link #getPoints
           * points}. and returns its index if found or -1 otherwise.
           */
          indexOfPoint(
            /**
             * The point whose index is looked for
             */
            oPoint: sap.suite.ui.microchart.LineMicroChartPoint
          ): number;
          /**
           * Inserts a line into the aggregation {@link #getLines lines}.
           */
          insertLine(
            /**
             * The line to insert; if empty, nothing is inserted
             */
            oLine: sap.suite.ui.microchart.LineMicroChartLine,
            /**
             * The `0`-based index the line should be inserted at; for a negative value of `iIndex`, the line is inserted
             * at position 0; for a value greater than the current size of the aggregation, the line is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Inserts a point into the aggregation {@link #getPoints points}.
           */
          insertPoint(
            /**
             * The point to insert; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.LineMicroChartPoint,
            /**
             * The `0`-based index the point should be inserted at; for a negative value of `iIndex`, the point is inserted
             * at position 0; for a value greater than the current size of the aggregation, the point is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getLines lines}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllLines(): sap.suite.ui.microchart.LineMicroChartLine[];
          /**
           * Removes all the controls from the aggregation {@link #getPoints points}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllPoints(): sap.suite.ui.microchart.LineMicroChartPoint[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a line from the aggregation {@link #getLines lines}.
           */
          removeLine(
            /**
             * The line to remove or its index or id
             */
            vLine: number | string | sap.suite.ui.microchart.LineMicroChartLine
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Removes a point from the aggregation {@link #getPoints points}.
           */
          removePoint(
            /**
             * The point to remove or its index or id
             */
            vPoint:
              | number
              | string
              | sap.suite.ui.microchart.LineMicroChartPoint
          ): sap.suite.ui.microchart.LineMicroChartPoint;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * Describes the color of the chart.
           * In conjunction with emphasized points, it is only used if all points have the sap.m.ValueColor.Neutral
           * color.
           * The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the 'above|' and
           * 'below' properties that determine the color of the graph above and below the threshold, respectively.
           *
           *
           * The `color` property of {@link sap.suite.ui.microchart.LineMicroChartLine} has priority over this property
           * in case it is set.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            oColor?: any
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getLeftBottomLabel leftBottomLabel}.
           *
           * Describes the left bottom label of the chart. The label color is set internally. The space for the label
           * is not reserved if the label is not set.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLeftBottomLabel(
            /**
             * New value for property `leftBottomLabel`
             */
            sLeftBottomLabel?: string
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getLeftTopLabel leftTopLabel}.
           *
           * Describes the left top label of the chart. The label color is determined by the color property of the
           * first LineMicroChartPoint in the points aggregation. The space for the label is not reserved if the label
           * is not set.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLeftTopLabel(
            /**
             * New value for property `leftTopLabel`
             */
            sLeftTopLabel?: string
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getMaxXValue maxXValue}.
           *
           * If this property is set, it indicates the value the X-axis ends with.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMaxXValue(
            /**
             * New value for property `maxXValue`
             */
            fMaxXValue: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getMaxYValue maxYValue}.
           *
           * If this property is set, it indicates the value the Y-axis ends with.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMaxYValue(
            /**
             * New value for property `maxYValue`
             */
            fMaxYValue: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getMinXValue minXValue}.
           *
           * If this property is set, it indicates the value the X-axis starts with.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMinXValue(
            /**
             * New value for property `minXValue`
             */
            fMinXValue: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getMinYValue minYValue}.
           *
           * If this property is set, it indicates the value the Y-axis starts with.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMinYValue(
            /**
             * New value for property `minYValue`
             */
            fMinYValue: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getRightBottomLabel rightBottomLabel}.
           *
           * Describes the right bottom label of the chart. The label color is set automatically. The space for the
           * label is not reserved if the label is not set.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setRightBottomLabel(
            /**
             * New value for property `rightBottomLabel`
             */
            sRightBottomLabel?: string
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getRightTopLabel rightTopLabel}.
           *
           * Describes the right top label of the chart. The label color is determined by the color property of the
           * last LineMicroChartPoint in the points aggregation. The space for the label is not reserved if the label
           * is not set.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setRightTopLabel(
            /**
             * New value for property `rightTopLabel`
             */
            sRightTopLabel?: string
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getShowBottomLabels showBottomLabels}.
           *
           * If this property is set to `false`, both bottom labels are hidden.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowBottomLabels(
            /**
             * New value for property `showBottomLabels`
             */
            bShowBottomLabels?: boolean
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getShowPoints showPoints}.
           *
           * Defines if the control renders the points or not.
           * If emphasized points are used, there is no effect.
           * If the value is true, the points in the aggregation are shown.
           *
           *
           * The `showPoints` property of the {@link sap.suite.ui.microchart.LineMicroChartLine} control has priority
           * over this property in case it is set.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowPoints(
            /**
             * New value for property `showPoints`
             */
            bShowPoints?: boolean
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getShowThresholdLine showThresholdLine}.
           *
           * If this property is set to `false`, the threshold line is hidden.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowThresholdLine(
            /**
             * New value for property `showThresholdLine`
             */
            bShowThresholdLine?: boolean
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getShowThresholdValue showThresholdValue}.
           *
           * If this property is set to `false`, the threshold value is hidden.
           * If this property is set to `true`, the value will be shown only if the `showThresholdLine` property is
           * also set to `true`.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShowThresholdValue(
            /**
             * New value for property `showThresholdValue`
             */
            bShowThresholdValue?: boolean
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getShowTopLabels showTopLabels}.
           *
           * If this property is set to `false`, both top labels are hidden.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowTopLabels(
            /**
             * New value for property `showTopLabels`
             */
            bShowTopLabels?: boolean
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the chart. If not set, the default size is applied based on the type of the device.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getThreshold threshold}.
           *
           * Determines the chart threshold which is used for vertical normalization. If the threshold does not belong
           * to the value range given by minYValue...maxYValue, the threshold is ignored. By setting the threshold
           * property's value to null, the threshold is disabled and excluded from range calculations.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setThreshold(
            /**
             * New value for property `threshold`
             */
            fThreshold?: number
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getThresholdDisplayValue thresholdDisplayValue}.
           *
           * Overrides the threshold value with a string that is shown instead.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setThresholdDisplayValue(
            /**
             * New value for property `thresholdDisplayValue`
             */
            sThresholdDisplayValue: string
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Unbinds aggregation {@link #getLines lines} from model data.
           */
          unbindLines(): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Unbinds aggregation {@link #getPoints points} from model data.
           */
          unbindPoints(): sap.suite.ui.microchart.LineMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.LineMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.LineMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.LineMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.LineMicroChart;
        }
        /**
         * @SINCE 1.48.0
         *
         * Contains the emphasized point of the line micro chart.
         */
        class LineMicroChartEmphasizedPoint extends sap.suite.ui.microchart
          .LineMicroChartPoint {
          /**
           * Constructor for a new LineMicroChartEmphasizedPoint.
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
            mSettings?: $LineMicroChartEmphasizedPointSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChartEmphasizedPoint with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.suite.ui.microchart.LineMicroChartPoint.extend}.
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
           * Determines the color of the emphasized point. The property has an effect only if the 'show' property
           * is true. If at least one emphasized point has a color different from Neutral, the graph is grey; otherwise,
           * the graph is blue.
           *
           * Default value is `"Neutral"`.
           */
          getColor(): sap.m.ValueCSSColor;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getShow show}.
           *
           * Determines whether the chart point should be displayed or not.
           *
           * Default value is `false`.
           */
          getShow(): boolean;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * Determines the color of the emphasized point. The property has an effect only if the 'show' property
           * is true. If at least one emphasized point has a color different from Neutral, the graph is grey; otherwise,
           * the graph is blue.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setColor(
            /**
             * New value for property `color`
             */
            sColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.LineMicroChartEmphasizedPoint;
          /**
           * Sets a new value for property {@link #getShow show}.
           *
           * Determines whether the chart point should be displayed or not.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setShow(
            /**
             * New value for property `show`
             */
            bShow?: boolean
          ): sap.suite.ui.microchart.LineMicroChartEmphasizedPoint;
        }
        /**
         * @SINCE 1.60
         *
         * The container containing all the points of the line.
         */
        class LineMicroChartLine extends sap.ui.core.Element {
          /**
           * Constructor for a new LineMicroChartLine.
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
            mSettings?: $LineMicroChartLineSettings
          );

          /**
           * Adds some point to the aggregation {@link #getPoints points}.
           */
          addPoint(
            /**
             * The point to add; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.LineMicroChartPoint
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Binds aggregation {@link #getPoints points} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindPoints(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Destroys all the points in the aggregation {@link #getPoints points}.
           */
          destroyPoints(): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChartLine with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Defines the color of the chart.
           * In conjunction with emphasized points, this property is only used if all points have the {@link sap.m.ValueColor.Neutral}
           * color. The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the `above`
           * and `below` properties that determine the color of the graph above and below the threshold, respectively.
           *
           *
           * This property has priority over the property `color` of {@link sap.suite.ui.microchart.LineMicroChart}
           * in case it is set.
           * If this property is not defined, the value of the `color` property from the parent {@link sap.suite.ui.microchart.LineMicroChart}
           * is used instead.
           */
          getColor(): any;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChartLine.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets content of aggregation {@link #getPoints points}.
           *
           * Aggregation that contains all data points that should be provided in an ordered way.
           *
           *
           * **Note:** Points can be bound without template/factory method.
           * This approach is more efficient when many points are used, because no new objects will be created for
           * them and only their representation in the model will be kept. See the {@link https://ui5.sap.com/#/sample/sap.suite.ui.microchart.sample.LineMicroChartBinding/preview
           * samples}.
           * To use emphasized points, the `emphasized` property has to be set in the model of the point and can be
           * used together with the properties `show` and `color`, as shown in the sample. When this binding method
           * is used, the #getPoints method will always return an empty array.
           */
          getPoints(): sap.suite.ui.microchart.LineMicroChartPoint[];
          /**
           * Gets current value of property {@link #getShowPoints showPoints}.
           *
           * Defines whether the points are shown.
           * If emphasized points are used, this property is ignored.
           * If this property is set to `true`, the points in the `points` aggregation are shown.
           *
           *
           * This property has priority over the property `showPoints` of {@link sap.suite.ui.microchart.LineMicroChart}
           * in case it is set.
           * If this property is not defined, the `showPoints` property of the {@link sap.suite.ui.microchart.LineMicroChart}
           * is used instead.
           */
          getShowPoints(): boolean;
          /**
           * Gets current value of property {@link #getType type}.
           *
           * Defines the type of the line.
           *
           * Default value is `Solid`.
           */
          getType(): sap.suite.ui.microchart.LineType;
          /**
           * Checks for the provided `sap.suite.ui.microchart.LineMicroChartPoint` in the aggregation {@link #getPoints
           * points}. and returns its index if found or -1 otherwise.
           */
          indexOfPoint(
            /**
             * The point whose index is looked for
             */
            oPoint: sap.suite.ui.microchart.LineMicroChartPoint
          ): number;
          /**
           * Inserts a point into the aggregation {@link #getPoints points}.
           */
          insertPoint(
            /**
             * The point to insert; if empty, nothing is inserted
             */
            oPoint: sap.suite.ui.microchart.LineMicroChartPoint,
            /**
             * The `0`-based index the point should be inserted at; for a negative value of `iIndex`, the point is inserted
             * at position 0; for a value greater than the current size of the aggregation, the point is inserted at
             * the last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Removes all the controls from the aggregation {@link #getPoints points}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllPoints(): sap.suite.ui.microchart.LineMicroChartPoint[];
          /**
           * Removes a point from the aggregation {@link #getPoints points}.
           */
          removePoint(
            /**
             * The point to remove or its index or id
             */
            vPoint:
              | number
              | string
              | sap.suite.ui.microchart.LineMicroChartPoint
          ): sap.suite.ui.microchart.LineMicroChartPoint;
          /**
           * Sets a new value for property {@link #getColor color}.
           *
           * Defines the color of the chart.
           * In conjunction with emphasized points, this property is only used if all points have the {@link sap.m.ValueColor.Neutral}
           * color. The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the `above`
           * and `below` properties that determine the color of the graph above and below the threshold, respectively.
           *
           *
           * This property has priority over the property `color` of {@link sap.suite.ui.microchart.LineMicroChart}
           * in case it is set.
           * If this property is not defined, the value of the `color` property from the parent {@link sap.suite.ui.microchart.LineMicroChart}
           * is used instead.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setColor(
            /**
             * New value for property `color`
             */
            oColor: any
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Sets a new value for property {@link #getShowPoints showPoints}.
           *
           * Defines whether the points are shown.
           * If emphasized points are used, this property is ignored.
           * If this property is set to `true`, the points in the `points` aggregation are shown.
           *
           *
           * This property has priority over the property `showPoints` of {@link sap.suite.ui.microchart.LineMicroChart}
           * in case it is set.
           * If this property is not defined, the `showPoints` property of the {@link sap.suite.ui.microchart.LineMicroChart}
           * is used instead.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setShowPoints(
            /**
             * New value for property `showPoints`
             */
            bShowPoints: boolean
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Sets a new value for property {@link #getType type}.
           *
           * Defines the type of the line.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Solid`.
           */
          setType(
            /**
             * New value for property `type`
             */
            sType?: sap.suite.ui.microchart.LineType
          ): sap.suite.ui.microchart.LineMicroChartLine;
          /**
           * Unbinds aggregation {@link #getPoints points} from model data.
           */
          unbindPoints(): sap.suite.ui.microchart.LineMicroChartLine;
        }
        /**
         * @SINCE 1.48.0
         *
         * Contains the point of the line micro chart.
         */
        class LineMicroChartPoint extends sap.ui.core.Element {
          /**
           * Constructor for a new LineMicroChartPoint.
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
            mSettings?: $LineMicroChartPointSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChartPoint with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChartPoint.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getX x}.
           *
           * The point's horizontal position.
           *
           * Default value is `0`.
           */
          getX(): number;
          /**
           * Gets current value of property {@link #getY y}.
           *
           * The point's vertical position.
           *
           * Default value is `0`.
           */
          getY(): number;
          /**
           * Sets a new value for property {@link #getX x}.
           *
           * The point's horizontal position.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setX(
            /**
             * New value for property `x`
             */
            fX?: number
          ): sap.suite.ui.microchart.LineMicroChartPoint;
          /**
           * Sets a new value for property {@link #getY y}.
           *
           * The point's vertical position.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setY(
            /**
             * New value for property `y`
             */
            fY?: number
          ): sap.suite.ui.microchart.LineMicroChartPoint;
        }
        /**
         * @SINCE 1.36.0
         *
         * Displays a ring chart highlighting a current status. The status is displayed with a semantically colored
         * radial bar and a percentage value.
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string.
         */
        class RadialMicroChart extends sap.ui.core.Control {
          /**
           * Describes the configuration of the graphic element on the chart.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor();

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.RadialMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.RadialMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.RadialMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.RadialMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.RadialMicroChart with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * @SINCE 1.62.0
           *
           * Gets current value of property {@link #getAlignContent alignContent}.
           *
           * The alignment of the content. If it is not set, the `Left` alignment type is used.
           *
           * Default value is `"Left"`.
           */
          getAlignContent(): sap.suite.ui.microchart.HorizontalAlignmentType;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getFraction fraction}.
           *
           * The fraction of the total value that is displayed.
           */
          getFraction(): number;
          /**
           * @SINCE 1.62.0
           *
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.RadialMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getPercentage percentage}.
           *
           * The percentage that is displayed. When a percentage is set, properties total and fraction are not considered.
           */
          getPercentage(): number;
          /**
           * @SINCE 1.44.0
           *
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the chart. If it is not set, the Auto size is used.
           *
           * Default value is `"Auto"`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getTotal total}.
           *
           * The total value. This is taken as 360 degrees value on the chart.
           */
          getTotal(): number;
          /**
           * Gets current value of property {@link #getValueColor valueColor}.
           *
           * The color shown in the completed path.
           *
           * Default value is `"Neutral"`.
           */
          getValueColor(): sap.m.ValueCSSColor;
          /**
           * @SINCE 1.62.0
           *
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * @SINCE 1.62.0
           *
           * Sets a new value for property {@link #getAlignContent alignContent}.
           *
           * The alignment of the content. If it is not set, the `Left` alignment type is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Left"`.
           */
          setAlignContent(
            /**
             * New value for property `alignContent`
             */
            sAlignContent?: sap.suite.ui.microchart.HorizontalAlignmentType
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Sets a new value for property {@link #getFraction fraction}.
           *
           * The fraction of the total value that is displayed.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setFraction(
            /**
             * New value for property `fraction`
             */
            fFraction?: number
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * @SINCE 1.62.0
           *
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Sets a new value for property {@link #getPercentage percentage}.
           *
           * The percentage that is displayed. When a percentage is set, properties total and fraction are not considered.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPercentage(
            /**
             * New value for property `percentage`
             */
            fPercentage?: number
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * @SINCE 1.44.0
           *
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the chart. If it is not set, the Auto size is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Auto"`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Sets a new value for property {@link #getTotal total}.
           *
           * The total value. This is taken as 360 degrees value on the chart.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTotal(
            /**
             * New value for property `total`
             */
            fTotal: number
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Sets a new value for property {@link #getValueColor valueColor}.
           *
           * The color shown in the completed path.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"Neutral"`.
           */
          setValueColor(
            /**
             * New value for property `valueColor`
             */
            sValueColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * @SINCE 1.62.0
           *
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.RadialMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.RadialMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.RadialMicroChart` itself.
           *
           * The event is triggered when the chart is pressed.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.RadialMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.RadialMicroChart;
        }
        /**
         * @SINCE 1.44.0
         *
         * Illustrates values as stacked and colored bar charts displaying numeric values (as absolute values or
         * percentages) inside the bars.
         * Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression
         * binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic
         * described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a
         * custom tooltip, use `((AltText))` inside of the tooltip string. The aggregated data of the microchart
         * can also be customized.
         */
        class StackedBarMicroChart extends sap.ui.core.Control {
          /**
           * Constructor for a new StackedBarMicroChart control.
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
            mSettings?: $StackedBarMicroChartSettings
          );

          /**
           * @SINCE 1.60.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Adds some bar to the aggregation {@link #getBars bars}.
           */
          addBar(
            /**
             * The bar to add; if empty, nothing is inserted
             */
            oBar: sap.suite.ui.microchart.StackedBarMicroChartBar
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.StackedBarMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.StackedBarMicroChart` itself.
           *
           * The event is fired when the user chooses the microchart.
           */
          attachPress(
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
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.StackedBarMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Binds aggregation {@link #getBars bars} to model data.
           *
           * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
           * of the possible properties of `oBindingInfo`.
           */
          bindBars(
            /**
             * The binding information
             */
            oBindingInfo: object
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Destroys all the bars in the aggregation {@link #getBars bars}.
           */
          destroyBars(): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.suite.ui.microchart.StackedBarMicroChart`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPress(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Creates a new subclass of class sap.suite.ui.microchart.StackedBarMicroChart with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
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
           * Fires event {@link #event:press press} to attached listeners.
           */
          firePress(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets content of aggregation {@link #getBars bars}.
           *
           * The stacked bar chart items.
           */
          getBars(): sap.suite.ui.microchart.StackedBarMicroChartBar[];
          /**
           * @SINCE 1.76
           *
           * Gets current value of property {@link #getDisplayZeroValue displayZeroValue}.
           *
           * Defines whether stacked bars with zero value should be rendered. The default is `true` where these zero
           * value stacked bars are rendered with a minimum width of 0.25rem.
           *
           * Default value is `true`.
           */
          getDisplayZeroValue(): boolean;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.84
           *
           * Gets current value of property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * Default value is `false`.
           */
          getHideOnNoData(): boolean;
          /**
           * Gets current value of property {@link #getMaxValue maxValue}.
           *
           * The maximum value can be set to scale StackedBarMicroChartBar values to the same base. If maxValue is
           * smaller than the sum of all StackedMicroChartBar values, the maxValue is ignored. All values are shown
           * as percentage values (same behavior as maxValue is not used). If maxValue is equal or bigger than the
           * sum of all StackedMicroChartBars, all values are scaled to the value of maxValue and the percentage mode
           * is turned off. Absolute values are shown instead. The difference between the sum and maxValue is shown
           * as invisible bar, thus e.g. different StackedBarMicroChart instances can be compared.
           */
          getMaxValue(): number;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.StackedBarMicroChart.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getPrecision precision}.
           *
           * The precision of the rounding for the calculated percentage values of the bars. It defines how many digits
           * after the decimal point are displayed. The default is set to 1 digit.
           *
           * Default value is `1`.
           */
          getPrecision(): number;
          /**
           * Gets current value of property {@link #getShowLabels showLabels}.
           *
           * Defines whether the bar labels should be rendered. If set to `true`, the labels that were specified for
           * each bar become visible.
           *
           * Default value is `true`.
           */
          getShowLabels(): boolean;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * The size of the chart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the stacked bar micro chart is included.
           *
           * Default value is `Auto`.
           */
          getSize(): sap.m.Size;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.suite.ui.microchart.StackedBarMicroChartBar` in the aggregation {@link #getBars
           * bars}. and returns its index if found or -1 otherwise.
           */
          indexOfBar(
            /**
             * The bar whose index is looked for
             */
            oBar: sap.suite.ui.microchart.StackedBarMicroChartBar
          ): number;
          /**
           * Inserts a bar into the aggregation {@link #getBars bars}.
           */
          insertBar(
            /**
             * The bar to insert; if empty, nothing is inserted
             */
            oBar: sap.suite.ui.microchart.StackedBarMicroChartBar,
            /**
             * The `0`-based index the bar should be inserted at; for a negative value of `iIndex`, the bar is inserted
             * at position 0; for a value greater than the current size of the aggregation, the bar is inserted at the
             * last position
             */
            iIndex: number
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * @SINCE 1.60.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getBars bars}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllBars(): sap.suite.ui.microchart.StackedBarMicroChartBar[];
          /**
           * @SINCE 1.60.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a bar from the aggregation {@link #getBars bars}.
           */
          removeBar(
            /**
             * The bar to remove or its index or id
             */
            vBar:
              | number
              | string
              | sap.suite.ui.microchart.StackedBarMicroChartBar
          ): sap.suite.ui.microchart.StackedBarMicroChartBar;
          /**
           * @SINCE 1.76
           *
           * Sets a new value for property {@link #getDisplayZeroValue displayZeroValue}.
           *
           * Defines whether stacked bars with zero value should be rendered. The default is `true` where these zero
           * value stacked bars are rendered with a minimum width of 0.25rem.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setDisplayZeroValue(
            /**
             * New value for property `displayZeroValue`
             */
            bDisplayZeroValue?: boolean
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * The height of the chart. Overrides the height specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * @SINCE 1.84
           *
           * Sets a new value for property {@link #getHideOnNoData hideOnNoData}.
           *
           * If this is set to True, the control will be hidden in 'No data' scenario.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHideOnNoData(
            /**
             * New value for property `hideOnNoData`
             */
            bHideOnNoData?: boolean
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Sets a new value for property {@link #getMaxValue maxValue}.
           *
           * The maximum value can be set to scale StackedBarMicroChartBar values to the same base. If maxValue is
           * smaller than the sum of all StackedMicroChartBar values, the maxValue is ignored. All values are shown
           * as percentage values (same behavior as maxValue is not used). If maxValue is equal or bigger than the
           * sum of all StackedMicroChartBars, all values are scaled to the value of maxValue and the percentage mode
           * is turned off. Absolute values are shown instead. The difference between the sum and maxValue is shown
           * as invisible bar, thus e.g. different StackedBarMicroChart instances can be compared.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setMaxValue(
            /**
             * New value for property `maxValue`
             */
            fMaxValue?: number
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Sets a new value for property {@link #getPrecision precision}.
           *
           * The precision of the rounding for the calculated percentage values of the bars. It defines how many digits
           * after the decimal point are displayed. The default is set to 1 digit.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setPrecision(
            /**
             * New value for property `precision`
             */
            iPrecision?: number
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Sets a new value for property {@link #getShowLabels showLabels}.
           *
           * Defines whether the bar labels should be rendered. If set to `true`, the labels that were specified for
           * each bar become visible.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowLabels(
            /**
             * New value for property `showLabels`
             */
            bShowLabels?: boolean
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * The size of the chart. If not set, the default size is applied based on the size of the device tile.
           * Responsive size takes width and height of the parent container where the stacked bar micro chart is included.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Auto`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize?: sap.m.Size
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * The width of the chart. Overrides the width specified in the `size` property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Unbinds aggregation {@link #getBars bars} from model data.
           */
          unbindBars(): sap.suite.ui.microchart.StackedBarMicroChart;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.suite.ui.microchart.StackedBarMicroChart`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.suite.ui.microchart.StackedBarMicroChart` itself.
           *
           * The event is fired when the user chooses the microchart.
           */
          attachPress(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.suite.ui.microchart.StackedBarMicroChart`
             * itself
             */
            oListener?: object
          ): sap.suite.ui.microchart.StackedBarMicroChart;
        }
        /**
         * @SINCE 1.44.0
         *
         * Contains the values of the stacked bar chart.
         */
        class StackedBarMicroChartBar extends sap.ui.core.Element {
          /**
           * Constructor for a new StackedBarMicroChartBar.
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
            mSettings?: $StackedBarMicroChartBarSettings
          );

          /**
           * Creates a new subclass of class sap.suite.ui.microchart.StackedBarMicroChartBar with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
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
           * Gets current value of property {@link #getDisplayValue displayValue}.
           *
           * If this property is set, then it will be displayed instead of value.
           */
          getDisplayValue(): string;
          /**
           * Returns a metadata object for class sap.suite.ui.microchart.StackedBarMicroChartBar.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.core.ElementMetadata;
          /**
           * Gets current value of property {@link #getValue value}.
           *
           * The value for stacked bar chart. It is used in order to determine the width of the bar
           *
           * Default value is `"0"`.
           */
          getValue(): number;
          /**
           * Gets current value of property {@link #getValueColor valueColor}.
           *
           * The color of the bar.
           */
          getValueColor(): sap.m.ValueCSSColor;
          /**
           * Sets a new value for property {@link #getDisplayValue displayValue}.
           *
           * If this property is set, then it will be displayed instead of value.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDisplayValue(
            /**
             * New value for property `displayValue`
             */
            sDisplayValue?: string
          ): sap.suite.ui.microchart.StackedBarMicroChartBar;
          /**
           * Sets a new value for property {@link #getValue value}.
           *
           * The value for stacked bar chart. It is used in order to determine the width of the bar
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `"0"`.
           */
          setValue(
            /**
             * New value for property `value`
             */
            fValue?: number
          ): sap.suite.ui.microchart.StackedBarMicroChartBar;
          /**
           * Sets a new value for property {@link #getValueColor valueColor}.
           *
           * The color of the bar.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setValueColor(
            /**
             * New value for property `valueColor`
             */
            sValueColor?: sap.m.ValueCSSColor
          ): sap.suite.ui.microchart.StackedBarMicroChartBar;
        }
        /**
         * @SINCE 1.34
         *
         * Enum of available views for the area micro chart concerning the position of the labels.
         */
        enum AreaMicroChartViewType {
          /**
           * The view with labels on the top and bottom.
           */
          Normal,
          /**
           * The view with labels on the left and right.
           */
          Wide
        }
        /**
         * @SINCE 1.34
         *
         * Defines if the horizontal bar represents a current value only or if it represents the delta between a
         * current value and a threshold value.
         */
        enum BulletMicroChartModeType {
          /**
           * Displays the Actual value.
           */
          Actual,
          /**
           * Displays delta between the Actual and Threshold values.
           */
          Delta
        }
        /**
         * @SINCE 1.34
         *
         * Lists the available theme-specific background colors.
         */
        enum CommonBackgroundType {
          /**
           * Dark background color.
           */
          Dark,
          /**
           * The darkest background color.
           */
          Darkest,
          /**
           * Extra dark background color.
           */
          ExtraDark,
          /**
           * Extra light background color.
           */
          ExtraLight,
          /**
           * Light background color.
           */
          Light,
          /**
           * The lightest background color.
           */
          Lightest,
          /**
           * Medium background color.
           */
          Medium,
          /**
           * Medium light background color.
           */
          MediumLight,
          /**
           * The transparent background color.
           */
          Transparent
        }
        /**
         * @SINCE 1.34
         *
         * Lists the views of the comparison micro chart concerning the position of titles and labels.
         */
        enum ComparisonMicroChartViewType {
          /**
           * Titles and values are displayed above the bars.
           */
          Normal,
          /**
           * Behavior changes based on the current width of the chart. `Normal` view is used for charts up to 192px
           * wide, and `Wide` is used for wider charts.
           */
          Responsive,
          /**
           * Titles and values are displayed in the same line with the bars.
           */
          Wide
        }
        /**
         * @SINCE 1.61
         *
         * Lists the views of the delta micro chart concerning the position of titles.
         */
        enum DeltaMicroChartViewType {
          /**
           * Titles are displayed above the bars.
           */
          Normal,
          /**
           * Behavior changes based on the current width of the chart. `Normal` view is used for charts up to 192px
           * wide, and `Wide` is used for wider charts.
           */
          Responsive,
          /**
           * Titles are displayed in the same line with the bars.
           */
          Wide
        }
        /**
         * @SINCE 1.62
         *
         * Alignment type for the microchart content.
         */
        enum HorizontalAlignmentType {
          /**
           * Center alignment.
           */
          Center,
          /**
           * Left alignment.
           */
          Left,
          /**
           * Right alignment.
           */
          Right
        }
        /**
         * @SINCE 1.60
         *
         * Type of the microchart line.
         */
        enum LineType {
          /**
           * Dashed line.
           */
          Dashed,
          /**
           * Dotted line.
           */
          Dotted,
          /**
           * Solid line.
           */
          Solid
        }
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/suite/ui/microchart/AreaMicroChart": undefined;

    "sap/suite/ui/microchart/AreaMicroChartItem": undefined;

    "sap/suite/ui/microchart/AreaMicroChartLabel": undefined;

    "sap/suite/ui/microchart/AreaMicroChartPoint": undefined;

    "sap/suite/ui/microchart/BulletMicroChart": undefined;

    "sap/suite/ui/microchart/BulletMicroChartData": undefined;

    "sap/suite/ui/microchart/ColumnMicroChart": undefined;

    "sap/suite/ui/microchart/ColumnMicroChartData": undefined;

    "sap/suite/ui/microchart/ColumnMicroChartLabel": undefined;

    "sap/suite/ui/microchart/ComparisonMicroChart": undefined;

    "sap/suite/ui/microchart/ComparisonMicroChartData": undefined;

    "sap/suite/ui/microchart/DeltaMicroChart": undefined;

    "sap/suite/ui/microchart/HarveyBallMicroChart": undefined;

    "sap/suite/ui/microchart/HarveyBallMicroChartItem": undefined;

    "sap/suite/ui/microchart/InteractiveBarChart": undefined;

    "sap/suite/ui/microchart/InteractiveBarChartBar": undefined;

    "sap/suite/ui/microchart/InteractiveDonutChart": undefined;

    "sap/suite/ui/microchart/InteractiveDonutChartSegment": undefined;

    "sap/suite/ui/microchart/InteractiveLineChart": undefined;

    "sap/suite/ui/microchart/InteractiveLineChartPoint": undefined;

    "sap/suite/ui/microchart/LineMicroChart": undefined;

    "sap/suite/ui/microchart/LineMicroChartEmphasizedPoint": undefined;

    "sap/suite/ui/microchart/LineMicroChartLine": undefined;

    "sap/suite/ui/microchart/LineMicroChartPoint": undefined;

    "sap/suite/ui/microchart/RadialMicroChart": undefined;

    "sap/suite/ui/microchart/StackedBarMicroChart": undefined;

    "sap/suite/ui/microchart/StackedBarMicroChartBar": undefined;
  }
}
