const express = require("express");
const router = express.Router();

const {getMovies} = require('../controllers/movieController')

// creating a route for fetching movies
router.route("/").get(getMovies)

module.exports = router;
