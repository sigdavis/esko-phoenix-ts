"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoenixBase = void 0;
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const url_1 = require("url");
class PhoenixBase {
    constructor(config) {
        this.config = {
            basePath: "/phoenix",
            timeout: 30000,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            ...config,
        };
        // Choose HTTP or HTTPS based on port and protocol
        const isHttps = config.port === 443 || config.host.startsWith("https://");
        this.httpModule = isHttps ? https : http;
    }
    async makeRequest(options) {
        return new Promise((resolve, reject) => {
            const url = new url_1.URL(`${this.config.host.startsWith("http") ? this.config.host : `http://${this.config.host}`}:${this.config.port}`);
            const fullPath = `${this.config.basePath}${options.path}`;
            const requestOptions = {
                hostname: url.hostname,
                port: this.config.port,
                path: fullPath,
                method: options.method,
                headers: {
                    ...this.config.headers,
                    ...(options.contentType && { "Content-Type": options.contentType }),
                },
                timeout: this.config.timeout,
            };
            const req = this.httpModule.request(requestOptions, (res) => {
                let data = "";
                res.on("data", (chunk) => {
                    data += chunk;
                });
                res.on("end", () => {
                    try {
                        const response = JSON.parse(data);
                        resolve(response);
                    }
                    catch (error) {
                        reject(new Error(`Failed to parse response: ${error}`));
                    }
                });
            });
            req.on("error", (error) => {
                reject(error);
            });
            req.on("timeout", () => {
                req.destroy();
                reject(new Error("Request timeout"));
            });
            if (options.body) {
                const bodyString = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
                req.write(bodyString);
            }
            req.end();
        });
    }
    createMultipartFormData(file, filename, boundary) {
        const formData = [
            `--${boundary}`,
            `Content-Disposition: form-data; name="file"; filename="${filename}"`,
            "Content-Type: application/octet-stream",
            "",
            file.toString("binary"),
            `--${boundary}--`,
        ].join("\r\n");
        return formData;
    }
    // Utility methods
    async healthCheck() {
        try {
            await this.makeRequest({
                method: "GET",
                path: "/projects",
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    setHeaders(headers) {
        this.config.headers = { ...this.config.headers, ...headers };
    }
    setTimeout(timeout) {
        this.config.timeout = timeout;
    }
    getConfig() {
        return { ...this.config };
    }
    handleApiError(error) {
        if (error.response?.data) {
            throw new Error(`Phoenix API Error: ${error.response.data.message || error.message}`);
        }
        throw new Error(`Phoenix API Error: ${error.message}`);
    }
}
exports.PhoenixBase = PhoenixBase;
//# sourceMappingURL=phoenix-base.js.map