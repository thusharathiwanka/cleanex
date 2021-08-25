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
  deleteUserProfile,
} = require("../controllers/customer.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.get("/", verifyAdminAuth, getCustomers);
router.get("/total", verifyAdminAuth, getCustomersTotal);
router.post("/register", saveCustomer);
router.post("/login", loginCustomer);
router.get("/userProfile", verifyCustomerAuth, getUserprofileDetails);
router.delete("/deleteProfile", verifyCustomerAuth, deleteUserProfile);
router.put("/updateUserProfile", verifyCustomerAuth, updateUserProfile);
router.get("/:id", verifyAdminAuth, getUserDetails);
router.delete("/:id", deleteCustomer);

module.exports = router;
