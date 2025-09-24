"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoenixProjectsAPI = void 0;
const phoenix_base_1 = require("./phoenix-base");
class PhoenixProjectsAPI extends phoenix_base_1.PhoenixBase {
    // Core Project Management
    async getProjects() {
        return this.makeRequest({
            method: "GET",
            path: "/projects",
        });
    }
    async createProject(jobResource) {
        return this.makeRequest({
            method: "POST",
            path: "/projects",
            body: jobResource,
        });
    }
    async getProject(projectId, productVersion = "V1") {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}?product-version=${productVersion}`,
        });
    }
    async deleteProject(projectId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/projects/${projectId}`,
        });
    }
    async editProject(projectId, editResource) {
        return this.makeRequest({
            method: "PATCH",
            path: `/projects/${projectId}`,
            body: editResource,
        });
    }
    async openProject(file, filename) {
        const boundary = "----formdata-boundary-" + Math.random().toString(36);
        const formData = this.createMultipartFormData(file, filename, boundary);
        return this.makeRequest({
            method: "POST",
            path: "/projects/open",
            body: formData,
            contentType: `multipart/form-data; boundary=${boundary}`,
        });
    }
    // Project Products
    async getProjectProducts(projectId, thumb, thumbWidth, thumbHeight, renderMode) {
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
            path: `/projects/${projectId}/products${queryString ? "?" + queryString : ""}`,
        });
    }
    async createFlatProduct(projectId, productResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/products/flat`,
            body: productResource,
        });
    }
    async createBoundProduct(projectId, productResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/products/bound`,
            body: productResource,
        });
    }
    async createFoldedProduct(projectId, productResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/products/folded`,
            body: productResource,
        });
    }
    async createTiledProduct(projectId, productResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/products/tiled`,
            body: productResource,
        });
    }
    async deleteProjectProduct(projectId, productIndex) {
        return this.makeRequest({
            method: "DELETE",
            path: `/projects/${projectId}/products/${productIndex}`,
        });
    }
    // Project Actions
    async imposeProject(projectId, imposeResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/impose`,
            body: imposeResource,
        });
    }
    async populateProjectLayout(projectId, populateResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/populate`,
            body: populateResource,
        });
    }
    async placeProjectComponent(projectId, placeResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/place`,
            body: placeResource,
        });
    }
    async autosnapProject(projectId, autosnapResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/autosnap`,
            body: autosnapResource,
        });
    }
    async stepRepeatProject(projectId, stepRepeatResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/steprepeat`,
            body: stepRepeatResource,
        });
    }
    async planProject(projectId, planResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/plan`,
            body: planResource,
        });
    }
    async optimizeProject(projectId, optimizeResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/optimize`,
            body: optimizeResource,
        });
    }
    async runProjectScript(projectId, runScriptResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/runscript`,
            body: runScriptResource,
        });
    }
    async copyProject(projectId, copyResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/copy`,
            body: copyResource,
        });
    }
    async renameProject(projectId, renameResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/rename`,
            body: renameResource,
        });
    }
    // Project Layouts
    async getProjectLayouts(projectId) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/layouts`,
        });
    }
    async deleteProjectLayout(projectId, layoutIndex) {
        return this.makeRequest({
            method: "DELETE",
            path: `/projects/${projectId}/layouts/${layoutIndex}`,
        });
    }
    async getProjectLayoutSheet(projectId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
        });
    }
    async setProjectLayoutSheet(projectId, layoutIndex, setSheetResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
            body: setSheetResource,
        });
    }
    async resizeProjectLayoutSheet(projectId, layoutIndex, resizeResource) {
        return this.makeRequest({
            method: "PUT",
            path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
            body: resizeResource,
        });
    }
    async getProjectLayoutPlate(projectId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/layouts/${layoutIndex}/plate`,
        });
    }
    async setProjectLayoutPlate(projectId, layoutIndex, setPlateResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/layouts/${layoutIndex}/plate`,
            body: setPlateResource,
        });
    }
    async getProjectLayoutPress(projectId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/layouts/${layoutIndex}/press`,
        });
    }
    async setProjectLayoutPress(projectId, layoutIndex, setPressResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/layouts/${layoutIndex}/press`,
            body: setPressResource,
        });
    }
    // Project Layout Components
    async moveProjectLayoutComponent(projectId, layoutIndex, componentIndex, moveResource) {
        return this.makeRequest({
            method: "PATCH",
            path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}/move`,
            body: moveResource,
        });
    }
    async rotateProjectLayoutComponent(projectId, layoutIndex, componentIndex, rotateResource) {
        return this.makeRequest({
            method: "PATCH",
            path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}/rotate`,
            body: rotateResource,
        });
    }
    async deleteProjectLayoutComponent(projectId, layoutIndex, componentIndex) {
        return this.makeRequest({
            method: "DELETE",
            path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}`,
        });
    }
    // Project Layout Results
    async getProjectLayoutResult(projectId, layoutIndex) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/layouts/${layoutIndex}/result`,
        });
    }
    async getProjectOptimizeResults(projectId, layoutIndex, thumb, thumbWidth, thumbHeight, renderMode) {
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
            path: `/projects/${projectId}/optimize/${layoutIndex}/results${queryString ? "?" + queryString : ""}`,
        });
    }
    async getProjectPlanResults(projectId) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/plan/results`,
        });
    }
    // Project Files
    async getProjectFiles(projectId) {
        return this.makeRequest({
            method: "GET",
            path: `/projects/${projectId}/files`,
        });
    }
    async uploadProjectFile(projectId, file, filename) {
        const boundary = "----formdata-boundary-" + Math.random().toString(36);
        const formData = this.createMultipartFormData(file, filename, boundary);
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/files`,
            body: formData,
            contentType: `multipart/form-data; boundary=${boundary}`,
        });
    }
    async deleteProjectFile(projectId, filename) {
        return this.makeRequest({
            method: "DELETE",
            path: `/projects/${projectId}/files/${filename}`,
        });
    }
    // Project Exports
    async exportProjectCoverSheet(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/coversheet`,
            body: exportResource,
        });
    }
    async exportProjectPdfLayout(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/pdf`,
            body: exportResource,
        });
    }
    async exportProjectDxfLayout(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/dxf`,
            body: exportResource,
        });
    }
    async exportProjectMfgLayout(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/mfg`,
            body: exportResource,
        });
    }
    async exportProjectZccLayout(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/zcc`,
            body: exportResource,
        });
    }
    async exportProjectCff2Layout(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/cff2`,
            body: exportResource,
        });
    }
    async exportProjectHpJdf(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/hp-jdf`,
            body: exportResource,
        });
    }
    async exportProjectJdf(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/jdf`,
            body: exportResource,
        });
    }
    async exportProjectXmlReport(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/xml`,
            body: exportResource,
        });
    }
    async exportProjectJsonReport(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/json`,
            body: exportResource,
        });
    }
    async exportProjectCsvReport(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/csv`,
            body: exportResource,
        });
    }
    async exportProjectTilingReport(projectId, exportResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/export/tiling`,
            body: exportResource,
        });
    }
    // Project Imports
    async importProjectProductCsv(projectId, importResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/import/csv`,
            body: importResource,
        });
    }
    async importProjectDieTemplate(projectId, importResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/import/dietemplate`,
            body: importResource,
        });
    }
    async importProjectDieDesign(projectId, importResource) {
        return this.makeRequest({
            method: "POST",
            path: `/projects/${projectId}/import/diedesign`,
            body: importResource,
        });
    }
}
exports.PhoenixProjectsAPI = PhoenixProjectsAPI;
//# sourceMappingURL=phoenix-projects.js.map