/**
 * Phoenix API Type Definitions - Request Types
 * Auto-generated from OpenAPI 3.0.1 specification
 * API Version: 25.03
 *
 * This file contains all request body interfaces used when making API calls.
 * All types strictly conform to the Phoenix-openapi.json specification.
 */

import {
	PropertyObject,
	ScalarValue,
	ScalarRange,
	Reference,
	Resource,
	PageColorResource,
	ProcessSettingResource,
	Size,
	Margins,
	Bleed,
	Spacing,
	Offcut,
	Rotation,
} from "./models";

// ============================================================================
// PROJECT MANAGEMENT REQUESTS
// ============================================================================

/**
 * Create Job Resource (Legacy Jobs API)
 * Used to create a new project via the Jobs API
 * Note: Jobs API will be deprecated in favor of Projects API
 */
export interface CreateJobResource {
	/** Project name */
	name?: string;
	/** Customer name */
	customer?: string;
	/** Order number */
	order?: string;
	/** Project description */
	description?: string;
	/** Project notes */
	notes?: string;
	/** Project due date (ISO 8601) */
	due?: string;
	/** External system ID */
	"external-id"?: string;
	/** Custom properties */
	properties?: PropertyObject[];
}

/**
 * Create Project Resource (Projects API)
 * Used to create a new project via the Projects API
 */
export interface CreateProjectResource {
	/** Project name */
	name?: string;
	/** Customer name */
	customer?: string;
	/** Order number */
	order?: string;
	/** Project description */
	description?: string;
	/** Project notes */
	notes?: string;
	/** Project due date (ISO 8601) */
	due?: string;
	/** External system ID */
	"external-id"?: string;
	/** Custom properties */
	properties?: PropertyObject[];
}

/**
 * Open Job Resource (Legacy Jobs API)
 * Used to open an existing project file
 */
export interface OpenJobResource {
	/** Full path to project file - Required */
	path: string;
	/** Whether to open in read-only mode */
	"read-only"?: boolean;
}

/**
 * Open Project Resource (Projects API)
 * Used to open an existing project file
 */
export interface OpenProjectResource {
	/** Full path to project file - Required */
	path: string;
	/** Whether to open in read-only mode */
	"read-only"?: boolean;
}

/**
 * Edit Project Resource
 * Used to edit an existing project's properties
 */
export interface EditProjectResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Project name */
	name?: string;
	/** Customer name */
	customer?: string;
	/** Order number */
	order?: string;
	/** Project description */
	description?: string;
	/** Project notes */
	notes?: string;
	/** Project due date (ISO 8601) */
	due?: string;
	/** External system ID */
	"external-id"?: string;
}

// ============================================================================
// PRODUCT CREATION REQUESTS (Legacy Jobs API)
// ============================================================================

/**
 * Create Product Resource (Legacy Jobs API)
 * Used to create products in the Jobs API
 * More flexible but less structured than the new Projects API
 */
