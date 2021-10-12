const fs = require("fs");
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
		const { name, description, price, status, src, createdAt, updatedAt } =
			req.body;

		if (!src) {
			// console.log(src);
			return res.status(400).json({ message: "Please select an image" });
		}

		// * user inputs validation
		if (
			!name ||
			!description ||
			!price ||
			!status ||
			!src ||
			!createdAt ||
			!updatedAt
		) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save package
			const newPackage = new Package({
				name,
				description,
				price,
				status,
				src,
				createdAt,
				updatedAt,
			});
			await newPackage.save();

			// * sending as saved
			return res.status(201).send(true);
		} catch (err) {
			console.log(err);
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * use to save the package images
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const savePackageImage = (req, res) => {
	return res.status(201).json({ filename: req.file.filename });
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
 * use to get all the packages based on status
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getPackagesBasedOnStatus = async (req, res) => {
	if (req.params.status) {
		try {
			const packages = await Package.find({ status: req.params.status });
			return res.status(200).json({ packages: packages });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
};

/**
 * use to get package based on id
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getPackage = async (req, res) => {
	if (req.params.id) {
		try {
			const singlePackage = await Package.findById(req.params.id);
			return res.status(200).json({ package: singlePackage });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
};

/**
 * use to get total of the packages
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getPackagesTotal = async (req, res) => {
	try {
		const packages = await Package.find();
		return res.status(200).json({ total: packages.length });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

/**
 * use to update the specific package
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const updatePackage = async (req, res) => {
	// * request body and params validation
	if (req.params.id && req.body) {
		const { name, description, price, status, src, updatedAt } = req.body;

		if (!src) {
			// console.log(src);
			return res.status(400).json({ message: "Please select an image" });
		}

		// * user inputs validation
		if (!name || !description || !price || !status || !src || !updatedAt) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * selecting package to be updated
			const toBeUpdatedPackage = await Package.findById(req.params.id);

			if (src !== toBeUpdatedPackage.src) {
				fs.unlink(
					`${process.env.UPLOAD_DIR}/${toBeUpdatedPackage.src}`,
					(err) => {
						if (err) {
							console.error(err.message);
							return res.status(500).send();
						}
					}
				);
			}

			// * update package
			await Package.findByIdAndUpdate(req.params.id, {
				name,
				description,
				price,
				status,
				src,
				updatedAt,
			});

			// * sending as updated
			return res.status(201).send(true);
		} catch (err) {
			// console.log(err);
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
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
			const toBeDeletedPackage = await Package.findById(req.params.id);
			if (!toBeDeletedPackage) {
				return res.status(400).send();
			}

			fs.unlink(
				`${process.env.UPLOAD_DIR}/${toBeDeletedPackage.src}`,
				(err) => {
					if (err) {
						console.error(err.message);
						return res.status(500).send();
					}
				}
			);

			await Package.findByIdAndDelete(req.params.id);

			return res.status(200).send();
		} catch (err) {
			console.log(err.message);
			return res.status(500).send();
		}
	}
};

module.exports = {
	savePackage,
	savePackageImage,
	deletePackage,
	updatePackage,
	getPackages,
	getPackage,
	getPackagesTotal,
	getPackagesBasedOnStatus,
};
