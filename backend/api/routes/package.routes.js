const router = require("express").Router();
const {
	savePackage,
	deletePackage,
	updatePackage,
	getPackages,
	getPackagesTotal,
} = require("../controllers/package.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");

router.get("/", getPackages);
router.get("/total", getPackagesTotal);
router.post("/", verifyAdminAuth, savePackage);
router.delete("/:id", verifyAdminAuth, deletePackage);
router.patch("/:id", verifyAdminAuth, updatePackage);

module.exports = router;
