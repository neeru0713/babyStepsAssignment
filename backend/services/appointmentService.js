const Appointment = require("../models/Appointment"); 
const ApiError = require("../utils/ApiError");

async function getAppointments() {
  try {
    const Appointments = await Appointment.find({});
    return Appointments;
  } catch (error) {
    throw new ApiError(404, "error.message");
  }
}

module.exports = {
    getAppointments
};
