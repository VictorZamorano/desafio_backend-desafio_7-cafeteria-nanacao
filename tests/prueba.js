const sumar = (a, b) => a + b;

describe("suma", () => {
	test("resultado es 3", () => {
		const n1 = 1;
		const n2 = 2;
		const response = sumar(n1, n2);
		expect(response).toBe(2);
	});
});
