import request from "supertest";
import { app } from "../index.js";
// console.log("out of funciont ", cafes);

describe("Testing API REST cafes", () => {
	test("Testing code '200' in GET /cafes and get productos", async () => {
		const { status, body: cafes } = await request(app).get("/cafes").send();
		expect(cafes).toBeInstanceOf(Array);
		expect(status).toBe(200);
	});

	test("Testing code '404 in DELETE /cafes/:id", async () => {
		const jwt = "token";
		const deleteCafeId = 5;
		const { status } = await request(app)
			.delete(`/cafes/${deleteCafeId}`)
			.set("Authorization", jwt)
			.send();
		expect(status).toBe(404);
	});

	test("Testing code '201' in POST /cafes", async () => {
		const id = Math.floor(Math.random() * 999);
		const newCafe = { id, nombre: "Latte" };
		const { status, body: cafes } = await request(app)
			.post("/cafes")
			.send(newCafe);
		console.log("New cafe add ", cafes);
		expect(cafes).toContainEqual(newCafe);
		expect(status).toBe(201);
	});

	test("Testing code '400' in PUT /cafes/:id", async () => {
		const id = 1;
		const updateCafe = {
			id: 2,
			nombre: "Cortado",
		};
		const { status, body: cafes } = await request(app)
			.put(`/cafes/${id}`)
			.send(updateCafe);
		console.log("Testing code '400' in PUT ", cafes);
		expect(status).toBe(400);
	});

	// CODIGO UNICAMENTE DE PRUEBA - MODIFICA NOMBRE DEL CAFE EN ID 1
	// test("Testing code '200' in PUT /cafes/:id", async () => {
	// 	const id = 1;
	// 	const updateCafe = {
	// 		id: 1,
	// 		nombre: "Moka",
	// 	};
	// 	const { status, body: cafes } = await request(app)
	// 		.put(`/cafes/${id}`)
	// 		.send(updateCafe);
	// 	expect(cafes).toContainEqual(updateCafe);
	// 	expect(status).toBe(200);
	// 	console.log("Update cafe", cafes);
	// });
});
