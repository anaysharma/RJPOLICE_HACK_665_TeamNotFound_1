const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema(
  {
    name: {  // station name
        type: String,
        required: true,
    },
    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "district",
    },
    feedbacks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"feedback",
        }
    ],
    complains: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref:"Complains",
      }
    ],
  }
);

module.exports = mongoose.model("policeStation", stationSchema);


