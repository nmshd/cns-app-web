// For Library Version: 1.84.0

declare namespace sap {
  /**
   * sap.landvisz library for UI developments
   */
  namespace landvisz {
    namespace internal {
      interface $ActionBarSettings extends sap.ui.core.$ControlSettings {
        /**
         * label for action
         */
        actionLabel?: string;

        /**
         * Property that determines the size of the entity rendered
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * source for the icon rendered
         */
        iconSrc?: sap.ui.core.URI;

        /**
         * type of the action
         */
        actionType?: sap.landvisz.ActionType;

        /**
         * data of menu items and sub items
         */
        menuData?: object;

        /**
         * Tooltip for the action
         */
        actionTooltip?: string;

        /**
         * property to enable/disable actions
         */
        enable?: boolean;

        /**
         * new type of view is loaded while performing the action.
         */
        changeView?: boolean;

        /**
         * click on the action bar
         */
        select?: Function;

        /**
         * aggregation for menu items
         */
        menu?: sap.ui.commons.Menu[] | sap.ui.commons.Menu;
      }

      interface $DataContainerSettings extends sap.ui.core.$ControlSettings {
        /**
         * Text of Navigation Header
         */
        header?: string;

        /**
         * selected property of data header
         */
        selected?: boolean;

        /**
         * rendering size of the control
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * type of landscape object
         */
        type?: sap.landvisz.LandscapeObject;

        /**
         * the action to be carried out on selection of a tab
         */
        select?: Function;

        /**
         * test
         */
        properties?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface $DeploymentTypeSettings extends sap.ui.core.$ControlSettings {
        /**
         * icon type of data
         */
        type?: string;
      }

      interface $EntityActionSettings extends sap.ui.core.$ControlSettings {
        /**
         * Tooltip for the internal action
         */
        actionTooltip?: string;

        /**
         * Source of the icon
         */
        iconSrc?: sap.ui.core.URI;

        /**
         * rendering size of the control
         */
        renderingSize?: string;

        /**
         * on click fire press
         */
        press?: Function;
      }

      interface $EntityCustomActionSettings
        extends sap.ui.core.$ControlSettings {
        /**
         * name of the custom action
         */
        customAction?: string;

        /**
         * rendering size of the control
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * click on the action bar
         */
        select?: Function;
      }

      interface $HeaderListSettings extends sap.ui.core.$ControlSettings {
        /**
         * ToolTip for headers
         */
        headerTooltip?: string;

        /**
         * Size of the headers
         */
        entitySize?: string;

        /**
         * to select/deselect a header
         */
        selected?: boolean;

        /**
         * type of system
         */
        type?: sap.landvisz.LandscapeObject;

        /**
         * Event triggered when header is clicked
         */
        press?: Function;
      }

      interface $IdentificationBarSettings
        extends sap.ui.core.$ControlSettings {
        /**
         * text that identifies a system
         */
        text?: string;

        /**
         * type of system rendered
         */
        type?: string;

        /**
         * text that identifies the server
         */
        qualifierText?: string;

        /**
         * tooltip to identify the server
         */
        qualifierTooltip?: string;

        /**
         * icon to identify the server
         */
        qualifierType?: string;

        /**
         * rendering size of the control
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * determines the default state of the control
         */
        defaultState?: string;

        /**
         * despriction of the identification region of a control
         */
        description?: string;

        /**
         * Component type of the entity
         */
        componentType?: sap.landvisz.ComponentType;

        /**
         * fires click event on selection
         */
        select?: Function;
      }

      interface $LinearRowFieldSettings extends sap.ui.core.$ControlSettings {
        /**
         * text to be displayed in the row field
         */
        label?: string;

        /**
         * value to be displayed in the row field
         */
        value?: string;

        /**
         * rendering size of system
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * text of the icon dislayed in the row field
         */
        iconType?: string;

        /**
         * title of the icon displayed in the row field
         */
        iconTitle?: string;

        /**
         * Image source of the icon on right
         */
        rightIconSrc?: string;

        /**
         * source from which two or more systems are dependent
         */
        linkSource?: string;

        /**
         * tool tip for the right icon
         */
        rightIconTooltip?: string;

        /**
         * determines if the product version are valid/invalid
         */
        invalidName?: boolean;
      }

      interface $ModelingStatusSettings extends sap.ui.core.$ControlSettings {
        /**
         * status determines the state of the system namely correct, warning, error
         */
        status?: string;

        /**
         * Tooltip for status that determines the state of the system namely correct, warning, error
         */
        statusTooltip?: string;

        /**
         * icon source for status
         */
        stateIconSrc?: string;

        /**
         * tooltip for the icon
         */
        stateIconTooltip?: any;
      }

      interface $NestedRowFieldSettings extends sap.ui.core.$ControlSettings {
        /**
         * label for data in a row field
         */
        label?: string;

        /**
         * value of the data in a row field
         */
        values?: string[];

        /**
         * rendering size of the control
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * titlte of the icon rendered in the nested row field
         */
        iconTitle?: string;

        /**
         * determines the type of landscape object
         */
        type?: string;

        /**
         * determines the type of value
         */
        valueType?: string;

        /**
         * Image source of the icon on right
         */
        rightIconSrc?: string;

        /**
         * source from which two or more systems are dependent
         */
        linkSource?: string;

        /**
         * Rows aggregation in a label
         */
        linearRows?:
          | sap.landvisz.internal.LinearRowField[]
          | sap.landvisz.internal.LinearRowField;
      }

      interface $SingleDataContainerSettings
        extends sap.ui.core.$ControlSettings {
        /**
         * header of the tab
         */
        header?: string;

        /**
         * rendering size of the system
         */
        renderingSize?: string;

        /**
         * called when Single view model is closed
         */
        closed?: Function;

        /**
         * properties that are aggregated to the data container region of tabs
         */
        properties?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface $TreeFieldSettings extends sap.ui.core.$ControlSettings {
        /**
         * treeModel to be rendered in the control
         */
        treeModel?: object;

        /**
         * binding name
         */
        bindingName?: string;

        /**
         * rendering size of the control
         */
        renderingSize?: sap.landvisz.EntityCSSSize;

        /**
         * aggregation on the tree field to render tree nodes
         */
        treeNode?: sap.ui.commons.TreeNode[] | sap.ui.commons.TreeNode;
      }
      /**
       * A control that render actions of a system
       */
      class ActionBar extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/ActionBar.
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
          mSettings?: $ActionBarSettings
        );

