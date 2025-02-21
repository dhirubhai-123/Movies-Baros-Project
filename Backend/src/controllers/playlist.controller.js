
import PlayList from "../models/playlist.model.js"

export const addToPlayList = async (req, res) => {
    const { userId, type, mediaId, playListName } = req.body;
    if (!userId || !type || !mediaId || !playListName) {
        return res.status(400).json({ message: "Wrong data provided" });
    }

    try {

        const playList = await PlayList.findOne({ userId, playListName });

        if (!playList) {
            // const playList = new PlayList({
            //     playListName: playListName,
            //     userId: userId,
            // })
            // await playList.save();
            return res.status(400).json({ message: `No PlayList found with ${userId} & ${playListName}` });

        }

        if (type === "show" && !playList.movieIds.includes(mediaId)) {
            playList.showIds.push(mediaId);
        } else if (type === "movie" && !playList.showIds.includes(mediaId)) {
            playList.movieIds.push(mediaId);
        }

        await playList.save();

        res.status(200).json({ message: `${type} added in playlist` });

    } catch (error) {
        console.log("Internal Server Error,", error);
        return res.status(500).json({ message: "Internal Server Error in Adding media into Playlist" })
    }

}

export const removeFromPlayList = async (req, res) => {
    const { type, userId, mediaId, playListName } = req.body;
    if (!userId || !type || !mediaId || !playListName) {
        return res.status(400).json({ message: "Wrong data provided" });
    }

    try {

        const playList = await PlayList.findOne({ userId, playListName });

        if (!playList) {
            return res.status(400).json({ message: `Playlist not found !!` });
        }

        if (type === "show") {
            playList.showIds = playList.showIds.filter(
                (showId) => { showId.toString() !== mediaId.toString(); }
            )
        } else if (type === "movie") {
            playList.movieIds = playList.movieIds.filter(
                (movieId) => { movieId.toString() !== mediaId.toString(); }
            )
        }

        await playList.save();

        res.status(200).json({ message: `${type} removed from playlist`, playList });

    } catch (error) {
        console.log("Internal Server Error,", error);
        res.status(500).json({ message: "Internal Server Error, removing media from Playlist", playList })
    }
}

export const givePlayListContent = async (req, res) => {

    const playListName = req.params.playListName;
    let moviesInPlayList = [];
    let showsInPlayList = [];
    const { userId } = req.body;

    try {
        const playList = await PlayList.find({
            playListName: playListName,
            userId: userId,
        });

        if (!playList) {
            return res.status(400).json({ message: `No PlayList Found with ${playListName}.` })
        }

        moviesInPlayList = playList.movieIds;
        showsInPlayList = playList.showIds;

        res.status(200).json({ message: `playlist found`, moviesInPlayList, showsInPlayList })

    } catch (error) {
        console.log("Internal Server Error, in finding movies and shows in Playlist")
        res.status(500).json({ message: `Internal Server Error - givePlayListContent, ${error.message}` });
    }
}

export const giveAllPlayLists = async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ message: "Wrong data provided" });
    }

    try {
        const allPlayLists = await PlayList.find({ userId: userId });

        if (!allPlayLists || allPlayLists.length === 0) {
            return res.status(400).json({ message: `no playlist found with theseId ${userId}` });
        }

        res.status(200).json({ message: `playlist's found with ${userId}`, allPlayLists })

    } catch (error) {
        console.log("Internal Server Error, in finding playList with userId")
        res.status(500).json({ message: `Internal Server Error - giveAllPlayLists, ${error.message}` });
    }
}