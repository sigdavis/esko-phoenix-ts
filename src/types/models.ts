/**
 * Phoenix API Type Definitions - Core Models
 * Auto-generated from OpenAPI 3.0.1 specification
 * API Version: 25.03
 * 
 * This file contains all core data model interfaces and types used throughout the Phoenix API.
 * All types strictly conform to the Phoenix-openapi.json specification.
 */

// ============================================================================
// SCALAR AND PRIMITIVE TYPES
// ============================================================================

/**
 * Scalar Value
 * Represents a measurement value with an optional unit
 * @example { value: 100, unit: "mm" }
 */
export interface ScalarValue {
  /** Numeric value of the measurement */
  value: number;
  /** Unit of measurement (e.g., "mm", "in", "pt") */
  unit?: string;
}

/**
 * Reference
 * Generic reference to a named resource
 */
export interface Reference {
  /** Name of the referenced resource */
  name: string;
  /** Optional unique identifier */
  id?: string;
}

/**
 * Resource
 * Reference to a library resource with optional embedded asset
 * Used in product creation and other resource references
 */
export interface Resource {
  /** Unique ID of the asset */
  id?: string;
  /** Path to the asset */
  path?: string;
  /** Embedded asset object */
  asset?: Asset;
}

/**
 * Asset
 * Represents an embedded asset in a resource reference
 */
export interface Asset {
  /** Unique identifier */
  id?: string;
  /** Asset name */
  name?: string;
  /** Asset type */
  type?: string;
  /** Additional asset properties */
  [key: string]: any;
}

/**
 * Size
 * Represents 2D dimensions with width and height
 */
export interface Size {
  /** Width dimension */
  width: ScalarValue;
  /** Height dimension */
  height: ScalarValue;
}

/**
 * Margins
 * Represents margin or spacing values for all sides
 * Can be used for various purposes: bleed, trim, spacing, etc.
 */
export interface Margins {
  /** Top margin */
  top?: ScalarValue;
  /** Bottom margin */
  bottom?: ScalarValue;
  /** Left margin */
  left?: ScalarValue;
  /** Right margin */
  right?: ScalarValue;
  /** Front margin (for 3D objects) */
  front?: ScalarValue;
  /** Back margin (for 3D objects) */
  back?: ScalarValue;
}

/**
 * Time Value
 * Represents a duration in hours, minutes, and/or seconds
 */
export interface TimeValue {
  /** Number of hours */
  hours?: number;
  /** Number of minutes */
  minutes?: number;
  /** Number of seconds */
  seconds?: number;
}

/**
 * Point
 * Represents a 2D coordinate
 */
export interface Point {
  /** X coordinate */
  x?: number;
  /** Y coordinate */
  y?: number;
}

/**
 * Scalar Range
 * Represents a range with start and end values
 * Used for specifying overruns, tolerances, etc.
 */
export interface ScalarRange {
  /** Start of the range */
  start?: string;
  /** End of the range */
  end?: string;
  /** Type of range */
  type: 'IntegerRange' | 'DoubleRange' | 'ScalarRange' | 'StockWeightRange' | 'DateRange';
}

// ============================================================================
// PROPERTY TYPES (Custom Properties System)
// ============================================================================

/**
 * Property Type Enum
 * All possible types for custom properties
 */
export type PropertyType = 
  | 'String' | 'Integer' | 'Long' | 'Double' | 'Boolean' 
  | 'Scalar' | 'Size' | 'Date' | 'IntegerRange' | 'DoubleRange'
  | 'ScalarRange' | 'DateRange' | 'Margins' | 'PlacementRule'
  | 'Enum' | 'Matcher' | 'TextList' | 'ScalarList' | 'List'
  | 'AssetRef' | 'Object' | 'Link';

/**
 * Property Object Base
 * Base interface for all custom property types
 * Uses discriminator pattern based on 'type' field
 */
export interface PropertyObject {
  /** Property name - Required */
  name: string;
  /** Property type discriminator - Required */
  type: PropertyType;
}

/**
 * String Property
 * Custom property with string value
 */
export interface StringProperty extends PropertyObject {
  /** Type discriminator */
  type: 'String';
  /** String value */
  value?: string;
}

/**
 * Integer Property
 * Custom property with integer value
 */
export interface IntegerProperty extends PropertyObject {
  /** Type discriminator */
  type: 'Integer';
  /** Integer value (32-bit) */
  value?: number;
}

/**
 * Double Property
 * Custom property with floating-point value
 */
export interface DoubleProperty extends PropertyObject {
  /** Type discriminator */
  type: 'Double';
  /** Double precision floating-point value */
  value?: number;
}

/**
 * Boolean Property
 * Custom property with boolean value
 */
export interface BooleanProperty extends PropertyObject {
  /** Type discriminator */
  type: 'Boolean';
  /** Boolean value */
  value?: boolean;
}

/**
 * Date Property
 * Custom property with ISO 8601 date-time value
 */
export interface DateProperty extends PropertyObject {
  /** Type discriminator */
  type: 'Date';
  /** ISO 8601 date-time string */
  value?: string;
}

/**
 * Text List Property
 * Custom property with array of string values
 */
export interface TextListProperty extends PropertyObject {
  /** Type discriminator */
  type: 'TextList';
  /** Array of string values */
  values?: string[];
}

// ============================================================================
// RESPONSE AND MESSAGE TYPES
// ============================================================================

/**
 * Message Entity
 * Represents a single info, warning, or error message from the API
 */
