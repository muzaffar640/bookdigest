const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// Login User API

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profilePic: user.profilePic,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// Get User Profile

const getUser = asyncHandler(async (req, res) => {
  const {
    params: { userId },
  } = req;
  console.log("userId", userId);
  if (!userId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':userId' can not be empty" },
    });
  }

  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePic: user.profilePic,
      });
    } else {
      throw {
        status: 400,
        message: `Can't find user with the id "${userId}"`,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
});

// Get All User Profile

const getAllUsers = asyncHandler(async (req, res) => {
  const userRole = req.user.role;
  // Role = "admin" || "user"
  if (userRole === "user") {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } else {
    res.status(401);
    throw new Error("Unauthorized access");
  }
});

// Register User API

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    //Note: don't wanna hard delete a user
    isDeleted: false,
    role: "admin",
    //Note: Uploading profile picture is an upcoming feature
    profilePic: "",
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isDeleted: user.isDeleted,
      role: user.role,
      profilePic: user.profilePic,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Logout User API

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User Logged Out" });
});

// Update User API

const updateUser = asyncHandler(async (req, res) => {
  console.log("update", req, req.user);

  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      profilePic: updatedUser.profilePic,
      role: updateUser.role,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Delete User API

const deleteUser = asyncHandler(async (req, res) => {
  //TODO: update the user isDelete parameter to true
});

module.exports = {
  authUser,
  getUser,
  getAllUsers,
  registerUser,
  logoutUser,
  updateUser,
  deleteUser,
};
