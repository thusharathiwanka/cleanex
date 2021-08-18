const logoutUser = (req, res) => {
	res.cookie("token", "", { httpOnly: true, expires: new Date(0) }).send();
};

module.exports = { logoutUser };
