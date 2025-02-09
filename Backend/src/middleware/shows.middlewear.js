import Joi from "joi";

export const checkIncomingShow = async (req, res, next) => {
    const Schema = Joi.object({
        showName: Joi.string().max(70).required(),
        showReleaseDate: Joi.date().required(),
        showEndDate: Joi.date().required(),
        showDescription: Joi.string().max(300).min(20).required(),
        showVerdict: Joi.string().max(20),
        showLanguage: Joi.string().required(),
        showDirector: Joi.string().max(50).required(),
        showStarCast: {
            member1: Joi.string().required(),
            member2: Joi.string().required(),
            member3: Joi.string().required(),
            member4: Joi.string().required(),
            member5: Joi.string().required(),
        },
        showCrewCast: {
            member1: Joi.string().required(),
            member2: Joi.string().required(),
            member3: Joi.string().required(),
            member4: Joi.string().required(),
            member5: Joi.string().required(),
        },
        showNoOfSeasons: Joi.number().required(),
        showNoOfEpisodes: Joi.number().required(),
        showRunTime: Joi.number().required(),
        showMovieBarosRating: Joi.number().required(),
        showImdbRating: Joi.number().required(),
        showRottenTomatoesRating: Joi.number().required(),
        showAgeRating: Joi.number().required(),
        showGenre: {
            genre1: Joi.string().required(),
            genre2: Joi.string().required(),
            genre3: Joi.string().required(),
        },
        showPoster: Joi.string().required(),
        showTrailer: Joi.string().required(),
        showWatchLinks: Joi.object({
            link1: Joi.string().required(),
            link2: Joi.string().optional(),
            link3: Joi.string().optional(),
            link4: Joi.string().optional(),
        }).required(),
        movieBarosViews: Joi.string().required()
    })

    const { error } = Schema.validate(req.body);
    if (error) {
        console.log(error.message)
        return res.status(403).json({ message: `You sent wrong data with us !!, ${error.message}` });
    }

    next();

}