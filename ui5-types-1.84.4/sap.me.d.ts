// For Library Version: 1.84.3

declare namespace sap {
  /**
   * @deprecated (since 1.34)
   *
   * SAPUI5 library with controls specialized for mobile devices (extension).
   */
  namespace me {
    interface $CalendarSettings extends sap.ui.core.$ControlSettings {
      /**
       * visibility of the control
       */
      visible?: boolean;

      /**
       * hides the area of navigation controls
       */
      hideNavControls?: boolean;

      /**
       * hides the area of month titles
       */
      hideMonthTitles?: boolean;

      /**
       * months to display in a row. This sets the width of the whole control in order to contain the desired
       * number of months per row
       */
      monthsPerRow?: number;

      /**
       * the width of a day
       */
      dayWidth?: number;

      /**
       * the height of a day
       */
      dayHeight?: number;

      /**
       * weeks to display in a row
       */
      weeksPerRow?: number;

      /**
       * boolean that sets the view to week mode or month mode
       */
      singleRow?: boolean;

      /**
       * number of months in a row.
       */
      monthsToDisplay?: number;

      /**
       * the center date where the month/week will be built around
       */
      currentDate?: string;

      /**
       * to enable multiselection feature
       */
      enableMultiselection?: boolean;

      /**
       * to offset the first day of the week (0 = sunday)
       */
      firstDayOffset?: number;

      /**
       * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled
       * for these week days.
       */
      disabledWeekDays?: any;

      /**
       * Array of specific dates (strings or Date objects) that will be disabled/non interactive
       */
      disabledDates?: any;

      /**
       * When enabled, swipe gestures will navigate and not select
       */
      swipeToNavigate?: boolean;

      /**
       * Indicates the design of the calendar (mainly colors)
       */
      design?: sap.me.CalendarDesign;

      /**
       * Indicates the design of the calendar (mainly colors)
       */
      selectionMode?: sap.me.CalendarSelectionMode;

      /**
       * The width of the calendar
       */
      width?: sap.ui.core.CSSSize;

      /**
       * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated") Check sap.ui.core.LocaleData
       * documentation for more info.
       */
      days?: any;

      /**
       * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated") Check sap.ui.core.LocaleData
       * documentation for more info.
       */
      months?: any;

      /**
       * event fired when a date is tapped
       */
      tapOnDate?: Function;

      /**
       * event fired when tap to next or previous button and currentDate is updated
       */
      changeCurrentDate?: Function;

      /**
       * when the range of selected dates changes
       */
      changeRange?: Function;
    }

    interface $CalendarLegendSettings extends sap.ui.core.$ControlSettings {
      /**
       * legend for type 00
       */
      legendForType00?: string;

      /**
       * legend for type 01
       */
      legendForType01?: string;

      /**
       * legend for type 04
       */
      legendForType04?: string;

      /**
       * legend for type 06
       */
      legendForType06?: string;

      /**
       * legend for type 07
       */
      legendForType07?: string;

      /**
       * legend for today
       */
      legendForToday?: string;

      /**
       * legend for selected
       */
      legendForSelected?: string;

      /**
       * legend for selected 00
       */
      legendForSelected00?: string;

      /**
       * legend for normal
       */
      legendForNormal?: string;

      /**
       * Indicates if the legend can be collapsed and expanded
       */
      expandable?: boolean;

      /**
       * Indicates if the legend is expanded or not
       */
      expanded?: boolean;

      /**
       * Indicates the whole component width
       */
      width?: sap.ui.core.CSSSize;

      /**
       * Indicates the legend items width
       */
      legendWidth?: sap.ui.core.CSSSize;

      /**
       * Indicates if the legend is visible
       */
      visible?: boolean;

      /**
       * design name for the legend
       */
      design?: sap.me.CalendarDesign;
    }

    interface $OverlapCalendarSettings extends sap.ui.core.$ControlSettings {
      /**
       * The first date to display for the calendar
       */
      startDate?: string;

      /**
       * Number of weeks
       */
      weeksPerRow?: number;

      /**
       * Indicate how to offset the first day in regards to a Sunday (by default)
       */
      firstDayOffset?: number;

      /**
       * Do we want to display the overlap indicator
       */
      showOverlapIndicator?: boolean;

      /**
       * Indicates if we should render this component
       */
      visible?: boolean;

      /**
       * Use swipe gesture to navigate
       */
      swipeToNavigate?: boolean;

      /**
       * The width of the calendar
       */
      width?: sap.ui.core.CSSSize;

      /**
       * Indicates that we have reach the last week with data
       */
      endOfData?: Function;

      /**
       * Triggered when the displayed dates change
       */
      changeDate?: Function;

      /**
       * The list of events to display in the calendar grid
       */
      calendarEvents?:
        | sap.me.OverlapCalendarEvent[]
        | sap.me.OverlapCalendarEvent;
    }

    interface $OverlapCalendarEventSettings
      extends sap.ui.core.$ElementSettings {
      /**
       * The first day of the event
       */
      startDay?: string;

      /**
       * Last day of the event
       */
      endDay?: string;

      /**
       * Indicates if this elements is relevant to be consider in the overlap
       */
      relevant?: boolean;

      /**
       * Type of the event. Display in the second label (no overlap)
       */
      type?: string;

      /**
       * The CSS class to use
       */
      typeName?: string;

      /**
       * Is this half a day
       */
      halfDay?: boolean;

      /**
       * Id of the row on which to place this event
       */
      row?: number;

      /**
       * Name of the row
       */
      name?: string;
    }

    interface $ProgressIndicatorSettings extends sap.ui.core.$ControlSettings {
      /**
       * Invisible controls are not rendered
       */
      visible?: boolean;

      /**
       * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
       */
      enabled?: boolean;

      /**
       * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE
       * (green), NEUTRAL (blue) (default value).
       */
      barColor?: sap.ui.core.BarColor;

      /**
       * The text value to be displayed in the bar.
       */
      displayValue?: string;

      /**
       * The numerical value for the displayed length of the progress bar.
       */
      percentValue?: number;

      /**
       * Specifies whether the current value shall be rendered inside the bar.
       */
      showValue?: boolean;

