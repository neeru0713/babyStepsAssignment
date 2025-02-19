const doctorService = require("../services/doctorService");
const catchAsync = require("../utils/catchAsync");

const getDoctors = catchAsync(async (req, res) => {
  const doctors = await doctorService.getDoctors();
  res.status(200).json({ doctors });
});

const createDoctor = catchAsync(async (req, res) => {
  let newDoctor = await doctorService.createDoctor(req.body);
  let resObj = {
    doctor: newDoctor,
    message: "Created doctor successfully",
  };
  res.status(201).json(resObj);
});

module.exports = {
  getDoctors,
  createDoctor,
};
