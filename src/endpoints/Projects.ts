/**
 * Projects API endpoints
 * Project automation
 */

import { BaseClient } from '../client/Base';
import { ApiResponse } from '../client/types';
import {
  PhoenixProject,
  CreateProjectResource,
  OpenProjectResource,
  EditProjectResource,
  ExportResource,
  ImportProductResource,
  ImportStockResource,
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
  SheetRegion,
  RollRegion,
  Thing,
  PlanResource,
  EditProductResource,
  EditPartResource,
  EditComponentResource,
  ResponseEntity
} from '../types';

export class Projects extends BaseClient {
  /**
   * Get a list of all projects
   */
  async getProjects(): Promise<ApiResponse<PhoenixProject[]>> {
    return this.get<PhoenixProject[]>('/projects');
  }

  /**
   * Create a new project
   */
  async createProject(body: CreateProjectResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/projects', body);
  }

  /**
   * Open existing project
   */
  async openProject(body: OpenProjectResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>('/projects/open', body);
  }

  /**
   * Get specific project
   */
  async getProject(projectid: string): Promise<ApiResponse<PhoenixProject>> {
    return this.get<PhoenixProject>(`/projects/${projectid}`);
  }

  /**
   * Delete a project
   */
  async deleteProject(projectid: string): Promise<ApiResponse<ResponseEntity>> {
    return this.delete<ResponseEntity>(`/projects/${projectid}`);
  }

  /**
   * Edit project
   */
  async editProject(projectid: string, body: EditProjectResource): Promise<ApiResponse<ResponseEntity>> {
    return this.patch<ResponseEntity>(`/projects/${projectid}`, body);
  }

