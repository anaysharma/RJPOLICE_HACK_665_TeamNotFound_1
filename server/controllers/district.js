// import the model

const User = require("../model/users");
const District = require("../model/district");
const Complain = require("../model/complains");
const policeStation = require("../model/policeStation");

//define route handler

exports.register = async (req, res) => {
    try {
        // extract title & description from request body
        const {name, user} = req.body;
        // create a new feedback obj 
        const district = new District({ name, user});
        // and insert into db
        const savedDistrict = await district.save();
        
        // send a json response with a success flag
        res.json({            
            success: true,
            data: savedDistrict,
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


// ====================================================================================================================//
// to get all the district object 

exports.getAllDistricts = async (req, res) => {
    try {
        const allDistricts = await District.find({}).populate("stations").exec();
        //response
        res.status(200)
        .json({
            success:true,
            data:allDistricts,
            message:"All District are fetched",
        });

    } catch (error) {
      console.log(error);
      return res.status(500).json("Cannot find any District");
    }
};
  
// ======================================================================================================================== //
// get all stations for district

exports.getAllStationsFromDistrict = async (req, res) => {
    try {
      const districtId = req.params.id;
  
      // Find the district by ID
      const district = await District.findById(districtId);
  
      if (!district) {
        return res.status(404).json({ error: 'District not found' });
      }
  
      // Get all stations in the district
        const stations = await policeStation.find({ _id: { $in: district.stations } });
        res.status(200).json({
            success: true,
            data: stations,
            message:"all Stations successfully fetched",
        })
    }

    catch (err) {
        console.log("issue aa gya");
        console.log("Stations fetch nhi ho paaya",err);
        console.error(err.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}
