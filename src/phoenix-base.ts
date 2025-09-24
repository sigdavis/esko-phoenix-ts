// Phoenix API Base Class
// ============================================

import * as http from "http";
import * as https from "https";
import { PhoenixConfig, RequestOptions } from "./types";

export class PhoenixBase {
	protected config: PhoenixConfig;

	constructor(config: PhoenixConfig) {
		this.config = {
			host: config.host,
			port: config.port || 9090,
			basePath: config.basePath || "/api/v1",
			timeout: config.timeout || 30000,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				...config.headers,
			},
		};
	}

	protected async makeRequest<T>(options: RequestOptions): Promise<T> {
		return new Promise((resolve, reject) => {
			const isHttps = this.config.host.startsWith("https://");
			const protocol = isHttps ? https : http;
			const host = this.config.host.replace(/^https?:\/\//, "");

			const requestOptions: http.RequestOptions = {
				hostname: host,
				port: this.config.port,
				path: `${this.config.basePath}${options.path}`,
				method: options.method,
				headers: {
					...this.config.headers,
					...options.headers,
				},
				timeout: options.timeout || this.config.timeout,
			};

			const req = protocol.request(requestOptions, (res) => {
				let data = "";

				res.on("data", (chunk) => {
					data += chunk;
				});

				res.on("end", () => {
					try {
						if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
							const result = data ? JSON.parse(data) : {};
							resolve(result);
						} else {
							const error = data ? JSON.parse(data) : { message: "Request failed" };
							reject({
								status: res.statusCode,
								message: error.message || `HTTP ${res.statusCode}`,
								response: error,
							});
						}
					} catch (e) {
						// Handle non-JSON responses
						if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
							resolve(data as any);
						} else {
							reject({
								status: res.statusCode,
								message: `HTTP ${res.statusCode}`,
								response: data,
							});
						}
					}
				});
			});

			req.on("error", (error) => {
				reject({
					status: 0,
					message: error.message,
					error,
				});
			});

			req.on("timeout", () => {
				req.destroy();
				reject({
					status: 0,
					message: "Request timeout",
				});
			});

			// Send body data if present
			if (options.body) {
				const bodyString = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
				req.write(bodyString);
			}

			req.end();
		});
	}

	protected async uploadFile(path: string, file: Buffer, filename: string): Promise<any> {
		const boundary = `----PhoenixFormBoundary${Date.now()}`;
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest({
			method: "POST",
			path,
			body: formData,
			headers: {
				"Content-Type": `multipart/form-data; boundary=${boundary}`,
				"Content-Length": Buffer.byteLength(formData).toString(),
			},
		});
	}

	protected createMultipartFormData(file: Buffer, filename: string, boundary: string): string {
		const formData = [
			`--${boundary}`,
			`Content-Disposition: form-data; name="file"; filename="${filename}"`,
			"Content-Type: application/octet-stream",
			"",
			file.toString("binary"),
			`--${boundary}--`,
		].join("\r\n");

		return formData;
	}

	// Utility methods
	setHeaders(headers: Record<string, string>): void {
		this.config.headers = { ...this.config.headers, ...headers };
	}

	setTimeout(timeout: number): void {
		this.config.timeout = timeout;
	}

	getConfig(): PhoenixConfig {
		return { ...this.config };
	}

	protected handleApiError(error: any): never {
		if (error.response?.message) {
			throw new Error(`Phoenix API Error: ${error.response.message}`);
		}
		throw new Error(`Phoenix API Error: ${error.message || "Unknown error"}`);
	}
}
