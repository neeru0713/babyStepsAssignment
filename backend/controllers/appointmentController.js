const appointmentService = require("../services/appointmentService");
const catchAsync = require("../utils/catchAsync");

const getAppointments = catchAsync(async (req, res) => {
  const appointments = await appointmentService.getAppointments();
  res.status(200).json({ appointments });
});



module.exports = {
    getAppointments,

};
