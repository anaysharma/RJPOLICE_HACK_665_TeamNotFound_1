const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name field is required"],
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: [true, "Last Name field is required"],
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  mobile: {
    type: String,
    maxLength: 15,
  },
  address: {
    type: String,
    maxLength: 150,
  },
  role: {
    //3 layer feedback management
    type: String,
    enum: [
      "DistrictUser",
      "StateUser",
      "PoliceStationUser",
      "FeedbackSubmitter",
    ],
    default: "FeedbackSubmitter",
  },
  district: {
    // For DistrictUser
    type: mongoose.Schema.Types.ObjectId,
    ref: "district",
  },
  policeStation: {
    // For PoliceStationUser
    type: mongoose.Schema.Types.ObjectId,
    ref: "policeStation",
  },
  feedbacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "feedback",
    },
  ],
  complains: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complains",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
