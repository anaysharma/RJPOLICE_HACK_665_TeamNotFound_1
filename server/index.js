const express = require("express");


const server = express();
const connectDB = require("./config/connectDB.js");
const userRoute = require("./routes/user.js");
const feedbackRoute = require("./routes/feedback.js");
const complainRoute = require("./routes/complains.js");
const districtRoute = require("./routes/district.js");
const stationRoute = require("./routes/stations.js");

require("dotenv").config();

const cors = require("cors");
server.use(cors());
connectDB();

server.use(express.json());

server.use("/api/v1/user", userRoute);
server.use("/api/v1", feedbackRoute);
server.use("/api/v1", complainRoute);
server.use("/api/v1/district", districtRoute);
server.use("/api/v1/station", stationRoute);

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});

// default route bhi likhna padega
server.get("/", (req, res) => {
  res.send('<h1>This is HomePage </h1>');
})

// ====================================
