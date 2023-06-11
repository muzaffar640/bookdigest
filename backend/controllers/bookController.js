const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");
const User = require("../models/userModel");

const getAllBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find({ isApproved: true });
    res.status(201).json({ books });
  } catch (error) {
    res.status(500);
    throw new Error("Internal server error");
  }
});

const getOneBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await Book.findById(bookId).populate("chapters");

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

const createNewBook = asyncHandler(async (req, res) => {
  const { title, author, isbn, publicationDate, genre, description, rating } =
    req.body;
  const user = await User.findById(req.user._id);

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
    isApproved: false,
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
      isApproved: book.isApproved,
      createdBy: book.createdBy,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid book data");
  }
});

const updateBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const {
    title,
    author,
    isbn,
    publicationDate,
    genre,
    description,
    rating,
    isPublished,
    isApproved,
  } = req.body;

  const book = await Book.findById(bookId);

  if (req.user._id === book.createdBy || req.user.role === "admin") {
    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.isbn = isbn || book.isbn;
      book.publicationDate = publicationDate || book.publicationDate;
      book.genre = genre || book.genre;
      book.description = description || book.description;
      book.rating = rating || book.rating;
      book.isPublished = isPublished || book.isPublished;
      book.isApproved = isApproved || book.isApproved;

      const updatedBook = await book.save();

      res.status(200).send({
        title: updatedBook.title,
        author: updatedBook.author,
        isbn: updatedBook.isbn,
        publicationDate: updatedBook.publicationDate,
        genre: updatedBook.genre,
        description: updatedBook.description,
        rating: updatedBook.rating,
        isPublished: updatedBook.isPublished,
        isApproved: updateBook.isApproved,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } else {
    res.status(404);
    throw new Error("You don't have access to update this book");
  }
});

const deleteBook = asyncHandler(async (req, res) => {});

module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateBook,
  deleteBook,
};
