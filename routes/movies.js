const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", async (req, res) => {

    const moviesFromDB = await Movie.find();
    res.render("movies-list", {moviesFromDB});
});

router.get("/movies/:movieId", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);

    res.render("movie-details", {movie} );
})

module.exports = router;