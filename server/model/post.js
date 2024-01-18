const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    users: {
        // Unique identifier for the submitter
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Votes: {
        type: Number,
        default:0,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", postSchema);
