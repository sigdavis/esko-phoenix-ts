/**
 * Projects API Endpoints
 *
 * @description Project automation (new unified API)
 * @module endpoints/Projects
 *
 * The Projects API is the modern, unified API for project management, product creation,
 * and workflow automation. It supersedes the legacy Jobs API and provides a cleaner,
 * more consistent interface.
 */

import { BaseClient } from "../client/Base";
import { ApiResponse } from "../client/types";
import {
	PhoenixProject,
	CreateProjectResource,
	OpenProjectResource,
	EditProjectResource,
	ExportResource,
	PropertiesResource,
	ApplyDieLayoutResource,
	ApplyMarkResource,
	Product,
	Part,
	FlatPart,
	BoundPart,
	FoldedPart,
	TiledPart,
	Component,
	Flat,
	BoundSignature,
	FoldedSignature,
	Tile,
	Page,
	Stock,
	Mark,
	DieDesign,
	DieLayout,
	Layout,
	Thing,
	PlanResource,
	EditProductResource,
	EditPartResource,
	EditComponentResource,
	ResponseEntity,
} from "../types";

/**
 * Projects API client class
 *
 * @description Provides methods for interacting with the modern Projects API.
 * This is the recommended API for new integrations.
 */
export class Projects extends BaseClient {
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
	 * const projects = await client.projects.getProjects();
	 * console.log(`Found ${projects.data.length} projects`);
	 * ```
	 *
	 * API Route: GET /projects
	 */
	async getProjects(): Promise<ApiResponse<PhoenixProject[]>> {
		return this.get<PhoenixProject[]>("/projects");
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
	 * const result = await client.projects.createProject({
	 *   name: 'Magazine Q4 2025',
	 *   customer: 'Publisher Inc',
	 *   order: 'ORD-2025-1234'
	 * });
	 * ```
	 *
	 * API Route: POST /projects
	 */
	async createProject(body: CreateProjectResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/projects", body);
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
	 * const result = await client.projects.openProject({
	 *   path: '/projects/magazine_q4.phx',
	 *   'read-only': false
	 * });
	 * ```
	 *
	 * API Route: POST /projects/open
	 */
	async openProject(body: OpenProjectResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/projects/open", body);
	}

	// ============================================================================
	// PRODUCT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of products in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of products
	 * @description Retrieves all products defined in the project.
	 *
	 * @example
	 * ```typescript
	 * const products = await client.projects.getProducts('proj-456');
	 * products.data.forEach(p => console.log(p.name));
	 * ```
	 *
	 * API Route: GET /projects/{projectid}/products
	 */
	async getProducts(projectid: string): Promise<ApiResponse<Product[]>> {
		return this.get<Product[]>(`/projects/${projectid}/products`);
	}

	/**
	 * Get specific product by name
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to product details
	 * @description Retrieves detailed information about a specific product.
	 *
	 * @example
	 * ```typescript
	 * const product = await client.projects.getProduct('proj-456', 'Business Cards');
	 * console.log(`Quantity: ${product.data.quantity}`);
	 * ```
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}
	 */
	async getProduct(projectid: string, productname: string): Promise<ApiResponse<Product>> {
		return this.get<Product>(`/projects/${projectid}/products/${productname}`);
	}

	/**
	 * Edit product properties
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param body - Updated product properties
	 * @returns Promise resolving to response entity
	 * @description Updates properties of an existing product.
	 *
	 * @example
	 * ```typescript
	 * await client.projects.editProduct('proj-456', 'Business Cards', {
	 *   quantity: 5000,
	 *   priority: 1,
	 *   'due-date': '2025-11-30T17:00:00Z'
	 * });
	 * ```
	 *
	 * API Route: PATCH /projects/{projectid}/products/{productname}
	 */
	async editProduct(projectid: string, productname: string, body: EditProductResource): Promise<ApiResponse<ResponseEntity>> {
		return this.patch<ResponseEntity>(`/projects/${projectid}/products/${productname}`, body);
	}

	// ============================================================================
	// PART MANAGEMENT
	// ============================================================================

	/**
	 * Get list of parts for a product
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to array of parts
	 * @description Retrieves all parts (flat, bound, folded, tiled) for a product.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/parts
	 */
	async getParts(projectid: string, productname: string): Promise<ApiResponse<Part[]>> {
		return this.get<Part[]>(`/projects/${projectid}/products/${productname}/parts`);
	}

	/**
	 * Get specific part by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to part details
	 * @description Retrieves a specific part from a product.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/parts/{partindex}
	 */
	async getPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Part>> {
		return this.get<Part>(`/projects/${projectid}/products/${productname}/parts/${partindex}`);
	}

	/**
	 * Edit part properties
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param body - Updated part properties
	 * @returns Promise resolving to response entity
	 * @description Updates properties of an existing part.
	 *
	 * @example
	 * ```typescript
	 * await client.projects.editPart('proj-456', 'Brochure', 0, {
	 *   grain: 'Horizontal',
	 *   bleed: { top: { value: 3, unit: 'mm' }, ... }
	 * });
	 * ```
	 *
	 * API Route: PATCH /projects/{projectid}/products/{productname}/parts/{partindex}
	 */
	async editPart(projectid: string, productname: string, partindex: number, body: EditPartResource): Promise<ApiResponse<ResponseEntity>> {
		return this.patch<ResponseEntity>(`/projects/${projectid}/products/${productname}/parts/${partindex}`, body);
	}

	// ============================================================================
	// FLAT PART MANAGEMENT
	// ============================================================================

	/**
	 * Get list of flat parts for a product
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to array of flat parts
	 * @description Retrieves all flat parts (labels, business cards, etc.) for a product.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/flat-parts
	 */
	async getFlatParts(projectid: string, productname: string): Promise<ApiResponse<FlatPart[]>> {
		return this.get<FlatPart[]>(`/projects/${projectid}/products/${productname}/flat-parts`);
	}

	/**
	 * Get flat part by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to flat part details
	 * @description Retrieves a specific flat part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/flat-parts/{partindex}
	 */
	async getFlatPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<FlatPart>> {
		return this.get<FlatPart>(`/projects/${projectid}/products/${productname}/flat-parts/${partindex}`);
	}

	/**
	 * Get list of flats (imposed components) for a flat part
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of flats
	 * @description Retrieves all flat components (impositioning units) for a flat part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/flat-parts/{partindex}/flats
	 */
	async getFlats(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Flat[]>> {
		return this.get<Flat[]>(`/projects/${projectid}/products/${productname}/flat-parts/${partindex}/flats`);
	}

	/**
	 * Get specific flat component by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param flatindex - Flat index (0-based)
	 * @returns Promise resolving to flat component details
	 * @description Retrieves a specific flat component.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/flat-parts/{partindex}/flats/{flatindex}
	 */
	async getFlat(projectid: string, productname: string, partindex: number, flatindex: number): Promise<ApiResponse<Flat>> {
		return this.get<Flat>(`/projects/${projectid}/products/${productname}/flat-parts/${partindex}/flats/${flatindex}`);
	}

	// ============================================================================
	// BOUND PART MANAGEMENT
	// ============================================================================

	/**
	 * Get list of bound parts for a product
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to array of bound parts
	 * @description Retrieves all bound parts (books, booklets, catalogs) for a product.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/bound-parts
	 */
	async getBoundParts(projectid: string, productname: string): Promise<ApiResponse<BoundPart[]>> {
		return this.get<BoundPart[]>(`/projects/${projectid}/products/${productname}/bound-parts`);
	}

	/**
	 * Get bound part by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to bound part details
	 * @description Retrieves a specific bound part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/bound-parts/{partindex}
	 */
	async getBoundPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<BoundPart>> {
		return this.get<BoundPart>(`/projects/${projectid}/products/${productname}/bound-parts/${partindex}`);
	}

	/**
	 * Get list of bound signatures for a bound part
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of bound signatures
	 * @description Retrieves all signatures (folded sections) in a bound part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/bound-parts/{partindex}/signatures
	 */
	async getBoundSignatures(projectid: string, productname: string, partindex: number): Promise<ApiResponse<BoundSignature[]>> {
		return this.get<BoundSignature[]>(`/projects/${projectid}/products/${productname}/bound-parts/${partindex}/signatures`);
	}

	/**
	 * Get specific bound signature by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param signatureindex - Signature index (0-based)
	 * @returns Promise resolving to bound signature details
	 * @description Retrieves a specific signature from a bound part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/bound-parts/{partindex}/signatures/{signatureindex}
	 */
	async getBoundSignature(projectid: string, productname: string, partindex: number, signatureindex: number): Promise<ApiResponse<BoundSignature>> {
		return this.get<BoundSignature>(`/projects/${projectid}/products/${productname}/bound-parts/${partindex}/signatures/${signatureindex}`);
	}

	// ============================================================================
	// FOLDED PART MANAGEMENT
	// ============================================================================

	/**
	 * Get list of folded parts for a product
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to array of folded parts
	 * @description Retrieves all folded parts (brochures, folded cards) for a product.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/folded-parts
	 */
	async getFoldedParts(projectid: string, productname: string): Promise<ApiResponse<FoldedPart[]>> {
		return this.get<FoldedPart[]>(`/projects/${projectid}/products/${productname}/folded-parts`);
	}

	/**
	 * Get folded part by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to folded part details
	 * @description Retrieves a specific folded part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/folded-parts/{partindex}
	 */
	async getFoldedPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<FoldedPart>> {
		return this.get<FoldedPart>(`/projects/${projectid}/products/${productname}/folded-parts/${partindex}`);
	}

	/**
	 * Get list of folded signatures for a folded part
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of folded signatures
	 * @description Retrieves all signatures (folding units) in a folded part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/folded-parts/{partindex}/signatures
	 */
	async getFoldedSignatures(projectid: string, productname: string, partindex: number): Promise<ApiResponse<FoldedSignature[]>> {
		return this.get<FoldedSignature[]>(`/projects/${projectid}/products/${productname}/folded-parts/${partindex}/signatures`);
	}

	/**
	 * Get specific folded signature by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param signatureindex - Signature index (0-based)
	 * @returns Promise resolving to folded signature details
	 * @description Retrieves a specific signature from a folded part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/folded-parts/{partindex}/signatures/{signatureindex}
	 */
	async getFoldedSignature(
		projectid: string,
		productname: string,
		partindex: number,
		signatureindex: number
	): Promise<ApiResponse<FoldedSignature>> {
		return this.get<FoldedSignature>(`/projects/${projectid}/products/${productname}/folded-parts/${partindex}/signatures/${signatureindex}`);
	}

	// ============================================================================
	// TILED PART MANAGEMENT
	// ============================================================================

	/**
	 * Get list of tiled parts for a product
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @returns Promise resolving to array of tiled parts
	 * @description Retrieves all tiled parts (large format panels) for a product.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/tiled-parts
	 */
	async getTiledParts(projectid: string, productname: string): Promise<ApiResponse<TiledPart[]>> {
		return this.get<TiledPart[]>(`/projects/${projectid}/products/${productname}/tiled-parts`);
	}

	/**
	 * Get tiled part by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to tiled part details
	 * @description Retrieves a specific tiled part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/tiled-parts/{partindex}
	 */
	async getTiledPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<TiledPart>> {
		return this.get<TiledPart>(`/projects/${projectid}/products/${productname}/tiled-parts/${partindex}`);
	}

	/**
	 * Get list of tiles for a tiled part
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of tiles
	 * @description Retrieves all tiles (panel sections) in a tiled part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/tiled-parts/{partindex}/tiles
	 */
	async getTiles(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Tile[]>> {
		return this.get<Tile[]>(`/projects/${projectid}/products/${productname}/tiled-parts/${partindex}/tiles`);
	}

	/**
	 * Get specific tile by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param tileindex - Tile index (0-based)
	 * @returns Promise resolving to tile details
	 * @description Retrieves a specific tile from a tiled part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/tiled-parts/{partindex}/tiles/{tileindex}
	 */
	async getTile(projectid: string, productname: string, partindex: number, tileindex: number): Promise<ApiResponse<Tile>> {
		return this.get<Tile>(`/projects/${projectid}/products/${productname}/tiled-parts/${partindex}/tiles/${tileindex}`);
	}

	// ============================================================================
	// COMPONENT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of components for a part
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of components
	 * @description Retrieves all components (flats, signatures, tiles) for a part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/parts/{partindex}/components
	 */
	async getComponents(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Component[]>> {
		return this.get<Component[]>(`/projects/${projectid}/products/${productname}/parts/${partindex}/components`);
	}

	/**
	 * Get specific component by index
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param componentindex - Component index (0-based)
	 * @returns Promise resolving to component details
	 * @description Retrieves a specific component from a part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/parts/{partindex}/components/{componentindex}
	 */
	async getComponent(projectid: string, productname: string, partindex: number, componentindex: number): Promise<ApiResponse<Component>> {
		return this.get<Component>(`/projects/${projectid}/products/${productname}/parts/${partindex}/components/${componentindex}`);
	}

	/**
	 * Edit component properties
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @param componentindex - Component index (0-based)
	 * @param body - Updated component properties
	 * @returns Promise resolving to response entity
	 * @description Updates properties of an existing component.
	 *
	 * @example
	 * ```typescript
	 * await client.projects.editComponent('proj-456', 'Labels', 0, 0, {
	 *   spacing: { horizontal: { value: 2, unit: 'mm' }, vertical: { value: 2, unit: 'mm' } },
	 *   bleed: { top: { value: 3, unit: 'mm' }, ... }
	 * });
	 * ```
	 *
	 * API Route: PATCH /projects/{projectid}/products/{productname}/parts/{partindex}/components/{componentindex}
	 */
	async editComponent(
		projectid: string,
		productname: string,
		partindex: number,
		componentindex: number,
		body: EditComponentResource
	): Promise<ApiResponse<ResponseEntity>> {
		return this.patch<ResponseEntity>(`/projects/${projectid}/products/${productname}/parts/${partindex}/components/${componentindex}`, body);
	}

	// ============================================================================
	// PAGE MANAGEMENT
	// ============================================================================

	/**
	 * Get list of pages for a part
	 *
	 * @param projectid - Project ID
	 * @param productname - Product name
	 * @param partindex - Part index (0-based)
	 * @returns Promise resolving to array of pages
	 * @description Retrieves all pages/surfaces for a part.
	 *
	 * API Route: GET /projects/{projectid}/products/{productname}/parts/{partindex}/pages
	 */
	async getPages(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Page[]>> {
		return this.get<Page[]>(`/projects/${projectid}/products/${productname}/parts/${partindex}/pages`);
	}

	// ============================================================================
	// STOCK MANAGEMENT
	// ============================================================================

	/**
	 * Get list of stocks in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of stocks
	 * @description Retrieves all stocks (sheet and roll) used in the project.
	 *
	 * API Route: GET /projects/{projectid}/stocks
	 */
	async getStocks(projectid: string): Promise<ApiResponse<Stock[]>> {
		return this.get<Stock[]>(`/projects/${projectid}/stocks`);
	}

	// ============================================================================
	// MARK MANAGEMENT
	// ============================================================================

	/**
	 * Get list of marks in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of marks
	 * @description Retrieves all marks (registration, crop, fold, etc.) in the project.
	 *
	 * API Route: GET /projects/{projectid}/marks
	 */
	async getMarks(projectid: string): Promise<ApiResponse<Mark[]>> {
		return this.get<Mark[]>(`/projects/${projectid}/marks`);
	}

	// ============================================================================
	// DIE DESIGN MANAGEMENT
	// ============================================================================

	/**
	 * Get list of die designs in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of die designs
	 * @description Retrieves all die designs in the project.
	 *
	 * API Route: GET /projects/{projectid}/die-designs
	 */
	async getDieDesigns(projectid: string): Promise<ApiResponse<DieDesign[]>> {
		return this.get<DieDesign[]>(`/projects/${projectid}/die-designs`);
	}

	// ============================================================================
	// DIE LAYOUT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of die layouts in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of die layouts
	 * @description Retrieves all die layouts in the project.
	 *
	 * API Route: GET /projects/{projectid}/die-layouts
	 */
	async getDieLayouts(projectid: string): Promise<ApiResponse<DieLayout[]>> {
		return this.get<DieLayout[]>(`/projects/${projectid}/die-layouts`);
	}

	// ============================================================================
	// LAYOUT MANAGEMENT
	// ============================================================================

	/**
	 * Get list of all layouts in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of layouts
	 * @description Retrieves all layouts (sheet and roll) in the project.
	 *
	 * API Route: GET /projects/{projectid}/layouts
	 */
	async getLayouts(projectid: string): Promise<ApiResponse<Layout[]>> {
		return this.get<Layout[]>(`/projects/${projectid}/layouts`);
	}

	// ============================================================================
	// EQUIPMENT/THING MANAGEMENT
	// ============================================================================

	/**
	 * Get list of equipment/things in project
	 *
	 * @param projectid - Project ID
	 * @returns Promise resolving to array of things
	 * @description Retrieves all equipment (presses, cutters, folders, etc.) assigned to the project.
	 *
	 * API Route: GET /projects/{projectid}/things
	 */
	async getThings(projectid: string): Promise<ApiResponse<Thing[]>> {
		return this.get<Thing[]>(`/projects/${projectid}/things`);
	}

	// ============================================================================
	// PLANNING AND OPTIMIZATION
	// ============================================================================

	/**
	 * Run planning/optimization for equipment
	 *
	 * @param projectid - Project ID
	 * @param thingname - Equipment name to plan for
	 * @param body - Planning parameters and constraints
	 * @returns Promise resolving to response entity
	 * @description Runs optimization to create efficient layouts for the specified equipment.
	 *
	 * @example
	 * ```typescript
	 * await client.projects.plan('proj-456', 'Press-1', {
	 *   profile: 'High Quality',
	 *   quantity: 25000,
	 *   constraints: {
	 *     'max-sheets': 2000,
	 *     'max-waste-percent': 8
	 *   }
	 * });
	 * ```
	 *
	 * API Route: POST /projects/{projectid}/things/{thingname}/plan
	 */
	async plan(projectid: string, thingname: string, body: PlanResource): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>(`/projects/${projectid}/things/${thingname}/plan`, body);
	}
}
