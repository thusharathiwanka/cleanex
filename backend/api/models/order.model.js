const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	items: [{ type: Object }],
	WashingStatus: { type: String },
	PickupStatus: { type: String },
	Total: { type: String },
	DelivaryStatus: { type: String },
	Hours: { type: String },
	StartDate: { type: String },
	StartTime: { type: String },
	CompletedDate: { type: String },
	CompletedTime: { type: String },
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
