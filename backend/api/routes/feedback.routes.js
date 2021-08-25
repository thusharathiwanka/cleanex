const router = require("express").Router();
const {
	getFeedbacksTotal,
	saveFeedback,
	getFeedbacks,
	getFeedback,
	deleteFeedback,
} = require("../controllers/feedback.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.get("/", verifyAdminAuth, getFeedbacks);
router.post("/", verifyCustomerAuth, saveFeedback);
router.get("/total", verifyAdminAuth, getFeedbacksTotal);
router.get("/:id", verifyAdminAuth, getFeedback);
router.delete("/:id", verifyAdminAuth, deleteFeedback);

module.exports = router;
