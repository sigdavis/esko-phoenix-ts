/**
 * Client configuration and common types
 */

export interface ClientConfig {
  /** Base URL for the API (e.g., 'https://server.com/phoenix') */
  baseUrl: string;
  /** Default headers to include in all requests */
  headers?: Record<string, string>;
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Number of retry attempts for failed requests */
  retries?: number;
  /** Delay between retries in milliseconds */
  retryDelay?: number;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
  data?: any;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  timeout?: number;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetchOptions extends RequestInit {
  params?: Record<string, any>;
}