# Phoenix API TypeScript Client

A fully-typed, production-ready TypeScript client for the **Phoenix API v25.03** - Esko's imposition and workflow automation platform.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)

## Overview

The Phoenix API Client provides a comprehensive, type-safe interface for interacting with Esko's Phoenix imposition system. It enables programmatic control of project management, product creation, layout optimization, and workflow automation through a modern, promise-based API.

### Key Features

- **252+ Non-Deprecated Endpoints** - Complete coverage of the Phoenix API surface
- **Full TypeScript Support** - 100% type-safe with detailed JSDoc documentation
- **Four API Modules** - Jobs, Projects, Libraries, and Presets management
- **Modern Architecture** - Built on `fetch` with async/await patterns
- **Automatic Retry Logic** - Configurable retry mechanism for transient failures
- **Comprehensive Type Definitions** - All request/response models fully typed
- **Utility Functions** - Helper functions for common operations and batch processing
- **Zero External Dependencies** - Pure TypeScript implementation

## Installation

```bash
npm install phoenix-api
```

## Quick Start

```typescript
import { Phoenix } from 'phoenix-api';

// Initialize the client
const client = new Phoenix({
  baseUrl: 'https://your-server.com/phoenix',
  headers: {
    'Authorization': 'Bearer your-api-token'
  },
  timeout: 30000,
  retries: 3
});

// Get all projects
const projects = await client.projects.getProjects();
console.log(`Found ${projects.data.length} projects`);

// Create a new project
const result = await client.projects.createProject({
  name: 'Magazine Q4 2025',
  customer: 'Publisher Inc',
  order: 'ORD-2025-1234',
  due: '2025-12-31T00:00:00Z'
});
```

## API Modules

### 1. Projects API (Recommended)

The modern, unified API for project management and workflow automation. **Use this for new integrations**.

```typescript
// Project Management
await client.projects.getProjects();
await client.projects.createProject({ name: 'New Project' });
await client.projects.openProject({ path: '/path/to/project.xml' });
await client.projects.getProject('project-id');
await client.projects.editProject('project-id', { name: 'Updated Name' });
await client.projects.closeProject('project-id');
await client.projects.saveProject('project-id');

// Product Management
await client.projects.getProducts('project-id');
await client.projects.getProduct('project-id', 'product-name');
await client.projects.editProduct('project-id', 'product-name', { quantity: 10000 });
await client.projects.deleteProduct('project-id', 'product-name');

// Part Management
await client.projects.getParts('project-id', 'product-name');
await client.projects.getPart('project-id', 'product-name', 0);
await client.projects.editPart('project-id', 'product-name', 0, { quantity: 5000 });

// Component Management
await client.projects.getComponents('project-id', 'product-name', 0);
await client.projects.getComponent('project-id', 'product-name', 0, 0);
await client.projects.editComponent('project-id', 'product-name', 0, 0, { position: { x: 10, y: 20 } });

// Page Management
await client.projects.getPages('project-id', 'product-name', 0);
await client.projects.getPage('project-id', 'product-name', 0, 0);
await client.projects.getPageColors('project-id', 'product-name', 0, 0);

// Import Operations
await client.projects.importProduct('project-id', { path: '/path/to/product.pdf', preset: 'Default' });
await client.projects.importStock('project-id', { path: '/path/to/stock.xml' });

// Export Operations
await client.projects.export('project-id', { 
  path: '/export/output.xml',
  preset: 'Phoenix XML Export'
});

// Die Layout Operations
await client.projects.applyDieLayout('project-id', { 
  'die-layout': 'Standard 8-up',
  products: ['Product 1', 'Product 2']
});

// Planning & Optimization
await client.projects.plan('project-id', 'Press-1', { 
  profile: 'Optimize Waste',
  quantity: 25000
});

// Resource Access
await client.projects.getStocks('project-id');
await client.projects.getMarks('project-id');
await client.projects.getDieDesigns('project-id');
await client.projects.getDieLayouts('project-id');
await client.projects.getLayouts('project-id');
await client.projects.getThings('project-id');
```

### 2. Jobs API (Legacy)

Maintained for backward compatibility. **New integrations should use Projects API instead**.

```typescript
// Legacy job operations (same interface as Projects API)
await client.jobs.getJobs();
await client.jobs.createJob({ name: 'Legacy Job' });
await client.jobs.getJob('job-id');
// ... (supports all operations from Projects API)
```

### 3. Libraries API

Manage shared library resources across projects.

