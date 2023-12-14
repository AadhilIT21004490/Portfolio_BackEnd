const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// //Seperate Routes for auth and location,weather
const locationRoutes = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/location", locationRoutes);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`App is Running on ${port}`);
});