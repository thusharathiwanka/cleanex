const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, process.env.UPLOAD_DIR);
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name);
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
