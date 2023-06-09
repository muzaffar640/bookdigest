const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 120,
    },
    author: {
      type: String,
      required: true,
      maxLength: 100,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      maxLength: 50,
    },
    publicationDate: {
      type: Date,
      required: true,
      maxLength: 50,
    },
    genre: {
      type: String,
      required: true,
      maxLength: 150,
    },
    description: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    chapters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    isPublished: Boolean,
    isDeleted: Boolean,
    isApproved: Boolean,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.path("chapters").validate(function (chapters) {
  return chapters.length <= 100;
}, "Maximum number of chapters exceeded (100)");

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
