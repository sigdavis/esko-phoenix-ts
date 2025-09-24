"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoenixPresetsAPI = exports.PhoenixLibrariesAPI = exports.PhoenixProjectsAPI = exports.PhoenixJobsAPI = exports.Phoenix = void 0;
const phoenix_jobs_1 = require("./phoenix-jobs");
const phoenix_projects_1 = require("./phoenix-projects");
const phoenix_libraries_1 = require("./phoenix-libraries");
const phoenix_presets_1 = require("./phoenix-presets");
class Phoenix {
    constructor(config) {
        // Initialize all API modules with the same configuration
        this.jobs = new phoenix_jobs_1.PhoenixJobsAPI(config);
        this.projects = new phoenix_projects_1.PhoenixProjectsAPI(config);
        this.libraries = new phoenix_libraries_1.PhoenixLibrariesAPI(config);
        this.presets = new phoenix_presets_1.PhoenixPresetsAPI(config);
    }
    // ===========================================
    // UTILITY METHODS
    // ===========================================
    async healthCheck() {
        try {
            // Use projects API for health check since jobs API is deprecated
            await this.projects.getProjects();
            return true;
        }
        catch (error) {
            return false;
        }
    }
    setHeaders(headers) {
        this.jobs.setHeaders(headers);
        this.projects.setHeaders(headers);
        this.libraries.setHeaders(headers);
        this.presets.setHeaders(headers);
    }
    setTimeout(timeout) {
        this.jobs.setTimeout(timeout);
        this.projects.setTimeout(timeout);
        this.libraries.setTimeout(timeout);
        this.presets.setTimeout(timeout);
    }
    getConfig() {
        return this.projects.getConfig();
    }
}
exports.Phoenix = Phoenix;
// Re-export all types for convenience
__exportStar(require("./types"), exports);
var phoenix_jobs_2 = require("./phoenix-jobs");
Object.defineProperty(exports, "PhoenixJobsAPI", { enumerable: true, get: function () { return phoenix_jobs_2.PhoenixJobsAPI; } });
var phoenix_projects_2 = require("./phoenix-projects");
Object.defineProperty(exports, "PhoenixProjectsAPI", { enumerable: true, get: function () { return phoenix_projects_2.PhoenixProjectsAPI; } });
var phoenix_libraries_2 = require("./phoenix-libraries");
Object.defineProperty(exports, "PhoenixLibrariesAPI", { enumerable: true, get: function () { return phoenix_libraries_2.PhoenixLibrariesAPI; } });
var phoenix_presets_2 = require("./phoenix-presets");
Object.defineProperty(exports, "PhoenixPresetsAPI", { enumerable: true, get: function () { return phoenix_presets_2.PhoenixPresetsAPI; } });
//# sourceMappingURL=phoenix.js.map