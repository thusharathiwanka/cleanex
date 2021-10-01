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
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

		// * user inputs validation
		if (!name || !email || !password || !mobile || !createdAt || !updatedAt) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		if (!email.match(pattern)) {
			return res
				.status(400)
				.json({ message: "Please enter a valid email address" });
		}

		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password should be at least 6 characters long" });
		}

		if (mobile.length < 10) {
			return res
				.status(400)
				.json({ message: "Please enter a valid phone number" });
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
				{ user: savedCustomer._id, type: "customer" },
				process.env.JWT_SECRET
			);

			// * sending token as a cookie
			return res
				.status(201)
				.cookie("token", token, { httpOnly: true })
				.json({ role: "customer" });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
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
		console.error(err.message);
		return res.status(500).send();
	}
};

/**
 * use to get total of the customers
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getCustomersTotal = async (req, res) => {
	try {
		const customers = await Customer.find();
		return res.status(200).json({ total: customers.length });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

const loginCustomer = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { email, password } = req.body;

		// * user inputs validation
		if (!email || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * checking for email existence
			const existingUser = await Customer.findOne({ email: email });
			if (!existingUser) {
				return res.status(401).json({
					message: "Wrong email or password",
				});
			}

			// * checking for password existence
			const isPasswordCorrect = await bcrypt.compare(
				password,
				existingUser.password
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					message: "Wrong email or password",
				});
			}

			// * logging the user
			const token = jwt.sign(
				{ user: existingUser._id, type: "customer" },
				process.env.JWT_SECRET
			);

			//* sending token as a cookie
			return res
				.cookie("token", token, { httpOnly: true })
				.json({ role: "customer" });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(406).send();
};

/**
 * use to delete the specific customers
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const deleteCustomer = async (req, res) => {
	if (req.params.id) {
		try {
			await Customer.findByIdAndDelete(req.params.id);
			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
};

/**
 * use to get the specific customers details
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getUserDetails = async (req, res) => {
	if (req.params.id) {
		try {
			const customer = await Customer.findById(req.params.id);
			res.status(200).json({ customer: customer });
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}
};

/**
 * use to get the specific customers details
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const getUserprofileDetails = async (req, res) => {
	try {
		const customer = await Customer.findById(req.body.userId);
		res.status(200).json({ customer: customer });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

/** use to update edit user proile*/

const updateUserProfile = async (req, res) => {
	//*request params validation
	if (req.body.userId) {
		//*request body validation
		if (req.body) {
			const { name, email, password, mobile } = req.body;
			const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
			//*user update input validation
			if (!name || !email || !password || !mobile) {
				return res.status(400).json({ message: "Please fill all fields" });
			}
			if (!email.match(pattern)) {
				return res
					.status(400)
					.json({ message: "Please enter a valid email address" });
			}

			if (password.length < 6) {
				return res
					.status(400)
					.json({ message: "Password should be at least 6 characters long" });
			}

			if (mobile.length < 10) {
				return res
					.status(400)
					.json({ message: "Please enter a valid phone number" });
			}

			try {
				// * hashing the password
				const salt = await bcrypt.genSalt();
				const hPassword = await bcrypt.hash(password, salt);
				// * update user userprofile Update
				await Customer.findByIdAndUpdate(req.body.userId, {
					name,
					email,
					password: hPassword,
					mobile,
				});

				// * sending as updated
				return res.status(201).json("Updated Successfully");
			} catch (err) {
				console.error(err.message);
				return res.status(500).send();
			}
		}

		return res.status(400).send();
	}
};

const deleteUserProfile = async (req, res) => {
	try {
		await Customer.findByIdAndDelete(req.body.userId);
		res.status(200).send("Deleted Successfully");
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

module.exports = {
	saveCustomer,
	getCustomers,
	loginCustomer,
	deleteCustomer,
	getUserDetails,
	getCustomersTotal,
	getUserprofileDetails,
	updateUserProfile,
	deleteUserProfile,
};
