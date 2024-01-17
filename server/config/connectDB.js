const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_url);
    console.log("Connected to Prabal's database");
  } catch (error) {
    console.log("can not connect to database");
    console.error(error);
    return error;
  }
};

module.exports = connectDB;
