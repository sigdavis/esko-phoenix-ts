import { PhoenixBase } from "./phoenix-base";
import {
	ResponseEntity,
	PhoenixProject,
	PhoenixProductEntity,
	CreateJobResource,
	EditProjectResource,
	CreateFlatProductResource,
	CreateBoundProductResource,
	CreateFoldedProductResource,
	CreateTiledProductResource,
	LayoutEntity,
	ImposeResource,
	PopulateResource,
	PlaceComponentResource,
	AutosnapResource,
	StepRepeatResource,
	PlanResource,
	OptimizeResource,
	RunScriptResource,
	CopyJobResource,
	RenameJobResource,
	MoveComponentResource,
	RotateComponentResource,
	SetSheetResource,
	ResizeSheetResource,
	SetPlateResource,
	SetPressResource,
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
	SheetEntity,
	PlateEntity,
	PressEntity,
	LayoutResultEntity,
	PlanResultEntity,
	JobFilesEntity,
} from "./types";

export class PhoenixProjectsAPI extends PhoenixBase {
	// Core Project Management
	async getProjects(): Promise<PhoenixProject[]> {
		return this.makeRequest<PhoenixProject[]>({
			method: "GET",
			path: "/projects",
		});
	}

	async createProject(jobResource: CreateJobResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/projects",
			body: jobResource,
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

	async openProject(file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = "----formdata-boundary-" + Math.random().toString(36);
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/projects/open",
			body: formData,
			contentType: `multipart/form-data; boundary=${boundary}`,
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

	async createFlatProduct(projectId: string, productResource: CreateFlatProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/flat`,
			body: productResource,
		});
	}

	async createBoundProduct(projectId: string, productResource: CreateBoundProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/bound`,
			body: productResource,
		});
	}

	async createFoldedProduct(projectId: string, productResource: CreateFoldedProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/folded`,
			body: productResource,
		});
	}

	async createTiledProduct(projectId: string, productResource: CreateTiledProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/tiled`,
			body: productResource,
		});
	}

	async deleteProjectProduct(projectId: string, productIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/products/${productIndex}`,
		});
	}

	// Project Actions
	async imposeProject(projectId: string, imposeResource: ImposeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/impose`,
			body: imposeResource,
		});
	}

	async populateProjectLayout(projectId: string, populateResource: PopulateResource): Promise<ResponseEntity> {
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

	async runProjectScript(projectId: string, runScriptResource: RunScriptResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/runscript`,
			body: runScriptResource,
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

	async getProjectLayoutSheet(projectId: string, layoutIndex: number): Promise<SheetEntity> {
		return this.makeRequest<SheetEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
		});
	}

	async setProjectLayoutSheet(projectId: string, layoutIndex: number, setSheetResource: SetSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
			body: setSheetResource,
		});
	}

	async resizeProjectLayoutSheet(projectId: string, layoutIndex: number, resizeResource: ResizeSheetResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
			body: resizeResource,
		});
	}

	async getProjectLayoutPlate(projectId: string, layoutIndex: number): Promise<PlateEntity> {
		return this.makeRequest<PlateEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/plate`,
		});
	}

	async setProjectLayoutPlate(projectId: string, layoutIndex: number, setPlateResource: SetPlateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/plate`,
			body: setPlateResource,
		});
	}

	async getProjectLayoutPress(projectId: string, layoutIndex: number): Promise<PressEntity> {
		return this.makeRequest<PressEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/press`,
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

	async getProjectPlanResults(projectId: string): Promise<PlanResultEntity[]> {
		return this.makeRequest<PlanResultEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/plan/results`,
		});
	}

	// Project Files
	async getProjectFiles(projectId: string): Promise<JobFilesEntity[]> {
		return this.makeRequest<JobFilesEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/files`,
		});
	}

	async uploadProjectFile(projectId: string, file: Buffer, filename: string): Promise<ResponseEntity> {
		const boundary = "----formdata-boundary-" + Math.random().toString(36);
		const formData = this.createMultipartFormData(file, filename, boundary);

		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/files`,
			body: formData,
			contentType: `multipart/form-data; boundary=${boundary}`,
		});
	}

	async deleteProjectFile(projectId: string, filename: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/files/${filename}`,
		});
	}

	// Project Exports
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
			path: `/projects/${projectId}/export/pdf`,
			body: exportResource,
		});
	}

	async exportProjectDxfLayout(projectId: string, exportResource: ExportDxfLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/dxf`,
			body: exportResource,
		});
	}

	async exportProjectMfgLayout(projectId: string, exportResource: ExportMfgLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/mfg`,
			body: exportResource,
		});
	}

	async exportProjectZccLayout(projectId: string, exportResource: ExportZccLayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/zcc`,
			body: exportResource,
		});
	}

	async exportProjectCff2Layout(projectId: string, exportResource: ExportCff2LayoutResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/cff2`,
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
			path: `/projects/${projectId}/export/xml`,
			body: exportResource,
		});
	}

	async exportProjectJsonReport(projectId: string, exportResource: ExportJsonReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/json`,
			body: exportResource,
		});
	}

	async exportProjectCsvReport(projectId: string, exportResource: ExportCsvReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/csv`,
			body: exportResource,
		});
	}

	async exportProjectTilingReport(projectId: string, exportResource: ExportTilingReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/tiling`,
			body: exportResource,
		});
	}

	// Project Imports
	async importProjectProductCsv(projectId: string, importResource: ImportProductCsvResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/csv`,
			body: importResource,
		});
	}

	async importProjectDieTemplate(projectId: string, importResource: ImportDieTemplateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/dietemplate`,
			body: importResource,
		});
	}

	async importProjectDieDesign(projectId: string, importResource: ImportDieDesignResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/diedesign`,
			body: importResource,
		});
	}
}
