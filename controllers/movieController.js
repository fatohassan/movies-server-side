const Movies = require("../models/movieModel");

//@desc Get movies
//@route GET /movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = {getMovies}
