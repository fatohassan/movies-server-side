const Movies = require("../models/movieModel");

//@desc Get movies
//@route GET /
const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error.message);
  }
};

//@desc Get movie
//@route GET /:id
const getMovie = async (req, res) => {
  const movie = await Movies.findOne(req.id);
  res.json(movie);
};

module.exports = { getMovies, getMovie };
