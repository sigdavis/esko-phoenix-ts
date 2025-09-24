import * as http from "http";
import * as https from "https";
import { URL } from "url";
import { PhoenixConfig } from "./types";

interface RequestOptions {
	method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	path: string;
	body?: any;
	contentType?: string;
}

export abstract class PhoenixBase {
	protected config: PhoenixConfig;
	protected httpModule: typeof http | typeof https;

	constructor(config: PhoenixConfig) {
		this.config = {
			basePath: "/phoenix",
			timeout: 30000,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			...config,
		};

		// Choose HTTP or HTTPS based on port and protocol
		const isHttps = config.port === 443 || config.host.startsWith("https://");
		this.httpModule = isHttps ? https : http;
	}

	protected async makeRequest<T>(options: RequestOptions): Promise<T> {
		return new Promise((resolve, reject) => {
			const url = new URL(`${this.config.host.startsWith("http") ? this.config.host : `http://${this.config.host}`}:${this.config.port}`);
			const fullPath = `${this.config.basePath}${options.path}`;

			const requestOptions = {
				hostname: url.hostname,
				port: this.config.port,
				path: fullPath,
				method: options.method,
				headers: {
					...this.config.headers,
					...(options.contentType && { "Content-Type": options.contentType }),
				},
				timeout: this.config.timeout,
			};

			const req = this.httpModule.request(requestOptions, (res) => {
				let data = "";

				res.on("data", (chunk) => {
					data += chunk;
				});

				res.on("end", () => {
					try {
						const response = JSON.parse(data);
						resolve(response);
					} catch (error) {
						reject(new Error(`Failed to parse response: ${error}`));
					}
				});
			});

			req.on("error", (error) => {
				reject(error);
			});

			req.on("timeout", () => {
				req.destroy();
				reject(new Error("Request timeout"));
			});

			if (options.body) {
				const bodyString = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
				req.write(bodyString);
			}

			req.end();
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
	async healthCheck(): Promise<boolean> {
		try {
			await this.makeRequest<any>({
				method: "GET",
				path: "/projects",
			});
			return true;
		} catch (error) {
			return false;
		}
	}

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
		if (error.response?.data) {
			throw new Error(`Phoenix API Error: ${error.response.data.message || error.message}`);
		}
		throw new Error(`Phoenix API Error: ${error.message}`);
	}
}