/**
 * Basic usage examples for Phoenix API client
 */

import { Phoenix } from "../src";

async function basicExample() {
	// Initialize client
	const client = new Phoenix({
		baseUrl: "https://your-server.com/phoenix",
		headers: {
			Authorization: "Bearer your-api-token",
		},
	});

	try {
		// Get all projects
		console.log("Fetching all projects...");
		const projectsResponse = await client.jobs.getJobs();
		const projects = projectsResponse.data;
		console.log(`Found ${projects.length} projects`);

		// Create a new project
		console.log("Creating new project...");
		const newProjectResponse = await client.jobs.createJob({
			name: "Sample Project",
			description: "Created via API",
			customer: "ACME Corp",
			due: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Due in 7 days
		});
		console.log("Project created:", newProjectResponse.data);

		// Get project details
		const projectId = newProjectResponse.data.id;
		const projectResponse = await client.jobs.getJob(projectId);
		const project = projectResponse.data;
		console.log("Project details:", project);

		// Import a product
		await client.jobs.importProductXml(projectId, {
			path: "/path/to/product.xml",
			preset: "standard",
		});

		// Get products in project
		const productsResponse = await client.jobs.getProducts(projectId);
		const products = productsResponse.data;
		console.log(`Project contains ${products.length} products`);

		// Work with libraries
		const stocksResponse = await client.libraries.getStocks();
		const stocks = stocksResponse.data;
		console.log(`Library contains ${stocks.length} stocks`);

		// Create a new stock
		await client.libraries.createStock({
			name: "Custom Stock",
			type: "Sheet",
			width: { value: 12, unit: "in" },
			height: { value: 18, unit: "in" },
			weight: { value: 80, unit: "lb" },
		});
	} catch (error) {
		console.error("Error:", error);
	}
}

// Run the example
if (require.main === module) {
	basicExample();
}
