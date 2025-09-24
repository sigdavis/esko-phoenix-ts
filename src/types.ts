export interface PhoenixConfig {
	host: string;
	port: number;
	basePath?: string;
	timeout?: number;
	headers?: Record<string, string>;
}

// Core Response Types
export interface MessageEntity {
	id?: number;
	text?: string;
	action?: string;
}

export interface ResponseEntity {
	success: boolean;
	"status-code"?: number;
	errors?: MessageEntity[];
	warnings?: MessageEntity[];
	resources?: string[];
}

// Property Types
export interface PropertyObject {
	name: string;
	type:
		| "String"
		| "Integer"
		| "Long"
		| "Double"
		| "Boolean"
		| "Scalar"
		| "Size"
		| "Date"
		| "IntegerRange"
		| "DoubleRange"
		| "ScalarRange"
		| "DateRange"
		| "Margins"
		| "PlacementRule"
		| "Enum"
		| "Matcher"
		| "TextList"
		| "ScalarList"
		| "List"
		| "AssetRef"
		| "Object"
		| "Link";
	value?: any;
}

// Basic Geometric Types
export interface Point {
	x: number;
	y: number;
}

export interface Margins {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
}

export interface ScalarRange {
	min?: number;
	max?: number;
}

// Resource Types
export interface Resource {
	name?: string;
	path?: string;
	id?: string;
	asset?: any;
}

export interface Process {
	name?: string;
	type?: string;
}

export interface Material {
	stock: Resource;
	"grade-id"?: string;
}

export interface Reference {
	id?: string;
	path?: string;
}

// Layout and Spacing Types
export interface Spacing {
	x?: string;
	y?: string;
}

export interface Rotation {
	allowed?: "Any" | "Orthogonal" | "None" | "Custom";
	angles?: string;
}

export interface Bleed {
	type?: "Margins" | "Contour" | "CAD" | "None";
	margin?: string;
	margins?: Margins;
}

export interface Offcut {
	enabled?: boolean;
	size?: string;
}

// ============================================
// PART 3: PROJECT AND JOB export interfaceS
// ============================================

export interface CreateJobResource {
	id: string;
	name?: string;
	contact?: string;
	phone?: string;
	client?: string;
	notes?: string;
	units?: string;
	idref?: number;
	"template-path"?: string;
	properties?: PropertyObject[];
}

export interface EditProjectResource {
	name?: string;
	contact?: string;
	phone?: string;
	client?: string;
	notes?: string;
	units?: string;
	properties?: PropertyObject[];
}

export interface PhoenixProject {
	id?: string;
	name?: string;
	contact?: string;
	phone?: string;
	client?: string;
	notes?: string;
	units?: string;
	properties?: PropertyObject[];
	products?: PhoenixProductEntity[];
	layouts?: LayoutEntity[];
}

export interface PhoenixProductEntity {
	index?: number;
	name: string;
	color?: string;
	ordered?: number;
	description?: string;
	notes?: string;
	"die-name"?: string;
	"die-source"?: string;
	"die-path"?: string;
	stock?: string;
	grade?: string;
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	width?: string;
	height?: string;
	properties?: PropertyObject[];
	// V2 specific fields
	type?: "Flat" | "Tiled" | "Folded" | "Bound";
	pages?: Page[];
	"page-count"?: number;
	"binding-method"?: string;
}

export interface LayoutEntity {
	id?: string;
	index?: number;
	name?: string;
	width?: number;
	height?: number;
	efficiency?: number;
	"run-length"?: number;
	"total-components"?: number;
	"waste-percentage"?: number;
	properties?: PropertyObject[];
	surfaces?: SurfaceEntity[];
	front?: SurfaceEntity;
	back?: SurfaceEntity;
}

export interface SurfaceEntity {
	type?: string;
	components?: ComponentEntity[];
	marks?: MarkEntity[];
}

export interface ComponentEntity {
	id?: string;
	name?: string;
	x?: number;
	y?: number;
	rotation?: number;
	scale?: number;
}

// ============================================
// PART 4: PRODUCT CREATION export interfaceS
// ============================================

