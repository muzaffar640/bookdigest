const asyncHandler = require("express-async-handler");
const Chapter = require("../models/chapterModel");
const Book = require("../models/bookModel");

const createNewChapter = asyncHandler(async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const { title, content } = req.body;

    // Check if the bookId exists
    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404);
      throw new Error("Book not found");
    }

    // Create a new chapter
    const chapter = await Chapter.create({
      book: bookId,
      title,
      content,
    });

    // Update the book's chapters array
    book.chapters.push(chapter._id);
    await book.save();

    res.status(201).json(chapter);
  } catch (error) {
    throw { status: error.status || error, message: error.message || error };
  }
});

const getAllChaptersForOneBook = asyncHandler(async (req, res, next) => {
  try {
    const { bookId } = req.params;

    // Find all chapters for the given book ID
    const chapters = await Chapter.find({ book: bookId });

    res.json(chapters);
  } catch (error) {
    next(error);
  }
});
const getOneChapter = asyncHandler(async (req, res) => {});
const updateOneChapter = asyncHandler(async (req, res) => {});
const deleteOneChapter = asyncHandler(async (req, res) => {});

module.exports = {
  createNewChapter,
  getAllChaptersForOneBook,
  getOneChapter,
  updateOneChapter,
  deleteOneChapter,
};
