import express from "express"
import { giveMoviesForHome, addNewMovie, genreWiseMovies, giveMovieDetails, getRelatedYoutubeVideos, giveMoviesByIds } from "../controllers/movies.controller.js";
import { checkIncomingMovie } from "../middleware/movies.middlewear.js";

const moviesRouter = express.Router()

moviesRouter.get("/getmoviesforhome", giveMoviesForHome);
moviesRouter.get("/:genre", genreWiseMovies);
moviesRouter.get("/moviedetails/:movieName", giveMovieDetails);
moviesRouter.post("/addMovie", checkIncomingMovie, addNewMovie);
moviesRouter.post("/getRelatedYoutubeVideos", getRelatedYoutubeVideos)
moviesRouter.post("/getMoviesByIds", giveMoviesByIds)
// moviesRouter.delete("/removeMovie", checkIsItAdmin, removeMovie);

export default moviesRouter;