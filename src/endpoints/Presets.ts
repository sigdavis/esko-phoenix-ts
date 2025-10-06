/**
 * Presets API endpoints
 * Manages all preset configurations for import, export, and production operations.
 * Presets provide reusable configurations for various Phoenix workflows.
 */

import { BaseClient } from '../client/Base';
import { ApiResponse } from '../client/types';
import { PresetEntity, ResponseEntity } from '../types';

/**
 * Presets API client class
 * Provides methods to retrieve preset configurations for various operations
 * including imports, exports, reports, and production profiles.
 */
export class Presets extends BaseClient {
  // ============================================================================
  // EXPORT PRESET MANAGEMENT
  // ============================================================================

  /**
   * List all export presets
   * 
   * @returns Promise resolving to array of all export presets
   * @description Retrieves all available export preset configurations for
   * exporting project data to various formats.
   * 
   * API Route: GET /presets/export
   */
  async getExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export');
  }

  /**
   * List all Phoenix XML export presets
   * 
   * @returns Promise resolving to array of Phoenix XML export presets
   * @description Retrieves preset configurations for exporting project data
   * to Phoenix XML format, which is the native interchange format.
   * 
   * API Route: GET /presets/export/xml
   */
  async getPhoenixXmlExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/xml');
  }

  /**
   * List all JDF export presets
   * 
   * @returns Promise resolving to array of JDF export presets
   * @description Retrieves preset configurations for exporting project data
   * to JDF (Job Definition Format) for workflow integration.
   * 
   * API Route: GET /presets/export/jdf
   */
  async getJdfExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/jdf');
  }

  /**
   * List all XML report presets
   * 
   * @returns Promise resolving to array of XML report presets
   * @description Retrieves preset configurations for generating XML-formatted
   * reports from project data.
   * 
   * API Route: GET /presets/export/report/xml
   */
  async getXmlReportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/report/xml');
  }

  /**
   * List all CSV report presets
   * 
   * @returns Promise resolving to array of CSV report presets
   * @description Retrieves preset configurations for generating CSV-formatted
   * reports from project data for analysis in spreadsheet applications.
   * 
   * API Route: GET /presets/export/report/csv
   */
  async getCsvReportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/report/csv');
  }

  /**
   * List all Cover Sheet export presets
   * 
   * @returns Promise resolving to array of cover sheet export presets
   * @description Retrieves preset configurations for generating production
   * cover sheets with job specifications and instructions.
   * 
   * API Route: GET /presets/export/cover-sheet
   */
  async getCoverSheetExportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/export/cover-sheet');
  }

  // ============================================================================
  // IMPORT PRESET MANAGEMENT
  // ============================================================================

  /**
   * List all import presets
   * 
   * @returns Promise resolving to array of all import presets
   * @description Retrieves all available import preset configurations for
   * importing data from various sources and formats.
   * 
   * API Route: GET /presets/import
   */
  async getImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import');
  }

  /**
   * List all Product CSV import presets
   * 
   * @returns Promise resolving to array of product CSV import presets
   * @description Retrieves preset configurations for importing product
   * specifications from CSV files.
   * 
   * API Route: GET /presets/import/product/csv
   */
  async getProductCsvImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/product/csv');
  }

  /**
   * List all MIS product import presets
   * 
   * @returns Promise resolving to array of MIS product import presets
   * @description Retrieves preset configurations for importing product data
   * from Management Information Systems (MIS).
   * 
   * API Route: GET /presets/import/product/mis
   */
  async getMisProductImport(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/product/mis');
  }

  /**
   * List all EFI Metrix import presets
   * 
   * @returns Promise resolving to array of EFI Metrix import presets
   * @description Retrieves preset configurations for importing product data
   * from EFI Metrix (CXF format) estimating and workflow systems.
   * 
   * API Route: GET /presets/import/product/cxf
   */
  async getEfiMetrixImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/product/cxf');
  }

  /**
   * List all stock CSV presets
   * 
   * @returns Promise resolving to array of stock CSV import presets
   * @description Retrieves preset configurations for importing stock/material
   * specifications from CSV files into the library.
   * 
   * API Route: GET /presets/import/stock-csv
   */
  async getStockCsv(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/stock-csv');
  }

  // ============================================================================
  // DIE LAYOUT IMPORT PRESET MANAGEMENT
  // ============================================================================

  /**
   * List all die layout import presets
   * 
   * @returns Promise resolving to array of die layout import presets
   * @description Retrieves all preset configurations for importing die layouts
   * from various CAD and die design file formats.
   * 
   * API Route: GET /presets/import/die
   */
  async getDieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die');
  }

  /**
   * List all CF2 Die Layout Import Presets
   * 
   * @returns Promise resolving to array of CF2 import presets
   * @description Retrieves preset configurations for importing die layouts
   * from CF2 (Common File Format 2) files.
   * 
   * API Route: GET /presets/import/die/cf2
   */
  async getCf2DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/cf2');
  }

  /**
   * List all CFF2 Die Layout Import Presets
   * 
   * @returns Promise resolving to array of CFF2 import presets
   * @description Retrieves preset configurations for importing die layouts
   * from CFF2 (Common File Format 2 variant) files.
   * 
   * API Route: GET /presets/import/die/cff2
   */
  async getCff2DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/cff2');
  }

  /**
   * List all ARD Die Layout Import Presets
   * 
   * @returns Promise resolving to array of ARD import presets
   * @description Retrieves preset configurations for importing die layouts
   * from ARD (ArtiosCAD) format files.
   * 
   * API Route: GET /presets/import/die/ard
   */
  async getArdDieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/ard');
  }

  /**
   * List all DDES2 Die Layout Import Presets
   * 
   * @returns Promise resolving to array of DDES2 import presets
   * @description Retrieves preset configurations for importing die layouts
   * from DDES2 (Die Design Exchange Standard version 2) files.
   * 
   * API Route: GET /presets/import/die/ddes2
   */
  async getDdes2DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/ddes2');
  }

  /**
   * List all DDES3 Die Layout Import Presets
   * 
   * @returns Promise resolving to array of DDES3 import presets
   * @description Retrieves preset configurations for importing die layouts
   * from DDES3 (Die Design Exchange Standard version 3) files.
   * 
   * API Route: GET /presets/import/die/ddes3
   */
  async getDdes3DieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/ddes3');
  }

  /**
   * List all DXF Die Layout Import Presets
   * 
   * @returns Promise resolving to array of DXF import presets
   * @description Retrieves preset configurations for importing die layouts
   * from DXF (Drawing Exchange Format) CAD files.
   * 
   * API Route: GET /presets/import/die/dxf
   */
  async getDxfDieLayoutImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/dxf');
  }

  /**
   * List all MFG Die Import Presets
   * 
   * @returns Promise resolving to array of MFG import presets
   * @description Retrieves preset configurations for importing manufacturing
   * die specifications and layouts.
   * 
   * API Route: GET /presets/import/die/mfg
   */
  async getMfgDieImportPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/import/die/mfg');
  }

  // ============================================================================
  // TOOL AND PROFILE PRESET MANAGEMENT
  // ============================================================================

  /**
   * List all step-and-repeat presets
   * 
   * @returns Promise resolving to array of step-and-repeat presets
   * @description Retrieves preset configurations for step-and-repeat layout
   * operations, defining how products are arranged in rows and columns.
   * 
   * API Route: GET /presets/tools/step-and-repeat
   */
  async getStepAndRepeatPresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/tools/step-and-repeat');
  }

  /**
   * List all profile presets
   * 
   * @returns Promise resolving to array of all profile presets
   * @description Retrieves all available profile preset configurations for
   * various production and planning operations.
   * 
   * API Route: GET /presets/profiles
   */
  async getProfilePresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles');
  }

  /**
   * List all optimization profile presets
   * 
   * @returns Promise resolving to array of optimization profile presets
   * @description Retrieves preset configurations for layout optimization,
   * defining parameters for minimizing waste and maximizing efficiency.
   * 
   * API Route: GET /presets/profiles/optimization
   */
  async getOptimizationProfilePresets(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/optimization');
  }

  /**
   * List all planning profiles
   * 
   * @returns Promise resolving to array of planning profile presets
   * @description Retrieves preset configurations for production planning,
   * defining workflow sequences and operational parameters.
   * 
   * API Route: GET /presets/profiles/planning
   */
  async getPlanningProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/planning');
  }

  /**
   * List all rule profiles
   * 
   * @returns Promise resolving to array of rule profile presets
   * @description Retrieves preset configurations for validation rules and
   * quality control checks applied to projects.
   * 
   * API Route: GET /presets/profiles/rules
   */
  async getRuleProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/rules');
  }

  /**
   * List all report profiles
   * 
   * @returns Promise resolving to array of report profile presets
   * @description Retrieves preset configurations for report generation,
   * defining which data fields and formats to include in reports.
   * 
   * API Route: GET /presets/profiles/reports
   */
  async getReportProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/reports');
  }

  /**
   * List all plate-set profiles
   * 
   * @returns Promise resolving to array of plate-set profile presets
   * @description Retrieves preset configurations for plate-set generation,
   * defining how printing plates should be organized and output.
   * 
   * API Route: GET /presets/profiles/platesets
   */
  async getPlateSetProfiles(): Promise<ApiResponse<PresetEntity[]>> {
    return this.get<PresetEntity[]>('/presets/profiles/platesets');
  }
}