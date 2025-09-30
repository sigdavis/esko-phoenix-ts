/**
 * Data transformation utilities
 */

import { ScalarValue, Product, Part, Stock } from "../types";

/**
 * Convert millimeters to inches
 */
export function mmToInches(value: ScalarValue): ScalarValue {
	if (value.unit === "mm") {
		return {
			value: value.value / 25.4,
			unit: "in",
		};
	}
	return value;
}

/**
 * Convert inches to millimeters
 */
export function inchesToMm(value: ScalarValue): ScalarValue {
	if (value.unit === "in") {
		return {
			value: value.value * 25.4,
			unit: "mm",
		};
	}
	return value;
}

/**
 * Convert scalar value to points (1/72 inch)
 */
export function toPoints(value: ScalarValue): number {
	switch (value.unit) {
		case "pt":
			return value.value;
		case "in":
			return value.value * 72;
		case "mm":
			return (value.value / 25.4) * 72;
		case "cm":
			return (value.value / 2.54) * 72;
		default:
			return value.value;
	}
}

/**
 * Calculate product area
 */
export function calculateProductArea(product: Product): ScalarValue | null {
	if (!product.width || !product.height) {
		return null;
	}

	const widthPt = toPoints(product.width);
	const heightPt = toPoints(product.height);

	return {
		value: (widthPt * heightPt) / (72 * 72), // Convert to square inches
		unit: "sq in",
	};
}

/**
 * Flatten nested parts structure
 */
export function flattenParts(products: Product[]): Part[] {
	const parts: Part[] = [];

	for (const product of products) {
		if (product.parts) {
			parts.push(...product.parts);
		}
	}

	return parts;
}

/**
 * Group stocks by type
 */
export function groupStocksByType(
	stocks: Stock[]
): {
	sheet: Stock[];
	roll: Stock[];
} {
	return {
		sheet: stocks.filter((s) => s.type === "Sheet"),
		roll: stocks.filter((s) => s.type === "Roll"),
	};
}

/**
 * Transform property array to object
 */
export function propertiesToObject(properties?: any[]): Record<string, any> {
	if (!properties) return {};

	const result: Record<string, any> = {};
	for (const prop of properties) {
		if (prop.name) {
			result[prop.name] = prop.value;
		}
	}
	return result;
}

/**
 * Transform object to property array
 */
export function objectToProperties(obj: Record<string, any>): any[] {
	return Object.entries(obj).map(([name, value]) => ({
		name,
		value,
		type:
			typeof value === "boolean"
				? "Boolean"
				: typeof value === "number"
				? Number.isInteger(value)
					? "Integer"
					: "Double"
				: typeof value === "string"
				? "String"
				: "Object",
	}));
}
