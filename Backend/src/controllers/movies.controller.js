import Movie from "../models/movies.model.js"
import { seedMovies } from "../seeds/movie.seed.js";


export const giveMoviesForHome = async (req, res) => {
    try {
        const allMovies = await Movie.find({});
        if (!allMovies) {
            return res.status(403).json({ message: "No movies Found !!" });
        }

        // console.log("movies in giveMoviesForHome")
        // allMovies.forEach(element => {
        //     console.log("movies in giveMoviesForHome", element.movieName)
        // });

        res.status(200).json({ message: "some movies found ", allMovies })
    } catch (error) {
        console.log("Internal Server Error in giveMoviesForHome");
        res.status(500).json({ message: "Internal Server error in giveMoviesForHome" });
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
        // .exec((Error, movies) => {
        //     if (err) {
        //         console.error(Error);
        //         return res.status(403).json({ message: `something is wrong ${Error}` });
        //     } else {
        //         console.log(movies);
        //         return res.status(200).json({ message: `something is wrong ${movies}` });
        //     }
        // })
        let newArray = genreMovies.map(item => item.movieName);

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