      /**
       * The width of the control.
       */
      width?: sap.ui.core.CSSSize;
    }

    interface $TabContainerSettings extends sap.ui.core.$ControlSettings {
      /**
       * Return the index of the selected tab
       */
      selectedTab?: number;

      /**
       * The number to display in the badge for the info tab
       */
      badgeInfo?: number;

      /**
       * The number to display in the badge for the notes tab
       */
      badgeNotes?: number;

      /**
       * The number to display in the badge for the attachments tab
       */
      badgeAttachments?: number;

      /**
       * The number to display in the badge for the people tab
       */
      badgePeople?: number;

      /**
       * Indicates if the tab can be collapsed and expanded
       */
      expandable?: boolean;

      /**
       * Indicates if the actual tab is expanded or not
       */
      expanded?: boolean;

      /**
       * setter for visible property
       */
      visible?: boolean;

      /**
       * Indicates that the selected tab has changed
       */
      select?: Function;

      /**
       * Indicates that the tab will expand
       */
      expand?: Function;

      /**
       * Indicates that the tab will collapse
       */
      collapse?: Function;

      /**
       * The info tab
       */
      contentInfo?: sap.ui.core.Control;

      /**
       * The attachments tab
       */
      contentAttachments?: sap.ui.core.Control;

      /**
       * The notes tab
       */
      contentNotes?: sap.ui.core.Control;

