const jwt = require("jsonwebtoken");
const { Movies } = require("../models/movieModel");

//@desc Get movies
//@route GET /movie
const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    if (!movies) {
      res.status(404);
      throw new Error("No data provided in db");
    }
    res.status(200);
    res.json(movies);
  } catch (error) {
    console.log(error.message);
  }
};

//@desc Get movie
//@route GET /:id
const getMovie = async (req, res) => {
  try {
    const movie = await Movies.findById({ _id: req.params.id });
    if (movie) {
      res.status(200);
      res.json(movie);
    }
    if (res.headersSent) {
      return;
    }
    res.status(404);
    res.json("Invalid id for a movie");
    throw new Error("Invalid Data");
  } catch (error) {
    console.log(error);
  }
};

//@desc Post movie
//@route POST '/movie'
const createMovie = async (req, res) => {
  try {
    const {
      original_title,
      overview,
      release_date,
      vote_average,
      backdrop_path,
      image,
    } = req.body;

    const movie = await Movies.create({
      original_title,
      release_date,
      vote_average,
      backdrop_path,
      overview,
      image,
      // id: _id,
    });
    if (movie) {
      res.status(201);
      res.json(movie);
    }
    res.status(400);
    res.json("All fields are required");
    throw new Error("Invalid Data");
  } catch (error) {
    console.log(error);
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
      { _id: req.params.id },
      req.body
    );
    if (updateMovie) {
      res.status(201);
      res.json(updateMovie);
    }
    res.status(400);
    res.json("Invalid id");
    throw new Error("Invalid Data");
  } catch (error) {
    console.log(error.message);
  }
};

//@desc Delete movie
//@route DELETE '/movie'
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movies.deleteOne({ _id: req.params.id });
    if (!movie) {
      res.status(400);
      res.json("Invalid id");
      throw new Error("Invalid Data");
    }
    res.status(200);
    res.json("True");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getMovies, getMovie, createMovie, updateMovie, deleteMovie };
