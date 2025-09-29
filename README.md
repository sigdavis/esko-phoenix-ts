# Phoenix API TypeScript Client

A fully-typed TypeScript client for the Phoenix API v25.03.

## Installation

\`\`\`bash
npm install phoenix-api-client
\`\`\`

## Usage

### Basic Setup

\`\`\`typescript
import { PhoenixClient } from 'phoenix-api-client';

const client = new PhoenixClient({
  baseUrl: 'https://your-server.com/phoenix',
  headers: {
    'Authorization': 'Bearer your-token'
  }
});
\`\`\`

### Jobs API Examples

\`\`\`typescript
// Get all projects
const projects = await client.jobs.getJobs();

// Create a new project
const newProject = await client.jobs.createJob({
  name: 'My Project',
  // ... other properties
});

// Get a specific job
const job = await client.jobs.getJob('job-id');
\`\`\`

### Projects API Examples

\`\`\`typescript
// Get project details
const project = await client.projects.getProject('project-id');

// Get products in a project
const products = await client.projects.getProducts('project-id');

// Import a product
await client.projects.importProduct('project-id', {
  path: '/path/to/product.xml'
});
\`\`\`

### Libraries API Examples

\`\`\`typescript
// Get all stocks
const stocks = await client.libraries.getStocks();

// Create a new stock
const stock = await client.libraries.createStock({
  name: 'My Stock',
  width: { value: 100, unit: 'mm' },
  height: { value: 200, unit: 'mm' }
});
\`\`\`

### Presets API Examples

\`\`\`typescript
// Get export presets
const presets = await client.presets.getExportPresets();

// Get import presets
const importPresets = await client.presets.getImportPresets();
\`\`\`

## API Coverage

- **252** non-deprecated endpoints implemented
- **4** API modules: Jobs, Projects, Libraries, Presets
- Full TypeScript type definitions for all operations
- Comprehensive request/response typing

## Configuration Options

\`\`\`typescript
interface ClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}
\`\`\`

## Error Handling

\`\`\`typescript
try {
  const result = await client.jobs.getJob('invalid-id');
} catch (error) {
  if (error.status === 404) {
    console.error('Job not found');
  } else if (error.status === 503) {
    console.error('Service at maximum concurrency');
  }
}
\`\`\`

## License

MIT
\`\`\`

## src/index.ts
```typescript
/**
 * Phoenix API TypeScript Client
 * Version: 25.03
 */

// Main client
export { PhoenixClient } from './client/PhoenixClient';
export { BaseApiClient } from './client/BaseApiClient';

// API Endpoints
export { JobsApi } from './endpoints/JobsApi';
export { ProjectsApi } from './endpoints/ProjectsApi';
export { LibrariesApi } from './endpoints/LibrariesApi';
export { PresetsApi } from './endpoints/PresetsApi';

// Types
export * from './types';

// Client configuration
export type { ClientConfig, ApiResponse, ApiError } from './client/types';