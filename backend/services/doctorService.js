const Doctor = require("../models/Doctor"); 
const ApiError = require("../utils/ApiError");

async function getDoctors() {
  try {
    const doctors = await Doctor.find({});
    return doctors;
  } catch (error) {
    throw new ApiError(401, "error in service");
  }
}

async function createDoctor(doctorBody) {
    let newDoctor = new Doctor(doctorBody);
    await newDoctor.save();
    return newDoctor;
  }

module.exports = {
  getDoctors,
  createDoctor
};