export type DieShapeSource = "CAD" | "ArtworkPaths" | "ArtworkTrimbox" | "CustomSize" | "DieDesignLibrary" | "PdfPlus";

export interface CreateFlatProductResource {
	name: string;
	quantity?: number;
	"due-date"?: string;
	group?: string;
	priority?: number;
	overruns?: ScalarRange;
	color?: string;
	description?: string;
	notes?: string;
	width?: string;
	height?: string;
	"scale-proportionally"?: boolean;
	artwork?: string;
	page?: number;
	"back-artwork"?: string;
	"back-page"?: number;
	"dieshape-source"?: DieShapeSource;
	"die-design"?: string;
	"cad-file"?: string;
	"cad-design"?: string;
	"shape-handling"?: "Largest" | "Multiple";
	"page-handling"?: "OnePerFile" | "OnePerPage" | "OnePerTwoPages";
	"front-to-back"?: "None" | "Copy" | "Mirror";
	"bleed-type"?: "Margins" | "Contour" | "CAD" | "None";
	"bleed-margin"?: string;
	"bleed-margins"?: Margins;
	"color-source"?: "Artwork" | "Specified";
	"color-analysis"?: "Fast" | "Raster";
	"color-detection"?: "Cut" | "Bleed";
	colors?: PageColorResource[];
	"back-colors"?: PageColorResource[];
	"autosnap-ink"?: string;
	"autosnap-layer"?: string;
	"back-autosnap-ink"?: string;
	"back-autosnap-layer"?: string;
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	rotation?: "Any" | "Orthogonal" | "None" | "Custom";
	"allowed-rotations"?: string;
	templates?: string[];
	"bundle-size"?: number;
	"max-bundle-splits"?: number;
	"process-settings"?: ProcessSettingResource[];
	stock?: string;
	grade?: string;
	properties?: PropertyObject[];
}

export interface CreateBoundProductResource extends CreateFlatProductResource {
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	"pages-per-section"?: number;
	"page-count"?: number;
	pages?: CreatePagesResource;
}

export interface CreateFoldedProductResource extends CreateFlatProductResource {
	"folding-pattern"?: FoldingPatternRef;
	"pages-per-section"?: number;
	"page-count"?: number;
	pages?: CreatePagesResource;
}

export interface CreateTiledProductResource extends CreateFlatProductResource {
	"tile-width"?: string;
	"tile-height"?: string;
	"overlap-x"?: string;
	"overlap-y"?: string;
	"number-of-tiles"?: number;
}

export interface PageColorResource {
	name?: string;
	process?: Process;
	values?: number[];
}

export interface PageColor {
	visible?: boolean;
	name?: string;
	cyan?: number;
	magenta?: number;
	yellow?: number;
	black?: number;
	process?: Process;
	values?: number[];
}

export interface PageLayer {
	visible?: boolean;
	name?: string;
	language?: string;
	locked?: boolean;
}

export interface Page {
	id?: string;
	name?: string;
	size?: Resource;
	position?: Point;
	rotation?: number;
	visible?: boolean;
	locked?: boolean;
	colors?: PageColor[];
	layers?: PageLayer[];
}

export interface CreatePagesResource {
	size?: Resource;
	bleed?: Margins;
	count?: number;
}

export interface ProcessSettingResource {
	process: Process;
	"mode-value"?: number;
	"process-types"?: any[];
	things?: any[];
}

export interface FoldingPatternRef {
	id?: string;
	name?: string;
	path?: string;
}

// ============================================
// PART 5: LIBRARY ENTITY export interfaceS
// ============================================

// V2 Stock export interfaces
export interface Stock {
	id?: string;
	name: string;
	"created-on"?: string;
	"modified-on"?: string;
	version?: string;
	description?: string;
	notes?: string;
	"external-id"?: string;
	"stock-type"?: Reference;
	vendor?: string;
	grades?: Grade[];
	path?: string;
	properties?: PropertyObject[];
}

export interface StockType {
	id?: string;
	name: string;
	"created-on"?: string;
	"modified-on"?: string;
	version?: string;
	description?: string;
	notes?: string;
	"external-id"?: string;
	category?: string;
	"stock-capabilities"?: StockCapabilities;
	properties?: PropertyObject[];
	path?: string;
}

