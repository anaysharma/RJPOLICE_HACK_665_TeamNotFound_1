const express = require("express");
const router = express.Router();

// import controller
const { register, getAllDistricts,getAllStationsFromDistrict } = require("../controllers/district");

//define API routes
router.post("/register", register);
router.get("/all", getAllDistricts);
router.get("/allStations/:id", getAllStationsFromDistrict);

module.exports = router;