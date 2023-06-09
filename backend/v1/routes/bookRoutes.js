const express = require("express");
const protect = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:bookId", getOneBook);
router.post("/", createNewBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