export interface MessageEntity {
  /** Unique, language-independent ID for this message */
  id?: number;
  /** Localized message text */
  text?: string;
  /** Action that generated this message */
  action?: string;
}

/**
 * Response Entity
 * Standard API response wrapper for all operations
 * Contains success status and any errors/warnings/infos
 */
export interface ResponseEntity {
  /** Overall success of operation - Required */
  success: boolean;
  /** HTTP response status code */
  'status-code'?: number;
  /** Array of error messages */
  errors?: MessageEntity[];
  /** Array of warning messages */
  warnings?: MessageEntity[];
  /** Array of info messages */
  infos?: MessageEntity[];
  /** URIs of created/modified resources */
  resources?: string[];
}

// ============================================================================
// PHOENIX PROJECT
// ============================================================================

/**
 * Phoenix Project
 * Top-level project container for all imposition work
 * Contains products, layouts, and automation settings
 */
export interface PhoenixProject {
  /** Unique project ID - Read-only */
  id?: string;
  /** Project name */
  name?: string;
  /** External system ID for integration */
  'external-id'?: string;
  /** Project description */
  description?: string;
  /** Project notes */
  notes?: string;
  /** Creation timestamp (ISO 8601) - Read-only */
  'created-on'?: string;
  /** Last modification timestamp (ISO 8601) - Read-only */
  'modified-on'?: string;
  /** Project due date (ISO 8601) */
  due?: string;
  /** Customer name or identifier */
  customer?: string;
  /** Order number or identifier */
  order?: string;
  /** Source system or origin */
  source?: string;
  /** File system path */
  path?: string;
  /** Project version - Read-only */
  version?: string;
  /** Whether auto-save is enabled */
  'auto-save'?: boolean;
  /** Custom properties */
  properties?: PropertyObject[];
}

// ============================================================================
// PRODUCT AND PARTS
// ============================================================================

/**
 * Product Shape Enum
 * Defines the physical shape of a product
 */
export type ProductShape = 
  | 'Rectangular' | 'Triangular' | 'Round' | 'Elliptical' | 'Irregular';

/**
 * Product
 * Represents a printable product in the project
 * Products contain one or more parts (flat, bound, folded, or tiled)
 */
