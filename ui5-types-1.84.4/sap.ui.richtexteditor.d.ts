// For Library Version: 1.84.3

declare namespace sap {
  namespace ui {
    /**
     * A rich text editor (RTE) control. Requires installation of an additional rich text editor library.
     */
    namespace richtexteditor {
      /**
       * @SINCE 1.50
       *
       * Interface for controls which are suitable as a Toolbar for RichTextEditor.
       */
      interface IToolbar {}

      interface $RichTextEditorSettings extends sap.ui.core.$ControlSettings {
        /**
         * An HTML string representing the editor content. Because this is HTML, the value cannot be generically
         * escaped to prevent cross-site scripting, so the application is responsible for doing so. Overwriting
         * this property would also reset editor's Undo manager and buttons "Undo"/"Redo" would be set to their
         * initial state.
         */
        value?: string;

        /**
         * The text direction
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * Width of RichTextEditor control in CSS units.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Height of RichTextEditor control in CSS units. **Note:** If the height property results in a value smaller
         * than 200px, the minimum height of 200px will be applied.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * The editor implementation to use.
         *
         * Valid values are the ones found under sap.ui.richtexteditor.EditorType and any other editor identifier
         * that may be introduced by other groups (hence this is not an enumeration).
         *
         * **Notes:**
         * 	 - TinyMCE version 3 is no longer supported and cannot be used. If you set the property to TinyMCE,
         * 			it will load TinyMCE version 4.
         * 	 - Any attempts to set this property after the first rendering will not have any effect.
         */
        editorType?: string;

        /**
         * @deprecated (since 1.25.0) - The editorLocation is set implicitly when choosing the editorType.
         *
         * Relative or absolute URL where the editor is available. Must be on the same server. **Note:** Any attempts
         * to set this property after the first rendering will not have any effect.
         */
        editorLocation?: string;

        /**
         * Determines whether the editor content can be modified by the user. When set to "false" there might not
         * be any editor toolbar.
         */
        editable?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Bold, Italic, Underline and Strikethrough
         * is available. Changing this after the initial rendering will result in some visible redrawing.
         */
        showGroupFontStyle?: boolean;

        /**
         * Determines whether the toolbar button group containing text alignment commands is available. Changing
         * this after the initial rendering will result in some visible redrawing.
         */
        showGroupTextAlign?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Bullets and Indentation is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         */
        showGroupStructure?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Font, Font Size and Colors is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         */
        showGroupFont?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Cut, Copy and Paste is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         */
        showGroupClipboard?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Insert Image and Insert Smiley is
         * available. Changing this after the initial rendering will result in some visible redrawing.
         */
        showGroupInsert?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Create Link and Remove Link is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         */
        showGroupLink?: boolean;

        /**
         * Determines whether the toolbar button group containing commands like Undo and Redo is available. Changing
         * this after the initial rendering will result in some visible redrawing.
         */
        showGroupUndo?: boolean;

        /**
         * Determines whether the text in the editor is wrapped. This does not affect the editor's value, only the
         * representation in the control.
         */
        wrapping?: boolean;

        /**
         * Determines whether a value is required.
         */
        required?: boolean;

        /**
         * Determines whether to run the HTML sanitizer once the value (HTML markup) is applied or not. To configure
         * allowed URLs please use the whitelist API via `jQuery.sap.addUrlWhitelist`
         */
        sanitizeValue?: boolean;

        /**
         * An array of plugin configuration objects with the obligatory property "name". Each object has to contain
         * a property "name" which then contains the plugin name/ID.
         */
        plugins?: object[];

        /**
         * Determines whether or not to use the legacy theme for the toolbar buttons. If this is set to false, the
         * default theme for the editor will be used (which might change slightly with every update). The legacy
         * theme has the disadvantage that not all functionality has its own icon, so using non default buttons
         * might lead to invisible buttons with the legacy theme - use the default editor theme in this case.
         */
        useLegacyTheme?: boolean;

        /**
         * An array of button configurations. These configurations contain the names of buttons as array in the
         * property "buttons" and the name of the group in "name", they can also contain the "row" where the buttons
         * should be placed, a "priority" and whether the buttons are "visible". See method addButtonGroup() for
         * more details on the structure of the objects in this array.
         */
        buttonGroups?: object[];

        /**
         * @SINCE 1.48
         *
         * Determines whether a Fiori Toolbar is used instead of the TinyMCE default toolbar one. It is applied
         * only when the EditorType is TinyMCE4 and sap.m library is loaded. **Note:** The `customToolbar` property
         * will have effect only on initial loading. Changing it during runtime will not affect the initially loaded
         * toolbar.
         */
        customToolbar?: boolean;

