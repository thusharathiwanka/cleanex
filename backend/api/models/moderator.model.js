const mongoose = require("mongoose");

const ModeratorSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true },
	username: { type: String, required: true, trim: true },
	password: { type: String, required: true, trim: true },
	type: { type: String, required: true, trim: true },
	mobile: { type: String, required: true, trim: true },
	createdAt: { type: Date, required: true, default: Date.now() },
	updatedAt: { type: Date, required: true, default: Date.now() },
});

const Moderator = mongoose.model("moderators", ModeratorSchema);

module.exports = Moderator;
