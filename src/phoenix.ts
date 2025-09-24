import { PhoenixConfig } from "./types";
import { PhoenixJobsAPI } from "./phoenix-jobs";
import { PhoenixProjectsAPI } from "./phoenix-projects";
import { PhoenixLibrariesAPI } from "./phoenix-libraries";
import { PhoenixPresetsAPI } from "./phoenix-presets";

export class Phoenix {
	public jobs: PhoenixJobsAPI;
	public projects: PhoenixProjectsAPI;
	public libraries: PhoenixLibrariesAPI;
	public presets: PhoenixPresetsAPI;

	constructor(config: PhoenixConfig) {
		// Initialize all API modules with the same configuration
		this.jobs = new PhoenixJobsAPI(config);
		this.projects = new PhoenixProjectsAPI(config);
		this.libraries = new PhoenixLibrariesAPI(config);
		this.presets = new PhoenixPresetsAPI(config);
	}

	// ===========================================
	// UTILITY METHODS
	// ===========================================

	async healthCheck(): Promise<boolean> {
		try {
			// Use projects API for health check since jobs API is deprecated
			await this.projects.getProjects();
			return true;
		} catch (error) {
			return false;
		}
	}

	setHeaders(headers: Record<string, string>): void {
		this.jobs.setHeaders(headers);
		this.projects.setHeaders(headers);
		this.libraries.setHeaders(headers);
		this.presets.setHeaders(headers);
	}

	setTimeout(timeout: number): void {
		this.jobs.setTimeout(timeout);
		this.projects.setTimeout(timeout);
		this.libraries.setTimeout(timeout);
		this.presets.setTimeout(timeout);
	}

	getConfig(): PhoenixConfig {
		return this.projects.getConfig();
	}
}

// Re-export all types for convenience
export * from "./types";
export { PhoenixJobsAPI } from "./phoenix-jobs";
export { PhoenixProjectsAPI } from "./phoenix-projects";
export { PhoenixLibrariesAPI } from "./phoenix-libraries";
export { PhoenixPresetsAPI } from "./phoenix-presets";