```typescript
// Stock Management
await client.libraries.getStocks();
await client.libraries.createStock({
  name: 'Glossy 300gsm',
  type: 'Sheet',
  width: { value: 700, unit: 'mm' },
  height: { value: 1000, unit: 'mm' },
  'stock-weight': { value: 300, unit: 'gsm' }
});
await client.libraries.getStock('stock-name');
await client.libraries.updateStock('stock-name', { /* updates */ });
await client.libraries.deleteStock('stock-name');

// Grade Management
await client.libraries.getGrades();
await client.libraries.createGrade({ name: 'Premium Coated', description: 'High quality coated stock' });
await client.libraries.getGrade('grade-name');
await client.libraries.updateGrade('grade-name', { /* updates */ });
await client.libraries.deleteGrade('grade-name');

// Coating Management
await client.libraries.getCoatings();
await client.libraries.createCoating({ name: 'UV Gloss', type: 'UV' });

// Profile Management
await client.libraries.getProfiles();
await client.libraries.createProfile({ name: 'High Quality Print', /* config */ });

// Die Design Management
await client.libraries.getDieDesigns();
await client.libraries.createDieDesign({ name: 'Box Die', /* paths */ });
await client.libraries.getDieDesign('die-design-name');
await client.libraries.updateDieDesign('die-design-name', { /* updates */ });

// Die Layout Management
await client.libraries.getDieLayouts();
await client.libraries.createDieLayout({ name: '8-up Layout', /* config */ });

// Mark Management
await client.libraries.getMarks();
await client.libraries.createMark({ name: 'Registration Mark', type: 'Registration' });

// Process Management
await client.libraries.getProcesses();
await client.libraries.createProcess({ name: 'Digital Print', /* settings */ });

// Machine Management
await client.libraries.getMachines();
await client.libraries.createMachine({ name: 'HP Indigo 12000', /* capabilities */ });

// Screen Ruling Management
await client.libraries.getScreenrulings();
await client.libraries.createScreenruling({ name: '175 LPI', value: 175, unit: 'lpi' });

// Spot Color Management
await client.libraries.getSpotColors();
await client.libraries.createSpotColor({ 
  name: 'Pantone 185C', 
  lab: { l: 50, a: 70, b: 50 } 
});

// Tool Type Management
await client.libraries.getToolTypes();
await client.libraries.createToolType({ 
  name: 'Die Cut 2pt',
  process: { name: 'Die Cutting' },
  width: { value: 2, unit: 'pt' }
});

// Equipment Management
await client.libraries.getThings();
await client.libraries.getThing('equipment-name');
```

### 4. Presets API

Access preset configurations for various operations.

```typescript
// Export Presets
await client.presets.getExportPresets();
await client.presets.getPhoenixXmlExportPresets();
await client.presets.getJdfExportPresets();
await client.presets.getXmlReportPresets();
await client.presets.getCsvReportPresets();

// Import Presets
await client.presets.getImportPresets();
await client.presets.getPhoenixXmlImportPresets();
await client.presets.getJdfImportPresets();
await client.presets.getCsvImportPresets();

// Tool Presets
await client.presets.getDieLayoutPresets();
await client.presets.getStepAndRepeatPresets();

// Profile Presets
await client.presets.getProfilePresets();
await client.presets.getOptimizationProfilePresets();
await client.presets.getPlanningProfiles();
await client.presets.getRuleProfiles();
await client.presets.getReportProfiles();
await client.presets.getPlateSetProfiles();
```

## Configuration

### Client Configuration Options

```typescript
interface ClientConfig {
  /** Base URL for the Phoenix API (e.g., 'https://server.com/phoenix') */
  baseUrl: string;
  
  /** Default headers to include in all requests */
  headers?: Record<string, string>;
  
  /** Request timeout in milliseconds (default: 30000) */
  timeout?: number;
  
  /** Number of retry attempts for failed requests (default: 3) */
  retries?: number;
  
  /** Delay between retries in milliseconds (default: 1000) */
  retryDelay?: number;
}
```

### Example Configuration

```typescript
const client = new Phoenix({
  baseUrl: 'https://phoenix-server.company.com/phoenix',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'X-Custom-Header': 'custom-value'
  },
  timeout: 60000,    // 60 seconds
  retries: 5,        // Retry failed requests 5 times
  retryDelay: 2000   // Wait 2 seconds between retries
});
```

## Type Definitions

### Core Types

The client includes comprehensive TypeScript type definitions for all data models:

```typescript
import {
  // Project & Product Types
  PhoenixProject,
  Product,
  Part,
  FlatPart,
  BoundPart,
  FoldedPart,
  TiledPart,
  Component,
  Page,
  
  // Material Types
  Stock,
  Grade,
  Coating,
  
  // Layout Types
  Layout,
  DieDesign,
  DieLayout,
  Mark,
  
  // Equipment Types
  Machine,
  Process,
  Thing,
  
  // Supporting Types
  ScalarValue,
  Size,
  Margins,
  PropertyObject,
  ResponseEntity
} from 'phoenix-api';
```

### Scalar Values

Phoenix uses a scalar value system for measurements:

```typescript
interface ScalarValue {
  value: number;
  unit?: string; // 'mm', 'in', 'pt', 'cm', etc.
}

// Example usage
const width: ScalarValue = { value: 100, unit: 'mm' };
const height: ScalarValue = { value: 4, unit: 'in' };
```

### Response Handling

All API methods return a standardized response format:

