const order = require("../models/order.model");
const Moderator = require("../models/moderator.model");

const updateToProcess = async (req, res) => {
	try {
		await order.findByIdAndUpdate(req.params.id, {
			WashingStatus: "processing",
			Hours: req.body.hours,
		});
		res.status(200).json({ message: "order successfully approved" });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const updateToCompleate = async (req, res) => {
	try {
		const date = new Date();

		await order.findByIdAndUpdate(req.params.id, {
			WashingStatus: "completed",
			CompletedDate: date.toDateString(),
			CompletedTime: date.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		});
		res.status(200).json({ message: "order successfully approved" });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const getPendingOrders = async (req, res) => {
	try {
		const pendingOrdes = await order.find({
			WashingStatus: "pending",
		});
		res.status(200).json({ pendingOrdes: pendingOrdes });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const getProcessingOrders = async (req, res) => {
	try {
		const processingOrdes = await order.find({
			WashingStatus: "processing",
		});
		res.status(200).json({ processingOrdes: processingOrdes });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const getCompletedOrders = async (req, res) => {
	try {
		const completedOrdes = await order.find({
			WashingStatus: "completed",
		});
		res.status(200).json({ completedOrdes: completedOrdes });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const addOrder = async (req, res) => {
	try {
		const newOrder = new order(req.body);
		await newOrder.save();
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(400);
		console.log(error);
	}
};

const getAllOrders = async (req, res) => {
	try {
		const orders = await order.find({
			DelivaryId: { $size: 0 },
			PickupStatus: "pickedup",
		});
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
// getuser order
const getOrders = async (req, res) => {
	try {
		const userName = req.body.CustomerName;
		const orders = await order.find({ CustomerName: userName });

		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getOrdersDeliverer = async (req, res) => {
	try {
		const orderList = await order.find({
			DelivaryId: { $size: 0 },
			DelivaryStatus: "pending",
		});
		res.status(200).json(orderList);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const getALLOrderbyDelivererPick = async (req, res) => {
	try {
		const AcceptedOrders = await order.find({
			DelivaryId: req.body.userId,

			DelivaryStatus: "pending",
		});
		res.status(200).json(AcceptedOrders);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
const getALLOrderbyDelivererDeliver = async (req, res) => {
	try {
		const AcceptedOrders = await order.find({
			DelivaryId: req.body.userId,
			PickupStatus: "pickedup",
		});
		res.status(200).json(AcceptedOrders);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
const getByIdOrder = async (req, res) => {
	try {
		const Order = await order.findById(req.params.id);
		res.status(200).json(Order);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};


const updateDeliveryStatus = async (req, res) => {
	try {
		const orderdelivery = await order.findByIdAndUpdate(req.params.id, {
			DelivaryStatus: "delivered",
		});
		res.status(200).json(orderdelivery);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const updatePickupStatus = async (req, res) => {
	try {
		const orderPick = await order.findByIdAndUpdate(req.params.id, {
			PickupStatus: "pickedup",
		});
		res.status(200).json(orderPick);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const updatePickdelivery = async (req, res) => {
	try {
		const orderid = await order.findByIdAndUpdate(req.params.id, {
			$pull: { DelivaryId: req.body.id },
		});
		res.status(200).json(orderid);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const GetGeneratepdf = async (req, res) => {
	try {
		const reportdetails = await order.find({
			DelivaryStatus: "delivered",
			Address: req.params.Address,
			DelivaryId: req.body.userId,
		});

		res.status(200).json(reportdetails);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
const getDelivererprofileDetails = async (req, res) => {
	try {
		const moderator = await Moderator.findById(req.body.userId);
		res.status(200).json({ deliverer: moderator });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
const deleteOrderbyID = async (req, res) => {
	if (req.params) {
		try {
			const deleteOrder = await order.findByIdAndDelete(req.params.id);
			if (!deleteOrder) res.status(404).send("No item found");

			res.status(200).send();
		} catch (error) {
			response.status(500).send(error);
		}
	}
};

const updateDeliverID = async (req, res) => {
	try {
		const deliverer = await order.findByIdAndUpdate(req.params.id, {
			DelivaryId: req.body.userId,
		});
		res.status(202).json(deliverer);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getTotalOrdersBasedOnOrderStatusAndDay = async (req, res) => {
	if (!req.params) {
		return res.status(400).send();
	}

	if (!req.params.status && req.params.day) {
		return res.status(400).send();
	}

	try {
		const orders = await order.find({ WashingStatus: req.params.status });

		if (orders) {
			const filteredOrders = orders.filter((order) => {
				return order.StartDate.substring(0, 3) === req.params.day;
			});
			return res.status(200).json({ total: filteredOrders.length });
		}
	} catch (err) {
		return res.status(404).send();
	}
};

const getTotalOrdersBasedOnDeliveryStatusAndDay = async (req, res) => {
	if (!req.params) {
		return res.status(400).send();
	}

	if (!req.params.status && req.params.day) {
		return res.status(400).send();
	}

	try {
		const orders = await order.find({ DelivaryStatus: req.params.status });

		if (orders) {
			const filteredOrders = orders.filter((order) => {
				return order.StartDate.substring(0, 3) === req.params.day;
			});
			return res.status(200).json({ total: filteredOrders.length });
		}
	} catch (err) {
		return res.status(404).send();
	}
};

module.exports = {

  addOrder,
  getAllOrders,
  getByIdOrder,
  getOrders,
  updateDeliveryStatus,
  getDelivererprofileDetails,
  getALLOrderbyDelivererPick,
  getALLOrderbyDelivererDeliver,
  updatePickdelivery,
  updatePickupStatus,
  updateDeliverID,
  deleteOrderbyID,
  getOrdersDeliverer,
  GetGeneratepdf,
  getPendingOrders,
  getProcessingOrders,
  getCompletedOrders,
  updateToProcess,
  updateToCompleate,
  getTotalOrdersBasedOnOrderStatusAndDay,
  getTotalOrdersBasedOnDeliveryStatusAndDay,

};