export interface StockCapabilities {
	"stock-types"?: Reference;
	"specific-stocks"?: Reference;
	properties?: PropertyObject[];
}

export interface Grade {
	id?: string;
	name?: string;
	"created-on"?: string;
	"modified-on"?: string;
	version?: string;
	description?: string;
	notes?: string;
	"external-id"?: string;
	"grade-display"?: "Weight" | "Caliper" | "Both";
	weight?: number;
	"weight-units"?: "GSM" | "Lb";
	"weight-type"?: "Text" | "Book" | "Bond" | "Offset" | "Cover" | "Bristol" | "Index" | "Tag" | "Card";
	caliper?: string;
	cost?: number;
	"cost-units"?: CostUnits;
	"any-sheet-size"?: boolean;
	sheets?: Sheet[];
	rolls?: Roll[];
	path?: string;
	properties?: PropertyObject[];
}

export interface Sheet {
	id?: string;
	name?: string;
	"created-on"?: string;
	"modified-on"?: string;
	version?: string;
	description?: string;
	notes?: string;
	"external-id"?: string;
	dimension1?: string;
	dimension2?: string;
	cost?: number;
	"cost-units"?: CostUnits;
	grain?: "Long" | "Short" | "None";
	type?: "Sheet" | "Roll";
	path?: string;
	properties?: PropertyObject[];
}

export interface Roll {
	id?: string;
	name?: string;
	"created-on"?: string;
	"modified-on"?: string;
	version?: string;
	description?: string;
	notes?: string;
	"external-id"?: string;
	"stock-id"?: string;
	"grade-id"?: string;
	width?: string;
	cost?: number;
	"cost-units"?: CostUnits;
	grain?: "AlongRoll" | "AcrossRoll" | "None";
	path?: string;
	properties?: PropertyObject[];
}

type CostUnits =
	| "FromGrade"
	| "PerSheet"
	| "Per500Sheets"
	| "Per1000Sheets"
	| "PerLb"
	| "Per500Lb"
	| "Per1000Lb"
	| "PerKg"
	| "Per1000Kg"
	| "PerFt2"
	| "PerM2"
	| "PerFt"
	| "PerM"
	| "PerMSF"
	| "PerMSI";

// Legacy Stock Entity (for backward compatibility)
export interface StockEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	manufacturer?: string;
	type?: string;
	grades?: any[];
	properties?: PropertyObject[];
}

export interface PlateEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	width?: string;
	height?: string;
	thickness?: string;
	material?: string;
	properties?: PropertyObject[];
}

export interface PressEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	type?: string;
	manufacturer?: string;
	"max-sheet-width"?: string;
	"max-sheet-height"?: string;
	"max-image-width"?: string;
	"max-image-height"?: string;
	"min-sheet-width"?: string;
	"min-sheet-height"?: string;
	properties?: PropertyObject[];
}

export interface ProcessTypeEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	category?: string;
	properties?: PropertyObject[];
}

export interface ModeEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	type?: string;
	properties?: PropertyObject[];
}

export interface MarkEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	type?: string;
	smart: boolean;
	anchor?: "Plate" | "Sheet" | "Group" | "Product";
	properties?: PropertyObject[];
}

export interface ScriptAsset {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	content?: string;
	language?: string;
	properties?: PropertyObject[];
}

export interface TilingEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	"tile-width"?: string;
	"tile-height"?: string;
	"overlap-x"?: string;
	"overlap-y"?: string;
	properties?: PropertyObject[];
}

export interface DieDesignEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	width?: string;
	height?: string;
	properties?: PropertyObject[];
}

export interface TemplateEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	"template-type"?: string;
	properties?: PropertyObject[];
}

export interface SheetEntity {
	id?: string;
	name: string;
	dimension1?: string;
	dimension2?: string;
	"stock-id"?: string;
	"grade-id"?: string;
	cost?: number;
	"cost-units"?: CostUnits;
	grain?: "Long" | "Short" | "None";
	properties?: PropertyObject[];
}

