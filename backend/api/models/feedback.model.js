const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  topic: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true },
  givenAt: { type: String, require: true, trim: true },
  Category: { type: String, require: true, trim: true },
});

const Feedback = mongoose.model("feedbacks", FeedbackSchema);

module.exports = Feedback;