```typescript
interface ApiResponse<T> {
  data: T;              // The actual response data
  status: number;       // HTTP status code
  statusText: string;   // HTTP status text
  headers: Record<string, string>;  // Response headers
}

interface ResponseEntity {
  success: boolean;     // Operation success status
  'status-code'?: number;
  errors?: MessageEntity[];
  warnings?: MessageEntity[];
  infos?: MessageEntity[];
  resources?: string[]; // URIs of created/modified resources
}
```

## Error Handling

The client provides detailed error information for failed requests:

```typescript
interface ApiError {
  message: string;      // Error message
  status?: number;      // HTTP status code
  statusText?: string;  // HTTP status text
  data?: any;          // Additional error data
}
```

### Error Handling Examples

```typescript
try {
  const result = await client.projects.getProject('invalid-id');
} catch (error) {
  if (error.status === 404) {
    console.error('Project not found');
  } else if (error.status === 503) {
    console.error('Service at maximum concurrency - try again later');
  } else if (error.status === 400) {
    console.error('Invalid request:', error.data);
  } else {
    console.error('Unexpected error:', error.message);
  }
}
```

### Retry Logic

The client automatically retries failed requests with configurable parameters:

```typescript
// Failed requests are automatically retried up to 'retries' times
// with 'retryDelay' milliseconds between attempts
const client = new Phoenix({
  baseUrl: 'https://server.com/phoenix',
  retries: 3,        // Retry 3 times
  retryDelay: 1000   // Wait 1 second between retries
});
```

## Advanced Usage

### Batch Operations

Use the provided utility functions for batch operations:

```typescript
import { batchCreateProducts, batchDeleteStocks } from 'phoenix-api';

// Batch delete stocks
const result = await batchDeleteStocks(client, [
  'Stock 1',
  'Stock 2',
  'Stock 3'
]);

console.log(`Deleted: ${result.successCount}, Failed: ${result.failureCount}`);
```

### Data Transformations

Utility functions for common data transformations:

```typescript
import { 
  mmToInches, 
  inchesToMm, 
  toPoints,
  calculateProductArea,
  flattenParts,
  groupStocksByType
} from 'phoenix-api';

// Convert measurements
const inchValue = mmToInches({ value: 100, unit: 'mm' });
const mmValue = inchesToMm({ value: 4, unit: 'in' });
const points = toPoints({ value: 1, unit: 'in' }); // 72

// Calculate product area
const area = calculateProductArea(product);

// Flatten nested parts
const allParts = flattenParts(products);

// Group stocks by type
const { sheet, roll } = groupStocksByType(stocks);
```

### Processing in Chunks

Process large datasets efficiently:

```typescript
import { processInChunks } from 'phoenix-api';

const items = [...]; // Large array of items

const results = await processInChunks(
  items,
  async (item) => {
    // Process each item
    return await client.projects.importProduct(projectId, item);
  },
  10 // Process 10 items at a time
);
```

### Custom Headers per Request

Override default headers for specific requests:

```typescript
const result = await client.projects.getProject('project-id', {
  headers: {
    'X-Custom-Request-Header': 'special-value'
  }
});
```

### Request Timeout Override

Override the default timeout for specific requests:

```typescript
// Long-running operation with extended timeout
const result = await client.projects.plan('project-id', 'Press-1', planParams, {
  timeout: 120000  // 2 minutes
});
```

## Project Structure

```
phoenix-api/
├── src/
│   ├── client/           # Core client implementation
│   │   ├── Base.ts      # Base HTTP client with fetch wrapper
│   │   ├── Phoenix.ts   # Main client class
│   │   └── types.ts     # Client configuration types
│   ├── endpoints/        # API endpoint modules
│   │   ├── Jobs.ts      # Jobs API (legacy)
│   │   ├── Projects.ts  # Projects API (modern)
│   │   ├── Libraries.ts # Libraries API
│   │   └── Presets.ts   # Presets API
│   ├── types/           # Type definitions
│   │   ├── models.ts    # Core data models
│   │   ├── requests.ts  # Request body types
│   │   └── index.ts     # Type exports
│   ├── utils/           # Utility functions
│   │   ├── transformers.ts  # Data transformation utilities
│   │   └── batch.ts         # Batch operation utilities
│   └── index.ts         # Main export file
├── dist/                # Compiled JavaScript output
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

## Build & Development

### Prerequisites

- Node.js 14.17 or higher
- npm 6.x or higher

### Installation

```bash
npm install
```

### Build

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` folder.

### Clean Build

```bash
npm run clean    # Remove dist folder
npm run build    # Rebuild from scratch
```

## API Coverage

The client provides complete coverage of the Phoenix API v25.03:

| Module | Endpoints | Description |
|--------|-----------|-------------|
| **Projects API** | 130+ | Modern project management API (recommended) |
| **Jobs API** | 122+ | Legacy project management API (maintained for compatibility) |
| **Libraries API** | 88+ | Library resource management |
| **Presets API** | 18+ | Preset configuration access |
| **Total** | **252+** | Non-deprecated endpoints |

### Supported Operations

- ✅ Project/Job creation, opening, editing, saving, closing
- ✅ Product