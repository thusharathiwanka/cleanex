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
} = require("../controllers/order.crontroller");

const { verifyDelivererAuth } = require("../middleware/delivererAuth");

router.post("/addOrder", addOrder);
router.get("/orders", getAllOrders);

router.put("/updateOrder", updateDeliveryStatus);
router.put("/deliverer/:id", verifyDelivererAuth, updateDeliverID);


router.get("/getPendingOrders", getPendingOrders);
router.get("/getProcessingOrders", getProcessingOrders);
router.get("/getCompletedOrders", getCompletedOrders);
router.patch("/updateToProcess/:id", updateToProcess);
router.patch("/updateToCompleate/:id", updateToCompleate);
router.get("/:id", getByIdOrder);
module.exports = router;
