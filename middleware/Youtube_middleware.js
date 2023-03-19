const express = require("express");
const router = express.Router();

router.route("/").get(require("../controllers/YoutubeController"));

module.exports = router;
