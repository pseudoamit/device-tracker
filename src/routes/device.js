const express = require("express");
const router = express.Router();

const deviceController = require("../controller/device");

router.put("/", deviceController.create);
router.delete("/:id", deviceController.delete);
router.get("/weekly-record", deviceController.weeklyRecord);
router.get("/", deviceController.list);
router.post("/feedback", deviceController.feedback);
router.post("/checkout", deviceController.checkout);

module.exports = router;
