const router = require("express").Router();
const {
	saveCustomer,
	getCustomers,
	loginCustomer,
} = require("../controllers/customer.controller");

router.get("/", getCustomers);
router.post("/register", saveCustomer);
router.post("/login", loginCustomer);

module.exports = router;
