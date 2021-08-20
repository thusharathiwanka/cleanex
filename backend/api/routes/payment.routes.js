const router = require("express").Router();

const {
	addPayment,
	getAllPayment,
} = require("../controllers/payment.controller");

router.get("/get", getAllPayment);
router.post("/post", addPayment);

module.exports = router;
