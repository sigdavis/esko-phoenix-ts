// Phoenix API - Main Entry Point
// ============================================

// Main Phoenix Client
export { Phoenix } from "./phoenix";
export { Phoenix as default } from "./phoenix";

// Individual API Modules
export { PhoenixProjectsAPI } from "./phoenix-projects";
export { PhoenixLibrariesAPI } from "./phoenix-libraries";
export { PhoenixPresetsAPI } from "./phoenix-presets";

// Base Class
export { PhoenixBase } from "./phoenix-base";

// All Types
export * from "./types";

// Convenience factory function
import { Phoenix } from "./phoenix";
import { PhoenixConfig } from "./types";

/**
 * Create a new Phoenix API client
 * @param config Phoenix API configuration
 * @returns Phoenix API client instance
 */
export function createPhoenixClient(config: PhoenixConfig): Phoenix {
	return new Phoenix(config);
}