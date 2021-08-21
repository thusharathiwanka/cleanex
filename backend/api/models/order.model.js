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

	Address: { type: String },
	DelivaryId: { type: mongoose.Schema.Types.ObjectId, ref: "moderators" },
	CustomerId: [{ type: mongoose.Schema.Types.ObjectId, ref: "customers" }],
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
