import {
	PropertyObject,
	ScalarValue,
	ScalarRange,
	Reference,
	Resource,
	PageColorResource,
	ProcessSettingResource,
	Bleed,
	Spacing,
	Offcut,
	Trim,
	Creep,
	Point,
	MarkAssetRef,
	CreatePagesResource,
	PathResource,
	EditPageResource,
	PropsResource,
} from "./models";
// ============================================================================
// Job/Project Management Requests
// ============================================================================

/**
 * Create job/project resource
 * Used for both Jobs API and Projects API
 */
export interface CreateJobResource {
	/** Job ID (REQUIRED) */
	id: string;
	/** Job name */
	name?: string;
	/** Job contact person */
	contact?: string;
	/** Job phone number */
	phone?: string;
	/** Job client name */
	client?: string;
	/** Job notes */
	notes?: string;
	/** Job units */
	units?: string;
	/** ID of action resource is being applied to (Hot Folders only) */
	idref?: number;
	/** Job template path for creating a new job from a template file */
	"template-path"?: string;
	/** Custom properties */
	properties?: PropertyObject[];
}

/**
 * Create project resource (same as CreateJobResource)
 */
export type CreateProjectResource = CreateJobResource;

/**
 * Open job resource - for opening existing project files
 */
export interface OpenJobResource {
	/** Path to the project file */
	path: string;
}

/**
 * Open project resource (same as OpenJobResource)
 */
export type OpenProjectResource = OpenJobResource;

/**
 * Edit project resource
 * Used for editing both jobs and projects via PATCH
 */
export interface EditProjectResource {
	/** Job ID (REQUIRED) */
	id: string;
	/** Job name */
	name?: string;
	/** Job contact person */
	contact?: string;
	/** Job phone number */
	phone?: string;
	/** Job client name */
	client?: string;
	/** Job notes */
	notes?: string;
	/** Job units */
	units?: string;
	/** ID of action resource is being applied to (Hot Folders only) */
	idref?: number;
	/** Custom properties */
	properties?: PropertyObject[];
}

// ============================================================================
// Product Management Requests (Jobs API - Deprecated)
// ============================================================================

/**
 * Add product entity (Jobs API - deprecated)
 * Used for creating products in the legacy Jobs API
 */
