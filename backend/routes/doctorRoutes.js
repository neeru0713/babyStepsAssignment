const express = require("express");
const doctorController = require("../controllers/doctorController.js");
const router = express.Router();

router.get("/", doctorController.getDoctors);

module.exports = router;