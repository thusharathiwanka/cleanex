const order = require("../models/order.model");

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

module.exports = { addOrder, getAllOrders, updateDeliveryStatus };
