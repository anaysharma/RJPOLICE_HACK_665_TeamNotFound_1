const express = require("express");
const router = express.Router();

// import controller
const { register, getAllStations,getAverageRating } = require("../controllers/station");

//define API routes
router.post("/register", register);
router.get("/all", getAllStations);
router.get("/:id", getAverageRating);

module.exports = router;