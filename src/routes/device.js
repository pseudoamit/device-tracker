const express = require("express");
const router = express.Router();

const deviceController = require("../controller/device");

router.put("/", deviceController.create);

module.exports = router;
