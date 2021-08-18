const router = require("express").Router();
const {
	saveCustomer,
	getCustomers,
} = require("../controllers/customer.controller");

router.get("/", getCustomers);
router.post("/register", saveCustomer);

module.exports = router;
