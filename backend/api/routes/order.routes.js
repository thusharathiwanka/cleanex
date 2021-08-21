const router = require("express").Router();

const {
	getPendingOrders,
	getProcessingOrders,
	getCompletedOrders,
	addOrder,
	getAllOrders,
	updateDeliveryStatus,
	updateToProcess,
	updateToCompleate,
} = require("../controllers/order.crontroller");

router.post("/addOrder", addOrder);
router.post("/orders", getAllOrders);
router.post("updateOrder", updateDeliveryStatus);

router.get("/getPendingOrders", getPendingOrders);
router.get("/getProcessingOrders", getProcessingOrders);
router.get("/getCompletedOrders", getCompletedOrders);
router.patch("/updateToProcess", updateToProcess);
router.patch("/updateToCompleate", updateToCompleate);

module.exports = router;
