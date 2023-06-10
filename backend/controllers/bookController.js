const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");
const User = require("../models/userModel");
const Chapter = require("../models/chapterModel");

const getAllBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find({ isPublished: false });
    res.status(201).json({ books });
  } catch (error) {
    res.status(500);
    throw new Error("Internal server error");
  }
});
const getOneBook = asyncHandler(async (req, res) => {});

const createNewBook = asyncHandler(async (req, res) => {
  const { title, author, isbn, publicationDate, genre, description, rating } =
    req.body;
  const user = await User.findById(req.user._id);

  console.log(
    title,
    author,
    isbn,
    publicationDate,
    genre,
    description,
    user._id
  );
  const bookExist = await Book.findOne({ isbn });

  if (bookExist) {
    res.status(400);
    throw new Error("Book already exist");
  }
  const book = await Book.create({
    title,
    author,
    isbn,
    publicationDate,
    genre,
    description,
    rating,
    isPublished: false,
    isDeleted: false,
    createdBy: user._id,
  });

  if (book) {
    res.status(201).json({
      id: book._id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      publicationDate: book.publicationDate,
      genre: book.genre,
      description: book.description,
      rating: book.rating,
      isPublished: book.isPublished,
      isDeleted: book.isDeleted,
      createdBy: book.createdBy,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid book data");
  }
});

const updateBook = asyncHandler(async (req, res) => {});
const deleteBook = asyncHandler(async (req, res) => {});

module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateBook,
  deleteBook,
};
