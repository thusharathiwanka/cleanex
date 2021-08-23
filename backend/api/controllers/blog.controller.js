const blog = require("../models/payment.model");

const addBlogs = async (req, res) => {
	try {
		const newBlog = new blog(
			{
			topic: req.body.topic,
			description: req.body.description,
			content: req.body.content,
			photo: req.body.name
			}
		);
		console.log(req.body.name);
		// await newBlog.save();
		res.status(200);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

const getAllBlogs = async (req, res) => {
	try {
		const blogs = await blog.find();
		res.status(200).json(blogs);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};
const getBlog = async (req, res) => {
	try {
		const singleBlog = await blog.findById(req.params.id);
		res.status(200).json(singleBlog);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

const updateBlogs = async (req, res) => {
	try {
		const singleBlog = await blog.findByIdAndUpdate(req.params.id, {
			topic: req.body.topic,
			description: req.body.description,
			content: req.body.content,
			photo: req.body.photo,
		});
		res.status(200);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

const deleteBlogs = async (req, res) => {
	try {
		const singleBlog = await blog.findByIdAndDelete(req.params.id);
		res.status(200);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

module.exports = { getAllBlogs, getBlog, addBlogs, deleteBlogs, updateBlogs };
