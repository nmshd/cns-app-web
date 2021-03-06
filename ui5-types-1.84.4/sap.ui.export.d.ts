// For Library Version: 1.84.3

declare namespace sap {



 namespace ui {


/**
 * UI5 library: sap.ui.export - document export utilities
 */
 export { expоrt as export }
namespace expоrt {




/**
 * @SINCE 1.50
 */
class Spreadsheet{
/**
 * Creates a new spreadsheet export object. Use this object to build and download a spreadsheet file in
 * Office Open XML Spreadsheet format from tabular data. This functionality is normally used together with
 * UI5 tables.
 * 
 * Overview: The class builds a spreadsheet in an Office Open XML Spreadsheet format using tabular data
 * from a specified data source. Data is retrieved and the document is built asynchronously in a worker
 * thread of the browser. The status of the process is visually presented to the user in a progress dialog
 * that can be suppressed. The user can cancel the process with the Cancel button of the dialog.
 * 
 * This class provides a low level API for spreadsheet export. The {@link sap.ui.comp.smarttable.SmartTable}
 * control implements it internally and provides the export functionality out of the box. For special cases,
 * please refer to details below.
 * 
 * Optional features:  
 * 	 - Suppress the progress dialog. 
 * 	 - Suppress worker and run the document generation process in a main thread. 
 * 	 - Configure the exported file name. 
 * 
 * Export settings object: Export settings should be provided in the constructor as an `mSettings` property
 * map with the following fields:  
 * 	 - `workbook` - Spreadsheet properties object 
 * 	`workbook.columns` - Array of column configurations. Each column configuration is an object with the
 * following fields: 
 * 	`label` (string) - Column header text 
 * 	 - `property` (string) - Field name or Array of field names in the data source feed 
 * 	 - `type` (string) - Optional data type of the field. See {@link sap.ui.export.EdmType} for the list
 * 			of supported types. If this property is omitted, the property is processed as a string field. 
 * 	 - `width` (number) - Optional width of the column in characters. There is no 1:1 correspondence between
 * 			character widths in the exported spreadsheet and CSS units.The width of one character is approximately
 * 			0.5em in CSS units, depending on the fonts that are used in the table and in the resulting spreadsheet.
 * 			The default value is 10 characters. 
 * 	 - `textAlign` (string) - Horizontal alignment of cell contents. The following values of the CSS `text-align`
 * 			property are accepted: `[left, right, center, begin, end]`. If not specified, the columns are horizontally
 * 			aligned based on the property type. 
 * 	 - `scale` (number) - Number of digits after decimal point for numeric values 
 * 	 - `delimiter` (boolean) - Set to `true` to display thousands separators in numeric values. The default
 * 			value is `false`. 
 * 	 - `unit` (string) - Text to display as the unit of measurement or currency next to the numeric value.
 * 			It is treated as a string and has no influence on the value itself. For example, a value of 150 with
 * 			the unit "%" is still 150 and not 1.5, as a user may expect. 
 * 	 - `unitProperty` (string) - Name of the data source field that contains the unit/currency text 
 * 	 - `displayUnit` (boolean) - The property applies to currency values only and defines if the currency
 * 			is shown in the column. The default value is `true`. 
 * 	 - `trueValue` (string) - Textual representation of a boolean type that has the value `true` 
 * 	 - `falseValue` (string) - Textual representation of a boolean type that has the value `false` 
 * 	 - `template` (string) - Formatting template that supports indexed placeholders within curly brackets
 * 			
 * 	 - `inputFormat` (string) - Formatting template for string formatted dates 
 * 	 - `valueMap` (string) - Mapping object or Map containing the values that should be mapped to a particular
 * 			key 
 * 	 - `wrap` (boolean) - Indicates if wrapping is enabled for this particular column   
 * 	 - `workbook.context` - Context object that will be applied to the generated file. It may contain the
 * 			following fields:  
 * 	 - `application` (string) - The application that creates the XLSX document (default: "SAP UI5") 
 * 	 - `version` (string) - Application version that creates the XLSX document (default: "1.84.3") 
 * 	 - `title` (string) - Title of the XLSX document (NOT the filename) 
 * 	 - `modifiedBy` (string) - User context for the XLSX document 
 * 	 - `sheetName` (string) - The label of the data sheet 
 * 	 - `metaSheetName` (string) - The label of the metadata sheet. The sheet will not be shown unless metadata
 * 			entries are provided 
 * 	 - `metainfo` (Array) - An Array of metadata groups. Each group has a name property and an items Array
 * 			which contains key/value pairs  
 * 	 - `workbook.hierarchyLevel` - Name of the property that contains the hierarchy level information of
 * 			each line item  
 * 	 - `dataSource` - Source of spreadsheet data. It can be a JSON array with row data, an URL or an OData
 * 			properties object with the following fields: 
 * 	`type` (string) - Type of the data source. Currently, only OData is supported and the value have to
 * be set to `"odata"`. 
 * 	 - `dataUrl` (string) - URL to table data on the server, including all select, filter, and search query
 * 			parameters 
 * 	 - `serviceUrl` (string) - URL to the OData service. The parameter is required for OData batch requests.
 * 			
 * 	 - `count` (number) - Count of available records on the server 
 * 	 - `useBatch` (boolean) - Set to `true` if OData batch requests are used to fetch the spreadsheet data.
 * 			In this case, `serviceUrl` and `headers` have to be specified, too. 
 * 	 - `headers` (object) - Map of HTTP request header properties. They should correspond to the HTTP request
 * 			headers that are used to obtain table data for display in the browser. 
 * 	 - `sizeLimit` (number) - Maximal allowed number of records that can be obtained from the service in
 * 			a single request   
 * 	 - `count` (number) - The maximal number of records to export. If not specified, all data from the data
 * 			source is fetched. 
 * 	 - `worker` (boolean) - Run export process in a worker thread. Set to `false` to disable worker and
 * 			run export in a main thread. This is needed, for example, if a mock server is used to provide spreadsheet
 * 			data.
 *  **Note:** In case of a strict content security policy, it is not always possible to create an export
 * worker. In this case, export runs in a main thread disregarding the `worker` value. 
 * 	 - `fileName` (string) - Optional file name for the exported file. If not specified, the spreadsheet
 * 			is exported as `export.xlsx`. 
 * 	 - `showProgress` (boolean) - Set to `false` to suppress the progress dialog 
 * 
 * Usage: To start export, create a new `sap.ui.export.Spreadsheet` object and call the `build` method.
 * Column configuration, data source, and export settings must be provided in the constructor. The `build`
 * method opens a progress dialog and starts an asynchronous export process. The export process fetches
 * data rows from the data source, builds a spreadsheet in-browser in a worker thread, and finally downloads
 * the document to the client.
 * 
 * Example: 
 * ```javascript
 * 
 *   var oSpreadsheet = new sap.ui.export.Spreadsheet(mSettings);
 *   oSpreadsheet.build();
 * ```
 * 
 * 
 * Optionally, you can attach `onprogress` event listeners to be notified about the export progress and
 * follow the completion status of the returned `Promise`.
 * 
 * Example: 
 * ```javascript
 * 
 *   var oSpreadsheet = new sap.ui.export.Spreadsheet(mSettings);
 *   oSpreadsheet.onprogress = function(iValue) {
 *   	{@link sap.base.Log#debug Log.debug}("Export: %" + iValue + " completed");
 *   };
 *   oSpreadsheet.build()
 *     .then( function() { {@link sap.base.Log#debug Log.debug}("Export is finished"); })
 *     .catch( function(sMessage) { {@link sap.base.Log#error Log.error}("Export error: " + sMessage); });
 * ```
 * 
 * 
 * Example of column configuration: 
 * ```javascript
 * 
 *   var aColumns = [];
 *   aColumns.push({
 *   	label: "Name",
 *   	property: "name"
 *   });
 *   aColumns.push({
 *     label: "Salary",
 *     property: "salary",
 *     type: "number",
 *     scale: 2
 *   });
 * 
 *   var mSettings = {
 *     workbook: {
 *       columns: aColumns,
 *       context: {
 *         application: 'Debug Test Application',
 *         version: '1.84.3',
 *         title: 'Some random title',
 *         modifiedBy: 'John Doe',
 *         metaSheetName: 'Custom metadata',
 *         metainfo: [
 *           {
 *             name: 'Grouped Properties',
 *             items: [
 *               { key: 'administrator', value: 'Foo Bar' },
 *               { key: 'user', value: 'John Doe' },
 *               { key: 'server', value: 'server.domain.local' }
 *             ]
 *           },
 *           {
 *             name: 'Another Group',
 *             items: [
 *               { key: 'property', value: 'value' },
 *               { key: 'some', value: 'text' },
 *               { key: 'fu', value: 'bar' }
 *             ]
 *           }
 *         ]
 *       },
 *       hierarchyLevel: 'level'
 *     },
 *     dataSource: mDataSource,
 *     fileName: "salary.xlsx"
 *   };
 *   var oSpreadsheet = new sap.ui.export.Spreadsheet(mSettings);
 *   oSpreadsheet.build();
 * ```
 * 
 * 
 * Limitations: For a complete list of limitations, see: {@link topic:2c641481649f44de9c1c22c9c3c49d13 Spreadsheet
 * limitations}
 * 
 * You can export only the primitive cell data types that are listed in {@link sap.ui.export.EdmType}. Icons,
 * images, check boxes, and complex controls in UI5 table cells are not supported.
 * 
 * Custom formatters in data binding are not supported.
 * 
 * The size of an exported table is limited by available browser memory. Export of large data sets can lead
 * to memory overflow errors. Therefore, do not use `sap.ui.export.Spreadsheet` with data tables containing
 * more than 2,000,000 table cells on desktop computers and more than 100,000 cells on mobile devices. Consider
 * a specialized export solution in such cases. For example, MS Excel® can import spreadsheets from an OData
 * services directly, without any UI.
 * 
 * The export process runs in a worker thread whenever possible. However, code injection to native XMLHttpRequest
 * events is not available in the worker environment. Therefore, the `worker` parameter in export settings
 * should be set to `false` if the application uses a mock server to fetch table data.
 * 
 * For exporting hierarchy level information, the maximum hierarchy depth is 8. This limitation results
 * from the Office Open XML standard and the programs that can open such files. The sap.ui.export.Spreadsheet
 * allows you to export more hierarchy levels although they might not be displayed correctly when opening
 * the generated file if the hierarchy depth exceeds the value of 8.
 * 
 * The column configuration must contain at least one column to execute the export process. If there is
 * no column configured, the export will be canceled.
 * 
 * If the export is used within a table, any row that is showing aggregated data (i.E. sum row) will not
 * be exported.
 * 
 * The properties sheetName and metaSheetName on the workbook.context object are limited to 31 characters
 * each. If their value exceeds this maximum length, the value will be truncated.
 * See:
 * 	{@link topic:2691788a08fc43f7bf269ea7c6336caf Spreadsheet}
 */
constructor (
/**
 * Export settings
 */
mSettings: {
/**
 * Spreadsheet properties
 */
workbook: {
/**
 * Column configuration
 */
columns: any
/**
 * Export context that will be applied to the exported file
 */
context: {
/**
 * Application that created this XLSX
 */
application?: string
/**
 * Application version that was used to create this XLSX
 */
version?: string
/**
 * Title of the XLSX document (NOT the file name)
 */
title?: string
/**
 * User context for the exported document
 */
modifiedBy?: string
/**
 * The name of the data sheet that will be shown in Excel
 */
sheetName?: string
/**
 * The name of the metadata sheet that will be shown in Excel
 */
metaSheetName?: string
/**
 * Optional Metadata that will be displayed in the additional Metadata Sheet
 */
metainfo?: any
}

/**
 * Optional name of the property that contains hierarchy level information
 */
hierarchyLevel?: string
}

/**
 * Source of spreadsheet data. A JSON array, data source properties map, `sap.ui.model.ListBinding`, `sap.ui.model.TreeBinding`
 * or URL to an OData source can be provided. For example, `"someUrl"` is an equivalent to `{dataUrl:"someUrl",
 * type:"OData"}`. An instance of `sap.ui.model.ListBinding` or `sap.ui.model.TreeBinding` either has to
 * implement a `#getDownloadUrl` function or needs to be a ClientListBinding. **Note:** `sap.ui.model.ClientTreeBinding`
 * is not supported.
 */
dataSource: {
/**
 * Maximal allowed number of records that can be obtained from the service in a single request
 */
sizeLimit: number
}

/**
 * The maximal number of records to export
 */
count?: number
/**
 * Run export process in a worker thread. Set to `false` to disable worker and run export in a main thread.
 * This is needed, for example, if a mock server is used to provide spreadsheet data.
 *  **Note:** In case of a strict content security policy, it is not always possible to create an export
 * worker. In this case, export runs in a main thread disregarding the `worker` value.
 */
worker?: boolean
/**
 * Optional file name for the exported file
 */
fileName?: string
/**
 * Set to `false` to suppress the progress dialog
 */
showProgress?: boolean
}

)

/**
 * @SINCE 1.74
 * 
 * Attaches event handler `fnFunction` to the {@link sap.ui.export.Spreadsheet#event:beforeExport} event
 * of this `sap.ui.export.Spreadsheet`.
 *  When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
 * otherwise it will be bound to this `sap.ui.export.Spreadsheet` itself.
 *  This event is fired just before the export process is started.
 */
attachBeforeExport (
/**
 * An application-specific payload object that will be passed to the event handler along with the event
 * object when firing the event
 */
oData: object,
/**
 * The function to be called when the event occurs
 */
fnHandler: Function,
/**
 * Context object to call the event handler with. Defaults to the `sap.ui.export.Spreadsheet` instance itself
 */
oListener?: object
):sap.ui.export.Spreadsheet
/**
 * @SINCE 1.61
 * 
 * Attaches event handler `fnFunction` to the {@link sap.ui.export.Spreadsheet#event:beforeSave} event of
 * this `sap.ui.export.Spreadsheet`.
 *  When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
 * otherwise it will be bound to this `sap.ui.export.Spreadsheet` itself.
 *  This event is fired just before the generated file is saved to the file system.
 */
attachBeforeSave (
/**
 * An application-specific payload object that will be passed to the event handler along with the event
 * object when firing the event
 */
oData: object,
/**
 * The function to be called when the event occurs
 */
fnHandler: Function,
/**
 * Context object to call the event handler with. Defaults to this `sap.ui.export.Spreadsheet` itself
 */
oListener?: object
):sap.ui.export.Spreadsheet
/**
 * Loads data from the backend, builds and saves the resulting spreadsheet file. You can use the `cancel`
 * method to stop a running export.
 */
build (

):any
/**
 * @SINCE 1.52
 * 
 * Cancels a running export process. This method does nothing if no export is running.
 */
cancel (

):Spreadsheet
/**
 * @SINCE 1.74
 * 
 * Detaches event handler `fnFunction` from the {@link sap.ui.export.Spreadsheet#event:beforeExport} event
 * of this `sap.ui.export.Spreadsheet`.
 *  The passed function and listener object must match the ones used for event registration.
 */
detachBeforeExport (
/**
 * The function to be called when the event occurs
 */
fnHandler: Function,
/**
 * Context object on which the given function had to be called
 */
oListener?: object
):sap.ui.export.Spreadsheet
/**
 * @SINCE 1.61
 * 
 * Detaches event handler `fnFunction` from the {@link sap.ui.export.Spreadsheet beforeSave} event of this
 * `sap.ui.export.Spreadsheet`.
 *  The passed function and listener object must match the ones used for event registration.
 */
detachBeforeSave (
/**
 * The function to be called, when the event occurs
 */
fnHandler: Function,
/**
 * Context object on which the given function had to be called
 */
oListener?: object
):sap.ui.export.Spreadsheet
/**
 * @SINCE 1.74
 * 
 * Attaches event handler `fnFunction` to the {@link sap.ui.export.Spreadsheet#event:beforeExport} event
 * of this `sap.ui.export.Spreadsheet`.
 *  When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
 * otherwise it will be bound to this `sap.ui.export.Spreadsheet` itself.
 *  This event is fired just before the export process is started.
 */
attachBeforeExport (
/**
 * The function to be called when the event occurs
 */
fnHandler: Function,
/**
 * Context object to call the event handler with. Defaults to the `sap.ui.export.Spreadsheet` instance itself
 */
oListener?: object
):sap.ui.export.Spreadsheet
/**
 * @SINCE 1.61
 * 
 * Attaches event handler `fnFunction` to the {@link sap.ui.export.Spreadsheet#event:beforeSave} event of
 * this `sap.ui.export.Spreadsheet`.
 *  When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
 * otherwise it will be bound to this `sap.ui.export.Spreadsheet` itself.
 *  This event is fired just before the generated file is saved to the file system.
 */
attachBeforeSave (
/**
 * The function to be called when the event occurs
 */
fnHandler: Function,
/**
 * Context object to call the event handler with. Defaults to this `sap.ui.export.Spreadsheet` itself
 */
oListener?: object
):sap.ui.export.Spreadsheet
}
/**
 * @SINCE 1.50.0
 * 
 * EDM data types for document export.
 */
enum EdmType {
/**
 * Property of type BigNumber.
 */
BigNumber,
/**
 * Property of type Boolean.
 */
Boolean,
/**
 * Property of type Currency
 */
Currency,
/**
 * Property of type Date.
 */
Date,
/**
 * Property of type DateTime.
 */
DateTime,
/**
 * Property of type Enumeration.
 */
Enumeration,
/**
 * Property of type Number.
 */
Number,
/**
 * Property of type string.
 */
String,
/**
 * Property of type Time.
 */
Time,
}
/**
 * @SINCE 1.78
 * 
 * File types for document export.
 */
enum FileType {
/**
 * Comma separated file type.
 */
CSV,
/**
 * Office Open XML - SpreadsheetML file type.
 */
XLSX,
}
}



}

interface IUI5DefineDependencyNames{

"sap/ui/export/Spreadsheet" : undefined


}


}
