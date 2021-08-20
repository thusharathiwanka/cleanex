const order = require("../models/order.model");

// const order = require('../models/order.model')

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
			WashingStatus: "Completed",
		});
		res.status(200).json({ message: "order successfully approved" });
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

const getAllOrders = async () => {
	try {
		const orders = await order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateDeliveryStatus = async (req, res) => {
	const order = await order.findByIdAndUpdate(req.body.id, {});
};
module.exports = {
	addOrder,
	getAllOrders,
	updateDeliveryStatus,
	//   getPendingOrders,
	//   getProcessingOrders,
	//   getCompletedOrders,
	updateToProcess,
	updateToCompleate,
};
