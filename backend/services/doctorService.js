const Doctor = require("../models/Doctor");
const ApiError = require("../utils/ApiError");

async function getDoctors() {
  try {
    const doctors = await Doctor.find({});
    return doctors;
  } catch (error) {
    throw new ApiError(404, "error.message");
  }
}

async function createDoctor(doctorBody) {
  try {
    let newDoctor = new Doctor(doctorBody);
    await newDoctor.save();
    return newDoctor;
  } catch (error) {
    throw new ApiError(404, "error.message");
  }
}

module.exports = {
  getDoctors,
  createDoctor,
};
