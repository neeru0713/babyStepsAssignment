const Doctor = require("../models/doctorModel"); 

async function getDoctors() {
  try {
    const doctors = await Doctor.find({});
    return doctors;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getDoctors,
};
