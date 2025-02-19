const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const doctorRoutes = require("./routes/doctorRoutes")
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/doctor", doctorRoutes);

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

  const port = process.env.PORT || 8080; 
  app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});