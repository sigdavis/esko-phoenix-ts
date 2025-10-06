/**
 * Libraries API endpoints
 * Manages all library resources including stocks, grades, coatings, profiles,
 * die designs, die layouts, marks, processes, machines, and equipment.
 */

import { BaseClient } from "../client/Base";
import { ApiResponse } from "../client/types";
import {
	Stock,
	Grade,
	Coating,
	Profile,
	DieDesign,
	DieLayout,
	Mark,
	Process,
	Machine,
	Screenruling,
	SpotColor,
	ToolType,
	Thing,
	ResponseEntity,
} from "../types";

/**
 * Libraries API client class
 * Provides methods to manage library resources in the Phoenix system.
 * All library resources are shared across projects and can be reused.
 */
export class Libraries extends BaseClient {
	// ============================================================================
	// STOCK MANAGEMENT
	// ============================================================================

	/**
	 * Get all stocks from the library
	 *
	 * @returns Promise resolving to array of all stocks (both sheet and roll)
	 * @description Retrieves all stock materials from the library, including both
	 * sheet and roll stocks with their dimensions, weights, and properties.
	 *
	 * API Route: GET /libraries/stocks
	 */
	async getStocks(): Promise<ApiResponse<Stock[]>> {
		return this.get<Stock[]>("/libraries/stocks");
	}

