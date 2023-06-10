const express = require("express");
const {
  createNewChapter,
  getAllChapterForOneBook,
  getOneChapter,
  updateOneChapter,
  deleteOneChapter,
} = require("../../controllers/chapterController");

const router = express.Router();

router.get("/:bookId", getAllChapterForOneBook);
router.get("/:chapterId", getOneChapter);
router.post("/:bookId", createNewChapter);
router.put("/:chapterId", updateOneChapter);
router.delete("/:chapterId", deleteOneChapter);

module.exports = router;
