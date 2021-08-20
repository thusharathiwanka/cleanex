const jwt = require("jsonwebtoken");

/**
 * use to log out the users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const logoutUser = (req, res) => {
	return res
		.cookie("token", "", { httpOnly: true, expires: new Date(0) })
		.send();
};

/**
 * use to check if the users are logged in or not
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const checkLoggedIn = (req, res) => {
	if (req.cookies) {
		try {
			const token = req.cookies.token;

			if (!token) return res.json({ state: false, role: "" });

			const verify = jwt.verify(token, process.env.JWT_SECRET);

			if (!verify) return res.json({ state: false, role: "" });

			return res.json({ state: true, role: verify.type });
		} catch (err) {
			console.error(err.message);
			return res.json({ state: false, role: "" });
		}
	}
};

module.exports = { logoutUser, checkLoggedIn };
