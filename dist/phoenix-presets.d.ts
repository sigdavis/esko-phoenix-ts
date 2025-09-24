import { PhoenixBase } from "./phoenix-base";
import { ResponseEntity, PresetEntity, ImpositionAiProfileEntity } from "./types";
export declare class PhoenixPresetsAPI extends PhoenixBase {
    getImpositionAiProfiles(): Promise<ImpositionAiProfileEntity[]>;
    addImpositionAiProfile(profile: ImpositionAiProfileEntity): Promise<ResponseEntity>;
    getImpositionAiProfile(profileId: string): Promise<ImpositionAiProfileEntity>;
    editImpositionAiProfile(profileId: string, profile: ImpositionAiProfileEntity): Promise<ResponseEntity>;
    deleteImpositionAiProfile(profileId: string): Promise<ResponseEntity>;
    getProductCsvImportPresets(): Promise<PresetEntity[]>;
    getStockCsvPresets(): Promise<PresetEntity[]>;
    getDdes2DieLayoutImportPresets(): Promise<PresetEntity[]>;
    getDdes3DieLayoutImportPresets(): Promise<PresetEntity[]>;
    getDxfDieLayoutImportPresets(): Promise<PresetEntity[]>;
    getMfgDieImportPresets(): Promise<PresetEntity[]>;
    getPdfDieLayoutImportPresets(): Promise<PresetEntity[]>;
    getHpJdfExportPresets(): Promise<PresetEntity[]>;
    getJdfExportPresets(): Promise<PresetEntity[]>;
    getCuttingJdfExportPresets(): Promise<PresetEntity[]>;
    getJsonReportPresets(): Promise<PresetEntity[]>;
    getCsvReportPresets(): Promise<PresetEntity[]>;
    getXmlReportPresets(): Promise<PresetEntity[]>;
    getTilingReportPresets(): Promise<PresetEntity[]>;
    getPdfLayoutExportPresets(): Promise<PresetEntity[]>;
    getDxfLayoutExportPresets(): Promise<PresetEntity[]>;
    getMfgLayoutExportPresets(): Promise<PresetEntity[]>;
    getZccLayoutExportPresets(): Promise<PresetEntity[]>;
    getCff2LayoutExportPresets(): Promise<PresetEntity[]>;
    getCoverSheetPresets(): Promise<PresetEntity[]>;
    getImposePresets(): Promise<PresetEntity[]>;
    getPopulatePresets(): Promise<PresetEntity[]>;
    getStepRepeatPresets(): Promise<PresetEntity[]>;
    getPlanPresets(): Promise<PresetEntity[]>;
    getOptimizePresets(): Promise<PresetEntity[]>;
}
//# sourceMappingURL=phoenix-presets.d.ts.map