const router = require("express").Router();
const {
	savePackage,
	deletePackage,
	updatePackage,
} = require("../controllers/package.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.post("/", verifyAdminAuth, savePackage);
router.delete("/:id", verifyAdminAuth, deletePackage);
router.patch("/:id", verifyAdminAuth, updatePackage);

module.exports = router;
