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

			if (!token) return res.json(false);

			jwt.verify(token, process.env.JWT_SECRET);

			return res.json(true);
		} catch (err) {
			console.error(err.message);
			return res.json(false);
		}
	}
};

module.exports = { logoutUser, checkLoggedIn };
