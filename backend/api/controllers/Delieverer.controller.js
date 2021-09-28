const order = require("../models/order.model");
const Moderator = require("../models/moderator.model");
const getAllOrders = async (req, res) => {
	try {
		const orders = await order.find({
			DelivaryId: { $nin: [req.body.userId] },
			DelivaryStatus: "pending",
		});
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getOrdersDeliverer = async (req, res) => {
	try {
		const orderList = await order.find({
			DelivaryId: { $nin: [req.body.userId] },
			PickupStatus: "pending",
		});
		res.status(200).json(orderList);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const getALLOrderbyDelivererPick = async (req, res) => {
	try {
		const AcceptedOrders = await order.find({
			delieverId: req.body.userId,
			PickupStatus: "pending",
		});
		res.status(200).json(AcceptedOrders);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
const getALLOrderbyDelivererDeliver = async (req, res) => {
	try {
		const AcceptedOrders = await order.find({
			delieverId: req.body.userId,
			DelivaryStatus: "pending",
		});
		res.status(200).json(AcceptedOrders);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const updateDeliveryStatus = async (req, res) => {
	const order = await order.findByIdAndUpdate(req.body.id, {});
};

const getDelivererprofileDetails = async (req, res) => {
	try {
		const moderator = await Moderator.findById(req.body.userId);
		res.status(200).json({ deliverer: moderator });
	} catch (error) {
		res.status(404).json({ message: error.message });
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

module.exports = {
	getAllOrders,
	getOrdersDeliverer,
	getALLOrderbyDelivererPick,
	getALLOrderbyDelivererDeliver,
	getDelivererprofileDetails,
	updateDeliverID,
};
