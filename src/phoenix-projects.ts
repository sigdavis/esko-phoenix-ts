// Phoenix Projects API Module
// ============================================

import { PhoenixBase } from "./phoenix-base";
import {
	PhoenixProject,
	ResponseEntity,
	ProductEntity,
	LayoutEntity,
	SurfaceEntity,
	ComponentEntity,
	JobFilesEntity,
	SheetEntity,
	LayoutResultEntity,
	PlanResultEntity,
	CreateFlatProductResource,
	CreateBoundProductResource,
	CreateFoldedProductResource,
	CreateTiledProductResource,
	CreatePartProductResource,
	ImposeResource,
	PopulateResource,
	PlaceComponentResource,
	MoveComponentResource,
	RotateComponentResource,
	OptimizeResource,
	AutosnapResource,
	StepRepeatResource,
	PlanResource,
	RunScriptResource,
	ExportPdfResource,
	ExportDxfResource,
	ExportReportResource,
	ExportJdfResource,
	CopyProjectResource,
	ImportProductCsvResource,
} from "./types";

export class PhoenixProjectsAPI extends PhoenixBase {
	// ===========================================
	// PROJECT MANAGEMENT
	// ===========================================

	async getProjects(): Promise<PhoenixProject[]> {
		return this.makeRequest<PhoenixProject[]>({
			method: "GET",
			path: "/projects",
		});
	}