        /**
         * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter
         * key is pressed.
         */
        change?: Function;

        /**
         * Fired when the used editor is loaded and ready (its HTML is also created).
         */
        ready?: Function;

        /**
         * Analogous to the ready event, the event is fired when the used editor is loaded and ready. But the event
         * is fired after every time the control is ready to use and not only once like the ready event.
         */
        readyRecurring?: Function;

        /**
         * This event is fired right before the TinyMCE instance is created and can be used to change the settings
         * object that will be given to TinyMCE. The parameter "configuration" is the javascript oject that will
         * be given to TinyMCE upon first instantiation. The configuration parameter contains a map that can be
         * changed in the case of TinyMCE.
         */
        beforeEditorInit?: Function;

        /**
         * @SINCE 1.48
         *
         * Custom buttons are meant to extend the `RichTextEditor`'s custom toolbar. Though type is set to sap.ui.Control,
         * only sap.m.Button is allowed. **Note:** customButtons are available only when the customToolbar is enabled
         * and all the requirements are fulfilled.
         */
        customButtons?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * @SINCE 1.76.0
         *
         * Association to controls / IDs which label this control (see WAI-ARIA attribute `aria-labelledby`).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }
      /**
       * The RichTextEditor-Control is used to enter formatted text. It uses the third-party component called
       * TinyMCE. In addition to the native toolbar, you can also use a toolbar built with SAPUI5 controls. Overview:
       *
       * With version 1.48 onward, aside from the native toolbar of the TinyMCE, the `RichTextEditor` can also
       * use a toolbar built with SAPUI5 controls. Which toolbar is used is taken into consideration only while
       * the control is being initialized and it will not be possible to change it during runtime, because of
       * lifecycle incompatibilities between the SAPUI5 and the third-party library. The custom toolbar acts like
       * a wrapper to the native toolbar and takes care of synchronizing the state of its internal controls with
       * the current state of the selection in the editor (bold, italics, font styles etc.).
       *
       * Limitations:
       *
       * **Note: The `RichTextEditor` uses a third-party component and therefore some additional limitations apply
       * for its proper usage and support. For more information see the Preamble section in {@link topic:d4f3f1598373452bb73f2120930c133c
       * sap.ui.richtexteditor}. **
       *
       * Guidelines:
       * 	 -  The `RichTextEditor` should be used for desktop apps only. However, if it is essential for your
       * 			use case, you can enable the mobile version of TinyMCE, whilst having in mind the limitations. For more
       * 			information see the {@link topic:d4f3f1598373452bb73f2120930c133c sap.ui.richtexteditor documentation}.
       *
       * 	 -  In order to be usable, the control needs a minimum width 17.5 rem and height of 12.5 rem.
       * 	 -  Do not instantiate the `RichTextEditor` from a hidden container.
       * 	 -  Make sure you destroy the `RichTextEditor` instance instead of hiding it and create a new one when
       * 			you show it again.
       *
       * Usage:
       *
       * When to use:
       * 	 - You want to enable users to enter text and other elements (tables, images) with different styles
       * 			and colors.
       * 	 - You need to provide a tool for texts that require additional formatting.
       *
       *  When not to use:
       * 	 - You want to let users add simple text that doesn???t require formatting. Use {@link sap.m.TextArea
       * 			text area} instead.
       * 	 - Use callbacks to the native third-party API with care, as there may be compatibility issues with
       * 			later versions.
       */
      class RichTextEditor extends sap.ui.core.Control {
        /**
         * Constructor for a new RichTextEditor.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link fiori:https://experience.sap.com/fiori-design-web/rich-text-editor/ Rich Text Editor}
         * 	{@link topic:d4f3f1598373452bb73f2120930c133c}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: $RichTextEditorSettings
        );

        /**
         * @SINCE 1.76.0
         *
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Adds a button group to the editor.
         */
        addButtonGroup(
          /**
           * Name/ID of a single button or object containing the group information
           */
          mGroup?: {
            /**
             * Array of name/IDs of the buttons in the group
             */
            buttons?: string[];
            /**
             * Name/ID of the group.
             */
            name?: string;
            /**
             * (optional) The priority of the button group. Lower priorities are added first.
             */
            visible?: boolean;
            /**
             * (optional) Row number in which the button should be
             */
            row?: number;
            /**
             * (optional) The priority of the button group. Lower priorities are added first.
             */
            priority?: number;
            /**
             * (optional) The priority of the button group in the custom toolbar. Each default group in the custom toolbar
             * has a predefined `customToolbarPriority`. Lower priorities are added in first.
             */
            customToolbarPriority?: number;
          }
        ): object;
        /**
         * @SINCE 1.48
         *
         * Adds some customButton to the aggregation {@link #getCustomButtons customButtons}.
         */
        addCustomButton(
          /**
           * The customButton to add; if empty, nothing is inserted
           */
          oCustomButton: sap.ui.core.Control
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Allows to add a plugin (that must already be installed on the server) to the RichTextEditor.
         */
        addPlugin(
          /**
           * The plugin ID/name or an object with property "name", containing the ID/name of the plugin
           */
          mPlugin?: object | string
        ): object;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:beforeEditorInit beforeEditorInit} event of
         * this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * This event is fired right before the TinyMCE instance is created and can be used to change the settings
         * object that will be given to TinyMCE. The parameter "configuration" is the javascript oject that will
         * be given to TinyMCE upon first instantiation. The configuration parameter contains a map that can be
         * changed in the case of TinyMCE.
         */
        attachBeforeEditorInit(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter
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
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:ready ready} event of this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * Fired when the used editor is loaded and ready (its HTML is also created).
         */
        attachReady(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:readyRecurring readyRecurring} event of this
         * `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * Analogous to the ready event, the event is fired when the used editor is loaded and ready. But the event
         * is fired after every time the control is ready to use and not only once like the ready event.
         */
        attachReadyRecurring(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * @SINCE 1.48
         *
         * Destroys all the customButtons in the aggregation {@link #getCustomButtons customButtons}.
         */
        destroyCustomButtons(): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:beforeEditorInit beforeEditorInit} event of
         * this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachBeforeEditorInit(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.richtexteditor.RichTextEditor`.
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
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:ready ready} event of this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachReady(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:readyRecurring readyRecurring} event of this
         * `sap.ui.richtexteditor.RichTextEditor`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachReadyRecurring(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Creates a new subclass of class sap.ui.richtexteditor.RichTextEditor with name `sClassName` and enriches
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
         * Fires event {@link #event:beforeEditorInit beforeEditorInit} to attached listeners.
         */
        fireBeforeEditorInit(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The new control value.
             */
            newValue?: string;
          }
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Fires event {@link #event:ready ready} to attached listeners.
         */
        fireReady(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Fires event {@link #event:readyRecurring readyRecurring} to attached listeners.
         */
        fireReadyRecurring(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * @SINCE 1.76.0
         *
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getButtonGroups buttonGroups}.
         *
         * An array of button configurations. These configurations contain the names of buttons as array in the
         * property "buttons" and the name of the group in "name", they can also contain the "row" where the buttons
         * should be placed, a "priority" and whether the buttons are "visible". See method addButtonGroup() for
         * more details on the structure of the objects in this array.
         *
         * Default value is `[]`.
         */
        getButtonGroups(): object[];
        /**
         * @SINCE 1.48
         *
         * Gets content of aggregation {@link #getCustomButtons customButtons}.
         *
         * Custom buttons are meant to extend the `RichTextEditor`'s custom toolbar. Though type is set to sap.ui.Control,
         * only sap.m.Button is allowed. **Note:** customButtons are available only when the customToolbar is enabled
         * and all the requirements are fulfilled.
         */
        getCustomButtons(): sap.ui.core.Control[];
        /**
         * @SINCE 1.48
         *
         * Gets current value of property {@link #getCustomToolbar customToolbar}.
         *
         * Determines whether a Fiori Toolbar is used instead of the TinyMCE default toolbar one. It is applied
         * only when the EditorType is TinyMCE4 and sap.m library is loaded. **Note:** The `customToolbar` property
         * will have effect only on initial loading. Changing it during runtime will not affect the initially loaded
         * toolbar.
         *
         * Default value is `false`.
         */
        getCustomToolbar(): boolean;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Determines whether the editor content can be modified by the user. When set to "false" there might not
         * be any editor toolbar.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * @deprecated (since 1.25.0) - The editorLocation is set implicitly when choosing the editorType.
         *
         * Gets current value of property {@link #getEditorLocation editorLocation}.
         *
         * Relative or absolute URL where the editor is available. Must be on the same server. **Note:** Any attempts
         * to set this property after the first rendering will not have any effect.
         *
         * Default value is `'js/tiny_mce4/tinymce.js'`.
         */
        getEditorLocation(): string;
        /**
         * Gets current value of property {@link #getEditorType editorType}.
         *
         * The editor implementation to use.
         *
         * Valid values are the ones found under sap.ui.richtexteditor.EditorType and any other editor identifier
         * that may be introduced by other groups (hence this is not an enumeration).
         *
         * **Notes:**
         * 	 - TinyMCE version 3 is no longer supported and cannot be used. If you set the property to TinyMCE,
         * 			it will load TinyMCE version 4.
         * 	 - Any attempts to set this property after the first rendering will not have any effect.
         *
         * Default value is `'TinyMCE4'`.
         */
        getEditorType(): string;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Height of RichTextEditor control in CSS units. **Note:** If the height property results in a value smaller
         * than 200px, the minimum height of 200px will be applied.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.richtexteditor.RichTextEditor.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.core.ElementMetadata;
        /**
         * Returns the current editor's instance. CAUTION: using the native editor introduces a dependency to that
         * editor and breaks the wrapping character of the RichTextEditor control, so it should only be done in
         * justified cases.
         */
        getNativeApi(): object;
        /**
         * Gets current value of property {@link #getPlugins plugins}.
         *
         * An array of plugin configuration objects with the obligatory property "name". Each object has to contain
         * a property "name" which then contains the plugin name/ID.
         *
         * Default value is `[]`.
         */
        getPlugins(): object[];
        /**
         * Gets current value of property {@link #getRequired required}.
         *
         * Determines whether a value is required.
         *
         * Default value is `false`.
         */
        getRequired(): boolean;
        /**
         * Gets current value of property {@link #getSanitizeValue sanitizeValue}.
         *
         * Determines whether to run the HTML sanitizer once the value (HTML markup) is applied or not. To configure
         * allowed URLs please use the whitelist API via `jQuery.sap.addUrlWhitelist`
         *
         * Default value is `true`.
         */
        getSanitizeValue(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupClipboard showGroupClipboard}.
         *
         * Determines whether the toolbar button group containing commands like Cut, Copy and Paste is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `true`.
         */
        getShowGroupClipboard(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupFont showGroupFont}.
         *
         * Determines whether the toolbar button group containing commands like Font, Font Size and Colors is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `false`.
         */
        getShowGroupFont(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupFontStyle showGroupFontStyle}.
         *
         * Determines whether the toolbar button group containing commands like Bold, Italic, Underline and Strikethrough
         * is available. Changing this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `true`.
         */
        getShowGroupFontStyle(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupInsert showGroupInsert}.
         *
         * Determines whether the toolbar button group containing commands like Insert Image and Insert Smiley is
         * available. Changing this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `false`.
         */
        getShowGroupInsert(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupLink showGroupLink}.
         *
         * Determines whether the toolbar button group containing commands like Create Link and Remove Link is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `false`.
         */
        getShowGroupLink(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupStructure showGroupStructure}.
         *
         * Determines whether the toolbar button group containing commands like Bullets and Indentation is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `true`.
         */
        getShowGroupStructure(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupTextAlign showGroupTextAlign}.
         *
         * Determines whether the toolbar button group containing text alignment commands is available. Changing
         * this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `true`.
         */
        getShowGroupTextAlign(): boolean;
        /**
         * Gets current value of property {@link #getShowGroupUndo showGroupUndo}.
         *
         * Determines whether the toolbar button group containing commands like Undo and Redo is available. Changing
         * this after the initial rendering will result in some visible redrawing.
         *
         * Default value is `false`.
         */
        getShowGroupUndo(): boolean;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * The text direction
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getUseLegacyTheme useLegacyTheme}.
         *
         * Determines whether or not to use the legacy theme for the toolbar buttons. If this is set to false, the
         * default theme for the editor will be used (which might change slightly with every update). The legacy
         * theme has the disadvantage that not all functionality has its own icon, so using non default buttons
         * might lead to invisible buttons with the legacy theme - use the default editor theme in this case.
         *
         * Default value is `true`.
         */
        getUseLegacyTheme(): boolean;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * An HTML string representing the editor content. Because this is HTML, the value cannot be generically
         * escaped to prevent cross-site scripting, so the application is responsible for doing so. Overwriting
         * this property would also reset editor's Undo manager and buttons "Undo"/"Redo" would be set to their
         * initial state.
         *
         * Default value is `empty string`.
         */
        getValue(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of RichTextEditor control in CSS units.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getWrapping wrapping}.
         *
         * Determines whether the text in the editor is wrapped. This does not affect the editor's value, only the
         * representation in the control.
         *
         * Default value is `true`.
         */
        getWrapping(): boolean;
        /**
         * @SINCE 1.48
         *
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCustomButtons customButtons}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfCustomButton(
          /**
           * The customButton whose index is looked for
           */
          oCustomButton: sap.ui.core.Control
        ): number;
        /**
         * @SINCE 1.48
         *
         * Inserts a customButton into the aggregation {@link #getCustomButtons customButtons}.
         */
        insertCustomButton(
          /**
           * The customButton to insert; if empty, nothing is inserted
           */
          oCustomButton: sap.ui.core.Control,
          /**
           * The `0`-based index the customButton should be inserted at; for a negative value of `iIndex`, the customButton
           * is inserted at position 0; for a value greater than the current size of the aggregation, the customButton
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * @SINCE 1.76.0
         *
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * @SINCE 1.48
         *
         * Removes all the controls from the aggregation {@link #getCustomButtons customButtons}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllCustomButtons(): sap.ui.core.Control[];
        /**
         * @SINCE 1.76.0
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
         * @SINCE 1.48
         *
         * Removes a customButton from the aggregation {@link #getCustomButtons customButtons}.
         */
        removeCustomButton(
          /**
           * The customButton to remove or its index or id
           */
          vCustomButton: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes the plugin with the given name/ID from the list of plugins to load
         */
        removePlugin(
          /**
           * The name/ID of the plugin to remove
           */
          sPluginName?: string
        ): object;
        /**
         * Sets the button groups to the editor.
         */
        setButtonGroups(
          /**
           * Array of names or objects containing the group information
           */
          aGroups?: any[]
        ): object;
        /**
         * @SINCE 1.48
         *
         * Sets a new value for property {@link #getCustomToolbar customToolbar}.
         *
         * Determines whether a Fiori Toolbar is used instead of the TinyMCE default toolbar one. It is applied
         * only when the EditorType is TinyMCE4 and sap.m library is loaded. **Note:** The `customToolbar` property
         * will have effect only on initial loading. Changing it during runtime will not affect the initially loaded
         * toolbar.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setCustomToolbar(
          /**
           * New value for property `customToolbar`
           */
          bCustomToolbar?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Determines whether the editor content can be modified by the user. When set to "false" there might not
         * be any editor toolbar.
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
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * @deprecated (since 1.25.0) - The editorLocation is set implicitly when choosing the editorType.
         *
         * Sets a new value for property {@link #getEditorLocation editorLocation}.
         *
         * Relative or absolute URL where the editor is available. Must be on the same server. **Note:** Any attempts
         * to set this property after the first rendering will not have any effect.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `'js/tiny_mce4/tinymce.js'`.
         */
        setEditorLocation(
          /**
           * New value for property `editorLocation`
           */
          sEditorLocation?: string
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Switches the editor type and sets the default settings for the editor. All plugins and button groups
         * should be set after this has been invoked
         */
        setEditorType(
          /**
           * Which editor type to be used (currently only TinyMCE 3 and 4)
           */
          sEditorType?: string
        ): object;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Height of RichTextEditor control in CSS units. **Note:** If the height property results in a value smaller
         * than 200px, the minimum height of 200px will be applied.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight?: sap.ui.core.CSSSize
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets the plugins to the editor.
         */
        setPlugins(
          /**
           * Array of names or objects containing the plugin information
           */
          aPlugins?: any[]
        ): object;
        /**
         * Sets a new value for property {@link #getRequired required}.
         *
         * Determines whether a value is required.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setRequired(
          /**
           * New value for property `required`
           */
          bRequired?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getSanitizeValue sanitizeValue}.
         *
         * Determines whether to run the HTML sanitizer once the value (HTML markup) is applied or not. To configure
         * allowed URLs please use the whitelist API via `jQuery.sap.addUrlWhitelist`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSanitizeValue(
          /**
           * New value for property `sanitizeValue`
           */
          bSanitizeValue?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupClipboard showGroupClipboard}.
         *
         * Determines whether the toolbar button group containing commands like Cut, Copy and Paste is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowGroupClipboard(
          /**
           * New value for property `showGroupClipboard`
           */
          bShowGroupClipboard?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupFont showGroupFont}.
         *
         * Determines whether the toolbar button group containing commands like Font, Font Size and Colors is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowGroupFont(
          /**
           * New value for property `showGroupFont`
           */
          bShowGroupFont?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupFontStyle showGroupFontStyle}.
         *
         * Determines whether the toolbar button group containing commands like Bold, Italic, Underline and Strikethrough
         * is available. Changing this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowGroupFontStyle(
          /**
           * New value for property `showGroupFontStyle`
           */
          bShowGroupFontStyle?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupInsert showGroupInsert}.
         *
         * Determines whether the toolbar button group containing commands like Insert Image and Insert Smiley is
         * available. Changing this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowGroupInsert(
          /**
           * New value for property `showGroupInsert`
           */
          bShowGroupInsert?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupLink showGroupLink}.
         *
         * Determines whether the toolbar button group containing commands like Create Link and Remove Link is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowGroupLink(
          /**
           * New value for property `showGroupLink`
           */
          bShowGroupLink?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupStructure showGroupStructure}.
         *
         * Determines whether the toolbar button group containing commands like Bullets and Indentation is available.
         * Changing this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowGroupStructure(
          /**
           * New value for property `showGroupStructure`
           */
          bShowGroupStructure?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupTextAlign showGroupTextAlign}.
         *
         * Determines whether the toolbar button group containing text alignment commands is available. Changing
         * this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowGroupTextAlign(
          /**
           * New value for property `showGroupTextAlign`
           */
          bShowGroupTextAlign?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getShowGroupUndo showGroupUndo}.
         *
         * Determines whether the toolbar button group containing commands like Undo and Redo is available. Changing
         * this after the initial rendering will result in some visible redrawing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowGroupUndo(
          /**
           * New value for property `showGroupUndo`
           */
          bShowGroupUndo?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * The text direction
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Inherit`.
         */
        setTextDirection(
          /**
           * New value for property `textDirection`
           */
          sTextDirection?: sap.ui.core.TextDirection
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getUseLegacyTheme useLegacyTheme}.
         *
         * Determines whether or not to use the legacy theme for the toolbar buttons. If this is set to false, the
         * default theme for the editor will be used (which might change slightly with every update). The legacy
         * theme has the disadvantage that not all functionality has its own icon, so using non default buttons
         * might lead to invisible buttons with the legacy theme - use the default editor theme in this case.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUseLegacyTheme(
          /**
           * New value for property `useLegacyTheme`
           */
          bUseLegacyTheme?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * An HTML string representing the editor content. Because this is HTML, the value cannot be generically
         * escaped to prevent cross-site scripting, so the application is responsible for doing so. Overwriting
         * this property would also reset editor's Undo manager and buttons "Undo"/"Redo" would be set to their
         * initial state.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setValue(
          /**
           * New value for property `value`
           */
          sValue?: string
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of RichTextEditor control in CSS units.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth?: sap.ui.core.CSSSize
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Sets a new value for property {@link #getWrapping wrapping}.
         *
         * Determines whether the text in the editor is wrapped. This does not affect the editor's value, only the
         * representation in the control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setWrapping(
          /**
           * New value for property `wrapping`
           */
          bWrapping?: boolean
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:beforeEditorInit beforeEditorInit} event of
         * this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * This event is fired right before the TinyMCE instance is created and can be used to change the settings
         * object that will be given to TinyMCE. The parameter "configuration" is the javascript oject that will
         * be given to TinyMCE upon first instantiation. The configuration parameter contains a map that can be
         * changed in the case of TinyMCE.
         */
        attachBeforeEditorInit(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter
         * key is pressed.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:ready ready} event of this `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * Fired when the used editor is loaded and ready (its HTML is also created).
         */
        attachReady(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:readyRecurring readyRecurring} event of this
         * `sap.ui.richtexteditor.RichTextEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.richtexteditor.RichTextEditor` itself.
         *
         * Analogous to the ready event, the event is fired when the used editor is loaded and ready. But the event
         * is fired after every time the control is ready to use and not only once like the ready event.
         */
        attachReadyRecurring(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.richtexteditor.RichTextEditor`
           * itself
           */
          oListener?: object
        ): sap.ui.richtexteditor.RichTextEditor;
      }
      /**
       * Determines which editor component should be used for editing the text.
       */
      enum EditorType {
        /**
         * Uses TinyMCE version 3 as editor (default)
         */
        TinyMCE,
        /**
         * Uses TinyMCE version 4 as editor
         */
        TinyMCE4
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/richtexteditor/RichTextEditor": undefined;

    "sap/ui/richtexteditor/IToolbar": undefined;
  }
}