export interface CreateProductResource {
	/** Product name - Required */
	name: string;
	/** Quantity to produce */
	quantity?: number;
	/** Optional type of product */
	type?: "Flat" | "Tiled" | "Folded" | "Bound";
	/** Product color (RGB or ARGB hex value) */
	color?: string;
	/** Number of product ordered */
	ordered?: number;
	/** Stock name */
	stock?: string;
	/** Grade name */
	grade?: string;
	/** Page colors for front side (flat) or all pages (bound/folded) */
	colors?: PageColorResource[];
	/** Page colors for back side (flat only) */
	"back-colors"?: PageColorResource[];
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Binding method (bound products only) */
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	/** Binding edge */
	"binding-edge"?: string;
	/** Number of pages (bound/folded products) */
	pages?: number;
	/** Number of signatures (bound products) */
	signatures?: number;
	/** Face trim amount */
	"face-trim"?: ScalarValue;
	/** Head trim amount */
	"head-trim"?: ScalarValue;
	/** Foot trim amount */
	"foot-trim"?: ScalarValue;
	/** Fore-edge trim amount */
	"fore-edge-trim"?: ScalarValue;
	/** Die design name */
	"die-design-name"?: string;
	/** Die layout name */
	"die-layout-name"?: string;
	/** Page width */
	"page-width"?: ScalarValue;
	/** Page height */
	"page-height"?: ScalarValue;
	/** Bleed amount */
	bleed?: ScalarValue;
	/** Artwork file path */
	"artwork-path"?: string;
	/** CAD file path */
	"cad-file"?: string;
	/** CAD design name */
	"cad-design"?: string;
	/** Product group for Imposition AI */
	group?: string;
	/** Product priority (1 = highest) */
	priority?: number;
	/** Product due date (ISO 8601) */
	"due-date"?: string;
	/** Bleed type */
	"bleed-type"?: "Margins" | "Contour" | "CAD" | "None";
	/** Bleed margin value */
	"bleed-margin"?: string;
	/** Shape detection mode */
	"shape-detection"?: "Largest" | "Multiple";
	/** Page handling for multi-page artwork */
	"page-handling"?: "OnePerFile" | "OnePerPage" | "OnePerTwoPages";
	/** Front to back handling */
	"front-to-back"?: "None" | "Copy" | "Mirror";
	/** Process settings */
	"process-settings"?: ProcessSettingResource[];
	/** Custom properties */
	properties?: PropertyObject[];
}

// ============================================================================
// PRODUCT CREATION REQUESTS (New Projects API)
// ============================================================================

/**
 * Base interface for create product resources (Projects API)
 * Contains common fields for all product types
 */
interface CreateProductResourceBase {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Unique product name */
	name?: string;
	/** Quantity to produce - Required */
	quantity?: number;
	/** Product due date (ISO 8601) */
	"due-date"?: string;
	/** Product group for Imposition AI */
	group?: string;
	/** Product priority (1 = highest) */
	priority?: number;
	/** Overruns specification */
	overruns?: ScalarRange;
	/** Product color (RGB or ARGB hex value) */
	color?: string;
	/** Product description */
	description?: string;
	/** Product notes */
	notes?: string;
	/** Bundle size */
	"bundle-size"?: number;
	/** Maximum bundle splits allowed */
	"max-bundle-splits"?: number;
	/** Templates reference */
	templates?: Reference;
}

/**
 * Create Flat Product Resource (Projects API)
 * Used to create flat products (business cards, labels, etc.)
 */
export interface CreateFlatProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation mode */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
	/** Page colors for front side */
	colors?: PageColorResource[];
	/** Page colors for back side */
	"back-colors"?: PageColorResource[];
	/** Process settings */
	"process-settings"?: ProcessSettingResource[];
	/** Color detection mode */
	"color-detection"?: "Cut" | "Bleed";
}

/**
 * Create Bound Product Resource (Projects API)
 * Used to create bound products (books, booklets, catalogs)
 */
export interface CreateBoundProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation mode */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
	/** Page size reference */
	"page-size"?: Resource;
	/** Binding method */
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	/** Binding edge */
	"binding-edge"?: string;
	/** Face trim amount */
	"face-trim"?: ScalarValue;
	/** Head trim amount */
	"head-trim"?: ScalarValue;
	/** Foot trim amount */
	"foot-trim"?: ScalarValue;
	/** Fore-edge trim amount */
	"fore-edge-trim"?: ScalarValue;
	/** Page colors */
	colors?: PageColorResource[];
	/** Process settings */
	"process-settings"?: ProcessSettingResource[];
	/** Color detection mode */
	"color-detection"?: "Cut" | "Bleed";
	/** Fold direction */
	"fold-direction"?: "Head" | "Foot" | "ForeEdge";
}

/**
 * Create Folded Product Resource (Projects API)
 * Used to create folded products (brochures, pamphlets)
 */
export interface CreateFoldedProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation mode */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
	/** Page colors */
	colors?: PageColorResource[];
	/** Process settings */
	"process-settings"?: ProcessSettingResource[];
	/** Color detection mode */
	"color-detection"?: "Cut" | "Bleed";
	/** Render mode */
	"render-mode"?: "Fast" | "Raster";
	/** Folding patterns */
	"folding-patterns"?: any[];
}

