const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "api/uploads");
	},
	filename: (req, file, callback) => {
		callback(null, req.body.uploadedAt + req.body.file);
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
