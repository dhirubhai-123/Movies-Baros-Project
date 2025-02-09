import mongoose from "mongoose";

const showSchema = mongoose.Schema({
    showName: {
        type: String,
        required: true,
    },
    showReleaseDate: {
        type: Date,
        required: true,
    },
    showEndDate: {
        type: Date,
        required: true,
    },
    showDescription: {
        type: String,
        required: true,
    },
    showVerdict: {
        type: String,
    },
    showLanguage: {
        type: String,
        required: true,
    },
    showDirector: {
        type: String,
        required: true,
    },
    showStarCast: {
        member1: {
            type: String,
            required: true,
        },
        member2: {
            type: String,
            required: true,
        },
        member3: {
            type: String,
            required: true,
        },
        member4: {
            type: String,
            required: true,
        },
        member5: {
            type: String,
            required: true,
        }
    },
    showCrewCast: {
        member1: {
            type: String,
            required: true,
        },
        member2: {
            type: String,
            required: true,
        },
        member3: {
            type: String,
            required: true,
        },
        member4: {
            type: String,
            required: true,
        },
        member5: {
            type: String,
            required: true,
        }
    },
    showNoOfSeasons: {
        type: Number,
        required: true,
    },
    showNoOfEpisodes: {
        type: Number,
        required: true,
    },
    showRunTime: {
        type: Number,
        required: true,
    },
    showMovieBarosRating: {
        type: Number,
        required: true,
    },
    showImdbRating: {
        type: Number,
        required: true,
    },
    showRottenTomatoesRating: {
        type: Number,
        required: true,
    },
    showAgeRating: {
        type: Number,
        required: true,
    },
    showGenre: {
        genre1: {
            type: String,
            required: true,
        },
        genre2: {
            type: String,
            required: true,
        },
        genre3: {
            type: String,
            required: true,
        },
    },
    showPoster: {
        type: String,
        required: true
    },
    showTrailer: {
        type: String,
        required: true,
    },
    showWatchLinks: {
        link1: {
            type: String,
            required: true,
        },
        link2: {
            type: String,
        },
        link3: {
            type: String,
        },
        link4: {
            type: String,
        },
    },
    movieBarosViews: {
        type: String,
    }
},

    { timestamps: true }

)

const Show = mongoose.model("Show", showSchema)

export default Show;