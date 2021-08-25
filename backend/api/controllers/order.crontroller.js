const order = require("../models/order.model");

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
		await order.findByIdAndUpdate(req.params.id, {
			WashingStatus: "completed",
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
		res.status(200);
	} catch (error) {
		res.status(400);
		console.log(error);
	}
};

const getAllOrders = async (req, res) => {
	try {
		const orders = await order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getByIdOrder = async (req, res) => {
	try {
		const newOrder = await order.findById(req.params.id);
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateDeliveryStatus = async (req, res) => {
	const newOrder = await order.findByIdAndUpdate(req.body.id, {});
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
	addOrder,
	getAllOrders,
	getByIdOrder,
	updateDeliveryStatus,
	updateDeliverID,
	getPendingOrders,
	getProcessingOrders,
	getCompletedOrders,
	updateToProcess,
	updateToCompleate,
};
