const router = require("express").Router();
const { loginModerator } = require("../controllers/moderator.controller");
const { logoutUser } = require("../controllers/common.controller");

router.get("/logout", logoutUser);
router.post("/login", loginModerator);

module.exports = router;
