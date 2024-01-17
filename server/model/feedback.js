const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  users: {
    // Unique identifier for the submitter
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "policeStation",
  },
  q1: {
    type: Number,
    required: true,
  },
  q2: {
    type: Number,
    required: true,
  },
  q3: {
    type: Number,
    required: true,
  },
  q4: {
    type: Number,
    required: true,
  },
  q5: {
    type: Number,
    required: true,
  },
  q6: {
    type: Number,
    required: true,
  },
  q7: {
    type: Number,
    required: true,
  },
  query: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);
