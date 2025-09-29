/**
 * Libraries API endpoints
 * Library management
 */

import { BaseClient } from '../client/Base';
import { ApiResponse } from '../client/types';
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
  ResponseEntity
} from '../types';

export class Libraries extends BaseClient {
  /**
   * Get all stocks
   */
  async getStocks(): Promise<ApiResponse<Stock[]>> {
    return this.get<Stock[]>('/libraries/stocks');
  }

  /**
   * Create stock
   */
  async createStock(body: Stock): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/stocks', body);
  }

  /**
   * Get stock
   */
  async getStock(stockname: string): Promise<ApiResponse<Stock>> {
    return this.get<Stock>(`/libraries/stocks/${stockname}`);
  }

  /**
   * Delete stock
   */
  async deleteStock(stockname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/stocks/${stockname}`);
  }

  /**
   * Update stock
   */
  async updateStock(stockname: string, body: Stock): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/stocks/${stockname}`, body);
  }

  /**
   * Get all sheet stocks
   */
  async getSheetStocks(): Promise<ApiResponse<Stock[]>> {
    return this.get<Stock[]>('/libraries/sheet-stocks');
  }

  /**
   * Get sheet stock
   */
  async getSheetStock(stockname: string): Promise<ApiResponse<Stock>> {
    return this.get<Stock>(`/libraries/sheet-stocks/${stockname}`);
  }

  /**
   * Get all roll stocks
   */
  async getRollStocks(): Promise<ApiResponse<Stock[]>> {
    return this.get<Stock[]>('/libraries/roll-stocks');
  }

  /**
   * Get roll stock
   */
  async getRollStock(stockname: string): Promise<ApiResponse<Stock>> {
    return this.get<Stock>(`/libraries/roll-stocks/${stockname}`);
  }

  /**
   * Get all grades
   */
  async getGrades(): Promise<ApiResponse<Grade[]>> {
    return this.get<Grade[]>('/libraries/grades');
  }

  /**
   * Create grade
   */
  async createGrade(body: Grade): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/grades', body);
  }

  /**
   * Get grade
   */
  async getGrade(gradename: string): Promise<ApiResponse<Grade>> {
    return this.get<Grade>(`/libraries/grades/${gradename}`);
  }

  /**
   * Delete grade
   */
  async deleteGrade(gradename: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/grades/${gradename}`);
  }

  /**
   * Update grade
   */
  async updateGrade(gradename: string, body: Grade): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/grades/${gradename}`, body);
  }

  /**
   * Get all coatings
   */
  async getCoatings(): Promise<ApiResponse<Coating[]>> {
    return this.get<Coating[]>('/libraries/coatings');
  }

  /**
   * Create coating
   */
  async createCoating(body: Coating): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/coatings', body);
  }

  /**
   * Get coating
   */
  async getCoating(coatingname: string): Promise<ApiResponse<Coating>> {
    return this.get<Coating>(`/libraries/coatings/${coatingname}`);
  }

  /**
   * Delete coating
   */
  async deleteCoating(coatingname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/coatings/${coatingname}`);
  }

  /**
   * Update coating
   */
  async updateCoating(coatingname: string, body: Coating): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/coatings/${coatingname}`, body);
  }

  /**
   * Get all profiles
   */
  async getProfiles(): Promise<ApiResponse<Profile[]>> {
    return this.get<Profile[]>('/libraries/profiles');
  }

  /**
   * Create profile
   */
  async createProfile(body: Profile): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/profiles', body);
  }

  /**
   * Get profile
   */
  async getProfile(profilename: string): Promise<ApiResponse<Profile>> {
    return this.get<Profile>(`/libraries/profiles/${profilename}`);
  }

  /**
   * Delete profile
   */
  async deleteProfile(profilename: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/profiles/${profilename}`);
  }

  /**
   * Update profile
   */
  async updateProfile(profilename: string, body: Profile): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/profiles/${profilename}`, body);
  }

  /**
   * Get all die designs
   */
  async getDieDesigns(): Promise<ApiResponse<DieDesign[]>> {
    return this.get<DieDesign[]>('/libraries/die-designs');
  }

  /**
   * Create die design
   */
  async createDieDesign(body: DieDesign): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/die-designs', body);
  }

  /**
   * Get die design
   */
  async getDieDesign(diedesignname: string): Promise<ApiResponse<DieDesign>> {
    return this.get<DieDesign>(`/libraries/die-designs/${diedesignname}`);
  }

  /**
   * Delete die design
   */
  async deleteDieDesign(diedesignname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/die-designs/${diedesignname}`);
  }

  /**
   * Update die design
   */
  async updateDieDesign(diedesignname: string, body: DieDesign): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/die-designs/${diedesignname}`, body);
  }

  /**
   * Get all die layouts
   */
  async getDieLayouts(): Promise<ApiResponse<DieLayout[]>> {
    return this.get<DieLayout[]>('/libraries/die-layouts');
  }

  /**
   * Create die layout
   */
  async createDieLayout(body: DieLayout): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/die-layouts', body);
  }

  /**
   * Get die layout
   */
  async getDieLayout(dielayoutname: string): Promise<ApiResponse<DieLayout>> {
    return this.get<DieLayout>(`/libraries/die-layouts/${dielayoutname}`);
  }

  /**
   * Delete die layout
   */
  async deleteDieLayout(dielayoutname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/die-layouts/${dielayoutname}`);
  }

  /**
   * Update die layout
   */
  async updateDieLayout(dielayoutname: string, body: DieLayout): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/die-layouts/${dielayoutname}`, body);
  }

  /**
   * Get all marks
   */
  async getMarks(): Promise<ApiResponse<Mark[]>> {
    return this.get<Mark[]>('/libraries/marks');
  }

  /**
   * Create mark
   */
  async createMark(body: Mark): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/marks', body);
  }

  /**
   * Get mark
   */
  async getMark(markname: string): Promise<ApiResponse<Mark>> {
    return this.get<Mark>(`/libraries/marks/${markname}`);
  }

  /**
   * Delete mark
   */
  async deleteMark(markname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/marks/${markname}`);
  }

  /**
   * Update mark
   */
  async updateMark(markname: string, body: Mark): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/marks/${markname}`, body);
  }

  /**
   * Get all processes
   */
  async getProcesses(): Promise<ApiResponse<Process[]>> {
    return this.get<Process[]>('/libraries/processes');
  }

  /**
   * Create process
   */
  async createProcess(body: Process): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/processes', body);
  }

  /**
   * Get process
   */
  async getProcess(processname: string): Promise<ApiResponse<Process>> {
    return this.get<Process>(`/libraries/processes/${processname}`);
  }

  /**
   * Delete process
   */
  async deleteProcess(processname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/processes/${processname}`);
  }

  /**
   * Update process
   */
  async updateProcess(processname: string, body: Process): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/processes/${processname}`, body);
  }

  /**
   * Get all machines
   */
  async getMachines(): Promise<ApiResponse<Machine[]>> {
    return this.get<Machine[]>('/libraries/machines');
  }

  /**
   * Create machine
   */
  async createMachine(body: Machine): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/machines', body);
  }

  /**
   * Get machine
   */
  async getMachine(machinename: string): Promise<ApiResponse<Machine>> {
    return this.get<Machine>(`/libraries/machines/${machinename}`);
  }

  /**
   * Delete machine
   */
  async deleteMachine(machinename: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/machines/${machinename}`);
  }

  /**
   * Update machine
   */
  async updateMachine(machinename: string, body: Machine): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/machines/${machinename}`, body);
  }

  /**
   * Get all screen rulings
   */
  async getScreenrulings(): Promise<ApiResponse<Screenruling[]>> {
    return this.get<Screenruling[]>('/libraries/screenrulings');
  }

  /**
   * Create screen ruling
   */
  async createScreenruling(body: Screenruling): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/screenrulings', body);
  }

  /**
   * Get screen ruling
   */
  async getScreenruling(screenrulingname: string): Promise<ApiResponse<Screenruling>> {
    return this.get<Screenruling>(`/libraries/screenrulings/${screenrulingname}`);
  }

  /**
   * Delete screen ruling
   */
  async deleteScreenruling(screenrulingname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/screenrulings/${screenrulingname}`);
  }

  /**
   * Update screen ruling
   */
  async updateScreenruling(screenrulingname: string, body: Screenruling): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/screenrulings/${screenrulingname}`, body);
  }

  /**
   * Get all spot colors
   */
  async getSpotColors(): Promise<ApiResponse<SpotColor[]>> {
    return this.get<SpotColor[]>('/libraries/spot-colors');
  }

  /**
   * Create spot color
   */
  async createSpotColor(body: SpotColor): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/spot-colors', body);
  }

  /**
   * Get spot color
   */
  async getSpotColor(spotcolorname: string): Promise<ApiResponse<SpotColor>> {
    return this.get<SpotColor>(`/libraries/spot-colors/${spotcolorname}`);
  }

  /**
   * Delete spot color
   */
  async deleteSpotColor(spotcolorname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/spot-colors/${spotcolorname}`);
  }

  /**
   * Update spot color
   */
  async updateSpotColor(spotcolorname: string, body: SpotColor): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/spot-colors/${spotcolorname}`, body);
  }

  /**
   * Get all tool types
   */
  async getToolTypes(): Promise<ApiResponse<ToolType[]>> {
    return this.get<ToolType[]>('/libraries/tool-types');
  }

  /**
   * Create tool type
   */
  async createToolType(body: ToolType): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/tool-types', body);
  }

  /**
   * Get tool type
   */
  async getToolType(tooltypename: string): Promise<ApiResponse<ToolType>> {
    return this.get<ToolType>(`/libraries/tool-types/${tooltypename}`);
  }

  /**
   * Delete tool type
   */
  async deleteToolType(tooltypename: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/tool-types/${tooltypename}`);
  }

  /**
   * Update tool type
   */
  async updateToolType(tooltypename: string, body: ToolType): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/tool-types/${tooltypename}`, body);
  }

  /**
   * Get all things
   */
  async getThings(): Promise<ApiResponse<Thing[]>> {
    return this.get<Thing[]>('/libraries/things');
  }

  /**
   * Create thing
   */
  async createThing(body: Thing): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/libraries/things', body);
  }

  /**
   * Get thing
   */
  async getThing(thingname: string): Promise<ApiResponse<Thing>> {
    return this.get<Thing>(`/libraries/things/${thingname}`);
  }

  /**
   * Delete thing
   */
  async deleteThing(thingname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/libraries/things/${thingname}`);
  }

  /**
   * Update thing
   */
  async updateThing(thingname: string, body: Thing): Promise<ApiResponse<ResponseEntity>> {
    return this.put<ResponseEntity>(`/libraries/things/${thingname}`, body);
  }
}