const mongoose = require("mongoose");
const bcrypt = require("bcryptjs/dist/bcrypt");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    email: { type: String, required: true, unique: true, maxLength: 100 },
    password: { type: String, required: true, minLength: 4, maxLength: 10 },
    role: { type: String, maxLength: 12 },
    isDeleted: { type: Boolean },
    profilePic: { type: String },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
