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
      maxLength: 120,
    },
    no: {
      type: Number,
      required: true,
      maxLength: 3,
    },
    content: {
      type: String,
      required: true,
      mazLength: 5000,
    },
  },
  {
    timestamps: true,
  }
);

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
