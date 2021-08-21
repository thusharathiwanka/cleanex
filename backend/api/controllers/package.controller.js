const Package = require("../models/package.model");

/**
 * use to save the packages
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const savePackage = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { name, description, price, status, createdAt, updatedAt } = req.body;

		// * user inputs validation
		if (!name || !description || !price || !status) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		// * user inputs types validation
		if (typeof price !== "number") {
			return res.status(400).json({ message: "Please enter valid price" });
		}

		try {
			// * save user account
			const newPackage = new Package({
				name,
				description,
				price,
				createdAt,
				updatedAt,
			});
			await newPackage.save();

			//* sending as saved
			return res.status(201).send(true);
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

module.exports = { savePackage };