export interface Product {
  /** Unique product ID - Read-only */
  id?: string;
  /** Product name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Quantity to produce */
  quantity?: number;
  /** Ordered quantity */
  'ordered-quantity'?: number;
  /** Whether to impose exact quantity or allow optimization */
  'impose-quantity'?: boolean;
  /** Whether product can be printed multiple times per sheet */
  'print-multiple'?: boolean;
  /** Whether to keep parts aligned during imposition */
  'keep-parts-aligned'?: boolean;
  /** Physical shape of the product */
  shape?: ProductShape;
  /** Product width */
  width?: ScalarValue;
  /** Product height */
  height?: ScalarValue;
  /** Product depth (for 3D products) */
  depth?: ScalarValue;
  /** Bleed margins */
  bleed?: Margins;
  /** Array of product parts */
  parts?: Part[];
  /** Product description */
  description?: string;
  /** Product notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Part Type Enum
 * Discriminator for different part types
 */
export type PartType = 'Flat' | 'Bound' | 'Folded' | 'Tiled';

/**
 * Grain Direction Enum
 * Paper grain direction for parts
 */
export type GrainDirection = 'Horizontal' | 'Vertical' | 'Consistent' | 'None';

/**
 * Part
 * Base interface for all part types
 * Uses discriminator pattern with 'type' field
 * 
 * Parts represent the physical components of a product.
 * A product can have multiple parts (e.g., cover and text for a book)
 */
export interface Part {
  /** Part type discriminator - Required */
  type: PartType;
  /** Unique part ID - Read-only */
  id?: string;
  /** Part name */
  name?: string;
  /** Grain direction */
  grain?: GrainDirection;
  /** Array of pages in this part */
  pages?: Page[];
  /** Process settings for this part */
  'process-settings'?: ProcessSetting[];
  /** Rotation settings */
  rotation?: Rotation;
  /** Material specifications */
  material?: Material;
  /** Associated processes */
  processes?: Process[];
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Flat Part
 * Part type for flat products (business cards, postcards, labels, etc.)
 * Contains array of flat components
 */
export interface FlatPart extends Part {
  /** Type discriminator */
  type: 'Flat';
  /** Array of flat components */
  flats?: Flat[];
  /** Stock reference */
  stock?: Stock;
  /** Bleed settings */
  bleed?: Bleed;
  /** Spacing settings */
  spacing?: Spacing;
  /** Offcut settings */
  offcut?: Offcut;
  /** Die design for cutting */
  'die-design'?: DieDesign;
}

/**
 * Bound Part
 * Part type for bound products (books, booklets, catalogs)
 * Contains sections with signatures
 */
export interface BoundPart extends Part {
  /** Type discriminator */
  type: 'Bound';
  /** Page size for all pages in this part - Required */
  'page-size': Size;
  /** Array of bound sections - Required */
  sections: BoundSection[];
  /** Binding method - Required */
  'binding-method': 'PerfectBound' | 'SaddleStitch' | 'None';
  /** Number of pages per section - Required */
  'pages-per-section': number;
  /** Binding edge - Required */
  'binding-edge': 'Top' | 'Bottom' | 'Right' | 'Left';
  /** Jog edge - Required */
  'jog-edge': 'Top' | 'Bottom' | 'Right' | 'Left';
  /** Reading order - Required */
  'reading-order': 'Normal' | 'Calendar';
  /** Whether this part has a self cover - Required */
  'self-cover': boolean;
  /** Trim settings - Required */
  trim: Trim;
  /** Creep/shingling settings - Required */
  creep: Creep;
  /** Allowed folding patterns */
  'allowed-folds'?: FoldingPattern[];
  /** Stock reference */
  stock?: Stock;
  /** Bleed settings */
  bleed?: Bleed;
  /** Spacing settings */
  spacing?: Spacing;
  /** Offcut settings */
  offcut?: Offcut;
}

/**
 * Folded Part
 * Part type for folded products (brochures, pamphlets)
 * Contains folded signatures with folding patterns
 */
export interface FoldedPart extends Part {
  /** Type discriminator */
  type: 'Folded';
  /** Array of folded signatures */
  signatures?: FoldedSignature[];
  /** Page size */
  'page-size'?: Size;
  /** Stock reference */
  stock?: Stock;
  /** Bleed settings */
  bleed?: Bleed;
  /** Spacing settings */
  spacing?: Spacing;
  /** Offcut settings */
  offcut?: Offcut;
  /** Die design for cutting */
  'die-design'?: DieDesign;
  /** Allowed folding patterns */
  'allowed-folds'?: FoldingPattern[];
}

/**
 * Tiled Part
 * Part type for tiled/paneled products (large format, multi-panel displays)
 * Contains array of tiles arranged in a grid
 */
export interface TiledPart extends Part {
  /** Type discriminator */
  type: 'Tiled';
  /** Array of tiles */
  tiles?: Tile[];
  /** Tiling pattern reference */
  tiling?: Reference;
  /** Stock reference */
  stock?: Stock;
  /** Bleed settings */
  bleed?: Bleed;
  /** Spacing settings */
  spacing?: Spacing;
  /** Offcut settings */
  offcut?: Offcut;
}

// ============================================================================
// COMPONENTS (Flats, Signatures, Tiles)
// ============================================================================

/**
 * Component Type Enum
 * Type discriminator for components
 */
export type ComponentType = 'Flat' | 'Bound' | 'Folded' | 'Tiled';

/**
 * Component Anchor Enum
 * Anchor point for component positioning
 */
export type ComponentAnchor = 
  | 'TopLeft' | 'TopCenter' | 'TopRight' 
  | 'MiddleLeft' | 'MiddleCenter' | 'MiddleRight'
  | 'BottomLeft' | 'BottomCenter' | 'BottomRight';

/**
 * Component Shape Enum
 * Physical shape of a component
 */
export type ComponentShape = 
  | 'Rectangular' | 'Elliptical' | 'Triangular' | 'Custom';

/**
 * Component
 * Base interface for all component types (flats, signatures, tiles)
 * Components are the individual pieces that get imposed on layouts
 */
export interface Component {
  /** Unique component ID - Read-only */
  id?: string;
  /** Component type discriminator */
  type: ComponentType;
  /** Component name - Required */
  name: string;
  /** External ID */
  'external-id'?: string;
  /** Anchor point for positioning */
  anchor?: ComponentAnchor;
  /** X coordinate */
  x?: number;
  /** Y coordinate */
  y?: number;
  /** Component width */
  width?: ScalarValue;
  /** Component height */
  height?: ScalarValue;
  /** Path to artwork file */
  'art-path'?: string;
  /** Placement boundary */
  'placement-boundary'?: string;
  /** Rotation in degrees */
  rotation?: number;
  /** Whether component is mirrored */
  mirror?: boolean;
  /** Whether component is locked (cannot be moved) */
  locked?: boolean;
  /** Bleed margins */
  bleeds?: Margins;
  /** Array of pages */
  pages?: Page[];
  /** Component shape */
  shape?: ComponentShape;
  /** Die design reference */
  'die-design'?: DieDesign;
  /** Spacing settings */
  spacing?: Spacing;
  /** Offcut settings */
  offcut?: Offcut;
  /** Layout placement information */
  layouts?: Layouts;
  /** Total placed count across all layouts - Read-only */
  placed?: number;
  /** Total overrun count - Read-only */
  overrun?: number;
  /** Whether order quantity is fulfilled - Read-only */
  fulfilled?: boolean;
  /** Total copies being produced - Read-only */
  total?: number;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Component Object
 * Alias for Component - used in some API responses
 */
export type ComponentObject = Component;

/**
 * Flat
 * Represents a flat component (single-piece die-cut item)
 */
export interface Flat extends Component {
  /** Type discriminator */
  type: 'Flat';
}

/**
 * Bound Signature
 * Represents a signature in a bound product
 */
export interface BoundSignature extends Component {
  /** Type discriminator */
  type: 'Bound';
  /** Number of pages in this signature */
  pages?: number;
  /** Stock for this signature */
  stock?: Stock;
  /** Folding pattern reference */
  'folding-pattern'?: AssetInfo;
}

/**
 * Folded Signature
 * Represents a signature in a folded product
 */
export interface FoldedSignature extends Component {
  /** Type discriminator */
  type: 'Folded';
  /** Number of pages */
  pages?: number;
  /** Folding pattern reference - Required */
  'folding-pattern': AssetInfo;
}

/**
 * Tile
 * Represents a single tile in a tiled product
 */
export interface Tile extends Component {
  /** Type discriminator */
  type: 'Tiled';
  /** X index in tile grid */
  'x-index'?: number;
  /** Y index in tile grid */
  'y-index'?: number;
  /** Tile overlap amount */
  overlap?: ScalarValue;
}

/**
 * Layouts
 * Contains layout placement information for components
 */
export interface Layouts {
  /** Index of layout */
  index?: number;
  /** Number placed in this layout */
  placed?: number;
}

// ============================================================================
// BOUND PART SPECIFIC TYPES
// ============================================================================

/**
 * Bound Section
 * Represents a section within a bound part
 * Sections group signatures by binding method
 */
export interface BoundSection {
  /** Unique section ID - Read-only */
  id?: string;
  /** Binding method for this section - Required */
  'binding-method': 'PerfectBound' | 'SaddleStitch' | 'None';
  /** Array of signatures in this section */
  signatures?: BoundSignature[];
}

/**
 * Trim
 * Trim specifications for bound parts
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
 * Creep
 * Creep/shingling settings for bound parts
 * Accounts for paper thickness in folded signatures
 */
export interface Creep {
  /** Creep calculation mode */
  mode?: 'None' | 'Manual' | 'Automatic';
  /** Manual creep amount (when mode is Manual) */
  amount?: ScalarValue;
}

/**
 * Folding Pattern
 * Reference to a folding pattern asset
 */
export interface FoldingPattern {
  /** Pattern name */
  name?: string;
  /** Pattern ID */
  id?: string;
  /** Asset reference */
  asset?: AssetInfo;
}

/**
 * Asset Info
 * Information about an asset reference
 */
export interface AssetInfo {
  /** Asset ID */
  id?: string;
  /** Asset name */
  name?: string;
  /** Asset path */
  path?: string;
  /** Asset type */
  type?: string;
}

// ============================================================================
// BLEED, SPACING, AND OFFCUT TYPES
// ============================================================================

/**
 * Bleed
 * Bleed settings for parts and components
 */
export interface Bleed {
  /** Bleed type - Required */
  type: 'Margins' | 'Contour' | 'CAD' | 'None';
  /** Single margin value (uniform bleed) */
  margin?: string;
  /** Detailed margins (per side) */
  margins?: Margins;
  /** Bleed source */
  source?: string;
  /** Whether shape has been modified */
  'shape-modified'?: boolean;
  /** Whether margins have been adjusted */
  'margins-adjusted'?: boolean;
  /** Path information */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Spacing
 * Spacing settings between components
 */
export interface Spacing {
  /** Horizontal spacing */
  horizontal?: ScalarValue;
  /** Vertical spacing */
  vertical?: ScalarValue;
  /** Uniform spacing (all sides) */
  all?: ScalarValue;
}

/**
 * Offcut
 * Offcut/waste settings
 */
export interface Offcut {
  /** Offcut type */
  type?: 'None' | 'Trim' | 'Custom';
  /** Offcut margins */
  margins?: Margins;
  /** Offcut amount */
  amount?: ScalarValue;
}

// ============================================================================
// PAGE TYPES
// ============================================================================

/**
 * Page Type Enum
 */
export type PageType = 'Page';

/**
 * Page Side Enum
 * Front or back side of a page
 */
export type PageSide = 'Front' | 'Back';

/**
 * Page
 * Represents a single page within a part or component
 */
export interface Page {
  /** Unique page ID - Read-only */
  id?: string;
  /** Page number (1-based) */
  number?: number;
  /** Page name */
  name?: string;
  /** Page type */
  type?: PageType;
  /** Page side (front/back) */
  side?: PageSide;
  /** Path to artwork file */
  'art-path'?: string;
  /** Page number within artwork file */
  'art-page'?: number;
  /** Page rotation in degrees */
  rotation?: number;
  /** Whether page is mirrored */
  mirror?: boolean;
  /** Page colors */
  colors?: PageColor[];
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Page Object
 * Alias for Page - used in some API responses
 */
export type PageObject = Page;

/**
 * Page Color
 * Represents a color (spot or process) used on a page
 */
export interface PageColor {
  /** Color (spot) name - Required */
  name: string;
  /** Color type */
  type?: 'CMYK' | 'Lab' | 'RGB';
  /** Array of color values (4 for CMYK, 3 for Lab/RGB) */
  values?: number[];
  /** Color coverage percentage (0-100) */
  coverage?: number;
  /** Process reference - Required */
  process: Process;
}

/**
 * Page Color Resource
 * Simplified page color for resource creation
 * Used when creating products
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
 * Page Color Entity
 * Legacy format for page colors (Jobs API)
 */
export interface PageColorEntity {
  /** Color name - Required */
  name: string;
  /** Color type */
  type?: 'CMYK' | 'Lab' | 'RGB';
  /** Color values array */
  values?: number[];
  /** Color coverage (0-100) */
  coverage?: number;
  /** Process name */
  process?: string;
}

// ============================================================================
// MATERIAL AND STOCK TYPES
// ============================================================================

/**
 * Material
 * Material specifications for a part or component
 * Combines stock, grade, and coating information
 */
export interface Material {
  /** Stock reference */
  stock?: Stock;
  /** Grade reference */
  grade?: Grade;
  /** Coating reference */
  coating?: Coating;
}

/**
 * Stock Type Enum
 * Type of stock (sheet-fed or roll-fed)
 */
export type StockType = 'Sheet' | 'Roll';

/**
 * Wind Direction Enum
 * Direction of paper wind on a roll
 */
export type WindDirection = 'Inward' | 'Outward';

/**
 * Cost Basis Enum
 * How stock cost is calculated
 */
export type CostBasis = 'PerSheet' | 'PerRoll' | 'PerWeight' | 'PerArea';

/**
 * Stock
 * Represents a paper or substrate stock
 * Can be either sheet-fed or roll-fed
 */
export interface Stock {
  /** Unique stock ID - Read-only */
  id?: string;
  /** Stock name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Stock description */
  description?: string;
  /** Stock notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Stock type (Sheet or Roll) - Required */
  type: StockType;
  /** Stock width (sheet width or roll width) */
  width?: ScalarValue;
  /** Stock height (sheet height, not applicable for rolls) */
  height?: ScalarValue;
  /** Stock weight (basis weight, e.g., gsm or lb) */
  weight?: ScalarValue;
  /** Stock thickness (caliper) */
  thickness?: ScalarValue;
  /** Grade name */
  grade?: string;
  /** Coating name */
  coating?: string;
  /** Stock color */
  color?: string;
  /** Stock texture or finish */
  texture?: string;
  /** Vendor name */
  vendor?: string;
  /** Cost information */
  cost?: CostValue;
  /** Grain direction */
  grain?: GrainDirection;
  /** Number of sheets (for sheet stock) */
  sheets?: number;
  /** Sheet usage percentage */
  'sheet-usage'?: number;
  /** Roll information (for roll stock) */
  roll?: RollInfo;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Roll Info
 * Additional information for roll-fed stock
 */
export interface RollInfo {
  /** Roll length */
  length?: ScalarValue;
  /** Core diameter */
  'core-diameter'?: ScalarValue;
  /** Maximum roll diameter */
  'max-diameter'?: ScalarValue;
  /** Wind direction */
  'wind-direction'?: WindDirection;
}

/**
 * Cost Value
 * Represents cost information with currency and basis
 */
export interface CostValue {
  /** Cost amount */
  value?: number;
  /** Currency code (e.g., USD, EUR, GBP) */
  currency?: string;
  /** How cost is calculated */
  basis?: CostBasis;
}

/**
 * Grade
 * Represents a stock grade (paper type classification)
 */
export interface Grade {
  /** Unique grade ID - Read-only */
  id?: string;
  /** Grade name - Required */
  name: string;
  /** Grade description */
  description?: string;
  /** Grade notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Grade type */
  type?: string;
  /** Weight specification */
  weight?: ScalarValue;
  /** Thickness specification */
  thickness?: ScalarValue;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Coating
 * Represents a paper coating or finish
 */
export interface Coating {
  /** Unique coating ID - Read-only */
  id?: string;
  /** Coating name - Required */
  name: string;
  /** Coating description */
  description?: string;
  /** Coating notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Coating type */
  type?: string;
  /** Finish description */
  finish?: string;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

// ============================================================================
// PROCESS TYPES
// ============================================================================

/**
 * Process
 * Represents a printing or finishing process
 */
export interface Process {
  /** Unique process ID - Read-only */
  id?: string;
  /** Process name - Required */
  name: string;
  /** Process description */
  description?: string;
  /** Process notes */
  notes?: string;
  /** External system ID */
  'external-id'?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Process Setting
 * Settings for applying a process to a part or page
 */
export interface ProcessSetting {
  /** Process name or reference - Required */
  process: string;
  /** Mode for the process */
  mode?: string;
  /** Numeric mode value */
  'mode-value'?: number;
  /** Array of machine/thing names */
  things?: string[];
  /** Array of process type names */
  'process-types'?: string[];
}

/**
 * Process Setting Resource
 * Resource format for process settings (used in creation APIs)
 */
export interface ProcessSettingResource {
  /** Process reference - Required */
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
 * Used in process settings
 */
export interface ReferenceProcess {
  /** Process ID */
  id?: string;
  /** Process path */
  path?: string;
}

/**
 * Reference to a Mode
 * Used in process settings
 */
export interface ReferenceMode {
  /** Mode ID */
  id?: string;
  /** Mode path */
  path?: string;
}

/**
 * Reference to a Thing
 * Used in process settings
 */
export interface ReferenceThing {
  /** Thing (machine) ID */
  id?: string;
  /** Thing path */
  path?: string;
}

/**
 * Reference to a Process Type
 * Used in process settings
 */
export interface ReferenceProcessType {
  /** Process type ID */
  id?: string;
  /** Process type path */
  path?: string;
}

// ============================================================================
// ROTATION TYPES
// ============================================================================

/**
 * Rotation Type Enum
 * How rotation is allowed for a component
 */
export type RotationType = 'None' | 'Orthogonal' | 'Any' | 'Fixed';

/**
 * Rotation
 * Rotation settings for parts and components
 */
export interface Rotation {
  /** Rotation type - Required */
  type: RotationType;
  /** Fixed angle (when type is Fixed) */
  angle?: number;
}

// ============================================================================
// DIE DESIGN AND LAYOUT TYPES
// ============================================================================

/**
 * Die Design Type Enum
 * Type of die cutting equipment
 */
export type DieDesignType = 'Flatbed' | 'Rotary';

/**
 * Die Design
 * Represents a die design for cutting/creasing
 */
export interface DieDesign {
  /** Unique die design ID - Read-only */
  id?: string;
  /** Die design name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Die design description */
  description?: string;
  /** Die design notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Die design type */
  type?: DieDesignType;
  /** Station number or identifier */
  station?: string;
  /** Array of cutting/creasing paths */
  paths?: Path[];
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Path
 * Represents a cutting, creasing, or perforation path
 */
export interface Path {
  /** Path ID */
  id?: string;
  /** Path name */
  name?: string;
  /** Path type (Cut, Crease, Perf, etc.) */
  type?: string;
  /** Tool type reference */
  'tool-type'?: string;
  /** Path geometry data */
  data?: string;
  /** Additional path properties */
  [key: string]: any;
}

/**
 * Die Layout
 * Layout arrangement of a die design on stock
 */
export interface DieLayout {
  /** Unique die layout ID - Read-only */
  id?: string;
  /** Die layout name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Die layout description */
  description?: string;
  /** Die layout notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Die design reference */
  'die-design'?: string;
  /** Cavity information */
  cavity?: Cavity;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Cavity
 * Represents the cavity area in a die layout
 */
export interface Cavity {
  /** Cavity width */
  width?: ScalarValue;
  /** Cavity height */
  height?: ScalarValue;
  /** Array of cut paths */
  'cut-paths'?: Path[];
  /** Array of crease paths */
  'crease-paths'?: Path[];
  /** Array of perforation paths */
  'perforation-paths'?: Path[];
}

// ============================================================================
// LAYOUT TYPES
// ============================================================================

/**
 * Layout Type Enum
 * Type of layout (sheet-fed or roll-fed)
 */
export type LayoutType = 'Sheet' | 'Roll';

/**
 * Sheet Region Type Enum
 * Types of regions on a sheet layout
 */
export type SheetRegionType = 
  | 'Sheet' | 'Plate' | 'Component' | 'Group' 
  | 'StepAndRepeat' | 'Waste' | 'Bleed';

/**
 * Roll Region Type Enum
 * Types of regions on a roll layout
 */
export type RollRegionType = 
  | 'Roll' | 'Segment' | 'Lane' | 'Ribbon' 
  | 'Component' | 'Blank' | 'Frame' | 'Strip' 
  | 'LeadIn' | 'LeadOut';

/**
 * Layout
 * Represents an imposition layout (sheet or roll)
 */
export interface Layout {
  /** Unique layout ID - Read-only */
  id?: string;
  /** Layout name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Layout description */
  description?: string;
  /** Layout notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Layout type (Sheet or Roll) */
  type?: LayoutType;
  /** Stock reference */
  stock?: string;
  /** Array of products in this layout */
  products?: LayoutProduct[];
  /** Array of die layouts */
  'die-layouts'?: string[];
  /** Array of marks */
  marks?: string[];
  /** Array of regions (sheet or roll regions) */
  regions?: SheetRegion[] | RollRegion[];
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Layout Product
 * Product reference within a layout
 */
export interface LayoutProduct {
  /** Product name */
  name?: string;
  /** Quantity of this product in layout */
  quantity?: number;
}

/**
 * Sheet Region
 * Represents a region on a sheet layout
 */
export interface SheetRegion {
  /** Region ID */
  id?: string;
  /** Region type - Required */
  type: SheetRegionType;
  /** Region name */
  name?: string;
  /** X coordinate */
  x?: number;
  /** Y coordinate */
  y?: number;
  /** Region width */
  width?: number;
  /** Region height */
  height?: number;
  /** Region rotation in degrees */
  rotation?: number;
  /** Content rotation in degrees */
  'content-rotation'?: number;
}

/**
 * Roll Region
 * Represents a region on a roll layout
 */
export interface RollRegion {
  /** Region ID */
  id?: string;
  /** Region type - Required */
  type: RollRegionType;
  /** Region name */
  name?: string;
  /** X coordinate (along roll length) */
  x?: number;
  /** Y coordinate (across roll width) */
  y?: number;
  /** Region width */
  width?: number;
  /** Region height */
  height?: number;
}

// ============================================================================
// MARK TYPES
// ============================================================================

/**
 * Mark Type Enum
 * Types of marks that can be applied
 */
export type MarkType = 
  | 'SimpleMark' | 'ShapeMark' | 'BarcodeMark' 
  | 'CustomMark' | 'CollationMark';

/**
 * Mark Anchor Enum
 * What the mark is anchored/positioned relative to
 */
export type MarkAnchor = 
  | 'Plate' | 'PlatePunch' | 'Sheet' | 'ContentMargins' 
  | 'ImageMargins' | 'Gripper' | 'Group' | 'DieTemplate' 
  | 'StepAndRepeat' | 'Component' | 'Flat' | 'Signature' 
  | 'BoundSignature' | 'FoldedSignature' | 'Tile' | 'Page';

/**
 * Mark
 * Represents a printer's mark (registration, crop, barcode, etc.)
 */
export interface Mark {
  /** Unique mark ID - Read-only */
  id?: string;
  /** Mark name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Mark description */
  description?: string;
  /** Mark notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Mark type */
  type?: MarkType;
  /** Mark category (e.g., Registration, ColorBar, Crop) */
  category?: string;
  /** Placement settings */
  placement?: MarkPlacement;
  /** Appearance settings */
  appearance?: MarkAppearance;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Mark Placement
 * Controls how and where marks are placed
 */
export interface MarkPlacement {
  /** Placement type - Required */
  type: 'Smart' | 'Manual';
  /** What the mark is anchored to - Required */
  anchor: MarkAnchor;
  /** Placement mode - Required */
  mode: 'Basic' | 'Advanced';
  /** Basic placement settings - Required */
  'basic-placement': BasicPlacement;
  /** Advanced placement settings - Required */
  'advanced-placement': AdvancedPlacement;
  /** Whether to place on both sides */
  'both-sides'?: boolean;
}

/**
 * Basic Placement
 * Simple placement with location and offsets
 */
export interface BasicPlacement {
  /** Location code (e.g., TopLeft, Center, etc.) */
  location?: string;
  /** Horizontal offset from anchor */
  'horizontal-offset'?: string;
  /** Vertical offset from anchor */
  'vertical-offset'?: string;
}

/**
 * Advanced Placement
 * Complex placement with multiple rules
 */
export interface AdvancedPlacement {
  /** Array of placement rules */
  rules?: PlacementRule[];
}

/**
 * Placement Rule
 * Individual rule for advanced placement
 */
export interface PlacementRule {
  /** Location code */
  location?: string;
  /** Horizontal offset */
  'horizontal-offset'?: string;
  /** Vertical offset */
  'vertical-offset'?: string;
  /** Whether to resize sheet to accommodate mark */
  'resize-sheet'?: boolean;
}

/**
 * Mark Appearance
 * Visual appearance settings for marks
 */
export interface MarkAppearance {
  /** Appearance type */
  type?: string;
  /** Size settings */
  size?: SizeProps;
  /** Color settings */
  color?: MarkColor;
  /** Additional appearance properties */
  [key: string]: any;
}

/**
 * Size Props
 * Size properties for marks
 */
export interface SizeProps {
  /** Width */
  width?: ScalarValue;
  /** Height */
  height?: ScalarValue;
}

/**
 * Mark Color
 * Color specification for marks
 */
export interface MarkColor {
  /** Color type */
  type?: string;
  /** Color values */
  values?: number[];
  /** Additional color properties */
  [key: string]: any;
}

/**
 * Mark Asset Reference
 * Reference to a mark asset
 */
export interface MarkAssetRef {
  /** Asset ID */
  id?: string;
  /** Path to asset */
  path?: string;
}

// ============================================================================
// THING (MACHINE/EQUIPMENT) TYPES
// ============================================================================

/**
 * Thing Type Enum
 * Types of printing and finishing equipment
 */
export type ThingType = 
  | 'SheetFedDigitalPress' | 'WebFedDigitalPress' 
  | 'SheetFedOffsetPress' | 'WebFedOffsetPress' 
  | 'WebFedFlexoPress' | 'FlatbedWideFormatPress' 
  | 'RollFedWideFormatPress' | 'GuillotineCutter' 
  | 'FlatbedDieCutter' | 'RotaryDieCutter' 
  | 'DigitalCuttingTable' | 'DieMaking' | 'Corrugator';

/**
 * Thing
 * Represents a machine or piece of equipment
 */
export interface Thing {
  /** Unique thing ID - Read-only */
  id?: string;
  /** Thing name - Required */
  name: string;
  /** External system ID */
  'external-id'?: string;
  /** Thing description */
  description?: string;
  /** Thing notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Thing type (equipment type) - Required */
  type: ThingType;
  /** Vendor/manufacturer name */
  vendor?: string;
  /** Model name */
  model?: string;
  /** Serial number */
  'serial-number'?: string;
  /** Physical location */
  location?: string;
  /** Capabilities and specifications */
  capabilities?: ThingCapabilities;
  /** Costing information */
  costing?: ThingCosting;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Thing Capabilities
 * Technical capabilities and specifications of equipment
 */
export interface ThingCapabilities {
  /** Minimum sheet width */
  'min-sheet-width'?: ScalarValue;
  /** Maximum sheet width */
  'max-sheet-width'?: ScalarValue;
  /** Minimum sheet height */
  'min-sheet-height'?: ScalarValue;
  /** Maximum sheet height */
  'max-sheet-height'?: ScalarValue;
  /** Minimum stock thickness */
  'min-stock-thickness'?: ScalarValue;
  /** Maximum stock thickness */
  'max-stock-thickness'?: ScalarValue;
  /** Maximum speed (sheets per hour or similar) */
  'max-speed'?: number;
  /** Whether equipment supports perforation */
  'supports-perfing'?: boolean;
  /** Whether equipment supports scoring */
  'supports-scoring'?: boolean;
  /** Additional capabilities */
  [key: string]: any;
}

/**
 * Thing Costing
 * Cost information for equipment usage
 */
export interface ThingCosting {
  /** Currency code */
  currency?: string;
  /** Setup time */
  setup?: TimeValue;
  /** Running rate (cost per unit time or impression) */
  rate?: ScalarValue;
  /** Minimum charge */
  'minimum-charge'?: ScalarValue;
  /** Running waste (percentage or count) */
  'running-waste'?: number;
  /** Setup waste (count) */
  'setup-waste'?: number;
}

/**
 * Machine
 * Alias for Thing - represents a machine
 */
export type Machine = Thing;

// ============================================================================
// COLOR AND SCREENING TYPES
// ============================================================================

/**
 * Lab Color
 * CIE L*a*b* color specification
 */
export interface LabColor {
  /** Lightness (0-100) */
  l?: number;
  /** a* axis (green-red) */
  a?: number;
  /** b* axis (blue-yellow) */
  b?: number;
}

/**
 * CMYK Color
 * CMYK color specification
 */
export interface CmykColor {
  /** Cyan (0-100) */
  c?: number;
  /** Magenta (0-100) */
  m?: number;
  /** Yellow (0-100) */
  y?: number;
  /** Black (0-100) */
  k?: number;
}

/**
 * RGB Color
 * RGB color specification
 */
export interface RgbColor {
  /** Red (0-255) */
  r?: number;
  /** Green (0-255) */
  g?: number;
  /** Blue (0-255) */
  b?: number;
}

/**
 * Spot Color
 * Represents a spot color definition
 */
export interface SpotColor {
  /** Unique spot color ID - Read-only */
  id?: string;
  /** Spot color name - Required */
  name: string;
  /** CIE L*a*b* color values */
  lab?: LabColor;
  /** CMYK color values */
  cmyk?: CmykColor;
  /** RGB color values */
  rgb?: RgbColor;
  /** Spot color description */
  description?: string;
  /** External system ID */
  'external-id'?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Screenruling
 * Represents a halftone screen ruling specification
 */
export interface Screenruling {
  /** Unique screenruling ID - Read-only */
  id?: string;
  /** Screenruling name - Required */
  name: string;
  /** Ruling value (e.g., 150, 175, 200) */
  value?: number;
  /** Unit (e.g., lpi, lpc) */
  unit?: string;
  /** Screenruling description */
  description?: string;
  /** External system ID */
  'external-id'?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

// ============================================================================
// TOOL TYPE AND MAPPING
// ============================================================================

/**
 * Tool Type
 * Represents a cutting, creasing, or perforation tool
 */
export interface ToolType {
  /** Unique tool type ID - Read-only */
  id?: string;
  /** Tool type name - Required */
  name: string;
  /** Process reference - Required */
  process: Reference;
  /** Tool width - Required */
  width: ScalarValue;
  /** Array of mappings for this tool - Required */
  mappings: Mapping[];
  /** Tool type description */
  description?: string;
  /** Tool type notes */
  notes?: string;
  /** External system ID */
  'external-id'?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Mapping
 * Mapping rule for tool types
 * Maps artwork attributes (spot colors, layers) to tool types
 */
export interface Mapping {
  /** Mapping source - Required */
  source: 'Spot' | 'Layer';
  /** Paint type filter */
  'paint-type'?: 'Filled' | 'Stroked' | 'FilledOrStroked' | 'FilledAndStroked';
  /** Text matching mode - Required */
  'text-match': 'Equals' | 'StartsWith' | 'Contains';
  /** Text to match - Required */
  text: string;
  /** Tool offset from path */
  offset?: ScalarValue;
  /** Join style for offset paths */
  'join-style'?: 'None' | 'Miter' | 'Bevel' | 'Round';
  /** Miter limit for miter joins */
  'miter-limit'?: ScalarValue;
}

// ============================================================================
// SIGNATURE AGGREGATION TYPES
// ============================================================================

/**
 * Signature Aggregations
 * Aggregated position information for signatures across layouts
 */
export interface SignatureAggregations {
  /** Signature identifier */
  signature?: string;
  /** Array of aggregations */
  aggregations?: Aggregation[];
}

/**
 * Aggregation
 * Aggregated placement information
 */
export interface Aggregation {
  /** Aggregation type */
  type?: string;
  /** Count of placements */
  count?: number;
  /** Array of positions */
  positions?: Position[];
}

/**
 * Position
 * Position and rotation information for a placed component
 */
export interface Position {
  /** X coordinate */
  x?: number;
  /** Y coordinate */
  y?: number;
  /** Rotation in degrees */
  rotation?: number;
}

// ============================================================================
// PROFILE AND PRESET TYPES
// ============================================================================

/**
 * Profile
 * Represents a configuration profile
 * Used for imposition settings, planning algorithms, etc.
 */
export interface Profile {
  /** Unique profile ID - Read-only */
  id?: string;
  /** Profile name - Required */
  name: string;
  /** Profile description */
  description?: string;
  /** Profile notes */
  notes?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
  /** Version - Read-only */
  version?: string;
  /** Profile type */
  type?: string;
  /** Profile settings (type-specific) */
  settings?: any;
  /** External system ID */
  'external-id'?: string;
  /** File path */
  path?: string;
  /** Custom properties */
  properties?: PropertyObject[];
}

/**
 * Preset Entity
 * Represents a preset configuration
 * Used for import/export presets, product presets, etc.
 */
export interface PresetEntity {
  /** Unique preset ID - Read-only */
  id?: string;
  /** Preset name */
  name?: string;
  /** Preset type */
  type?: string;
  /** Preset category */
  category?: string;
  /** Preset description */
  description?: string;
  /** Creation timestamp - Read-only */
  'created-on'?: string;
  /** Last modification timestamp - Read-only */
  'modified-on'?: string;
}

// ============================================================================
// ADDITIONAL SUPPORTING TYPES
// ============================================================================

/**
 * Props Resource
 * Resource for setting custom properties
 */
export interface PropsResource {
  /** Array of custom properties */
  properties?: PropertyObject[];
}

/**
 * Stroke
 * Stroke/line specification
 */
export interface Stroke {
  /** Stroke width */
  width?: ScalarValue;
  /** Stroke color */
  color?: string;
  /** Stroke style */
  style?: string;
}

/**
 * Underprint
 * Underprint settings
 */
export interface Underprint {
  /** Underprint type - Required */
  type: 'None' | 'Annulus' | 'Full';
  /** Underprint amount */
  amount?: ScalarValue;
}

/**
 * N-Up Entity
 * N-up repeat settings for signatures
 */
export interface NUpEntity {
  /** Number of repeats (1-50) - Required */
  number: number;
  /** Gap between repeats */
  gap?: string;
}

/**
 * Layouts Info
 * Layout placement counts for components
 */
export interface LayoutsInfo {
  /** Layout index */
  index?: number;
  /** Number placed in layout */
  placed?: number;
}