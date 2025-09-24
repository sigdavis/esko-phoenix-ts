# Phoenix API Client

A complete TypeScript client for the Esko Phoenix API, providing type-safe access to all Phoenix automation capabilities.

## ✨ Features

- **Complete API Coverage**: Full implementation of ALL Phoenix API endpoints
- **Type Safety**: Comprehensive TypeScript types for all operations
- **Clean Architecture**: Modular design with separate API modules
- **Easy to Use**: Simple, intuitive API following Phoenix patterns
- **Well Documented**: Extensive documentation and examples
- **Error Handling**: Robust error handling with detailed messages

## 📦 Installation

```bash
npm install phoenix-api-client
```

## 🚀 Quick Start

```typescript
import { Phoenix } from 'phoenix-api-client';

// Initialize the client
const phoenix = new Phoenix({
  host: 'localhost',
  port: 9090,
  timeout: 30000
});

// Check API availability
const isAvailable = await phoenix.healthCheck();
console.log('Phoenix API available:', isAvailable);

// Create a new project
await phoenix.projects.createProject({
  id: 'my-project',
  name: 'Sample Project',
  client: 'Acme Corp'
});
```

## 📚 API Modules

### Projects API (`phoenix.projects`)

Complete project management including:

- **Project Operations**: Create, read, update, delete projects
- **Product Management**: All product types (flat, bound, folded, tiled, part)
- **Layout Management**: Full layout control and manipulation
- **Component Operations**: Place, move, rotate components
- **Optimization**: Impose, populate, optimize, autosnap, step-repeat, plan
- **File Management**: Upload/download project files
- **Export Functions**: PDF, DXF, XML, JDF exports
- **Import Functions**: CSV imports for products

### Libraries API (`phoenix.libraries`)

Complete resource library management:

- **Material Resources**: Stocks, grades, coatings, substrates
- **Equipment**: Presses, processes, modes
- **Design Elements**: Marks, scripts, tilings, die designs
- **Templates**: Project and layout templates

### Presets API (`phoenix.presets`)

Full preset management for all operations:

- **Export Presets**: PDF, DXF, XML, JDF, Zund, CFF2
- **Import Presets**: Product CSV, Stock CSV, Die formats
- **Tool Presets**: Step-and-repeat, optimization, planning, imposition
- **Profile Presets**: AI profiles for various operations

## 🔧 Configuration

```typescript
const phoenix = new Phoenix({
  host: 'phoenix-server',      // Required: Phoenix server hostname
  port: 9090,                   // Optional: Default 9090
  basePath: '/api/v1',          // Optional: API base path
  timeout: 30000,               // Optional: Request timeout in ms
  headers: {                    // Optional: Custom headers
    'Authorization': 'Bearer token',
    'X-Custom-Header': 'value'
  }
});
```

## 📖 Usage Examples

### Project Management

```typescript
// Get all projects
const projects = await phoenix.projects.getProjects();

// Create a flat product
await phoenix.projects.createProjectFlatProduct('project-id', {
  name: 'Business Card',
  width: '85mm',
  height: '55mm',
  quantity: 1000,
  pages: 2,
  'bleed-top': '3mm',
  'bleed-bottom': '3mm',
  'bleed-left': '3mm',
  'bleed-right': '3mm'
});

// Run optimization
await phoenix.projects.optimizeProject('project-id', {
  idref: 1,
  products: ['product-1', 'product-2'],
  'stop-minutes': 10
});

// Export to PDF
await phoenix.projects.exportProjectPdf('project-id', {
  idref: 1,
  filename: 'output.pdf',
  path: '/exports/',
  preset: 'high-quality',
  'include-marks': true
});
```

### Library Management

```typescript
// Get all stocks
const stocks = await phoenix.libraries.getStocks();

// Create a new press
await phoenix.libraries.createPress({
  name: 'Heidelberg XL 106',
  type: 'Sheetfed',
  manufacturer: 'Heidelberg',
  'max-sheet-width': '1060mm',
  'max-sheet-height': '750mm'
});

// Import stock CSV
await phoenix.libraries.importStockCsv({
  preset: 'standard-import',
  'csv-file': '/imports/stocks.csv'
});
```

### Working with Presets

```typescript
// Get PDF export presets
const pdfPresets = await phoenix.presets.getExportPdfPresets();

// Get optimization profiles
const profiles = await phoenix.presets.getOptimizationProfiles();

// Get all presets of a specific type
const impositionPresets = await phoenix.presets.getPresetsByType('imposition');
```

## 🔄 File Operations

```typescript
// Upload a file
const fileBuffer = await fs.readFile('./artwork.pdf');
await phoenix.projects.uploadProjectFile('project-id', fileBuffer, 'artwork.pdf');

// Get uploaded files
const files = await phoenix.projects.getProjectUploadedFiles('project-id');

// Download a file
const content = await phoenix.projects.downloadProjectUploadedFile(
  'project-id',
  'file-id',
  'artwork.pdf'
);
```

## ⚡ Advanced Features

### Dynamic Configuration

```typescript
// Update headers dynamically
phoenix.setHeaders({
  'Authorization': 'Bearer new-token'
});

// Update timeout
phoenix.setTimeout(60000);

// Create new instance with different config
const newClient = phoenix.withConfig({
  host: 'backup-server',
  timeout: 45000
});
```

### Error Handling

```typescript
try {
  await phoenix.projects.getProject('non-existent');
} catch (error) {
  if (error.status === 404) {
    console.log('Project not found');
  } else {
    console.error('API Error:', error.message);
  }
}
```

## 📝 API Structure

```
phoenix-api-client/
├── src/
│   ├── index.ts           # Main entry point
│   ├── phoenix.ts          # Main Phoenix client
│   ├── phoenix-base.ts     # Base HTTP client
│   ├── phoenix-projects.ts # Projects API module
│   ├── phoenix-libraries.ts # Libraries API module
│   ├── phoenix-presets.ts  # Presets API module
│   └── types.ts            # TypeScript type definitions
├── package.json
├── tsconfig.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [Phoenix Documentation](https://www.esko.com/phoenix)
- [API Reference](https://docs.phoenix.api)
- [Support](https://support.esko.com)

## 🏷️ Version

Current Version: 2.0.0

### Changelog

- **2.0.0**: Complete rewrite with ALL API endpoints
- **1.0.0**: Initial release with basic functionality