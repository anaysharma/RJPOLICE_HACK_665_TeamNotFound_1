// import the model

const User = require("../model/users");
const policeStation = require("../model/policeStation");
const Complain = require("../model/complains");

//define route handler

exports.complain = async (req, res) => {
    try {
        // extract title & description from request body
        const {user, station, problem} = req.body;
        // create a new feedback obj 
        const complain = new Complain({ user, station, problem });
        // and insert into db
        const savedComplain = await complain.save();
        //find the user by id and add the new feedback to its feedbacks array
        
        const updatedUser = await User.findByIdAndUpdate(user, { $push: { complains: savedComplain._id } }, { new: true })
            .populate("complains")
            .exec();
        
        const updatedStation = await policeStation.findByIdAndUpdate(station, { $push: { complains: savedComplain._id } }, { new: true })
            .populate("complains")
            .exec();
        
        // send a json response with a success flag
        res.json({
            User: updatedUser,
            policeStation: updatedStation,
            success: true,
            data: savedComplain,
            message: 'Entry Created Successfully'
        });
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("submission nhi ho paaya",err);
        console.error(error.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}

//==================================================================================================================
//getting all the complains


exports.getAllComplains = async (req, res) => {
    try {
        const allComplains = await Complain.find({})
        
        if (!allComplains) {
            return res.status(404).json({
                success: false,
                message:"No Data Found with the given id",
            })
        }
        res.status(200).json({
            success: true,
            data: allComplains,
            message:"all Complains successfully fetched",
        })
    }
    catch (err) {
        console.log("issue aa gya");
        console.error(error.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}