export interface PresetEntity {
	id?: string;
	name: string;
	description?: string;
	"preset-type"?: string;
	configuration?: any;
	properties?: PropertyObject[];
}

export interface ImpositionAiProfileEntity {
	id?: string;
	name?: string;
	description?: string;
	"layout-options"?: any;
	"sheet-options"?: any;
	"plan-options"?: any;
	"web-options"?: any;
	"applying-options"?: any;
	"plan-rules"?: any;
	scripts?: any[];
	properties?: PropertyObject[];
}

// ============================================
// PART 6: ACTION RESOURCE export interfaceS
// ============================================

export interface ImposeResource {
	idref?: number;
	preset?: string;
	"layout-name"?: string;
	"auto-rotate"?: boolean;
	"minimize-waste"?: boolean;
	constraints?: any;
	products?: string[];
	templates?: string[];
	"bundle-size"?: number;
	"stop-minutes"?: number;
	profiles?: string[];
	"profiles-inline"?: ImpositionAiProfileEntity[];
}

export interface PopulateResource {
	idref?: number;
	"layout-index": number;
	products?: string[];
	"auto-arrange"?: boolean;
	templates?: string[];
	profiles?: string[];
	"profiles-inline"?: ImpositionAiProfileEntity[];
	"stop-minutes"?: number;
}

export interface PlaceComponentResource {
	"component-name"?: string;
	component?: string;
	layout?: number;
	"layout-index"?: number;
	x: number;
	y: number;
	position?: Point;
	rotation?: number;
	scale?: number;
}

export interface MoveComponentResource {
	x: number;
	y: number;
	relative?: boolean;
}

export interface RotateComponentResource {
	angle: number;
	relative?: boolean;
}

export interface OptimizeResource {
	idref?: number;
	products?: string[];
	templates?: string[];
	sheets?: any[];
	presses?: string[];
	profiles?: string[];
	"profiles-inline"?: any[];
	"stop-minutes"?: number;
}

export interface StepRepeatResource {
	idref?: number;
	"product-name": string;
	x?: string;
	y?: string;
	settings: StepRepeatSettings;
}

export interface StepRepeatSettings {
	columns?: number;
	rows?: number;
	"horizontal-gap"?: string;
	"vertical-gap"?: string;
	"even-horizontal-gap"?: string;
	"even-vertical-gap"?: string;
	stagger?: "None" | "Horizontal" | "Vertical";
	"stagger-amount"?: string;
	"stagger-restart"?: number;
	"horizontal-fill"?: "None" | "Pack" | "Expand" | "Wrap";
	"vertical-fill"?: "None" | "Pack" | "Expand" | "Wrap";
	"sheet-margins"?: Margins;
	"bleed-offset"?: string;
}

export interface PlanResource {
	idref?: number;
	products?: string[];
	templates?: string[];
	sheets?: any[];
	presses?: string[];
	profiles?: string[];
	"profiles-inline"?: any[];
	"stop-minutes"?: number;
}

export interface PlanResultEntity {
	id?: number;
	efficiency?: number;
	"run-length"?: number;
	layouts?: LayoutResultEntity[];
}

export interface LayoutResultEntity {
	id?: string;
	index?: number;
	name?: string;
	width?: number;
	height?: number;
	efficiency?: number;
	"run-length"?: number;
	"total-components"?: number;
	"waste-percentage"?: number;
	properties?: PropertyObject[];
}

export interface RunScriptResource {
	idref?: number;
	script?: string;
	name?: string;
	parameters?: PropertyObject[];
}

export interface SetSheetResource {
	idref?: number;
	stock: string;
	grade: string;
	name: string;
}

export interface SetPlateResource {
	idref?: number;
	name: string;
}

export interface SetPressResource {
	idref?: number;
	name: string;
}

export interface ResizeSheetResource {
	width?: string;
	height?: string;
}

export interface CopyJobResource {
	"new-id": string;
	"new-name"?: string;
	"copy-files"?: boolean;
}

export interface RenameJobResource {
	"new-id": string;
	"new-name"?: string;
}

