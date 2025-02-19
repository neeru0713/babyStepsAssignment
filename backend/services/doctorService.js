const Doctor = require("../models/Doctor"); 

async function getDoctors() {
  try {
    const doctors = await Doctor.find({});
    return doctors;
  } catch (error) {
    throw new Error(error.message);
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
