const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const router = require("./routes/router");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

app.use("/", router);

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
