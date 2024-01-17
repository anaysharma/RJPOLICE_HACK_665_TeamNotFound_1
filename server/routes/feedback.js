const express = require("express");
const router = express.Router();

// import controller
const {feedback, getStationFeed, getAverageRatings, getDistrictSummary, } = require("../controllers/feedback");

//define API routes
router.post("/feedback", feedback);
router.get("/stationFeed/:id", getStationFeed);
router.get("/districtFeed/:id", getAverageRatings);
router.get("/state/summary", getDistrictSummary);

module.exports = router;