export interface AddProductEntity {
	/** Unique name of the product */
	name?: string;
	/** Optional type of product */
	type?: "Flat" | "Tiled" | "Folded" | "Bound";
	/** Product color specified as RGB or ARGB hex value */
	color?: string;
	/** Number of product ordered in the job */
	ordered?: number;
	/** Stock of product */
	stock?: string;
	/** Grade of product stock */
	grade?: string;
	/** Page colors for front side of flat products or all pages of bound/folded products */
	colors?: PageColorResource[];
	/** Page colors for back side of flat products */
	"back-colors"?: PageColorResource[];
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Binding method for bound products */
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	/** Binding edge */
	"binding-edge"?: string;
	/** Number of pages */
	pages?: number;
	/** Number of signatures */
	signatures?: number;
	/** Face trim */
	"face-trim"?: ScalarValue;
	/** Head trim */
	"head-trim"?: ScalarValue;
	/** Foot trim */
	"foot-trim"?: ScalarValue;
	/** Fore-edge trim */
	"fore-edge-trim"?: ScalarValue;
	/** Die design name */
	"die-design-name"?: string;
	/** Die layout name */
	"die-layout-name"?: string;
	/** Page width */
	"page-width"?: ScalarValue;
	/** Page height */
	"page-height"?: ScalarValue;
	/** Bleed */
	bleed?: ScalarValue;
	/** Artwork path */
	"artwork-path"?: string;
	/** CAD file path */
	"cad-file"?: string;
	/** CAD design name */
	"cad-design"?: string;
	/** Product group for Imposition AI */
	group?: string;
	/** Product priority (1 = highest) */
	priority?: number;
	/** Product due date */
	"due-date"?: string;
	/** Bleed type */
	"bleed-type"?: "Margins" | "Contour" | "CAD" | "None";
	/** Bleed margin */
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
// Product Management Requests (Projects API - New)
// ============================================================================

/**
 * Base interface for create product resources
 */
interface CreateProductResourceBase {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Unique name of the product */
	name?: string;
	/** Quantity of this product that needs to be produced */
	quantity?: number;
	/** Product due date */
	"due-date"?: string; // date-time format
	/** Optional product group used in Imposition AI */
	group?: string;
	/** Optional priority of product starting from 1 as highest priority */
	priority?: number;
	/** Overruns specification */
	overruns?: ScalarRange;
	/** Product color specified as RGB or ARGB hex value */
	color?: string;
	/** Optional product description */
	description?: string;
	/** Optional notes to associate with product */
	notes?: string;
	/** Bundle size */
	"bundle-size"?: number;
	/** Max bundle splits allowed */
	"max-bundle-splits"?: number;
	/** Templates reference */
	templates?: Reference;
}

/**
 * Create flat product resource
 */
export interface CreateFlatProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Part stock grade */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Bleed settings */
	bleed?: any; // Complex bleed type
	/** Spacing */
	spacing?: any; // Complex spacing type
	/** Offcut */
	offcut?: any; // Complex offcut type
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
 * Create bound product resource
 */
export interface CreateBoundProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Part stock grade */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Bleed settings */
	bleed?: any;
	/** Spacing */
	spacing?: any;
	/** Offcut */
	offcut?: any;
	/** Page size reference */
	"page-size"?: Resource;
	/** Binding method */
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	/** Binding edge */
	"binding-edge"?: string;
	/** Trim sizes */
	"face-trim"?: ScalarValue;
	"head-trim"?: ScalarValue;
	"foot-trim"?: ScalarValue;
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
 * Create folded product resource
 */
export interface CreateFoldedProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Part stock grade */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Bleed settings */
	bleed?: any;
	/** Spacing */
	spacing?: any;
	/** Offcut */
	offcut?: any;
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
 * Create tiled product resource
 */
export interface CreateTiledProductResource extends CreateProductResourceBase {
	/** Stock reference */
	stock?: Resource;
	/** Part stock grade */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Resource;
	/** Bleed settings */
	bleed?: any;
	/** Spacing */
	spacing?: any;
	/** Offcut */
	offcut?: any;
	/** Page colors for front side */
	colors?: PageColorResource[];
	/** Page colors for back side */
	"back-colors"?: PageColorResource[];
	/** Tiling reference */
	tiling?: Resource;
}

/**
 * Edit product resource (Projects API)
 * Used for editing products in the new Projects API
 */
export interface EditProductResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Unique name of the product */
	name?: string;
	/** Quantity of this product that needs to be produced */
	quantity?: number;
	/** Product due date */
	"due-date"?: string; // date-time format
	/** Optional product group used in Imposition AI */
	group?: string;
	/** Optional priority of product starting from 1 as highest priority */
	priority?: number;
	/** Overruns specification */
	overruns?: ScalarRange;
	/** Product color specified as RGB or ARGB hex value */
	color?: string;
	/** Optional product description */
	description?: string;
	/** Optional notes to associate with product */
	notes?: string;
}

// ============================================================================
// Export/Import Requests
// ============================================================================

/**
 * Export resource
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
 * Export cover sheet resource
 */
export interface ExportCoverSheetResource extends ExportResource {
	/** Template to use */
	template?: string;
	/** Whether to include thumbnails */
	"include-thumbnails"?: boolean;
}

/**
 * Import die layout resource
 */
