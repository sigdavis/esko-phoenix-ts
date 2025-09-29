/**
 * Presets API endpoints
 * Presets management
 */

import { BaseClient } from '../client/Base';
import { ApiResponse } from '../client/types';
import { PresetEntity, ResponseEntity } from '../types';

export class Presets extends BaseClient {
  /**
   * List all export presets
   */
  async getExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export');
  }

  /**
   * List all Phoenix XML export presets
   */
  async getPhoenixXmlExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/xml');
  }

  /**
   * List all JDF export presets
   */
  async getJdfExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/jdf');
  }

  /**
   * List all XML report presets
   */
  async getXmlReportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/report/xml');
  }

  /**
   * List all CSV report presets
   */
  async getCsvReportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/report/csv');
  }

  /**
   * List all Cover Sheet export presets
   */
  async getCoverSheetExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/cover-sheet');
  }

  /**
   * List all import presets
   */
  async getImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import');
  }

  /**
   * List all Product CSV import presets
   */
  async getProductCsvImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/product/csv');
  }

  /**
   * List all stock CSV presets
   */
  async getStockCsv(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/stock-csv');
  }

  /**
   * List all MIS product import presets
   */
  async getMisProductImport(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/product/mis');
  }

  /**
   * List all EFI Metrix import presets
   */
  async getEfiMetrixImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/product/cxf');
  }

  /**
   * List all die layout import presets
   */
  async getDieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die');
  }

  /**
   * List all CF2 Die Layout Import Presets
   */
  async getCf2DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/cf2');
  }

  /**
   * List all CFF2 Die Layout Import Presets
   */
  async getCff2DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/cff2');
  }

  /**
   * List all ARD Die Layout Import Presets
   */
  async getArdDieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/ard');
  }

  /**
   * List all DDES2 Die Layout Import Presets
   */
  async getDdes2DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/ddes2');
  }

  /**
   * List all DDES3 Die Layout Import Presets
   */
  async getDdes3DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/ddes3');
  }

  /**
   * List all DXF Die Layout Import Presets
   */
  async getDxfDieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/dxf');
  }

  /**
   * List all MFG Die Import Presets
   */
  async getMfgDieImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/mfg');
  }

  /**
   * List all step-and-repeat presets
   */
  async getStepAndRepeatPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/tools/step-and-repeat');
  }

  /**
   * List all profile presets
   */
  async getProfilePresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles');
  }

  /**
   * List all optimization profile presets
   */
  async getOptimizationProfilePresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/optimization');
  }

  /**
   * List all planning profiles
   */
  async getPlanningProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/planning');
  }

  /**
   * List all rule profiles
   */
  async getRuleProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/rules');
  }

  /**
   * List all report profiles
   */
  async getReportProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/reports');
  }

  /**
   * List all plate-set profiles
   */
  async getPlateSetProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/platesets');
  }
}