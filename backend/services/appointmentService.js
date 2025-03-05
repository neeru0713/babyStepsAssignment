const Appointment = require("../models/Appointment");
const ApiError = require("../utils/ApiError");
const moment = require("moment")
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

async function getAppointments() {
  try {
    const Appointments = await Appointment.find({}).populate("doctorId");
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
   console.log("inside the createAppointment", createAppointment);
    const session = getPayment(appointmentBody);
    // appointmentBody.date = moment(appointmentBody.date).utc().toISOString();
   
    // const newAppointment = new Appointment(appointmentBody);
    // await newAppointment.save();
    return session;
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
    const appointmentsAfterDeleting = await Appointment.find({}).populate('doctorId');
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
  

async function getPayment(body) {
  try {

    console.log("body", body);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: message,
            },
            unit_amount: consultationFee,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return session;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}
  

module.exports = {
  getAppointments,
  createAppointment,
  getAppointmentById,
  deleteAppointment,
  editAppointment,
  getPayment,
};