	/**
	 * Create a new stock in the library
	 *
	 * @param body - Stock object with name, dimensions, type, and properties
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new stock material to the library. Stock can be either
	 * sheet-based (fixed dimensions) or roll-based (continuous feed).
	 *
	 * API Route: POST /libraries/stocks
	 */
	async createStock(body: Stock): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/stocks", body);
	}

	/**
	 * Get a specific stock by name
	 *
	 * @param stockname - Name of the stock to retrieve
	 * @returns Promise resolving to stock details
	 * @description Retrieves detailed information about a specific stock material
	 * including dimensions, weight, grain direction, and associated properties.
	 *
	 * API Route: GET /libraries/stocks/{stockname}
	 */
	async getStock(stockname: string): Promise<ApiResponse<Stock>> {
		return this.get<Stock>(`/libraries/stocks/${stockname}`);
	}

	/**
	 * Delete a stock from the library
	 *
	 * @param stockname - Name of the stock to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a stock from the library. Stock must not be in use
	 * by any active projects to be deleted.
	 *
	 * API Route: DELETE /libraries/stocks/{stockname}
	 */
	async deleteStock(stockname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/stocks/${stockname}`);
	}

	/**
	 * Update an existing stock in the library
	 *
	 * @param stockname - Name of the stock to update
	 * @param body - Updated stock object with modified properties
	 * @returns Promise resolving to response entity with update status
	 * @description Updates properties of an existing stock material. Changes
	 * apply to future projects using this stock.
	 *
	 * API Route: PUT /libraries/stocks/{stockname}
	 */
	async updateStock(stockname: string, body: Stock): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/stocks/${stockname}`, body);
	}

	/**
	 * Get all sheet-type stocks
	 *
	 * @returns Promise resolving to array of sheet stocks
	 * @description Retrieves only sheet stocks (fixed dimension materials) from
	 * the library, excluding roll stocks.
	 *
	 * API Route: GET /libraries/sheet-stocks
	 */
	async getSheetStocks(): Promise<ApiResponse<Stock[]>> {
		return this.get<Stock[]>("/libraries/sheet-stocks");
	}

	/**
	 * Get a specific sheet stock by name
	 *
	 * @param stockname - Name of the sheet stock to retrieve
	 * @returns Promise resolving to sheet stock details
	 * @description Retrieves detailed information about a specific sheet stock
	 * material with fixed dimensions.
	 *
	 * API Route: GET /libraries/sheet-stocks/{stockname}
	 */
	async getSheetStock(stockname: string): Promise<ApiResponse<Stock>> {
		return this.get<Stock>(`/libraries/sheet-stocks/${stockname}`);
	}

	/**
	 * Get all roll-type stocks
	 *
	 * @returns Promise resolving to array of roll stocks
	 * @description Retrieves only roll stocks (continuous feed materials) from
	 * the library, excluding sheet stocks.
	 *
	 * API Route: GET /libraries/roll-stocks
	 */
	async getRollStocks(): Promise<ApiResponse<Stock[]>> {
		return this.get<Stock[]>("/libraries/roll-stocks");
	}

	/**
	 * Get a specific roll stock by name
	 *
	 * @param stockname - Name of the roll stock to retrieve
	 * @returns Promise resolving to roll stock details
	 * @description Retrieves detailed information about a specific roll stock
	 * material with continuous feed properties.
	 *
	 * API Route: GET /libraries/roll-stocks/{stockname}
	 */
	async getRollStock(stockname: string): Promise<ApiResponse<Stock>> {
		return this.get<Stock>(`/libraries/roll-stocks/${stockname}`);
	}

	// ============================================================================
	// GRADE MANAGEMENT
	// ============================================================================

	/**
	 * Get all grades from the library
	 *
	 * @returns Promise resolving to array of all grades
	 * @description Retrieves all paper/material grades from the library. Grades
	 * define quality levels and characteristics of materials.
	 *
	 * API Route: GET /libraries/grades
	 */
	async getGrades(): Promise<ApiResponse<Grade[]>> {
		return this.get<Grade[]>("/libraries/grades");
	}

	/**
	 * Create a new grade in the library
	 *
	 * @param body - Grade object with name and quality specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new material grade to the library for categorizing
	 * and specifying material quality levels.
	 *
	 * API Route: POST /libraries/grades
	 */
	async createGrade(body: Grade): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/grades", body);
	}

	/**
	 * Get a specific grade by name
	 *
	 * @param gradename - Name of the grade to retrieve
	 * @returns Promise resolving to grade details
	 * @description Retrieves detailed information about a specific material grade
	 * including its quality specifications and characteristics.
	 *
	 * API Route: GET /libraries/grades/{gradename}
	 */
	async getGrade(gradename: string): Promise<ApiResponse<Grade>> {
		return this.get<Grade>(`/libraries/grades/${gradename}`);
	}

	/**
	 * Delete a grade from the library
	 *
	 * @param gradename - Name of the grade to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a grade from the library. Grade must not be
	 * referenced by any stocks or active projects.
	 *
	 * API Route: DELETE /libraries/grades/{gradename}
	 */
	async deleteGrade(gradename: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/grades/${gradename}`);
	}

	/**
	 * Update an existing grade in the library
	 *
	 * @param gradename - Name of the grade to update
	 * @param body - Updated grade object with modified properties
	 * @returns Promise resolving to response entity with update status
	 * @description Updates properties of an existing material grade.
	 *
	 * API Route: PUT /libraries/grades/{gradename}
	 */
	async updateGrade(gradename: string, body: Grade): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/grades/${gradename}`, body);
	}

	// ============================================================================
	// COATING MANAGEMENT
	// ============================================================================

	/**
	 * Get all coatings from the library
	 *
	 * @returns Promise resolving to array of all coatings
	 * @description Retrieves all coating types (UV, aqueous, varnish, etc.) from
	 * the library that can be applied to printed materials.
	 *
	 * API Route: GET /libraries/coatings
	 */
	async getCoatings(): Promise<ApiResponse<Coating[]>> {
		return this.get<Coating[]>("/libraries/coatings");
	}

	/**
	 * Create a new coating in the library
	 *
	 * @param body - Coating object with name and application specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new coating type to the library. Coatings define
	 * finishing processes applied to printed materials.
	 *
	 * API Route: POST /libraries/coatings
	 */
	async createCoating(body: Coating): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/coatings", body);
	}

	/**
	 * Get a specific coating by name
	 *
	 * @param coatingname - Name of the coating to retrieve
	 * @returns Promise resolving to coating details
	 * @description Retrieves detailed information about a specific coating type
	 * including application method and material properties.
	 *
	 * API Route: GET /libraries/coatings/{coatingname}
	 */
	async getCoating(coatingname: string): Promise<ApiResponse<Coating>> {
		return this.get<Coating>(`/libraries/coatings/${coatingname}`);
	}

	/**
	 * Delete a coating from the library
	 *
	 * @param coatingname - Name of the coating to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a coating from the library. Coating must not be
	 * in use by any active projects.
	 *
	 * API Route: DELETE /libraries/coatings/{coatingname}
	 */
	async deleteCoating(coatingname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/coatings/${coatingname}`);
	}

	/**
	 * Update an existing coating in the library
	 *
	 * @param coatingname - Name of the coating to update
	 * @param body - Updated coating object with modified properties
	 * @returns Promise resolving to response entity with update status
	 * @description Updates properties of an existing coating type.
	 *
	 * API Route: PUT /libraries/coatings/{coatingname}
	 */
	async updateCoating(coatingname: string, body: Coating): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/coatings/${coatingname}`, body);
	}

	// ============================================================================
	// PROFILE MANAGEMENT
	// ============================================================================

	/**
	 * Get all profiles from the library
	 *
	 * @returns Promise resolving to array of all profiles
	 * @description Retrieves all configuration profiles from the library. Profiles
	 * contain preset configurations for various operations.
	 *
	 * API Route: GET /libraries/profiles
	 */
	async getProfiles(): Promise<ApiResponse<Profile[]>> {
		return this.get<Profile[]>("/libraries/profiles");
	}

	/**
	 * Create a new profile in the library
	 *
	 * @param body - Profile object with configuration settings
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new configuration profile to the library for reusable
	 * operation settings.
	 *
	 * API Route: POST /libraries/profiles
	 */
	async createProfile(body: Profile): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/profiles", body);
	}

	/**
	 * Get a specific profile by name
	 *
	 * @param profilename - Name of the profile to retrieve
	 * @returns Promise resolving to profile details
	 * @description Retrieves detailed configuration settings for a specific profile.
	 *
	 * API Route: GET /libraries/profiles/{profilename}
	 */
	async getProfile(profilename: string): Promise<ApiResponse<Profile>> {
		return this.get<Profile>(`/libraries/profiles/${profilename}`);
	}

	/**
	 * Delete a profile from the library
	 *
	 * @param profilename - Name of the profile to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a profile from the library. Profile must not be
	 * in use by any active projects.
	 *
	 * API Route: DELETE /libraries/profiles/{profilename}
	 */
	async deleteProfile(profilename: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/profiles/${profilename}`);
	}

	/**
	 * Update an existing profile in the library
	 *
	 * @param profilename - Name of the profile to update
	 * @param body - Updated profile object with modified configuration
	 * @returns Promise resolving to response entity with update status
	 * @description Updates configuration settings of an existing profile.
	 *
	 * API Route: PUT /libraries/profiles/{profilename}
	 */
	async updateProfile(profilename: string, body: Profile): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/profiles/${profilename}`, body);
	}

	// ============================================================================
	// DIE DESIGN MANAGEMENT
	// ============================================================================

	/**
	 * Get all die designs from the library
	 *
	 * @returns Promise resolving to array of all die designs
	 * @description Retrieves all die cutting designs from the library. Die designs
	 * define cutting, creasing, and perforation patterns.
	 *
	 * API Route: GET /libraries/die-designs
	 */
	async getDieDesigns(): Promise<ApiResponse<DieDesign[]>> {
		return this.get<DieDesign[]>("/libraries/die-designs");
	}

	/**
	 * Create a new die design in the library
	 *
	 * @param body - Die design object with cutting pattern specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new die cutting design to the library for reuse across
	 * multiple products and projects.
	 *
	 * API Route: POST /libraries/die-designs
	 */
	async createDieDesign(body: DieDesign): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/die-designs", body);
	}

	/**
	 * Get a specific die design by name
	 *
	 * @param diedesignname - Name of the die design to retrieve
	 * @returns Promise resolving to die design details
	 * @description Retrieves detailed information about a specific die cutting
	 * design including all cutting and creasing paths.
	 *
	 * API Route: GET /libraries/die-designs/{diedesignname}
	 */
	async getDieDesign(diedesignname: string): Promise<ApiResponse<DieDesign>> {
		return this.get<DieDesign>(`/libraries/die-designs/${diedesignname}`);
	}

	/**
	 * Delete a die design from the library
	 *
	 * @param diedesignname - Name of the die design to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a die design from the library. Design must not be
	 * in use by any active die layouts or projects.
	 *
	 * API Route: DELETE /libraries/die-designs/{diedesignname}
	 */
	async deleteDieDesign(diedesignname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/die-designs/${diedesignname}`);
	}

	/**
	 * Update an existing die design in the library
	 *
	 * @param diedesignname - Name of the die design to update
	 * @param body - Updated die design object with modified cutting patterns
	 * @returns Promise resolving to response entity with update status
	 * @description Updates properties and cutting patterns of an existing die design.
	 *
	 * API Route: PUT /libraries/die-designs/{diedesignname}
	 */
	async updateDieDesign(diedesignname: string, body: DieDesign): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/die-designs/${diedesignname}`, body);
	}

	// ============================================================================
	// DIE LAYOUT MANAGEMENT
	// ============================================================================

	/**
	 * Get all die layouts from the library
	 *
	 * @returns Promise resolving to array of all die layouts
	 * @description Retrieves all die layouts from the library. Die layouts define
	 * how products are arranged on a sheet with die designs applied.
	 *
	 * API Route: GET /libraries/die-layouts
	 */
	async getDieLayouts(): Promise<ApiResponse<DieLayout[]>> {
		return this.get<DieLayout[]>("/libraries/die-layouts");
	}

	/**
	 * Create a new die layout in the library
	 *
	 * @param body - Die layout object with arrangement specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new die layout to the library for arranging products
	 * with die cutting patterns.
	 *
	 * API Route: POST /libraries/die-layouts
	 */
	async createDieLayout(body: DieLayout): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/die-layouts", body);
	}

	/**
	 * Get a specific die layout by name
	 *
	 * @param dielayoutname - Name of the die layout to retrieve
	 * @returns Promise resolving to die layout details
	 * @description Retrieves detailed information about a specific die layout
	 * including product arrangement and die design associations.
	 *
	 * API Route: GET /libraries/die-layouts/{dielayoutname}
	 */
	async getDieLayout(dielayoutname: string): Promise<ApiResponse<DieLayout>> {
		return this.get<DieLayout>(`/libraries/die-layouts/${dielayoutname}`);
	}

	/**
	 * Delete a die layout from the library
	 *
	 * @param dielayoutname - Name of the die layout to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a die layout from the library. Layout must not be
	 * in use by any active projects.
	 *
	 * API Route: DELETE /libraries/die-layouts/{dielayoutname}
	 */
	async deleteDieLayout(dielayoutname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/die-layouts/${dielayoutname}`);
	}

	/**
	 * Update an existing die layout in the library
	 *
	 * @param dielayoutname - Name of the die layout to update
	 * @param body - Updated die layout object with modified arrangement
	 * @returns Promise resolving to response entity with update status
	 * @description Updates properties and arrangement of an existing die layout.
	 *
	 * API Route: PUT /libraries/die-layouts/{dielayoutname}
	 */
	async updateDieLayout(dielayoutname: string, body: DieLayout): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/die-layouts/${dielayoutname}`, body);
	}

	// ============================================================================
	// MARK MANAGEMENT
	// ============================================================================

	/**
	 * Get all marks from the library
	 *
	 * @returns Promise resolving to array of all marks
	 * @description Retrieves all printer's marks from the library including
	 * registration marks, crop marks, fold marks, and color bars.
	 *
	 * API Route: GET /libraries/marks
	 */
	async getMarks(): Promise<ApiResponse<Mark[]>> {
		return this.get<Mark[]>("/libraries/marks");
	}

	/**
	 * Create a new mark in the library
	 *
	 * @param body - Mark object with type, appearance, and placement specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new printer's mark to the library for use in layouts
	 * and production sheets.
	 *
	 * API Route: POST /libraries/marks
	 */
	async createMark(body: Mark): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/marks", body);
	}

	/**
	 * Get a specific mark by name
	 *
	 * @param markname - Name of the mark to retrieve
	 * @returns Promise resolving to mark details
	 * @description Retrieves detailed information about a specific printer's mark
	 * including type, size, color, and placement rules.
	 *
	 * API Route: GET /libraries/marks/{markname}
	 */
	async getMark(markname: string): Promise<ApiResponse<Mark>> {
		return this.get<Mark>(`/libraries/marks/${markname}`);
	}

	/**
	 * Delete a mark from the library
	 *
	 * @param markname - Name of the mark to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a mark from the library. Mark must not be in use
	 * by any active layouts or projects.
	 *
	 * API Route: DELETE /libraries/marks/{markname}
	 */
	async deleteMark(markname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/marks/${markname}`);
	}

	/**
	 * Update an existing mark in the library
	 *
	 * @param markname - Name of the mark to update
	 * @param body - Updated mark object with modified properties
	 * @returns Promise resolving to response entity with update status
	 * @description Updates appearance and placement properties of an existing mark.
	 *
	 * API Route: PUT /libraries/marks/{markname}
	 */
	async updateMark(markname: string, body: Mark): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/marks/${markname}`, body);
	}

	// ============================================================================
	// PROCESS MANAGEMENT
	// ============================================================================

	/**
	 * Get all processes from the library
	 *
	 * @returns Promise resolving to array of all processes
	 * @description Retrieves all manufacturing processes from the library such as
	 * printing, cutting, folding, and binding operations.
	 *
	 * API Route: GET /libraries/processes
	 */
	async getProcesses(): Promise<ApiResponse<Process[]>> {
		return this.get<Process[]>("/libraries/processes");
	}

	/**
	 * Create a new process in the library
	 *
	 * @param body - Process object with operation type and specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new manufacturing process to the library for use in
	 * production workflows.
	 *
	 * API Route: POST /libraries/processes
	 */
	async createProcess(body: Process): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/processes", body);
	}

	/**
	 * Get a specific process by name
	 *
	 * @param processname - Name of the process to retrieve
	 * @returns Promise resolving to process details
	 * @description Retrieves detailed information about a specific manufacturing
	 * process including operation parameters and settings.
	 *
	 * API Route: GET /libraries/processes/{processname}
	 */
	async getProcess(processname: string): Promise<ApiResponse<Process>> {
		return this.get<Process>(`/libraries/processes/${processname}`);
	}

	/**
	 * Delete a process from the library
	 *
	 * @param processname - Name of the process to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a process from the library. Process must not be
	 * in use by any active equipment or projects.
	 *
	 * API Route: DELETE /libraries/processes/{processname}
	 */
	async deleteProcess(processname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/processes/${processname}`);
	}

	/**
	 * Update an existing process in the library
	 *
	 * @param processname - Name of the process to update
	 * @param body - Updated process object with modified specifications
	 * @returns Promise resolving to response entity with update status
	 * @description Updates operation parameters of an existing manufacturing process.
	 *
	 * API Route: PUT /libraries/processes/{processname}
	 */
	async updateProcess(processname: string, body: Process): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/processes/${processname}`, body);
	}

	// ============================================================================
	// MACHINE MANAGEMENT
	// ============================================================================

	/**
	 * Get all machines from the library
	 *
	 * @returns Promise resolving to array of all machines
	 * @description Retrieves all production equipment/machines from the library
	 * including presses, cutters, folders, and other manufacturing equipment.
	 *
	 * API Route: GET /libraries/machines
	 */
	async getMachines(): Promise<ApiResponse<Machine[]>> {
		return this.get<Machine[]>("/libraries/machines");
	}

	/**
	 * Create a new machine in the library
	 *
	 * @param body - Machine object with equipment specifications and capabilities
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new production machine to the library with its technical
	 * specifications and operational capabilities.
	 *
	 * API Route: POST /libraries/machines
	 */
	async createMachine(body: Machine): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/machines", body);
	}

	/**
	 * Get a specific machine by name
	 *
	 * @param machinename - Name of the machine to retrieve
	 * @returns Promise resolving to machine details
	 * @description Retrieves detailed information about a specific machine including
	 * capabilities, dimensions, and operational parameters.
	 *
	 * API Route: GET /libraries/machines/{machinename}
	 */
	async getMachine(machinename: string): Promise<ApiResponse<Machine>> {
		return this.get<Machine>(`/libraries/machines/${machinename}`);
	}

	/**
	 * Delete a machine from the library
	 *
	 * @param machinename - Name of the machine to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a machine from the library. Machine must not be
	 * assigned to any active projects or production runs.
	 *
	 * API Route: DELETE /libraries/machines/{machinename}
	 */
	async deleteMachine(machinename: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/machines/${machinename}`);
	}

	/**
	 * Update an existing machine in the library
	 *
	 * @param machinename - Name of the machine to update
	 * @param body - Updated machine object with modified specifications
	 * @returns Promise resolving to response entity with update status
	 * @description Updates specifications and capabilities of an existing machine.
	 *
	 * API Route: PUT /libraries/machines/{machinename}
	 */
	async updateMachine(machinename: string, body: Machine): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/machines/${machinename}`, body);
	}

	// ============================================================================
	// SCREEN RULING MANAGEMENT
	// ============================================================================

	/**
	 * Get all screen rulings from the library
	 *
	 * @returns Promise resolving to array of all screen rulings
	 * @description Retrieves all screen ruling configurations from the library.
	 * Screen rulings define halftone frequency and angle settings for printing.
	 *
	 * API Route: GET /libraries/screenrulings
	 */
	async getScreenrulings(): Promise<ApiResponse<Screenruling[]>> {
		return this.get<Screenruling[]>("/libraries/screenrulings");
	}

	/**
	 * Create a new screen ruling in the library
	 *
	 * @param body - Screen ruling object with frequency and angle specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new screen ruling configuration to the library for
	 * halftone printing specifications.
	 *
	 * API Route: POST /libraries/screenrulings
	 */
	async createScreenruling(body: Screenruling): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/screenrulings", body);
	}

	/**
	 * Get a specific screen ruling by name
	 *
	 * @param screenrulingname - Name of the screen ruling to retrieve
	 * @returns Promise resolving to screen ruling details
	 * @description Retrieves detailed information about a specific screen ruling
	 * including frequency (LPI) and angle settings for each color channel.
	 *
	 * API Route: GET /libraries/screenrulings/{screenrulingname}
	 */
	async getScreenruling(screenrulingname: string): Promise<ApiResponse<Screenruling>> {
		return this.get<Screenruling>(`/libraries/screenrulings/${screenrulingname}`);
	}

	/**
	 * Delete a screen ruling from the library
	 *
	 * @param screenrulingname - Name of the screen ruling to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a screen ruling from the library. Ruling must not be
	 * in use by any active projects.
	 *
	 * API Route: DELETE /libraries/screenrulings/{screenrulingname}
	 */
	async deleteScreenruling(screenrulingname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/screenrulings/${screenrulingname}`);
	}

	/**
	 * Update an existing screen ruling in the library
	 *
	 * @param screenrulingname - Name of the screen ruling to update
	 * @param body - Updated screen ruling object with modified settings
	 * @returns Promise resolving to response entity with update status
	 * @description Updates frequency and angle settings of an existing screen ruling.
	 *
	 * API Route: PUT /libraries/screenrulings/{screenrulingname}
	 */
	async updateScreenruling(screenrulingname: string, body: Screenruling): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/screenrulings/${screenrulingname}`, body);
	}

	// ============================================================================
	// SPOT COLOR MANAGEMENT
	// ============================================================================

	/**
	 * Get all spot colors from the library
	 *
	 * @returns Promise resolving to array of all spot colors
	 * @description Retrieves all spot color definitions from the library including
	 * Pantone, custom colors, and special inks.
	 *
	 * API Route: GET /libraries/spot-colors
	 */
	async getSpotColors(): Promise<ApiResponse<SpotColor[]>> {
		return this.get<SpotColor[]>("/libraries/spot-colors");
	}

	/**
	 * Create a new spot color in the library
	 *
	 * @param body - Spot color object with name, color values, and specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new spot color definition to the library with LAB, CMYK,
	 * and RGB equivalents for accurate color matching.
	 *
	 * API Route: POST /libraries/spot-colors
	 */
	async createSpotColor(body: SpotColor): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/spot-colors", body);
	}

	/**
	 * Get a specific spot color by name
	 *
	 * @param spotcolorname - Name of the spot color to retrieve
	 * @returns Promise resolving to spot color details
	 * @description Retrieves detailed information about a specific spot color
	 * including LAB, CMYK, and RGB color values.
	 *
	 * API Route: GET /libraries/spot-colors/{spotcolorname}
	 */
	async getSpotColor(spotcolorname: string): Promise<ApiResponse<SpotColor>> {
		return this.get<SpotColor>(`/libraries/spot-colors/${spotcolorname}`);
	}

	/**
	 * Delete a spot color from the library
	 *
	 * @param spotcolorname - Name of the spot color to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a spot color from the library. Color must not be
	 * in use by any active projects or artwork.
	 *
	 * API Route: DELETE /libraries/spot-colors/{spotcolorname}
	 */
	async deleteSpotColor(spotcolorname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/spot-colors/${spotcolorname}`);
	}

	/**
	 * Update an existing spot color in the library
	 *
	 * @param spotcolorname - Name of the spot color to update
	 * @param body - Updated spot color object with modified color values
	 * @returns Promise resolving to response entity with update status
	 * @description Updates color values and specifications of an existing spot color.
	 *
	 * API Route: PUT /libraries/spot-colors/{spotcolorname}
	 */
	async updateSpotColor(spotcolorname: string, body: SpotColor): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/spot-colors/${spotcolorname}`, body);
	}

	// ============================================================================
	// TOOL TYPE MANAGEMENT
	// ============================================================================

	/**
	 * Get all tool types from the library
	 *
	 * @returns Promise resolving to array of all tool types
	 * @description Retrieves all tool type definitions from the library for
	 * categorizing production tools and dies.
	 *
	 * API Route: GET /libraries/tool-types
	 */
	async getToolTypes(): Promise<ApiResponse<ToolType[]>> {
		return this.get<ToolType[]>("/libraries/tool-types");
	}

	/**
	 * Create a new tool type in the library
	 *
	 * @param body - Tool type object with category and specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds a new tool type category to the library for organizing
	 * and classifying production tools.
	 *
	 * API Route: POST /libraries/tool-types
	 */
	async createToolType(body: ToolType): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/tool-types", body);
	}

	/**
	 * Get a specific tool type by name
	 *
	 * @param tooltypename - Name of the tool type to retrieve
	 * @returns Promise resolving to tool type details
	 * @description Retrieves detailed information about a specific tool type
	 * category and its specifications.
	 *
	 * API Route: GET /libraries/tool-types/{tooltypename}
	 */
	async getToolType(tooltypename: string): Promise<ApiResponse<ToolType>> {
		return this.get<ToolType>(`/libraries/tool-types/${tooltypename}`);
	}

	/**
	 * Delete a tool type from the library
	 *
	 * @param tooltypename - Name of the tool type to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes a tool type from the library. Type must not be
	 * referenced by any existing tools or equipment.
	 *
	 * API Route: DELETE /libraries/tool-types/{tooltypename}
	 */
	async deleteToolType(tooltypename: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/tool-types/${tooltypename}`);
	}

	/**
	 * Update an existing tool type in the library
	 *
	 * @param tooltypename - Name of the tool type to update
	 * @param body - Updated tool type object with modified specifications
	 * @returns Promise resolving to response entity with update status
	 * @description Updates category specifications of an existing tool type.
	 *
	 * API Route: PUT /libraries/tool-types/{tooltypename}
	 */
	async updateToolType(tooltypename: string, body: ToolType): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/tool-types/${tooltypename}`, body);
	}

	// ============================================================================
	// THING/EQUIPMENT MANAGEMENT
	// ============================================================================

	/**
	 * Get all things (equipment) from the library
	 *
	 * @returns Promise resolving to array of all things
	 * @description Retrieves all equipment items (things) from the library including
	 * presses, cutters, folders, and other production equipment with full capabilities.
	 *
	 * API Route: GET /libraries/things
	 */
	async getThings(): Promise<ApiResponse<Thing[]>> {
		return this.get<Thing[]>("/libraries/things");
	}

	/**
	 * Create a new thing (equipment) in the library
	 *
	 * @param body - Thing object with equipment type, capabilities, and specifications
	 * @returns Promise resolving to response entity with creation status
	 * @description Adds new production equipment to the library with detailed
	 * capabilities, dimensions, and operational parameters.
	 *
	 * API Route: POST /libraries/things
	 */
	async createThing(body: Thing): Promise<ApiResponse<ResponseEntity>> {
		return this.post<ResponseEntity>("/libraries/things", body);
	}

	/**
	 * Get a specific thing (equipment) by name
	 *
	 * @param thingname - Name of the thing to retrieve
	 * @returns Promise resolving to thing details
	 * @description Retrieves detailed information about specific equipment including
	 * type, capabilities, dimensions, costs, and operational parameters.
	 *
	 * API Route: GET /libraries/things/{thingname}
	 */
	async getThing(thingname: string): Promise<ApiResponse<Thing>> {
		return this.get<Thing>(`/libraries/things/${thingname}`);
	}

	/**
	 * Delete a thing (equipment) from the library
	 *
	 * @param thingname - Name of the thing to delete
	 * @returns Promise resolving to response entity with deletion status
	 * @description Removes equipment from the library. Equipment must not be
	 * assigned to any active projects or production workflows.
	 *
	 * API Route: DELETE /libraries/things/{thingname}
	 */
	async deleteThing(thingname: string): Promise<ApiResponse<ResponseEntity>> {
		return this.delete<ResponseEntity>(`/libraries/things/${thingname}`);
	}

	/**
	 * Update an existing thing (equipment) in the library
	 *
	 * @param thingname - Name of the thing to update
	 * @param body - Updated thing object with modified specifications
	 * @returns Promise resolving to response entity with update status
	 * @description Updates capabilities, dimensions, or operational parameters
	 * of existing equipment in the library.
	 *
	 * API Route: PUT /libraries/things/{thingname}
	 */
	async updateThing(thingname: string, body: Thing): Promise<ApiResponse<ResponseEntity>> {
		return this.put<ResponseEntity>(`/libraries/things/${thingname}`, body);
	}
}
