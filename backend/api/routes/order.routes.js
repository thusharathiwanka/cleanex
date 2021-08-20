const router = require("express").Router();
const {
	addOrder,
} = require("../controllers/order.crontroller/order.controller");

router.post("addOrder", addOrder);

module.exports = router;
