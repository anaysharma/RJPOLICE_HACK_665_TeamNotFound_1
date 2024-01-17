const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/users");

const register = async (req, res) => {
  try {
    //Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    //Creation of user
    const newUser = await User.create({
      ...req?.body,
      password: hash,
    });

    // generate jwt
    const token = await jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);

    res.status(201).json({ token });
  } catch (error) {
    console.log();
    console.log(error);
    return res.status(500).json(`Error in user registration ${error}`);
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const isUser = await User.findOne({ email: email, role: role });
    if (!isUser) return res.status(400).json("Email not registered");
    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) return res.status(401).json("Wrong Credential");
    const token = await jwt.sign({ id: isUser._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Error in user login ${error}`);
  }
};

const getUser = async (req, res) => {
  try {
    const { token } = req.body;
    const payload = jwt.verify(token, process.env.SECRET_KEY, {
      algorithms: ["HS256"],
    });
    const id = payload.id;

    const user = await User.findById(id);

    if (!user) return res.status(400).json("Email not registered");
    return res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Cannot find user ${error}`);
  }
};

const getID = async (req, res) => {
  try {
    const { token } = req.body;
    const payload = jwt.verify(token, process.env.SECRET_KEY, {
      algorithms: ["HS256"],
    });
    const id = payload.id;

    const user = await User.findById(id);

    if (!user) return res.status(400).json("Email not registered");
    return res.status(200).json({ id: id });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Cannot find user ${error}`);
  }
};

module.exports = { register, login, getUser, getID };
