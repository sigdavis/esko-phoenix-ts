import { PhoenixBase } from "./phoenix-base";
import {
	ResponseEntity,
	StockEntity,
	PlateEntity,
	PressEntity,
	ProcessTypeEntity,
	ModeEntity,
	MarkEntity,
	ScriptAsset,
	TilingEntity,
	DieDesignEntity,
	TemplateEntity,
	ImportDieDesignResource,
	ImportTemplateResource,
	Stock,
	Grade,
	Sheet,
	Roll,
	StockType,
	ThingEntity,
	FoldingPatternEntity,
	MarkSetEntity,
} from "./types";

export class PhoenixLibrariesAPI extends PhoenixBase {
	// Things Management
	async getThings(): Promise<ThingEntity[]> {
		return this.makeRequest<ThingEntity[]>({
			method: "GET",
			path: "/libraries/things",
		});
	}

	async addThing(thing: ThingEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/things",
			body: thing,
		});
	}

	async getThing(thingId: string): Promise<ThingEntity> {
		return this.makeRequest<ThingEntity>({
			method: "GET",
			path: `/libraries/things/${thingId}`,
		});
	}

	async editThing(thingId: string, thing: ThingEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/things/${thingId}`,
			body: thing,
		});
	}

	async deleteThing(thingId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/things/${thingId}`,
		});
	}

	// Folding Patterns Management
	async getFoldingPatterns(): Promise<FoldingPatternEntity[]> {
		return this.makeRequest<FoldingPatternEntity[]>({
			method: "GET",
			path: "/libraries/folding",
		});
	}

	async addFoldingPattern(pattern: FoldingPatternEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/folding",
			body: pattern,
		});
	}

	// Mark Sets Management
	async getMarkSets(): Promise<MarkSetEntity[]> {
		return this.makeRequest<MarkSetEntity[]>({
			method: "GET",
			path: "/libraries/marksets",
		});
	}

	async addMarkSet(markSet: MarkSetEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/marksets",
			body: markSet,
		});
	}

	// V2 Stock Management (COMPLETE)
	async getStocksV2(): Promise<Stock[]> {
		return this.makeRequest<Stock[]>({
			method: "GET",
			path: "/libraries/v2/stocks",
		});
	}

	async addStockV2(stock: Stock): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/v2/stocks",
			body: stock,
		});
	}

	async getStockV2(stockId: string): Promise<Stock> {
		return this.makeRequest<Stock>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}`,
		});
	}

	async editStockV2(stockId: string, stock: Stock): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/v2/stocks/${stockId}`,
			body: stock,
		});
	}

	async deleteStockV2(stockId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/v2/stocks/${stockId}`,
		});
	}

	// V2 Stock Grades
	async getStockGradesV2(stockId: string): Promise<Grade[]> {
		return this.makeRequest<Grade[]>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}/grades`,
		});
	}

	async addStockGradeV2(stockId: string, grade: Grade): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/libraries/v2/stocks/${stockId}/grades`,
			body: grade,
		});
	}

	async getStockGradeV2(stockId: string, gradeId: string): Promise<Grade> {
		return this.makeRequest<Grade>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}`,
		});
	}

	async editStockGradeV2(stockId: string, gradeId: string, grade: Grade): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}`,
			body: grade,
		});
	}

	async deleteStockGradeV2(stockId: string, gradeId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}`,
		});
	}

	// V2 Stock Sheets
	async getStockSheetsV2(stockId: string, gradeId: string): Promise<Sheet[]> {
		return this.makeRequest<Sheet[]>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets`,
		});
	}

	async addStockSheetV2(stockId: string, gradeId: string, sheet: Sheet): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets`,
			body: sheet,
		});
	}

	async getStockSheetV2(stockId: string, gradeId: string, sheetId: string): Promise<Sheet> {
		return this.makeRequest<Sheet>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets/${sheetId}`,
		});
	}

	async editStockSheetV2(stockId: string, gradeId: string, sheetId: string, sheet: Sheet): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets/${sheetId}`,
			body: sheet,
		});
	}

	async deleteStockSheetV2(stockId: string, gradeId: string, sheetId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/sheets/${sheetId}`,
		});
	}

	// V2 Stock Rolls
	async getStockRollsV2(stockId: string, gradeId: string): Promise<Roll[]> {
		return this.makeRequest<Roll[]>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls`,
		});
	}

	async addStockRollV2(stockId: string, gradeId: string, roll: Roll): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls`,
			body: roll,
		});
	}

	async getStockRollV2(stockId: string, gradeId: string, rollId: string): Promise<Roll> {
		return this.makeRequest<Roll>({
			method: "GET",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls/${rollId}`,
		});
	}

	async editStockRollV2(stockId: string, gradeId: string, rollId: string, roll: Roll): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls/${rollId}`,
			body: roll,
		});
	}

	async deleteStockRollV2(stockId: string, gradeId: string, rollId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/v2/stocks/${stockId}/grades/${gradeId}/rolls/${rollId}`,
		});
	}

	// Stock Types Management
	async getStockTypes(): Promise<StockType[]> {
		return this.makeRequest<StockType[]>({
			method: "GET",
			path: "/libraries/stocktypes",
		});
	}

	async addStockType(stockType: StockType): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/stocktypes",
			body: stockType,
		});
	}

	async getStockType(stockTypeId: string): Promise<StockType> {
		return this.makeRequest<StockType>({
			method: "GET",
			path: `/libraries/stocktypes/${stockTypeId}`,
		});
	}

	async editStockType(stockTypeId: string, stockType: StockType): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/stocktypes/${stockTypeId}`,
			body: stockType,
		});
	}

	async deleteStockType(stockTypeId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/stocktypes/${stockTypeId}`,
		});
	}

	// Legacy Stock Management (V1 - for backward compatibility)
	async getStocks(): Promise<StockEntity[]> {
		return this.makeRequest<StockEntity[]>({
			method: "GET",
			path: "/libraries/stocks",
		});
	}

	async addStock(stock: StockEntity): Promise<ResponseEntity> {
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

	async editStock(stockId: string, stock: StockEntity): Promise<ResponseEntity> {
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

	// Plates Management
	async getPlates(): Promise<PlateEntity[]> {
		return this.makeRequest<PlateEntity[]>({
			method: "GET",
			path: "/libraries/plates",
		});
	}

	async addPlate(plate: PlateEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/plates",
			body: plate,
		});
	}

	async getPlate(plateId: string): Promise<PlateEntity> {
		return this.makeRequest<PlateEntity>({
			method: "GET",
			path: `/libraries/plates/${plateId}`,
		});
	}

	async editPlate(plateId: string, plate: PlateEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/plates/${plateId}`,
			body: plate,
		});
	}

	async deletePlate(plateId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/plates/${plateId}`,
		});
	}

	// Presses Management
	async getPresses(): Promise<PressEntity[]> {
		return this.makeRequest<PressEntity[]>({
			method: "GET",
			path: "/libraries/presses",
		});
	}

	async addPress(press: PressEntity): Promise<ResponseEntity> {
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

	async editPress(pressId: string, press: PressEntity): Promise<ResponseEntity> {
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

	// Process Types Management
	async getProcessTypes(): Promise<ProcessTypeEntity[]> {
		return this.makeRequest<ProcessTypeEntity[]>({
			method: "GET",
			path: "/libraries/processtypes",
		});
	}

	async addProcessType(processType: ProcessTypeEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/processtypes",
			body: processType,
		});
	}

	async getProcessType(processTypeId: string): Promise<ProcessTypeEntity> {
		return this.makeRequest<ProcessTypeEntity>({
			method: "GET",
			path: `/libraries/processtypes/${processTypeId}`,
		});
	}

	async editProcessType(processTypeId: string, processType: ProcessTypeEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/libraries/processtypes/${processTypeId}`,
			body: processType,
		});
	}

	async deleteProcessType(processTypeId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/processtypes/${processTypeId}`,
		});
	}

	// Modes Management
	async getModes(): Promise<ModeEntity[]> {
		return this.makeRequest<ModeEntity[]>({
			method: "GET",
			path: "/libraries/modes",
		});
	}

	async addMode(mode: ModeEntity): Promise<ResponseEntity> {
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

	async editMode(modeId: string, mode: ModeEntity): Promise<ResponseEntity> {
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

	// Marks Management
	async getMarks(): Promise<MarkEntity[]> {
		return this.makeRequest<MarkEntity[]>({
			method: "GET",
			path: "/libraries/marks",
		});
	}

	async addMark(mark: MarkEntity): Promise<ResponseEntity> {
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

	async editMark(markId: string, mark: MarkEntity): Promise<ResponseEntity> {
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

	// Scripts Management
	async getScripts(): Promise<ScriptAsset[]> {
		return this.makeRequest<ScriptAsset[]>({
			method: "GET",
			path: "/libraries/scripts",
		});
	}

	async addScript(script: ScriptAsset): Promise<ResponseEntity> {
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

	async editScript(scriptId: string, script: ScriptAsset): Promise<ResponseEntity> {
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

	// Tilings Management
	async getTilings(): Promise<TilingEntity[]> {
		return this.makeRequest<TilingEntity[]>({
			method: "GET",
			path: "/libraries/tilings",
		});
	}

	async addTiling(tiling: TilingEntity): Promise<ResponseEntity> {
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

	async editTiling(tilingId: string, tiling: TilingEntity): Promise<ResponseEntity> {
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

	// Die Designs Management
	async getDieDesigns(): Promise<DieDesignEntity[]> {
		return this.makeRequest<DieDesignEntity[]>({
			method: "GET",
			path: "/libraries/diedesigns",
		});
	}

	async importDieDesign(importResource: ImportDieDesignResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/diedesigns/import",
			body: importResource,
		});
	}

	async getDieDesign(dieDesignId: string): Promise<DieDesignEntity> {
		return this.makeRequest<DieDesignEntity>({
			method: "GET",
			path: `/libraries/diedesigns/${dieDesignId}`,
		});
	}

	async deleteDieDesign(dieDesignId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/diedesigns/${dieDesignId}`,
		});
	}

	// Templates Management
	async getTemplates(): Promise<TemplateEntity[]> {
		return this.makeRequest<TemplateEntity[]>({
			method: "GET",
			path: "/libraries/templates",
		});
	}

	async importTemplate(importResource: ImportTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/libraries/templates/import",
			body: importResource,
		});
	}

	async getTemplate(templateId: string): Promise<TemplateEntity> {
		return this.makeRequest<TemplateEntity>({
			method: "GET",
			path: `/libraries/templates/${templateId}`,
		});
	}

	async deleteTemplate(templateId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/libraries/templates/${templateId}`,
		});
	}
}
