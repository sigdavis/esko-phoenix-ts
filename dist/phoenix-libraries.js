"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoenixLibrariesAPI = void 0;
const phoenix_base_1 = require("./phoenix-base");
class PhoenixLibrariesAPI extends phoenix_base_1.PhoenixBase {
    // V2 Stock Management (COMPLETE)
    async getStocksV2() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/v2/stocks",
        });
    }
    async addStockV2(stock) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/v2/stocks",
            body: stock,
        });
    }
    async getStockV2(stockId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}`,
        });
    }
    async editStockV2(stockId, stock) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/v2/stocks/${stockId}`,
            body: stock,
        });
    }
    async deleteStockV2(stockId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/v2/stocks/${stockId}`,
        });
    }
    // V2 Stock Grades
    async getStockGradesV2(stockId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}/grades`,
        });
    }
    async addStockGradeV2(stockId, grade) {
        return this.makeRequest({
            method: "POST",
            path: `/libraries/v2/stocks/${stockId}/grades`,
            body: grade,
        });
    }
    async getStockGradeV2(stockId, gradeId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}`,
        });
    }
    async editStockGradeV2(stockId, gradeId, grade) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}`,
            body: grade,
        });
    }
    async deleteStockGradeV2(stockId, gradeId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}`,
        });
    }
    // V2 Stock Sheets
    async getStockSheetsV2(stockId, gradeId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets`,
        });
    }
    async addStockSheetV2(stockId, gradeId, sheet) {
        return this.makeRequest({
            method: "POST",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets`,
            body: sheet,
        });
    }
    async getStockSheetV2(stockId, gradeId, sheetId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets/${sheetId}`,
        });
    }
    async editStockSheetV2(stockId, gradeId, sheetId, sheet) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets/${sheetId}`,
            body: sheet,
        });
    }
    async deleteStockSheetV2(stockId, gradeId, sheetId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets/${sheetId}`,
        });
    }
    // V2 Stock Rolls
    async getStockRollsV2(stockId, gradeId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls`,
        });
    }
    async addStockRollV2(stockId, gradeId, roll) {
        return this.makeRequest({
            method: "POST",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls`,
            body: roll,
        });
    }
    async getStockRollV2(stockId, gradeId, rollId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls/${rollId}`,
        });
    }
    async editStockRollV2(stockId, gradeId, rollId, roll) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls/${rollId}`,
            body: roll,
        });
    }
    async deleteStockRollV2(stockId, gradeId, rollId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls/${rollId}`,
        });
    }
    // Stock Types
    async getStockTypes() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/stocktypes",
        });
    }
    async addStockType(stockType) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/stocktypes",
            body: stockType,
        });
    }
    async getStockType(stockTypeId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/stocktypes/${stockTypeId}`,
        });
    }
    async editStockType(stockTypeId, stockType) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/stocktypes/${stockTypeId}`,
            body: stockType,
        });
    }
    async deleteStockType(stockTypeId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/stocktypes/${stockTypeId}`,
        });
    }
    // Legacy Stock Management (V1 - for backward compatibility)
    async getStocks() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/stocks",
        });
    }
    async addStock(stock) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/stocks",
            body: stock,
        });
    }
    async getStock(stockId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/stocks/${stockId}`,
        });
    }
    async editStock(stockId, stock) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/stocks/${stockId}`,
            body: stock,
        });
    }
    async deleteStock(stockId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/stocks/${stockId}`,
        });
    }
    // Plates Management
    async getPlates() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/plates",
        });
    }
    async addPlate(plate) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/plates",
            body: plate,
        });
    }
    async getPlate(plateId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/plates/${plateId}`,
        });
    }
    async editPlate(plateId, plate) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/plates/${plateId}`,
            body: plate,
        });
    }
    async deletePlate(plateId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/plates/${plateId}`,
        });
    }
    // Presses Management
    async getPresses() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/presses",
        });
    }
    async addPress(press) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/presses",
            body: press,
        });
    }
    async getPress(pressId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/presses/${pressId}`,
        });
    }
    async editPress(pressId, press) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/presses/${pressId}`,
            body: press,
        });
    }
    async deletePress(pressId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/presses/${pressId}`,
        });
    }
    // Process Types Management
    async getProcessTypes() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/processtypes",
        });
    }
    async addProcessType(processType) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/processtypes",
            body: processType,
        });
    }
    async getProcessType(processTypeId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/processtypes/${processTypeId}`,
        });
    }
    async editProcessType(processTypeId, processType) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/processtypes/${processTypeId}`,
            body: processType,
        });
    }
    async deleteProcessType(processTypeId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/processtypes/${processTypeId}`,
        });
    }
    // Modes Management
    async getModes() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/modes",
        });
    }
    async addMode(mode) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/modes",
            body: mode,
        });
    }
    async getMode(modeId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/modes/${modeId}`,
        });
    }
    async editMode(modeId, mode) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/modes/${modeId}`,
            body: mode,
        });
    }
    async deleteMode(modeId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/modes/${modeId}`,
        });
    }
    // Marks Management
    async getMarks() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/marks",
        });
    }
    async addMark(mark) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/marks",
            body: mark,
        });
    }
    async getMark(markId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/marks/${markId}`,
        });
    }
    async editMark(markId, mark) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/marks/${markId}`,
            body: mark,
        });
    }
    async deleteMark(markId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/marks/${markId}`,
        });
    }
    // Scripts Management
    async getScripts() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/scripts",
        });
    }
    async addScript(script) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/scripts",
            body: script,
        });
    }
    async getScript(scriptId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/scripts/${scriptId}`,
        });
    }
    async editScript(scriptId, script) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/scripts/${scriptId}`,
            body: script,
        });
    }
    async deleteScript(scriptId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/scripts/${scriptId}`,
        });
    }
    // Tilings Management
    async getTilings() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/tilings",
        });
    }
    async addTiling(tiling) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/tilings",
            body: tiling,
        });
    }
    async getTiling(tilingId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/tilings/${tilingId}`,
        });
    }
    async editTiling(tilingId, tiling) {
        return this.makeRequest({
            method: "PUT",
            path: `/libraries/tilings/${tilingId}`,
            body: tiling,
        });
    }
    async deleteTiling(tilingId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/tilings/${tilingId}`,
        });
    }
    // Die Designs Management
    async getDieDesigns() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/diedesigns",
        });
    }
    async importDieDesign(importResource) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/diedesigns/import",
            body: importResource,
        });
    }
    async getDieDesign(dieDesignId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/diedesigns/${dieDesignId}`,
        });
    }
    async deleteDieDesign(dieDesignId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/diedesigns/${dieDesignId}`,
        });
    }
    // Templates Management
    async getTemplates() {
        return this.makeRequest({
            method: "GET",
            path: "/libraries/templates",
        });
    }
    async importTemplate(importResource) {
        return this.makeRequest({
            method: "POST",
            path: "/libraries/templates/import",
            body: importResource,
        });
    }
    async getTemplate(templateId) {
        return this.makeRequest({
            method: "GET",
            path: `/libraries/templates/${templateId}`,
        });
    }
    async deleteTemplate(templateId) {
        return this.makeRequest({
            method: "DELETE",
            path: `/libraries/templates/${templateId}`,
        });
    }
}
exports.PhoenixLibrariesAPI = PhoenixLibrariesAPI;
//# sourceMappingURL=phoenix-libraries.js.map