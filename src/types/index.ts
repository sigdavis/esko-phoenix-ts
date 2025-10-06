/**
 * Phoenix API Type Definitions - Main Export File
 * Auto-generated from OpenAPI 3.0.1 specification
 * API Version: 25.03
 *
 * This file re-exports all types from models, requests, and responses
 * for convenient importing throughout the application.
 */

// ============================================================================
// EXPORT ALL MODEL TYPES
// ============================================================================

export type {
	// Core scalar and primitive types
	ScalarValue,
	Reference,
	Resource,
	Asset,
	Size,
	Margins,
	TimeValue,
	Point,
	ScalarRange,
	// Property types
	PropertyType,
	PropertyObject,
	StringProperty,
	IntegerProperty,
	DoubleProperty,
	BooleanProperty,
	DateProperty,
	TextListProperty,
	// Response and message types
	MessageEntity,
	ResponseEntity,
	// Project types
	PhoenixProject,
	// Product and part types
	ProductShape,
	Product,
	PartType,
	GrainDirection,
	Part,
	FlatPart,
	BoundPart,
	FoldedPart,
	TiledPart,
	// Component types
	ComponentType,
	ComponentAnchor,
	ComponentShape,
	Component,
	ComponentObject,
	Flat,
	BoundSignature,
	FoldedSignature,
	Tile,
	Layouts,
	LayoutsInfo,
	// Tile specific types
	TileDefinition,
	TileEdge,
	GapTileEdge,
	OverlapTileEdge,
	// Bound part specific types
	BoundSection,
	Trim,
	Creep,
	FoldingPattern,
	AssetInfo,
	// Bleed, spacing, and offcut types
	Bleed,
	Spacing,
	Offcut,
	// Page types
	PageType,
	PageSide,
	Page,
	PageObject,
	PageColor,
	PageColorResource,
	PageColorEntity,
	// Material and stock types
	Material,
	StockType,
	WindDirection,
	CostBasis,
	Stock,
	RollInfo,
	CostValue,
	Grade,
	Coating,
	// Process types
	Process,
	ProcessSetting,
	ProcessSettingResource,
	ReferenceProcess,
	ReferenceMode,
	ReferenceThing,
	ReferenceProcessType,
	// Rotation types
	RotationType,
	Rotation,
	// Die design types
	DieDesignType,
	DieDesign,
	DieLayout,
	Cavity,
	Path,
	// Layout types
	LayoutType,
	SheetRegionType,
	RollRegionType,
	Layout,
	LayoutProduct,
	SheetRegion,
	RollRegion,
	// Mark types
	MarkType,
	MarkAnchor,
	Mark,
	ShapeMark,
	BarcodeMark,
	ShapeType,
	ShapeMarkProps,
	BarcodeMarkProps,
	GeneralProps,
	StrokeSetting,
	FillSetting,
	ShapeSizeProps,
	BarcodeSizeProps,
	PropertyRuleGroup,
	MarkColor,
	MarkPlacement,
	MarkAppearance,
	BasicPlacement,
	AdvancedPlacement,
	PlacementRule,
	SizeProps,
	// Equipment/Thing types
	ThingType,
	Thing,
	Machine,
	ThingCapabilities,
	ThingCosting,
	// Color types
	LabColor,
	CmykColor,
	RgbColor,
	SpotColor,
	Screenruling,
	// Tool and mapping types
	ToolType,
	Mapping,
	// Profile and preset types
	Profile,
	PresetEntity,
	// Aggregation types
	SignatureAggregations,
	Aggregation,
	Position,
	// Additional supporting types
	PropsResource,
	Stroke,
	Underprint,
	NUpEntity,
} from "./models";

// ============================================================================
// EXPORT ALL REQUEST TYPES
// ============================================================================

export type {
	// Project management requests
	CreateJobResource,
	CreateProjectResource,
	OpenJobResource,
	OpenProjectResource,
	EditProjectResource,
	// Product creation requests
	CreateProductResourceBase,
	CreateFlatProductResource,
	CreateBoundProductResource,
	CreateFoldedProductResource,
	CreateTiledProductResource,
	EditProductResource,
	// Part editing requests
	EditPartResource,
	EditFlatPartResource,
	EditBoundPartResource,
	EditFoldedPartResource,
	EditTiledPartResource,
	// Component editing requests
	EditComponentResource,
	EditFlatResource,
	EditSignatureResource,
	EditTileResource,
	// Script execution requests
	RunScriptResource,
	RestScriptContext,
	// Page editing requests
	EditPageResource,
	EditPageFile,
	CreatePagesResource,
	// Signature editing requests
	AddSignatureResource,
	// Import/Export requests
	ImportProductResource,
	ImportProductCsvResource,
	ImportDieLayoutResource,
	ImportStockResource,
	ImportAssetResource,
	ExportResource,
	ExportCoverSheetResource,
	// Imposition and layout requests
	ApplyDieLayoutResource,
	ApplyMarkResource,
	ApplyProfileResource,
	LayoutPresetsResource,
	AutosnapArtworkEntity,
	ImageTracingResource,
	StepAndRepeatResource,
	CadDieDesignResource,
	// Workflow requests
	RunReportsResource,
	RunRulesResource,
	// Property requests
	PropertiesResource,
	PathResource,
	PlanResource,
	SaveTemplateResource,
	SaveDieDesignResource,
	SaveDieLayoutResource,
	ProcessLayoutResource,
	ExpandBleedResource,
} from "./requests";

// ============================================================================
// EXPORT ALL RESPONSE TYPES
// ============================================================================

export type { ApiErrorResponse, PagedResponse, BatchOperationResponse } from "./responses";
