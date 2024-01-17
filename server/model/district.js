const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema(
  {
    name: {  // station name
        type: String,
        required: true,
    },
    stations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"policeStation",
        }
    ],
  }
);

module.exports = mongoose.model("District", districtSchema);