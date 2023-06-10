const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./v1/routes/userRoutes");
const bookRoutes = require("./v1/routes/bookRoutes");
const chapterRoutes = require("./v1/routes/chapterRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/books/:bookId/chapters", chapterRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
