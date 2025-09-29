/**
 * Response type definitions
 * Most responses use the models directly, but some have specific response wrappers
 */

export { ResponseEntity } from './models';

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
  PresetEntity
} from './models';

// Additional response wrapper types if needed
export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp?: string;
  path?: string;
}

export interface PagedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface BatchOperationResponse {
  successful: number;
  failed: number;
  results: Array<{
    id?: string;
    status: 'success' | 'error';
    message?: string;
    data?: any;
  }>;
}