const Feedback = require("../models/feedback.model");

const saveFeedback = async (req, res) => {
	if (req.body) {
		const { topic, description, createdAt, category, userId } = req.body;

		// * user inputs validation
		if (!topic || !description || !createdAt || !category) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save feedback
			const newFeedback = new Feedback({
				topic,
				description,
				createdAt,
				givenBy: userId,
				category,
			});

			// console.log(newFeedback);
			await newFeedback.save();
			// console.log(req.body.userId);

			// * sending as saved
			return res.status(201).send("Feedback successfully sent");
		} catch (err) {
			// console.log(err);
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * use to get feedback based on id
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedback = async (req, res) => {
	if (req.params.id) {
		try {
			const feedback = await Feedback.findById(req.params.id);
			return res.status(200).json({ feedback: feedback });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
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

/**
 * use to get all feedbacks
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getFeedbacks = async (req, res) => {
	try {
		const feedbacks = await Feedback.find().populate("givenBy", "email");
		return res.status(200).json({ feedbacks: feedbacks });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

/**
 * use to delete the specific feedback
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const deleteFeedback = async (req, res) => {
	if (req.params.id) {
		try {
			await Feedback.findByIdAndDelete(req.params.id);
			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
};

module.exports = {
	getFeedbacksTotal,
	saveFeedback,
	getFeedbacks,
	getFeedback,
	deleteFeedback,
};
