// Phoenix Presets API Module
// ============================================

import { PhoenixBase } from "./phoenix-base";
import { PresetEntity } from "./types";

export class PhoenixPresetsAPI extends PhoenixBase {
	// ===========================================
	// EXPORT PRESETS
	// ===========================================

	async getExportPdfPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/pdf",
		});
	}

	async getExportDxfPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/dxf",
		});
	}

	async getExportXmlPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/xml",
		});
	}

	async getExportJdfPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/jdf",
		});
	}

	async getExportZundPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/zund",
		});
	}

	async getExportCff2Presets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/cff2",
		});
	}

	// ===========================================
	// IMPORT PRESETS
	// ===========================================

	async getImportProductCsvPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/product/csv",
		});
	}

	async getImportStockCsvPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/stock-csv",
		});
	}

	async getImportDieArdPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/ard",
		});
	}

	async getImportDieCff2Presets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/cff2",
		});
	}

	async getImportDieDxfPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/dxf",
		});
	}

	async getImportDiePdfPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/pdf",
		});
	}

	// ===========================================
	// TOOL PRESETS
	// ===========================================

	async getStepAndRepeatPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/tools/step-and-repeat",
		});
	}

	async getOptimizationPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/tools/optimization",
		});
	}

	async getPlanningPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/tools/planning",
		});
	}

	async getImpositionPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/tools/imposition",
		});
	}

	async getAutosnapPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/tools/autosnap",
		});
	}

	// ===========================================
	// PROFILE PRESETS
	// ===========================================

	async getImpositionAiProfiles(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/imposition/profiles",
		});
	}

	async getPlanningProfiles(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/planning/profiles",
		});
	}

	async getOptimizationProfiles(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/optimization/profiles",
		});
	}

	// ===========================================
	// LAYOUT PRESETS
	// ===========================================

	async getLayoutTemplates(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/layout/templates",
		});
	}

	async getLayoutStyles(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/layout/styles",
		});
	}

	// ===========================================
	// CUSTOM PRESETS
	// ===========================================

	async getCustomPresets(category: string): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: `/presets/custom/${category}`,
		});
	}

	async getPresetById(presetId: string): Promise<PresetEntity> {
		return this.makeRequest<PresetEntity>({
			method: "GET",
			path: `/presets/${presetId}`,
		});
	}

	// ===========================================
	// ALL PRESETS
	// ===========================================

	async getAllPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets",
		});
	}

	async getPresetsByType(presetType: string): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: `/presets?type=${presetType}`,
		});
	}
}