  /**
   * Export project
   */
  async exportProject(projectid: string, body: ExportResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/export`, body);
  }

  /**
   * Import product
   */
  async importProduct(projectid: string, body: ImportProductResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/import/product`, body);
  }

  /**
   * Import stock
   */
  async importStock(projectid: string, body: ImportStockResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/import/stock`, body);
  }

  /**
   * Set custom properties
   */
  async setProperties(projectid: string, body: PropertiesResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/properties`, body);
  }

  /**
   * Apply die layout
   */
  async applyDieLayout(projectid: string, body: ApplyDieLayoutResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/apply-die-layout`, body);
  }

  /**
   * Apply mark
   */
  async applyMark(projectid: string, body: ApplyMarkResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/apply-mark`, body);
  }

  /**
   * Get list of products
   */
  async getProducts(projectid: string): Promise<ApiResponse<Product[]>> {
    return this.get<Product[]>(`/projects/${projectid}/products`);
  }

  /**
   * Get product
   */
  async getProduct(projectid: string, productname: string): Promise<ApiResponse<Product>> {
    return this.get<Product>(`/projects/${projectid}/products/${productname}`);
  }

  /**
   * Edit product
   */
  async editProduct(projectid: string, productname: string, body: EditProductResource): Promise<ApiResponse<ResponseEntity>> {
    return this.patch<ResponseEntity>(`/projects/${projectid}/products/${productname}`, body);
  }

  /**
   * Get list of parts
   */
  async getParts(projectid: string, productname: string): Promise<ApiResponse<Part[]>> {
    return this.get<Part[]>(`/projects/${projectid}/products/${productname}/parts`);
  }

  /**
   * Get part
   */
  async getPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Part>> {
    return this.get<Part>(`/projects/${projectid}/products/${productname}/parts/${partindex}`);
  }

  /**
   * Edit part
   */
  async editPart(projectid: string, productname: string, partindex: number, body: EditPartResource): Promise<ApiResponse<ResponseEntity>> {
    return this.patch<ResponseEntity>(`/projects/${projectid}/products/${productname}/parts/${partindex}`, body);
  }

  /**
   * Get list of flat parts
   */
  async getFlatParts(projectid: string, productname: string): Promise<ApiResponse<FlatPart[]>> {
    return this.get<FlatPart[]>(`/projects/${projectid}/products/${productname}/flat-parts`);
  }

  /**
   * Get flat part
   */
  async getFlatPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<FlatPart>> {
    return this.get<FlatPart>(`/projects/${projectid}/products/${productname}/flat-parts/${partindex}`);
  }

  /**
   * Get list of flats
   */
  async getFlats(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Flat[]>> {
    return this.get<Flat[]>(`/projects/${projectid}/products/${productname}/flat-parts/${partindex}/flats`);
  }

  /**
   * Get flat
   */
  async getFlat(projectid: string, productname: string, partindex: number, flatindex: number): Promise<ApiResponse<Flat>> {
    return this.get<Flat>(`/projects/${projectid}/products/${productname}/flat-parts/${partindex}/flats/${flatindex}`);
  }

  /**
   * Get list of bound parts
   */
  async getBoundParts(projectid: string, productname: string): Promise<ApiResponse<BoundPart[]>> {
    return this.get<BoundPart[]>(`/projects/${projectid}/products/${productname}/bound-parts`);
  }

  /**
   * Get bound part
   */
  async getBoundPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<BoundPart>> {
    return this.get<BoundPart>(`/projects/${projectid}/products/${productname}/bound-parts/${partindex}`);
  }

  /**
   * Get list of bound signatures
   */
  async getBoundSignatures(projectid: string, productname: string, partindex: number): Promise<ApiResponse<BoundSignature[]>> {
    return this.get<BoundSignature[]>(`/projects/${projectid}/products/${productname}/bound-parts/${partindex}/signatures`);
  }

  /**
   * Get bound signature
   */
  async getBoundSignature(projectid: string, productname: string, partindex: number, signatureindex: number): Promise<ApiResponse<BoundSignature>> {
    return this.get<BoundSignature>(`/projects/${projectid}/products/${productname}/bound-parts/${partindex}/signatures/${signatureindex}`);
  }

  /**
   * Get list of folded parts
   */
  async getFoldedParts(projectid: string, productname: string): Promise<ApiResponse<FoldedPart[]>> {
    return this.get<FoldedPart[]>(`/projects/${projectid}/products/${productname}/folded-parts`);
  }

  /**
   * Get folded part
   */
  async getFoldedPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<FoldedPart>> {
    return this.get<FoldedPart>(`/projects/${projectid}/products/${productname}/folded-parts/${partindex}`);
  }

  /**
   * Get list of folded signatures
   */
  async getFoldedSignatures(projectid: string, productname: string, partindex: number): Promise<ApiResponse<FoldedSignature[]>> {
    return this.get<FoldedSignature[]>(`/projects/${projectid}/products/${productname}/folded-parts/${partindex}/signatures`);
  }

  /**
   * Get folded signature
   */
  async getFoldedSignature(projectid: string, productname: string, partindex: number, signatureindex: number): Promise<ApiResponse<FoldedSignature>> {
    return this.get<FoldedSignature>(`/projects/${projectid}/products/${productname}/folded-parts/${partindex}/signatures/${signatureindex}`);
  }

  /**
   * Get list of tiled parts
   */
  async getTiledParts(projectid: string, productname: string): Promise<ApiResponse<TiledPart[]>> {
    return this.get<TiledPart[]>(`/projects/${projectid}/products/${productname}/tiled-parts`);
  }

  /**
   * Get tiled part
   */
  async getTiledPart(projectid: string, productname: string, partindex: number): Promise<ApiResponse<TiledPart>> {
    return this.get<TiledPart>(`/projects/${projectid}/products/${productname}/tiled-parts/${partindex}`);
  }

  /**
   * Get list of tiles
   */
  async getTiles(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Tile[]>> {
    return this.get<Tile[]>(`/projects/${projectid}/products/${productname}/tiled-parts/${partindex}/tiles`);
  }

  /**
   * Get tile
   */
  async getTile(projectid: string, productname: string, partindex: number, tileindex: number): Promise<ApiResponse<Tile>> {
    return this.get<Tile>(`/projects/${projectid}/products/${productname}/tiled-parts/${partindex}/tiles/${tileindex}`);
  }

  /**
   * Get list of components
   */
  async getComponents(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Component[]>> {
    return this.get<Component[]>(`/projects/${projectid}/products/${productname}/parts/${partindex}/components`);
  }

  /**
   * Get component
   */
  async getComponent(projectid: string, productname: string, partindex: number, componentindex: number): Promise<ApiResponse<Component>> {
    return this.get<Component>(`/projects/${projectid}/products/${productname}/parts/${partindex}/components/${componentindex}`);
  }

  /**
   * Edit component
   */
  async editComponent(projectid: string, productname: string, partindex: number, componentindex: number, body: EditComponentResource): Promise<ApiResponse<ResponseEntity>> {
    return this.patch<ResponseEntity>(`/projects/${projectid}/products/${productname}/parts/${partindex}/components/${componentindex}`, body);
  }

  /**
   * Get list of pages
   */
  async getPages(projectid: string, productname: string, partindex: number): Promise<ApiResponse<Page[]>> {
    return this.get<Page[]>(`/projects/${projectid}/products/${productname}/parts/${partindex}/pages`);
  }

  /**
   * Get list of stocks
   */
  async getStocks(projectid: string): Promise<ApiResponse<Stock[]>> {
    return this.get<Stock[]>(`/projects/${projectid}/stocks`);
  }

  /**
   * Get list of marks
   */
  async getMarks(projectid: string): Promise<ApiResponse<Mark[]>> {
    return this.get<Mark[]>(`/projects/${projectid}/marks`);
  }

  /**
   * Get list of die designs
   */
  async getDieDesigns(projectid: string): Promise<ApiResponse<DieDesign[]>> {
    return this.get<DieDesign[]>(`/projects/${projectid}/die-designs`);
  }

  /**
   * Get list of die layouts
   */
  async getDieLayouts(projectid: string): Promise<ApiResponse<DieLayout[]>> {
    return this.get<DieLayout[]>(`/projects/${projectid}/die-layouts`);
  }

  /**
   * Get list of layouts
   */
  async getLayouts(projectid: string): Promise<ApiResponse<Layout[]>> {
    return this.get<Layout[]>(`/projects/${projectid}/layouts`);
  }

  /**
   * Get list of things
   */
  async getThings(projectid: string): Promise<ApiResponse<Thing[]>> {
    return this.get<Thing[]>(`/projects/${projectid}/things`);
  }

  /**
   * Plan
   */
  async plan(projectid: string, thingname: string, body: PlanResource): Promise<ApiResponse<ResponseEntity>> {
    return this.post<ResponseEntity>(`/projects/${projectid}/things/${thingname}/plan`, body);
  }
}