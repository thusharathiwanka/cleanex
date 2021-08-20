const router = require("express").Router();
const {
	saveCustomer,
	getCustomers,
	loginCustomer,
	deleteCustomer,
} = require("../controllers/customer.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");

router.get("/", verifyAdminAuth, getCustomers);
router.post("/register", saveCustomer);
router.post("/login", loginCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
