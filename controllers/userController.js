const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

//@desc Registering user
//@route POST /user/create
const createUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.create({
      userName,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    // console.log(error.message)
    res.status(400).send();
    throw new Error("All fields are required");
  }
};

//@desc Login user
//@route POST
const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName, password });
    if (user) {
      const accessToken = jwt.sign({ userName }, process.env.SECRET_KEY, {expiresIn: 60});
      res.status(200).send(accessToken);
    } else {
        console.log(error.message)
      res.status(401).send("Invalid input");
    }
    
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Invalid input");
    throw new Error("Invalid Data");
  }
};

module.exports = { createUser, loginUser };
