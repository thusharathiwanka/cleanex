const router = require("express").Router();
const {
  saveCustomer,
  getCustomers,
  loginCustomer,
  deleteCustomer,
  getUserDetails,
  getCustomersTotal,
  getUserprofileDetails,
  updateUserProfile,
} = require("../controllers/customer.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.get("/", verifyAdminAuth, getCustomers);
router.get("/total", verifyAdminAuth, getCustomersTotal);
router.post("/register", saveCustomer);
router.post("/login", loginCustomer);
router.get("/userProfile", verifyCustomerAuth, getUserprofileDetails);
router.get("/:id", verifyAdminAuth, getUserDetails);
router.delete("/:id", deleteCustomer);
router.put("/updateUserProfile/:id", verifyCustomerAuth, updateUserProfile);

module.exports = router;
