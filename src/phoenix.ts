// Phoenix Main API Client
// ============================================

import { PhoenixConfig } from "./types";
import { PhoenixProjectsAPI } from "./phoenix-projects";
import { PhoenixLibrariesAPI } from "./phoenix-libraries";
import { PhoenixPresetsAPI } from "./phoenix-presets";

export class Phoenix {
	public projects: PhoenixProjectsAPI;
	public libraries: PhoenixLibrariesAPI;
	public presets: PhoenixPresetsAPI;
	private config: PhoenixConfig;

	constructor(config: PhoenixConfig) {
		this.config = {
			host: config.host,
			port: config.port || 9090,
			basePath: config.basePath || "/api/v1",
			timeout: config.timeout || 30000,
			headers: config.headers || {},
		};

		// Initialize all API modules
		this.projects = new PhoenixProjectsAPI(this.config);
		this.libraries = new PhoenixLibrariesAPI(this.config);
		this.presets = new PhoenixPresetsAPI(this.config);
	}

	// ===========================================
	// UTILITY METHODS
	// ===========================================

	/**
	 * Check if the Phoenix API is accessible
	 */
	async healthCheck(): Promise<boolean> {
		try {
			await this.projects.getProjects();
			return true;
		} catch (error) {
			return false;
		}
	}

	/**
	 * Set custom headers for all API calls
	 */
	setHeaders(headers: Record<string, string>): void {
		this.config.headers = { ...this.config.headers, ...headers };
		this.projects.setHeaders(headers);
		this.libraries.setHeaders(headers);
		this.presets.setHeaders(headers);
	}

	/**
	 * Set timeout for all API calls
	 */
	setTimeout(timeout: number): void {
		this.config.timeout = timeout;
		this.projects.setTimeout(timeout);
		this.libraries.setTimeout(timeout);
		this.presets.setTimeout(timeout);
	}

	/**
	 * Get current configuration
	 */
	getConfig(): PhoenixConfig {
		return { ...this.config };
	}

	/**
	 * Create a new Phoenix instance with updated configuration
	 */
	withConfig(config: Partial<PhoenixConfig>): Phoenix {
		return new Phoenix({
			...this.config,
			...config,
		});
	}
}

// Re-export all types and modules for convenience
export * from "./types";
export { PhoenixProjectsAPI } from "./phoenix-projects";
export { PhoenixLibrariesAPI } from "./phoenix-libraries";
export { PhoenixPresetsAPI } from "./phoenix-presets";
export { PhoenixBase } from "./phoenix-base";
