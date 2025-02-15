
import Show from "../models/shows.model.js"

export const giveShowsForHome = async (req, res) => {

    let dramaShows = [];
    let actionShows = [];
    let horrorShows = [];
    let romanticShows = [];
    let fantasyShows = [];
    let mysteryShows = [];
    let animatedShows = [];
    let scifiShows = [];

    try {
        const allShows = await Show.find({});
        if (!allShows) {
            return res.status(403).json({ message: "No Shows Found !!" });
        }

        dramaShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Drama" },
                { 'showGenre.genre2': "Drama" },
                { 'showGenre.genre3': "Drama" }
            ]
        });

        actionShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Action" },
                { 'showGenre.genre2': "Action" },
                { 'showGenre.genre3': "Action" }
            ]
        });

        horrorShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Horror" },
                { 'showGenre.genre2': "Horror" },
                { 'showGenre.genre3': "Horror" }
            ]
        });

        romanticShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Romance" },
                { 'showGenre.genre2': "Romance" },
                { 'showGenre.genre3': "Romance" }
            ]
        });

        fantasyShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Fantasy" },
                { 'showGenre.genre2': "Fantasy" },
                { 'showGenre.genre3': "Fantasy" }
            ]
        });

        mysteryShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Mystery" },
                { 'showGenre.genre2': "Mystery" },
                { 'showGenre.genre3': "Mystery" }
            ]
        });

        animatedShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Animation" },
                { 'showGenre.genre2': "Animation" },
                { 'showGenre.genre3': "Animation" }
            ]
        });

        scifiShows = await Show.find({
            $or: [
                { 'showGenre.genre1': "Sci-Fi" },
                { 'showGenre.genre2': "Sci-Fi" },
                { 'showGenre.genre3': "Sci-Fi" }
            ]
        });


        res.status(200).json({
            message: "some Shows found ", allShows: allShows,
            dramaShows: dramaShows,
            actionShows: actionShows,
            horrorShows: horrorShows,
            romanticShows: romanticShows,
            fantasyShows: fantasyShows,
            mysteryShows: mysteryShows,
            animatedShows: animatedShows,
            scifiShows: scifiShows,
        });

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

export const genreWiseShows = async (req, res) => {
    try {
        const showGenre = req.params.genre;
        const genreShows = await Show.find({
            $or: [
                { 'showGenre.genre1': showGenre },
                { 'showGenre.genre2': showGenre },
                { 'showGenre.genre3': showGenre }
            ]
        })

        return res.status(200).json({ message: `Shows found for genre: ${showGenre}`, genreShows: genreShows });

    } catch (error) {
        console.log("internal server error, genreWiseShows")
        res.status(500).json({ message: "Internal Server Error genreWiseShows" });
    }

    // res.status(200).json({ message: `sucess: ${req.params.genre}` });
}

export const giveShowDetails = async (req, res) => {
    try {
        const showId = req.params.showName;
        const showDetails = await Show.findOne({ _id: `${showId}` });

        if (!showDetails) {
            res.status(403).json({ message: `These Show doesn't exists in database ${showId}` });
        }

        res.status(200).json({ message: `showDetails found`, showDetails: showDetails });

    } catch (error) {
        console.log("Internal Server Error, giveShowDetails", error.message)
        res.status(500).json({ message: `Internal Server Error in giveShowDetails` });
    }
}

export const getRelatedYoutubeVideos = async (req, res) => {
    const YT_API = process.env.YOUTUBE_API_KEY;
    try {
        const { showName } = req.body;
        // Make request to YouTube Data API to search for videos related to the movie
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 6, // You can adjust the number of results here
                q: showName, // Query with movie title
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