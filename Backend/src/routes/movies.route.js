import express from "express"
import { giveMoviesForHome, addNewMovie, genreWiseMovies, giveMovieDetails } from "../controllers/movies.controller.js";
import { checkIncomingMovie } from "../middleware/movies.middlewear.js";

const moviesRouter = express.Router()

moviesRouter.get("/getmoviesforhome", giveMoviesForHome);
moviesRouter.post("/addMovie", checkIncomingMovie, addNewMovie);
moviesRouter.get("/:genre", genreWiseMovies);
moviesRouter.get("/moviedetails/:movieName", giveMovieDetails);
// moviesRouter.delete("/removeMovie", checkIsItAdmin, removeMovie);

export default moviesRouter;