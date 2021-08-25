const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  topic: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  category: { type: String, require: true, trim: true },
  givenBy: { type: mongoose.Schema.Types.ObjectId, ref: "customers" },
});

const Feedback = mongoose.model("feedbacks", FeedbackSchema);

module.exports = Feedback;
