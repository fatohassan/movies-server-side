const express = require("express");
const router = express.Router();

const {getMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/movieController')

// creating a route for fetching movies
router.route("/movie").get(getMovies).post(createMovie);
router.route("/movie/:id").get(getMovie).put(updateMovie).delete(deleteMovie)

module.exports = router;
