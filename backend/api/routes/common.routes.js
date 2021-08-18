const router = require("express").Router();
const {
	logoutUser,
	checkLoggedIn,
} = require("../controllers/common.controller");

router.get("/logout", logoutUser);
router.get("/logged", checkLoggedIn);

module.exports = router;
