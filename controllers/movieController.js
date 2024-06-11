const Movies = require("../models/movieModel");

//@desc Get movies
//@route GET /
const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404);
    throw new Error("Invalid Data");
  }
};

//@desc Get movie
//@route GET /:id
const getMovie = async (req, res) => {
  // finding by id 'must be fixed'
  const movie = await Movies.findOne(req.id);
  if (!movie) {
    res.status(404);
    throw new Error("Invalid Data");
  }
  res.status(200).json(movie);
};

module.exports = { getMovies, getMovie };
