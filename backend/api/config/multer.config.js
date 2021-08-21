const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "api/uploads");
	},
	filename: (req, file, callback) => {
		callback(null, req.body.file + Date.now());
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
