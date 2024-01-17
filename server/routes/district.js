const express = require("express");
const router = express.Router();

// import controller
const { register, getAllDistricts } = require("../controllers/district");

//define API routes
router.post("/register", register);
router.get("/all", getAllDistricts);

module.exports = router;