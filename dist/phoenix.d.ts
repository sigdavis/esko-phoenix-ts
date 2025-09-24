import { PhoenixConfig } from "./types";
import { PhoenixJobsAPI } from "./phoenix-jobs";
import { PhoenixProjectsAPI } from "./phoenix-projects";
import { PhoenixLibrariesAPI } from "./phoenix-libraries";
import { PhoenixPresetsAPI } from "./phoenix-presets";
export declare class Phoenix {
    jobs: PhoenixJobsAPI;
    projects: PhoenixProjectsAPI;
    libraries: PhoenixLibrariesAPI;
    presets: PhoenixPresetsAPI;
    constructor(config: PhoenixConfig);
    healthCheck(): Promise<boolean>;
    setHeaders(headers: Record<string, string>): void;
    setTimeout(timeout: number): void;
    getConfig(): PhoenixConfig;
}
export * from "./types";
export { PhoenixJobsAPI } from "./phoenix-jobs";
export { PhoenixProjectsAPI } from "./phoenix-projects";
export { PhoenixLibrariesAPI } from "./phoenix-libraries";
export { PhoenixPresetsAPI } from "./phoenix-presets";
//# sourceMappingURL=phoenix.d.ts.map