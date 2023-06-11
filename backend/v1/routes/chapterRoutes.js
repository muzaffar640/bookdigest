const express = require("express");
const {
  createNewChapter,
  updateOneChapter,
  deleteOneChapter,
} = require("../../controllers/chapterController");
const protect = require("../../middleware/authMiddleware");

const router = express.Router({ mergeParams: true });

router.post("/", protect, createNewChapter);
router.put("/:chapterId", protect, updateOneChapter);
router.delete("/:chapterId", protect, deleteOneChapter);

module.exports = router;
