const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;

dotenv.config();
const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));
