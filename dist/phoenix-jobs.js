"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoenixJobsAPI = void 0;
const phoenix_base_1 = require("./phoenix-base");
class PhoenixJobsAPI extends phoenix_base_1.PhoenixBase {
    // Core Job Management
    async getJobs() {
        return this.makeRequest({
            method: "GET",
            path: "/jobs",
        });
    }
    async createJob(jobResource) {
        return this.makeRequest({
            method: "POST",
            path: "/jobs",
            body: jobResource,
        });
    }
    async getJob(jobId, productVersion = "V1") {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}?product-version=${productVersion}`,
        });
    }
    async deleteJob(jobId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/jobs/${jobId}`,
        });
    }
    async editJob(jobId, editResource) {
        return this.makeRequest({
            method: "PATCH",
            path: `/jobs/${jobId}`,
            body: editResource,
        });
    }
    // Job Products
    async getJobProducts(jobId, thumb, thumbWidth, thumbHeight, renderMode) {
        const params = new URLSearchParams();
        if (thumb !== undefined)
            params.append("thumb", thumb.toString());
        if (thumbWidth !== undefined)
            params.append("thumb-width", thumbWidth.toString());
        if (thumbHeight !== undefined)
            params.append("thumb-height", thumbHeight.toString());
        if (renderMode !== undefined)
            params.append("render-mode", renderMode);
        const queryString = params.toString();
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/products${queryString ? "?" + queryString : ""}`,
        });
    }
    async createJobProduct(jobId, productResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/products`,
            body: productResource,
        });
    }
    async deleteJobProduct(jobId, productIndex) {
        return this.makeRequest({
            method: "DELETE",
            path: `/jobs/${jobId}/products/${productIndex}`,
        });
    }
    // Job Actions
    async imposeJob(jobId, imposeResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/impose`,
            body: imposeResource,
        });
    }
    async populateJobLayout(jobId, populateResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/populate`,
            body: populateResource,
        });
    }
    async placeJobComponent(jobId, placeResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/place`,
            body: placeResource,
        });
    }
    async autosnapJob(jobId, autosnapResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/autosnap`,
            body: autosnapResource,
        });
    }
    async stepRepeatJob(jobId, stepRepeatResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/steprepeat`,
            body: stepRepeatResource,
        });
    }
    async planJob(jobId, planResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/plan`,
            body: planResource,
        });
    }
    async optimizeJob(jobId, optimizeResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/optimize`,
            body: optimizeResource,
        });
    }
    async runJobScript(jobId, runScriptResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/runscript`,
            body: runScriptResource,
        });
    }
    async copyJob(jobId, copyResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/copy`,
            body: copyResource,
        });
    }
    async renameJob(jobId, renameResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/rename`,
            body: renameResource,
        });
    }
    // Job Layouts
    async getJobLayouts(jobId) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/layouts`,
        });
    }
    async deleteJobLayout(jobId, layoutIndex) {
        return this.makeRequest({
            method: "DELETE",
            path: `/jobs/${jobId}/layouts/${layoutIndex}`,
        });
    }
    async getJobLayoutSheet(jobId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
        });
    }
    async setJobLayoutSheet(jobId, layoutIndex, setSheetResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
            body: setSheetResource,
        });
    }
    async resizeJobLayoutSheet(jobId, layoutIndex, resizeResource) {
        return this.makeRequest({
            method: "PUT",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
            body: resizeResource,
        });
    }
    async getJobLayoutPlate(jobId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/plate`,
        });
    }
    async setJobLayoutPlate(jobId, layoutIndex, setPlateResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/plate`,
            body: setPlateResource,
        });
    }
    async getJobLayoutPress(jobId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/press`,
        });
    }
    async setJobLayoutPress(jobId, layoutIndex, setPressResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/press`,
            body: setPressResource,
        });
    }
    // Job Layout Components
    async moveJobLayoutComponent(jobId, layoutIndex, componentIndex, moveResource) {
        return this.makeRequest({
            method: "PATCH",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentIndex}/move`,
            body: moveResource,
        });
    }
    async rotateJobLayoutComponent(jobId, layoutIndex, componentIndex, rotateResource) {
        return this.makeRequest({
            method: "PATCH",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentIndex}/rotate`,
            body: rotateResource,
        });
    }
    async deleteJobLayoutComponent(jobId, layoutIndex, componentIndex) {
        return this.makeRequest({
            method: "DELETE",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentIndex}`,
        });
    }
    // Job Layout Results
    async getJobLayoutResult(jobId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/layouts/${layoutIndex}/result`,
        });
    }
    async getJobOptimizeResults(jobId, layoutIndex, thumb, thumbWidth, thumbHeight, renderMode) {
        const params = new URLSearchParams();
        if (thumb !== undefined)
            params.append("thumb", thumb.toString());
        if (thumbWidth !== undefined)
            params.append("thumb-width", thumbWidth.toString());
        if (thumbHeight !== undefined)
            params.append("thumb-height", thumbHeight.toString());
        if (renderMode !== undefined)
            params.append("render-mode", renderMode);
        const queryString = params.toString();
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/optimize/${layoutIndex}/results${queryString ? "?" + queryString : ""}`,
        });
    }
    async getJobPlanResults(jobId) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/plan/results`,
        });
    }
    // Job Files
    async getJobFiles(jobId) {
        return this.makeRequest({
            method: "GET",
            path: `/jobs/${jobId}/files`,
        });
    }
    async uploadJobFile(jobId, file, filename) {
        const boundary = "----formdata-boundary-" + Math.random().toString(36);
        const formData = this.createMultipartFormData(file, filename, boundary);
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/files`,
            body: formData,
            contentType: `multipart/form-data; boundary=${boundary}`,
        });
    }
    async deleteJobFile(jobId, filename) {
        return this.makeRequest({
            method: "DELETE",
            path: `/jobs/${jobId}/files/${filename}`,
        });
    }
    // Job Exports
    async exportJobCoverSheet(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/coversheet`,
            body: exportResource,
        });
    }
    async exportJobPdfLayout(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/pdf`,
            body: exportResource,
        });
    }
    async exportJobDxfLayout(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/dxf`,
            body: exportResource,
        });
    }
    async exportJobMfgLayout(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/mfg`,
            body: exportResource,
        });
    }
    async exportJobZccLayout(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/zcc`,
            body: exportResource,
        });
    }
    async exportJobCff2Layout(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/cff2`,
            body: exportResource,
        });
    }
    async exportJobHpJdf(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/hp-jdf`,
            body: exportResource,
        });
    }
    async exportJobJdf(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/jdf`,
            body: exportResource,
        });
    }
    async exportJobXmlReport(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/xml`,
            body: exportResource,
        });
    }
    async exportJobJsonReport(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/json`,
            body: exportResource,
        });
    }
    async exportJobCsvReport(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/csv`,
            body: exportResource,
        });
    }
    async exportJobTilingReport(jobId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/export/tiling`,
            body: exportResource,
        });
    }
    // Job Imports
    async importJobProductCsv(jobId, importResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/import/csv`,
            body: importResource,
        });
    }
    async importJobDieTemplate(jobId, importResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/import/dietemplate`,
            body: importResource,
        });
    }
    async importJobDieDesign(jobId, importResource) {
        return this.makeRequest({
            method: "POST",
            path: `/jobs/${jobId}/import/diedesign`,
            body: importResource,
        });
    }
}
exports.PhoenixJobsAPI = PhoenixJobsAPI;
//# sourceMappingURL=phoenix-jobs.js.map