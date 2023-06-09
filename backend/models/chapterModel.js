const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
