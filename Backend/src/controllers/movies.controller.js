import Movie from "../models/movies.model.js";
import axios from "axios";

export const giveMoviesForHome = async (req, res) => {
    try {
        let dramaMovies = [];
        let actionMovies = [];
        let horrorMovies = [];
        let romanticMovies = [];
        let fantasyMovies = [];
        let mysteryMovies = [];
        let animatedMovies = [];
        let scifiMovies = [];

        const allMovies = await Movie.find({});
        if (!allMovies) {
            return res.status(403).json({ message: "No movies Found !!" });
        }

        // console.log("movies in giveMoviesForHome")
        // allMovies.forEach(movie => {
        //     // console.log("movies in giveMoviesForHome", movie.movieName)
        //     if (movie.movieGenre.genre1 === "Drama" || movie.movieGenre.genre2 === "Drama" || movie.movieGenre.genre3 === "Drama") {
        //         dramaMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "Action" || movie.movieGenre.genre2 === "Action" || movie.movieGenre.genre3 === "Action") {
        //         actionMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "Horror" || movie.movieGenre.genre2 === "Horror" || movie.movieGenre.genre3 === "Horror") {
        //         horrorMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "Romance" || movie.movieGenre.genre2 === "Romance" || movie.movieGenre.genre3 === "Romance") {
        //         romanticMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "Fantasy" || movie.movieGenre.genre2 === "Fantasy" || movie.movieGenre.genre3 === "Fantasy") {
        //         fantasyMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "Mystery" || movie.movieGenre.genre2 === "Mystery" || movie.movieGenre.genre3 === "Mystery") {
        //         mysteryMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "Animated" || movie.movieGenre.genre2 === "Animated" || movie.movieGenre.genre3 === "Animated") {
        //         animatedMovies.push(movie);
        //     }
        //     if (movie.movieGenre.genre1 === "SciFi" || movie.movieGenre.genre2 === "SciFi" || movie.movieGenre.genre3 === "SciFi") {
        //         scifiMovies.push(movie);
        //     }
        // });

        dramaMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Drama" },
                { 'movieGenre.genre2': "Drama" },
                { 'movieGenre.genre3': "Drama" }
            ]
        })

        actionMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Action" },
                { 'movieGenre.genre2': "Action" },
                { 'movieGenre.genre3': "Action" }
            ]
        })

        horrorMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Horror" },
                { 'movieGenre.genre2': "Horror" },
                { 'movieGenre.genre3': "Horror" }
            ]
        })

        romanticMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Romance" },
                { 'movieGenre.genre2': "Romance" },
                { 'movieGenre.genre3': "Romance" }
            ]
        })

        fantasyMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Fantasy" },
                { 'movieGenre.genre2': "Fantasy" },
                { 'movieGenre.genre3': "Fantasy" }
            ]
        })

        mysteryMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Mystery" },
                { 'movieGenre.genre2': "Mystery" },
                { 'movieGenre.genre3': "Mystery" }
            ]
        })

        animatedMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Animation" },
                { 'movieGenre.genre2': "Animation" },
                { 'movieGenre.genre3': "Animation" }
            ]
        })

        scifiMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': "Sci-Fi" },
                { 'movieGenre.genre2': "Sci-Fi" },
                { 'movieGenre.genre3': "Sci-Fi" }
            ]
        })


        res.status(200).json({
            message: "some movies found ", allMovies: allMovies,
            dramaMovies: dramaMovies,
            actionMovies: actionMovies,
            horrorMovies: horrorMovies,
            romanticMovies: romanticMovies,
            fantasyMovies: fantasyMovies,
            mysteryMovies: mysteryMovies,
            animatedMovies: animatedMovies,
            scifiMovies: scifiMovies,
        })
    } catch (error) {
        console.log("Internal Server Error in giveMoviesForHome");
        res.status(500).json({ message: "Internal Server error in giveMoviesForHome" });
    }
}

