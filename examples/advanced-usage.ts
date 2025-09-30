/**
 * Advanced usage examples
 */

import { Phoenix } from "../src";
import { batchCreateProducts, retry, processInChunks, calculateProductArea, validateProductDimensions } from "../src/utils";

async function advancedExample() {
	const client = new Phoenix({
		baseUrl: process.env.PHOENIX_API_URL || "https://server.com/phoenix",
		headers: {
			Authorization: `Bearer ${process.env.PHOENIX_API_TOKEN}`,
		},
		timeout: 30000,
		retries: 3,
	});

	// Example 1: Batch operations with error handling
	async function batchImportProducts(projectId: string) {
		const products = [
			{ name: "Product 1", quantity: 100 },
			{ name: "Product 2", quantity: 200 },
			{ name: "Product 3", quantity: 150 },
		];

		console.log("Starting batch import...");
		const results = await batchCreateProducts(client, projectId, products as any);

		console.log(`Successfully imported: ${results.successCount}`);
		console.log(`Failed: ${results.failureCount}`);

		if (results.failed.length > 0) {
			console.error("Failed products:", results.failed);
		}
	}

	// Example 2: Working with layouts and planning
	async function planProduction(projectId: string, layoutName: string) {
		// Get layout details
		const layoutResponse = await client.jobs.getLayout(projectId, layoutName);
		const layout = layoutResponse.data;

		// Get available machines
		const thingsResponse = await client.jobs.getThings(projectId);
		const machines = thingsResponse.data;

		// Plan production on first available press
		const press = machines.find((m) => m.type.includes("Press"));
		if (press) {
			await client.jobs.plan(projectId, press.name, {
				profile: "standard",
				quantity: 1000,
				priority: 1,
				"due-date": new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
				constraints: {
					"max-waste-percent": 15,
					stocks: [layout.stock],
				},
			});
			console.log(`Production planned on ${press.name}`);
		}
	}

	// Example 3: Complex workflow with validation
	async function complexWorkflow(projectId: string) {
		try {
			// Step 1: Validate project
			const projectResponse = await client.jobs.getJob(projectId);
			const project = projectResponse.data;

			if (!project.customer) {
				throw new Error("Project must have a customer");
			}

			// Step 2: Get and validate products
			const productsResponse = await client.jobs.getProducts(projectId);
			const products = productsResponse.data;

			for (const product of products) {
				if (!validateProductDimensions(product)) {
					console.warn(`Product ${product.name} has invalid dimensions`);
					continue;
				}

				const area = calculateProductArea(product);
				console.log(`Product ${product.name} area: ${area?.value} ${area?.unit}`);
			}

			// Step 3: Process in chunks to avoid overloading
			await processInChunks(
				products,
				async (product) => {
					// Process each product
					const partsResponse = await client.jobs.getParts(projectId, product.name);
					console.log(`Product ${product.name} has ${partsResponse.data.length} parts`);
				},
				5 // Process 5 at a time
			);

			// Step 4: Generate reports
			await client.jobs.runReports(projectId, {
				profile: "detailed",
				reports: ["production", "cost", "waste"],
			});

			// Step 5: Export results
			await retry(
				() =>
					client.jobs.exportXmlReport(projectId, {
						path: `/exports/${projectId}_report.xml`,
						preset: "comprehensive",
					}),
				3,
				2000
			);
		} catch (error) {
			console.error("Workflow failed:", error);
			throw error;
		}
	}

	// Example 4: Event-driven processing
	class ProjectProcessor {
		constructor(private client: Phoenix) {}

		async processNewProject(projectId: string) {
			console.log(`Processing project ${projectId}`);

			// Set up project properties
			await this.client.jobs.setCustomProperties(projectId, {
				properties: [
					{ name: "processor_version", value: "1.0", type: "String" },
					{ name: "processed_date", value: new Date().toISOString(), type: "Date" },
					{ name: "auto_process", value: true, type: "Boolean" },
				],
			});

			// Apply standard marks
			await this.client.jobs.applyMark(projectId, {
				name: "Standard_Marks",
				side: "Front",
			});

			// Apply die layout if available
			const dieLayoutsResponse = await this.client.jobs.getDieLayouts(projectId);
			if (dieLayoutsResponse.data.length > 0) {
				await this.client.jobs.applyDieLayout(projectId, {
					name: dieLayoutsResponse.data[0].name,
					side: "Front",
				});
			}

			console.log(`Project ${projectId} processed successfully`);
		}
	}

	// Run examples
	try {
		const projectId = "example-project-id";

		await batchImportProducts(projectId);
		await planProduction(projectId, "Layout1");
		await complexWorkflow(projectId);

		const processor = new ProjectProcessor(client);
		await processor.processNewProject(projectId);
	} catch (error) {
		console.error("Example failed:", error);
	}
}

// Run if called directly
if (require.main === module) {
	advancedExample();
}
