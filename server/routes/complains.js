const express = require("express");
const router = express.Router();

// import controller
const { complain, getAllComplains } = require("../controllers/complains");

//define API routes
router.post("/complain", complain);
router.get("/all", getAllComplains);
// router.get("/station/:id", getStationFeed);
// router.get("/district/:id", getAverageRatings);
// router.get("/state/summary", getDistrictSummary);
module.exports = router;
