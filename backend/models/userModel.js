const mongoose = require("mongoose");
const bcrypt = require("bcryptjs/dist/bcrypt");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String },
    isDeleted: { type: Boolean },
    profilePic: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
