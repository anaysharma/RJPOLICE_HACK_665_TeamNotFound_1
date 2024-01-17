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