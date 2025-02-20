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
  try {
    const appointment = await Appointment.findOne({ _id: id });

    if (!appointment) {
      throw new ApiError(404, "Appointment not found");
    }

    return appointment;
  } catch (error) {
    throw new ApiError(500, error.message || "Error fetching appointment");
  }
};

async function createAppointment(appointmentBody) {
  try {
    const newAppointment = new Appointment(appointmentBody);
    await newAppointment.save();
    return newAppointment;
  } catch (error) {
    throw new ApiError(500, error.message || "Failed to create appointment");
  }
}

const deleteAppointment = async (id) => {
  try {
    const appointmentToBeDeleted = await Appointment.findById(id);
    if (!appointmentToBeDeleted) {
      throw new ApiError(404, "Appointment not found");
    }
    await Appointment.deleteOne({ _id: id });
    const appointmentsAfterDeleting = await Appointment.find({});
    return appointmentsAfterDeleting;
  } catch (error) {
    throw new ApiError(500, error.message || "Failed to delete appointment");
  }
};


  async function editAppointment(id, body) {
    try {
      const appointmentToBeEdited = await Appointment.findById(id);
      
      if (!appointmentToBeEdited) {
        throw new ApiError(404, "Appointment not found");
      }
  
      await Appointment.updateOne({ _id: id }, body);
      
      const appointmentAfterEditing = await Appointment.findById(id);
      return appointmentAfterEditing;
    } catch (error) {
      throw new ApiError(500, error.message || "Failed to edit appointment");
    }
  }
  

module.exports = {
  getAppointments,
  createAppointment,
  getAppointmentById,
  deleteAppointment,
  editAppointment
};
