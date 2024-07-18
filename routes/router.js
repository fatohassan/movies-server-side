const express = require("express");
const router = express.Router();

const {getMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/movieController');
const { validateToken } = require("../middlewares/validateToken");

// creating a routes for movies 
router.post("/movie", createMovie);
// when running along the front-end the token must be modified 'either git rid of middleware or 
// create a log in page to save the token in a local storage and then could use it
router.get("/", getMovies);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);
router.route("/movie/:id").get(getMovie)

module.exports = router;
