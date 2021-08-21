const { findByIdAndUpdate } = require("../models/package.model");
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
		if (
			!name ||
			!description ||
			!price ||
			!status ||
			!createdAt ||
			!updatedAt
		) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		// * user inputs types validation
		if (typeof price !== "number") {
			return res.status(400).json({ message: "Please enter valid price" });
		}

		try {
			// * save package
			const newPackage = new Package({
				name,
				description,
				price,
				createdAt,
				updatedAt,
			});
			await newPackage.save();

			// * sending as saved
			return res.status(201).send(true);
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * use to get all the packages
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getPackages = async (req, res) => {
	try {
		const packages = await Package.find();
		return res.status(200).json({ packages: packages });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

/**
 * use to update the packages
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const updatePackage = async (req, res) => {
	// * request params validation
	if (req.params.id) {
		// * request body validation
		if (req.body) {
			const { name, description, price, status, updatedAt } = req.body;

			// * user inputs validation
			if (!name || !description || !price || !status || !updatedAt) {
				return res.status(400).json({ message: "Please fill all the fields" });
			}

			// * user inputs types validation
			if (typeof price !== "number") {
				return res.status(400).json({ message: "Please enter valid price" });
			}

			try {
				// * update user package
				await Package.findByIdAndUpdate(req.params.id, {
					name,
					description,
					price,
					updatedAt,
				});

				// * sending as updated
				return res.status(201).send(true);
			} catch (err) {
				console.error(err.message);
				return res.status(500).send();
			}
		}

		return res.status(400).send();
	}
};

/**
 * use to delete the specific package
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const deletePackage = async (req, res) => {
	if (req.params.id) {
		try {
			await Package.findByIdAndDelete(req.params.id);
			return res.status(200).send();
		} catch (err) {
			console.log(err.message);
			return res.status(500).send();
		}
	}
};

module.exports = { savePackage, deletePackage, updatePackage, getPackages };