export interface ImportDieLayoutResource {
	/** Full path of file name */
	path: string;
	/** Name of preset to use */
	preset?: string;
	/** Name of die layout */
	name?: string;
	/** Die design name */
	"die-design-name"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import product resource
 */
export interface ImportProductResource {
	/** Full path of file name */
	path: string;
	/** Name of preset to use */
	preset?: string;
	/** Base folder for relative paths */
	"base-folder"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import product CSV resource
 */
export type ImportProductCsvResource = ImportProductResource;

/**
 * Import stock resource
 */
export interface ImportStockResource {
	/** Full path of file name */
	path: string;
	/** Name of preset to use */
	preset?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Import asset resource
 */
export interface ImportAssetResource {
	/** Full path of file name */
	path: string;
	/** Type of asset */
	type?: string;
	/** Name of asset */
	name?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Tool Operations
// ============================================================================

/**
 * Autosnap artwork entity
 */
export interface AutosnapArtworkEntity {
	/** Local path of artwork file */
	path: string;
	/** Page number of front artwork */
	"front-page"?: number;
	/** Page number of back artwork */
	"back-page"?: number;
	/** Name of spot cut line ink */
	"cut-ink"?: string;
	/** Name of spot crease line ink */
	"crease-ink"?: string;
	/** Name of spot perf line ink */
	"perf-ink"?: string;
	/** Name of cut line layer */
	"cut-layer"?: string;
	/** Name of crease line layer */
	"crease-layer"?: string;
	/** Name of perf line layer */
	"perf-layer"?: string;
	/** Die layout name */
	"die-layout-name"?: string;
	/** Die design name */
	"die-design-name"?: string;
	/** Tool types to include */
	"tool-types"?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Image tracing resource
 */
export interface ImageTracingResource {
	/** Tool type to trace */
	"tool-type": string;
	/** Quality setting */
	quality?: number;
	/** Tolerance */
	tolerance?: number;
	/** Blur radius */
	"blur-radius"?: number;
	/** Simplify value */
	simplify?: number;
	/** Smoothing value */
	smoothing?: number;
	/** Offset */
	offset?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Step and repeat resource
 */
export interface StepAndRepeatResource {
	/** Name of preset to use */
	preset?: string;
	/** Names of products to include */
	products?: string[];
	/** Names of die layouts to include */
	"die-layouts"?: string[];
	/** Layout name */
	layout?: string;
	/** New layout name */
	"new-layout"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Run Operations
// ============================================================================

/**
 * Run reports resource
 */
export interface RunReportsResource {
	/** Name of profile to use */
	profile?: string;
	/** Names of reports to run */
	reports?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Run rules resource
 */
export interface RunRulesResource {
	/** Name of profile to use */
	profile?: string;
	/** Names of rules to run */
	rules?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Run script resource (Tech Preview)
 */
export interface RunScriptResource {
	/** Name of script in Scripts library including folder name(s) */
	name?: string;
	/** Script input parameters */
	inputs?: Record<string, string>;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Properties Operations
// ============================================================================

/**
 * Properties resource
 */
export interface PropertiesResource {
	/** Custom properties to set */
	properties?: PropertyObject[];
	/** Target object */
	target?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Apply Operations
// ============================================================================

/**
 * Apply die layout resource
 */
export interface ApplyDieLayoutResource {
	/** Name of die layout to apply */
	name?: string;
	/** Side to apply to */
	side?: "Front" | "Back";
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Apply mark resource
 */
export interface ApplyMarkResource {
	/** Name of mark to apply */
	name?: string;
	/** Side to apply to */
	side?: "Front" | "Back";
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Apply profile resource
 */
export interface ApplyProfileResource {
	/** Name of profile to apply */
	name?: string;
	/** Type of profile */
	type?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// CAD Operations
// ============================================================================

/**
 * CAD die design resource
 */
export interface CadDieDesignResource {
	/** Product name */
	product?: string;
	/** Name of preset to use */
	preset?: string;
	/** Die design name */
	"die-design-name"?: string;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Layout Operations
// ============================================================================

/**
 * Layout presets resource
 */
export interface LayoutPresetsResource {
	/** Names of presets to apply */
	presets?: string[];
	/** Names of products to include */
	products?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Expand bleed resource
 */
export interface ExpandBleedResource {
	/** Amount to expand */
	amount?: ScalarValue;
	/** Names of products to process */
	products?: string[];
	/** Names of parts to process */
	parts?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Process layout resource
 */
export interface ProcessLayoutResource {
	/** Layout name */
	layout?: string;
	/** Operations to perform */
	operations?: string[];
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Set sheet resource
 */
export interface SetSheetResource {
	/** Stock name or reference */
	stock?: string | Reference;
	/** Sheet width */
	width?: ScalarValue;
	/** Sheet height */
	height?: ScalarValue;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Step repeat resource
 */
export interface StepRepeatResource {
	/** Preset name */
	preset?: string;
	/** Horizontal spacing */
	"horizontal-spacing"?: ScalarValue;
	/** Vertical spacing */
	"vertical-spacing"?: ScalarValue;
	/** Horizontal repeat count */
	"horizontal-repeat"?: number;
	/** Vertical repeat count */
	"vertical-repeat"?: number;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Save Operations
// ============================================================================

/**
 * Save die design resource
 */
export interface SaveDieDesignResource {
	/** Name of die design */
	name?: string;
	/** Die design reference */
	"die-design"?: string;
	/** Full path to store output file */
	path?: string;
	/** Whether to overwrite existing file */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Save die layout resource
 */
export interface SaveDieLayoutResource {
	/** Name of die layout */
	name?: string;
	/** Die layout reference */
	"die-layout"?: string;
	/** Full path to store output file */
	path?: string;
	/** Whether to overwrite existing file */
	overwrite?: boolean;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Save template resource
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
 * Save job template resource
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
// Planning Operations
// ============================================================================

/**
 * Plan constraints
 */
export interface PlanConstraints {
	/** Maximum number of sheets */
	"max-sheets"?: number;
	/** Maximum number of rolls */
	"max-rolls"?: number;
	/** Maximum waste percentage */
	"max-waste-percent"?: number;
	/** Stock names to include */
	stocks?: string[];
	/** Thing names to include */
	things?: string[];
}

/**
 * Plan resource
 */
export interface PlanResource {
	/** Name of profile to use */
	profile?: string;
	/** Quantity to plan for */
	quantity?: number;
	/** Priority (1 = highest) */
	priority?: number;
	/** Due date */
	"due-date"?: string;
	/** Planning constraints */
	constraints?: PlanConstraints;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Populate resource (Imposition AI)
 */
export interface PopulateResource {
	/** Names of products to include */
	products?: string[];
	/** Name of profile to use */
	profile?: string;
	/** Inline profiles */
	"profiles-inline"?: any[]; // ImpositionAiProfileEntity[]
	/** Number of minutes to allow before stopping (default: 60) */
	"stop-minutes"?: number;
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

/**
 * Impose resource
 */
export interface ImposeResource {
	/** Names of products to include */
	products?: string[];
	/** Template paths */
	templates: string[];
	/** Applying results actions */
	"applying-results"?: {
		"split-overlaps-on-apply"?: boolean;
		"group-products-on-apply"?: boolean;
		"ensure-margins-placement"?: boolean;
	};
	/** ID of action resource (Hot Folders only) */
	idref?: number;
}

// ============================================================================
// Edit Operations (Parts, Components, etc.)
// ============================================================================

/**
 * Edit part resource
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
	/** Stock grade */
	grade?: string;
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Bleed settings */
	bleed?: any;
	/** Spacing */
	spacing?: any;
	/** Offcut */
	offcut?: any;
}

/**
 * Edit flat resource
 */
export interface EditFlatResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Spacing (required) */
	spacing: any;
	/** Stock reference */
	stock?: Reference;
	/** Stock grade */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Die design reference */
	"die-design"?: Reference;
	/** Bleed settings */
	bleed?: any;
	/** Offcut */
	offcut?: any;
}

/**
 * Edit bound part resource
 */
export interface EditBoundPartResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Stock reference */
	stock?: Reference;
	/** Part stock grade */
	grade?: string;
	/** Grain direction */
	grain?: "Horizontal" | "Vertical" | "Consistent" | "None";
	/** Rotation */
	rotation?: "Normal" | "CW90" | "CW180" | "CW270";
	/** Bleed settings */
	bleed?: any;
	/** Spacing */
	spacing?: any;
	/** Offcut */
	offcut?: any;
	/** Page size reference */
	"page-size"?: Reference;
	/** Binding method */
	"binding-method"?: "PerfectBound" | "SaddleStitch" | "None";
	/** Binding edge */
	"binding-edge"?: string;
}

/**
 * Edit component resource
 */
export interface EditComponentResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Component name */
	name?: string;
	/** X coordinate */
	x?: number;
	/** Y coordinate */
	y?: number;
	/** Width */
	width?: ScalarValue;
	/** Height */
	height?: ScalarValue;
	/** Rotation in degrees */
	rotation?: number;
	/** Whether component is mirrored */
	mirror?: boolean;
	/** Whether component is locked */
	locked?: boolean;
}

/**
 * Edit layout resource
 */
export interface EditLayoutResource {
	/** Custom properties */
	properties?: PropertyObject[];
	/** Layout name */
	name?: string;
	/** Sheet size */
	"sheet-size"?: {
		width?: ScalarValue;
		height?: ScalarValue;
	};
}

/**
 * Add signature resource
 */
export interface AddSignatureResource {
	/** Index where signatures should be inserted */
	index?: number;
	/** Pattern reference */
	pattern?: Reference;
	/** Number of signatures to add */
	count?: number;
}
