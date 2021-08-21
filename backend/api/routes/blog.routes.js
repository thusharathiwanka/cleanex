const router = require("express").Router();

const {
	getAllBlogs,
	getBlog,
	addBlogs,
	deleteBlogs,
	updateBlogs,
} = require("../controllers/blog.controller");

router.get("/getall", getAllBlogs);
router.get("/get", getBlog);
router.post("/post", addBlogs);
router.delete("/delete", deleteBlogs);
router.patch("/ubdate", updateBlogs);

module.exports = router;
