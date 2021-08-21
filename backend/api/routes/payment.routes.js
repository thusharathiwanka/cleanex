const router = require("express").Router();

const {
	addPayment,
	getAllPayment,
	getPaymentTotal
} = require("../controllers/payment.controller");

router.get("/get", getAllPayment);
router.get("/gettotal", getPaymentTotal);
router.post("/post", addPayment);

module.exports = router;