export interface AutosnapResource {
	idref?: number;
	ink?: string;
	layer?: string;
	"back-ink"?: string;
	"back-layer"?: string;
}

export interface JobFilesEntity {
	id?: string;
	name?: string;
	path?: string;
	size?: number;
	"mime-type"?: string;
	"created-at"?: string;
	"created-on"?: string;
	"modified-at"?: string;
}

// Export Resource export interfaces
export interface ExportCoverSheetResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
}

export interface ExportPdfLayoutResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
	"include-marks"?: boolean;
	"include-dielines"?: boolean;
}

export interface ExportDxfLayoutResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
}

export interface ExportMfgLayoutResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
}

export interface ExportZccLayoutResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
}

export interface ExportCff2LayoutResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
	"include-artwork"?: boolean;
}

export interface ExportHpJdfResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"include-layouts"?: boolean;
}

export interface ExportJdfResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"include-layouts"?: boolean;
}

export interface ExportXmlReportResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"include-layouts"?: boolean;
	"include-products"?: boolean;
}

export interface ExportJsonReportResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"include-layouts"?: boolean;
	"include-products"?: boolean;
}

export interface ExportCsvReportResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"include-products"?: boolean;
}

export interface ExportTilingReportResource {
	idref?: number;
	filename?: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
}

// Import Resource export interfaces
export interface ImportProductCsvResource {
	idref?: number;
	filepath?: string;
	path?: string;
	preset?: string;
	"base-folder"?: string;
	"overwrite-existing"?: boolean;
}

export interface ImportDieTemplateResource {
	idref?: number;
	filepath?: string;
	path?: string;
	preset?: string;
	name?: string;
	"overwrite-existing"?: boolean;
}

export interface ImportDieDesignResource {
	idref?: number;
	filepath?: string;
	path?: string;
	preset?: string;
	name?: string;
	"die-name"?: string;
	"overwrite-existing"?: boolean;
}

export interface ImportTemplateResource {
	idref?: number;
	filepath?: string;
	path?: string;
	preset?: string;
	name?: string;
	id?: string;
	"create-folder"?: boolean;
	"overwrite-existing"?: boolean;
}

// Additional interface definitions needed for missing API endpoints

export interface RestScriptContext {
	idref?: number;
	script?: string;
	name?: string;
	parameters?: ScriptParameter[];
}

export interface ScriptParameter {
	name: string;
	type: string;
	value: any;
}

export interface AutosnapArtworkEntity {
	idref?: number;
	"product-names"?: string[];
	"die-numbers"?: string[];
	tolerance?: number;
}

export interface SaveJobTemplateResource {
	idref?: number;
	name?: string;
	path?: string;
	"create-folder"?: boolean;
}

export interface EditLayoutResource {
	idref?: number;
	name?: string;
	workstyle?: "FlatWork" | "Sheetwise" | "Perfecting" | "WorkAndTurn" | "WorkAndTumble";
	"run-length"?: number;
	properties?: PropertyObject[];
}

export interface ApplyImposeResultResource {
	idref?: number;
}

export interface ApplyPopulateResultResource {
	idref?: number;
}

export interface ApplyPlanResultResource {
	idref?: number;
}

export interface ThingEntity {
	id?: string;
	name?: string;
	description?: string;
	type?: string;
}

export interface FoldingPatternEntity {
	id?: string;
	name?: string;
	description?: string;
	pattern?: string;
}

export interface MarkSetEntity {
	id?: string;
	name?: string;
	description?: string;
	marks?: MarkEntity[];
}

// Additional export interfaces for completeness
export interface Sheet {
	id?: string;
	name?: string;
	width?: number;
	height?: number;
	orientation?: "Portrait" | "Landscape";
}

export interface Roll {
	id?: string;
	name?: string;
	width?: number;
	diameter?: number;
	core?: number;
}

export interface Grade {
	id?: string;
	name?: string;
	thickness?: number;
	weight?: number;
	description?: string;
}

export interface Stock {
	id?: string;
	name?: string;
	description?: string;
	manufacturer?: string;
	category?: string;
	grades?: Grade[];
}
