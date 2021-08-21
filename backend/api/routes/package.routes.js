const router = require("express").Router();
const { savePackage } = require("../controllers/package.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.post("/", verifyAdminAuth, savePackage);

module.exports = router;
