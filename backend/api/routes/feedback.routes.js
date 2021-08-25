const router = require("express").Router();
const { getFeedbacksTotal } = require("../controllers/feedback.controller");
const { verifyAdminAuth } = require("../middleware/adminAuth");

router.get("/total", verifyAdminAuth, getFeedbacksTotal);

module.exports = router;
