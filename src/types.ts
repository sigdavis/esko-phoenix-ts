// Phoenix API Complete Type Definitions
// ============================================

// Configuration
export interface PhoenixConfig {
	host: string;
	port?: number;
	basePath?: string;
	timeout?: number;
	headers?: Record<string, string>;
}

// Base Response Types
export interface ResponseEntity {
	message?: string;
	status?: string;
	error?: string;
	code?: number;
	details?: any;
}

export interface PropertyObject {
	name: string;
	type: string;
	value: any;
	description?: string;
}

export interface Point {
	x: number;
	y: number;
}

export interface Margins {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
}

export type CostUnits = "PerSheet" | "PerThousandSheets" | "PerSquareMeter" | "PerSquareFoot";

// Project Entities
export interface PhoenixProject {
	id: string;
	name: string;
	client?: string;
	contact?: string;
	notes?: string;
	status?: string;
	"created-date"?: string;
	"modified-date"?: string;
	"external-id"?: string;
	properties?: PropertyObject[];
}

export interface JobFilesEntity {
	id?: string;
	name?: string;
	path?: string;
	uri?: string;
	size?: number;
	"created-date"?: string;
	"modified-date"?: string;
	type?: string;
	content?: any;
	properties?: PropertyObject[];
}

// Product Entities
export interface ProductEntity {
	id?: string;
	index?: number;
	name?: string;
	"external-id"?: string;
	quantity?: number;
	ordered?: number;
	priority?: number;
	"due-date"?: string;
	"product-type"?: string;
	notes?: string;
	thumbnail?: string;
	properties?: PropertyObject[];
}

export interface FlatProductEntity extends ProductEntity {
	width?: string;
	height?: string;
	pages?: number;
	"bleed-top"?: string;
	"bleed-bottom"?: string;
	"bleed-left"?: string;
	"bleed-right"?: string;
}

export interface BoundProductEntity extends ProductEntity {
	width?: string;
	height?: string;
	pages?: number;
	"binding-edge"?: "Top" | "Bottom" | "Left" | "Right";
	"binding-type"?: string;
	"bleed-head"?: string;
	"bleed-foot"?: string;
	"bleed-face"?: string;
	"bleed-spine"?: string;
}

export interface FoldedProductEntity extends ProductEntity {
	"folding-catalog"?: string;
	"folding-item"?: string;
	"finished-width"?: string;
	"finished-height"?: string;
	bleed?: string;
}

export interface TiledProductEntity extends ProductEntity {
	width?: string;
	height?: string;
	"tile-width"?: string;
	"tile-height"?: string;
	"tile-overlap"?: string;
	bleed?: string;
}

export interface PartProductEntity extends ProductEntity {
	"component-id"?: string;
	"cad-file"?: string;
	"print-file"?: string;
	transform?: any;
}

// Layout Entities
export interface LayoutEntity {
	id?: string;
	index?: number;
	name?: string;
	"layout-type"?: string;
	surface?: SurfaceEntity;
	"surface-front"?: SurfaceEntity;
	"surface-back"?: SurfaceEntity;
	properties?: PropertyObject[];
}

export interface SurfaceEntity {
	width?: number;
	height?: number;
	components?: ComponentEntity[];
	marks?: MarkInstanceEntity[];
	thumbnail?: string;
	preview?: string;
	properties?: PropertyObject[];
}

export interface ComponentEntity {
	id?: string;
	name?: string;
	"product-id"?: string;
	x?: number;
	y?: number;
	rotation?: number;
	scale?: number;
	locked?: boolean;
	"page-number"?: number;
	properties?: PropertyObject[];
}

export interface MarkInstanceEntity {
	"mark-id"?: string;
	x?: number;
	y?: number;
	rotation?: number;
	scale?: number;
	properties?: PropertyObject[];
}

// Library Entities
export interface StockEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	vendor?: string;
	category?: string;
	"web-width"?: string;
	grain?: "Long" | "Short" | "None";
	weight?: number;
	thickness?: string;
	properties?: PropertyObject[];
}

export interface GradeEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	color?: string;
	finish?: string;
	coating?: string;
	properties?: PropertyObject[];
}

