const express = require("express");
const {
  createNewChapter,
  getAllChaptersForOneBook,
  getOneChapter,
  updateOneChapter,
  deleteOneChapter,
} = require("../../controllers/chapterController");

const router = express.Router({ mergeParams: true });

router.get("/", getAllChaptersForOneBook);
router.get("/:chapterId", getOneChapter);
router.post("/", createNewChapter);
router.put("/:chapterId", updateOneChapter);
router.delete("/:chapterId", deleteOneChapter);

module.exports = router;
