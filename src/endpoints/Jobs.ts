/**
 * Jobs API endpoints
 * Job automation (will be deprecated and replaced by Projects API in the future)
 */

import { BaseClient } from '../client/Base';
import { ApiResponse } from '../client/types';
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
  ComponentObject,
  PageObject,
  Stock,
  Mark,
  DieDesign,
  DieLayout,
  Layout,
  SheetRegion,
  RollRegion,
  Thing,
  PlanResource,
  ResponseEntity
} from '../types';

export class Jobs extends BaseClient {
  /**
   * Get a list of all projects
   */
  async getJobs(): Promise<ApiResponse<PhoenixProject[]>> {
    return this.get<PhoenixProject[]>('/jobs');
  }

  /**
   * Create a new project
   */
  async createJob(body: CreateJobResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/jobs', body);
  }

  /**
   * Open existing project
   */
  async openJob(body: OpenJobResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/jobs/open', body);
  }

  /**
   * Get specific project
   */
  async getJob(jobid: string): Promise<ApiResponse<PhoenixProject>> {
    return this.get<PhoenixProject>(`/jobs/${jobid}`);
  }

  /**
   * Delete a project
   */
  async deleteJob(jobid: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/jobs/${jobid}`);
  }

  /**
   * Edit project
   */
  async editProject(jobid: string, body: EditProjectResource): Promise<ApiResponse<ResponseEntity>> {
    return this.patch<ResponseEntity>(`/jobs/${jobid}`, body);
  }

  /**
   * Export JSON report
   */
  async exportJsonReport(jobid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/export/report/json`, body);
  }

  /**
   * Export XML report
   */
  async exportXmlReport(jobid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/export/report/xml`, body);
  }

  /**
   * Export cover sheet
   */
  async exportCoverSheet(jobid: string, body: ExportCoverSheetResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/export/cover-sheet`, body);
  }

  /**
   * Export CSV report
   */
  async exportCsvReport(jobid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/export/report/csv`, body);
  }

  /**
   * Export project
   */
  async exportProject(jobid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/export/project`, body);
  }

  /**
   * Import die layout DXF
   */
  async importDieLayoutDxf(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/dxf`, body);
  }

  /**
   * Import die layout CFF2
   */
  async importDieLayoutCff2(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/cff2`, body);
  }

  /**
   * Import die layout CF2
   */
  async importDieLayoutCf2(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/cf2`, body);
  }

  /**
   * Import die layout DDES3
   */
  async importDieLayoutDdes3(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/ddes3`, body);
  }

  /**
   * Import die layout DDES2
   */
  async importDieLayoutDdes2(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/ddes2`, body);
  }

  /**
   * Import die layout MFG
   */
  async importDieLayoutMfg(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/mfg`, body);
  }

  /**
   * Import die layout ARD
   */
  async importDieLayoutArd(jobid: string, body: ImportDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/die/ard`, body);
  }

  /**
   * Import product XML
   */
  async importProductXml(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/xml`, body);
  }

  /**
   * Import product CSV
   */
  async importProductCsv(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/csv`, body);
  }

  /**
   * Import product CXF
   */
  async importProductCxf(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/cxf`, body);
  }

  /**
   * Import product MIS
   */
  async importProductMis(jobid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/product/mis`, body);
  }

  /**
   * Import stock CSV
   */
  async importStockCsv(jobid: string, body: ImportStockResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/stock/csv`, body);
  }

  /**
   * Import stock XML
   */
  async importStockXml(jobid: string, body: ImportStockResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/stock/xml`, body);
  }

  /**
   * Import asset
   */
  async importAsset(jobid: string, body: ImportAssetResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/import/asset`, body);
  }

  /**
   * Autosnap artwork
   */
  async autosnapArtwork(jobid: string, body: AutosnapArtworkEntity): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/autosnap-artwork`, body);
  }

  /**
   * Image tracing
   */
  async imageTracing(jobid: string, body: ImageTracingResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/image-tracing`, body);
  }

  /**
   * Step and repeat
   */
  async stepAndRepeat(jobid: string, body: StepAndRepeatResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/step-and-repeat`, body);
  }

  /**
   * Run reports
   */
  async runReports(jobid: string, body: RunReportsResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/run-reports`, body);
  }

  /**
   * Run rules
   */
  async runRules(jobid: string, body: RunRulesResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/run-rules`, body);
  }

  /**
   * Set custom properties
   */
  async setCustomProperties(jobid: string, body: PropertiesResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/properties`, body);
  }

  /**
   * Apply die layout
   */
  async applyDieLayout(jobid: string, body: ApplyDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/apply-die-layout`, body);
  }

  /**
   * Apply mark
   */
  async applyMark(jobid: string, body: ApplyMarkResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/apply-mark`, body);
  }

  /**
   * Apply profile
   */
  async applyProfile(jobid: string, body: ApplyProfileResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/apply-profile`, body);
  }

  /**
   * CAD die design
   */
  async cadDieDesign(jobid: string, body: CadDieDesignResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/cad-die-design`, body);
  }

  /**
   * Layout presets
   */
  async layoutPresets(jobid: string, body: LayoutPresetsResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/layout-presets`, body);
  }

  /**
   * Expand bleed
   */
  async expandBleed(jobid: string, body: ExpandBleedResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/expand-bleed`, body);
  }

  /**
   * Process layout
   */
  async processLayout(jobid: string, body: ProcessLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/process-layout`, body);
  }

  /**
   * Save die design
   */
  async saveDieDesign(jobid: string, body: SaveDieDesignResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/save-die-design`, body);
  }

  /**
   * Save die layout
   */
  async saveDieLayout(jobid: string, body: SaveDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/save-die-layout`, body);
  }

  /**
   * Save template
   */
  async saveTemplate(jobid: string, body: SaveTemplateResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/save-template`, body);
  }

  /**
   * Get list of products
   */
  async getProducts(jobid: string): Promise<ApiResponse<Product[]>> {
    return this.get<Product[]>(`/jobs/${jobid}/products`);
  }

  /**
   * Get product
   */
  async getProduct(jobid: string, productname: string): Promise<ApiResponse<Product>> {
    return this.get<Product>(`/jobs/${jobid}/products/${productname}`);
  }

  /**
   * Delete product
   */
  async deleteProduct(jobid: string, productname: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/jobs/${jobid}/products/${productname}`);
  }

  /**
   * Get list of parts
   */
  async getParts(jobid: string, productname: string): Promise<ApiResponse<Part[]>> {
    return this.get<Part[]>(`/jobs/${jobid}/products/${productname}/parts`);
  }

  /**
   * Get part
   */
  async getPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<Part>> {
    return this.get<Part>(`/jobs/${jobid}/products/${productname}/parts/${partindex}`);
  }

  /**
   * Get flat part
   */
  async getFlatPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<FlatPart>> {
    return this.get<FlatPart>(`/jobs/${jobid}/products/${productname}/flat-parts/${partindex}`);
  }

  /**
   * Get bound part
   */
  async getBoundPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<BoundPart>> {
    return this.get<BoundPart>(`/jobs/${jobid}/products/${productname}/bound-parts/${partindex}`);
  }

  /**
   * Get folded part
   */
  async getFoldedPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<FoldedPart>> {
    return this.get<FoldedPart>(`/jobs/${jobid}/products/${productname}/folded-parts/${partindex}`);
  }

  /**
   * Get tiled part
   */
  async getTiledPart(jobid: string, productname: string, partindex: number): Promise<ApiResponse<TiledPart>> {
    return this.get<TiledPart>(`/jobs/${jobid}/products/${productname}/tiled-parts/${partindex}`);
  }

  /**
   * Get list of components
   */
  async getComponents(jobid: string, productname: string, partindex: number): Promise<ApiResponse<ComponentObject[]>> {
    return this.get<ComponentObject[]>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/components`);
  }

  /**
   * Get component
   */
  async getComponent(jobid: string, productname: string, partindex: number, componentindex: number): Promise<ApiResponse<ComponentObject>> {
    return this.get<ComponentObject>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/components/${componentindex}`);
  }

  /**
   * Get list of pages
   */
  async getPages(jobid: string, productname: string, partindex: number): Promise<ApiResponse<PageObject[]>> {
    return this.get<PageObject[]>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/pages`);
  }

  /**
   * Get page
   */
  async getPage(jobid: string, productname: string, partindex: number, pageindex: number): Promise<ApiResponse<PageObject>> {
    return this.get<PageObject>(`/jobs/${jobid}/products/${productname}/parts/${partindex}/pages/${pageindex}`);
  }

  /**
   * Get signature aggregations
   */
  async getSignatureAggregations(jobid: string, layoutname: string): Promise<ApiResponse<SignatureAggregations[]>> {
    return this.get<SignatureAggregations[]>(`/jobs/${jobid}/layouts/${layoutname}/signature-aggregations`);
  }

  /**
   * Get list of stocks
   */
  async getStocks(jobid: string): Promise<ApiResponse<Stock[]>> {
    return this.get<Stock[]>(`/jobs/${jobid}/stocks`);
  }

  /**
   * Get stock
   */
  async getStock(jobid: string, stockname: string): Promise<ApiResponse<Stock>> {
    return this.get<Stock>(`/jobs/${jobid}/stocks/${stockname}`);
  }

  /**
   * Get list of marks
   */
  async getMarks(jobid: string): Promise<ApiResponse<Mark[]>> {
    return this.get<Mark[]>(`/jobs/${jobid}/marks`);
  }

  /**
   * Get mark
   */
  async getMark(jobid: string, markname: string): Promise<ApiResponse<Mark>> {
    return this.get<Mark>(`/jobs/${jobid}/marks/${markname}`);
  }

  /**
   * Get list of die designs
   */
  async getDieDesigns(jobid: string): Promise<ApiResponse<DieDesign[]>> {
    return this.get<DieDesign[]>(`/jobs/${jobid}/die-designs`);
  }

  /**
   * Get die design
   */
  async getDieDesign(jobid: string, diedesignname: string): Promise<ApiResponse<DieDesign>> {
    return this.get<DieDesign>(`/jobs/${jobid}/die-designs/${diedesignname}`);
  }

  /**
   * Get list of die layouts
   */
  async getDieLayouts(jobid: string): Promise<ApiResponse<DieLayout[]>> {
    return this.get<DieLayout[]>(`/jobs/${jobid}/die-layouts`);
  }

  /**
   * Get die layout
   */
  async getDieLayout(jobid: string, dielayoutname: string): Promise<ApiResponse<DieLayout>> {
    return this.get<DieLayout>(`/jobs/${jobid}/die-layouts/${dielayoutname}`);
  }

  /**
   * Get list of layouts
   */
  async getLayouts(jobid: string): Promise<ApiResponse<Layout[]>> {
    return this.get<Layout[]>(`/jobs/${jobid}/layouts`);
  }

  /**
   * Get layout
   */
  async getLayout(jobid: string, layoutname: string): Promise<ApiResponse<Layout>> {
    return this.get<Layout>(`/jobs/${jobid}/layouts/${layoutname}`);
  }

  /**
   * Get sheet layout
   */
  async getSheetLayout(jobid: string, layoutname: string): Promise<ApiResponse<Layout>> {
    return this.get<Layout>(`/jobs/${jobid}/sheet-layouts/${layoutname}`);
  }

  /**
   * Get roll layout
   */
  async getRollLayout(jobid: string, layoutname: string): Promise<ApiResponse<Layout>> {
    return this.get<Layout>(`/jobs/${jobid}/roll-layouts/${layoutname}`);
  }

  /**
   * Get list of sheet regions
   */
  async getSheetRegions(jobid: string, layoutname: string): Promise<ApiResponse<SheetRegion[]>> {
    return this.get<SheetRegion[]>(`/jobs/${jobid}/sheet-layouts/${layoutname}/regions`);
  }

  /**
   * Get list of roll regions
   */
  async getRollRegions(jobid: string, layoutname: string): Promise<ApiResponse<RollRegion[]>> {
    return this.get<RollRegion[]>(`/jobs/${jobid}/roll-layouts/${layoutname}/regions`);
  }

  /**
   * Get list of things
   */
  async getThings(jobid: string): Promise<ApiResponse<Thing[]>> {
    return this.get<Thing[]>(`/jobs/${jobid}/things`);
  }

  /**
   * Get thing
   */
  async getThing(jobid: string, thingname: string): Promise<ApiResponse<Thing>> {
    return this.get<Thing>(`/jobs/${jobid}/things/${thingname}`);
  }

  /**
   * Plan
   */
  async plan(jobid: string, thingname: string, body: PlanResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/jobs/${jobid}/things/${thingname}/plan`, body);
  }
}