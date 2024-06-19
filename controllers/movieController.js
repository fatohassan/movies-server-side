const jwt = require("jsonwebtoken");
const { Movies } = require("../models/movieModel");

//@desc Get movies
//@route GET /movie
const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error.message);
    res.status(404);
    throw new Error("Invalid Data");
  }
};

//@desc Get movie
//@route GET /:id
const getMovie = async (req, res) => {
  const movie = await Movies.findOne({ id: req.params.id });
  if (!movie) {
    res.status(404).send("Not movie");
    throw new Error("Invalid Data");
  }
  res.status(200).json(movie);
};

//@desc Post movie
//@route POST '/movie'
const createMovie = async (req, res) => {
  try {
    const { title, overview, id } = req.body;
    const movie = await Movies.create({
      title,
      overview,
      id,
    });
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).send("All fields are required");
    throw new Error("Invalid Data");
  }
};

//@desc Put movie
//@route PUT '/:id'
const updateMovie = async (req, res) => {
  try {
    // const movie = await Movies.findOne({ id: req.params.id });
    // movie.title = req.body.title;
    // movie.overview = req.body.overview;
    // await movie.save();
    const updatedMovie = await Movies.findOneAndUpdate(
      {id: req.params.id},
      req.body,
    );
    res.status(201).json(updateMovie);
  } catch (error) {
    res.status(400).send("All fields are required");
    throw new Error("Invalid Data");
  }
};

//@desc Delete movie
//@route DELETE '/movie'
const deleteMovie = async (req, res) => {
  try {
    // const {title, id} = req.body;
    const movie = await Movies.deleteOne({ id: req.params.id });
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).send("All fields are required");
    throw new Error("Invalid Data");
  }
};

module.exports = { getMovies, getMovie, createMovie, updateMovie, deleteMovie };
