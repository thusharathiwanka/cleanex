const router = require("express").Router();
const upload = require("../middleware/multer.config")
const {
	getAllBlogs,
	getBlog,
	addBlogs,
	deleteBlogs,
	updateBlogs,
	updateImage
} = require("../controllers/blog.controller");

router.get("/getall", getAllBlogs);
router.get("/get/:id", getBlog);
router.post("/post",upload.single("image"), addBlogs);
router.patch("/updateimage",upload.single("image"), updateImage);
router.delete("/delete/:id", deleteBlogs);
router.patch("/update/:id", updateBlogs);

module.exports = router;
