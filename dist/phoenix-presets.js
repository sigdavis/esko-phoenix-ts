"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoenixPresetsAPI = void 0;
const phoenix_base_1 = require("./phoenix-base");
class PhoenixPresetsAPI extends phoenix_base_1.PhoenixBase {
    // Imposition AI Profiles
    async getImpositionAiProfiles() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/imposition-ai",
        });
    }
    async addImpositionAiProfile(profile) {
        return this.makeRequest({
            method: "POST",
            path: "/presets/imposition-ai",
            body: profile,
        });
    }
    async getImpositionAiProfile(profileId) {
        return this.makeRequest({
            method: "GET",
            path: `/presets/imposition-ai/${profileId}`,
        });
    }
    async editImpositionAiProfile(profileId, profile) {
        return this.makeRequest({
            method: "PUT",
            path: `/presets/imposition-ai/${profileId}`,
            body: profile,
        });
    }
    async deleteImpositionAiProfile(profileId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/presets/imposition-ai/${profileId}`,
        });
    }
    // Import Presets
    async getProductCsvImportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/product/csv",
        });
    }
    async getStockCsvPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/stock-csv",
        });
    }
    async getDdes2DieLayoutImportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/die/ddes2",
        });
    }
    async getDdes3DieLayoutImportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/die/ddes3",
        });
    }
    async getDxfDieLayoutImportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/die/dxf",
        });
    }
    async getMfgDieImportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/die/mfg",
        });
    }
    async getPdfDieLayoutImportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/import/die/pdf",
        });
    }
    // Export Presets - JDF
    async getHpJdfExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/hp-jdf",
        });
    }
    async getJdfExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/jdf",
        });
    }
    async getCuttingJdfExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/jdf-cutting",
        });
    }
    // Export Presets - Reports
    async getJsonReportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/report/json",
        });
    }
    async getCsvReportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/report/csv",
        });
    }
    async getXmlReportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/report/xml",
        });
    }
    async getTilingReportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/report/tiling",
        });
    }
    // Export Presets - Layouts
    async getPdfLayoutExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/layout/pdf",
        });
    }
    async getDxfLayoutExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/layout/dxf",
        });
    }
    async getMfgLayoutExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/layout/mfg",
        });
    }
    async getZccLayoutExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/layout/zcc",
        });
    }
    async getCff2LayoutExportPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/layout/cff2",
        });
    }
    // Cover Sheet
    async getCoverSheetPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/export/coversheet",
        });
    }
    // Action Presets
    async getImposePresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/actions/impose",
        });
    }
    async getPopulatePresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/actions/populate",
        });
    }
    async getStepRepeatPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/actions/steprepeat",
        });
    }
    async getPlanPresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/actions/plan",
        });
    }
    async getOptimizePresets() {
        return this.makeRequest({
            method: "GET",
            path: "/presets/actions/optimize",
        });
    }
}
exports.PhoenixPresetsAPI = PhoenixPresetsAPI;
//# sourceMappingURL=phoenix-presets.js.map