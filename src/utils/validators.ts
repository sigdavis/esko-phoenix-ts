/**
 * Validation utilities
 */

import { ScalarValue, Stock, Product, Layout } from '../types';

/**
 * Validate scalar value
 */
export function validateScalarValue(value: any): value is ScalarValue {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.value === 'number' &&
    (value.unit === undefined || typeof value.unit === 'string')
  );
}

/**
 * Validate product dimensions
 */
export function validateProductDimensions(product: Product): boolean {
  if (!product.width || !product.height) {
    return false;
  }
  return validateScalarValue(product.width) && validateScalarValue(product.height);
}

/**
 * Validate stock type
 */
export function validateStockType(stock: Stock): boolean {
  return stock.type === 'Sheet' || stock.type === 'Roll';
}

/**
 * Validate layout regions
 */
export function validateLayoutRegions(layout: Layout): boolean {
  if (!layout.regions || !Array.isArray(layout.regions)) {
    return true; // Regions are optional
  }

  if (layout.type === 'Sheet') {
    return layout.regions.every(r => 
      ['Sheet', 'Plate', 'Component', 'Group', 'StepAndRepeat', 'Waste', 'Bleed']
        .includes((r as any).type)
    );
  } else if (layout.type === 'Roll') {
    return layout.regions.every(r => 
      ['Roll', 'Segment', 'Lane', 'Ribbon', 'Component', 'Blank', 'Frame', 'Strip', 'LeadIn', 'LeadOut']
        .includes((r as any).type)
    );
  }

  return false;
}

/**
 * Validate date string
 */
export function isValidISODate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.toISOString() === dateString;
}

/**
 * Validate required fields
 */
export function validateRequiredFields<T extends object>(
  obj: T, 
  requiredFields: (keyof T)[]
): boolean {
  return requiredFields.every(field => 
    obj[field] !== undefined && obj[field] !== null && obj[field] !== ''
  );
}