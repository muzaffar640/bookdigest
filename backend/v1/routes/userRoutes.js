const express = require("express");
const {
  authUser,
  registerUser,
  logoutUser,
  updateUser,
} = require("../../controllers/userController");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", protect, logoutUser);
router.put("/profile", protect, updateUser);

module.exports = router;
