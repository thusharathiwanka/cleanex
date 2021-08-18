const router = require("express").Router();
const { logoutUser } = require("../controllers/common.controller");

router.get("/logout", logoutUser);

module.exports = router;
