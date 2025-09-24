# Phoenix API - TypeScript Wrapper

A comprehensive TypeScript wrapper for Esko Phoenix's API, providing type-safe access to Phoenix's automation capabilities.

## **🚀 Features**

- **Complete API Coverage**: Full support for Phoenix projects, jobs, layouts, and optimization
- **Type Safety**: Comprehensive TypeScript types for all API endpoints and responses
- **Easy Integration**: Simple, intuitive API designed for automation workflows
- **Promise-Based**: Modern async/await support throughout
- **File Handling**: Built-in support for file uploads and multipart requests
- **Error Handling**: Structured error responses with detailed messaging

## **📦 Installation**

```bash
npm install phoenix-api
```

## **🛠️ Quick Start**

```typescript
import { PhoenixAPI } from 'phoenix-api';

// Initialize the API client
const phoenix = new PhoenixAPI({
  host: 'localhost',
  port: 9090,
  timeout: 30000
});

// Create a new project
const project = await phoenix.projects.createProject({
  id: 'my-project',
  name: 'Sample Project',
  client: 'Acme Corp'
});

// Get project layouts
const layouts = await phoenix.projects.getProjectLayouts(project.id);
console.log('Project layouts:', layouts);
```

## **🏗️ API Structure**

The library is organized into logical modules matching Phoenix's API structure:

### **Projects API** (`phoenix.projects`)
- **Project Management**: Create, update, delete, and query projects
- **File Operations**: Upload, download, and manage project files  
- **Layout Operations**: Access and manipulate project layouts
- **Optimization**: Run autosnap, step-repeat, planning, and optimization
- **Export Functions**: Generate PDFs, DXF, reports, and other outputs

### **Jobs API** (`phoenix.jobs`)
- **Job Management**: Full CRUD operations for Phoenix jobs
- **Product Management**: Handle job products and configurations
- **Layout Management**: Access job layouts and results
- **File Operations**: Job-specific file handling
- **Export Operations**: Job-based export functionality

### **Resources API** (`phoenix.resources`)
- **Resource Discovery**: Browse and search available resources
- **Asset Management**: Handle stocks, grades, and materials
- **Template Operations**: Manage job and project templates

### **Presets API** (`phoenix.presets`)
- **Preset Management**: Access and configure Phoenix presets
- **Export Presets**: Manage export configuration presets

## **🔧 Configuration**

```typescript
import { PhoenixAPI, PhoenixConfig } from 'phoenix-api';

const config: PhoenixConfig = {
  host: 'phoenix-server',
  port: 9090,
  basePath: '/api/v1',          // Optional: API base path
  timeout: 30000,               // Optional: Request timeout in ms
  headers: {                    // Optional: Custom headers
    'Authorization': 'Bearer token',
    'X-Custom-Header': 'value'
  }
};

const phoenix = new PhoenixAPI(config);
```

## **📚 Usage Examples**

### **Creating and Managing Projects**

```typescript
// Create a new project
const newProject = await phoenix.projects.createProject({
  id: 'packaging-project-001',
  name: 'Packaging Design Project',
  client: 'Consumer Goods Co.',
  contact: 'john.doe@company.com',
  notes: 'High-priority packaging redesign'
});

// Open an existing Phoenix file
const file = await fs.readFile('./design.cf2');
const openedProject = await phoenix.projects.openProject(file, 'design.cf2');

// Get project details
const project = await phoenix.projects.getProject('packaging-project-001');
```

### **Working with Products and Layouts**

```typescript
// Get project products with thumbnails
const products = await phoenix.projects.getProjectProducts(
  'packaging-project-001',
  true,      // Generate thumbnails
  200,       // Thumbnail width
  150,       // Thumbnail height
  'preview'  // Render mode
);

// Access project layouts
const layouts = await phoenix.projects.getProjectLayouts('packaging-project-001');

// Get layout optimization results
const results = await phoenix.projects.getProjectOptimizeResults(
  'packaging-project-001',
  0,         // Layout index
  true,      // Include thumbnails
  300,       // Thumbnail width
  200        // Thumbnail height
);
```

### **Running Optimization Operations**

