const express = require("express");
const doctorController = require("../controllers/doctorController.js");
const router = express.Router();

router.get("/", doctorController.getDoctors);
router.post("/", doctorController.createDoctor);


module.exports = router;