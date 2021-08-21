const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  content: { type: String, require: true, trim: true },
});

const Feedback = mongoose.model("feedbacks", FeedbackSchema);

module.exports = Feedback;