/**
 * Create Tiled Product Resource (Projects API)
 * Used to create tiled/paneled products
 */
export interface CreateTiledProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation mode */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
	/** Page colors for front side */
	colors?: PageColorResource[];
	/** Page colors for back side */
	"back-colors"?: PageColorResource[];
	/** Tiling reference */
	tiling?: Resource;
}

/**
 * Edit Product Resource (Projects API)
 * Used to edit an existing product's properties
 */
export interface EditProductResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Product name */
	name?: string;
	/** Quantity to produce */
	quantity?: number;
	/** Product due date (ISO 8601) */
	"due-date"?: string;
	/** Product group for Imposition AI */
	group?: string;
	/** Product priority (1 = highest) */
	priority?: number;
	/** Overruns specification */
	overruns?: ScalarRange;
	/** Product color (RGB or ARGB hex value) */
	color?: string;
	/** Product description */
	description?: string;
	/** Product notes */
	notes?: string;
}

// ============================================================================
// PART EDITING REQUESTS
// ============================================================================

/**
 * Edit Part Resource
 * Used to edit a part's properties
 */
export interface EditPartResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Part name */
	name?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Stock reference */
	stock?: Reference;
	/** Stock grade name */
	grade?: string;
	/** Rotation settings */
	rotation?: Rotation;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
}

/**
 * Edit Flat Part Resource
 * Used to edit a flat part
 */
export interface EditFlatPartResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Spacing settings - Required */
	spacing: Spacing;
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation mode */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Reference;
	/** Bleed settings */
	bleed?: Bleed;
	/** Offcut settings */
	offcut?: Offcut;
}

/**
 * Edit Bound Part Resource
 * Used to edit a bound part
 */
export interface EditBoundPartResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation settings */
	rotation?: Rotation;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
	/** Page size reference */
	"page-size"?: Resource;
	/** Binding method */
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	/** Binding edge */
	"binding-edge"?: string;
}

/**
 * Edit Folded Part Resource
 * Used to edit a folded part
 */
export interface EditFoldedPartResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation settings */
	rotation?: Rotation;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
	/** Page size reference */
	"page-size"?: Resource;
}

/**
 * Edit Tiled Part Resource
 * Used to edit a tiled part
 */
export interface EditTiledPartResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation settings */
	rotation?: Rotation;
	/** Bleed settings */
	bleed?: Bleed;
	/** Spacing settings */
	spacing?: Spacing;
	/** Offcut settings */
	offcut?: Offcut;
}

// ============================================================================
// COMPONENT EDITING REQUESTS
// ============================================================================

/**
 * Edit Component Resource
 * Used to edit a component (flat, signature, tile)
 */
export interface EditComponentResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Spacing settings - Required */
	spacing: Spacing;
	/** Bleed settings */
	bleed?: Bleed;
	/** Offcut settings */
	offcut?: Offcut;
	/** Stock reference */
	stock?: Resource;
	/** Stock grade name */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation mode */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Color source */
	"color-source"?: "Artwork" | "Specified";
	/** Color analysis mode */
	"color-analysis"?: "Fast" | "Raster";
	/** Color detection region */
	"color-detection"?: "Cut" | "Bleed";
	/** Page colors */
	colors?: PageColorResource[];
	/** Process settings */
	"process-settings"?: ProcessSettingResource[];
}

// ============================================================================
// PAGE EDITING REQUESTS
// ============================================================================

/**
 * Edit Page Resource
 * Used to edit a page's properties
 */
export interface EditPageResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Color analysis mode */
	"color-analysis"?: "Fast" | "Raster";
	/** Color detection region */
	"color-detection"?: "Cut" | "Bleed";
	/** Color source */
	"color-source"?: "Artwork" | "Specified";
	/** Mark color source */
	"mark-color-source"?: "PageColors" | "ArtworkColors";
	/** Whether to autosnap artwork */
	autosnap?: boolean;
	/** Autosnap color name */
	"autosnap-color"?: string;
	/** Autosnap layer name */
	"autosnap-layer"?: string;
	/** Page size reference */
	size?: Resource;
	/** Page position */
	position?: { x?: number; y?: number };
	/** Page rotation in degrees */
	rotation?: number;
	/** X scale factor */
	"x-scale"?: number;
	/** Y scale factor */
	"y-scale"?: number;
	/** Whether page is mirrored */
	mirror?: boolean;
}

