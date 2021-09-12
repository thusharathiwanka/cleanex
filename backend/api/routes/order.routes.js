const router = require("express").Router();

const {
	getPendingOrders,
	getProcessingOrders,
	getCompletedOrders,
	addOrder,
	getAllOrders,
	updateDeliveryStatus,
	updateDeliverID,
	getByIdOrder,
	updateToProcess,
	updateToCompleate,
	getTotalOrdersBasedOnOrderStatusAndDay,
	getTotalOrdersBasedOnDeliveryStatusAndDay,
} = require("../controllers/order.crontroller");

const { verifyDelivererAuth } = require("../middleware/delivererAuth");

router.post("/addOrder", addOrder);
router.get("/orders", getAllOrders);

router.put("/updateOrder", updateDeliveryStatus);
router.put("/deliverer/:id", verifyDelivererAuth, updateDeliverID);
router.get("/:id", getByIdOrder);

router.get("/getPendingOrders", getPendingOrders);
router.get("/getProcessingOrders", getProcessingOrders);
router.get("/getCompletedOrders", getCompletedOrders);
router.get("/delivery/:status/:day", getTotalOrdersBasedOnDeliveryStatusAndDay);
router.get("/:status/:day", getTotalOrdersBasedOnOrderStatusAndDay);
router.patch("/updateToProcess/:id", updateToProcess);
router.patch("/updateToCompleate/:id", updateToCompleate);

module.exports = router;
