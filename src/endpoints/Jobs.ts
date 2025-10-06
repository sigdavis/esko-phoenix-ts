/**
 * Jobs API Endpoints
 *
 * @description Job automation (will be deprecated and replaced by Projects API in the future)
 * @module endpoints/Jobs
 *
 * The Jobs API provides legacy endpoints for project management, product creation,
 * imposition, and workflow automation. This API is maintained for backward compatibility
 * but new integrations should use the Projects API instead.
 */

import { BaseClient } from "../client/Base";
import { ApiResponse } from "../client/types";
import {
	PhoenixProject,
	CreateJobResource,
	OpenJobResource,
	EditProjectResource,
	ExportResource,
	ExportCoverSheetResource,
	ImportDieLayoutResource,
	ImportProductResource,
	ImportStockResource,
	ImportAssetResource,
	AutosnapArtworkEntity,
	ImageTracingResource,
	StepAndRepeatResource,
	RunReportsResource,
	RunRulesResource,
	PropertiesResource,
	ApplyDieLayoutResource,
	ApplyMarkResource,
	ApplyProfileResource,
	CadDieDesignResource,
	LayoutPresetsResource,
	ExpandBleedResource,
	ProcessLayoutResource,
	SaveDieDesignResource,
	SaveDieLayoutResource,
	SaveTemplateResource,
	SignatureAggregations,
	Product,
	Part,
	FlatPart,
	BoundPart,
	FoldedPart,
	TiledPart,
	Component,
	Page,
	Stock,
	Mark,
	DieDesign,
	DieLayout,
	Layout,
	SheetRegion,
	RollRegion,
	Thing,
	PlanResource,
	ResponseEntity,
} from "../types";

/**
 * Jobs API client class
 *
 * @description Provides methods for interacting with the legacy Jobs API.
 * This API will be deprecated in favor of the Projects API.
 */
export class Jobs extends BaseClient {
	// ============================================================================
	// PROJECT MANAGEMENT
	// ============================================================================

	/**
	 * Get a list of all projects
	 *
	 * @returns Promise resolving to array of Phoenix projects
	 * @description Retrieves all currently open projects in the system.
	 *
	 * @example
	 * ```typescript
	 * const projects = await client.jobs.getJobs();
	 * console.log(`Found ${projects.data.length} projects`);
	 * ```
	 *
	 * API Route: GET /jobs
	 */
	async getJobs(): Promise<ApiResponse<PhoenixProject[]>> {
		return this.get<PhoenixProject[]>("/jobs");
	}

	/**
	 * Create a new project
	 *
	 * @param body - Project creation parameters
	 * @returns Promise resolving to response entity with new project ID
	 * @description Creates a new Phoenix project with the specified properties.
	 *
	 * @example
	 * ```typescript
	 * const result = await client.jobs.createJob({
	 *   name: 'Business Cards',
	 *   customer: 'Acme Corp',
	 *   order: 'PO-12345'
	 * });
	 * ```
	 *
	 * API Route: POST /jobs
	 */
	async createJob(body: CreateJobResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/jobs", body);
	}

	/**
	 * Open existing project file
	 *
	 * @param body - Open project parameters including file path
	 * @returns Promise resolving to response entity with project ID
	 * @description Opens an existing Phoenix project file from the file system.
	 *
	 * @example
	 * ```typescript
	 * const result = await client.jobs.openJob({
	 *   path: '/path/to/project.phx',
	 *   'read-only': false
	 * });
	 * ```
	 *
	 * API Route: POST /jobs/open
	 */
	async openJob(body: OpenJobResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/jobs/open", body);
	}

	/**
	 * Get specific project by ID
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to project details
	 * @description Retrieves detailed information about a specific project.
	 *
	 * @example
	 * ```typescript
	 * const project = await client.jobs.getJob('abc-123');
	 * console.log(project.data.name);
	 * ```
	 *
	 * API Route: GET /jobs/{jobid}
	 */
	async getJob(jobid: string): Promise<ApiResponse<PhoenixProject>> {
		return this.get<PhoenixProject>(`/jobs/${jobid}`);
	}

