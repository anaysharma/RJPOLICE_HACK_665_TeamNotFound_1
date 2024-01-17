const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema(
  {
    User: {  // Unique identifier for the submitter
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    policeStation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "policeStation",
    },
    problem: {
        type: String,
        required:true,
    },
    date: {
      type: Date, default: Date.now
    },
  }
);

module.exports = mongoose.model("Complain", complainSchema);


