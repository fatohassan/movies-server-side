const mongoose = require("mongoose");

// creating a model for Movies
const movieSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    // required: true
  },
});

module.exports = { Movies: mongoose.model("Movies", movieSchema),
 //Movie
 };
