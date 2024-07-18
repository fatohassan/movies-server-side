const mongoose = require("mongoose");

// creating a model for Movies
const movieSchema = mongoose.Schema({
  id: {
    type: String,
    // unique: true,
    // required: true
  },
  original_title: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    // required: true
  },
  vote_average: {
    type: Number,
    // required: true
  },
  backdrop_path: {
    type: String,
    // required: true
  },
  image: {
    type: String,

  },
  overview: {
    type: String
  },
});

module.exports = { Movies: mongoose.model("Movies", movieSchema),
 //Movie
 };