/**
 * Edit Page File Resource
 * Used to change the artwork file for a page
 */
export interface EditPageFile {
	/** Path to new artwork file */
	path?: string;
	/** Page number within artwork file */
	page?: number;
}

/**
 * Create Pages Resource
 * Used to add pages to a part
 */
export interface CreatePagesResource {
	/** Page size reference */
	size?: Resource;
	/** Bleed margins */
	bleed?: Margins;
	/** Number of pages to add */
	count?: number;
}

// ============================================================================
// SIGNATURE EDITING REQUESTS
// ============================================================================

/**
 * Add Signature Resource
 * Used to add signatures to a bound part
 */
export interface AddSignatureResource {
	/** Index where signatures should be inserted */
	index?: number;
	/** Pattern reference */
	pattern?: Reference;
	/** Number of signatures to add */
	count?: number;
}

// ============================================================================
// LAYOUT EDITING REQUESTS
// ============================================================================

/**
 * Edit Layout Resource
 * Used to edit a layout's properties
 */
export interface EditLayoutResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Layout name */
	name?: string;
	/** Sheet size */
	"sheet-size"?: Size;
}

// ============================================================================
// EXPORT REQUESTS
// ============================================================================

/**
 * Export Resource
 * Base export request
 */
export interface ExportResource {
	/** Full path to store output file(s) */
	path?: string;
	/** Name of preset to use */
	preset?: string;
	/** Whether to overwrite existing files */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Export Cover Sheet Resource
 * Used to export a cover sheet/job ticket
 */
export interface ExportCoverSheetResource extends ExportResource {
	/** Template to use */
	template?: string;
	/** Whether to include thumbnails */
	"include-thumbnails"?: boolean;
}

// ============================================================================
// IMPORT REQUESTS
// ============================================================================

/**
 * Import Die Layout Resource
 * Used to import a die layout from file
 */
export interface ImportDieLayoutResource {
	/** Full path of file name - Required */
	path: string;
	/** Name of preset to use */
	preset?: string;
	/** Name for the die layout */
	name?: string;
	/** Die design name */
	"die-design-name"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import Product Resource
 * Used to import products from file
 */
export interface ImportProductResource {
	/** Full path of file name - Required */
	path: string;
	/** Name of preset to use */
	preset?: string;
	/** Base folder for relative paths */
	"base-folder"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import Product CSV Resource
 * Used to import products from CSV file
 */
export interface ImportProductCsvResource {
	/** Full path of CSV file - Required */
	path: string;
	/** Name of CSV import preset to use */
	preset?: string;
	/** Base folder for relative paths */
	"base-folder"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import Stock Resource
 * Used to import stock from file
 */
export interface ImportStockResource {
	/** Full path of file name - Required */
	path: string;
	/** Name of preset to use */
	preset?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import Asset Resource
 * Used to import a generic asset
 */
export interface ImportAssetResource {
	/** Full path of file name - Required */
	path: string;
	/** Type of asset */
	type?: string;
	/** Name of asset */
	name?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// AUTOMATION TOOL REQUESTS
// ============================================================================

/**
 * Autosnap Artwork Entity
 * Used to snap artwork to a die design
 */
export interface AutosnapArtworkEntity {
	/** Local path of artwork file - Required */
	path: string;
	/** Page number of front artwork (default: 1) */
	"front-page"?: number;
	/** Page number of back artwork */
	"back-page"?: number;
	/** Name of spot cut line ink */
	"cut-ink"?: string;
	/** Name of spot crease line ink */
	"crease-ink"?: string;
	/** Name of spot perforation line ink */
	"perf-ink"?: string;
	/** Name of cut line layer */
	"cut-layer"?: string;
	/** Name of crease line layer */
	"crease-layer"?: string;
	/** Name of perforation line layer */
	"perf-layer"?: string;
}

/**
 * Image Tracing Resource
 * Used to trace artwork to create cutting paths
 */
export interface ImageTracingResource {
	/** Cutting tool type to use - Required */
	"tool-type": string;
	/** Quality percentage (0-100, default: 100) */
	quality?: number;
	/** Color tolerance percentage (0-100) */
	tolerance?: number;
	/** Blur radius for edge detection */
	"blur-radius"?: number;
	/** Simplification percentage (0-100) */
	simplify?: number;
	/** Smoothing percentage (0-100) */
	smoothing?: number;
	/** Additional offset distance */
	offset?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Step And Repeat Resource
 * Used to create step-and-repeat layouts
 */
export interface StepAndRepeatResource {
	/** Number of columns */
	columns?: number;
	/** Number of rows */
	rows?: number;
	/** Horizontal spacing */
	"horizontal-spacing"?: ScalarValue;
	/** Vertical spacing */
	"vertical-spacing"?: ScalarValue;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Run Reports Resource
 * Used to run reports on a project
 */
export interface RunReportsResource {
	/** Array of report names to run */
	reports?: string[];
	/** Output directory path */
	"output-path"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Run Rules Resource
 * Used to run validation rules
 */
export interface RunRulesResource {
	/** Array of rule names to run */
	rules?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Properties Resource
 * Used to set custom properties on an entity
 */
export interface PropertiesResource {
	/** Array of custom properties */
	properties?: PropertyObject[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Props Resource
 * Alias for PropertiesResource
 */
export interface PropsResource {
	/** Array of custom properties */
	properties?: PropertyObject[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Apply Die Layout Resource
 * Used to apply a die layout to a product
 */
export interface ApplyDieLayoutResource {
	/** Name of library die layout to use */
	name?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Apply Mark Resource
 * Used to apply a mark to a layout
 */
export interface ApplyMarkResource {
	/** Name of library mark to use */
	name?: string;
	/** Which side to apply mark to */
	side?: "Front" | "Back";
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Apply Profile Resource
 * Used to apply a profile to a project
 */
export interface ApplyProfileResource {
	/** Name of profile to use */
	name?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * CAD Die Design Resource
 * Used to create a die design from CAD file
 */
export interface CadDieDesignResource {
	/** Path to CAD file */
	path?: string;
	/** Die design name in CAD file */
	"design-name"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Layout Presets Resource
 * Used to apply layout presets
 */
export interface LayoutPresetsResource {
	/** Array of preset names */
	presets?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Expand Bleed Resource
 * Used to expand bleed on components
 */
export interface ExpandBleedResource {
	/** Bleed amount to expand */
	amount?: ScalarValue;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Process Layout Resource
 * Used to process/update a layout
 */
export interface ProcessLayoutResource {
	/** Processing mode */
	mode?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Save Die Design Resource
 * Used to save a die design to file
 */
export interface SaveDieDesignResource {
	/** Name of die design */
	name?: string;
	/** Type of die design */
	type?: string;
	/** Full path to store output file */
	path?: string;
	/** Whether to overwrite existing file */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Save Die Layout Resource
 * Used to save a die layout to file
 */
export interface SaveDieLayoutResource {
	/** Full path to store output file */
	path?: string;
	/** Whether to overwrite existing file */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Save Template Resource
 * Used to save a template to file
 */
export interface SaveTemplateResource {
	/** Name of template */
	name?: string;
	/** Type of template */
	type?: string;
	/** Full path to store output file */
	path?: string;
	/** Whether to overwrite existing file */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Save Job Template Resource
 * Used to save a job template
 */
export interface SaveJobTemplateResource {
	/** Full path to store output file */
	path?: string;
	/** Whether to overwrite existing file */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// PLANNING AND IMPOSITION REQUESTS
// ============================================================================

/**
 * Plan Constraints
 * Constraints for planning operations
 */
export interface PlanConstraints {
	/** Maximum number of sheets */
	"max-sheets"?: number;
	/** Maximum number of rolls */
	"max-rolls"?: number;
	/** Maximum waste percentage */
	"max-waste-percent"?: number;
	/** Array of stock names to include */
	stocks?: string[];
	/** Array of machine names to include */
	things?: string[];
}

/**
 * Plan Resource
 * Used to run planning/optimization
 */
export interface PlanResource {
	/** Name of profile to use */
	profile?: string;
	/** Quantity to plan for */
	quantity?: number;
	/** Priority (1 = highest) */
	priority?: number;
	/** Due date (ISO 8601) */
	"due-date"?: string;
	/** Planning constraints */
	constraints?: PlanConstraints;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Populate Resource
 * Used for Imposition AI population
 */
export interface PopulateResource {
	/** Array of product names to include */
	products?: string[];
	/** Name of profile to use */
	profile?: string;
	/** Inline profiles */
	"profiles-inline"?: any[];
	/** Number of minutes to allow before stopping (default: 60) */
	"stop-minutes"?: number;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Impose Resource
 * Used to apply imposition templates
 */
export interface ImposeResource {
	/** Array of product names to include */
	products?: string[];
	/** Array of template paths - Required */
	templates: string[];
	/** Settings for applying results */
	"applying-results"?: {
		/** Whether to split overlaps on apply */
		"split-overlaps-on-apply"?: boolean;
		/** Whether to group products on apply */
		"group-products-on-apply"?: boolean;
		/** Whether to ensure margins placement */
		"ensure-margins-placement"?: boolean;
	};
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// SCRIPT EXECUTION REQUESTS
// ============================================================================

/**
 * Rest Script Context
 * Used to run scripts via the API
 */
export interface RestScriptContext {
	/** Script code to execute */
	script?: string;
	/** Script language (e.g., JavaScript, Python) */
	language?: string;
	/** Script parameters */
	parameters?: Record<string, any>;
}

// ============================================================================
// PATH RESOURCE
// ============================================================================

/**
 * Path Resource
 * Simple path reference
 */
export interface PathResource {
	/** Path to file */
	path?: string;
}

// Re-export ResponseEntity from models
export { ResponseEntity, MessageEntity } from "./models";

// Re-export all model types that are used as responses
export {
	PhoenixProject,
	Product,
	Part,
	FlatPart,
	BoundPart,
	FoldedPart,
	TiledPart,
	Component,
	ComponentObject,
	Flat,
	BoundSignature,
	FoldedSignature,
	Tile,
	Page,
	PageObject,
	Stock,
	Mark,
	Grade,
	Coating,
	Profile,
	DieDesign,
	DieLayout,
	Layout,
	SheetRegion,
	RollRegion,
	Thing,
	Machine,
	Process,
	Screenruling,
	SpotColor,
	ToolType,
	SignatureAggregations,
	PresetEntity,
	BoundSection,
	Trim,
	Creep,
	FoldingPattern,
	AssetInfo,
} from "./models";

// ============================================================================
// ADDITIONAL RESPONSE WRAPPER TYPES
// ============================================================================

/**
 * API Error Response
 * Extended error response format for client-side error handling
 * Note: This is a client-side convenience type, not part of OpenAPI spec
 */
export interface ApiErrorResponse {
	/** Error information */
	error: {
		/** Error code */
		code: string;
		/** Error message */
		message: string;
		/** Additional error details */
		details?: any;
	};
	/** Timestamp of error */
	timestamp?: string;
	/** API path that generated the error */
	path?: string;
}

/**
 * Paged Response
 * Generic paged response wrapper for list endpoints
 * Note: This is a client-side convenience type, not part of OpenAPI spec
 */
export interface PagedResponse<T> {
	/** Array of items */
	items: T[];
	/** Total number of items available */
	total: number;
	/** Current page number (0-based) */
	page: number;
	/** Number of items per page */
	pageSize: number;
	/** Whether more items are available */
	hasMore: boolean;
}

/**
 * Batch Operation Response
 * Response format for batch operations
 * Note: This is a client-side convenience type, not part of OpenAPI spec
 */
export interface BatchOperationResponse {
	/** Number of successful operations */
	successful: number;
	/** Number of failed operations */
	failed: number;
	/** Array of individual operation results */
	results: Array<{
		/** Item identifier */
		id?: string;
		/** Operation status */
		status: "success" | "error";
		/** Status message */
		message?: string;
		/** Result data */
		data?: any;
	}>;
}
