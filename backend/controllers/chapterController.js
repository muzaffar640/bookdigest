const asyncHandler = require("express-async-handler");
const Chapter = require("../models/chapterModel");

const createNewChapter = asyncHandler(async (req, res) => {});
const getAllChapterForOneBook = asyncHandler(async (req, res) => {});
const getOneChapter = asyncHandler(async (req, res) => {});
const updateOneChapter = asyncHandler(async (req, res) => {});
const deleteOneChapter = asyncHandler(async (req, res) => {});

module.exports = {
  createNewChapter,
  getAllChapterForOneBook,
  getOneChapter,
  updateOneChapter,
  deleteOneChapter,
};
