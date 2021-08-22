const router = require("express").Router();
const upload = require("../middleware/multer.config");
const {
	savePackage,
	deletePackage,
	updatePackage,
	getPackages,
	getPackagesTotal,
	savePackageImage,
	getPackagesBasedOnStatus,
} = require("../controllers/package.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");

router.get("/", getPackages);
router.get("/total", getPackagesTotal);
router.get("/:status", getPackagesBasedOnStatus);
router.post("/", verifyAdminAuth, savePackage);
router.post("/image/upload", upload.single("src"), savePackageImage);
router.delete("/:id", verifyAdminAuth, deletePackage);
router.patch("/:id", verifyAdminAuth, updatePackage);

module.exports = router;
