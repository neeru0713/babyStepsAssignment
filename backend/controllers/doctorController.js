const doctorService = require("../services/doctorService");

const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getDoctors();
    return res.status(200).json({doctors });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createDoctor = async (req, res) => {
    try {
      let newDoctor = await doctorService.createDoctor(req.body);
      let resObj = {
        doctor: newDoctor,
        message: "Created doctor suceesfully",
      };
      res.status(201).json(resObj);
    } catch (error) {
      console.error("Error during creating doctor:", error);
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getDoctors,
  createDoctor
};
