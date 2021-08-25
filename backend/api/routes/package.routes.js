const router = require("express").Router();
const upload = require("../middleware/multer.config");
const {
	savePackage,
	deletePackage,
	updatePackage,
	getPackages,
	getPackage,
	getPackagesTotal,
	savePackageImage,
	getPackagesBasedOnStatus,
} = require("../controllers/package.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.get("/", getPackages);
router.get("/total", verifyAdminAuth, getPackagesTotal);
router.get("/package/:id", verifyAdminAuth, getPackage);
router.get("/:status", verifyCustomerAuth, getPackagesBasedOnStatus);
router.get("/search/:query", getPackagesBasedOnStatus);
router.post("/", verifyAdminAuth, savePackage);
router.post("/image/upload", upload.single("src"), savePackageImage);
router.patch("/:id", verifyAdminAuth, updatePackage);
router.delete("/:id", verifyAdminAuth, deletePackage);

module.exports = router;