	/**
	 * Close/delete a project
	 *
	 * @param jobid - Project ID to close
	 * @returns Promise resolving to response entity
	 * @description Closes the project and releases associated resources.
	 *
	 * @example
	 * ```typescript
	 * await client.jobs.deleteJob('abc-123');
	 * ```
	 *
	 * API Route: DELETE /jobs/{jobid}
	 */
	async deleteJob(jobid: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/jobs/${jobid}`);
	}

	/**
	 * Edit project properties
	 *
	 * @param jobid - Project ID
	 * @param body - Updated project properties
	 * @returns Promise resolving to response entity
	 * @description Updates project-level properties such as name, customer, due date, etc.
	 *
	 * @example
	 * ```typescript
	 * await client.jobs.editProject('abc-123', {
	 *   customer: 'New Customer Name',
	 *   due: '2025-12-31T23:59:59Z'
	 * });
	 * ```
	 *
	 * API Route: PATCH /jobs/{jobid}
	 */
	async editProject(jobid: string, body: EditProjectResource): Promise<ApiResponse<ResponseEntity>> {
		return this.patch<ResponseEntity>(`/jobs/${jobid}`, body);
	}

	// ============================================================================
	// EXPORT AND REPORTING
	// ============================================================================

	/**
	 * Export JSON report
	 *
	 * @param jobid - Project ID
	 * @param body - Export parameters including output path and preset
	 * @returns Promise resolving to response entity
	 * @description Exports project data as a JSON report file.
	 *
	 * API Route: POST /jobs/{jobid}/export/json
	 */
	async exportJsonReport(jobid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/export/json`, body);
	}

	/**
	 * Export PDF report
	 *
	 * @param jobid - Project ID
	 * @param body - Export parameters including output path and preset
	 * @returns Promise resolving to response entity
	 * @description Exports project data as a PDF report document.
	 *
	 * API Route: POST /jobs/{jobid}/export/pdf
	 */
	async exportPdfReport(jobid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/export/pdf`, body);
	}

	/**
	 * Export cover sheet
	 *
	 * @param jobid - Project ID
	 * @param body - Cover sheet export parameters
	 * @returns Promise resolving to response entity
	 * @description Exports a cover sheet/job ticket for the project.
	 *
	 * API Route: POST /jobs/{jobid}/export/cover-sheet
	 */
	async exportCoverSheet(jobid: string, body: ExportCoverSheetResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/export/cover-sheet`, body);
	}

	// ============================================================================
	// IMPORT OPERATIONS
	// ============================================================================

	/**
	 * Import die layout from ARD file
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports a die layout from an ARD (ArtiosCAD) file.
	 *
	 * API Route: POST /jobs/{jobid}/import/die/ard
	 */
	async importDieLayoutArd(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/ard`, body);
	}

	/**
	 * Import product from XML file
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports product definitions from an XML file.
	 *
	 * API Route: POST /jobs/{jobid}/import/product/xml
	 */
	async importProductXml(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/xml`, body);
	}

	/**
	 * Import product from CSV file
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports product definitions from a CSV file.
	 *
	 * API Route: POST /jobs/{jobid}/import/product/csv
	 */
	async importProductCsv(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/csv`, body);
	}

	/**
	 * Import product from CXF file
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports product definitions from a CXF (JDF) file.
	 *
	 * API Route: POST /jobs/{jobid}/import/product/cxf
	 */
	async importProductCxf(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/cxf`, body);
	}

	/**
	 * Import product from MIS
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports product definitions from an MIS system file.
	 *
	 * API Route: POST /jobs/{jobid}/import/product/mis
	 */
	async importProductMis(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/mis`, body);
	}

	/**
	 * Import stock from CSV file
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports stock definitions from a CSV file.
	 *
	 * API Route: POST /jobs/{jobid}/import/stock/csv
	 */
	async importStockCsv(jobid: string, body: ImportStockResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/stock/csv`, body);
	}

	/**
	 * Import stock from XML file
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports stock definitions from an XML file.
	 *
	 * API Route: POST /jobs/{jobid}/import/stock/xml
	 */
	async importStockXml(jobid: string, body: ImportStockResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/stock/xml`, body);
	}

	/**
	 * Import asset
	 *
	 * @param jobid - Project ID
	 * @param body - Import parameters including file path
	 * @returns Promise resolving to response entity
	 * @description Imports an asset (artwork, template, etc.) into the project.
	 *
	 * API Route: POST /jobs/{jobid}/import/asset
	 */
	async importAsset(jobid: string, body: ImportAssetResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/import/asset`, body);
	}

	// ============================================================================
	// IMPOSITION AND LAYOUT OPERATIONS
	// ============================================================================

	/**
	 * Autosnap artwork to die
	 *
	 * @param jobid - Project ID
	 * @param body - Autosnap parameters
	 * @returns Promise resolving to response entity
	 * @description Automatically snaps artwork to die cut lines.
	 *
	 * API Route: POST /jobs/{jobid}/autosnap-artwork
	 */
	async autosnapArtwork(jobid: string, body: AutosnapArtworkEntity): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/autosnap-artwork`, body);
	}

	/**
	 * Trace image to create die design
	 *
	 * @param jobid - Project ID
	 * @param body - Image tracing parameters
	 * @returns Promise resolving to response entity
	 * @description Traces artwork to automatically generate a die design.
	 *
	 * API Route: POST /jobs/{jobid}/image-tracing
	 */
	async imageTracing(jobid: string, body: ImageTracingResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/image-tracing`, body);
	}

	/**
	 * Apply step and repeat layout
	 *
	 * @param jobid - Project ID
	 * @param body - Step and repeat parameters
	 * @returns Promise resolving to response entity
	 * @description Creates a step and repeat layout pattern.
	 *
	 * API Route: POST /jobs/{jobid}/step-and-repeat
	 */
	async stepAndRepeat(jobid: string, body: StepAndRepeatResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/step-and-repeat`, body);
	}

	/**
	 * Run reports on project
	 *
	 * @param jobid - Project ID
	 * @param body - Report execution parameters
	 * @returns Promise resolving to response entity
	 * @description Executes specified reports on the project.
	 *
	 * API Route: POST /jobs/{jobid}/run-reports
	 */
	async runReports(jobid: string, body: RunReportsResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/run-reports`, body);
	}

	/**
	 * Run validation rules
	 *
	 * @param jobid - Project ID
	 * @param body - Rules execution parameters
	 * @returns Promise resolving to response entity
	 * @description Executes validation rules against the project.
	 *
	 * API Route: POST /jobs/{jobid}/run-rules
	 */
	async runRules(jobid: string, body: RunRulesResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/run-rules`, body);
	}

	/**
	 * Set custom properties on project
	 *
	 * @param jobid - Project ID
	 * @param body - Properties to set
	 * @returns Promise resolving to response entity
	 * @description Sets custom property values on the project.
	 *
	 * API Route: POST /jobs/{jobid}/properties
	 */
	async setCustomProperties(jobid: string, body: PropertiesResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/properties`, body);
	}

	/**
	 * Apply die layout to project
	 *
	 * @param jobid - Project ID
	 * @param body - Die layout application parameters
	 * @returns Promise resolving to response entity
	 * @description Applies a library die layout to the project.
	 *
	 * API Route: POST /jobs/{jobid}/apply-die-layout
	 */
	async applyDieLayout(jobid: string, body: ApplyDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/apply-die-layout`, body);
	}

	/**
	 * Apply mark to layout
	 *
	 * @param jobid - Project ID
	 * @param body - Mark application parameters
	 * @returns Promise resolving to response entity
	 * @description Applies a library mark (registration, trim, etc.) to layouts.
	 *
	 * API Route: POST /jobs/{jobid}/apply-mark
	 */
	async applyMark(jobid: string, body: ApplyMarkResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/apply-mark`, body);
	}

	/**
	 * Apply profile to project
	 *
	 * @param jobid - Project ID
	 * @param body - Profile application parameters
	 * @returns Promise resolving to response entity
	 * @description Applies a profile preset to configure project settings.
	 *
	 * API Route: POST /jobs/{jobid}/apply-profile
	 */
	async applyProfile(jobid: string, body: ApplyProfileResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/apply-profile`, body);
	}

	/**
	 * Create die design from CAD file
	 *
	 * @param jobid - Project ID
	 * @param body - CAD die design parameters
	 * @returns Promise resolving to response entity
	 * @description Imports a die design from a CAD file.
	 *
	 * API Route: POST /jobs/{jobid}/cad-die-design
	 */
	async cadDieDesign(jobid: string, body: CadDieDesignResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/cad-die-design`, body);
	}

	/**
	 * Apply layout presets
	 *
	 * @param jobid - Project ID
	 * @param body - Layout preset parameters
	 * @returns Promise resolving to response entity
	 * @description Applies predefined layout presets to the project.
	 *
	 * API Route: POST /jobs/{jobid}/layout-presets
	 */
	async layoutPresets(jobid: string, body: LayoutPresetsResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/layout-presets`, body);
	}

	/**
	 * Expand bleed on components
	 *
	 * @param jobid - Project ID
	 * @param body - Bleed expansion parameters
	 * @returns Promise resolving to response entity
	 * @description Expands the bleed area on product components.
	 *
	 * API Route: POST /jobs/{jobid}/expand-bleed
	 */
	async expandBleed(jobid: string, body: ExpandBleedResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/expand-bleed`, body);
	}

	/**
	 * Process/update layout
	 *
	 * @param jobid - Project ID
	 * @param body - Layout processing parameters
	 * @returns Promise resolving to response entity
	 * @description Processes or regenerates project layouts.
	 *
	 * API Route: POST /jobs/{jobid}/process-layout
	 */
	async processLayout(jobid: string, body: ProcessLayoutResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/process-layout`, body);
	}

	/**
	 * Save die design to library
	 *
	 * @param jobid - Project ID
	 * @param body - Save parameters including output path
	 * @returns Promise resolving to response entity
	 * @description Saves the current die design to a file or library.
	 *
	 * API Route: POST /jobs/{jobid}/save-die-design
	 */
	async saveDieDesign(jobid: string, body: SaveDieDesignResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/save-die-design`, body);
	}

	/**
	 * Save die layout to library
	 *
	 * @param jobid - Project ID
	 * @param body - Save parameters including output path
	 * @returns Promise resolving to response entity
	 * @description Saves the current die layout to a file or library.
	 *
	 * API Route: POST /jobs/{jobid}/save-die-layout
	 */
	async saveDieLayout(jobid: string, body: SaveDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/save-die-layout`, body);
	}

	/**
	 * Save template to library
	 *
	 * @param jobid - Project ID
	 * @param body - Save parameters including output path
	 * @returns Promise resolving to response entity
	 * @description Saves the current configuration as a template.
	 *
	 * API Route: POST /jobs/{jobid}/save-template
	 */
	async saveTemplate(jobid: string, body: SaveTemplateResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/save-template`, body);
	}

	// ============================================================================
	// PRODUCT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of products in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of products
	 * @description Retrieves all products defined in the project.
	 *
	 * API Route: GET /jobs/{jobid}/products
	 */
	async getProducts(jobid: string): Promise<ApiResponse<Product[]>> {
		return this.get<Product[]>(`/jobs/${jobid}/products`);
	}

	/**
	 * Get specific product by name
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to product details
	 * @description Retrieves detailed information about a specific product.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}
	 */
	async getProduct(jobid: string, productname: string): Promise<ApiResponse<Product>> {
		return this.get<Product>(`/jobs/${jobid}/products/${productname}`);
	}

	/**
	 * Delete product from project
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name to delete
	 * @returns Promise resolving to response entity
	 * @description Removes a product from the project.
	 *
	 * API Route: DELETE /jobs/{jobid}/products/{productname}
	 */
	async deleteProduct(jobid: string, productname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/jobs/${jobid}/products/${productname}`);
	}

	// ============================================================================
	// PART MANAGEMENT
	// ============================================================================

	/**
	 * Get list of parts for a product
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to array of parts
	 * @description Retrieves all parts (flat, bound, folded, tiled) for a product.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/parts
	 */
	async getParts(jobid: string, productname: string): Promise<ApiResponse<Part[]>> {
		return this.get<Part[]>(`/jobs/${jobid}/products/${productname}/parts`);
	}

	/**
	 * Get specific part by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to part details
	 * @description Retrieves a specific part from a product.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/parts/{partindex}
	 */
	async getPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<Part>> {
		return this.get<Part>(`/jobs/${jobid}/products/${productname}/parts/${partindex}`);
	}

	/**
	 * Get flat part by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to flat part details
	 * @description Retrieves a flat part (labels, business cards, etc.).
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/flat-parts/{partindex}
	 */
	async getFlatPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<FlatPart>> {
		return this.get<FlatPart>(`/jobs/${jobid}/products/${productname}/flat-parts/${partindex}`);
	}

	/**
	 * Get bound part by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to bound part details
	 * @description Retrieves a bound part (books, booklets, etc.).
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/bound-parts/{partindex}
	 */
	async getBoundPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<BoundPart>> {
		return this.get<BoundPart>(`/jobs/${jobid}/products/${productname}/bound-parts/${partindex}`);
	}

	/**
	 * Get folded part by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to folded part details
	 * @description Retrieves a folded part (brochures, folded cards, etc.).
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/folded-parts/{partindex}
	 */
	async getFoldedPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<FoldedPart>> {
		return this.get<FoldedPart>(`/jobs/${jobid}/products/${productname}/folded-parts/${partindex}`);
	}

	/**
	 * Get tiled part by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to tiled part details
	 * @description Retrieves a tiled part (large format panels, etc.).
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/tiled-parts/{partindex}
	 */
	async getTiledPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<TiledPart>> {
		return this.get<TiledPart>(`/jobs/${jobid}/products/${productname}/tiled-parts/${partindex}`);
	}

	// ============================================================================
	// COMPONENT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of components for a part
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of components
	 * @description Retrieves all components (flats, signatures, tiles) for a part.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/parts/{partindex}/components
	 */
	async getComponents(jobid: string, productname: string, partindex: number): Promise<ApiResponse<Component[]>> {
		return this.get<Component[]>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/components`);
	}

	/**
	 * Get specific component by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param componentindex - Component index (0-based)
	 * @returns Promise resolving to component details
	 * @description Retrieves a specific component from a part.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/parts/{partindex}/components/{componentindex}
	 */
	async getComponent(jobid: string, productname: string, partindex: number, componentindex: number): Promise<ApiResponse<Component>> {
		return this.get<Component>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/components/${componentindex}`);
	}

	// ============================================================================
	// PAGE MANAGEMENT
	// ============================================================================

	/**
	 * Get list of pages for a part
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of pages
	 * @description Retrieves all pages/surfaces for a part.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/parts/{partindex}/pages
	 */
	async getPages(jobid: string, productname: string, partindex: number): Promise<ApiResponse<Page[]>> {
		return this.get<Page[]>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/pages`);
	}

	/**
	 * Get specific page by index
	 *
	 * @param jobid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param pageindex - Page index (0-based)
	 * @returns Promise resolving to page details
	 * @description Retrieves a specific page/surface from a part.
	 *
	 * API Route: GET /jobs/{jobid}/products/{productname}/parts/{partindex}/pages/{pageindex}
	 */
	async getPage(jobid: string, productname: string, partindex: number, pageindex: number): Promise<ApiResponse<Page>> {
		return this.get<Page>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/pages/${pageindex}`);
	}

	// ============================================================================
	// LAYOUT AND SIGNATURE MANAGEMENT
	// ============================================================================

	/**
	 * Get signature aggregations for a layout
	 *
	 * @param jobid - Project ID
	 * @param layoutname - Layout name
	 * @returns Promise resolving to array of signature aggregations
	 * @description Retrieves aggregated signature information for a layout.
	 *
	 * API Route: GET /jobs/{jobid}/layouts/{layoutname}/signature-aggregations
	 */
	async getSignatureAggregations(jobid: string, layoutname: string): Promise<ApiResponse<SignatureAggregations[]>> {
		return this.get<SignatureAggregations[]>(`/jobs/${jobid}/layouts/${layoutname}/signature-aggregations`);
	}

	// ============================================================================
	// STOCK MANAGEMENT
	// ============================================================================

	/**
	 * Get list of stocks in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of stocks
	 * @description Retrieves all stocks (sheet and roll) used in the project.
	 *
	 * API Route: GET /jobs/{jobid}/stocks
	 */
	async getStocks(jobid: string): Promise<ApiResponse<Stock[]>> {
		return this.get<Stock[]>(`/jobs/${jobid}/stocks`);
	}

	/**
	 * Get specific stock by name
	 *
	 * @param jobid - Project ID
	 * @param stockname - Stock name
	 * @returns Promise resolving to stock details
	 * @description Retrieves detailed information about a specific stock.
	 *
	 * API Route: GET /jobs/{jobid}/stocks/{stockname}
	 */
	async getStock(jobid: string, stockname: string): Promise<ApiResponse<Stock>> {
		return this.get<Stock>(`/jobs/${jobid}/stocks/${stockname}`);
	}

	// ============================================================================
	// MARK MANAGEMENT
	// ============================================================================

	/**
	 * Get list of marks in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of marks
	 * @description Retrieves all marks (registration, crop, fold, etc.) in the project.
	 *
	 * API Route: GET /jobs/{jobid}/marks
	 */
	async getMarks(jobid: string): Promise<ApiResponse<Mark[]>> {
		return this.get<Mark[]>(`/jobs/${jobid}/marks`);
	}

	/**
	 * Get specific mark by name
	 *
	 * @param jobid - Project ID
	 * @param markname - Mark name
	 * @returns Promise resolving to mark details
	 * @description Retrieves detailed information about a specific mark.
	 *
	 * API Route: GET /jobs/{jobid}/marks/{markname}
	 */
	async getMark(jobid: string, markname: string): Promise<ApiResponse<Mark>> {
		return this.get<Mark>(`/jobs/${jobid}/marks/${markname}`);
	}

	// ============================================================================
	// DIE DESIGN MANAGEMENT
	// ============================================================================

	/**
	 * Get list of die designs in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of die designs
	 * @description Retrieves all die designs in the project.
	 *
	 * API Route: GET /jobs/{jobid}/die-designs
	 */
	async getDieDesigns(jobid: string): Promise<ApiResponse<DieDesign[]>> {
		return this.get<DieDesign[]>(`/jobs/${jobid}/die-designs`);
	}

	/**
	 * Get specific die design by name
	 *
	 * @param jobid - Project ID
	 * @param diedesignname - Die design name
	 * @returns Promise resolving to die design details
	 * @description Retrieves detailed information about a specific die design.
	 *
	 * API Route: GET /jobs/{jobid}/die-designs/{diedesignname}
	 */
	async getDieDesign(jobid: string, diedesignname: string): Promise<ApiResponse<DieDesign>> {
		return this.get<DieDesign>(`/jobs/${jobid}/die-designs/${diedesignname}`);
	}

	// ============================================================================
	// DIE LAYOUT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of die layouts in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of die layouts
	 * @description Retrieves all die layouts in the project.
	 *
	 * API Route: GET /jobs/{jobid}/die-layouts
	 */
	async getDieLayouts(jobid: string): Promise<ApiResponse<DieLayout[]>> {
		return this.get<DieLayout[]>(`/jobs/${jobid}/die-layouts`);
	}

	/**
	 * Get specific die layout by name
	 *
	 * @param jobid - Project ID
	 * @param dielayoutname - Die layout name
	 * @returns Promise resolving to die layout details
	 * @description Retrieves detailed information about a specific die layout.
	 *
	 * API Route: GET /jobs/{jobid}/die-layouts/{dielayoutname}
	 */
	async getDieLayout(jobid: string, dielayoutname: string): Promise<ApiResponse<DieLayout>> {
		return this.get<DieLayout>(`/jobs/{jobid}/die-layouts/${dielayoutname}`);
	}

	// ============================================================================
	// LAYOUT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of all layouts in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of layouts
	 * @description Retrieves all layouts (sheet and roll) in the project.
	 *
	 * API Route: GET /jobs/{jobid}/layouts
	 */
	async getLayouts(jobid: string): Promise<ApiResponse<Layout[]>> {
		return this.get<Layout[]>(`/jobs/${jobid}/layouts`);
	}

	/**
	 * Get specific layout by name
	 *
	 * @param jobid - Project ID
	 * @param layoutname - Layout name
	 * @returns Promise resolving to layout details
	 * @description Retrieves detailed information about a specific layout.
	 *
	 * API Route: GET /jobs/{jobid}/layouts/{layoutname}
	 */
	async getLayout(jobid: string, layoutname: string): Promise<ApiResponse<Layout>> {
		return this.get<Layout>(`/jobs/${jobid}/layouts/${layoutname}`);
	}

	/**
	 * Get sheet layout by name
	 *
	 * @param jobid - Project ID
	 * @param layoutname - Layout name
	 * @returns Promise resolving to sheet layout details
	 * @description Retrieves a specific sheet-based layout.
	 *
	 * API Route: GET /jobs/{jobid}/sheet-layouts/{layoutname}
	 */
	async getSheetLayout(jobid: string, layoutname: string): Promise<ApiResponse<Layout>> {
		return this.get<Layout>(`/jobs/${jobid}/sheet-layouts/${layoutname}`);
	}

	/**
	 * Get roll layout by name
	 *
	 * @param jobid - Project ID
	 * @param layoutname - Layout name
	 * @returns Promise resolving to roll layout details
	 * @description Retrieves a specific roll-based layout.
	 *
	 * API Route: GET /jobs/{jobid}/roll-layouts/{layoutname}
	 */
	async getRollLayout(jobid: string, layoutname: string): Promise<ApiResponse<Layout>> {
		return this.get<Layout>(`/jobs/${jobid}/roll-layouts/${layoutname}`);
	}

	/**
	 * Get sheet regions for a layout
	 *
	 * @param jobid - Project ID
	 * @param layoutname - Layout name
	 * @returns Promise resolving to array of sheet regions
	 * @description Retrieves all regions/sections in a sheet layout.
	 *
	 * API Route: GET /jobs/{jobid}/sheet-layouts/{layoutname}/regions
	 */
	async getSheetRegions(jobid: string, layoutname: string): Promise<ApiResponse<SheetRegion[]>> {
		return this.get<SheetRegion[]>(`/jobs/${jobid}/sheet-layouts/${layoutname}/regions`);
	}

	/**
	 * Get roll regions for a layout
	 *
	 * @param jobid - Project ID
	 * @param layoutname - Layout name
	 * @returns Promise resolving to array of roll regions
	 * @description Retrieves all regions/sections in a roll layout.
	 *
	 * API Route: GET /jobs/{jobid}/roll-layouts/{layoutname}/regions
	 */
	async getRollRegions(jobid: string, layoutname: string): Promise<ApiResponse<RollRegion[]>> {
		return this.get<RollRegion[]>(`/jobs/${jobid}/roll-layouts/${layoutname}/regions`);
	}

	// ============================================================================
	// EQUIPMENT/THING MANAGEMENT
	// ============================================================================

	/**
	 * Get list of equipment/things in project
	 *
	 * @param jobid - Project ID
	 * @returns Promise resolving to array of things
	 * @description Retrieves all equipment (presses, cutters, folders, etc.) assigned to the project.
	 *
	 * API Route: GET /jobs/{jobid}/things
	 */
	async getThings(jobid: string): Promise<ApiResponse<Thing[]>> {
		return this.get<Thing[]>(`/jobs/${jobid}/things`);
	}

	/**
	 * Get specific equipment/thing by name
	 *
	 * @param jobid - Project ID
	 * @param thingname - Equipment name
	 * @returns Promise resolving to equipment details
	 * @description Retrieves detailed information about a specific piece of equipment.
	 *
	 * API Route: GET /jobs/{jobid}/things/{thingname}
	 */
	async getThing(jobid: string, thingname: string): Promise<ApiResponse<Thing>> {
		return this.get<Thing>(`/jobs/${jobid}/things/${thingname}`);
	}

	// ============================================================================
	// PLANNING AND OPTIMIZATION
	// ============================================================================

	/**
	 * Run planning/optimization for equipment
	 *
	 * @param jobid - Project ID
	 * @param thingname - Equipment name to plan for
	 * @param body - Planning parameters and constraints
	 * @returns Promise resolving to response entity
	 * @description Runs optimization to create efficient layouts for the specified equipment.
	 *
	 * @example
	 * ```typescript
	 * await client.jobs.plan('abc-123', 'Press-1', {
	 *   profile: 'Standard',
	 *   quantity: 10000,
	 *   constraints: {
	 *     'max-sheets': 1000,
	 *     'max-waste-percent': 10
	 *   }
	 * });
	 * ```
	 *
	 * API Route: POST /jobs/{jobid}/things/{thingname}/plan
	 */
	async plan(jobid: string, thingname: string, body: PlanResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/jobs/${jobid}/things/${thingname}/plan`, body);
	}
}
