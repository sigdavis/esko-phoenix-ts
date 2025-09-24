import { PhoenixBase } from "./phoenix-base";
import {
	ResponseEntity,
	PhoenixProject,
	PhoenixProductEntity,
	CreateJobResource,
	EditProjectResource,
	LayoutResultEntity,
	ImposeResource,
	PopulateResource,
	PlaceComponentResource,
	JobFilesEntity,
	ExportCoverSheetResource,
	ExportPdfLayoutResource,
	ExportDxfLayoutResource,
	ExportMfgLayoutResource,
	ExportZccLayoutResource,
	ExportCff2LayoutResource,
	ExportHpJdfResource,
	ExportJdfResource,
	ExportXmlReportResource,
	ExportJsonReportResource,
	ExportCsvReportResource,
	ExportTilingReportResource,
	ImportProductCsvResource,
	ImportDieTemplateResource,
	ImportDieDesignResource,
	AutosnapResource,
	MoveComponentResource,
	RotateComponentResource,
	OptimizeResource,
	CopyJobResource,
	RenameJobResource,
	StepRepeatResource,
	PlanResource,
	SetSheetResource,
	SetPlateResource,
	SetPressResource,
	ResizeSheetResource,
	CreateFlatProductResource,
	CreateBoundProductResource,
	CreateFoldedProductResource,
	CreateTiledProductResource,
	LayoutEntity,
	RestScriptContext,
	SaveJobTemplateResource,
	EditLayoutResource,
	ApplyImposeResultResource,
	ApplyPopulateResultResource,
	ApplyPlanResultResource,
} from "./types";

export class PhoenixJobsAPI extends PhoenixBase {
	// Core Job Management
	async getJobs(): Promise<PhoenixProject[]> {
		return this.makeRequest<PhoenixProject[]>({
			method: "GET",
			path: "/jobs",
		});
	}

