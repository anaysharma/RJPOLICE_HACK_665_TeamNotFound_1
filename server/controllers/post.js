
const Post = require("../model/post");
const User = require("../model/users");

exports.makePost = async (req, res) => {
    try {
        // extract title & description from request body
      const { users, title, content, image} = req.body;
      // create a new feedback obj 
      const post = new Post({ users, title, content, image});
        // and insert into db
        const savedPost = await post.save();
        //find the user by id and add the new feedback to its feedbacks array
        
        
        // send a json response with a success flag
        res.json({
            success: true,
            data: savedPost,
            message: 'Entry Created Successfully'
        });
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("Post nhi ho paaya",err);
        console.error(err.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}

// ================================================================================================================= //
// Vote up

exports.voteUp = async (req, res) => {
    try {
        // extract id from request parameters
        const id = req.param.id;
        const savedPost = await Post.findByIdAndUpdate(id, { $inc: { Votes: 1 } }, { new: true });
        
        // send a json response with a success flag
        res.json({
            success: true,
            data: savedPost,
            message: 'Entry Created Successfully'
        });
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("Vote up nhi ho paaya",err);
        console.error(err.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}

// ================================================================================================================= //
// Vote down

exports.voteDown = async (req, res) => {
    try {
        // extract id from request parameters
        const id = req.param.id;
        
        const savedPost2 = await Post.findByIdAndUpdate(id, { $inc: { Votes: -1 } }, { new: true }).populate("Post").exec();
        
        // send a json response with a success flag
        res.json({
            success: true,
            data: savedPost2,
            message: 'Entry Created Successfully'
        });
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("Vote down nhi ho paaya",err);
        console.error(err.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}