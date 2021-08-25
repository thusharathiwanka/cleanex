const Feedback = require("../models/feedback.model");
// const Feedback = require("../models/feedback.model");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

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

module.exports = { getFeedbacksTotal };
