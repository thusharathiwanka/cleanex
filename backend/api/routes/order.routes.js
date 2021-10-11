const router = require("express").Router();

const {

  getPendingOrders,
  getProcessingOrders,
  getCompletedOrders,
  addOrder,
  getAllOrders,
  getOrders,
  updateDeliveryStatus,
  getDelivererprofileDetails,
  getALLOrderbyDelivererDeliver,
  getALLOrderbyDelivererPick,
  updatePickupStatus,
  updatePickdelivery,
  getOrdersDeliverer,
  GetGeneratepdf,
  getTotalOrdersBasedOnDeliveryStatusAndDay,
  getTotalOrdersBasedOnOrderStatusAndDay,
  updateDeliverID,
  deleteOrderbyID,
  getByIdOrder,
  updateToProcess,
  updateToCompleate,

} = require("../controllers/order.crontroller");

const { verifyDelivererAuth } = require("../middleware/delivererAuth");
const { verifyCustomerAuth } = require("../middleware/customerAuth");

router.post("/addOrder", addOrder);
router.get("/orders", verifyDelivererAuth, getAllOrders);
router.post("/allorders", verifyCustomerAuth, getOrders);
router.put("/deliverer/:id", verifyDelivererAuth, updateDeliverID);
router.put("/updateOrder", updateDeliveryStatus);
router.get(
	"/deleiverer/details",
	verifyDelivererAuth,
	getDelivererprofileDetails
);
router.get(
	"/deliverer/GetGeneratepdf/:Address",
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
router.get("/:status/:day", getTotalOrdersBasedOnOrderStatusAndDay);
router.patch("/updateToProcess/:id", updateToProcess);
router.patch("/updateToCompleate/:id", updateToCompleate);
router.get("/:id", getByIdOrder);
router.delete("/delete/:id", deleteOrderbyID);

module.exports = router;
