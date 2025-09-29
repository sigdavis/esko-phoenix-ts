/**
 * Request type definitions
 */

import { PropertyObject, ScalarValue } from './models';

// Job/Project requests
export interface CreateJobResource {
  name: string;
  description?: string;
  notes?: string;
  customer?: string;
  order?: string;
  due?: string;
  'external-id'?: string;
  source?: string;
}

export interface CreateProjectResource extends CreateJobResource {
  // Same as CreateJobResource
}

export interface OpenJobResource {
  path: string;
}

export interface OpenProjectResource extends OpenJobResource {
  // Same as OpenJobResource
}

export interface EditProjectResource {
  name?: string;
  description?: string;
  notes?: string;
  customer?: string;
  order?: string;
  due?: string;
  'external-id'?: string;
}

// Export/Import requests
export interface ExportResource {
  path: string;
  preset?: string;
  overwrite?: boolean;
  idref?: number;
}

export interface ExportCoverSheetResource extends ExportResource {
  template?: string;
  'include-thumbnails'?: boolean;
}

export interface ImportDieLayoutResource {
  path: string;
  preset?: string;
  name?: string;
  'die-design-name'?: string;
  idref?: number;
}

export interface ImportProductResource {
  path: string;
  preset?: string;
  'base-folder'?: string;
  idref?: number;
}

export interface ImportProductCsvResource extends ImportProductResource {
  // Same as ImportProductResource
}

export interface ImportStockResource {
  path: string;
  preset?: string;
  idref?: number;
}

export interface ImportAssetResource {
  path: string;
  type?: string;
  name?: string;
  idref?: number;
}

// Tool operations
export interface AutosnapArtworkEntity {
  path: string;
  'front-page'?: number;
  'back-page'?: number;
  'cut-ink'?: string;
  'crease-ink'?: string;
  'perf-ink'?: string;
  'cut-layer'?: string;
  'crease-layer'?: string;
  'perf-layer'?: string;
  'die-layout-name'?: string;
  'die-design-name'?: string;
  'tool-types'?: string[];
  idref?: number;
}

export interface ImageTracingResource {
  'tool-type': string;
  quality?: number;
  tolerance?: number;
  'blur-radius'?: number;
  simplify?: number;
  smoothing?: number;
  offset?: string;
  idref?: number;
}

export interface StepAndRepeatResource {
  preset?: string;
  products?: string[];
  'die-layouts'?: string[];
  layout?: string;
  'new-layout'?: string;
  idref?: number;
}

// Run operations
export interface RunReportsResource {
  profile?: string;
  reports?: string[];
  idref?: number;
}

export interface RunRulesResource {
  profile?: string;
  rules?: string[];
  idref?: number;
}

// Properties
export interface PropertiesResource {
  properties?: PropertyObject[];
  target?: string;
  idref?: number;
}

export type PropsResource = PropertiesResource;

// Apply operations
export interface ApplyDieLayoutResource {
  name?: string;
  side?: 'Front' | 'Back';
  idref?: number;
}

export interface ApplyMarkResource {
  name?: string;
  side?: 'Front' | 'Back';
  idref?: number;
}

export interface ApplyProfileResource {
  name?: string;
  type?: string;
  idref?: number;
}

// CAD operations
export interface CadDieDesignResource {
  product?: string;
  preset?: string;
  'die-design-name'?: string;
  idref?: number;
}

// Layout operations
export interface LayoutPresetsResource {
  presets?: string[];
  products?: string[];
  idref?: number;
}

export interface ExpandBleedResource {
  amount?: ScalarValue;
  products?: string[];
  parts?: string[];
  idref?: number;
}

export interface ProcessLayoutResource {
  layout?: string;
  operations?: string[];
  idref?: number;
}

// Save operations
export interface SaveDieDesignResource {
  name?: string;
  'die-design'?: string;
  path?: string;
  overwrite?: boolean;
  idref?: number;
}

export interface SaveDieLayoutResource {
  name?: string;
  'die-layout'?: string;
  path?: string;
  overwrite?: boolean;
  idref?: number;
}

export interface SaveTemplateResource {
  name?: string;
  type?: string;
  path?: string;
  overwrite?: boolean;
  idref?: number;
}

// Planning
export interface PlanResource {
  profile?: string;
  quantity?: number;
  priority?: number;
  'due-date'?: string;
  constraints?: PlanConstraints;
  idref?: number;
}

export interface PlanConstraints {
  'max-sheets'?: number;
  'max-rolls'?: number;
  'max-waste-percent'?: number;
  stocks?: string[];
  things?: string[];
}

// Edit operations
export interface EditProductResource {
  name?: string;
  quantity?: number;
  'ordered-quantity'?: number;
  description?: string;
  notes?: string;
  properties?: PropertyObject[];
}

export interface EditPartResource {
  name?: string;
  grain?: string;
  material?: any;
  properties?: PropertyObject[];
}

export interface EditComponentResource {
  name?: string;
  x?: number;
  y?: number;
  width?: ScalarValue;
  height?: ScalarValue;
  rotation?: number;
  mirror?: boolean;
  locked?: boolean;
  properties?: PropertyObject[];
}

export interface EditComponentResource {
  name?: string;
  x?: number;
  y?: number;
  width?: ScalarValue;
  height?: ScalarValue;
  rotation?: number;
  mirror?: boolean;
  locked?: boolean;
  properties?: PropertyObject[];
}