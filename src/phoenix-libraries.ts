// Phoenix Libraries API Module
// ============================================

import { PhoenixBase } from "./phoenix-base";
import {
	ResponseEntity,
	StockEntity,
	GradeEntity,
	CoatingEntity,
	SubstrateEntity,
	PressEntity,
	ProcessEntity,
	ModeEntity,
	MarkEntity,
	ScriptAsset,
	TilingEntity,
	DieDesignEntity,
	TemplateEntity,
	ImportStockCsvResource,
} from "./types";

export class PhoenixLibrariesAPI extends PhoenixBase {
	// ===========================================
	// STOCKS
	// ===========================================

	async getStocks(): Promise<StockEntity[]> {
		return this.makeRequest<StockEntity[]>({
			method: "GET",
			path: "/libraries/stocks",
		});
	}

	async createStock(stock: StockEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/stocks",
			body: stock,
		});
	}

	async getStock(stockId: string): Promise<StockEntity> {
		return this.makeRequest<StockEntity>({
			method: "GET",
			path: `/libraries/stocks/${stockId}`,
		});
	}

	async updateStock(stockId: string, stock: Partial<StockEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/stocks/${stockId}`,
			body: stock,
		});
	}

	async deleteStock(stockId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/stocks/${stockId}`,
		});
	}

	async importStockCsv(importCsv: ImportStockCsvResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/stocks/import/csv",
			body: importCsv,
		});
	}

	// ===========================================
	// GRADES
	// ===========================================

	async getGrades(): Promise<GradeEntity[]> {
		return this.makeRequest<GradeEntity[]>({
			method: "GET",
			path: "/libraries/grades",
		});
	}

	async createGrade(grade: GradeEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/grades",
			body: grade,
		});
	}

	async getGrade(gradeId: string): Promise<GradeEntity> {
		return this.makeRequest<GradeEntity>({
			method: "GET",
			path: `/libraries/grades/${gradeId}`,
		});
	}

	async updateGrade(gradeId: string, grade: Partial<GradeEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/grades/${gradeId}`,
			body: grade,
		});
	}

	async deleteGrade(gradeId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/grades/${gradeId}`,
		});
	}

	// ===========================================
	// COATINGS
	// ===========================================

	async getCoatings(): Promise<CoatingEntity[]> {
		return this.makeRequest<CoatingEntity[]>({
			method: "GET",
			path: "/libraries/coatings",
		});
	}

	async createCoating(coating: CoatingEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/coatings",
			body: coating,
		});
	}

	async getCoating(coatingId: string): Promise<CoatingEntity> {
		return this.makeRequest<CoatingEntity>({
			method: "GET",
			path: `/libraries/coatings/${coatingId}`,
		});
	}

	async updateCoating(coatingId: string, coating: Partial<CoatingEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/coatings/${coatingId}`,
			body: coating,
		});
	}

	async deleteCoating(coatingId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/coatings/${coatingId}`,
		});
	}

	// ===========================================
	// SUBSTRATES
	// ===========================================

	async getSubstrates(): Promise<SubstrateEntity[]> {
		return this.makeRequest<SubstrateEntity[]>({
			method: "GET",
			path: "/libraries/substrates",
		});
	}

	async createSubstrate(substrate: SubstrateEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/substrates",
			body: substrate,
		});
	}

	async getSubstrate(substrateId: string): Promise<SubstrateEntity> {
		return this.makeRequest<SubstrateEntity>({
			method: "GET",
			path: `/libraries/substrates/${substrateId}`,
		});
	}

	async updateSubstrate(substrateId: string, substrate: Partial<SubstrateEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/substrates/${substrateId}`,
			body: substrate,
		});
	}

	async deleteSubstrate(substrateId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/substrates/${substrateId}`,
		});
	}

	// ===========================================
	// PRESSES
	// ===========================================

	async getPresses(): Promise<PressEntity[]> {
		return this.makeRequest<PressEntity[]>({
			method: "GET",
			path: "/libraries/presses",
		});
	}

	async createPress(press: PressEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/presses",
			body: press,
		});
	}

	async getPress(pressId: string): Promise<PressEntity> {
		return this.makeRequest<PressEntity>({
			method: "GET",
			path: `/libraries/presses/${pressId}`,
		});
	}

	async updatePress(pressId: string, press: Partial<PressEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/presses/${pressId}`,
			body: press,
		});
	}

	async deletePress(pressId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/presses/${pressId}`,
		});
	}

	// ===========================================
	// PROCESSES
	// ===========================================

	async getProcesses(): Promise<ProcessEntity[]> {
		return this.makeRequest<ProcessEntity[]>({
			method: "GET",
			path: "/libraries/processes",
		});
	}

	async createProcess(process: ProcessEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/processes",
			body: process,
		});
	}

	async getProcess(processId: string): Promise<ProcessEntity> {
		return this.makeRequest<ProcessEntity>({
			method: "GET",
			path: `/libraries/processes/${processId}`,
		});
	}

	async updateProcess(processId: string, process: Partial<ProcessEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/processes/${processId}`,
			body: process,
		});
	}

	async deleteProcess(processId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/processes/${processId}`,
		});
	}

	// ===========================================
	// MODES
	// ===========================================

	async getModes(): Promise<ModeEntity[]> {
		return this.makeRequest<ModeEntity[]>({
			method: "GET",
			path: "/libraries/modes",
		});
	}

	async createMode(mode: ModeEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/modes",
			body: mode,
		});
	}

	async getMode(modeId: string): Promise<ModeEntity> {
		return this.makeRequest<ModeEntity>({
			method: "GET",
			path: `/libraries/modes/${modeId}`,
		});
	}

	async updateMode(modeId: string, mode: Partial<ModeEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/modes/${modeId}`,
			body: mode,
		});
	}

	async deleteMode(modeId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/modes/${modeId}`,
		});
	}

	// ===========================================
	// MARKS
	// ===========================================

	async getMarks(): Promise<MarkEntity[]> {
		return this.makeRequest<MarkEntity[]>({
			method: "GET",
			path: "/libraries/marks",
		});
	}

	async createMark(mark: MarkEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/marks",
			body: mark,
		});
	}

	async getMark(markId: string): Promise<MarkEntity> {
		return this.makeRequest<MarkEntity>({
			method: "GET",
			path: `/libraries/marks/${markId}`,
		});
	}

	async updateMark(markId: string, mark: Partial<MarkEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/marks/${markId}`,
			body: mark,
		});
	}

	async deleteMark(markId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/marks/${markId}`,
		});
	}

	// ===========================================
	// SCRIPTS
	// ===========================================

	async getScripts(): Promise<ScriptAsset[]> {
		return this.makeRequest<ScriptAsset[]>({
			method: "GET",
			path: "/libraries/scripts",
		});
	}

	async createScript(script: ScriptAsset): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/scripts",
			body: script,
		});
	}

	async getScript(scriptId: string): Promise<ScriptAsset> {
		return this.makeRequest<ScriptAsset>({
			method: "GET",
			path: `/libraries/scripts/${scriptId}`,
		});
	}

	async updateScript(scriptId: string, script: Partial<ScriptAsset>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/scripts/${scriptId}`,
			body: script,
		});
	}

	async deleteScript(scriptId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/scripts/${scriptId}`,
		});
	}

	// ===========================================
	// TILINGS
	// ===========================================

	async getTilings(): Promise<TilingEntity[]> {
		return this.makeRequest<TilingEntity[]>({
			method: "GET",
			path: "/libraries/tilings",
		});
	}

	async createTiling(tiling: TilingEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/tilings",
			body: tiling,
		});
	}

	async getTiling(tilingId: string): Promise<TilingEntity> {
		return this.makeRequest<TilingEntity>({
			method: "GET",
			path: `/libraries/tilings/${tilingId}`,
		});
	}

	async updateTiling(tilingId: string, tiling: Partial<TilingEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/tilings/${tilingId}`,
			body: tiling,
		});
	}

	async deleteTiling(tilingId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/tilings/${tilingId}`,
		});
	}

	// ===========================================
	// DIE DESIGNS
	// ===========================================

	async getDieDesigns(): Promise<DieDesignEntity[]> {
		return this.makeRequest<DieDesignEntity[]>({
			method: "GET",
			path: "/libraries/dies",
		});
	}

	async createDieDesign(die: DieDesignEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/dies",
			body: die,
		});
	}

	async getDieDesign(dieId: string): Promise<DieDesignEntity> {
		return this.makeRequest<DieDesignEntity>({
			method: "GET",
			path: `/libraries/dies/${dieId}`,
		});
	}

	async updateDieDesign(dieId: string, die: Partial<DieDesignEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/dies/${dieId}`,
			body: die,
		});
	}

	async deleteDieDesign(dieId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/dies/${dieId}`,
		});
	}

	// ===========================================
	// TEMPLATES
	// ===========================================

	async getTemplates(): Promise<TemplateEntity[]> {
		return this.makeRequest<TemplateEntity[]>({
			method: "GET",
			path: "/libraries/templates",
		});
	}

	async createTemplate(template: TemplateEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/templates",
			body: template,
		});
	}

	async getTemplate(templateId: string): Promise<TemplateEntity> {
		return this.makeRequest<TemplateEntity>({
			method: "GET",
			path: `/libraries/templates/${templateId}`,
		});
	}

	async updateTemplate(templateId: string, template: Partial<TemplateEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/templates/${templateId}`,
			body: template,
		});
	}

	async deleteTemplate(templateId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/templates/${templateId}`,
		});
	}
}