      /**
       * The people tab
       */
      contentPeople?: sap.ui.core.Control;
    }
    /**
     * @deprecated (since 1.26.0) - This control was experimental since 1.12. Please use the sap.ui.unified.Calendar
     * instead!
     *
     * This is the Calendar control
     */
    class Calendar extends sap.ui.core.Control {
      /**
       * Constructor for a new Calendar.
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
        mSettings?: $CalendarSettings
      );

      /**
       * Attaches event handler `fnFunction` to the {@link #event:changeCurrentDate changeCurrentDate} event of
       * this `sap.me.Calendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.Calendar` itself.
       *
       * event fired when tap to next or previous button and currentDate is updated
       */
      attachChangeCurrentDate(
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
         * Context object to call the event handler with. Defaults to this `sap.me.Calendar` itself
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:changeRange changeRange} event of this `sap.me.Calendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.Calendar` itself.
       *
       * when the range of selected dates changes
       */
      attachChangeRange(
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
         * Context object to call the event handler with. Defaults to this `sap.me.Calendar` itself
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:tapOnDate tapOnDate} event of this `sap.me.Calendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.Calendar` itself.
       *
       * event fired when a date is tapped
       */
      attachTapOnDate(
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
         * Context object to call the event handler with. Defaults to this `sap.me.Calendar` itself
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:changeCurrentDate changeCurrentDate} event
       * of this `sap.me.Calendar`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachChangeCurrentDate(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:changeRange changeRange} event of this `sap.me.Calendar`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachChangeRange(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:tapOnDate tapOnDate} event of this `sap.me.Calendar`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachTapOnDate(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Creates a new subclass of class sap.me.Calendar with name `sClassName` and enriches it with the information
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
       * Fires event {@link #event:changeCurrentDate changeCurrentDate} to attached listeners.
       */
      fireChangeCurrentDate(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * new date
           */
          currentDate?: string;
        }
      ): sap.me.Calendar;
      /**
       * Fires event {@link #event:changeRange changeRange} to attached listeners.
       */
      fireChangeRange(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * from date
           */
          fromDate?: string;
          /**
           * to date
           */
          toDate?: string;
        }
      ): sap.me.Calendar;
      /**
       * Fires event {@link #event:tapOnDate tapOnDate} to attached listeners.
       */
      fireTapOnDate(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * date tapped
           */
          date?: string;
          /**
           * if day was selected
           */
          didSelect?: boolean;
        }
      ): sap.me.Calendar;
      /**
       * Gets current value of property {@link #getCurrentDate currentDate}.
       *
       * the center date where the month/week will be built around
       */
      getCurrentDate(): string;
      /**
       * Gets current value of property {@link #getDayHeight dayHeight}.
       *
       * the height of a day
       *
       * Default value is `50`.
       */
      getDayHeight(): number;
      /**
       * Gets current value of property {@link #getDays days}.
       *
       * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated") Check sap.ui.core.LocaleData
       * documentation for more info.
       */
      getDays(): any;
      /**
       * Gets current value of property {@link #getDayWidth dayWidth}.
       *
       * the width of a day
       *
       * Default value is `45`.
       */
      getDayWidth(): number;
      /**
       * Gets current value of property {@link #getDesign design}.
       *
       * Indicates the design of the calendar (mainly colors)
       *
       * Default value is `Approval`.
       */
      getDesign(): sap.me.CalendarDesign;
      /**
       * Gets current value of property {@link #getDisabledDates disabledDates}.
       *
       * Array of specific dates (strings or Date objects) that will be disabled/non interactive
       */
      getDisabledDates(): any;
      /**
       * Gets current value of property {@link #getDisabledWeekDays disabledWeekDays}.
       *
       * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled
       * for these week days.
       */
      getDisabledWeekDays(): any;
      /**
       * Gets current value of property {@link #getEnableMultiselection enableMultiselection}.
       *
       * to enable multiselection feature
       *
       * Default value is `false`.
       */
      getEnableMultiselection(): boolean;
      /**
       * Gets current value of property {@link #getFirstDayOffset firstDayOffset}.
       *
       * to offset the first day of the week (0 = sunday)
       *
       * Default value is `0`.
       */
      getFirstDayOffset(): number;
      /**
       * Gets current value of property {@link #getHideMonthTitles hideMonthTitles}.
       *
       * hides the area of month titles
       *
       * Default value is `false`.
       */
      getHideMonthTitles(): boolean;
      /**
       * Gets current value of property {@link #getHideNavControls hideNavControls}.
       *
       * hides the area of navigation controls
       *
       * Default value is `false`.
       */
      getHideNavControls(): boolean;
      /**
       * Returns a metadata object for class sap.me.Calendar.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getMonths months}.
       *
       * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated") Check sap.ui.core.LocaleData
       * documentation for more info.
       */
      getMonths(): any;
      /**
       * Gets current value of property {@link #getMonthsPerRow monthsPerRow}.
       *
       * months to display in a row. This sets the width of the whole control in order to contain the desired
       * number of months per row
       *
       * Default value is `1`.
       */
      getMonthsPerRow(): number;
      /**
       * Gets current value of property {@link #getMonthsToDisplay monthsToDisplay}.
       *
       * number of months in a row.
       *
       * Default value is `1`.
       */
      getMonthsToDisplay(): number;
      /**
       * returns an array of the currently selected dates (dates are strings formatted as Date.toDateString())
       */
      getSelectedDates(): any;
      /**
       * Gets current value of property {@link #getSelectionMode selectionMode}.
       *
       * Indicates the design of the calendar (mainly colors)
       *
       * Default value is `SINGLE`.
       */
      getSelectionMode(): sap.me.CalendarSelectionMode;
      /**
       * Gets current value of property {@link #getSingleRow singleRow}.
       *
       * boolean that sets the view to week mode or month mode
       */
      getSingleRow(): boolean;
      /**
       * Gets current value of property {@link #getSwipeToNavigate swipeToNavigate}.
       *
       * When enabled, swipe gestures will navigate and not select
       *
       * Default value is `false`.
       */
      getSwipeToNavigate(): boolean;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * visibility of the control
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Gets current value of property {@link #getWeeksPerRow weeksPerRow}.
       *
       * weeks to display in a row
       *
       * Default value is `1`.
       */
      getWeeksPerRow(): number;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * The width of the calendar
       *
       * Default value is `'100%'`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Helper function to instantiate a Date from the string(s) provided by the getCurrentDate, getSelectedDates
       * methods. IMPORTANT: The only valid values for the created Date are: year, month, day. Disregard
       * any other value: hours, minutes, seconds, milliseconds...
       */
      static parseDate(
        /**
         * The date, produced by a former call to Date.toDateString.
         */
        strDate: String
      ): Date;
      /**
       * Sets the current date of the calendar.
       */
      setCurrentDate(
        /**
         * The Date to set, the format being identical to a date string produced by "toDateString".
         */
        strDate: String
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getDayHeight dayHeight}.
       *
       * the height of a day
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `50`.
       */
      setDayHeight(
        /**
         * New value for property `dayHeight`
         */
        iDayHeight?: number
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getDays days}.
       *
       * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated") Check sap.ui.core.LocaleData
       * documentation for more info.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDays(
        /**
         * New value for property `days`
         */
        oDays?: any
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getDayWidth dayWidth}.
       *
       * the width of a day
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `45`.
       */
      setDayWidth(
        /**
         * New value for property `dayWidth`
         */
        iDayWidth?: number
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getDesign design}.
       *
       * Indicates the design of the calendar (mainly colors)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Approval`.
       */
      setDesign(
        /**
         * New value for property `design`
         */
        sDesign?: sap.me.CalendarDesign
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getDisabledDates disabledDates}.
       *
       * Array of specific dates (strings or Date objects) that will be disabled/non interactive
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDisabledDates(
        /**
         * New value for property `disabledDates`
         */
        oDisabledDates?: any
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getDisabledWeekDays disabledWeekDays}.
       *
       * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled
       * for these week days.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDisabledWeekDays(
        /**
         * New value for property `disabledWeekDays`
         */
        oDisabledWeekDays?: any
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getEnableMultiselection enableMultiselection}.
       *
       * to enable multiselection feature
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setEnableMultiselection(
        /**
         * New value for property `enableMultiselection`
         */
        bEnableMultiselection?: boolean
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getFirstDayOffset firstDayOffset}.
       *
       * to offset the first day of the week (0 = sunday)
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
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getHideMonthTitles hideMonthTitles}.
       *
       * hides the area of month titles
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setHideMonthTitles(
        /**
         * New value for property `hideMonthTitles`
         */
        bHideMonthTitles?: boolean
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getHideNavControls hideNavControls}.
       *
       * hides the area of navigation controls
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setHideNavControls(
        /**
         * New value for property `hideNavControls`
         */
        bHideNavControls?: boolean
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getMonths months}.
       *
       * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated") Check sap.ui.core.LocaleData
       * documentation for more info.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setMonths(
        /**
         * New value for property `months`
         */
        oMonths?: any
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getMonthsPerRow monthsPerRow}.
       *
       * months to display in a row. This sets the width of the whole control in order to contain the desired
       * number of months per row
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `1`.
       */
      setMonthsPerRow(
        /**
         * New value for property `monthsPerRow`
         */
        iMonthsPerRow?: number
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getMonthsToDisplay monthsToDisplay}.
       *
       * number of months in a row.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `1`.
       */
      setMonthsToDisplay(
        /**
         * New value for property `monthsToDisplay`
         */
        iMonthsToDisplay?: number
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getSelectionMode selectionMode}.
       *
       * Indicates the design of the calendar (mainly colors)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `SINGLE`.
       */
      setSelectionMode(
        /**
         * New value for property `selectionMode`
         */
        sSelectionMode?: sap.me.CalendarSelectionMode
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getSingleRow singleRow}.
       *
       * boolean that sets the view to week mode or month mode
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSingleRow(
        /**
         * New value for property `singleRow`
         */
        bSingleRow?: boolean
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getSwipeToNavigate swipeToNavigate}.
       *
       * When enabled, swipe gestures will navigate and not select
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setSwipeToNavigate(
        /**
         * New value for property `swipeToNavigate`
         */
        bSwipeToNavigate?: boolean
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * visibility of the control
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
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getWeeksPerRow weeksPerRow}.
       *
       * weeks to display in a row
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `1`.
       */
      setWeeksPerRow(
        /**
         * New value for property `weeksPerRow`
         */
        iWeeksPerRow?: number
      ): sap.me.Calendar;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * The width of the calendar
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
      ): sap.me.Calendar;
      /**
       * it toggles the selection of the dates within the passed range to selected/unselected
       */
      toggleDatesRangeSelection(
        /**
         * starting date of the range. It can be Strings or Date objects.
         */
        oDateStart: any,
        /**
         * ending date of the range. It can be Strings or Date objects.
         */
        oDateEnd: any,
        /**
         * selected/unselected. Optional, if omitted it inverts each date's current state
         */
        bSelected: boolean
      ): void;
      /**
       * it toggles the passed dates to selected/unselected
       */
      toggleDatesSelection(
        /**
         * Array of the dates to be toggled. they can be Strings or Date objects.
         */
        aDates: any,
        /**
         * select/unselect. Optional, if omitted it inverts each date's current state
         */
        bSelected: boolean
      ): void;
      /**
       * Change the type of the given dates
       */
      toggleDatesType(
        /**
         * An array of dates in string representation
         */
        aDates: any,
        /**
         * The type of event
         */
        sType: sap.me.CalendarEventType,
        /**
         * Add/remove the type, if ommited it will toggle
         */
        bSelected: boolean
      ): void;
      /**
       * unselect all the dates
       */
      unselectAllDates(): void;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:changeCurrentDate changeCurrentDate} event of
       * this `sap.me.Calendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.Calendar` itself.
       *
       * event fired when tap to next or previous button and currentDate is updated
       */
      attachChangeCurrentDate(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.Calendar` itself
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:changeRange changeRange} event of this `sap.me.Calendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.Calendar` itself.
       *
       * when the range of selected dates changes
       */
      attachChangeRange(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.Calendar` itself
         */
        oListener?: object
      ): sap.me.Calendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:tapOnDate tapOnDate} event of this `sap.me.Calendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.Calendar` itself.
       *
       * event fired when a date is tapped
       */
      attachTapOnDate(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.Calendar` itself
         */
        oListener?: object
      ): sap.me.Calendar;
    }
    /**
     * @deprecated (since 1.34.0) - This control was experimental since 1.12. Please use the sap.ui.unified.CalendarLegend
     * instead!
     *
     * Legend for the calendar control
     */
    class CalendarLegend extends sap.ui.core.Control {
      /**
       * Constructor for a new CalendarLegend.
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
        mSettings?: $CalendarLegendSettings
      );

      /**
       * Creates a new subclass of class sap.me.CalendarLegend with name `sClassName` and enriches it with the
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
       * Gets current value of property {@link #getDesign design}.
       *
       * design name for the legend
       *
       * Default value is `Approval`.
       */
      getDesign(): sap.me.CalendarDesign;
      /**
       * Gets current value of property {@link #getExpandable expandable}.
       *
       * Indicates if the legend can be collapsed and expanded
       *
       * Default value is `true`.
       */
      getExpandable(): boolean;
      /**
       * Gets current value of property {@link #getExpanded expanded}.
       *
       * Indicates if the legend is expanded or not
       *
       * Default value is `true`.
       */
      getExpanded(): boolean;
      /**
       * Gets current value of property {@link #getLegendForNormal legendForNormal}.
       *
       * legend for normal
       */
      getLegendForNormal(): string;
      /**
       * Gets current value of property {@link #getLegendForSelected legendForSelected}.
       *
       * legend for selected
       */
      getLegendForSelected(): string;
      /**
       * Gets current value of property {@link #getLegendForSelected00 legendForSelected00}.
       *
       * legend for selected 00
       */
      getLegendForSelected00(): string;
      /**
       * Gets current value of property {@link #getLegendForToday legendForToday}.
       *
       * legend for today
       */
      getLegendForToday(): string;
      /**
       * Gets current value of property {@link #getLegendForType00 legendForType00}.
       *
       * legend for type 00
       */
      getLegendForType00(): string;
      /**
       * Gets current value of property {@link #getLegendForType01 legendForType01}.
       *
       * legend for type 01
       */
      getLegendForType01(): string;
      /**
       * Gets current value of property {@link #getLegendForType04 legendForType04}.
       *
       * legend for type 04
       */
      getLegendForType04(): string;
      /**
       * Gets current value of property {@link #getLegendForType06 legendForType06}.
       *
       * legend for type 06
       */
      getLegendForType06(): string;
      /**
       * Gets current value of property {@link #getLegendForType07 legendForType07}.
       *
       * legend for type 07
       */
      getLegendForType07(): string;
      /**
       * Gets current value of property {@link #getLegendWidth legendWidth}.
       *
       * Indicates the legend items width
       *
       * Default value is `'12.5rem'`.
       */
      getLegendWidth(): sap.ui.core.CSSSize;
      /**
       * Returns a metadata object for class sap.me.CalendarLegend.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * Indicates if the legend is visible
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * Indicates the whole component width
       *
       * Default value is `'auto'`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Sets a new value for property {@link #getDesign design}.
       *
       * design name for the legend
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Approval`.
       */
      setDesign(
        /**
         * New value for property `design`
         */
        sDesign?: sap.me.CalendarDesign
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getExpandable expandable}.
       *
       * Indicates if the legend can be collapsed and expanded
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setExpandable(
        /**
         * New value for property `expandable`
         */
        bExpandable?: boolean
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getExpanded expanded}.
       *
       * Indicates if the legend is expanded or not
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setExpanded(
        /**
         * New value for property `expanded`
         */
        bExpanded?: boolean
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForNormal legendForNormal}.
       *
       * legend for normal
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForNormal(
        /**
         * New value for property `legendForNormal`
         */
        sLegendForNormal?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForSelected legendForSelected}.
       *
       * legend for selected
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForSelected(
        /**
         * New value for property `legendForSelected`
         */
        sLegendForSelected?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForSelected00 legendForSelected00}.
       *
       * legend for selected 00
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForSelected00(
        /**
         * New value for property `legendForSelected00`
         */
        sLegendForSelected00?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForToday legendForToday}.
       *
       * legend for today
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForToday(
        /**
         * New value for property `legendForToday`
         */
        sLegendForToday?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForType00 legendForType00}.
       *
       * legend for type 00
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForType00(
        /**
         * New value for property `legendForType00`
         */
        sLegendForType00?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForType01 legendForType01}.
       *
       * legend for type 01
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForType01(
        /**
         * New value for property `legendForType01`
         */
        sLegendForType01?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForType04 legendForType04}.
       *
       * legend for type 04
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForType04(
        /**
         * New value for property `legendForType04`
         */
        sLegendForType04?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForType06 legendForType06}.
       *
       * legend for type 06
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForType06(
        /**
         * New value for property `legendForType06`
         */
        sLegendForType06?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendForType07 legendForType07}.
       *
       * legend for type 07
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLegendForType07(
        /**
         * New value for property `legendForType07`
         */
        sLegendForType07?: string
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getLegendWidth legendWidth}.
       *
       * Indicates the legend items width
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'12.5rem'`.
       */
      setLegendWidth(
        /**
         * New value for property `legendWidth`
         */
        sLegendWidth?: sap.ui.core.CSSSize
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * Indicates if the legend is visible
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
      ): sap.me.CalendarLegend;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * Indicates the whole component width
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'auto'`.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth?: sap.ui.core.CSSSize
      ): sap.me.CalendarLegend;
    }
    /**
     * @deprecated (since 1.34.0) - This control was experimental since 1.12. Please use the sap.m.PlanningCalendar
     * instead!
     *
     * A calendar that allows to display events in a grid and show the overlapped events
     */
    class OverlapCalendar extends sap.ui.core.Control {
      /**
       * Constructor for a new OverlapCalendar.
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
        mSettings?: $OverlapCalendarSettings
      );

      /**
       * Adds some calendarEvent to the aggregation {@link #getCalendarEvents calendarEvents}.
       */
      addCalendarEvent(
        /**
         * The calendarEvent to add; if empty, nothing is inserted
         */
        oCalendarEvent: sap.me.OverlapCalendarEvent
      ): sap.me.OverlapCalendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:changeDate changeDate} event of this `sap.me.OverlapCalendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.OverlapCalendar` itself.
       *
       * Triggered when the displayed dates change
       */
      attachChangeDate(
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
         * Context object to call the event handler with. Defaults to this `sap.me.OverlapCalendar` itself
         */
        oListener?: object
      ): sap.me.OverlapCalendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:endOfData endOfData} event of this `sap.me.OverlapCalendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.OverlapCalendar` itself.
       *
       * Indicates that we have reach the last week with data
       */
      attachEndOfData(
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
         * Context object to call the event handler with. Defaults to this `sap.me.OverlapCalendar` itself
         */
        oListener?: object
      ): sap.me.OverlapCalendar;
      /**
       * Destroys all the calendarEvents in the aggregation {@link #getCalendarEvents calendarEvents}.
       */
      destroyCalendarEvents(): sap.me.OverlapCalendar;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:changeDate changeDate} event of this `sap.me.OverlapCalendar`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachChangeDate(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.OverlapCalendar;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:endOfData endOfData} event of this `sap.me.OverlapCalendar`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachEndOfData(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.OverlapCalendar;
      /**
       * Creates a new subclass of class sap.me.OverlapCalendar with name `sClassName` and enriches it with the
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
       * Fires event {@link #event:changeDate changeDate} to attached listeners.
       */
      fireChangeDate(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The first date displayed in the calendar
           */
          firstDate?: object;
          /**
           * The last date that will be displayed
           */
          lastDate?: object;
        }
      ): sap.me.OverlapCalendar;
      /**
       * Fires event {@link #event:endOfData endOfData} to attached listeners.
       */
      fireEndOfData(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * Indicates if the data missing are before the start date or at the end
           */
          before?: boolean;
        }
      ): sap.me.OverlapCalendar;
      /**/
      getCalendar(): sap.me.Calendar;
      /**
       * Gets content of aggregation {@link #getCalendarEvents calendarEvents}.
       *
       * The list of events to display in the calendar grid
       */
      getCalendarEvents(): sap.me.OverlapCalendarEvent[];
      /**
       * Gets current value of property {@link #getFirstDayOffset firstDayOffset}.
       *
       * Indicate how to offset the first day in regards to a Sunday (by default)
       *
       * Default value is `0`.
       */
      getFirstDayOffset(): number;
      /**
       * Returns a metadata object for class sap.me.OverlapCalendar.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getShowOverlapIndicator showOverlapIndicator}.
       *
       * Do we want to display the overlap indicator
       *
       * Default value is `false`.
       */
      getShowOverlapIndicator(): boolean;
      /**
       * Gets current value of property {@link #getStartDate startDate}.
       *
       * The first date to display for the calendar
       */
      getStartDate(): string;
      /**
       * Gets current value of property {@link #getSwipeToNavigate swipeToNavigate}.
       *
       * Use swipe gesture to navigate
       *
       * Default value is `true`.
       */
      getSwipeToNavigate(): boolean;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * Indicates if we should render this component
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Gets current value of property {@link #getWeeksPerRow weeksPerRow}.
       *
       * Number of weeks
       *
       * Default value is `2`.
       */
      getWeeksPerRow(): number;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * The width of the calendar
       *
       * Default value is `'100%'`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Checks for the provided `sap.me.OverlapCalendarEvent` in the aggregation {@link #getCalendarEvents calendarEvents}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfCalendarEvent(
        /**
         * The calendarEvent whose index is looked for
         */
        oCalendarEvent: sap.me.OverlapCalendarEvent
      ): number;
      /**
       * Inserts a calendarEvent into the aggregation {@link #getCalendarEvents calendarEvents}.
       */
      insertCalendarEvent(
        /**
         * The calendarEvent to insert; if empty, nothing is inserted
         */
        oCalendarEvent: sap.me.OverlapCalendarEvent,
        /**
         * The `0`-based index the calendarEvent should be inserted at; for a negative value of `iIndex`, the calendarEvent
         * is inserted at position 0; for a value greater than the current size of the aggregation, the calendarEvent
         * is inserted at the last position
         */
        iIndex: number
      ): sap.me.OverlapCalendar;
      /**/
      // @ts-ignore
      onAfterRendering(): void;
      /**/
      // @ts-ignore
      onBeforeRendering(): void;
      /**/
      onswipeleft(oEvent: Object): void;
      /**/
      onswiperight(oEvent: Object): void;
      /**
       * Removes all the controls from the aggregation {@link #getCalendarEvents calendarEvents}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllCalendarEvents(): sap.me.OverlapCalendarEvent[];
      /**
       * Removes a calendarEvent from the aggregation {@link #getCalendarEvents calendarEvents}.
       */
      removeCalendarEvent(
        /**
         * The calendarEvent to remove or its index or id
         */
        vCalendarEvent: number | string | sap.me.OverlapCalendarEvent
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getFirstDayOffset firstDayOffset}.
       *
       * Indicate how to offset the first day in regards to a Sunday (by default)
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
      ): sap.me.OverlapCalendar;
      /**
       * Sets a new value for property {@link #getShowOverlapIndicator showOverlapIndicator}.
       *
       * Do we want to display the overlap indicator
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowOverlapIndicator(
        /**
         * New value for property `showOverlapIndicator`
         */
        bShowOverlapIndicator?: boolean
      ): sap.me.OverlapCalendar;
      /**/
      setStartDate(
        /**
         * The start date, expected toDateString.
         */
        sDate: string | Date
      ): void;
      /**/
      setSwipeToNavigate(bSwipe: boolean): void;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * Indicates if we should render this component
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
      ): sap.me.OverlapCalendar;
      /**/
      setWeeksPerRow(
        /**
         * The integer number of weeks per row
         */
        iWeeksPerRow: number
      ): void;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * The width of the calendar
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
      ): sap.me.OverlapCalendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:changeDate changeDate} event of this `sap.me.OverlapCalendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.OverlapCalendar` itself.
       *
       * Triggered when the displayed dates change
       */
      attachChangeDate(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.OverlapCalendar` itself
         */
        oListener?: object
      ): sap.me.OverlapCalendar;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:endOfData endOfData} event of this `sap.me.OverlapCalendar`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.OverlapCalendar` itself.
       *
       * Indicates that we have reach the last week with data
       */
      attachEndOfData(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.OverlapCalendar` itself
         */
        oListener?: object
      ): sap.me.OverlapCalendar;
    }
    /**
     * @deprecated (since 1.34.0) - This control was experimental since 1.12. Please use the sap.ui.unified.CalendarAppointment
     * instead!
     *
     * Represent the data of an event for the overlap calendar
     */
    class OverlapCalendarEvent extends sap.ui.core.Element {
      /**
       * Constructor for a new OverlapCalendarEvent.
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
        mSettings?: $OverlapCalendarEventSettings
      );

      /**
       * Binds property {@link #getEndDay endDay} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindEndDay(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getHalfDay halfDay} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindHalfDay(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getName name} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindName(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getRelevant relevant} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindRelevant(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getRow row} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindRow(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getStartDay startDay} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindStartDay(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getType type} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindType(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Binds property {@link #getTypeName typeName} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindTypeName(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.me.OverlapCalendarEvent;
      /**
       * Creates a new subclass of class sap.me.OverlapCalendarEvent with name `sClassName` and enriches it with
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
       * Gets current value of property {@link #getEndDay endDay}.
       *
       * Last day of the event
       */
      getEndDay(): string;
      /**
       * Gets current value of property {@link #getHalfDay halfDay}.
       *
       * Is this half a day
       *
       * Default value is `false`.
       */
      getHalfDay(): boolean;
      /**
       * Returns a metadata object for class sap.me.OverlapCalendarEvent.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getName name}.
       *
       * Name of the row
       */
      getName(): string;
      /**
       * Gets current value of property {@link #getRelevant relevant}.
       *
       * Indicates if this elements is relevant to be consider in the overlap
       */
      getRelevant(): boolean;
      /**
       * Gets current value of property {@link #getRow row}.
       *
       * Id of the row on which to place this event
       *
       * Default value is `-1`.
       */
      getRow(): number;
      /**
       * Gets current value of property {@link #getStartDay startDay}.
       *
       * The first day of the event
       */
      getStartDay(): string;
      /**
       * Gets current value of property {@link #getType type}.
       *
       * Type of the event. Display in the second label (no overlap)
       */
      getType(): string;
      /**
       * Gets current value of property {@link #getTypeName typeName}.
       *
       * The CSS class to use
       */
      getTypeName(): string;
      /**
       * Sets a new value for property {@link #getEndDay endDay}.
       *
       * Last day of the event
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setEndDay(
        /**
         * New value for property `endDay`
         */
        sEndDay?: string
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getHalfDay halfDay}.
       *
       * Is this half a day
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setHalfDay(
        /**
         * New value for property `halfDay`
         */
        bHalfDay?: boolean
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getName name}.
       *
       * Name of the row
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setName(
        /**
         * New value for property `name`
         */
        sName?: string
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getRelevant relevant}.
       *
       * Indicates if this elements is relevant to be consider in the overlap
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setRelevant(
        /**
         * New value for property `relevant`
         */
        bRelevant?: boolean
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getRow row}.
       *
       * Id of the row on which to place this event
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `-1`.
       */
      setRow(
        /**
         * New value for property `row`
         */
        iRow?: number
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getStartDay startDay}.
       *
       * The first day of the event
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setStartDay(
        /**
         * New value for property `startDay`
         */
        sStartDay?: string
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * Type of the event. Display in the second label (no overlap)
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: string
      ): sap.me.OverlapCalendarEvent;
      /**
       * Sets a new value for property {@link #getTypeName typeName}.
       *
       * The CSS class to use
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setTypeName(
        /**
         * New value for property `typeName`
         */
        sTypeName?: string
      ): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getEndDay endDay} from model data.
       */
      unbindEndDay(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getHalfDay halfDay} from model data.
       */
      unbindHalfDay(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getName name} from model data.
       */
      unbindName(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getRelevant relevant} from model data.
       */
      unbindRelevant(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getRow row} from model data.
       */
      unbindRow(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getStartDay startDay} from model data.
       */
      unbindStartDay(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getType type} from model data.
       */
      unbindType(): sap.me.OverlapCalendarEvent;
      /**
       * Unbinds property {@link #getTypeName typeName} from model data.
       */
      unbindTypeName(): sap.me.OverlapCalendarEvent;
    }
    /**
     * @deprecated (since 1.14) - This control is replaced by sap.m.ProgressIndicator
     *
     * Shows the progress of a process in a graphical way. The indicator can be displayed with or without numerical
     * values. The filling can be displayed in color only, or additionally with the percentage rate. The indicator
     * status can be interactive.
     */
    class ProgressIndicator extends sap.ui.core.Control {
      /**
       * Constructor for a new ProgressIndicator.
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
        mSettings?: $ProgressIndicatorSettings
      );

      /**
       * Creates a new subclass of class sap.me.ProgressIndicator with name `sClassName` and enriches it with
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
       * Gets current value of property {@link #getBarColor barColor}.
       *
       * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE
       * (green), NEUTRAL (blue) (default value).
       *
       * Default value is `NEUTRAL`.
       */
      getBarColor(): sap.ui.core.BarColor;
      /**
       * Gets current value of property {@link #getDisplayValue displayValue}.
       *
       * The text value to be displayed in the bar.
       *
       * Default value is `'0%'`.
       */
      getDisplayValue(): string;
      /**
       * Gets current value of property {@link #getEnabled enabled}.
       *
       * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
       *
       * Default value is `true`.
       */
      getEnabled(): boolean;
      /**
       * Returns a metadata object for class sap.me.ProgressIndicator.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getPercentValue percentValue}.
       *
       * The numerical value for the displayed length of the progress bar.
       *
       * Default value is `0`.
       */
      getPercentValue(): number;
      /**
       * Gets current value of property {@link #getShowValue showValue}.
       *
       * Specifies whether the current value shall be rendered inside the bar.
       *
       * Default value is `true`.
       */
      getShowValue(): boolean;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * Invisible controls are not rendered
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * The width of the control.
       *
       * Default value is `'100%'`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Sets a new value for property {@link #getBarColor barColor}.
       *
       * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE
       * (green), NEUTRAL (blue) (default value).
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `NEUTRAL`.
       */
      setBarColor(
        /**
         * New value for property `barColor`
         */
        sBarColor?: sap.ui.core.BarColor
      ): sap.me.ProgressIndicator;
      /**
       * Sets a new value for property {@link #getDisplayValue displayValue}.
       *
       * The text value to be displayed in the bar.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'0%'`.
       */
      setDisplayValue(
        /**
         * New value for property `displayValue`
         */
        sDisplayValue?: string
      ): sap.me.ProgressIndicator;
      /**
       * Sets a new value for property {@link #getEnabled enabled}.
       *
       * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setEnabled(
        /**
         * New value for property `enabled`
         */
        bEnabled?: boolean
      ): sap.me.ProgressIndicator;
      /**
       * Property setter for the PercentValue A new rendering is not necessary, only the bar has to be moved.
       */
      setPercentValue(iPercentValue: undefined): sap.me.ProgressIndicator;
      /**
       * Sets a new value for property {@link #getShowValue showValue}.
       *
       * Specifies whether the current value shall be rendered inside the bar.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowValue(
        /**
         * New value for property `showValue`
         */
        bShowValue?: boolean
      ): sap.me.ProgressIndicator;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * Invisible controls are not rendered
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
      ): sap.me.ProgressIndicator;
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
      ): sap.me.ProgressIndicator;
    }
    /**
     * @deprecated (since 1.15.0) - The functionality of this control is merged with the sap.m.IconTabBar. Please
     * use the sap.m.IconTabBar instead! This control will not be supported anymore.
     *
     * The TabContainer allow to stack 1 to 4 contents in a view with corresponding icons
     */
    class TabContainer extends sap.ui.core.Control {
      /**
       * Constructor for a new TabContainer.
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
        mSettings?: $TabContainerSettings
      );

      /**
       * Attaches event handler `fnFunction` to the {@link #event:collapse collapse} event of this `sap.me.TabContainer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.TabContainer` itself.
       *
       * Indicates that the tab will collapse
       */
      attachCollapse(
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
         * Context object to call the event handler with. Defaults to this `sap.me.TabContainer` itself
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:expand expand} event of this `sap.me.TabContainer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.TabContainer` itself.
       *
       * Indicates that the tab will expand
       */
      attachExpand(
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
         * Context object to call the event handler with. Defaults to this `sap.me.TabContainer` itself
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.me.TabContainer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.TabContainer` itself.
       *
       * Indicates that the selected tab has changed
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
         * Context object to call the event handler with. Defaults to this `sap.me.TabContainer` itself
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Destroys the contentAttachments in the aggregation {@link #getContentAttachments contentAttachments}.
       */
      destroyContentAttachments(): sap.me.TabContainer;
      /**
       * Destroys the contentInfo in the aggregation {@link #getContentInfo contentInfo}.
       */
      destroyContentInfo(): sap.me.TabContainer;
      /**
       * Destroys the contentNotes in the aggregation {@link #getContentNotes contentNotes}.
       */
      destroyContentNotes(): sap.me.TabContainer;
      /**
       * Destroys the contentPeople in the aggregation {@link #getContentPeople contentPeople}.
       */
      destroyContentPeople(): sap.me.TabContainer;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:collapse collapse} event of this `sap.me.TabContainer`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachCollapse(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:expand expand} event of this `sap.me.TabContainer`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachExpand(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.me.TabContainer`.
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
      ): sap.me.TabContainer;
      /**
       * Creates a new subclass of class sap.me.TabContainer with name `sClassName` and enriches it with the information
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
       * Fires event {@link #event:collapse collapse} to attached listeners.
       */
      fireCollapse(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.me.TabContainer;
      /**
       * Fires event {@link #event:expand expand} to attached listeners.
       */
      fireExpand(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.me.TabContainer;
      /**
       * Fires event {@link #event:select select} to attached listeners.
       *
       * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
       * event object. The return value of this method indicates whether the default action should be executed.
       */
      fireSelect(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): boolean;
      /**
       * Gets current value of property {@link #getBadgeAttachments badgeAttachments}.
       *
       * The number to display in the badge for the attachments tab
       */
      getBadgeAttachments(): number;
      /**
       * Gets current value of property {@link #getBadgeInfo badgeInfo}.
       *
       * The number to display in the badge for the info tab
       */
      getBadgeInfo(): number;
      /**
       * Gets current value of property {@link #getBadgeNotes badgeNotes}.
       *
       * The number to display in the badge for the notes tab
       */
      getBadgeNotes(): number;
      /**
       * Gets current value of property {@link #getBadgePeople badgePeople}.
       *
       * The number to display in the badge for the people tab
       */
      getBadgePeople(): number;
      /**
       * Gets content of aggregation {@link #getContentAttachments contentAttachments}.
       *
       * The attachments tab
       */
      getContentAttachments(): sap.ui.core.Control;
      /**
       * Gets content of aggregation {@link #getContentInfo contentInfo}.
       *
       * The info tab
       */
      getContentInfo(): sap.ui.core.Control;
      /**
       * Gets content of aggregation {@link #getContentNotes contentNotes}.
       *
       * The notes tab
       */
      getContentNotes(): sap.ui.core.Control;
      /**
       * Gets content of aggregation {@link #getContentPeople contentPeople}.
       *
       * The people tab
       */
      getContentPeople(): sap.ui.core.Control;
      /**
       * Gets current value of property {@link #getExpandable expandable}.
       *
       * Indicates if the tab can be collapsed and expanded
       *
       * Default value is `true`.
       */
      getExpandable(): boolean;
      /**
       * Gets current value of property {@link #getExpanded expanded}.
       *
       * Indicates if the actual tab is expanded or not
       *
       * Default value is `true`.
       */
      getExpanded(): boolean;
      /**
       * Returns a metadata object for class sap.me.TabContainer.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getSelectedTab selectedTab}.
       *
       * Return the index of the selected tab
       */
      getSelectedTab(): number;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * setter for visible property
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Sets a new value for property {@link #getBadgeAttachments badgeAttachments}.
       *
       * The number to display in the badge for the attachments tab
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setBadgeAttachments(
        /**
         * New value for property `badgeAttachments`
         */
        iBadgeAttachments?: number
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getBadgeInfo badgeInfo}.
       *
       * The number to display in the badge for the info tab
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setBadgeInfo(
        /**
         * New value for property `badgeInfo`
         */
        iBadgeInfo?: number
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getBadgeNotes badgeNotes}.
       *
       * The number to display in the badge for the notes tab
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setBadgeNotes(
        /**
         * New value for property `badgeNotes`
         */
        iBadgeNotes?: number
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getBadgePeople badgePeople}.
       *
       * The number to display in the badge for the people tab
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setBadgePeople(
        /**
         * New value for property `badgePeople`
         */
        iBadgePeople?: number
      ): sap.me.TabContainer;
      /**
       * Sets the aggregated {@link #getContentAttachments contentAttachments}.
       */
      setContentAttachments(
        /**
         * The contentAttachments to set
         */
        oContentAttachments: sap.ui.core.Control
      ): sap.me.TabContainer;
      /**
       * Sets the aggregated {@link #getContentInfo contentInfo}.
       */
      setContentInfo(
        /**
         * The contentInfo to set
         */
        oContentInfo: sap.ui.core.Control
      ): sap.me.TabContainer;
      /**
       * Sets the aggregated {@link #getContentNotes contentNotes}.
       */
      setContentNotes(
        /**
         * The contentNotes to set
         */
        oContentNotes: sap.ui.core.Control
      ): sap.me.TabContainer;
      /**
       * Sets the aggregated {@link #getContentPeople contentPeople}.
       */
      setContentPeople(
        /**
         * The contentPeople to set
         */
        oContentPeople: sap.ui.core.Control
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getExpandable expandable}.
       *
       * Indicates if the tab can be collapsed and expanded
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setExpandable(
        /**
         * New value for property `expandable`
         */
        bExpandable?: boolean
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getExpanded expanded}.
       *
       * Indicates if the actual tab is expanded or not
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setExpanded(
        /**
         * New value for property `expanded`
         */
        bExpanded?: boolean
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getSelectedTab selectedTab}.
       *
       * Return the index of the selected tab
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSelectedTab(
        /**
         * New value for property `selectedTab`
         */
        iSelectedTab?: number
      ): sap.me.TabContainer;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * setter for visible property
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
      ): sap.me.TabContainer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:collapse collapse} event of this `sap.me.TabContainer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.TabContainer` itself.
       *
       * Indicates that the tab will collapse
       */
      attachCollapse(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.TabContainer` itself
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:expand expand} event of this `sap.me.TabContainer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.TabContainer` itself.
       *
       * Indicates that the tab will expand
       */
      attachExpand(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.TabContainer` itself
         */
        oListener?: object
      ): sap.me.TabContainer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.me.TabContainer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.me.TabContainer` itself.
       *
       * Indicates that the selected tab has changed
       */
      attachSelect(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.me.TabContainer` itself
         */
        oListener?: object
      ): sap.me.TabContainer;
    }
    /**
     * @deprecated (since 1.34)
     * @EXPERIMENTAL (since 1.12)
     *
     * Type of Design for the Calendar
     */
    enum CalendarDesign {
      /**
       * Colors match calendar design for Action
       */
      Action,
      /**
       * Colors match calendar design for Approval
       */
      Approval
    }
    /**
     * @deprecated (since 1.34)
     * @EXPERIMENTAL (since 1.12)
     *
     * Type code for a calendar event
     */
    enum CalendarEventType {
      /**
       * Type 00 (non-working day (e.g. weekend))
       */
      Type00,
      /**
       * Type 01 (nonattendance / submitted day)
       */
      Type01,
      /**
       * Type 04 (open request / manager action needed)
       */
      Type04,
      /**
       * Type 06 (public holiday)
       */
      Type06,
      /**
       * Type 07 (deletion requested / your action needed)
       */
      Type07,
      /**
       * Type 10 (workday)
       */
      Type10
    }
    /**
     * @deprecated (since 1.34)
     * @EXPERIMENTAL (since 1.12)
     *
     * Selection Mode for the Calendar
     */
    enum CalendarSelectionMode {
      /**
       * Can select multiple dates and ranges
       */
      MULTIPLE,
      /**
       * Can select a range of dates
       */
      RANGE,
      /**
       * Can only select one date
       */
      SINGLE
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/me/Calendar": undefined;

    "sap/me/CalendarLegend": undefined;

    "sap/me/OverlapCalendar": undefined;

    "sap/me/OverlapCalendarEvent": undefined;

    "sap/me/ProgressIndicator": undefined;

    "sap/me/TabContainer": undefined;
  }
}
