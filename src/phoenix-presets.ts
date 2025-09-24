import { PhoenixBase } from "./phoenix-base";
import { ResponseEntity, PresetEntity, ImpositionAiProfileEntity } from "./types";

export class PhoenixPresetsAPI extends PhoenixBase {
	// Imposition AI Profiles
	async getImpositionAiProfiles(): Promise<ImpositionAiProfileEntity[]> {
		return this.makeRequest<ImpositionAiProfileEntity[]>({
			method: "GET",
			path: "/presets/imposition-ai",
		});
	}

	async addImpositionAiProfile(profile: ImpositionAiProfileEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/presets/imposition-ai",
			body: profile,
		});
	}

	async getImpositionAiProfile(profileId: string): Promise<ImpositionAiProfileEntity> {
		return this.makeRequest<ImpositionAiProfileEntity>({
			method: "GET",
			path: `/presets/imposition-ai/${profileId}`,
		});
	}

	async editImpositionAiProfile(profileId: string, profile: ImpositionAiProfileEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/presets/imposition-ai/${profileId}`,
			body: profile,
		});
	}

	async deleteImpositionAiProfile(profileId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/presets/imposition-ai/${profileId}`,
		});
	}

	// Import Presets
	async getProductCsvImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/product/csv",
		});
	}

	async getStockCsvPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/stock-csv",
		});
	}

	async getDdes2DieLayoutImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/ddes2",
		});
	}

	async getDdes3DieLayoutImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/ddes3",
		});
	}

	async getArdDieLayoutImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/ard",
		});
	}

	async getCff2DieLayoutImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/cff2",
		});
	}

	async getDxfDieLayoutImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/dxf",
		});
	}

	async getMfgDieImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/mfg",
		});
	}

	async getPdfDieLayoutImportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/import/die/pdf",
		});
	}

	// Export Presets - JDF
	async getHpJdfExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/hp-jdf",
		});
	}

	async getJdfExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/jdf",
		});
	}

	async getCuttingJdfExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/jdf-cutting",
		});
	}

	// Export Presets - Reports
	async getJsonReportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/report/json",
		});
	}

	async getCsvReportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/report/csv",
		});
	}

	async getXmlReportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/report/xml",
		});
	}

	async getTilingReportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/tiling-report",
		});
	}

	// Export Presets - Layouts
	async getPdfLayoutExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/layout/pdf",
		});
	}

	async getDxfLayoutExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/layout/dxf",
		});
	}

	async getMfgLayoutExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/layout/mfg",
		});
	}

	async getZccLayoutExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/layout/zcc",
		});
	}

	async getCff2LayoutExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/layout/cff2",
		});
	}

	// Export Presets - Other
	async getPdfVectorExportPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/pdf-vector",
		});
	}

	// Cover Sheet
	async getCoverSheetPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/export/coversheet",
		});
	}

	// Tool Presets
	async getStepAndRepeatPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/tools/step-and-repeat",
		});
	}

	// Action Presets
	async getImposePresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/actions/impose",
		});
	}

	async getPopulatePresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/actions/populate",
		});
	}

	async getStepRepeatPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/actions/steprepeat",
		});
	}

	async getPlanPresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/actions/plan",
		});
	}

	async getOptimizePresets(): Promise<PresetEntity[]> {
		return this.makeRequest<PresetEntity[]>({
			method: "GET",
			path: "/presets/actions/optimize",
		});
	}
}
