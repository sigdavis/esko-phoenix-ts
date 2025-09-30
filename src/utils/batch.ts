/**
 * Batch operation utilities
 */

import { Phoenix } from "../client/Phoenix";
import { Product, Stock, ResponseEntity } from "../types";

export interface BatchOperationResult<T> {
	successful: T[];
	failed: Array<{
		item: any;
		error: any;
	}>;
	total: number;
	successCount: number;
	failureCount: number;
}

/**
 * Batch create products
 */
export async function batchCreateProducts(client: Phoenix, projectId: string, products: Product[]): Promise<BatchOperationResult<Product>> {
	const result: BatchOperationResult<Product> = {
		successful: [],
		failed: [],
		total: products.length,
		successCount: 0,
		failureCount: 0,
	};

	for (const product of products) {
		try {
			const response = await client.projects.importProduct(projectId, {
				path: "", // Would need proper implementation
				preset: "default",
			});
			result.successful.push(product);
			result.successCount++;
		} catch (error) {
			result.failed.push({ item: product, error });
			result.failureCount++;
		}
	}

	return result;
}

/**
 * Batch delete stocks
 */
export async function batchDeleteStocks(client: Phoenix, stockNames: string[]): Promise<BatchOperationResult<string>> {
	const result: BatchOperationResult<string> = {
		successful: [],
		failed: [],
		total: stockNames.length,
		successCount: 0,
		failureCount: 0,
	};

	for (const stockName of stockNames) {
		try {
			await client.libraries.deleteStock(stockName);
			result.successful.push(stockName);
			result.successCount++;
		} catch (error) {
			result.failed.push({ item: stockName, error });
			result.failureCount++;
		}
	}

	return result;
}

/**
 * Process items in chunks
 */
export async function processInChunks<T, R>(items: T[], processor: (item: T) => Promise<R>, chunkSize: number = 10): Promise<R[]> {
	const results: R[] = [];

	for (let i = 0; i < items.length; i += chunkSize) {
		const chunk = items.slice(i, i + chunkSize);
		const chunkResults = await Promise.all(chunk.map(processor));
		results.push(...chunkResults);
	}

	return results;
}
