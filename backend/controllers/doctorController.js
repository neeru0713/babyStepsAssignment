const doctorService = require("../services/doctorService");

const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getDoctors();
    return res.status(200).json({doctors });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDoctors,
};
