const router = require("express").Router();
const {
  getFeedbacksTotal,
  saveFeedback,
} = require("../controllers/feedback.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.post("/", verifyCustomerAuth, saveFeedback);
router.get("/total", verifyAdminAuth, getFeedbacksTotal);

module.exports = router;
