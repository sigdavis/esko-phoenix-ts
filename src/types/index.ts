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
  
  // Die design and layout types
  DieDesignType,
  DieDesign,
  Path,
  DieLayout,
  Cavity,
  LayoutType,
  Layout,
  LayoutProduct,
  SheetRegionType,
  SheetRegion,
  RollRegionType,
  RollRegion,
  
  // Mark types
  MarkType,
  MarkAnchor,
  Mark,
  MarkPlacement,
  BasicPlacement,
  AdvancedPlacement,
  PlacementRule,
  MarkAppearance,
  SizeProps,
  MarkColor,
  MarkAssetRef,
  
  // Thing (machine) types
  ThingType,
  Thing,
  ThingCapabilities,
  ThingCosting,
  Machine,
  
  // Color and screening types
  LabColor,
  CmykColor,
  RgbColor,
  SpotColor,
  Screenruling,
  
  // Tool type and mapping
  ToolType,
  Mapping,
  
  // Signature aggregation types
  SignatureAggregations,
  Aggregation,
  Position,
  
  // Profile and preset types
  Profile,
  PresetEntity,
  
  // Additional supporting types
  PropsResource,
  Stroke,
  Underprint,
  NUpEntity
} from './models';

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
  
  // Product creation requests (Legacy Jobs API)
  CreateProductResource,
  
  // Product creation requests (New Projects API)
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
  
  // Page editing requests
  EditPageResource,
  EditPageFile,
  CreatePagesResource,
  
  // Signature editing requests
  AddSignatureResource,
  
  // Layout editing requests
  EditLayoutResource,
  
  // Export requests
  ExportResource,
  ExportCoverSheetResource,
  
  // Import requests
  ImportDieLayoutResource,
  ImportProductResource,
  ImportProductCsvResource,
  ImportStockResource,
  ImportAssetResource,
  
  // Automation tool requests
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
  SaveJobTemplateResource,
  
  // Planning and imposition requests
  PlanConstraints,
  PlanResource,
  PopulateResource,
  ImposeResource,
  
  // Script execution requests
  RestScriptContext,
  
  // Path resource
  PathResource
} from './requests';

// ============================================================================
// EXPORT ALL RESPONSE TYPES
// ============================================================================

export type {
  // Additional response wrapper types (client-side convenience)
  ApiErrorResponse,
  PagedResponse,
  BatchOperationResponse
} from './responses';