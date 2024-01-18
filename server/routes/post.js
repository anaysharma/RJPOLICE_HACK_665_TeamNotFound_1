const express = require("express");
const router = express.Router();

// import controller
const { makePost, voteDown, voteUp } = require("../controllers/post");

//define API routes
router.post("/make", makePost);
router.get("/down/:id", voteDown);
router.get("/up/:id", voteUp);
module.exports = router;