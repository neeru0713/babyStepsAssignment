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

const getAppointmentById = async (id) => {
  const appointment = await Appointment.findOne({ _id : id});
  if (!appointment) {
    throw new ApiError("Appointment not found");
  }
  return appointment;
};

async function createAppointment(appointmentBody) {
  let newAppointment = new Appointment(appointmentBody);
  await newAppointment.save();
  return newAppointment;
}

module.exports = {
  getAppointments,
  createAppointment,
  getAppointmentById,
};
