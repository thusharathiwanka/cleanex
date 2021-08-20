const router = require("express").Router();

const {getPendingOrders, getProcessingOrders, getCompletedOrders, updateToProcess, updateToCompleate, getCompletedOrders } = require('../controllers/order.crontroller');

router.get("/getPendOrders",getPendingOrders)
router.get("/getProcOrders",getProcessingOrders)
router.get("/getcompOrders",getCompletedOrders)
router.post("/addHourse", getCompletedOrders)
router.patch("/updateToProcess", updateToProcess)
router.patch("/updateToCompleate", updateToCompleate)

module.exports = router;