	async createJob(jobResource: CreateJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/jobs",
			body: jobResource,
		});
	}

	async openJob(file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = `----formdata-boundary-${Date.now()}`;
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/jobs/open",
			body: formData,
			headers: {
				"Content-Type": `multipart/form-data; boundary=${boundary}`,
			},
		});
	}

	async getJob(jobId: string, productVersion: "V1" | "V2" = "V1"): Promise<PhoenixProject> {
		return this.makeRequest<PhoenixProject>({
			method: "GET",
			path: `/jobs/${jobId}?product-version=${productVersion}`,
		});
	}

	async deleteJob(jobId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}`,
		});
	}

	async editJob(jobId: string, editResource: EditProjectResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/jobs/${jobId}`,
			body: editResource,
		});
	}

	// Job Products
	async getJobProducts(
		jobId: string,
		thumb?: boolean,
		thumbWidth?: number,
		thumbHeight?: number,
		renderMode?: string
	): Promise<PhoenixProductEntity[]> {
		const params = new URLSearchParams();
		if (thumb !== undefined) params.append("thumb", thumb.toString());
		if (thumbWidth !== undefined) params.append("thumb-width", thumbWidth.toString());
		if (thumbHeight !== undefined) params.append("thumb-height", thumbHeight.toString());
		if (renderMode !== undefined) params.append("render-mode", renderMode);

		const queryString = params.toString();
		return this.makeRequest<PhoenixProductEntity[]>({
			method: "GET",
			path: `/jobs/${jobId}/products${queryString ? "?" + queryString : ""}`,
		});
	}

	// Job Layout Operations
	async getJobLayouts(jobId: string): Promise<LayoutEntity[]> {
		return this.makeRequest<LayoutEntity[]>({
			method: "GET",
			path: `/jobs/${jobId}/layouts`,
		});
	}

	async deleteJobLayout(jobId: string, layoutIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}/layouts/${layoutIndex}`,
		});
	}

	async editJobLayout(jobId: string, layoutIndex: number, editResource: EditLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/jobs/${jobId}/layouts/${layoutIndex}`,
			body: editResource,
		});
	}

	async resizeJobLayoutSheet(jobId: string, layoutIndex: number, resizeResource: ResizeSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet/resize`,
			body: resizeResource,
		});
	}

	async setJobLayoutSheet(jobId: string, layoutIndex: number, setSheetResource: SetSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
			body: setSheetResource,
		});
	}

	async setJobLayoutPlate(jobId: string, layoutIndex: number, setPlateResource: SetPlateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/plate`,
			body: setPlateResource,
		});
	}

	async setJobLayoutPress(jobId: string, layoutIndex: number, setPressResource: SetPressResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/press`,
			body: setPressResource,
		});
	}

	// Job Processing Operations
	async imposeJob(jobId: string, imposeResource: ImposeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/impose`,
			body: imposeResource,
		});
	}

	async populateJob(jobId: string, populateResource: PopulateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/populate`,
			body: populateResource,
		});
	}

	async placeJobComponent(jobId: string, placeResource: PlaceComponentResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/place`,
			body: placeResource,
		});
	}

	async moveJobComponent(jobId: string, layoutIndex: number, componentId: string, moveResource: MoveComponentResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentId}/move`,
			body: moveResource,
		});
	}

	async rotateJobComponent(
		jobId: string,
		layoutIndex: number,
		componentId: string,
		rotateResource: RotateComponentResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentId}/rotate`,
			body: rotateResource,
		});
	}

	async autosnapJob(jobId: string, autosnapResource: AutosnapResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/autosnap`,
			body: autosnapResource,
		});
	}

	async stepRepeatJob(jobId: string, stepRepeatResource: StepRepeatResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/steprepeat`,
			body: stepRepeatResource,
		});
	}

	async planJob(jobId: string, planResource: PlanResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/plan`,
			body: planResource,
		});
	}

	async optimizeJob(jobId: string, optimizeResource: OptimizeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/optimize`,
			body: optimizeResource,
		});
	}

	// Job Management Operations
	async copyJob(jobId: string, copyResource: CopyJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/copy`,
			body: copyResource,
		});
	}

	async renameJob(jobId: string, renameResource: RenameJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/rename`,
			body: renameResource,
		});
	}

	async saveJobTemplate(jobId: string, saveTemplateResource: SaveJobTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/save-template`,
			body: saveTemplateResource,
		});
	}

	// Result Operations
	async getJobOptimizeResults(
		jobId: string,
		layoutIndex: number,
		thumb?: boolean,
		thumbWidth?: number,
		thumbHeight?: number,
		renderMode?: string
	): Promise<LayoutResultEntity[]> {
		const params = new URLSearchParams();
		if (thumb !== undefined) params.append("thumb", thumb.toString());
		if (thumbWidth !== undefined) params.append("thumb-width", thumbWidth.toString());
		if (thumbHeight !== undefined) params.append("thumb-height", thumbHeight.toString());
		if (renderMode !== undefined) params.append("render-mode", renderMode);

		const queryString = params.toString();
		return this.makeRequest<LayoutResultEntity[]>({
			method: "GET",
			path: `/jobs/${jobId}/optimize/${layoutIndex}/results${queryString ? "?" + queryString : ""}`,
		});
	}

	async applyImposeResult(jobId: string, layoutIndex: number, resultId: string, applyResource: ApplyImposeResultResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/impose/${layoutIndex}/result/${resultId}/apply`,
			body: applyResource,
		});
	}

	async applyPopulateResult(
		jobId: string,
		layoutIndex: number,
		resultId: string,
		applyResource: ApplyPopulateResultResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/populate/${layoutIndex}/result/${resultId}/apply`,
			body: applyResource,
		});
	}

	async applyPlanResult(jobId: string, resultId: string, applyResource: ApplyPlanResultResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/plan/result/${resultId}/apply`,
			body: applyResource,
		});
	}

	// File Management
	async getJobFiles(jobId: string): Promise<JobFilesEntity> {
		return this.makeRequest<JobFilesEntity>({
			method: "GET",
			path: `/jobs/${jobId}/files`,
		});
	}

	async uploadJobFile(jobId: string, file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = `----formdata-boundary-${Date.now()}`;
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/files/upload`,
			body: formData,
			headers: {
				"Content-Type": `multipart/form-data; boundary=${boundary}`,
			},
		});
	}

	async getJobUploadedFile(jobId: string, fileId: string): Promise<JobFilesEntity> {
		return this.makeRequest<JobFilesEntity>({
			method: "GET",
			path: `/jobs/${jobId}/files/upload/${fileId}`,
		});
	}

	async deleteJobUploadedFile(jobId: string, fileId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}/files/upload/${fileId}`,
		});
	}

	async downloadJobUploadedFile(jobId: string, fileId: string, filePath: string): Promise<any> {
		return this.makeRequest<any>({
			method: "GET",
			path: `/jobs/${jobId}/files/upload/${fileId}/${filePath}`,
		});
	}

	async getJobOutputFile(jobId: string, fileId: string): Promise<JobFilesEntity> {
		return this.makeRequest<JobFilesEntity>({
			method: "GET",
			path: `/jobs/${jobId}/files/output/${fileId}`,
		});
	}

	async deleteJobOutputFile(jobId: string, fileId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}/files/output/${fileId}`,
		});
	}

	async downloadJobOutputFile(jobId: string, fileId: string, filePath: string): Promise<any> {
		return this.makeRequest<any>({
			method: "GET",
			path: `/jobs/${jobId}/files/output/${fileId}/${filePath}`,
		});
	}

	// Products Management
	async createJobFlatProduct(jobId: string, productResource: CreateFlatProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/products/flat`,
			body: productResource,
		});
	}

	async createJobBoundProduct(jobId: string, productResource: CreateBoundProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/products/bound`,
			body: productResource,
		});
	}

	async createJobFoldedProduct(jobId: string, productResource: CreateFoldedProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/products/folded`,
			body: productResource,
		});
	}

	async createJobTiledProduct(jobId: string, productResource: CreateTiledProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/products/tiled`,
			body: productResource,
		});
	}

	// Import Operations
	async importJobProductCsv(jobId: string, importResource: ImportProductCsvResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/import/product-csv`,
			body: importResource,
		});
	}

	async importJobDieTemplate(jobId: string, importResource: ImportDieTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/import/die-template`,
			body: importResource,
		});
	}

	async importJobDieDesign(jobId: string, importResource: ImportDieDesignResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/import/die-design`,
			body: importResource,
		});
	}

	// Export Operations
	async exportJobCoverSheet(jobId: string, exportResource: ExportCoverSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/coversheet`,
			body: exportResource,
		});
	}

	async exportJobPdfLayout(jobId: string, exportResource: ExportPdfLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/layout/pdf`,
			body: exportResource,
		});
	}

	async exportJobDxfLayout(jobId: string, exportResource: ExportDxfLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/layout/dxf`,
			body: exportResource,
		});
	}

	async exportJobMfgLayout(jobId: string, exportResource: ExportMfgLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/layout/mfg`,
			body: exportResource,
		});
	}

	async exportJobZccLayout(jobId: string, exportResource: ExportZccLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/layout/zcc`,
			body: exportResource,
		});
	}

	async exportJobCff2Layout(jobId: string, exportResource: ExportCff2LayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/layout/cff2`,
			body: exportResource,
		});
	}

	async exportJobHpJdf(jobId: string, exportResource: ExportHpJdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/hp-jdf`,
			body: exportResource,
		});
	}

	async exportJobJdf(jobId: string, exportResource: ExportJdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/jdf`,
			body: exportResource,
		});
	}

	async exportJobXmlReport(jobId: string, exportResource: ExportXmlReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/report/xml`,
			body: exportResource,
		});
	}

	async exportJobJsonReport(jobId: string, exportResource: ExportJsonReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/report/json`,
			body: exportResource,
		});
	}

	async exportJobCsvReport(jobId: string, exportResource: ExportCsvReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/report/csv`,
			body: exportResource,
		});
	}

	async exportJobTilingReport(jobId: string, exportResource: ExportTilingReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/report/tiling`,
			body: exportResource,
		});
	}

	// Script Operations
	async runJobScript(jobId: string, scriptResource: RestScriptContext): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/script`,
			body: scriptResource,
		});
	}
}