	async createProject(project: Partial<PhoenixProject>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: "/projects",
			body: project,
		});
	}

	async openProject(file: Buffer, filename: string): Promise<ResponseEntity> {
		return this.uploadFile("/projects", file, filename);
	}

	async getProject(projectId: string): Promise<PhoenixProject> {
		return this.makeRequest<PhoenixProject>({
			method: "GET",
			path: `/projects/${projectId}`,
		});
	}

	async updateProject(projectId: string, project: Partial<PhoenixProject>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/projects/${projectId}`,
			body: project,
		});
	}

	async deleteProject(projectId: string): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}`,
		});
	}

	async copyProject(projectId: string, copyResource: CopyProjectResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/copy`,
			body: copyResource,
		});
	}

	// ===========================================
	// PRODUCTS
	// ===========================================

	async getProjectProducts(
		projectId: string,
		thumb?: boolean,
		thumbWidth?: number,
		thumbHeight?: number,
		renderMode?: string
	): Promise<ProductEntity[]> {
		const params = new URLSearchParams();
		if (thumb !== undefined) params.append("thumb", thumb.toString());
		if (thumbWidth) params.append("thumb-width", thumbWidth.toString());
		if (thumbHeight) params.append("thumb-height", thumbHeight.toString());
		if (renderMode) params.append("render-mode", renderMode);

		const query = params.toString();
		return this.makeRequest<ProductEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/products${query ? `?${query}` : ""}`,
		});
	}

	async getProjectProduct(projectId: string, productIndex: number): Promise<ProductEntity> {
		return this.makeRequest<ProductEntity>({
			method: "GET",
			path: `/projects/${projectId}/products/${productIndex}`,
		});
	}

	async updateProjectProduct(projectId: string, productIndex: number, product: Partial<ProductEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/projects/${projectId}/products/${productIndex}`,
			body: product,
		});
	}

	async deleteProjectProduct(projectId: string, productIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/products/${productIndex}`,
		});
	}

	async createProjectFlatProduct(projectId: string, product: CreateFlatProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/flat`,
			body: product,
		});
	}

	async createProjectBoundProduct(projectId: string, product: CreateBoundProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/bound`,
			body: product,
		});
	}

	async createProjectFoldedProduct(projectId: string, product: CreateFoldedProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/folded`,
			body: product,
		});
	}

	async createProjectTiledProduct(projectId: string, product: CreateTiledProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/tiled`,
			body: product,
		});
	}

	async createProjectPartProduct(projectId: string, product: CreatePartProductResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/products/part`,
			body: product,
		});
	}

	// ===========================================
	// LAYOUTS
	// ===========================================

	async getProjectLayouts(projectId: string): Promise<LayoutEntity[]> {
		return this.makeRequest<LayoutEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/layouts`,
		});
	}

	async createProjectLayout(projectId: string, layout: Partial<LayoutEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts`,
			body: layout,
		});
	}

	async getProjectLayout(projectId: string, layoutIndex: number): Promise<LayoutEntity> {
		return this.makeRequest<LayoutEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}`,
		});
	}

	async deleteProjectLayout(projectId: string, layoutIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/layouts/${layoutIndex}`,
		});
	}

	async getProjectLayoutFront(
		projectId: string,
		layoutIndex: number,
		thumb?: boolean,
		thumbWidth?: number,
		thumbHeight?: number
	): Promise<SurfaceEntity> {
		const params = new URLSearchParams();
		if (thumb !== undefined) params.append("thumb", thumb.toString());
		if (thumbWidth) params.append("thumb-width", thumbWidth.toString());
		if (thumbHeight) params.append("thumb-height", thumbHeight.toString());

		const query = params.toString();
		return this.makeRequest<SurfaceEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/front${query ? `?${query}` : ""}`,
		});
	}

	async getProjectLayoutBack(
		projectId: string,
		layoutIndex: number,
		thumb?: boolean,
		thumbWidth?: number,
		thumbHeight?: number
	): Promise<SurfaceEntity> {
		const params = new URLSearchParams();
		if (thumb !== undefined) params.append("thumb", thumb.toString());
		if (thumbWidth) params.append("thumb-width", thumbWidth.toString());
		if (thumbHeight) params.append("thumb-height", thumbHeight.toString());

		const query = params.toString();
		return this.makeRequest<SurfaceEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/back${query ? `?${query}` : ""}`,
		});
	}

	async getProjectLayoutSheet(projectId: string, layoutIndex: number): Promise<SheetEntity> {
		return this.makeRequest<SheetEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
		});
	}

	async resizeProjectLayoutSheet(projectId: string, layoutIndex: number, sheet: Partial<SheetEntity>): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/projects/${projectId}/layouts/${layoutIndex}/sheet`,
			body: sheet,
		});
	}

	// ===========================================
	// COMPONENTS
	// ===========================================

	async getProjectLayoutComponents(projectId: string, layoutIndex: number): Promise<ComponentEntity[]> {
		return this.makeRequest<ComponentEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components`,
		});
	}

	async placeProjectComponent(projectId: string, layoutIndex: number, component: PlaceComponentResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components`,
			body: component,
		});
	}

	async getProjectComponent(projectId: string, layoutIndex: number, componentIndex: number): Promise<ComponentEntity> {
		return this.makeRequest<ComponentEntity>({
			method: "GET",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}`,
		});
	}

	async deleteProjectComponent(projectId: string, layoutIndex: number, componentIndex: number): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "DELETE",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}`,
		});
	}

	async moveProjectComponent(projectId: string, layoutIndex: number, componentIndex: number, move: MoveComponentResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}/move`,
			body: move,
		});
	}

	async rotateProjectComponent(
		projectId: string,
		layoutIndex: number,
		componentIndex: number,
		rotate: RotateComponentResource
	): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "PUT",
			path: `/projects/${projectId}/layouts/${layoutIndex}/components/${componentIndex}/rotate`,
			body: rotate,
		});
	}

	// ===========================================
	// ACTIONS
	// ===========================================

	async imposeProject(projectId: string, impose: ImposeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/impose`,
			body: impose,
		});
	}

	async populateProject(projectId: string, populate: PopulateResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/populate`,
			body: populate,
		});
	}

	async optimizeProject(projectId: string, optimize: OptimizeResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/optimize`,
			body: optimize,
		});
	}

	async autosnapProject(projectId: string, autosnap: AutosnapResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/autosnap`,
			body: autosnap,
		});
	}

	async stepRepeatProject(projectId: string, stepRepeat: StepRepeatResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/step-repeat`,
			body: stepRepeat,
		});
	}

	async planProject(projectId: string, plan: PlanResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/plan`,
			body: plan,
		});
	}

	async runProjectScript(projectId: string, script: RunScriptResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/run-script`,
			body: script,
		});
	}

	// ===========================================
	// RESULTS
	// ===========================================

	async getProjectOptimizeResults(
		projectId: string,
		layoutIndex: number,
		thumb?: boolean,
		thumbWidth?: number,
		thumbHeight?: number
	): Promise<LayoutResultEntity[]> {
		const params = new URLSearchParams();
		if (thumb !== undefined) params.append("thumb", thumb.toString());
		if (thumbWidth) params.append("thumb-width", thumbWidth.toString());
		if (thumbHeight) params.append("thumb-height", thumbHeight.toString());

		const query = params.toString();
		return this.makeRequest<LayoutResultEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/optimize/results/${layoutIndex}${query ? `?${query}` : ""}`,
		});
	}

	async getProjectPlanResults(projectId: string): Promise<PlanResultEntity[]> {
		return this.makeRequest<PlanResultEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/plan/results`,
		});
	}

	// ===========================================
	// FILES
	// ===========================================

	async getProjectUploadedFiles(projectId: string): Promise<JobFilesEntity[]> {
		return this.makeRequest<JobFilesEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/files/upload`,
		});
	}

	async uploadProjectFile(projectId: string, file: Buffer, filename: string): Promise<ResponseEntity> {
		return this.uploadFile(`/projects/${projectId}/files/upload`, file, filename);
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

	async downloadProjectUploadedFile(projectId: string, fileId: string, filepath: string): Promise<any> {
		return this.makeRequest<any>({
			method: "GET",
			path: `/projects/${projectId}/files/upload/${fileId}/${filepath}`,
		});
	}

	async getProjectOutputFiles(projectId: string): Promise<JobFilesEntity[]> {
		return this.makeRequest<JobFilesEntity[]>({
			method: "GET",
			path: `/projects/${projectId}/files/output`,
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

	async downloadProjectOutputFile(projectId: string, fileId: string, filepath: string): Promise<any> {
		return this.makeRequest<any>({
			method: "GET",
			path: `/projects/${projectId}/files/output/${fileId}/${filepath}`,
		});
	}

	// ===========================================
	// EXPORTS
	// ===========================================

	async exportProjectPdf(projectId: string, exportPdf: ExportPdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/pdf`,
			body: exportPdf,
		});
	}

	async exportProjectPdfLayout(projectId: string, exportPdf: ExportPdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/pdf/layout`,
			body: exportPdf,
		});
	}

	async exportProjectDxf(projectId: string, exportDxf: ExportDxfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/dxf`,
			body: exportDxf,
		});
	}

	async exportProjectDxfLayout(projectId: string, exportDxf: ExportDxfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/dxf/layout`,
			body: exportDxf,
		});
	}

	async exportProjectXmlReport(projectId: string, exportReport: ExportReportResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/xml/report`,
			body: exportReport,
		});
	}

	async exportProjectCoverSheet(projectId: string, exportPdf: ExportPdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/pdf/coversheet`,
			body: exportPdf,
		});
	}

	async exportProjectJdf(projectId: string, exportJdf: ExportJdfResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/export/jdf`,
			body: exportJdf,
		});
	}

	// ===========================================
	// IMPORT
	// ===========================================

	async importProjectProductCsv(projectId: string, importCsv: ImportProductCsvResource): Promise<ResponseEntity> {
		return this.makeRequest<ResponseEntity>({
			method: "POST",
			path: `/projects/${projectId}/import/product/csv`,
			body: importCsv,
		});
	}
}
