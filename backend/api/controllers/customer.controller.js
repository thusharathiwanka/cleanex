const Customer = require("../models/customer.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * use to register the customers
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const saveCustomer = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { name, email, password, mobile, createdAt, updatedAt } = req.body;

		// * user inputs validation
		if (!name || !email || !password || !mobile) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password should be at least 6 characters long" });
		}

		try {
			// * checking for exiting user with the same email
			const existingUser = await Customer.findOne({ email: email });
			if (existingUser) {
				return res.status(400).json({
					message: "An account with this email is already registered",
				});
			}

			// * hashing the password
			const salt = await bcrypt.genSalt();
			const hashedPassword = await bcrypt.hash(password, salt);

			// * save user account
			const newCustomer = new Customer({
				name,
				email,
				password: hashedPassword,
				mobile,
				createdAt,
				updatedAt,
			});
			const savedCustomer = await newCustomer.save();

			// * logging the user
			const token = jwt.sign(
				{ user: saveCustomer._id, type: "customer" },
				process.env.JWT_SECRET
			);

			//* sending token as a cookie
			return res.cookie("token", token, { httpOnly: true }).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).json({ message: "Request body cannot be empty" });
};

/**
 * use to get all the customers
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getCustomers = async (req, res) => {
	try {
		const customers = await Customer.find();
		return res.status(200).json({ customers: customers });
	} catch (err) {
		return res.status(500).send();
	}
};

module.exports = { saveCustomer, getCustomers };
