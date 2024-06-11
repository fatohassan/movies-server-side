const express = require("express");
const router = express.Router();

const {getMovies, getMovie} = require('../controllers/movieController')

// creating a route for fetching movies
router.route("/").get(getMovies)
router.route("/:id").get(getMovie)

module.exports = router;