        /**
         * Adds some menu to the aggregation {@link #getMenu menu}.
         */
        addMenu(
          /**
           * The menu to add; if empty, nothing is inserted
           */
          oMenu: sap.ui.commons.Menu
        ): sap.landvisz.internal.ActionBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.ActionBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.ActionBar` itself.
         *
         * click on the action bar
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.ActionBar` itself
           */
          oListener?: object
        ): sap.landvisz.internal.ActionBar;
        /**
         * Destroys all the menu in the aggregation {@link #getMenu menu}.
         */
        destroyMenu(): sap.landvisz.internal.ActionBar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.landvisz.internal.ActionBar`.
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
        ): sap.landvisz.internal.ActionBar;
        /**
         * Creates a new subclass of class sap.landvisz.internal.ActionBar with name `sClassName` and enriches it
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.landvisz.internal.ActionBar;
        /**
         * Gets current value of property {@link #getActionLabel actionLabel}.
         *
         * label for action
         */
        getActionLabel(): string;
        /**
         * Gets current value of property {@link #getActionTooltip actionTooltip}.
         *
         * Tooltip for the action
         */
        getActionTooltip(): string;
        /**
         * Gets current value of property {@link #getActionType actionType}.
         *
         * type of the action
         *
         * Default value is `NORMAL`.
         */
        getActionType(): sap.landvisz.ActionType;
        /**
         * Gets current value of property {@link #getChangeView changeView}.
         *
         * new type of view is loaded while performing the action.
         *
         * Default value is `false`.
         */
        getChangeView(): boolean;
        /**
         * Gets current value of property {@link #getEnable enable}.
         *
         * property to enable/disable actions
         *
         * Default value is `true`.
         */
        getEnable(): boolean;
        /**
         * Gets current value of property {@link #getIconSrc iconSrc}.
         *
         * source for the icon rendered
         */
        getIconSrc(): sap.ui.core.URI;
        /**
         * Gets content of aggregation {@link #getMenu menu}.
         *
         * aggregation for menu items
         */
        getMenu(): sap.ui.commons.Menu[];
        /**
         * Gets current value of property {@link #getMenuData menuData}.
         *
         * data of menu items and sub items
         */
        getMenuData(): object;
        /**
         * Returns a metadata object for class sap.landvisz.internal.ActionBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * Property that determines the size of the entity rendered
         *
         * Default value is `Regular`.
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Checks for the provided `sap.ui.commons.Menu` in the aggregation {@link #getMenu menu}. and returns its
         * index if found or -1 otherwise.
         */
        indexOfMenu(
          /**
           * The menu whose index is looked for
           */
          oMenu: sap.ui.commons.Menu
        ): number;
        /**
         * Inserts a menu into the aggregation {@link #getMenu menu}.
         */
        insertMenu(
          /**
           * The menu to insert; if empty, nothing is inserted
           */
          oMenu: sap.ui.commons.Menu,
          /**
           * The `0`-based index the menu should be inserted at; for a negative value of `iIndex`, the menu is inserted
           * at position 0; for a value greater than the current size of the aggregation, the menu is inserted at
           * the last position
           */
          iIndex: number
        ): sap.landvisz.internal.ActionBar;
        /**
         * Removes all the controls from the aggregation {@link #getMenu menu}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllMenu(): sap.ui.commons.Menu[];
        /**
         * Removes a menu from the aggregation {@link #getMenu menu}.
         */
        removeMenu(
          /**
           * The menu to remove or its index or id
           */
          vMenu: number | string | sap.ui.commons.Menu
        ): sap.ui.commons.Menu;
        /**
         * Sets a new value for property {@link #getActionLabel actionLabel}.
         *
         * label for action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setActionLabel(
          /**
           * New value for property `actionLabel`
           */
          sActionLabel?: string
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getActionTooltip actionTooltip}.
         *
         * Tooltip for the action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setActionTooltip(
          /**
           * New value for property `actionTooltip`
           */
          sActionTooltip?: string
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getActionType actionType}.
         *
         * type of the action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `NORMAL`.
         */
        setActionType(
          /**
           * New value for property `actionType`
           */
          sActionType?: sap.landvisz.ActionType
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getChangeView changeView}.
         *
         * new type of view is loaded while performing the action.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setChangeView(
          /**
           * New value for property `changeView`
           */
          bChangeView?: boolean
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getEnable enable}.
         *
         * property to enable/disable actions
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnable(
          /**
           * New value for property `enable`
           */
          bEnable?: boolean
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getIconSrc iconSrc}.
         *
         * source for the icon rendered
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconSrc(
          /**
           * New value for property `iconSrc`
           */
          sIconSrc?: sap.ui.core.URI
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getMenuData menuData}.
         *
         * data of menu items and sub items
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMenuData(
          /**
           * New value for property `menuData`
           */
          oMenuData?: object
        ): sap.landvisz.internal.ActionBar;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * Property that determines the size of the entity rendered
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Regular`.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.ActionBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.ActionBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.ActionBar` itself.
         *
         * click on the action bar
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.ActionBar` itself
           */
          oListener?: object
        ): sap.landvisz.internal.ActionBar;
      }
      /**
       * A control that renders the data container section in a system
       */
      class DataContainer extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/DataContainer.
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
          mSettings?: $DataContainerSettings
        );

        /**
         * Adds some property to the aggregation {@link #getProperties properties}.
         */
        addProperty(
          /**
           * The property to add; if empty, nothing is inserted
           */
          oProperty: sap.ui.core.Control
        ): sap.landvisz.internal.DataContainer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.DataContainer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.DataContainer` itself.
         *
         * the action to be carried out on selection of a tab
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.DataContainer`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.DataContainer;
        /**
         * Destroys all the properties in the aggregation {@link #getProperties properties}.
         */
        destroyProperties(): sap.landvisz.internal.DataContainer;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.landvisz.internal.DataContainer`.
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
        ): sap.landvisz.internal.DataContainer;
        /**
         * Creates a new subclass of class sap.landvisz.internal.DataContainer with name `sClassName` and enriches
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.landvisz.internal.DataContainer;
        /**
         * Gets current value of property {@link #getHeader header}.
         *
         * Text of Navigation Header
         */
        getHeader(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.DataContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets content of aggregation {@link #getProperties properties}.
         *
         * test
         */
        getProperties(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * Default value is `Regular`.
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Gets current value of property {@link #getSelected selected}.
         *
         * selected property of data header
         *
         * Default value is `true`.
         */
        getSelected(): boolean;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * type of landscape object
         */
        getType(): sap.landvisz.LandscapeObject;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getProperties properties}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfProperty(
          /**
           * The property whose index is looked for
           */
          oProperty: sap.ui.core.Control
        ): number;
        /**
         * Inserts a property into the aggregation {@link #getProperties properties}.
         */
        insertProperty(
          /**
           * The property to insert; if empty, nothing is inserted
           */
          oProperty: sap.ui.core.Control,
          /**
           * The `0`-based index the property should be inserted at; for a negative value of `iIndex`, the property
           * is inserted at position 0; for a value greater than the current size of the aggregation, the property
           * is inserted at the last position
           */
          iIndex: number
        ): sap.landvisz.internal.DataContainer;
        /**
         * Removes all the controls from the aggregation {@link #getProperties properties}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllProperties(): sap.ui.core.Control[];
        /**
         * Removes a property from the aggregation {@link #getProperties properties}.
         */
        removeProperty(
          /**
           * The property to remove or its index or id
           */
          vProperty: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getHeader header}.
         *
         * Text of Navigation Header
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeader(
          /**
           * New value for property `header`
           */
          sHeader?: string
        ): sap.landvisz.internal.DataContainer;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Regular`.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.DataContainer;
        /**
         * Sets a new value for property {@link #getSelected selected}.
         *
         * selected property of data header
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSelected(
          /**
           * New value for property `selected`
           */
          bSelected?: boolean
        ): sap.landvisz.internal.DataContainer;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * type of landscape object
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType?: sap.landvisz.LandscapeObject
        ): sap.landvisz.internal.DataContainer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.DataContainer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.DataContainer` itself.
         *
         * the action to be carried out on selection of a tab
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.DataContainer`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.DataContainer;
      }
      /**
       * A control to render deployment type of a component
       */
      class DeploymentType extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/DeploymentType.
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
          mSettings?: $DeploymentTypeSettings
        );

        /**
         * Creates a new subclass of class sap.landvisz.internal.DeploymentType with name `sClassName` and enriches
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
         * Returns a metadata object for class sap.landvisz.internal.DeploymentType.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * icon type of data
         */
        getType(): string;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * icon type of data
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType?: string
        ): sap.landvisz.internal.DeploymentType;
      }
      /**
       * A control to specify entity actions
       */
      class EntityAction extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/EntityAction.
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
          mSettings?: $EntityActionSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.landvisz.internal.EntityAction`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.EntityAction` itself.
         *
         * on click fire press
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.EntityAction`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.EntityAction;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.landvisz.internal.EntityAction`.
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
        ): sap.landvisz.internal.EntityAction;
        /**
         * Creates a new subclass of class sap.landvisz.internal.EntityAction with name `sClassName` and enriches
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
        ): sap.landvisz.internal.EntityAction;
        /**
         * Gets current value of property {@link #getActionTooltip actionTooltip}.
         *
         * Tooltip for the internal action
         */
        getActionTooltip(): string;
        /**
         * Gets current value of property {@link #getIconSrc iconSrc}.
         *
         * Source of the icon
         */
        getIconSrc(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.landvisz.internal.EntityAction.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         */
        getRenderingSize(): string;
        /**
         * Sets a new value for property {@link #getActionTooltip actionTooltip}.
         *
         * Tooltip for the internal action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setActionTooltip(
          /**
           * New value for property `actionTooltip`
           */
          sActionTooltip?: string
        ): sap.landvisz.internal.EntityAction;
        /**
         * Sets a new value for property {@link #getIconSrc iconSrc}.
         *
         * Source of the icon
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconSrc(
          /**
           * New value for property `iconSrc`
           */
          sIconSrc?: sap.ui.core.URI
        ): sap.landvisz.internal.EntityAction;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: string
        ): sap.landvisz.internal.EntityAction;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.landvisz.internal.EntityAction`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.EntityAction` itself.
         *
         * on click fire press
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.EntityAction`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.EntityAction;
      }
      /**
       * A control to render custom actions of visualization control
       */
      class EntityCustomAction extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/EntityCustomAction.
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
          mSettings?: $EntityCustomActionSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.EntityCustomAction`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.EntityCustomAction` itself.
         *
         * click on the action bar
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.EntityCustomAction`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.EntityCustomAction;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.landvisz.internal.EntityCustomAction`.
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
        ): sap.landvisz.internal.EntityCustomAction;
        /**
         * Creates a new subclass of class sap.landvisz.internal.EntityCustomAction with name `sClassName` and enriches
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.landvisz.internal.EntityCustomAction;
        /**
         * Gets current value of property {@link #getCustomAction customAction}.
         *
         * name of the custom action
         */
        getCustomAction(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.EntityCustomAction.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * Default value is `Regular`.
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Sets a new value for property {@link #getCustomAction customAction}.
         *
         * name of the custom action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setCustomAction(
          /**
           * New value for property `customAction`
           */
          sCustomAction?: string
        ): sap.landvisz.internal.EntityCustomAction;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Regular`.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.EntityCustomAction;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.EntityCustomAction`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.EntityCustomAction` itself.
         *
         * click on the action bar
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.EntityCustomAction`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.EntityCustomAction;
      }
      /**
       * A control to render headers of a control
       */
      class HeaderList extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/HeaderList.
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
          mSettings?: $HeaderListSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.landvisz.internal.HeaderList`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.HeaderList` itself.
         *
         * Event triggered when header is clicked
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.HeaderList` itself
           */
          oListener?: object
        ): sap.landvisz.internal.HeaderList;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.landvisz.internal.HeaderList`.
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
        ): sap.landvisz.internal.HeaderList;
        /**
         * Creates a new subclass of class sap.landvisz.internal.HeaderList with name `sClassName` and enriches
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
        ): sap.landvisz.internal.HeaderList;
        /**
         * Gets current value of property {@link #getEntitySize entitySize}.
         *
         * Size of the headers
         */
        getEntitySize(): string;
        /**
         * Gets current value of property {@link #getHeaderTooltip headerTooltip}.
         *
         * ToolTip for headers
         */
        getHeaderTooltip(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.HeaderList.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getSelected selected}.
         *
         * to select/deselect a header
         *
         * Default value is `false`.
         */
        getSelected(): boolean;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * type of system
         */
        getType(): sap.landvisz.LandscapeObject;
        /**
         * Sets a new value for property {@link #getEntitySize entitySize}.
         *
         * Size of the headers
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setEntitySize(
          /**
           * New value for property `entitySize`
           */
          sEntitySize?: string
        ): sap.landvisz.internal.HeaderList;
        /**
         * Sets a new value for property {@link #getHeaderTooltip headerTooltip}.
         *
         * ToolTip for headers
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeaderTooltip(
          /**
           * New value for property `headerTooltip`
           */
          sHeaderTooltip?: string
        ): sap.landvisz.internal.HeaderList;
        /**
         * Sets a new value for property {@link #getSelected selected}.
         *
         * to select/deselect a header
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
        ): sap.landvisz.internal.HeaderList;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * type of system
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType?: sap.landvisz.LandscapeObject
        ): sap.landvisz.internal.HeaderList;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.landvisz.internal.HeaderList`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.HeaderList` itself.
         *
         * Event triggered when header is clicked
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.HeaderList` itself
           */
          oListener?: object
        ): sap.landvisz.internal.HeaderList;
      }
      /**
       * Acontrol to render identification bar of a system
       */
      class IdentificationBar extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/IdentificationBar.
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
          mSettings?: $IdentificationBarSettings
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.IdentificationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.IdentificationBar` itself.
         *
         * fires click event on selection
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.IdentificationBar`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.landvisz.internal.IdentificationBar`.
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
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Creates a new subclass of class sap.landvisz.internal.IdentificationBar with name `sClassName` and enriches
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Gets current value of property {@link #getComponentType componentType}.
         *
         * Component type of the entity
         */
        getComponentType(): sap.landvisz.ComponentType;
        /**
         * Gets current value of property {@link #getDefaultState defaultState}.
         *
         * determines the default state of the control
         */
        getDefaultState(): string;
        /**
         * Gets current value of property {@link #getDescription description}.
         *
         * despriction of the identification region of a control
         */
        getDescription(): string;
        /**
         * returns identification properties
         */
        getIdentificationProperties(): void;
        /**
         * Returns a metadata object for class sap.landvisz.internal.IdentificationBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getQualifierText qualifierText}.
         *
         * text that identifies the server
         */
        getQualifierText(): string;
        /**
         * Gets current value of property {@link #getQualifierTooltip qualifierTooltip}.
         *
         * tooltip to identify the server
         */
        getQualifierTooltip(): string;
        /**
         * Gets current value of property {@link #getQualifierType qualifierType}.
         *
         * icon to identify the server
         */
        getQualifierType(): string;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * Default value is `Regular`.
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * text that identifies a system
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * type of system rendered
         */
        getType(): string;
        /**
         * Sets a new value for property {@link #getComponentType componentType}.
         *
         * Component type of the entity
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setComponentType(
          /**
           * New value for property `componentType`
           */
          sComponentType?: sap.landvisz.ComponentType
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getDefaultState defaultState}.
         *
         * determines the default state of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDefaultState(
          /**
           * New value for property `defaultState`
           */
          sDefaultState?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getDescription description}.
         *
         * despriction of the identification region of a control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDescription(
          /**
           * New value for property `description`
           */
          sDescription?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getQualifierText qualifierText}.
         *
         * text that identifies the server
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setQualifierText(
          /**
           * New value for property `qualifierText`
           */
          sQualifierText?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getQualifierTooltip qualifierTooltip}.
         *
         * tooltip to identify the server
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setQualifierTooltip(
          /**
           * New value for property `qualifierTooltip`
           */
          sQualifierTooltip?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getQualifierType qualifierType}.
         *
         * icon to identify the server
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setQualifierType(
          /**
           * New value for property `qualifierType`
           */
          sQualifierType?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Regular`.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * text that identifies a system
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * type of system rendered
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType?: string
        ): sap.landvisz.internal.IdentificationBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.landvisz.internal.IdentificationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.IdentificationBar` itself.
         *
         * fires click event on selection
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.IdentificationBar`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.IdentificationBar;
      }
      /**
       * A control to render linear row fields in data container region of a system
       */
      class LinearRowField extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/LinearRowField.
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
          mSettings?: $LinearRowFieldSettings
        );

        /**
         * Creates a new subclass of class sap.landvisz.internal.LinearRowField with name `sClassName` and enriches
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
         * Gets current value of property {@link #getIconTitle iconTitle}.
         *
         * title of the icon displayed in the row field
         */
        getIconTitle(): string;
        /**
         * Gets current value of property {@link #getIconType iconType}.
         *
         * text of the icon dislayed in the row field
         */
        getIconType(): string;
        /**
         * Gets current value of property {@link #getInvalidName invalidName}.
         *
         * determines if the product version are valid/invalid
         */
        getInvalidName(): boolean;
        /**
         * Gets current value of property {@link #getLabel label}.
         *
         * text to be displayed in the row field
         */
        getLabel(): string;
        /**
         * Gets current value of property {@link #getLinkSource linkSource}.
         *
         * source from which two or more systems are dependent
         */
        getLinkSource(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.LinearRowField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of system
         *
         * Default value is `Regular`.
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Gets current value of property {@link #getRightIconSrc rightIconSrc}.
         *
         * Image source of the icon on right
         */
        getRightIconSrc(): string;
        /**
         * Gets current value of property {@link #getRightIconTooltip rightIconTooltip}.
         *
         * tool tip for the right icon
         */
        getRightIconTooltip(): string;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * value to be displayed in the row field
         */
        getValue(): string;
        /**
         * Sets a new value for property {@link #getIconTitle iconTitle}.
         *
         * title of the icon displayed in the row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconTitle(
          /**
           * New value for property `iconTitle`
           */
          sIconTitle?: string
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getIconType iconType}.
         *
         * text of the icon dislayed in the row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconType(
          /**
           * New value for property `iconType`
           */
          sIconType?: string
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getInvalidName invalidName}.
         *
         * determines if the product version are valid/invalid
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setInvalidName(
          /**
           * New value for property `invalidName`
           */
          bInvalidName?: boolean
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getLabel label}.
         *
         * text to be displayed in the row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabel(
          /**
           * New value for property `label`
           */
          sLabel?: string
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getLinkSource linkSource}.
         *
         * source from which two or more systems are dependent
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLinkSource(
          /**
           * New value for property `linkSource`
           */
          sLinkSource?: string
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of system
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Regular`.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getRightIconSrc rightIconSrc}.
         *
         * Image source of the icon on right
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRightIconSrc(
          /**
           * New value for property `rightIconSrc`
           */
          sRightIconSrc?: string
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getRightIconTooltip rightIconTooltip}.
         *
         * tool tip for the right icon
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRightIconTooltip(
          /**
           * New value for property `rightIconTooltip`
           */
          sRightIconTooltip?: string
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * value to be displayed in the row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValue(
          /**
           * New value for property `value`
           */
          sValue?: string
        ): sap.landvisz.internal.LinearRowField;
      }
      /**
       * Modeling Status of entity
       */
      class ModelingStatus extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/ModelingStatus.
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
          mSettings?: $ModelingStatusSettings
        );

        /**
         * Creates a new subclass of class sap.landvisz.internal.ModelingStatus with name `sClassName` and enriches
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
         * Returns a metadata object for class sap.landvisz.internal.ModelingStatus.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getStateIconSrc stateIconSrc}.
         *
         * icon source for status
         */
        getStateIconSrc(): string;
        /**
         * Gets current value of property {@link #getStateIconTooltip stateIconTooltip}.
         *
         * tooltip for the icon
         */
        getStateIconTooltip(): any;
        /**
         * Gets current value of property {@link #getStatus status}.
         *
         * status determines the state of the system namely correct, warning, error
         */
        getStatus(): string;
        /**
         * Gets current value of property {@link #getStatusTooltip statusTooltip}.
         *
         * Tooltip for status that determines the state of the system namely correct, warning, error
         */
        getStatusTooltip(): string;
        /**
         * Sets a new value for property {@link #getStateIconSrc stateIconSrc}.
         *
         * icon source for status
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStateIconSrc(
          /**
           * New value for property `stateIconSrc`
           */
          sStateIconSrc?: string
        ): sap.landvisz.internal.ModelingStatus;
        /**
         * Sets a new value for property {@link #getStateIconTooltip stateIconTooltip}.
         *
         * tooltip for the icon
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStateIconTooltip(
          /**
           * New value for property `stateIconTooltip`
           */
          oStateIconTooltip?: any
        ): sap.landvisz.internal.ModelingStatus;
        /**
         * Sets a new value for property {@link #getStatus status}.
         *
         * status determines the state of the system namely correct, warning, error
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStatus(
          /**
           * New value for property `status`
           */
          sStatus?: string
        ): sap.landvisz.internal.ModelingStatus;
        /**
         * Sets a new value for property {@link #getStatusTooltip statusTooltip}.
         *
         * Tooltip for status that determines the state of the system namely correct, warning, error
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStatusTooltip(
          /**
           * New value for property `statusTooltip`
           */
          sStatusTooltip?: string
        ): sap.landvisz.internal.ModelingStatus;
      }
      /**
       * A control to render nester row fields in a control
       */
      class NestedRowField extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/NestedRowField.
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
          mSettings?: $NestedRowFieldSettings
        );

        /**
         * Adds some linearRow to the aggregation {@link #getLinearRows linearRows}.
         */
        addLinearRow(
          /**
           * The linearRow to add; if empty, nothing is inserted
           */
          oLinearRow: sap.landvisz.internal.LinearRowField
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Destroys all the linearRows in the aggregation {@link #getLinearRows linearRows}.
         */
        destroyLinearRows(): sap.landvisz.internal.NestedRowField;
        /**
         * Creates a new subclass of class sap.landvisz.internal.NestedRowField with name `sClassName` and enriches
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
         * Gets current value of property {@link #getIconTitle iconTitle}.
         *
         * titlte of the icon rendered in the nested row field
         */
        getIconTitle(): string;
        /**
         * Gets current value of property {@link #getLabel label}.
         *
         * label for data in a row field
         */
        getLabel(): string;
        /**
         * Gets content of aggregation {@link #getLinearRows linearRows}.
         *
         * Rows aggregation in a label
         */
        getLinearRows(): sap.landvisz.internal.LinearRowField[];
        /**
         * Gets current value of property {@link #getLinkSource linkSource}.
         *
         * source from which two or more systems are dependent
         */
        getLinkSource(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.NestedRowField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * Default value is `Regular`.
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Gets current value of property {@link #getRightIconSrc rightIconSrc}.
         *
         * Image source of the icon on right
         */
        getRightIconSrc(): string;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * determines the type of landscape object
         */
        getType(): string;
        /**
         * Gets current value of property {@link #getValues values}.
         *
         * value of the data in a row field
         */
        getValues(): string[];
        /**
         * Gets current value of property {@link #getValueType valueType}.
         *
         * determines the type of value
         */
        getValueType(): string;
        /**
         * Checks for the provided `sap.landvisz.internal.LinearRowField` in the aggregation {@link #getLinearRows
         * linearRows}. and returns its index if found or -1 otherwise.
         */
        indexOfLinearRow(
          /**
           * The linearRow whose index is looked for
           */
          oLinearRow: sap.landvisz.internal.LinearRowField
        ): number;
        /**
         * Inserts a linearRow into the aggregation {@link #getLinearRows linearRows}.
         */
        insertLinearRow(
          /**
           * The linearRow to insert; if empty, nothing is inserted
           */
          oLinearRow: sap.landvisz.internal.LinearRowField,
          /**
           * The `0`-based index the linearRow should be inserted at; for a negative value of `iIndex`, the linearRow
           * is inserted at position 0; for a value greater than the current size of the aggregation, the linearRow
           * is inserted at the last position
           */
          iIndex: number
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Removes all the controls from the aggregation {@link #getLinearRows linearRows}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllLinearRows(): sap.landvisz.internal.LinearRowField[];
        /**
         * Removes a linearRow from the aggregation {@link #getLinearRows linearRows}.
         */
        removeLinearRow(
          /**
           * The linearRow to remove or its index or id
           */
          vLinearRow: number | string | sap.landvisz.internal.LinearRowField
        ): sap.landvisz.internal.LinearRowField;
        /**
         * Sets a new value for property {@link #getIconTitle iconTitle}.
         *
         * titlte of the icon rendered in the nested row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconTitle(
          /**
           * New value for property `iconTitle`
           */
          sIconTitle?: string
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getLabel label}.
         *
         * label for data in a row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabel(
          /**
           * New value for property `label`
           */
          sLabel?: string
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getLinkSource linkSource}.
         *
         * source from which two or more systems are dependent
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLinkSource(
          /**
           * New value for property `linkSource`
           */
          sLinkSource?: string
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Regular`.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getRightIconSrc rightIconSrc}.
         *
         * Image source of the icon on right
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRightIconSrc(
          /**
           * New value for property `rightIconSrc`
           */
          sRightIconSrc?: string
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * determines the type of landscape object
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType?: string
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getValues values}.
         *
         * value of the data in a row field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValues(
          /**
           * New value for property `values`
           */
          sValues?: string[]
        ): sap.landvisz.internal.NestedRowField;
        /**
         * Sets a new value for property {@link #getValueType valueType}.
         *
         * determines the type of value
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValueType(
          /**
           * New value for property `valueType`
           */
          sValueType?: string
        ): sap.landvisz.internal.NestedRowField;
      }
      /**
       * A control that shows all the tabs separately for a better view
       */
      class SingleDataContainer extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/SingleDataContainer.
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
          mSettings?: $SingleDataContainerSettings
        );

        /**
         * Adds some property to the aggregation {@link #getProperties properties}.
         */
        addProperty(
          /**
           * The property to add; if empty, nothing is inserted
           */
          oProperty: sap.ui.core.Control
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.landvisz.internal.SingleDataContainer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.SingleDataContainer` itself.
         *
         * called when Single view model is closed
         */
        attachClosed(
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
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.SingleDataContainer`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * Destroys all the properties in the aggregation {@link #getProperties properties}.
         */
        destroyProperties(): sap.landvisz.internal.SingleDataContainer;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.landvisz.internal.SingleDataContainer`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachClosed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * Creates a new subclass of class sap.landvisz.internal.SingleDataContainer with name `sClassName` and
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
         * Fires event {@link #event:closed closed} to attached listeners.
         */
        fireClosed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * Gets current value of property {@link #getHeader header}.
         *
         * header of the tab
         */
        getHeader(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.SingleDataContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets content of aggregation {@link #getProperties properties}.
         *
         * properties that are aggregated to the data container region of tabs
         */
        getProperties(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the system
         */
        getRenderingSize(): string;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getProperties properties}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfProperty(
          /**
           * The property whose index is looked for
           */
          oProperty: sap.ui.core.Control
        ): number;
        /**
         * Inserts a property into the aggregation {@link #getProperties properties}.
         */
        insertProperty(
          /**
           * The property to insert; if empty, nothing is inserted
           */
          oProperty: sap.ui.core.Control,
          /**
           * The `0`-based index the property should be inserted at; for a negative value of `iIndex`, the property
           * is inserted at position 0; for a value greater than the current size of the aggregation, the property
           * is inserted at the last position
           */
          iIndex: number
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * returns true if show all option is open
         */
        isOpen(): void;
        /**
         * Removes all the controls from the aggregation {@link #getProperties properties}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllProperties(): sap.ui.core.Control[];
        /**
         * Removes a property from the aggregation {@link #getProperties properties}.
         */
        removeProperty(
          /**
           * The property to remove or its index or id
           */
          vProperty: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getHeader header}.
         *
         * header of the tab
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeader(
          /**
           * New value for property `header`
           */
          sHeader?: string
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the system
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: string
        ): sap.landvisz.internal.SingleDataContainer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.landvisz.internal.SingleDataContainer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.landvisz.internal.SingleDataContainer` itself.
         *
         * called when Single view model is closed
         */
        attachClosed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.landvisz.internal.SingleDataContainer`
           * itself
           */
          oListener?: object
        ): sap.landvisz.internal.SingleDataContainer;
      }
      /**
       * A control to render tree field in the control
       */
      class TreeField extends sap.ui.core.Control {
        /**
         * Constructor for a new internal/TreeField.
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
          mSettings?: $TreeFieldSettings
        );

        /**
         * Adds some treeNode to the aggregation {@link #getTreeNode treeNode}.
         */
        addTreeNode(
          /**
           * The treeNode to add; if empty, nothing is inserted
           */
          oTreeNode: sap.ui.commons.TreeNode
        ): sap.landvisz.internal.TreeField;
        /**
         * Destroys all the treeNode in the aggregation {@link #getTreeNode treeNode}.
         */
        destroyTreeNode(): sap.landvisz.internal.TreeField;
        /**
         * Creates a new subclass of class sap.landvisz.internal.TreeField with name `sClassName` and enriches it
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
         * Gets current value of property {@link #getBindingName bindingName}.
         *
         * binding name
         */
        getBindingName(): string;
        /**
         * Returns a metadata object for class sap.landvisz.internal.TreeField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Gets current value of property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         */
        getRenderingSize(): sap.landvisz.EntityCSSSize;
        /**
         * Gets current value of property {@link #getTreeModel treeModel}.
         *
         * treeModel to be rendered in the control
         */
        getTreeModel(): object;
        /**
         * Gets content of aggregation {@link #getTreeNode treeNode}.
         *
         * aggregation on the tree field to render tree nodes
         */
        getTreeNode(): sap.ui.commons.TreeNode[];
        /**
         * Checks for the provided `sap.ui.commons.TreeNode` in the aggregation {@link #getTreeNode treeNode}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfTreeNode(
          /**
           * The treeNode whose index is looked for
           */
          oTreeNode: sap.ui.commons.TreeNode
        ): number;
        /**
         * Inserts a treeNode into the aggregation {@link #getTreeNode treeNode}.
         */
        insertTreeNode(
          /**
           * The treeNode to insert; if empty, nothing is inserted
           */
          oTreeNode: sap.ui.commons.TreeNode,
          /**
           * The `0`-based index the treeNode should be inserted at; for a negative value of `iIndex`, the treeNode
           * is inserted at position 0; for a value greater than the current size of the aggregation, the treeNode
           * is inserted at the last position
           */
          iIndex: number
        ): sap.landvisz.internal.TreeField;
        /**
         * Removes all the controls from the aggregation {@link #getTreeNode treeNode}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllTreeNode(): sap.ui.commons.TreeNode[];
        /**
         * Removes a treeNode from the aggregation {@link #getTreeNode treeNode}.
         */
        removeTreeNode(
          /**
           * The treeNode to remove or its index or id
           */
          vTreeNode: number | string | sap.ui.commons.TreeNode
        ): sap.ui.commons.TreeNode;
        /**
         * Sets a new value for property {@link #getBindingName bindingName}.
         *
         * binding name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setBindingName(
          /**
           * New value for property `bindingName`
           */
          sBindingName?: string
        ): sap.landvisz.internal.TreeField;
        /**
         * Sets a new value for property {@link #getRenderingSize renderingSize}.
         *
         * rendering size of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRenderingSize(
          /**
           * New value for property `renderingSize`
           */
          sRenderingSize?: sap.landvisz.EntityCSSSize
        ): sap.landvisz.internal.TreeField;
        /**
         * Sets a new value for property {@link #getTreeModel treeModel}.
         *
         * treeModel to be rendered in the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTreeModel(
          /**
           * New value for property `treeModel`
           */
          oTreeModel?: object
        ): sap.landvisz.internal.TreeField;
      }
      /**
       * ContainerType
       */
      enum ContainerType {
        /**
         * Type Product
         */
        Product,
        /**
         * Product Instances in the system
         */
        ProductInstances,
        /**
         * Type Product version
         */
        ProductVersion,
        /**
         * Software Components in the system
         */
        SoftwareComponents
      }
    }

    interface $ConnectionEntitySettings extends sap.ui.core.$ControlSettings {
      /**
       * id of connection Entity
       */
      connectionId?: string;

      /**
       * size of connection Entity
       */
      size?: string;

      /**
       * type of a connection Entity
       */
      type?: sap.landvisz.ConnectionType;

      /**
       * ID which links the entities
       */
      linkId?: string;

      /**
       * link header data that is shared with in the entities
       */
      linkedHeader?: string;

      /**
       * tooltip for dependency type icon
       */
      dependencyTooltip?: string;

      /**
       * to show the overlay for highlightig
       */
      showOverlay?: boolean;

      /**
       * Linear row field renderer for connection Entity
       */
      connectionData?:
        | sap.landvisz.internal.LinearRowField[]
        | sap.landvisz.internal.LinearRowField;
    }

    interface $ConnectorSettings extends sap.ui.core.$ControlSettings {
      /**
       * source of a connection to be drawn
       */
      source?: string;

      /**
       * destination of the connection
       */
      target?: string;
    }

    interface $LandscapeEntitySettings extends sap.ui.core.$ControlSettings {
      /**
       * name of the system
       */
      systemName?: string;

      /**
       * type of the system rendered
       */
      type?: sap.landvisz.LandscapeObject;

      /**
       * text of qualifier icon
       */
      qualifierText?: string;

      /**
       * tooltip for qualifier icon
       */
      qualifierTooltip?: string;

      /**
       * text of the qualifier that specifies the server
       */
      qualifierType?: string;

      /**
       * rendering size of a system
       */
      renderingSize?: sap.landvisz.EntityCSSSize;

      /**
       * default state of the system
       */
      defaultState?: string;

      /**
       * description of the identification region
       */
      description?: string;

      /**
       * actions of entity
       */
      actions?: object;

      /**
       * Modeling status of the entity
       */
      systemStatus?: sap.landvisz.ModelingStatus;

      /**
       * tooltip for modelling status
       */
      statusTooltip?: string;

      /**
       * Width of the show all view
       */
      explodeViewWidth?: sap.ui.core.CSSSize;

      /**
       * Height of the show all view
       */
      explodeViewHeight?: sap.ui.core.CSSSize;

      /**
       * determines the visiblity of custom actions
       */
      showCustomActions?: boolean;

      /**
       * determines the visiblity of entityactions
       */
      showEntityActions?: boolean;

      /**
       * System entity ID
       */
      systemId?: string;

      /**
       * Icon source of the state of entity
       */
      stateIconSrc?: string;

      /**
       * tooltip of modelling status icon
       */
      stateIconTooltip?: string;

      /**
       * Type of a soution component/deployment type entity
       */
      componentType?: sap.landvisz.ComponentType;

      /**
       * Tooltip for component type
       */
      componentTypeTooltip?: string;

      /**
       * Systems count in the track
       */
      trackSystemCount?: string;

      /**
       * fires an event on hovering over identification system icon
       */
      mouseOverIdenIcon?: Function;

      /**
       * fires an event on clicking the modelling status
       */
      statusSelect?: Function;

      /**
       * Fired when info Icon of track entity clicked
       */
      trackInfoPress?: Function;

      /**
       * aggregations for data container
       */
      dataContainers?:
        | sap.landvisz.internal.DataContainer[]
        | sap.landvisz.internal.DataContainer;

      /**
       * aggregation on action bar control
       */
      actionBar?:
        | sap.landvisz.internal.ActionBar[]
        | sap.landvisz.internal.ActionBar;

      /**
       * Modeling status icon
       */
      entityStatus?: sap.ui.commons.Image;
    }

    interface $LandscapeViewerSettings extends sap.landvisz.$OptionSettings {
      /**
       * View type of landscape view
       */
      defaultDependencyView?: sap.landvisz.DependencyType;

      /**
       * Height of Viewer container
       */
      height?: number;

      /**
       * width of the Viewer container
       */
      width?: number;

      /**
       * Header of the rendered view
       */
      title?: string;

      /**
       * Label of the network view
       */
      networkDependencyLabel?: string;

      /**
       * Label of box view
       */
      boxDependencyLabel?: string;

      /**
       * Levels information in Box dependency view
       */
      boxDependencyLevels?: string[];

      /**
       * Navigator for dependency views
       */
      showDependencyNavigator?: boolean;

      /**
       * Dependency View Visibility
       */
      visibleDependency?: sap.landvisz.DependencyVisibility;

      /**
       * View type of landscape view
       */
      viewType?: sap.landvisz.ViewType;

      /**
       * Text displayed in the dependency view
       */
      navigationPath?: string;

      /**
       * control has to be added in the container or directly in the window.
       */
      hasParent?: boolean;

      /**
       * positions for selection view entity
       */
      selectionViewPosition?: sap.landvisz.SelectionViewPosition;

      /**
       * close button visibility
       */
      showClose?: boolean;

      /**
       * Label for the component view
       */
      componentViewLabel?: string;

      /**
       * Label for deployment view.
       */
      deploymentViewLabel?: string;

      /**
       * determines whether the option is rendered on view or entity
       */
      solutionOptionType?: sap.landvisz.OptionType;

      /**
       * Type of solution rendered
       */
      solutionType?: sap.landvisz.SolutionType;

      /**
       * Deployment type section
       */
      showDeploymentTypeSection?: boolean;

      /**
       * Label for the options
       */
      deploymentOptionsLabel?: string;

      /**
       * tooltip of label for the options
       */
      deploymentOptionsTooltip?: string;

      /**
       * tooltip for component view button
       */
      componentViewTooltip?: string;

      /**
       * tooltip for deployment view button
       */
      deploymentViewTooltip?: string;

      /**
       * tooltip for close button
       */
      closeButtonTooltip?: string;

      /**
       * Specify the height of plugged content
       */
      plugContentHeight?: number;

      /**
       * Type of line to be drawn
       */
      connectionLine?: sap.landvisz.ConnectionLine;

      /**
       * closes the view
       */
      close?: Function;

      /**
       * load the solution view either deployment or component
       */
      loadSolutionView?: Function;

      /**
       * Systems to be rendered in the landscape viewer
       */
      systems?: sap.landvisz.LandscapeEntity[] | sap.landvisz.LandscapeEntity;

      /**
       * Optional: connection Entity between two systems.
       */
      connectionEntities?:
        | sap.landvisz.ConnectionEntity[]
        | sap.landvisz.ConnectionEntity;

      /**
       * connector contains from and to information
       */
      connectors?: sap.landvisz.Connector[] | sap.landvisz.Connector;

      /**
       * Options for the solution
       */
      solutionOptions?: sap.landvisz.Option[] | sap.landvisz.Option;

      /**
       * a control which can be plugged into this control and can be only plugged in top section.
       */
      plugContent?: sap.ui.core.Control;
    }

    interface $LongTextFieldSettings extends sap.ui.core.$ControlSettings {
      /**
       * Long text for a header
       */
      text?: string;

      /**
       * rendering size of the data
       */
      renderingSize?: sap.landvisz.EntityCSSSize;
    }

    interface $OptionSettings extends sap.ui.core.$ControlSettings {
      /**
       * type of main entity which has a replacement
       */
      type?: string;

      /**
       * Entity on which options are applicable
       */
      currentEntity?: string;

      /**
       * Entity to be rendered as options
       */
      optionEntities?: sap.landvisz.OptionEntity[] | sap.landvisz.OptionEntity;
    }

    interface $OptionEntitySettings extends sap.landvisz.$OptionSourceSettings {
      /**
       * label for option entity
       */
      label?: string;

      /**
       * determines current selected option
       */
      selected?: boolean;

      /**
       * enabling/disabling options
       */
      enable?: boolean;

      /**
       * tooltip for options
       */
      optionTextTooltip?: string;

      /**
       * Select event for option entity
       */
      selectOption?: Function;

      /**
       * Option Renderer Control
       */
      optionSources?: sap.landvisz.OptionSource[] | sap.landvisz.OptionSource;
    }

    interface $OptionSourceSettings extends sap.ui.core.$ControlSettings {
      /**
       * source for option entity
       */
      source?: string;
    }
    /**
     * Connection Entity of Dependency view
     */
    class ConnectionEntity extends sap.ui.core.Control {
      /**
       * Constructor for a new ConnectionEntity.
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
        mSettings?: $ConnectionEntitySettings
      );

      /**
       * Adds some connectionData to the aggregation {@link #getConnectionData connectionData}.
       */
      addConnectionData(
        /**
         * The connectionData to add; if empty, nothing is inserted
         */
        oConnectionData: sap.landvisz.internal.LinearRowField
      ): sap.landvisz.ConnectionEntity;
      /**
       * Destroys all the connectionData in the aggregation {@link #getConnectionData connectionData}.
       */
      destroyConnectionData(): sap.landvisz.ConnectionEntity;
      /**
       * Creates a new subclass of class sap.landvisz.ConnectionEntity with name `sClassName` and enriches it
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
       * Gets content of aggregation {@link #getConnectionData connectionData}.
       *
       * Linear row field renderer for connection Entity
       */
      getConnectionData(): sap.landvisz.internal.LinearRowField[];
      /**
       * Gets current value of property {@link #getConnectionId connectionId}.
       *
       * id of connection Entity
       */
      getConnectionId(): string;
      /**
       * Gets current value of property {@link #getDependencyTooltip dependencyTooltip}.
       *
       * tooltip for dependency type icon
       */
      getDependencyTooltip(): string;
      /**
       * Gets current value of property {@link #getLinkedHeader linkedHeader}.
       *
       * link header data that is shared with in the entities
       */
      getLinkedHeader(): string;
      /**
       * Gets current value of property {@link #getLinkId linkId}.
       *
       * ID which links the entities
       */
      getLinkId(): string;
      /**
       * Returns a metadata object for class sap.landvisz.ConnectionEntity.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getShowOverlay showOverlay}.
       *
       * to show the overlay for highlightig
       *
       * Default value is `true`.
       */
      getShowOverlay(): boolean;
      /**
       * Gets current value of property {@link #getSize size}.
       *
       * size of connection Entity
       */
      getSize(): string;
      /**
       * Gets current value of property {@link #getType type}.
       *
       * type of a connection Entity
       */
      getType(): sap.landvisz.ConnectionType;
      /**
       * Checks for the provided `sap.landvisz.internal.LinearRowField` in the aggregation {@link #getConnectionData
       * connectionData}. and returns its index if found or -1 otherwise.
       */
      indexOfConnectionData(
        /**
         * The connectionData whose index is looked for
         */
        oConnectionData: sap.landvisz.internal.LinearRowField
      ): number;
      /**
       * Inserts a connectionData into the aggregation {@link #getConnectionData connectionData}.
       */
      insertConnectionData(
        /**
         * The connectionData to insert; if empty, nothing is inserted
         */
        oConnectionData: sap.landvisz.internal.LinearRowField,
        /**
         * The `0`-based index the connectionData should be inserted at; for a negative value of `iIndex`, the connectionData
         * is inserted at position 0; for a value greater than the current size of the aggregation, the connectionData
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.ConnectionEntity;
      /**
       * Removes all the controls from the aggregation {@link #getConnectionData connectionData}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllConnectionData(): sap.landvisz.internal.LinearRowField[];
      /**
       * Removes a connectionData from the aggregation {@link #getConnectionData connectionData}.
       */
      removeConnectionData(
        /**
         * The connectionData to remove or its index or id
         */
        vConnectionData: number | string | sap.landvisz.internal.LinearRowField
      ): sap.landvisz.internal.LinearRowField;
      /**
       * Sets a new value for property {@link #getConnectionId connectionId}.
       *
       * id of connection Entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setConnectionId(
        /**
         * New value for property `connectionId`
         */
        sConnectionId?: string
      ): sap.landvisz.ConnectionEntity;
      /**
       * Sets a new value for property {@link #getDependencyTooltip dependencyTooltip}.
       *
       * tooltip for dependency type icon
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDependencyTooltip(
        /**
         * New value for property `dependencyTooltip`
         */
        sDependencyTooltip?: string
      ): sap.landvisz.ConnectionEntity;
      /**
       * Sets a new value for property {@link #getLinkedHeader linkedHeader}.
       *
       * link header data that is shared with in the entities
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLinkedHeader(
        /**
         * New value for property `linkedHeader`
         */
        sLinkedHeader?: string
      ): sap.landvisz.ConnectionEntity;
      /**
       * Sets a new value for property {@link #getLinkId linkId}.
       *
       * ID which links the entities
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLinkId(
        /**
         * New value for property `linkId`
         */
        sLinkId?: string
      ): sap.landvisz.ConnectionEntity;
      /**
       * Sets a new value for property {@link #getShowOverlay showOverlay}.
       *
       * to show the overlay for highlightig
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowOverlay(
        /**
         * New value for property `showOverlay`
         */
        bShowOverlay?: boolean
      ): sap.landvisz.ConnectionEntity;
      /**
       * Sets a new value for property {@link #getSize size}.
       *
       * size of connection Entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSize(
        /**
         * New value for property `size`
         */
        sSize?: string
      ): sap.landvisz.ConnectionEntity;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * type of a connection Entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: sap.landvisz.ConnectionType
      ): sap.landvisz.ConnectionEntity;
    }
    /**
     * Connector of the entities
     */
    class Connector extends sap.ui.core.Control {
      /**
       * Constructor for a new Connector.
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
        mSettings?: $ConnectorSettings
      );

      /**
       * Creates a new subclass of class sap.landvisz.Connector with name `sClassName` and enriches it with the
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
       * Returns a metadata object for class sap.landvisz.Connector.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getSource source}.
       *
       * source of a connection to be drawn
       */
      getSource(): string;
      /**
       * Gets current value of property {@link #getTarget target}.
       *
       * destination of the connection
       */
      getTarget(): string;
      /**
       * Sets a new value for property {@link #getSource source}.
       *
       * source of a connection to be drawn
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSource(
        /**
         * New value for property `source`
         */
        sSource?: string
      ): sap.landvisz.Connector;
      /**
       * Sets a new value for property {@link #getTarget target}.
       *
       * destination of the connection
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setTarget(
        /**
         * New value for property `target`
         */
        sTarget?: string
      ): sap.landvisz.Connector;
    }
    /**
     * A control to render the system
     */
    class LandscapeEntity extends sap.ui.core.Control {
      /**
       * Constructor for a new LandscapeEntity.
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
        mSettings?: $LandscapeEntitySettings
      );

      /**
       * Adds some actionBar to the aggregation {@link #getActionBar actionBar}.
       */
      addActionBar(
        /**
         * The actionBar to add; if empty, nothing is inserted
         */
        oActionBar: sap.landvisz.internal.ActionBar
      ): sap.landvisz.LandscapeEntity;
      /**
       * Adds some dataContainer to the aggregation {@link #getDataContainers dataContainers}.
       */
      addDataContainer(
        /**
         * The dataContainer to add; if empty, nothing is inserted
         */
        oDataContainer: sap.landvisz.internal.DataContainer
      ): sap.landvisz.LandscapeEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:mouseOverIdenIcon mouseOverIdenIcon} event of
       * this `sap.landvisz.LandscapeEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeEntity` itself.
       *
       * fires an event on hovering over identification system icon
       */
      attachMouseOverIdenIcon(
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
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeEntity` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:statusSelect statusSelect} event of this `sap.landvisz.LandscapeEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeEntity` itself.
       *
       * fires an event on clicking the modelling status
       */
      attachStatusSelect(
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
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeEntity` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:trackInfoPress trackInfoPress} event of this
       * `sap.landvisz.LandscapeEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeEntity` itself.
       *
       * Fired when info Icon of track entity clicked
       */
      attachTrackInfoPress(
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
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeEntity` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Destroys all the actionBar in the aggregation {@link #getActionBar actionBar}.
       */
      destroyActionBar(): sap.landvisz.LandscapeEntity;
      /**
       * Destroys all the dataContainers in the aggregation {@link #getDataContainers dataContainers}.
       */
      destroyDataContainers(): sap.landvisz.LandscapeEntity;
      /**
       * Destroys the entityStatus in the aggregation {@link #getEntityStatus entityStatus}.
       */
      destroyEntityStatus(): sap.landvisz.LandscapeEntity;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:mouseOverIdenIcon mouseOverIdenIcon} event
       * of this `sap.landvisz.LandscapeEntity`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachMouseOverIdenIcon(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:statusSelect statusSelect} event of this `sap.landvisz.LandscapeEntity`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachStatusSelect(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:trackInfoPress trackInfoPress} event of this
       * `sap.landvisz.LandscapeEntity`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachTrackInfoPress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Creates a new subclass of class sap.landvisz.LandscapeEntity with name `sClassName` and enriches it with
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
       * Fires event {@link #event:mouseOverIdenIcon mouseOverIdenIcon} to attached listeners.
       */
      fireMouseOverIdenIcon(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Fires event {@link #event:statusSelect statusSelect} to attached listeners.
       */
      fireStatusSelect(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Fires event {@link #event:trackInfoPress trackInfoPress} to attached listeners.
       */
      fireTrackInfoPress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Gets content of aggregation {@link #getActionBar actionBar}.
       *
       * aggregation on action bar control
       */
      getActionBar(): sap.landvisz.internal.ActionBar[];
      /**
       * Gets current value of property {@link #getActions actions}.
       *
       * actions of entity
       */
      getActions(): object;
      /**
       * Gets current value of property {@link #getComponentType componentType}.
       *
       * Type of a soution component/deployment type entity
       */
      getComponentType(): sap.landvisz.ComponentType;
      /**
       * Gets current value of property {@link #getComponentTypeTooltip componentTypeTooltip}.
       *
       * Tooltip for component type
       */
      getComponentTypeTooltip(): string;
      /**
       * Gets content of aggregation {@link #getDataContainers dataContainers}.
       *
       * aggregations for data container
       */
      getDataContainers(): sap.landvisz.internal.DataContainer[];
      /**
       * Gets current value of property {@link #getDefaultState defaultState}.
       *
       * default state of the system
       */
      getDefaultState(): string;
      /**
       * Gets current value of property {@link #getDescription description}.
       *
       * description of the identification region
       */
      getDescription(): string;
      /**
       * Gets content of aggregation {@link #getEntityStatus entityStatus}.
       *
       * Modeling status icon
       */
      getEntityStatus(): sap.ui.commons.Image;
      /**
       * Gets current value of property {@link #getExplodeViewHeight explodeViewHeight}.
       *
       * Height of the show all view
       */
      getExplodeViewHeight(): sap.ui.core.CSSSize;
      /**
       * Gets current value of property {@link #getExplodeViewWidth explodeViewWidth}.
       *
       * Width of the show all view
       */
      getExplodeViewWidth(): sap.ui.core.CSSSize;
      /**
       * Returns a metadata object for class sap.landvisz.LandscapeEntity.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getQualifierText qualifierText}.
       *
       * text of qualifier icon
       */
      getQualifierText(): string;
      /**
       * Gets current value of property {@link #getQualifierTooltip qualifierTooltip}.
       *
       * tooltip for qualifier icon
       */
      getQualifierTooltip(): string;
      /**
       * Gets current value of property {@link #getQualifierType qualifierType}.
       *
       * text of the qualifier that specifies the server
       */
      getQualifierType(): string;
      /**
       * Gets current value of property {@link #getRenderingSize renderingSize}.
       *
       * rendering size of a system
       *
       * Default value is `Regular`.
       */
      getRenderingSize(): sap.landvisz.EntityCSSSize;
      /**
       * Gets current value of property {@link #getShowCustomActions showCustomActions}.
       *
       * determines the visiblity of custom actions
       *
       * Default value is `true`.
       */
      getShowCustomActions(): boolean;
      /**
       * Gets current value of property {@link #getShowEntityActions showEntityActions}.
       *
       * determines the visiblity of entityactions
       *
       * Default value is `true`.
       */
      getShowEntityActions(): boolean;
      /**
       * Gets current value of property {@link #getStateIconSrc stateIconSrc}.
       *
       * Icon source of the state of entity
       */
      getStateIconSrc(): string;
      /**
       * Gets current value of property {@link #getStateIconTooltip stateIconTooltip}.
       *
       * tooltip of modelling status icon
       */
      getStateIconTooltip(): string;
      /**
       * Gets current value of property {@link #getStatusTooltip statusTooltip}.
       *
       * tooltip for modelling status
       */
      getStatusTooltip(): string;
      /**
       * Gets current value of property {@link #getSystemId systemId}.
       *
       * System entity ID
       */
      getSystemId(): string;
      /**
       * Gets current value of property {@link #getSystemName systemName}.
       *
       * name of the system
       */
      getSystemName(): string;
      /**
       * Gets current value of property {@link #getSystemStatus systemStatus}.
       *
       * Modeling status of the entity
       *
       * Default value is `NORMAL`.
       */
      getSystemStatus(): sap.landvisz.ModelingStatus;
      /**
       * Gets current value of property {@link #getTrackSystemCount trackSystemCount}.
       *
       * Systems count in the track
       */
      getTrackSystemCount(): string;
      /**
       * Gets current value of property {@link #getType type}.
       *
       * type of the system rendered
       */
      getType(): sap.landvisz.LandscapeObject;
      /**
       * Checks for the provided `sap.landvisz.internal.ActionBar` in the aggregation {@link #getActionBar actionBar}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfActionBar(
        /**
         * The actionBar whose index is looked for
         */
        oActionBar: sap.landvisz.internal.ActionBar
      ): number;
      /**
       * Checks for the provided `sap.landvisz.internal.DataContainer` in the aggregation {@link #getDataContainers
       * dataContainers}. and returns its index if found or -1 otherwise.
       */
      indexOfDataContainer(
        /**
         * The dataContainer whose index is looked for
         */
        oDataContainer: sap.landvisz.internal.DataContainer
      ): number;
      /**
       * Inserts a actionBar into the aggregation {@link #getActionBar actionBar}.
       */
      insertActionBar(
        /**
         * The actionBar to insert; if empty, nothing is inserted
         */
        oActionBar: sap.landvisz.internal.ActionBar,
        /**
         * The `0`-based index the actionBar should be inserted at; for a negative value of `iIndex`, the actionBar
         * is inserted at position 0; for a value greater than the current size of the aggregation, the actionBar
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.LandscapeEntity;
      /**
       * Inserts a dataContainer into the aggregation {@link #getDataContainers dataContainers}.
       */
      insertDataContainer(
        /**
         * The dataContainer to insert; if empty, nothing is inserted
         */
        oDataContainer: sap.landvisz.internal.DataContainer,
        /**
         * The `0`-based index the dataContainer should be inserted at; for a negative value of `iIndex`, the dataContainer
         * is inserted at position 0; for a value greater than the current size of the aggregation, the dataContainer
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.LandscapeEntity;
      /**
       * Removes a actionBar from the aggregation {@link #getActionBar actionBar}.
       */
      removeActionBar(
        /**
         * The actionBar to remove or its index or id
         */
        vActionBar: number | string | sap.landvisz.internal.ActionBar
      ): sap.landvisz.internal.ActionBar;
      /**
       * Removes all the controls from the aggregation {@link #getActionBar actionBar}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllActionBar(): sap.landvisz.internal.ActionBar[];
      /**
       * Removes all the controls from the aggregation {@link #getDataContainers dataContainers}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllDataContainers(): sap.landvisz.internal.DataContainer[];
      /**
       * Removes a dataContainer from the aggregation {@link #getDataContainers dataContainers}.
       */
      removeDataContainer(
        /**
         * The dataContainer to remove or its index or id
         */
        vDataContainer: number | string | sap.landvisz.internal.DataContainer
      ): sap.landvisz.internal.DataContainer;
      /**
       * Sets a new value for property {@link #getActions actions}.
       *
       * actions of entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setActions(
        /**
         * New value for property `actions`
         */
        oActions?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getComponentType componentType}.
       *
       * Type of a soution component/deployment type entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setComponentType(
        /**
         * New value for property `componentType`
         */
        sComponentType?: sap.landvisz.ComponentType
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getComponentTypeTooltip componentTypeTooltip}.
       *
       * Tooltip for component type
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setComponentTypeTooltip(
        /**
         * New value for property `componentTypeTooltip`
         */
        sComponentTypeTooltip?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getDefaultState defaultState}.
       *
       * default state of the system
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDefaultState(
        /**
         * New value for property `defaultState`
         */
        sDefaultState?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getDescription description}.
       *
       * description of the identification region
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDescription(
        /**
         * New value for property `description`
         */
        sDescription?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets the aggregated {@link #getEntityStatus entityStatus}.
       */
      setEntityStatus(
        /**
         * The entityStatus to set
         */
        oEntityStatus: sap.ui.commons.Image
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getExplodeViewHeight explodeViewHeight}.
       *
       * Height of the show all view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setExplodeViewHeight(
        /**
         * New value for property `explodeViewHeight`
         */
        sExplodeViewHeight?: sap.ui.core.CSSSize
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getExplodeViewWidth explodeViewWidth}.
       *
       * Width of the show all view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setExplodeViewWidth(
        /**
         * New value for property `explodeViewWidth`
         */
        sExplodeViewWidth?: sap.ui.core.CSSSize
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getQualifierText qualifierText}.
       *
       * text of qualifier icon
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setQualifierText(
        /**
         * New value for property `qualifierText`
         */
        sQualifierText?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getQualifierTooltip qualifierTooltip}.
       *
       * tooltip for qualifier icon
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setQualifierTooltip(
        /**
         * New value for property `qualifierTooltip`
         */
        sQualifierTooltip?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getQualifierType qualifierType}.
       *
       * text of the qualifier that specifies the server
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setQualifierType(
        /**
         * New value for property `qualifierType`
         */
        sQualifierType?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getRenderingSize renderingSize}.
       *
       * rendering size of a system
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Regular`.
       */
      setRenderingSize(
        /**
         * New value for property `renderingSize`
         */
        sRenderingSize?: sap.landvisz.EntityCSSSize
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getShowCustomActions showCustomActions}.
       *
       * determines the visiblity of custom actions
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowCustomActions(
        /**
         * New value for property `showCustomActions`
         */
        bShowCustomActions?: boolean
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getShowEntityActions showEntityActions}.
       *
       * determines the visiblity of entityactions
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowEntityActions(
        /**
         * New value for property `showEntityActions`
         */
        bShowEntityActions?: boolean
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getStateIconSrc stateIconSrc}.
       *
       * Icon source of the state of entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setStateIconSrc(
        /**
         * New value for property `stateIconSrc`
         */
        sStateIconSrc?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getStateIconTooltip stateIconTooltip}.
       *
       * tooltip of modelling status icon
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setStateIconTooltip(
        /**
         * New value for property `stateIconTooltip`
         */
        sStateIconTooltip?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getStatusTooltip statusTooltip}.
       *
       * tooltip for modelling status
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setStatusTooltip(
        /**
         * New value for property `statusTooltip`
         */
        sStatusTooltip?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getSystemId systemId}.
       *
       * System entity ID
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSystemId(
        /**
         * New value for property `systemId`
         */
        sSystemId?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getSystemName systemName}.
       *
       * name of the system
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSystemName(
        /**
         * New value for property `systemName`
         */
        sSystemName?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getSystemStatus systemStatus}.
       *
       * Modeling status of the entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `NORMAL`.
       */
      setSystemStatus(
        /**
         * New value for property `systemStatus`
         */
        sSystemStatus?: sap.landvisz.ModelingStatus
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getTrackSystemCount trackSystemCount}.
       *
       * Systems count in the track
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setTrackSystemCount(
        /**
         * New value for property `trackSystemCount`
         */
        sTrackSystemCount?: string
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * type of the system rendered
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: sap.landvisz.LandscapeObject
      ): sap.landvisz.LandscapeEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:mouseOverIdenIcon mouseOverIdenIcon} event of
       * this `sap.landvisz.LandscapeEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeEntity` itself.
       *
       * fires an event on hovering over identification system icon
       */
      attachMouseOverIdenIcon(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeEntity` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:statusSelect statusSelect} event of this `sap.landvisz.LandscapeEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeEntity` itself.
       *
       * fires an event on clicking the modelling status
       */
      attachStatusSelect(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeEntity` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:trackInfoPress trackInfoPress} event of this
       * `sap.landvisz.LandscapeEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeEntity` itself.
       *
       * Fired when info Icon of track entity clicked
       */
      attachTrackInfoPress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeEntity` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeEntity;
    }
    /**
     * Visualize the landscape objects in a new user experience
     */
    class LandscapeViewer extends sap.landvisz.Option {
      /**
       * Constructor for a new LandscapeViewer.
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
        mSettings?: $LandscapeViewerSettings
      );

      /**
       * Adds some connectionEntity to the aggregation {@link #getConnectionEntities connectionEntities}.
       */
      addConnectionEntity(
        /**
         * The connectionEntity to add; if empty, nothing is inserted
         */
        oConnectionEntity: sap.landvisz.ConnectionEntity
      ): sap.landvisz.LandscapeViewer;
      /**
       * Adds some connector to the aggregation {@link #getConnectors connectors}.
       */
      addConnector(
        /**
         * The connector to add; if empty, nothing is inserted
         */
        oConnector: sap.landvisz.Connector
      ): sap.landvisz.LandscapeViewer;
      /**
       * Adds some solutionOption to the aggregation {@link #getSolutionOptions solutionOptions}.
       */
      addSolutionOption(
        /**
         * The solutionOption to add; if empty, nothing is inserted
         */
        oSolutionOption: sap.landvisz.Option
      ): sap.landvisz.LandscapeViewer;
      /**
       * Adds some system to the aggregation {@link #getSystems systems}.
       */
      addSystem(
        /**
         * The system to add; if empty, nothing is inserted
         */
        oSystem: sap.landvisz.LandscapeEntity
      ): sap.landvisz.LandscapeViewer;
      /**
       * Append the text in the navigation path
       */
      appendNavigationPath(
        /**
         * text to be appended in the navigation path
         */
        navigationText: string
      ): void;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.landvisz.LandscapeViewer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeViewer` itself.
       *
       * closes the view
       */
      attachClose(
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
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeViewer` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:loadSolutionView loadSolutionView} event of
       * this `sap.landvisz.LandscapeViewer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeViewer` itself.
       *
       * load the solution view either deployment or component
       */
      attachLoadSolutionView(
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
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeViewer` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Destroys all the connectionEntities in the aggregation {@link #getConnectionEntities connectionEntities}.
       */
      destroyConnectionEntities(): sap.landvisz.LandscapeViewer;
      /**
       * Destroys all the connectors in the aggregation {@link #getConnectors connectors}.
       */
      destroyConnectors(): sap.landvisz.LandscapeViewer;
      /**
       * Destroys the plugContent in the aggregation {@link #getPlugContent plugContent}.
       */
      destroyPlugContent(): sap.landvisz.LandscapeViewer;
      /**
       * Destroys all the solutionOptions in the aggregation {@link #getSolutionOptions solutionOptions}.
       */
      destroySolutionOptions(): sap.landvisz.LandscapeViewer;
      /**
       * Destroys all the systems in the aggregation {@link #getSystems systems}.
       */
      destroySystems(): sap.landvisz.LandscapeViewer;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.landvisz.LandscapeViewer`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachClose(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:loadSolutionView loadSolutionView} event of
       * this `sap.landvisz.LandscapeViewer`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachLoadSolutionView(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Creates a new subclass of class sap.landvisz.LandscapeViewer with name `sClassName` and enriches it with
       * the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.landvisz.Option.extend}.
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
       * Fires event {@link #event:close close} to attached listeners.
       */
      fireClose(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Fires event {@link #event:loadSolutionView loadSolutionView} to attached listeners.
       */
      fireLoadSolutionView(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Gets current value of property {@link #getBoxDependencyLabel boxDependencyLabel}.
       *
       * Label of box view
       *
       * Default value is `'Box View'`.
       */
      getBoxDependencyLabel(): string;
      /**
       * Gets current value of property {@link #getBoxDependencyLevels boxDependencyLevels}.
       *
       * Levels information in Box dependency view
       */
      getBoxDependencyLevels(): string[];
      /**
       * Gets current value of property {@link #getCloseButtonTooltip closeButtonTooltip}.
       *
       * tooltip for close button
       */
      getCloseButtonTooltip(): string;
      /**
       * Gets current value of property {@link #getComponentViewLabel componentViewLabel}.
       *
       * Label for the component view
       *
       * Default value is `'Component View'`.
       */
      getComponentViewLabel(): string;
      /**
       * Gets current value of property {@link #getComponentViewTooltip componentViewTooltip}.
       *
       * tooltip for component view button
       */
      getComponentViewTooltip(): string;
      /**
       * Gets content of aggregation {@link #getConnectionEntities connectionEntities}.
       *
       * Optional: connection Entity between two systems.
       */
      getConnectionEntities(): sap.landvisz.ConnectionEntity[];
      /**
       * Gets current value of property {@link #getConnectionLine connectionLine}.
       *
       * Type of line to be drawn
       *
       * Default value is `Line`.
       */
      getConnectionLine(): sap.landvisz.ConnectionLine;
      /**
       * Gets content of aggregation {@link #getConnectors connectors}.
       *
       * connector contains from and to information
       */
      getConnectors(): sap.landvisz.Connector[];
      /**
       * return the current solution loaded.
       */
      getCurrentSolutionView(): string;
      /**
       * Gets current value of property {@link #getDefaultDependencyView defaultDependencyView}.
       *
       * View type of landscape view
       *
       * Default value is `NETWORK_VIEW`.
       */
      getDefaultDependencyView(): sap.landvisz.DependencyType;
      /**
       * Gets current value of property {@link #getDeploymentOptionsLabel deploymentOptionsLabel}.
       *
       * Label for the options
       *
       * Default value is `'Deployment Options :'`.
       */
      getDeploymentOptionsLabel(): string;
      /**
       * Gets current value of property {@link #getDeploymentOptionsTooltip deploymentOptionsTooltip}.
       *
       * tooltip of label for the options
       */
      getDeploymentOptionsTooltip(): string;
      /**
       * Gets current value of property {@link #getDeploymentViewLabel deploymentViewLabel}.
       *
       * Label for deployment view.
       *
       * Default value is `'Deployment View'`.
       */
      getDeploymentViewLabel(): string;
      /**
       * Gets current value of property {@link #getDeploymentViewTooltip deploymentViewTooltip}.
       *
       * tooltip for deployment view button
       */
      getDeploymentViewTooltip(): string;
      /**
       * Gets current value of property {@link #getHasParent hasParent}.
       *
       * control has to be added in the container or directly in the window.
       *
       * Default value is `true`.
       */
      getHasParent(): boolean;
      /**
       * Gets current value of property {@link #getHeight height}.
       *
       * Height of Viewer container
       */
      getHeight(): number;
      /**
       * Returns a metadata object for class sap.landvisz.LandscapeViewer.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getNavigationPath navigationPath}.
       *
       * Text displayed in the dependency view
       */
      getNavigationPath(): string;
      /**
       * Gets current value of property {@link #getNetworkDependencyLabel networkDependencyLabel}.
       *
       * Label of the network view
       *
       * Default value is `'Network View'`.
       */
      getNetworkDependencyLabel(): string;
      /**
       * Gets content of aggregation {@link #getPlugContent plugContent}.
       *
       * a control which can be plugged into this control and can be only plugged in top section.
       */
      getPlugContent(): sap.ui.core.Control;
      /**
       * Gets current value of property {@link #getPlugContentHeight plugContentHeight}.
       *
       * Specify the height of plugged content
       *
       * Default value is `0`.
       */
      getPlugContentHeight(): number;
      /**
       * returns an object of the internal connection entity
       */
      getSelectedOption(): object;
      /**
       * Gets current value of property {@link #getSelectionViewPosition selectionViewPosition}.
       *
       * positions for selection view entity
       *
       * Default value is `CENTER`.
       */
      getSelectionViewPosition(): sap.landvisz.SelectionViewPosition;
      /**
       * Gets current value of property {@link #getShowClose showClose}.
       *
       * close button visibility
       *
       * Default value is `true`.
       */
      getShowClose(): boolean;
      /**
       * Gets current value of property {@link #getShowDependencyNavigator showDependencyNavigator}.
       *
       * Navigator for dependency views
       *
       * Default value is `true`.
       */
      getShowDependencyNavigator(): boolean;
      /**
       * Gets current value of property {@link #getShowDeploymentTypeSection showDeploymentTypeSection}.
       *
       * Deployment type section
       *
       * Default value is `false`.
       */
      getShowDeploymentTypeSection(): boolean;
      /**
       * Gets content of aggregation {@link #getSolutionOptions solutionOptions}.
       *
       * Options for the solution
       */
      getSolutionOptions(): sap.landvisz.Option[];
      /**
       * Gets current value of property {@link #getSolutionOptionType solutionOptionType}.
       *
       * determines whether the option is rendered on view or entity
       */
      getSolutionOptionType(): sap.landvisz.OptionType;
      /**
       * Gets current value of property {@link #getSolutionType solutionType}.
       *
       * Type of solution rendered
       */
      getSolutionType(): sap.landvisz.SolutionType;
      /**
       * Gets content of aggregation {@link #getSystems systems}.
       *
       * Systems to be rendered in the landscape viewer
       */
      getSystems(): sap.landvisz.LandscapeEntity[];
      /**
       * Gets current value of property {@link #getTitle title}.
       *
       * Header of the rendered view
       */
      getTitle(): string;
      /**
       * Gets current value of property {@link #getViewType viewType}.
       *
       * View type of landscape view
       */
      getViewType(): sap.landvisz.ViewType;
      /**
       * Gets current value of property {@link #getVisibleDependency visibleDependency}.
       *
       * Dependency View Visibility
       *
       * Default value is `BOTH`.
       */
      getVisibleDependency(): sap.landvisz.DependencyVisibility;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * width of the Viewer container
       */
      getWidth(): number;
      /**
       * Checks for the provided `sap.landvisz.ConnectionEntity` in the aggregation {@link #getConnectionEntities
       * connectionEntities}. and returns its index if found or -1 otherwise.
       */
      indexOfConnectionEntity(
        /**
         * The connectionEntity whose index is looked for
         */
        oConnectionEntity: sap.landvisz.ConnectionEntity
      ): number;
      /**
       * Checks for the provided `sap.landvisz.Connector` in the aggregation {@link #getConnectors connectors}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfConnector(
        /**
         * The connector whose index is looked for
         */
        oConnector: sap.landvisz.Connector
      ): number;
      /**
       * Checks for the provided `sap.landvisz.Option` in the aggregation {@link #getSolutionOptions solutionOptions}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfSolutionOption(
        /**
         * The solutionOption whose index is looked for
         */
        oSolutionOption: sap.landvisz.Option
      ): number;
      /**
       * Checks for the provided `sap.landvisz.LandscapeEntity` in the aggregation {@link #getSystems systems}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfSystem(
        /**
         * The system whose index is looked for
         */
        oSystem: sap.landvisz.LandscapeEntity
      ): number;
      /**
       * Inserts a connectionEntity into the aggregation {@link #getConnectionEntities connectionEntities}.
       */
      insertConnectionEntity(
        /**
         * The connectionEntity to insert; if empty, nothing is inserted
         */
        oConnectionEntity: sap.landvisz.ConnectionEntity,
        /**
         * The `0`-based index the connectionEntity should be inserted at; for a negative value of `iIndex`, the
         * connectionEntity is inserted at position 0; for a value greater than the current size of the aggregation,
         * the connectionEntity is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Inserts a connector into the aggregation {@link #getConnectors connectors}.
       */
      insertConnector(
        /**
         * The connector to insert; if empty, nothing is inserted
         */
        oConnector: sap.landvisz.Connector,
        /**
         * The `0`-based index the connector should be inserted at; for a negative value of `iIndex`, the connector
         * is inserted at position 0; for a value greater than the current size of the aggregation, the connector
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Inserts a solutionOption into the aggregation {@link #getSolutionOptions solutionOptions}.
       */
      insertSolutionOption(
        /**
         * The solutionOption to insert; if empty, nothing is inserted
         */
        oSolutionOption: sap.landvisz.Option,
        /**
         * The `0`-based index the solutionOption should be inserted at; for a negative value of `iIndex`, the solutionOption
         * is inserted at position 0; for a value greater than the current size of the aggregation, the solutionOption
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Inserts a system into the aggregation {@link #getSystems systems}.
       */
      insertSystem(
        /**
         * The system to insert; if empty, nothing is inserted
         */
        oSystem: sap.landvisz.LandscapeEntity,
        /**
         * The `0`-based index the system should be inserted at; for a negative value of `iIndex`, the system is
         * inserted at position 0; for a value greater than the current size of the aggregation, the system is inserted
         * at the last position
         */
        iIndex: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Removes all the controls from the aggregation {@link #getConnectionEntities connectionEntities}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllConnectionEntities(): sap.landvisz.ConnectionEntity[];
      /**
       * Removes all the controls from the aggregation {@link #getConnectors connectors}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllConnectors(): sap.landvisz.Connector[];
      /**
       * Removes all the controls from the aggregation {@link #getSolutionOptions solutionOptions}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllSolutionOptions(): sap.landvisz.Option[];
      /**
       * Removes all the controls from the aggregation {@link #getSystems systems}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllSystems(): sap.landvisz.LandscapeEntity[];
      /**
       * Removes a connectionEntity from the aggregation {@link #getConnectionEntities connectionEntities}.
       */
      removeConnectionEntity(
        /**
         * The connectionEntity to remove or its index or id
         */
        vConnectionEntity: number | string | sap.landvisz.ConnectionEntity
      ): sap.landvisz.ConnectionEntity;
      /**
       * Removes a connector from the aggregation {@link #getConnectors connectors}.
       */
      removeConnector(
        /**
         * The connector to remove or its index or id
         */
        vConnector: number | string | sap.landvisz.Connector
      ): sap.landvisz.Connector;
      /**
       * Removes a solutionOption from the aggregation {@link #getSolutionOptions solutionOptions}.
       */
      removeSolutionOption(
        /**
         * The solutionOption to remove or its index or id
         */
        vSolutionOption: number | string | sap.landvisz.Option
      ): sap.landvisz.Option;
      /**
       * Removes a system from the aggregation {@link #getSystems systems}.
       */
      removeSystem(
        /**
         * The system to remove or its index or id
         */
        vSystem: number | string | sap.landvisz.LandscapeEntity
      ): sap.landvisz.LandscapeEntity;
      /**
       * Sets a new value for property {@link #getBoxDependencyLabel boxDependencyLabel}.
       *
       * Label of box view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'Box View'`.
       */
      setBoxDependencyLabel(
        /**
         * New value for property `boxDependencyLabel`
         */
        sBoxDependencyLabel?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getBoxDependencyLevels boxDependencyLevels}.
       *
       * Levels information in Box dependency view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setBoxDependencyLevels(
        /**
         * New value for property `boxDependencyLevels`
         */
        sBoxDependencyLevels?: string[]
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getCloseButtonTooltip closeButtonTooltip}.
       *
       * tooltip for close button
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setCloseButtonTooltip(
        /**
         * New value for property `closeButtonTooltip`
         */
        sCloseButtonTooltip?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getComponentViewLabel componentViewLabel}.
       *
       * Label for the component view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'Component View'`.
       */
      setComponentViewLabel(
        /**
         * New value for property `componentViewLabel`
         */
        sComponentViewLabel?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getComponentViewTooltip componentViewTooltip}.
       *
       * tooltip for component view button
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setComponentViewTooltip(
        /**
         * New value for property `componentViewTooltip`
         */
        sComponentViewTooltip?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getConnectionLine connectionLine}.
       *
       * Type of line to be drawn
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Line`.
       */
      setConnectionLine(
        /**
         * New value for property `connectionLine`
         */
        sConnectionLine?: sap.landvisz.ConnectionLine
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getDefaultDependencyView defaultDependencyView}.
       *
       * View type of landscape view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `NETWORK_VIEW`.
       */
      setDefaultDependencyView(
        /**
         * New value for property `defaultDependencyView`
         */
        sDefaultDependencyView?: sap.landvisz.DependencyType
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getDeploymentOptionsLabel deploymentOptionsLabel}.
       *
       * Label for the options
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'Deployment Options :'`.
       */
      setDeploymentOptionsLabel(
        /**
         * New value for property `deploymentOptionsLabel`
         */
        sDeploymentOptionsLabel?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getDeploymentOptionsTooltip deploymentOptionsTooltip}.
       *
       * tooltip of label for the options
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDeploymentOptionsTooltip(
        /**
         * New value for property `deploymentOptionsTooltip`
         */
        sDeploymentOptionsTooltip?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getDeploymentViewLabel deploymentViewLabel}.
       *
       * Label for deployment view.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'Deployment View'`.
       */
      setDeploymentViewLabel(
        /**
         * New value for property `deploymentViewLabel`
         */
        sDeploymentViewLabel?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getDeploymentViewTooltip deploymentViewTooltip}.
       *
       * tooltip for deployment view button
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setDeploymentViewTooltip(
        /**
         * New value for property `deploymentViewTooltip`
         */
        sDeploymentViewTooltip?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getHasParent hasParent}.
       *
       * control has to be added in the container or directly in the window.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setHasParent(
        /**
         * New value for property `hasParent`
         */
        bHasParent?: boolean
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getHeight height}.
       *
       * Height of Viewer container
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setHeight(
        /**
         * New value for property `height`
         */
        iHeight?: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getNavigationPath navigationPath}.
       *
       * Text displayed in the dependency view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setNavigationPath(
        /**
         * New value for property `navigationPath`
         */
        sNavigationPath?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getNetworkDependencyLabel networkDependencyLabel}.
       *
       * Label of the network view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `'Network View'`.
       */
      setNetworkDependencyLabel(
        /**
         * New value for property `networkDependencyLabel`
         */
        sNetworkDependencyLabel?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets the aggregated {@link #getPlugContent plugContent}.
       */
      setPlugContent(
        /**
         * The plugContent to set
         */
        oPlugContent: sap.ui.core.Control
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getPlugContentHeight plugContentHeight}.
       *
       * Specify the height of plugged content
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `0`.
       */
      setPlugContentHeight(
        /**
         * New value for property `plugContentHeight`
         */
        iPlugContentHeight?: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getSelectionViewPosition selectionViewPosition}.
       *
       * positions for selection view entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `CENTER`.
       */
      setSelectionViewPosition(
        /**
         * New value for property `selectionViewPosition`
         */
        sSelectionViewPosition?: sap.landvisz.SelectionViewPosition
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getShowClose showClose}.
       *
       * close button visibility
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowClose(
        /**
         * New value for property `showClose`
         */
        bShowClose?: boolean
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getShowDependencyNavigator showDependencyNavigator}.
       *
       * Navigator for dependency views
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowDependencyNavigator(
        /**
         * New value for property `showDependencyNavigator`
         */
        bShowDependencyNavigator?: boolean
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getShowDeploymentTypeSection showDeploymentTypeSection}.
       *
       * Deployment type section
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowDeploymentTypeSection(
        /**
         * New value for property `showDeploymentTypeSection`
         */
        bShowDeploymentTypeSection?: boolean
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getSolutionOptionType solutionOptionType}.
       *
       * determines whether the option is rendered on view or entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSolutionOptionType(
        /**
         * New value for property `solutionOptionType`
         */
        sSolutionOptionType?: sap.landvisz.OptionType
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getSolutionType solutionType}.
       *
       * Type of solution rendered
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSolutionType(
        /**
         * New value for property `solutionType`
         */
        sSolutionType?: sap.landvisz.SolutionType
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getTitle title}.
       *
       * Header of the rendered view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setTitle(
        /**
         * New value for property `title`
         */
        sTitle?: string
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getViewType viewType}.
       *
       * View type of landscape view
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setViewType(
        /**
         * New value for property `viewType`
         */
        sViewType?: sap.landvisz.ViewType
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getVisibleDependency visibleDependency}.
       *
       * Dependency View Visibility
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `BOTH`.
       */
      setVisibleDependency(
        /**
         * New value for property `visibleDependency`
         */
        sVisibleDependency?: sap.landvisz.DependencyVisibility
      ): sap.landvisz.LandscapeViewer;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * width of the Viewer container
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        iWidth?: number
      ): sap.landvisz.LandscapeViewer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.landvisz.LandscapeViewer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeViewer` itself.
       *
       * closes the view
       */
      attachClose(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeViewer` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeViewer;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:loadSolutionView loadSolutionView} event of
       * this `sap.landvisz.LandscapeViewer`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.LandscapeViewer` itself.
       *
       * load the solution view either deployment or component
       */
      attachLoadSolutionView(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.landvisz.LandscapeViewer` itself
         */
        oListener?: object
      ): sap.landvisz.LandscapeViewer;
    }
    /**
     * Long text for a header
     */
    class LongTextField extends sap.ui.core.Control {
      /**
       * Constructor for a new LongTextField.
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
        mSettings?: $LongTextFieldSettings
      );

      /**
       * Creates a new subclass of class sap.landvisz.LongTextField with name `sClassName` and enriches it with
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
       * Returns a metadata object for class sap.landvisz.LongTextField.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getRenderingSize renderingSize}.
       *
       * rendering size of the data
       */
      getRenderingSize(): sap.landvisz.EntityCSSSize;
      /**
       * Gets current value of property {@link #getText text}.
       *
       * Long text for a header
       */
      getText(): string;
      /**
       * Sets a new value for property {@link #getRenderingSize renderingSize}.
       *
       * rendering size of the data
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setRenderingSize(
        /**
         * New value for property `renderingSize`
         */
        sRenderingSize?: sap.landvisz.EntityCSSSize
      ): sap.landvisz.LongTextField;
      /**
       * Sets a new value for property {@link #getText text}.
       *
       * Long text for a header
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setText(
        /**
         * New value for property `text`
         */
        sText?: string
      ): sap.landvisz.LongTextField;
    }
    /**
     * Options for solution entities
     */
    class Option extends sap.ui.core.Control {
      /**
       * Constructor for a new Option.
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
        mSettings?: $OptionSettings
      );

      /**
       * Adds some optionEntity to the aggregation {@link #getOptionEntities optionEntities}.
       */
      addOptionEntity(
        /**
         * The optionEntity to add; if empty, nothing is inserted
         */
        oOptionEntity: sap.landvisz.OptionEntity
      ): sap.landvisz.Option;
      /**
       * Destroys all the optionEntities in the aggregation {@link #getOptionEntities optionEntities}.
       */
      destroyOptionEntities(): sap.landvisz.Option;
      /**
       * Creates a new subclass of class sap.landvisz.Option with name `sClassName` and enriches it with the information
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
       * Gets current value of property {@link #getCurrentEntity currentEntity}.
       *
       * Entity on which options are applicable
       */
      getCurrentEntity(): string;
      /**
       * Returns a metadata object for class sap.landvisz.Option.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets content of aggregation {@link #getOptionEntities optionEntities}.
       *
       * Entity to be rendered as options
       */
      getOptionEntities(): sap.landvisz.OptionEntity[];
      /**
       * Gets current value of property {@link #getType type}.
       *
       * type of main entity which has a replacement
       */
      getType(): string;
      /**
       * Checks for the provided `sap.landvisz.OptionEntity` in the aggregation {@link #getOptionEntities optionEntities}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfOptionEntity(
        /**
         * The optionEntity whose index is looked for
         */
        oOptionEntity: sap.landvisz.OptionEntity
      ): number;
      /**
       * Inserts a optionEntity into the aggregation {@link #getOptionEntities optionEntities}.
       */
      insertOptionEntity(
        /**
         * The optionEntity to insert; if empty, nothing is inserted
         */
        oOptionEntity: sap.landvisz.OptionEntity,
        /**
         * The `0`-based index the optionEntity should be inserted at; for a negative value of `iIndex`, the optionEntity
         * is inserted at position 0; for a value greater than the current size of the aggregation, the optionEntity
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.Option;
      /**
       * Removes all the controls from the aggregation {@link #getOptionEntities optionEntities}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllOptionEntities(): sap.landvisz.OptionEntity[];
      /**
       * Removes a optionEntity from the aggregation {@link #getOptionEntities optionEntities}.
       */
      removeOptionEntity(
        /**
         * The optionEntity to remove or its index or id
         */
        vOptionEntity: number | string | sap.landvisz.OptionEntity
      ): sap.landvisz.OptionEntity;
      /**
       * Sets a new value for property {@link #getCurrentEntity currentEntity}.
       *
       * Entity on which options are applicable
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setCurrentEntity(
        /**
         * New value for property `currentEntity`
         */
        sCurrentEntity?: string
      ): sap.landvisz.Option;
      /**
       * Sets a new value for property {@link #getType type}.
       *
       * type of main entity which has a replacement
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setType(
        /**
         * New value for property `type`
         */
        sType?: string
      ): sap.landvisz.Option;
    }
    /**
     * Options for solution entities
     */
    class OptionEntity extends sap.landvisz.OptionSource {
      /**
       * Constructor for a new OptionEntity.
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
        mSettings?: $OptionEntitySettings
      );

      /**
       * Adds some optionSource to the aggregation {@link #getOptionSources optionSources}.
       */
      addOptionSource(
        /**
         * The optionSource to add; if empty, nothing is inserted
         */
        oOptionSource: sap.landvisz.OptionSource
      ): sap.landvisz.OptionEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:selectOption selectOption} event of this `sap.landvisz.OptionEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.OptionEntity` itself.
       *
       * Select event for option entity
       */
      attachSelectOption(
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
         * Context object to call the event handler with. Defaults to this `sap.landvisz.OptionEntity` itself
         */
        oListener?: object
      ): sap.landvisz.OptionEntity;
      /**
       * Destroys all the optionSources in the aggregation {@link #getOptionSources optionSources}.
       */
      destroyOptionSources(): sap.landvisz.OptionEntity;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:selectOption selectOption} event of this `sap.landvisz.OptionEntity`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachSelectOption(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.landvisz.OptionEntity;
      /**
       * Creates a new subclass of class sap.landvisz.OptionEntity with name `sClassName` and enriches it with
       * the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.landvisz.OptionSource.extend}.
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
       * Fires event {@link #event:selectOption selectOption} to attached listeners.
       */
      fireSelectOption(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.landvisz.OptionEntity;
      /**
       * Gets current value of property {@link #getEnable enable}.
       *
       * enabling/disabling options
       *
       * Default value is `true`.
       */
      getEnable(): boolean;
      /**
       * Gets current value of property {@link #getLabel label}.
       *
       * label for option entity
       */
      getLabel(): string;
      /**
       * Returns a metadata object for class sap.landvisz.OptionEntity.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets content of aggregation {@link #getOptionSources optionSources}.
       *
       * Option Renderer Control
       */
      getOptionSources(): sap.landvisz.OptionSource[];
      /**
       * Gets current value of property {@link #getOptionTextTooltip optionTextTooltip}.
       *
       * tooltip for options
       */
      getOptionTextTooltip(): string;
      /**
       * Gets current value of property {@link #getSelected selected}.
       *
       * determines current selected option
       *
       * Default value is `false`.
       */
      getSelected(): boolean;
      /**
       * Checks for the provided `sap.landvisz.OptionSource` in the aggregation {@link #getOptionSources optionSources}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfOptionSource(
        /**
         * The optionSource whose index is looked for
         */
        oOptionSource: sap.landvisz.OptionSource
      ): number;
      /**
       * Inserts a optionSource into the aggregation {@link #getOptionSources optionSources}.
       */
      insertOptionSource(
        /**
         * The optionSource to insert; if empty, nothing is inserted
         */
        oOptionSource: sap.landvisz.OptionSource,
        /**
         * The `0`-based index the optionSource should be inserted at; for a negative value of `iIndex`, the optionSource
         * is inserted at position 0; for a value greater than the current size of the aggregation, the optionSource
         * is inserted at the last position
         */
        iIndex: number
      ): sap.landvisz.OptionEntity;
      /**
       * Removes all the controls from the aggregation {@link #getOptionSources optionSources}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllOptionSources(): sap.landvisz.OptionSource[];
      /**
       * Removes a optionSource from the aggregation {@link #getOptionSources optionSources}.
       */
      removeOptionSource(
        /**
         * The optionSource to remove or its index or id
         */
        vOptionSource: number | string | sap.landvisz.OptionSource
      ): sap.landvisz.OptionSource;
      /**
       * Sets a new value for property {@link #getEnable enable}.
       *
       * enabling/disabling options
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setEnable(
        /**
         * New value for property `enable`
         */
        bEnable?: boolean
      ): sap.landvisz.OptionEntity;
      /**
       * Sets a new value for property {@link #getLabel label}.
       *
       * label for option entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setLabel(
        /**
         * New value for property `label`
         */
        sLabel?: string
      ): sap.landvisz.OptionEntity;
      /**
       * Sets a new value for property {@link #getOptionTextTooltip optionTextTooltip}.
       *
       * tooltip for options
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setOptionTextTooltip(
        /**
         * New value for property `optionTextTooltip`
         */
        sOptionTextTooltip?: string
      ): sap.landvisz.OptionEntity;
      /**
       * Sets a new value for property {@link #getSelected selected}.
       *
       * determines current selected option
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
      ): sap.landvisz.OptionEntity;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:selectOption selectOption} event of this `sap.landvisz.OptionEntity`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.landvisz.OptionEntity` itself.
       *
       * Select event for option entity
       */
      attachSelectOption(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.landvisz.OptionEntity` itself
         */
        oListener?: object
      ): sap.landvisz.OptionEntity;
    }
    /**
     * Options source for solution entities
     */
    class OptionSource extends sap.ui.core.Control {
      /**
       * Constructor for a new OptionSource.
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
        mSettings?: $OptionSourceSettings
      );

      /**
       * Creates a new subclass of class sap.landvisz.OptionSource with name `sClassName` and enriches it with
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
       * Returns a metadata object for class sap.landvisz.OptionSource.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.core.ElementMetadata;
      /**
       * Gets current value of property {@link #getSource source}.
       *
       * source for option entity
       */
      getSource(): string;
      /**
       * Sets a new value for property {@link #getSource source}.
       *
       * source for option entity
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setSource(
        /**
         * New value for property `source`
         */
        sSource?: string
      ): sap.landvisz.OptionSource;
    }
    /**
     * Action Type of a action
     */
    enum ActionType {
      /**
       * Menu action type
       */
      MENU,
      /**
       * Normal action type
       */
      NORMAL
    }
    /**
     * [Enter description for ComponentType]
     */
    enum ComponentType {
      /**
       * component type in not defined
       */
      notDefined,
      /**
       * on demand component type
       */
      onDemand,
      /**
       * on premise component type
       */
      onPremise
    }
    /**
     * type file for ps, ts and mob soln
     */
    enum ConnectionLine {
      /**
       * Line with arrow at end
       */
      Arrow,
      /**
       * Plain line
       */
      Line
    }
    /**
     * type file for ps, ts and mob soln
     */
    enum ConnectionType {
      /**
       * mob type
       */
      MobileSolution,
      /**
       * ps type
       */
      ProductSystem,
      /**
       * ts type
       */
      TechnicalSystem
    }
    /**
     * View type of landscape viewer
     */
    enum DependencyType {
      /**
       * Landscape view for selected view
       */
      BOX_VIEW,
      /**
       * dependency view
       */
      NETWORK_VIEW
    }
    /**
     * View Visibility of landscape viewer
     */
    enum DependencyVisibility {
      /**
       * make both view visible
       */
      BOTH,
      /**
       * Box Dependency View
       */
      BOX,
      /**
       * Network dependency view
       */
      NETWORK
    }
    /**
     * System Size supported
     */
    enum EntityCSSSize {
      /**
       * Large size of system
       */
      Large,
      /**
       * Largest size of system
       */
      Largest,
      /**
       * Medium size of system
       */
      Medium,
      /**
       * Regular size of system
       */
      Regular,
      /**
       * new size regular size
       */
      RegularSmall,
      /**
       * Small size of system
       */
      Small,
      /**
       * Smaller size of system
       */
      Smaller,
      /**
       * Smallest size of system
       */
      Smallest
    }
    /**
     * Type of object in the landscape
     */
    enum LandscapeObject {
      /**
       * Database type
       */
      Database,
      /**
       * Product type
       */
      Product,
      /**
       * Product systems type
       */
      ProductSystem,
      /**
       * Product version type
       */
      ProductVersion,
      /**
       * SAP Component Type
       */
      SapComponent,
      /**
       * Technical system type
       */
      TechnicalSystem,
      /**
       * SAP Track Type
       */
      Track
    }
    /**
     * sampl doc
     */
    enum ModelingStatus {
      /**
       * sample doc for types - ABAP
       */
      ERROR,
      /**
       * sample doc
       */
      NORMAL,
      /**
       * sample doc
       */
      WARNING
    }
    /**
     * Action Type of a action
     */
    enum OptionType {
      /**
       * Option applicable on entity
       */
      ENTITY,
      /**
       * Option applicable on view
       */
      VIEW
    }
    /**
     * position of selection view
     */
    enum SelectionViewPosition {
      /**
       * Selection entity at center position
       */
      CENTER,
      /**
       * selection entity at left position
       */
      LEFT,
      /**
       * selection entity at right position
       */
      RIGHT
    }
    /**
     * View type of landscape viewer
     */
    enum SolutionType {
      /**
       * Component view of a solution
       */
      COMPONENT_VIEW,
      /**
       * Deploy view of a solution
       */
      DEPLOYMENT_VIEW
    }
    /**
     * sampl doc
     */
    enum TechnicalSystemType {
      /**
       * types: ABAP
       */
      ABAP,
      /**
       * types: APACHESERVER
       */
      APACHESERVER,
      /**
       * types - DUAL
       */
      DUAL,
      /**
       * Types: GENERIC
       */
      GENERIC,
      /**
       * Types: HANA DB
       */
      HANADB,
      /**
       * types - INTROSCOPEMGR
       */
      INTROSCOPEMGR,
      /**
       * Types: INTROSCOPESTD
       */
      INTROSCOPESTD,
      /**
       * types: JAVA
       */
      JAVA,
      /**
       * types - LIVECACHESAP
       */
      LIVECACHESAP,
      /**
       * types - MDM
       */
      MDM,
      /**
       * Types: MSIISINST
       */
      MSIISINST,
      /**
       * types - .NET
       */
      MSNET,
      /**
       * types - DUAL
       */
      SBOP,
      /**
       * types: SUP
       */
      SUP,
      /**
       * types: TREX
       */
      TREX,
      /**
       * types: UNSP3TIER
       */
      UNSP3TIER,
      /**
       * types - UNSPAPP
       */
      UNSPAPP,
      /**
       * Types: UNSPCLUSTER
       */
      UNSPCLUSTER,
      /**
       * types - WEBDISP
       */
      WEBDISP,
      /**
       * types: WEBSPHERE
       */
      WEBSPHERE
    }
    /**
     * View type of landscape viewer
     */
    enum ViewType {
      /**
       * dependency view
       */
      DEPENDENCY_VIEW,
      /**
       * Landscape view for selected view
       */
      SELECTION_VIEW,
      /**
       * Solution View for a Landscape Objects
       */
      SOLUTION_VIEW
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/landvisz/internal/ActionBar": undefined;

    "sap/landvisz/internal/DataContainer": undefined;

    "sap/landvisz/internal/DeploymentType": undefined;

    "sap/landvisz/internal/EntityAction": undefined;

    "sap/landvisz/internal/EntityCustomAction": undefined;

    "sap/landvisz/internal/HeaderList": undefined;

    "sap/landvisz/internal/IdentificationBar": undefined;

    "sap/landvisz/internal/LinearRowField": undefined;

    "sap/landvisz/internal/ModelingStatus": undefined;

    "sap/landvisz/internal/NestedRowField": undefined;

    "sap/landvisz/internal/SingleDataContainer": undefined;

    "sap/landvisz/internal/TreeField": undefined;

    "sap/landvisz/ConnectionEntity": undefined;

    "sap/landvisz/Connector": undefined;

    "sap/landvisz/LandscapeEntity": undefined;

    "sap/landvisz/LandscapeViewer": undefined;

    "sap/landvisz/LongTextField": undefined;

    "sap/landvisz/Option": undefined;

    "sap/landvisz/OptionEntity": undefined;

    "sap/landvisz/OptionSource": undefined;
  }
}
