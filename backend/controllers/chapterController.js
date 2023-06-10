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

const updateOneChapter = asyncHandler(async (req, res) => {
  const { bookId, chapterId } = req.params;
  const { title, content } = req.body;
  const chapter = await Chapter.findById(chapterId);

  if (chapter) {
    chapter.title = title || chapter.title;
    chapter.content = content || chapter.content;

    const updatedChapter = await chapter.save();
    res.status(200).send({
      _id: updatedChapter._id,
      title: updatedChapter.title,
      content: updatedChapter.content,
      createdAt: updatedChapter.createdAt,
      updatedAt: updatedChapter.updatedAt,
    });
  } else {
    res.status(404);
    throw new Error("Chapter not found");
  }
});

const deleteOneChapter = asyncHandler(async (req, res) => {
  try {
    const { chapterId } = req.params;

    if (!chapterId) {
      res.status(404);
      throw new Error("Chapter not found");
    }
    const chapter = await Chapter.findById(chapterId);
    const book = await Book.findById(chapter.book);

    book.chapters.pull(chapter._id);
    await book.save();

    // Delete the chapter
    await Chapter.deleteOne({ _id: chapter._id });

    res.status(200).json({ message: "Chapter deleted successfully" });
  } catch (error) {
    throw { status: error.status || error, message: error.message || error };
  }
});

module.exports = {
  createNewChapter,
  updateOneChapter,
  deleteOneChapter,
};
