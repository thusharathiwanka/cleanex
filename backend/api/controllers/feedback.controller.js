const Feedback = require("../models/feedback.model");

const saveFeedback = async (req, res) => {
  if (req.body) {
    const { topic, description, createdAt, givenBy, category } = req.body;

    // * user inputs validation
    if (!topic || !description || !email || !givenBy || !category) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    try {
      // * save package
      const newFeedback = new Feedback({
        topic,
        description,
        createdAt,
        givenAt,
        category,
      });
      await newFeedback.save();

      // * sending as saved
      return res.status(201).json({ feedback: feedback });
    } catch (err) {
      console.log(err);
      console.error(err.message);
      return res.status(500).send();
    }
  }

  return res.status(400).send();
};

/**
 * use to get total of the feedbacks
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedbacksTotal = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    return res.status(200).json({ total: feedbacks.length });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send();
  }
};

module.exports = { getFeedbacksTotal, saveFeedback };
