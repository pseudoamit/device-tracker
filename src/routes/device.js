const express = require("express");
const router = express.Router();

const deviceController = require("../controller/device");

router.put("/", deviceController.create);
router.delete("/:id", deviceController.delete);
router.get("/", deviceController.list);

module.exports = router;
