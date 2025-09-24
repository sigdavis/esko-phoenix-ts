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
exports.default = exports.PhoenixBase = exports.PhoenixPresetsAPI = exports.PhoenixLibrariesAPI = exports.PhoenixProjectsAPI = exports.PhoenixJobsAPI = exports.Phoenix = void 0;
// Main Phoenix API Client
var phoenix_1 = require("./phoenix");
Object.defineProperty(exports, "Phoenix", { enumerable: true, get: function () { return phoenix_1.Phoenix; } });
// Individual API modules
var phoenix_jobs_1 = require("./phoenix-jobs");
Object.defineProperty(exports, "PhoenixJobsAPI", { enumerable: true, get: function () { return phoenix_jobs_1.PhoenixJobsAPI; } });
var phoenix_projects_1 = require("./phoenix-projects");
Object.defineProperty(exports, "PhoenixProjectsAPI", { enumerable: true, get: function () { return phoenix_projects_1.PhoenixProjectsAPI; } });
var phoenix_libraries_1 = require("./phoenix-libraries");
Object.defineProperty(exports, "PhoenixLibrariesAPI", { enumerable: true, get: function () { return phoenix_libraries_1.PhoenixLibrariesAPI; } });
var phoenix_presets_1 = require("./phoenix-presets");
Object.defineProperty(exports, "PhoenixPresetsAPI", { enumerable: true, get: function () { return phoenix_presets_1.PhoenixPresetsAPI; } });
// Base class
var phoenix_base_1 = require("./phoenix-base");
Object.defineProperty(exports, "PhoenixBase", { enumerable: true, get: function () { return phoenix_base_1.PhoenixBase; } });
// All types
__exportStar(require("./types"), exports);
// Default export
var phoenix_2 = require("./phoenix");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return phoenix_2.Phoenix; } });
//# sourceMappingURL=index.js.map