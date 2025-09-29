/**
 * Base API client with common HTTP methods
 */

import { ClientConfig, ApiResponse, ApiError, RequestOptions, HttpMethod, FetchOptions } from './types';

export class BaseClient {
  protected config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = {
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
      ...config
    };

    // Ensure baseUrl doesn't end with slash
    if (this.config.baseUrl.endsWith('/')) {
      this.config.baseUrl = this.config.baseUrl.slice(0, -1);
    }
  }

  /**
   * Make an HTTP request
   */
  protected async request<T = any>(
    method: HttpMethod,
    path: string,
    options: RequestOptions = {},
    body?: any
  ): Promise<ApiResponse<T>> {
    const url = this.buildUrl(path, options.params);
    const headers = this.buildHeaders(options.headers);
    
    const fetchOptions: FetchOptions = {
      method,
      headers,
      signal: this.createAbortSignal(options.timeout || this.config.timeout)
    };

    if (body && method !== 'GET') {
      if (headers['Content-Type'] === 'application/json') {
        fetchOptions.body = JSON.stringify(body);
      } else {
        fetchOptions.body = body;
      }
    }

    let lastError: any;
    const retries = this.config.retries || 0;

    for (let i = 0; i <= retries; i++) {
      try {
        const response = await fetch(url, fetchOptions);
        
        if (!response.ok) {
          throw await this.createError(response);
        }

        const contentType = response.headers.get('Content-Type');
        let data: any;

        if (contentType?.includes('application/json')) {
          data = await response.json();
        } else if (contentType?.includes('application/xml') || contentType?.includes('text/xml')) {
          data = await response.text();
        } else {
          data = await response.text();
        }

        return {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: this.parseHeaders(response.headers)
        };
      } catch (error) {
        lastError = error;
        if (i < retries) {
          await this.delay(this.config.retryDelay || 1000);
        }
      }
    }

    throw lastError;
  }

  /**
   * GET request
   */
  protected get<T = any>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>('GET', path, options);
  }

  /**
   * POST request
   */
  protected post<T = any>(path: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>('POST', path, options, body);
  }

  /**
   * PUT request
   */
  protected put<T = any>(path: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', path, options, body);
  }

  /**
   * PATCH request
   */
  protected patch<T = any>(path: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>('PATCH', path, options, body);
  }

  /**
   * DELETE request
   */
  protected delete<T = any>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', path, options);
  }

  /**
   * Build full URL with query parameters
   */
  private buildUrl(path: string, params?: Record<string, any>): string {
    const url = `${this.config.baseUrl}${path}`;
    
    if (!params || Object.keys(params).length === 0) {
      return url;
    }

    const queryString = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v !== undefined && v !== null)
    ).toString();

    return queryString ? `${url}?${queryString}` : url;
  }

  /**
   * Build request headers
   */
  private buildHeaders(additionalHeaders?: Record<string, string>): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...this.config.headers,
      ...additionalHeaders
    };
  }

  /**
   * Create abort signal for timeout
   */
  private createAbortSignal(timeout?: number): AbortSignal | undefined {
    if (!timeout) return undefined;
    
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeout);
    return controller.signal;
  }

  /**
   * Parse response headers
   */
  private parseHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  /**
   * Create error from response
   */
  private async createError(response: Response): Promise<ApiError> {
    let data: any;
    
    try {
      const contentType = response.headers.get('Content-Type');
      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
    } catch {
      data = null;
    }

    return {
      message: data?.message || response.statusText || 'Request failed',
      status: response.status,
      statusText: response.statusText,
      data
    };
  }

  /**
   * Delay utility for retries
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}