export interface CoatingEntity {
	id?: string;
	name: string;
	description?: string;
	"external-id"?: string;
	path?: string;
	type?: string;
	manufacturer?: string;
	properties?: PropertyObject[];
}

export interface SubstrateEntity {
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

export interface ProcessEntity {
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

// Action Resources
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
}

export interface PopulateResource {
	idref?: number;
	"layout-index": number;
	products?: string[];
	"auto-arrange"?: boolean;
	templates?: string[];
}

export interface PlaceComponentResource {
	"component-name"?: string;
	component?: string;
	layout?: number;
	x: number;
	y: number;
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
	"stop-minutes"?: number;
}

export interface AutosnapResource {
	idref?: number;
	ink?: string;
	layer?: string;
}

export interface StepRepeatResource {
	idref?: number;
	"product-name": string;
	x?: string;
	y?: string;
	settings?: StepRepeatSettings;
}

export interface StepRepeatSettings {
	columns?: number;
	rows?: number;
	"horizontal-gap"?: string;
	"vertical-gap"?: string;
	stagger?: "None" | "Horizontal" | "Vertical";
	"sheet-margins"?: Margins;
}

export interface PlanResource {
	idref?: number;
	products?: string[];
	templates?: string[];
	sheets?: any[];
	presses?: string[];
	"stop-minutes"?: number;
}

export interface RunScriptResource {
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

// Export Resources
export interface ExportPdfResource {
	idref?: number;
	filename: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
	"include-marks"?: boolean;
	"include-dielines"?: boolean;
}

export interface ExportDxfResource {
	idref?: number;
	filename: string;
	path?: string;
	preset?: string;
	"layout-index"?: number;
	"units"?: "mm" | "inch";
}

export interface ExportReportResource {
	idref?: number;
	filename: string;
	path?: string;
	preset?: string;
	"include-layouts"?: boolean;
	"include-products"?: boolean;
}

export interface ExportJdfResource {
	idref?: number;
	filename: string;
	path?: string;
	preset?: string;
	"jdf-version"?: string;
}

// Product Creation Resources
export interface CreateFlatProductResource {
	name: string;
	width: string;
	height: string;
	quantity?: number;
	pages?: number;
	"bleed-top"?: string;
	"bleed-bottom"?: string;
	"bleed-left"?: string;
	"bleed-right"?: string;
	"external-id"?: string;
}

export interface CreateBoundProductResource {
	name: string;
	width: string;
	height: string;
	pages: number;
	quantity?: number;
	"binding-edge"?: "Top" | "Bottom" | "Left" | "Right";
	"binding-type"?: string;
	"bleed-head"?: string;
	"bleed-foot"?: string;
	"bleed-face"?: string;
	"bleed-spine"?: string;
	"external-id"?: string;
}

export interface CreateFoldedProductResource {
	name: string;
	"folding-catalog": string;
	"folding-item": string;
	quantity?: number;
	"finished-width"?: string;
	"finished-height"?: string;
	bleed?: string;
	"external-id"?: string;
}

export interface CreateTiledProductResource {
	name: string;
	width: string;
	height: string;
	"tile-width": string;
	"tile-height": string;
	quantity?: number;
	"tile-overlap"?: string;
	bleed?: string;
	"external-id"?: string;
}

export interface CreatePartProductResource {
	name: string;
	"component-id": string;
	quantity?: number;
	"cad-file"?: string;
	"print-file"?: string;
	"external-id"?: string;
}

// Result Entities
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

// Utility Types
export interface CopyProjectResource {
	"new-id": string;
	"new-name": string;
	"copy-files"?: boolean;
	"copy-products"?: boolean;
	"copy-layouts"?: boolean;
}

export interface ImportProductCsvResource {
	idref?: number;
	preset?: string;
	"csv-file": string;
	mapping?: any;
}

export interface ImportStockCsvResource {
	preset?: string;
	"csv-file": string;
}

// Request Options
export interface RequestOptions {
	method: string;
	path: string;
	body?: any;
	headers?: Record<string, string>;
	timeout?: number;
}