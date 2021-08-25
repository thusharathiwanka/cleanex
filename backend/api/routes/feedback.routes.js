const router = require("express").Router();
const { getFeedbacksTotal } = require("../controllers/feedback.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.post("/feedback", verifyCustomerAuth, saveFeedback);
router.get("/total", verifyAdminAuth, getFeedbacksTotal);

module.exports = router;
