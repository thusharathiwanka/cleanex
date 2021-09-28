const mongoose = require("mongoose");
const moderators = require("./moderator.model");

const orderSchema = new mongoose.Schema({
	items: [{ type: Object }],
	WashingStatus: { type: String, required: true, default: "pending" },
	PickupStatus: { type: String, required: true, default: "pending" },
	Total: { type: String },
	DelivaryStatus: { type: String, required: true, default: "pending" },
	Hours: { type: String },
	StartDate: { type: String },

	StartTime: { type: String },
	CompletedDate: { type: String },
	CompletedTime: { type: String },

	CustomerName: { type: String },
	Address: { type: String },
	DelivaryId: [
		{
			type: mongoose.Schema.Types.ObjectId,

			ref: "moderators",
		},
	],
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
