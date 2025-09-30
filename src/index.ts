/**
 * Phoenix API TypeScript Client
 * Version: 25.03
 *
 * Main export file for the Phoenix API client library
 */

import { Phoenix } from './client/Phoenix';

// Main client
export { Phoenix } from "./client/Phoenix";
export { BaseClient } from "./client/Base";

// API Endpoints
export { Jobs } from "./endpoints/Jobs";
export { Projects } from "./endpoints/Projects";
export { Libraries } from "./endpoints/Libraries";
export { Presets } from "./endpoints/Presets";

// Client configuration types
export type { ClientConfig, ApiResponse, ApiError, RequestOptions, HttpMethod, FetchOptions } from "./client/types";

// Model types
export type {
	// Core models
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
	ResponseEntity,
	// Supporting types
	ScalarValue,
	Reference,
	Size,
	Margins,
	TimeValue,
	PropertyObject,
	StringProperty,
	IntegerProperty,
	DoubleProperty,
	BooleanProperty,
	DateProperty,
	TextListProperty,
	PropertyType,
	Material,
	ProcessSetting,
	Rotation,
	RollInfo,
	CostValue,
	Cavity,
	Path,
	LayoutProduct,
	MarkPlacement,
	MarkAppearance,
	BasicPlacement,
	AdvancedPlacement,
	PlacementRule,
	SizeProps,
	ThingCapabilities,
	ThingCosting,
	Mapping,
	Aggregation,
	Position,
	LabColor,
	CmykColor,
	RgbColor,
	// Enums
	ProductShape,
	PartType,
	GrainDirection,
	ComponentType,
	ComponentAnchor,
	ComponentShape,
	PageType,
	PageSide,
	StockType,
	WindDirection,
	CostBasis,
	RotationType,
	MarkType,
	MarkAnchor,
	DieDesignType,
	LayoutType,
	SheetRegionType,
	RollRegionType,
	ThingType,
} from "./types/models";

// Request types
export type {
	CreateJobResource,
	CreateProjectResource,
	OpenJobResource,
	OpenProjectResource,
	EditProjectResource,
	ExportResource,
	ExportCoverSheetResource,
	ImportDieLayoutResource,
	ImportProductResource,
	ImportProductCsvResource,
	ImportStockResource,
	ImportAssetResource,
	AutosnapArtworkEntity,
	ImageTracingResource,
	StepAndRepeatResource,
	RunReportsResource,
	RunRulesResource,
	PropertiesResource,
	PropsResource,
	ApplyDieLayoutResource,
	ApplyMarkResource,
	ApplyProfileResource,
	CadDieDesignResource,
	LayoutPresetsResource,
	ExpandBleedResource,
	ProcessLayoutResource,
	SaveDieDesignResource,
	SaveDieLayoutResource,
	SaveTemplateResource,
	PlanResource,
	PlanConstraints,
	EditProductResource,
	EditPartResource,
	EditComponentResource,
} from "./types/requests";

// Response types (mostly re-exported from models)
export type { ApiErrorResponse, PagedResponse, BatchOperationResponse } from "./types/responses";

// Utility functions
export {
	// Validators
	validateScalarValue,
	validateProductDimensions,
	validateStockType,
	validateLayoutRegions,
	isValidISODate,
	validateRequiredFields,
	// Transformers
	mmToInches,
	inchesToMm,
	toPoints,
	calculateProductArea,
	flattenParts,
	groupStocksByType,
	propertiesToObject,
	objectToProperties,
	// Helpers
	generateId,
	deepClone,
	wait,
	retry,
	findProductByName,
	calculateProjectProgress,
	formatDateForAPI,
	parseAPIDate,
	isProjectOverdue,
	// Batch operations
	batchCreateProducts,
	batchDeleteStocks,
	processInChunks,
} from "./utils";

// Batch operation types
export type { BatchOperationResult } from "./utils/batch";

// Default export
export default Phoenix;

/**
 * Library version
 */
export const VERSION = "1.0.0";

/**
 * API version supported
 */
export const API_VERSION = "25.03";
