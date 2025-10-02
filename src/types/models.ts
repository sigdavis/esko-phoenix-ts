/**
 * Core model definitions
 */

// Scalar value types
export interface ScalarValue {
  value: number;
  unit?: string;
}

// Reference type
export interface Reference {
  name: string;
  id?: string;
}

// Size type
export interface Size {
  width: ScalarValue;
  height: ScalarValue;
}

// Margins type
export interface Margins {
  top?: ScalarValue;
  bottom?: ScalarValue;
  left?: ScalarValue;
  right?: ScalarValue;
  front?: ScalarValue;
  back?: ScalarValue;
}

// Time value
export interface TimeValue {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

// Property types
export interface PropertyObject {
  name: string;
  type: PropertyType;
}

export interface StringProperty extends PropertyObject {
  type: 'String';
  value?: string;
}

export interface IntegerProperty extends PropertyObject {
  type: 'Integer';
  value?: number;
}

export interface DoubleProperty extends PropertyObject {
  type: 'Double';
  value?: number;
}

export interface BooleanProperty extends PropertyObject {
  type: 'Boolean';
  value?: boolean;
}

export interface DateProperty extends PropertyObject {
  type: 'Date';
  value?: string; // ISO date string
}

export interface TextListProperty extends PropertyObject {
  type: 'TextList';
  values?: string[];
}

export type PropertyType = 
  | 'String' | 'Integer' | 'Long' | 'Double' | 'Boolean' 
  | 'Scalar' | 'Size' | 'Date' | 'IntegerRange' | 'DoubleRange'
  | 'ScalarRange' | 'DateRange' | 'Margins' | 'PlacementRule'
  | 'Enum' | 'Matcher' | 'TextList' | 'ScalarList' | 'List'
  | 'AssetRef' | 'Object' | 'Link';

// Phoenix Project
export interface PhoenixProject {
  id?: string;
  name?: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string; // ISO date
  'modified-on'?: string; // ISO date
  due?: string; // ISO date
  customer?: string;
  order?: string;
  source?: string;
  path?: string;
  version?: string;
  'auto-save'?: boolean;
  properties?: PropertyObject[];
}

// Product
export interface Product {
  id?: string;
  name: string;
  'external-id'?: string;
  quantity?: number;
  'ordered-quantity'?: number;
  'impose-quantity'?: boolean;
  'print-multiple'?: boolean;
  'keep-parts-aligned'?: boolean;
  shape?: ProductShape;
  width?: ScalarValue;
  height?: ScalarValue;
  depth?: ScalarValue;
  bleed?: Margins;
  parts?: Part[];
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  properties?: PropertyObject[];
}

export type ProductShape = 
  | 'Rectangular' | 'Triangular' | 'Round' | 'Elliptical' | 'Irregular';

// Part base interface
export interface Part {
  type: PartType;
  id?: string;
  name?: string;
  grain?: GrainDirection;
  pages?: Page[];
  'process-settings'?: ProcessSetting[];
  rotation?: Rotation;
  material?: Material;
  processes?: Process[];
  properties?: PropertyObject[];
}

export type PartType = 'Flat' | 'Bound' | 'Folded' | 'Tiled';
export type GrainDirection = 'Horizontal' | 'Vertical' | 'Consistent' | 'None';

// Specific part types
export interface FlatPart extends Part {
  type: 'Flat';
  flats?: Flat[];
}

export interface BoundPart extends Part {
  type: 'Bound';
  'cover-stock'?: Stock;
  'binding-style'?: string;
  signatures?: BoundSignature[];
}

export interface FoldedPart extends Part {
  type: 'Folded';
  signatures?: FoldedSignature[];
}

export interface TiledPart extends Part {
  type: 'Tiled';
  tiles?: Tile[];
}

// Component types
export interface Component {
  id?: string;
  type: ComponentType;
  name?: string;
  'external-id'?: string;
  anchor?: ComponentAnchor;
  x?: number;
  y?: number;
  width?: ScalarValue;
  height?: ScalarValue;
  'art-path'?: string;
  'placement-boundary'?: string;
  rotation?: number;
  mirror?: boolean;
  locked?: boolean;
  bleeds?: Margins;
  pages?: Page[];
  shape?: ComponentShape;
}

export type ComponentType = 'Component';
export type ComponentAnchor = 
  | 'TopLeft' | 'TopCenter' | 'TopRight' 
  | 'MiddleLeft' | 'MiddleCenter' | 'MiddleRight'
  | 'BottomLeft' | 'BottomCenter' | 'BottomRight';
export type ComponentShape = 
  | 'Rectangular' | 'Elliptical' | 'Triangular' | 'Custom';

// Alias for backward compatibility
export type ComponentObject = Component;

// Sub-components
export interface Flat {
  id?: string;
  name?: string;
  x?: number;
  y?: number;
  rotation?: number;
  width?: ScalarValue;
  height?: ScalarValue;
}

export interface BoundSignature {
  id?: string;
  name?: string;
  pages?: number;
  stock?: Stock;
}

export interface FoldedSignature {
  id?: string;
  name?: string;
  pages?: number;
  'fold-pattern'?: string;
}

export interface Tile {
  id?: string;
  name?: string;
  'x-index'?: number;
  'y-index'?: number;
  width?: ScalarValue;
  height?: ScalarValue;
  overlap?: ScalarValue;
}

// Page
export interface Page {
  id?: string;
  number?: number;
  name?: string;
  type?: PageType;
  side?: PageSide;
  'art-path'?: string;
  'art-page'?: number;
  rotation?: number;
  mirror?: boolean;
}

export type PageType = 'Page';
export type PageSide = 'Front' | 'Back';

// Alias for backward compatibility
export type PageObject = Page;

// Material
export interface Material {
  stock?: Stock;
  grade?: Grade;
  coating?: Coating;
}

// Stock
export interface Stock {
  id?: string;
  name: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type: StockType;
  width?: ScalarValue;
  height?: ScalarValue;
  weight?: ScalarValue;
  thickness?: ScalarValue;
  grade?: string;
  coating?: string;
  color?: string;
  texture?: string;
  vendor?: string;
  cost?: CostValue;
  grain?: GrainDirection;
  sheets?: number;
  'sheet-usage'?: number;
  roll?: RollInfo;
  properties?: PropertyObject[];
}

export type StockType = 'Sheet' | 'Roll';

export interface RollInfo {
  length?: ScalarValue;
  'core-diameter'?: ScalarValue;
  'max-diameter'?: ScalarValue;
  'wind-direction'?: WindDirection;
}

export type WindDirection = 'Inward' | 'Outward';

export interface CostValue {
  value?: number;
  currency?: string;
  basis?: CostBasis;
}

export type CostBasis = 'PerSheet' | 'PerRoll' | 'PerWeight' | 'PerArea';

// Grade
export interface Grade {
  id?: string;
  name: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type?: string;
  weight?: ScalarValue;
  thickness?: ScalarValue;
  properties?: PropertyObject[];
}

// Coating
export interface Coating {
  id?: string;
  name: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type?: string;
  finish?: string;
  properties?: PropertyObject[];
}

// Process
export interface Process {
  id?: string;
  name: string;
  description?: string;
  notes?: string;
  'external-id'?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  path?: string;
  properties?: PropertyObject[];
}

// Process Setting
export interface ProcessSetting {
  process: string;
  mode?: string;
  'mode-value'?: number;
  things?: string[];
  'process-types'?: string[];
}

// Rotation
export interface Rotation {
  type: RotationType;
  angle?: number;
}

export type RotationType = 'None' | 'Orthogonal' | 'Any' | 'Fixed';

// Mark
export interface Mark {
  id?: string;
  name: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type?: MarkType;
  category?: string;
  placement?: MarkPlacement;
  appearance?: MarkAppearance;
  path?: string;
  properties?: PropertyObject[];
}

export type MarkType = 
  | 'SimpleMark' | 'ShapeMark' | 'BarcodeMark' 
  | 'CustomMark' | 'CollationMark';

export interface MarkPlacement {
  type?: 'Smart' | 'Manual';
  anchor?: MarkAnchor;
  mode?: 'Basic' | 'Advanced';
  'basic-placement'?: BasicPlacement;
  'advanced-placement'?: AdvancedPlacement;
  'both-sides'?: boolean;
}

export type MarkAnchor = 
  | 'Plate' | 'PlatePunch' | 'Sheet' | 'ContentMargins' 
  | 'ImageMargins' | 'Gripper' | 'Group' | 'DieTemplate' 
  | 'StepAndRepeat' | 'Component' | 'Flat' | 'Signature' 
  | 'BoundSignature' | 'FoldedSignature' | 'Tile' | 'Page';

export interface BasicPlacement {
  location?: string;
  'horizontal-offset'?: string;
  'vertical-offset'?: string;
}

export interface AdvancedPlacement {
  rules?: PlacementRule[];
}

export interface PlacementRule {
  location?: string;
  'horizontal-offset'?: string;
  'vertical-offset'?: string;
  'resize-sheet'?: boolean;
}

export interface MarkAppearance {
  type?: string;
  size?: SizeProps;
}

export interface SizeProps {
  width?: ScalarValue;
  height?: ScalarValue;
}

// Die Design
export interface DieDesign {
  id?: string;
  name: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type?: DieDesignType;
  station?: string;
  paths?: Path[];
  properties?: PropertyObject[];
}

export type DieDesignType = 'Flatbed' | 'Rotary';

export interface Path {
  // Path properties would be defined here
  [key: string]: any;
}

// Die Layout
export interface DieLayout {
  id?: string;
  name: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  'die-design'?: string;
  cavity?: Cavity;
  path?: string;
  properties?: PropertyObject[];
}

export interface Cavity {
  width?: ScalarValue;
  height?: ScalarValue;
  'cut-paths'?: Path[];
  'crease-paths'?: Path[];
  'perforation-paths'?: Path[];
}

// Layout
export interface Layout {
  id?: string;
  name: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type?: LayoutType;
  stock?: string;
  products?: LayoutProduct[];
  'die-layouts'?: string[];
  marks?: string[];
  regions?: SheetRegion[] | RollRegion[];
  properties?: PropertyObject[];
}

export type LayoutType = 'Sheet' | 'Roll';

export interface LayoutProduct {
  name?: string;
  quantity?: number;
}

// Sheet Region
export interface SheetRegion {
  id?: string;
  type: SheetRegionType;
  name?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotation?: number;
  'content-rotation'?: number;
}

export type SheetRegionType = 
  | 'Sheet' | 'Plate' | 'Component' | 'Group' 
  | 'StepAndRepeat' | 'Waste' | 'Bleed';

// Roll Region
export interface RollRegion {
  id?: string;
  type: RollRegionType;
  name?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export type RollRegionType = 
  | 'Roll' | 'Segment' | 'Lane' | 'Ribbon' 
  | 'Component' | 'Blank' | 'Frame' | 'Strip' 
  | 'LeadIn' | 'LeadOut';

// Thing (Machine)
export interface Thing {
  id?: string;
  name: string;
  'external-id'?: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type: ThingType;
  vendor?: string;
  model?: string;
  'serial-number'?: string;
  location?: string;
  capabilities?: ThingCapabilities;
  costing?: ThingCosting;
  properties?: PropertyObject[];
}

export type ThingType = 
  | 'SheetFedDigitalPress' | 'WebFedDigitalPress' 
  | 'SheetFedOffsetPress' | 'WebFedOffsetPress' 
  | 'WebFedFlexoPress' | 'FlatbedWideFormatPress' 
  | 'RollFedWideFormatPress' | 'GuillotineCutter' 
  | 'FlatbedDieCutter' | 'RotaryDieCutter' 
  | 'DigitalCuttingTable' | 'DieMaking' | 'Corrugator';

export interface ThingCapabilities {
  'min-sheet-width'?: ScalarValue;
  'max-sheet-width'?: ScalarValue;
  'min-sheet-height'?: ScalarValue;
  'max-sheet-height'?: ScalarValue;
  'min-stock-thickness'?: ScalarValue;
  'max-stock-thickness'?: ScalarValue;
  'max-speed'?: number;
  'supports-perfing'?: boolean;
  'supports-scoring'?: boolean;
}

export interface ThingCosting {
  currency?: string;
  setup?: TimeValue;
  rate?: ScalarValue;
  'minimum-charge'?: ScalarValue;
  'running-waste'?: number;
  'setup-waste'?: number;
}

// Supporting types
export interface Profile {
  id?: string;
  name: string;
  description?: string;
  notes?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  type?: string;
  settings?: any; // Profile-specific settings
  properties?: PropertyObject[];
}

export interface Machine {
  // Alias for Thing
  [key: string]: any;
}

export interface Screenruling {
  id?: string;
  name: string;
  value?: number;
  unit?: string;
  description?: string;
  properties?: PropertyObject[];
}

export interface SpotColor {
  id?: string;
  name: string;
  lab?: LabColor;
  cmyk?: CmykColor;
  rgb?: RgbColor;
  description?: string;
  properties?: PropertyObject[];
}

export interface LabColor {
  l?: number;
  a?: number;
  b?: number;
}

export interface CmykColor {
  c?: number;
  m?: number;
  y?: number;
  k?: number;
}

export interface RgbColor {
  r?: number;
  g?: number;
  b?: number;
}

export interface ToolType {
  id?: string;
  name: string;
  process?: Reference;
  width?: ScalarValue;
  mappings?: Mapping[];
  path?: string;
  description?: string;
  notes?: string;
  'external-id'?: string;
  'created-on'?: string;
  'modified-on'?: string;
  version?: string;
  properties?: PropertyObject[];
}

export interface Mapping {
  name?: string;
  value?: string;
  type?: string;
}

export interface SignatureAggregations {
  signature?: string;
  aggregations?: Aggregation[];
}

export interface Aggregation {
  type?: string;
  count?: number;
  positions?: Position[];
}

export interface Position {
  x?: number;
  y?: number;
  rotation?: number;
}

export interface PresetEntity {
  id?: string;
  name?: string;
  type?: string;
  category?: string;
  description?: string;
  'created-on'?: string;
  'modified-on'?: string;
}

/**
 * Scalar Range
 * Represents a range with start and end scalar values
 */
export interface ScalarRange {
  start?: string;
  end?: string;
  type: 'IntegerRange' | 'DoubleRange' | 'ScalarRange' | 'StockWeightRange' | 'DateRange';
}

/**
 * Resource reference
 * Represents a reference to a library resource with optional embedded asset
 */
export interface Resource {
  /** Unique ID of asset */
  id?: string;
  /** Path to asset */
  path?: string;
  /** Embedded asset object */
  asset?: Asset;
}

/**
 * Asset
 * Represents an embedded asset in a resource reference
 */
export interface Asset {
  id?: string;
  name?: string;
  type?: string;
  [key: string]: any;
}

/**
 * Page Color Resource
 * Used for specifying page colors when creating products
 */
export interface PageColorResource {
  /** Color name */
  name?: string;
  /** Color type */
  type?: 'CMYK' | 'Lab' | 'RGB';
  /** Color coverage percentage */
  coverage?: number;
  /** Process reference */
  process?: Process;
  /** Array of color values */
  values?: number[];
}

/**
 * Page Color (full schema)
 * Represents a page color with all properties
 */
export interface PageColor {
  /** Color (spot) name */
  name: string;
  /** Color type */
  type?: 'CMYK' | 'Lab' | 'RGB';
  /** Array of color values */
  values?: number[];
  /** Color coverage percentage */
  coverage?: number;
  /** Process reference */
  process: Process;
}

/**
 * Process Setting Resource
 * Used for specifying process settings when creating products
 */
export interface ProcessSettingResource {
  /** Process reference (required) */
  process: ReferenceProcess;
  /** Mode reference */
  mode?: ReferenceMode;
  /** Mode value */
  'mode-value'?: number;
  /** Array of thing references */
  things?: ReferenceThing[];
  /** Array of process type references */
  'process-types'?: ReferenceProcessType[];
}

/**
 * Reference to a Process
 */
export interface ReferenceProcess {
  /** Unique ID of asset */
  id?: string;
  /** Path to asset */
  path?: string;
}

/**
 * Reference to a Mode
 */
export interface ReferenceMode {
  /** Unique ID of asset */
  id?: string;
  /** Path to asset */
  path?: string;
}

/**
 * Reference to a Thing (machine)
 */
export interface ReferenceThing {
  /** Unique ID of asset */
  id?: string;
  /** Path to asset */
  path?: string;
}

/**
 * Reference to a Process Type
 */
export interface ReferenceProcessType {
  /** Unique ID of asset */
  id?: string;
  /** Path to asset */
  path?: string;
}

/**
 * Bleed settings
 */
export interface Bleed {
  /** Single margin setting */
  margin?: string;
  /** Margins object for detailed bleed settings */
  margins?: Margins;
  /** Bleed type */
  type: 'Margins' | 'Contour' | 'CAD' | 'None';
}

/**
 * Spacing settings
 */
export interface Spacing {
  /** Horizontal spacing */
  horizontal?: ScalarValue;
  /** Vertical spacing */
  vertical?: ScalarValue;
  /** All sides spacing (when uniform) */
  all?: ScalarValue;
}

/**
 * Offcut settings
 */
export interface Offcut {
  /** Offcut type */
  type?: 'None' | 'Trim' | 'Custom';
  /** Offcut margins */
  margins?: Margins;
  /** Offcut amount */
  amount?: ScalarValue;
}

/**
 * Point (2D coordinate)
 */
export interface Point {
  /** X coordinate */
  x?: number;
  /** Y coordinate */
  y?: number;
}

/**
 * Trim settings for bound products
 */
export interface Trim {
  /** Face trim amount */
  face?: ScalarValue;
  /** Head trim amount */
  head?: ScalarValue;
  /** Foot trim amount */
  foot?: ScalarValue;
  /** Fore-edge trim amount */
  'fore-edge'?: ScalarValue;
}

/**
 * Creep settings for bound products
 */
export interface Creep {
  /** Creep type */
  type?: 'None' | 'Auto' | 'Manual';
  /** Creep amount */
  amount?: ScalarValue;
}

/**
 * Mark Asset Reference
 * Used for referencing marks to apply to products
 */
export interface MarkAssetRef {
  /** Mark ID */
  id?: string;
  /** Mark path */
  path?: string;
  /** Mark name */
  name?: string;
}

/**
 * Create Pages Resource
 */
export interface CreatePagesResource {
  /** Page size resource reference */
  size?: Resource;
  /** Bleed margins */
  bleed?: Margins;
  /** Number of pages to add */
  count?: number;
}

/**
 * Path Resource
 */
export interface PathResource {
  /** Path to file */
  path?: string;
}

/**
 * Edit Page Resource
 */
export interface EditPageResource {
  /** Custom properties */
  properties?: PropertyObject[];
  /** Color analysis mode */
  'color-analysis'?: 'Fast' | 'Raster';
  /** Color detection mode */
  'color-detection'?: 'Cut' | 'Bleed';
  /** Color source */
  'color-source'?: 'Artwork' | 'Specified';
  /** Mark color source */
  'mark-color-source'?: 'PageColors' | 'ArtworkColors';
  /** Autosnap enabled */
  autosnap?: boolean;
  /** Autosnap color */
  'autosnap-color'?: string;
  /** Autosnap layer */
  'autosnap-layer'?: string;
  /** Size reference */
  size?: Resource;
  /** Position */
  position?: Point;
  /** Rotation in degrees */
  rotation?: number;
  /** X-scale factor */
  'x-scale'?: number;
  /** Y-scale factor */
  'y-scale'?: number;
  /** Mirror flag */
  mirror?: boolean;
}

/**
 * Edit Part Resource (from OpenAPI)
 */
export interface EditPartResourceSchema {
  /** Custom properties */
  properties?: PropertyObject[];
  /** Part name */
  name?: string;
  /** Grain direction */
  grain?: 'Horizontal' | 'Vertical' | 'Consistent' | 'None';
  /** Stock reference */
  stock?: Reference;
  /** Stock grade */
  grade?: string;
  /** Rotation */
  rotation?: Rotation;
  /** Bleed settings */
  bleed?: Bleed;
  /** Spacing settings */
  spacing?: Spacing;
  /** Offcut settings */
  offcut?: Offcut;
}

/**
 * Message Entity
 * Represents an error or warning message
 */
export interface MessageEntity {
  /** Message code */
  code?: string;
  /** Message text */
  message?: string;
  /** Message severity */
  severity?: 'Error' | 'Warning' | 'Info';
  /** Additional details */
  details?: string;
}

/**
 * Response Entity (Standard API Response)
 */
export interface ResponseEntity {
  /** HTTP status code */
  status?: number;
  /** Success flag */
  success?: boolean;
  /** Response message */
  message?: string;
  /** Response data */
  data?: any;
  /** Array of error messages */
  errors?: MessageEntity[];
  /** Array of warning messages */
  warnings?: MessageEntity[];
  /** URIs of newly created resources */
  resources?: string[];
}

/**
 * Layouts info
 * Contains layout placement information for a component
 */
export interface Layouts {
  /** Array of layout names where component is placed */
  layouts?: string[];
}

/**
 * Page Color Entity
 * Used in legacy Jobs API
 */
export interface PageColorEntity {
  /** Color name */
  name?: string;
  /** Color type */
  type?: 'CMYK' | 'Lab' | 'RGB';
  /** Color coverage */
  coverage?: number;
  /** Color values array */
  values?: number[];
}

/**
 * Props Resource
 * Used for setting custom properties
 */
export interface PropsResource {
  /** Custom properties array */
  properties?: PropertyObject[];
}