export const giveMoviesByIds = async (req, res) => {
    try {
        const { movieIds } = req.body;
        console.log(movieIds);

        const moviesByIds = await Movie.find({ '_id': { $in: movieIds } });

        if (!moviesByIds) {
            return res.status(400).json({ message: `Can't find moviesByIds` })
        }

        res.status(200).json({ message: `movie found with ${movieIds}`, moviesByIds })

    } catch (error) {
        console.log("Internal Serval Error, giveMoviesByIds", error);
        res.status(500).json({ message: `Internal Server Error, getMovieByIds` })
    }
}

export const addNewMovie = async (req, res) => {
    try {
        const {
            movieName,
            movieReleaseDate,
            movieDescription,
            movieVerdict,
            movieLanguage,
            movieDirector,
            movieStarCast,
            movieCrewCast,
            movieRunTime,
            movieMovieBarosRating,
            movieImdbRating,
            movieRottenTomatoesRating,
            movieAgeRating,
            movieGenre,
            moviePoster,
            movieTrailer,
            movieWatchLinks,
            movieBarosViews
        } = req.body;

        const movieExists = await Movie.findOne({ movieName });

        if (movieExists) {
            return res.status(403).json({ message: `This movie already exists: ${movieName}` });
        }

        const newMovie = new Movie({
            movieName,
            movieReleaseDate,
            movieDescription,
            movieVerdict,
            movieLanguage,
            movieDirector,
            movieStarCast,
            movieCrewCast,
            movieRunTime,
            movieMovieBarosRating,
            movieImdbRating,
            movieRottenTomatoesRating,
            movieAgeRating,
            movieGenre,
            moviePoster,
            movieTrailer,
            movieWatchLinks,
            movieBarosViews
        });

        if (newMovie) {
            await newMovie.save();
            console.log(newMovie, "saved into the database");
            return res.status(201).json({ message: "Movie added successfully", data: newMovie });
        }


    } catch (error) {
        console.log("Internal Server error, addNewMovie controller:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const genreWiseMovies = async (req, res) => {
    try {
        const movieGenre = req.params.genre;
        const genreMovies = await Movie.find({
            $or: [
                { 'movieGenre.genre1': movieGenre },
                { 'movieGenre.genre2': movieGenre },
                { 'movieGenre.genre3': movieGenre }
            ]
        })

        return res.status(200).json({ message: `movies found for genre: ${movieGenre}`, genreMovies: genreMovies });

    } catch (error) {
        console.log("internal server error, genreWiseMovies")
        res.status(500).json({ message: "Internal Server Error genreWiseMovies" });
    }

    // res.status(200).json({ message: `sucess: ${req.params.genre}` });
}

export const giveMovieDetails = async (req, res) => {
    try {
        const movieId = req.params.movieName;
        const movieDetails = await Movie.findOne({ _id: `${movieId}` });

        if (!movieDetails) {
            res.status(403).json({ message: `These movie doesn't exists in database ${movieId}` });
        }

        res.status(200).json({ message: `MovieDetails found`, movieDetails: movieDetails });

    } catch (error) {
        console.log("Internal Server Error, giveMovieDetails", error.message)
        res.status(500).json({ message: `Internal Server Error in giveMovieDetails` });
    }
}

export const getRelatedYoutubeVideos = async (req, res) => {
    const YT_API = process.env.YOUTUBE_API_KEY;
    try {
        const { movieName } = req.body;
        // Make request to YouTube Data API to search for videos related to the movie
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 6, // You can adjust the number of results here
                q: movieName, // Query with movie title
                type: 'video', // Only search for videos
                key: YT_API, // Your YouTube API key
            },
        });

        const videos = response.data.items.map((item) => ({
            title: item.snippet.title,
            description: item.snippet.description,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            thumbnail: item.snippet.thumbnails.high.url,
        }));

        res.json(videos); // Return the video data as JSON
    } catch (error) {
        console.log("Internal Server Error in FindingRelatedYoutubeVideos", error)
        res.status(500).json({ error: 'Failed to fetch YouTube videos' });
    }
} 