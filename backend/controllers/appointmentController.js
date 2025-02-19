const { applyVirtuals } = require("../models/Appointment");
const appointmentService = require("../services/appointmentService");
const catchAsync = require("../utils/catchAsync");

const getAppointments = catchAsync(async (req, res) => {
  const appointments = await appointmentService.getAppointments();
  res.status(200).json({ appointments });
});

const createAppointment = catchAsync(async (req, res) => {
    let newAppointment = await appointmentService.createAppointment(req.body);
    let resObj = {
      appointment: newAppointment,
      message: "Created appointment successfully",
    };
    res.status(201).json(resObj);
  });
  

module.exports = {
    getAppointments,
    createAppointment

};
