const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./v1/routes/userRoutes");
const connectDB = require("./config/db");

const port = process.env.PORT || 8000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
