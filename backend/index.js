const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const doctorRoutes = require("./routes/doctorRoutes")
const appointmentRoutes = require("./routes/appointmentRoutes")
const path = require("path");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

const mongoUrl = process.env.MONGODB_URL;
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  app.use((req, res, next) => {
    next(new ApiError(404, "Not found"));
  });
  
  app.use(errorHandler);

  const port = process.env.PORT || 8080; 
  app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});