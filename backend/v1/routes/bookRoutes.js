const express = require("express");
const protect = require("../../middleware/authMiddleware");
const router = express.Router();
const {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateBook,
  deleteBook,
} = require("../../controllers/bookController");

router.get("/", getAllBooks);
router.get("/:bookId", getOneBook);
router.post("/", protect, createNewBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
