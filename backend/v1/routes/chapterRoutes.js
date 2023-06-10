const express = require("express");
const {
  createNewChapter,
  updateOneChapter,
  deleteOneChapter,
} = require("../../controllers/chapterController");

const router = express.Router({ mergeParams: true });

router.post("/", createNewChapter);
router.put("/:chapterId", updateOneChapter);
router.delete("/:chapterId", deleteOneChapter);

module.exports = router;
