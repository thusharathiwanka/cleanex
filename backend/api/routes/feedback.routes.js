const router = require("express").Router();
const { saveFeedback } = require("../controllers/feedback.controller");
// const { verifyAdminAuth } = require("../middleware/adminAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.post("/feedback", verifyCustomerAuth, saveFeedback);

module.exports = router;
