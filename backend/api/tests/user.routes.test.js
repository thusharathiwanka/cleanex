const axios = require("axios");

describe("GET @ /users/userProfile endpoint", () => {
  it("should return an user  details array and return status code 200", async () => {
    try {
      const res = axios.get("http://localhost:5000/users");

      expect(res.status).toEqual(200);
      expect(typeof res.data).toEqual("Object");
    } catch (error) {
      console.log(error);
    }
  });
});
