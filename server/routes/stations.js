const express = require("express");
const router = express.Router();

// import controller
const { register, getAllStations } = require("../controllers/station");

//define API routes
router.post("/register", register);
router.get("/all", getAllStations);

module.exports = router;