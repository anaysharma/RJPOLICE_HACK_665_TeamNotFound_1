const express = require("express");
const router = express.Router();

// import controller
const { complain, getAllComplains } = require("../controllers/complains");

//define API routes
router.post("/complain", complain);
router.get("/all", getAllComplains);
module.exports = router;
