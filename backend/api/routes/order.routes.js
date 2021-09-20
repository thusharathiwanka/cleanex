const router = require("express").Router();

const {
	getPendingOrders,
	getProcessingOrders,
	getCompletedOrders,
	addOrder,
	getAllOrders,
	updateDeliveryStatus,
	getDelivererprofileDetails,
	getALLOrderbyDelivererDeliver,
	getALLOrderbyDelivererPick,
	updatePickupStatus,
	updatePickdelivery,
	getOrdersDeliverer,
	GetGeneratepdf,
	updateDeliverID,
	getByIdOrder,
	updateToProcess,
	updateToCompleate,
	getTotalOrdersBasedOnOrderStatusAndDay,
	getTotalOrdersBasedOnDeliveryStatusAndDay,
} = require("../controllers/order.crontroller");

const { verifyDelivererAuth } = require("../middleware/delivererAuth");

router.post("/addOrder", addOrder);
router.get("/orders", verifyDelivererAuth, getAllOrders);

router.put("/deliverer/:id", verifyDelivererAuth, updateDeliverID);
router.put("/updateOrder", updateDeliveryStatus);
router.get(
	"/deleiverer/details",
	verifyDelivererAuth,
	getDelivererprofileDetails
);
router.get(
	"deliverer/GetGeneratepdf/:startdate/:enddate/:Address",
	verifyDelivererAuth,
	GetGeneratepdf
);
router.put("/deliverer/remove/:id", verifyDelivererAuth, updatePickdelivery);
router.get("/deliverer/neworders", verifyDelivererAuth, getOrdersDeliverer);
router.get(
	"/deliverer/Pickup",
	verifyDelivererAuth,
	getALLOrderbyDelivererPick
);
router.get(
	"/deliverer/deliver",
	verifyDelivererAuth,
	getALLOrderbyDelivererDeliver
);
router.put("/deliverystatus/:id", updateDeliveryStatus);
router.put("/pickupstatus/:id", updatePickupStatus);

router.get("/getPendingOrders", getPendingOrders);
router.get("/getProcessingOrders", getProcessingOrders);
router.get("/getCompletedOrders", getCompletedOrders);
router.get("/delivery/:status/:day", getTotalOrdersBasedOnDeliveryStatusAndDay);
router.get("/:id", getByIdOrder);
router.get("/:status/:day", getTotalOrdersBasedOnOrderStatusAndDay);
router.patch("/updateToProcess/:id", updateToProcess);
router.patch("/updateToCompleate/:id", updateToCompleate);
router.get("/:id", getByIdOrder);

module.exports = router;
