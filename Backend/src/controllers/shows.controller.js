
import Show from "../models/shows.model.js"

export const giveShowsForHome = async (req, res) => {
    try {
        const allShows = await Show.find({});
        if (!allShows) {
            return res.status(403).json({ message: "No Shows Found !!" });
        }

        res.status(200).json({ message: "some Shows found ", allShows })
    } catch (error) {
        console.log("Internal Server Error in giveShowsForHome");
        res.status(500).json({ message: "Internal Server error in giveShowsForHome" });
    }
}

export const addNewShow = async (req, res) => {
    try {
        const {
            showName,
            showReleaseDate,
            showEndDate,
            showDescription,
            showVerdict,
            showLanguage,
            showDirector,
            showStarCast,
            showCrewCast,
            showNoOfSeasons,
            showNoOfEpisodes,
            showRunTime,
            showMovieBarosRating,
            showImdbRating,
            showRottenTomatoesRating,
            showAgeRating,
            showGenre,
            showPoster,
            showTrailer,
            showWatchLinks,
            movieBarosViews
        } = req.body;

        const showAlreadyExists = await Show.findOne({ showName })

        if (showAlreadyExists) {
            return res.status(403).json({ message: `These Show Already Exists, Existing - ${showAlreadyExists.showName}` })
        }

        const newShow = new Show({
            showName,
            showReleaseDate,
            showEndDate,
            showDescription,
            showVerdict,
            showLanguage,
            showDirector,
            showStarCast,
            showCrewCast,
            showNoOfSeasons,
            showNoOfEpisodes,
            showRunTime,
            showMovieBarosRating,
            showImdbRating,
            showRottenTomatoesRating,
            showAgeRating,
            showGenre,
            showPoster,
            showTrailer,
            showWatchLinks,
            movieBarosViews
        })

        if (newShow) {
            await newShow.save()
            console.log(newShow, "saved into the database");
            return res.status(201).json({ message: "Show added successfully", data: newShow });
        }
    } catch (error) {
        console.log("Internal Server error, addNewShow controller:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}