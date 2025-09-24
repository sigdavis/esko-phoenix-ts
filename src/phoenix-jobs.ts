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
	PlanResultEntity,
	RunScriptResource,
	SetSheetResource,
	SetPlateResource,
	SetPressResource,
	ResizeSheetResource,
	SheetEntity,
	PlateEntity,
	PressEntity,
	CreateFlatProductResource,
	CreateBoundProductResource,
	CreateFoldedProductResource,
	CreateTiledProductResource,
	LayoutEntity
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
		renderMode?: "Artwork" | "Colors" | "Dielines"
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

	async createJobProduct(
		jobId: string,
		productResource: CreateFlatProductResource | CreateBoundProductResource | CreateFoldedProductResource | CreateTiledProductResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/products`,
			body: productResource,
		});
	}

	async deleteJobProduct(jobId: string, productIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}/products/${productIndex}`,
		});
	}

	// Job Actions
	async imposeJob(jobId: string, imposeResource: ImposeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/impose`,
			body: imposeResource,
		});
	}

	async populateJobLayout(jobId: string, populateResource: PopulateResource): Promise<ResponseEntity> {
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

	async runJobScript(jobId: string, runScriptResource: RunScriptResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/runscript`,
			body: runScriptResource,
		});
	}

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

	// Job Layouts
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

	async getJobLayoutSheet(jobId: string, layoutIndex: number): Promise<SheetEntity> {
		return this.makeRequest<SheetEntity>({
			method: "GET",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
		});
	}

	async setJobLayoutSheet(jobId: string, layoutIndex: number, setSheetResource: SetSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
			body: setSheetResource,
		});
	}

	async resizeJobLayoutSheet(jobId: string, layoutIndex: number, resizeResource: ResizeSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/sheet`,
			body: resizeResource,
		});
	}

	async getJobLayoutPlate(jobId: string, layoutIndex: number): Promise<PlateEntity> {
		return this.makeRequest<PlateEntity>({
			method: "GET",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/plate`,
		});
	}

	async setJobLayoutPlate(jobId: string, layoutIndex: number, setPlateResource: SetPlateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/plate`,
			body: setPlateResource,
		});
	}

	async getJobLayoutPress(jobId: string, layoutIndex: number): Promise<PressEntity> {
		return this.makeRequest<PressEntity>({
			method: "GET",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/press`,
		});
	}

	async setJobLayoutPress(jobId: string, layoutIndex: number, setPressResource: SetPressResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/press`,
			body: setPressResource,
		});
	}

	// Job Layout Components
	async moveJobLayoutComponent(
		jobId: string,
		layoutIndex: number,
		componentIndex: number,
		moveResource: MoveComponentResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentIndex}/move`,
			body: moveResource,
		});
	}

	async rotateJobLayoutComponent(
		jobId: string,
		layoutIndex: number,
		componentIndex: number,
		rotateResource: RotateComponentResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentIndex}/rotate`,
			body: rotateResource,
		});
	}

	async deleteJobLayoutComponent(jobId: string, layoutIndex: number, componentIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/components/${componentIndex}`,
		});
	}

	// Job Layout Results
	async getJobLayoutResult(jobId: string, layoutIndex: number): Promise<LayoutResultEntity> {
		return this.makeRequest<LayoutResultEntity>({
			method: "GET",
			path: `/jobs/${jobId}/layouts/${layoutIndex}/result`,
		});
	}

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

	async getJobPlanResults(jobId: string): Promise<PlanResultEntity[]> {
		return this.makeRequest<PlanResultEntity[]>({
			method: "GET",
			path: `/jobs/${jobId}/plan/results`,
		});
	}

	// Job Files
	async getJobFiles(jobId: string): Promise<JobFilesEntity[]> {
		return this.makeRequest<JobFilesEntity[]>({
			method: "GET",
			path: `/jobs/${jobId}/files`,
		});
	}

	async uploadJobFile(jobId: string, file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = "----formdata-boundary-" + Math.random().toString(36);
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/files`,
			body: formData,
			contentType: `multipart/form-data; boundary=${boundary}`,
		});
	}

	async deleteJobFile(jobId: string, filename: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/jobs/${jobId}/files/${filename}`,
		});
	}

	// Job Exports
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
			path: `/jobs/${jobId}/export/pdf`,
			body: exportResource,
		});
	}

	async exportJobDxfLayout(jobId: string, exportResource: ExportDxfLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/dxf`,
			body: exportResource,
		});
	}

	async exportJobMfgLayout(jobId: string, exportResource: ExportMfgLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/mfg`,
			body: exportResource,
		});
	}

	async exportJobZccLayout(jobId: string, exportResource: ExportZccLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/zcc`,
			body: exportResource,
		});
	}

	async exportJobCff2Layout(jobId: string, exportResource: ExportCff2LayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/cff2`,
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
			path: `/jobs/${jobId}/export/xml`,
			body: exportResource,
		});
	}

	async exportJobJsonReport(jobId: string, exportResource: ExportJsonReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/json`,
			body: exportResource,
		});
	}

	async exportJobCsvReport(jobId: string, exportResource: ExportCsvReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/csv`,
			body: exportResource,
		});
	}

	async exportJobTilingReport(jobId: string, exportResource: ExportTilingReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/export/tiling`,
			body: exportResource,
		});
	}

	// Job Imports
	async importJobProductCsv(jobId: string, importResource: ImportProductCsvResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/import/csv`,
			body: importResource,
		});
	}

	async importJobDieTemplate(jobId: string, importResource: ImportDieTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/import/dietemplate`,
			body: importResource,
		});
	}

	async importJobDieDesign(jobId: string, importResource: ImportDieDesignResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/jobs/${jobId}/import/diedesign`,
			body: importResource,
		});
	}
}
