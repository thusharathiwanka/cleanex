const router = require("express").Router();

const {
	//   getPendingOrders,
	//   getProcessingOrders,
	//   getCompletedOrders,
	addOrder,
	getAllOrders,
	updateDeliveryStatus,
	updateToProcess,
	updateToCompleate,
} = require("../controllers/order.crontroller");

router.post("/addOrder", addOrder);
router.get("/orders", getAllOrders);
router.put("/updateOrder", updateDeliveryStatus);

// router.get("/getPendOrders", getPendingOrders);
// router.get("/getProcOrders", getProcessingOrders);
// router.get("/getcompOrders", getCompletedOrders);
router.patch("/updateToProcess", updateToProcess);
router.patch("/updateToCompleate", updateToCompleate);

module.exports = router;
