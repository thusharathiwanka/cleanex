const blog = require("../models/blog.model");
const fs = require("fs");

const addBlogs = async (req, res) => {
	try {
		const newBlog = new blog({
			topic: req.body.topic,
			description: req.body.description,
			content: req.body.content,
			name: req.body.name,
			date: req.body.date,
		});
		// console.log(req.body.topic);
		await newBlog.save();
		res.status(200).json(newBlog._id);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

const getAllBlogs = async (req, res) => {
	try {
		const blogs = await blog.find();
		res.status(200).json({ blogs: blogs });
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};
const getBlog = async (req, res) => {
	try {
		const singleBlog = await blog.findById(req.params.id);
		res.status(200).json({ singleBlog: singleBlog });
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

const updateImage = async (req, res) => {
	// console.log(req.body);
	fs.unlink(`${process.env.UPLOAD_DIR}/${req.body.previousname}`, (err) => {
		if (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	});
	res.status(200).json("image updated");
};
const updateBlogs = async (req, res) => {
	// console.log("req.body");
	try {
		await blog.findByIdAndUpdate(req.params.id, {
			topic: req.body.topic,
			description: req.body.description,
			content: req.body.content,
			name: req.body.name,
			date: req.body.date,
		});
		// console.log(req.body);
		res.status(200).json("update successful");
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

const deleteBlogs = async (req, res) => {
	try {
		await blog.findByIdAndDelete(req.params.id);
		res.status(200).json("delete successful");
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

module.exports = {
	getAllBlogs,
	getBlog,
	addBlogs,
	deleteBlogs,
	updateBlogs,
	updateImage,
};
