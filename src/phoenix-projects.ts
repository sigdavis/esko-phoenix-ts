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
	LayoutEntity,
	RestScriptContext,
	AutosnapArtworkEntity,
	SaveJobTemplateResource,
	EditLayoutResource,
	ApplyImposeResultResource,
	ApplyPopulateResultResource,
	ApplyPlanResultResource,
} from "./types";

export class PhoenixProjectsAPI extends PhoenixBase {
	// Core Project Management
	async getProjects(): Promise<PhoenixProject[]> {
		return this.makeRequest<PhoenixProject[]>({
			method: "GET",
			path: "/projects",
		});
	}

	async createProject(projectResource: CreateJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/projects",
			body: projectResource,
		});
	}

	async openProject(file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = `----formdata-boundary-${Date.now()}`;
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/projects/open",
			body: formData,
			headers: {
				"Content-Type": `multipart/form-data; boundary=${boundary}`,
			},
		});
	}

	async getProject(projectId: string, productVersion: "V1" | "V2" = "V1"): Promise<PhoenixProject> {
		return this.makeRequest<PhoenixProject>({
			method: "GET",
			path: `/projects/${projectId}?product-version=${productVersion}`,
		});
	}

	async deleteProject(projectId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}`,
		});
	}

	async editProject(projectId: string, editResource: EditProjectResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/projects/${projectId}`,
			body: editResource,
		});
	}

	// Project Products
	async getProjectProducts(
		projectId: string,
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
			path: `/projects/${projectId}/products${queryString ? "?" + queryString : ""}`,
		});
	}

	// Project Actions
	async snapProject(projectId: string, autosnapResource: AutosnapArtworkEntity): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/snap`,
			body: autosnapResource,
		});
	}

	async runProjectScript(projectId: string, scriptResource: RestScriptContext): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/script`,
			body: scriptResource,
		});
	}

	async imposeProject(projectId: string, imposeResource: ImposeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/impose`,
			body: imposeResource,
		});
	}

	async populateProject(projectId: string, populateResource: PopulateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/populate`,
			body: populateResource,
		});
	}

	async placeProjectComponent(projectId: string, placeResource: PlaceComponentResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/place`,
			body: placeResource,
		});
	}

	async autosnapProject(projectId: string, autosnapResource: AutosnapResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/autosnap`,
			body: autosnapResource,
		});
	}

	async stepRepeatProject(projectId: string, stepRepeatResource: StepRepeatResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/steprepeat`,
			body: stepRepeatResource,
		});
	}

	async planProject(projectId: string, planResource: PlanResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/plan`,
			body: planResource,
		});
	}

	async optimizeProject(projectId: string, optimizeResource: OptimizeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/optimize`,
			body: optimizeResource,
		});
	}

	async copyProject(projectId: string, copyResource: CopyJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/copy`,
			body: copyResource,
		});
	}

	async renameProject(projectId: string, renameResource: RenameJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/rename`,
			body: renameResource,
		});
	}

	async saveProjectTemplate(projectId: string, saveTemplateResource: SaveJobTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/save-template`,
			body: saveTemplateResource,
		});
	}

	// Script operations that are not deprecated
	async runScript(scriptResource: RestScriptContext): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/projects/script",
			body: scriptResource,
		});
	}

	// Project Layouts
	async getProjectLayouts(projectId: string): Promise<LayoutEntity[]> {
		return this.makeRequest<LayoutEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/layouts`,
		});
	}

	async deleteProjectLayout(projectId: string, layoutIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/layouts/${layoutIndex}`,
		});
	}

	async editProjectLayout(projectId: string, layoutIndex: number, editResource: EditLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/projects/${projectId}/layouts/${layoutIndex}`,
			body: editResource,
		});
	}

	async resizeProjectLayoutSheet(projectId: string, layoutIndex: number, resizeResource: ResizeSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet/resize`,
			body: resizeResource,
		});
	}

	async setProjectLayoutSheet(projectId: string, layoutIndex: number, setSheetResource: SetSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
			body: setSheetResource,
		});
	}

	async setProjectLayoutPlate(projectId: string, layoutIndex: number, setPlateResource: SetPlateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/plate`,
			body: setPlateResource,
		});
	}

	async setProjectLayoutPress(projectId: string, layoutIndex: number, setPressResource: SetPressResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/press`,
			body: setPressResource,
		});
	}

	// Project Layout Components
	async moveProjectLayoutComponent(
		projectId: string,
		layoutIndex: number,
		componentIndex: number,
		moveResource: MoveComponentResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}/move`,
			body: moveResource,
		});
	}

	async rotateProjectLayoutComponent(
		projectId: string,
		layoutIndex: number,
		componentIndex: number,
		rotateResource: RotateComponentResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PATCH",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}/rotate`,
			body: rotateResource,
		});
	}

	async deleteProjectLayoutComponent(projectId: string, layoutIndex: number, componentIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}`,
		});
	}

	// Project Layout Results
	async getProjectLayoutResult(projectId: string, layoutIndex: number): Promise<LayoutResultEntity> {
		return this.makeRequest<LayoutResultEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/result`,
		});
	}

	async getProjectOptimizeResults(
		projectId: string,
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
			path: `/projects/${projectId}/optimize/${layoutIndex}/results${queryString ? "?" + queryString : ""}`,
		});
	}

	async applyProjectImposeResult(
		projectId: string,
		layoutIndex: number,
		resultId: string,
		applyResource: ApplyImposeResultResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/impose/${layoutIndex}/result/${resultId}/apply`,
			body: applyResource,
		});
	}

	async applyProjectPopulateResult(
		projectId: string,
		layoutIndex: number,
		resultId: string,
		applyResource: ApplyPopulateResultResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/populate/${layoutIndex}/result/${resultId}/apply`,
			body: applyResource,
		});
	}

	async applyProjectPlanResult(projectId: string, resultId: string, applyResource: ApplyPlanResultResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/plan/result/${resultId}/apply`,
			body: applyResource,
		});
	}

	// File Management
	async getProjectFiles(projectId: string): Promise<JobFilesEntity> {
		return this.makeRequest<JobFilesEntity>({
			method: "GET",
			path: `/projects/${projectId}/files`,
		});
	}

	async uploadProjectFile(projectId: string, file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = `----formdata-boundary-${Date.now()}`;
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/files/upload`,
			body: formData,
			headers: {
				"Content-Type": `multipart/form-data; boundary=${boundary}`,
			},
		});
	}

	async getProjectUploadedFile(projectId: string, fileId: string): Promise<JobFilesEntity> {
		return this.makeRequest<JobFilesEntity>({
			method: "GET",
			path: `/projects/${projectId}/files/upload/${fileId}`,
		});
	}

	async deleteProjectUploadedFile(projectId: string, fileId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/files/upload/${fileId}`,
		});
	}

	async downloadProjectUploadedFile(projectId: string, fileId: string, filePath: string): Promise<any> {
		return this.makeRequest<any>({
			method: "GET",
			path: `/projects/${projectId}/files/upload/${fileId}/${filePath}`,
		});
	}

	async getProjectOutputFile(projectId: string, fileId: string): Promise<JobFilesEntity> {
		return this.makeRequest<JobFilesEntity>({
			method: "GET",
			path: `/projects/${projectId}/files/output/${fileId}`,
		});
	}

	async deleteProjectOutputFile(projectId: string, fileId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/files/output/${fileId}`,
		});
	}

	async downloadProjectOutputFile(projectId: string, fileId: string, filePath: string): Promise<any> {
		return this.makeRequest<any>({
			method: "GET",
			path: `/projects/${projectId}/files/output/${fileId}/${filePath}`,
		});
	}

	// Products Management
	async createProjectFlatProduct(projectId: string, productResource: CreateFlatProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/flat`,
			body: productResource,
		});
	}

	async createProjectBoundProduct(projectId: string, productResource: CreateBoundProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/bound`,
			body: productResource,
		});
	}

	async createProjectFoldedProduct(projectId: string, productResource: CreateFoldedProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/folded`,
			body: productResource,
		});
	}

	async createProjectTiledProduct(projectId: string, productResource: CreateTiledProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/tiled`,
			body: productResource,
		});
	}

	// Import Operations
	async importProjectProductCsv(projectId: string, importResource: ImportProductCsvResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/product-csv`,
			body: importResource,
		});
	}

	async importProjectDieTemplate(projectId: string, importResource: ImportDieTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/die-template`,
			body: importResource,
		});
	}

	async importProjectDieDesign(projectId: string, importResource: ImportDieDesignResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/die-design`,
			body: importResource,
		});
	}

	// Export Operations
	async exportProjectCoverSheet(projectId: string, exportResource: ExportCoverSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/coversheet`,
			body: exportResource,
		});
	}

	async exportProjectPdfLayout(projectId: string, exportResource: ExportPdfLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/layout/pdf`,
			body: exportResource,
		});
	}

	async exportProjectDxfLayout(projectId: string, exportResource: ExportDxfLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/layout/dxf`,
			body: exportResource,
		});
	}

	async exportProjectMfgLayout(projectId: string, exportResource: ExportMfgLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/layout/mfg`,
			body: exportResource,
		});
	}

	async exportProjectZccLayout(projectId: string, exportResource: ExportZccLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/layout/zcc`,
			body: exportResource,
		});
	}

	async exportProjectCff2Layout(projectId: string, exportResource: ExportCff2LayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/layout/cff2`,
			body: exportResource,
		});
	}

	async exportProjectHpJdf(projectId: string, exportResource: ExportHpJdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/hp-jdf`,
			body: exportResource,
		});
	}

	async exportProjectJdf(projectId: string, exportResource: ExportJdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/jdf`,
			body: exportResource,
		});
	}

	async exportProjectXmlReport(projectId: string, exportResource: ExportXmlReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/report/xml`,
			body: exportResource,
		});
	}

	async exportProjectJsonReport(projectId: string, exportResource: ExportJsonReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/report/json`,
			body: exportResource,
		});
	}

	async exportProjectCsvReport(projectId: string, exportResource: ExportCsvReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/report/csv`,
			body: exportResource,
		});
	}

	async exportProjectProductTilingReport(
		projectId: string,
		productName: string,
		exportResource: ExportTilingReportResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/${productName}/export/tiling-report`,
			body: exportResource,
		});
	}
}
