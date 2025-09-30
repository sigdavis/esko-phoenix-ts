/**
 * Helper utilities
 */

import { PhoenixProject, Product } from '../types';

/**
 * Generate unique ID
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Wait for milliseconds
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry async function
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: any;
  
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (i < maxAttempts - 1) {
        await wait(delay * Math.pow(2, i)); // Exponential backoff
      }
    }
  }
  
  throw lastError;
}

/**
 * Find product by name
 */
export function findProductByName(
  products: Product[], 
  name: string
): Product | undefined {
  return products.find(p => p.name === name);
}

/**
 * Calculate project progress
 */
export function calculateProjectProgress(project: PhoenixProject): number {
  // This is a simplified example
  if (!project['created-on'] || !project.due) {
    return 0;
  }
  
  const created = new Date(project['created-on']).getTime();
  const due = new Date(project.due).getTime();
  const now = Date.now();
  
  if (now >= due) return 100;
  if (now <= created) return 0;
  
  return Math.round(((now - created) / (due - created)) * 100);
}

/**
 * Format date for API
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString();
}

/**
 * Parse API date
 */
export function parseAPIDate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Check if project is overdue
 */
export function isProjectOverdue(project: PhoenixProject): boolean {
  if (!project.due) return false;
  return new Date(project.due) < new Date();
}