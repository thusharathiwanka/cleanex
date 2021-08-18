const router = require("express").Router();
const {
	saveCustomer,
	getCustomers,
	loginCustomer,
} = require("../controllers/customer.controller");
const { logoutUser } = require("../controllers/common.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");

router.get("/", verifyAdminAuth, getCustomers);
router.get("/logout", logoutUser);
router.post("/register", saveCustomer);
router.post("/login", loginCustomer);

module.exports = router;
