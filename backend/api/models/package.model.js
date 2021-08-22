const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	price: { type: Number, required: true, trim: true },
	src: { type: String, required: true, trim: true },
	status: { type: String, required: true, trim: true, default: "active" },
	createdAt: { type: Date, required: true, default: Date.now() },
	updatedAt: { type: Date, required: true, default: Date.now() },
});

const Package = mongoose.model("packages", PackageSchema);

module.exports = Package;
