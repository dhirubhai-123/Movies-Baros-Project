
import joi from "joi"

export const checkIsItAdmin = async (req, res, next) => {

}

export const checkIncomingMovie = async (req, res, next) => {
    const Schema = joi.object({
        movieName: joi.string().max(70).required(),
        movieReleaseDate: joi.date().required(),
        movieDescription: joi.string().max(300).min(20).required(),
        movieVerdict: joi.string().max(20),
        movieLanguage: joi.string().required(),
        movieDirector: joi.string().max(50).required(),
        movieStarCast: {
            member1: joi.string().required(),
            member2: joi.string().required(),
            member3: joi.string().required(),
            member4: joi.string().required(),
            member5: joi.string().required(),
        },
        movieCrewCast: {
            member1: joi.string().required(),
            member2: joi.string().required(),
            member3: joi.string().required(),
            member4: joi.string().required(),
            member5: joi.string().required(),
        },
        movieRunTime: joi.number().required(),
        movieMovieBarosRating: joi.number().required(),
        movieImdbRating: joi.number().required(),
        movieRottenTomatoesRating: joi.number().required(),
        movieAgeRating: joi.number().required(),
        movieGenre: {
            genre1: joi.string().required(),
            genre2: joi.string().required(),
            genre3: joi.string().required(),
        },
        moviePoster: joi.string().required(),
        movieTrailer: joi.string().required(),
        movieWatchLinks: {
            link1: joi.string().required(),
            link2: joi.string(),
            link3: joi.string(),
            link4: joi.string(),
        },
        movieBarosViews: joi.string().required()
    })

    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error.message)
        return res.status(403).json({ message: `You sent wrong data with us !!, ${error.message}` });
    }

    next();

}

