const router = require("express").Router();
const {
	getFeedbacksTotal,
	saveFeedback,
	getFeedbacks,
} = require("../controllers/feedback.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.get("/", verifyAdminAuth, getFeedbacks);
router.post("/", verifyCustomerAuth, saveFeedback);
router.get("/total", verifyAdminAuth, getFeedbacksTotal);

module.exports = router;
