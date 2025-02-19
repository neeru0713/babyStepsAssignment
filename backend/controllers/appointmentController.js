const appointmentService = require("../services/appointmentService");
const catchAsync = require("../utils/catchAsync");

const getAppointments = catchAsync(async (req, res) => {
  const appointments = await appointmentService.getAppointments();
  res.status(200).json({ appointments });
});


const getAppointmentById = async (req, res) => {
    try {
      const { id } = req.params;
      let appointment = await appointmentService.getAppointmentById(id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
  
      res.status(200).json({ appointment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch appointment" });
    }
  };

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
  createAppointment,
  getAppointmentById,
};