```typescript
// Run autosnap optimization
await phoenix.projects.autosnapProject('packaging-project-001', {
  idref: 1,
  ink: 'Cyan',
  layer: 'DieLine'
});

// Execute step-and-repeat operation
await phoenix.projects.stepRepeatProject('packaging-project-001', {
  idref: 1,
  spacing: { x: '5mm', y: '5mm' },
  rotation: { allowed: 'Orthogonal' }
});

// Run full optimization
await phoenix.projects.optimizeProject('packaging-project-001', {
  idref: 1,
  algorithm: 'genetic',
  'stop-minutes': 10
});
```

### **File Operations**

```typescript
// Upload a file to the project
const fileBuffer = await fs.readFile('./artwork.pdf');
await phoenix.projects.uploadProjectFile(
  'packaging-project-001', 
  fileBuffer, 
  'artwork.pdf'
);

// Get all project files
const files = await phoenix.projects.getProjectFiles('packaging-project-001');

// Delete a project file
await phoenix.projects.deleteProjectFile('packaging-project-001', 'old-file.pdf');
```

### **Export Operations**

```typescript
// Export project layout as PDF
await phoenix.projects.exportProjectPdfLayout('packaging-project-001', {
  idref: 1,
  filename: 'layout-export.pdf',
  path: '/exports/',
  preset: 'high-quality-pdf',
  'layout-index': 0,
  'include-marks': true,
  'include-dielines': true
});

// Export cover sheet
await phoenix.projects.exportProjectCoverSheet('packaging-project-001', {
  idref: 1,
  filename: 'coversheet.pdf',
  path: '/reports/',
  preset: 'standard-coversheet'
});

// Export optimization report
await phoenix.projects.exportProjectXmlReport('packaging-project-001', {
  idref: 1,
  filename: 'optimization-report.xml',
  path: '/reports/',
  'include-layouts': true,
  'include-products': true
});
```

### **Working with Jobs**

```typescript
// Create a job from template
const job = await phoenix.jobs.createJob({
  id: 'job-12345',
  name: 'Rush Order - Labels',
  client: 'Fast Food Chain',
  'template-path': '/templates/label-template.cf2'
});

// Set job materials
await phoenix.jobs.setJobSheet('job-12345', {
  idref: 1,
  stock: 'Gloss Coated',
  grade: '250gsm',
  name: 'Premium Label Stock'
});

// Run job planning
await phoenix.jobs.planJob('job-12345', {
  idref: 1,
  algorithm: 'best-fit',
  'stop-minutes': 5
});
```

## **🎯 Advanced Features**

### **Custom Script Execution**

```typescript
// Run custom Phoenix scripts
await phoenix.projects.runProjectScript('packaging-project-001', {
  idref: 1,
  script: 'optimize_for_minimal_waste.js',
  name: 'Waste Optimization',
  parameters: [
    { name: 'waste_threshold', type: 'Double', value: 0.05 },
    { name: 'priority', type: 'String', value: 'speed' }
  ]
});
```

### **Batch Operations**

```typescript
// Copy project for variations
await phoenix.projects.copyProject('original-project', {
  'new-id': 'project-variation-a',
  'new-name': 'Project Variation A',
  'copy-files': true
});

// Batch process multiple projects
const projectIds = ['proj-1', 'proj-2', 'proj-3'];
const results = await Promise.all(
  projectIds.map(id => phoenix.projects.optimizeProject(id, {
    idref: 1,
    algorithm: 'genetic',
    'stop-minutes': 15
  }))
);
```

## **📖 API Reference**

### **Core Classes**

- **`PhoenixAPI`**: Main API client class
- **`PhoenixProjectsAPI`**: Project management operations
- **`PhoenixJobsAPI`**: Job management operations  
- **`PhoenixResourcesAPI`**: Resource and asset operations
- **`PhoenixPresetsAPI`**: Preset management operations

### **Key Types**

- **`PhoenixProject`**: Project entity with full metadata
- **`PhoenixProductEntity`**: Product configuration and properties
- **`LayoutEntity`**: Layout information and geometry
- **`ResponseEntity`**: Standard API response wrapper
- **`PropertyObject`**: Phoenix property system representation

## **🔍 Error Handling**

The library provides structured error handling with detailed Phoenix API responses:

```typescript
try {
  const project = await phoenix.projects.getProject('non-existent-project');
} catch (err