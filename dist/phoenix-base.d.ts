import * as http from "http";
import * as https from "https";
import { PhoenixConfig } from "./types";
interface RequestOptions {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    path: string;
    body?: any;
    contentType?: string;
}
export declare abstract class PhoenixBase {
    protected config: PhoenixConfig;
    protected httpModule: typeof http | typeof https;
    constructor(config: PhoenixConfig);
    protected makeRequest<T>(options: RequestOptions): Promise<T>;
    protected createMultipartFormData(file: Buffer, filename: string, boundary: string): string;
    healthCheck(): Promise<boolean>;
    setHeaders(headers: Record<string, string>): void;
    setTimeout(timeout: number): void;
    getConfig(): PhoenixConfig;
    protected handleApiError(error: any): never;
}
export {};
//# sourceMappingURL=phoenix-base.d.ts.map