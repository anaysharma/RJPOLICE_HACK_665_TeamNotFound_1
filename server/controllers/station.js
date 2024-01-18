// import the model

const User = require("../model/users");
const policeStation = require("../model/policeStation");
const District = require("../model/district");
const feedback = require("../model/feedback");

//define route handler

exports.register = async (req, res) => {
    try {
        // extract title & description from request body
        const {name, user, district} = req.body;
        // create a new feedback obj 
        const station = new policeStation({ name, user, district });
        // and insert into db
        const savedStation = await station.save();
        //find the user by id and add the new feedback to its feedbacks array
        
        const updatedDistrict = await District.findByIdAndUpdate(district, { $push: { stations: savedStation._id } }, { new: true })
            .populate("stations")
            .exec();

        // send a json response with a success flag
        res.json({
            District: updatedDistrict,
            success: true,
            data: savedStation,
            message: 'Station Entry Created Successfully'
        });
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("submission nhi ho station",err);
        console.error(error.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}

// ====================================================================================================================//
// to get all the stations object 

exports.getAllStations = async (req, res) => {
    try {
        const AllStations = await policeStation.find({});
        //response
        res.status(200)
        .json({
            success:true,
            data:AllStations,
            message:"All stations are fetched",
        });

    } catch (error) {
      console.log(error);
      return res.status(500).json("Cannot find any Station");
    }
};
  

// ====================================================================================================================//
// to get average the stations object


exports.getAverageRating = async (req, res) => {
    try {
      const stationId = req.params.id;
      const station = await policeStation.findById(stationId);
  
      if (!station) {
        return res.status(404).json({ error: 'Station not found' });
        }
        const averageFeedback = {};
        
        const stationFeedback = await feedback.find({ stations: stationId });
  
        // Calculate the average for each question
        const totalFeedback = stationFeedback.length;
        const sumFeedback = (question) =>
          stationFeedback.reduce((sum, feedback) => sum + feedback[question], 0);
  
        averageFeedback[station.name] = {
          q1: totalFeedback > 0 ? sumFeedback('q1') / totalFeedback : 0,
          q2: totalFeedback > 0 ? sumFeedback('q2') / totalFeedback : 0,
          q3: totalFeedback > 0 ? sumFeedback('q3') / totalFeedback : 0,
          q4: totalFeedback > 0 ? sumFeedback('q4') / totalFeedback : 0,
          q5: totalFeedback > 0 ? sumFeedback('q5') / totalFeedback : 0,
          q6: totalFeedback > 0 ? sumFeedback('q6') / totalFeedback : 0,
          q7: totalFeedback > 0 ? sumFeedback('q7') / totalFeedback : 0,
        };
          
      // Send the average feedback as a response
      res.json(averageFeedback);

      }
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };