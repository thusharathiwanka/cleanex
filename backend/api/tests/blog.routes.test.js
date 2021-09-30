const axios = require('axios');

describe("GET @ /allblogs endpoint", () => {
	it("should return all blogs as a array and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/blog/getall");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
