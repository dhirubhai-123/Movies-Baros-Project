
import PlayList from "../models/playlist.model.js"

export const addToPlayList = async (req, res) => {
    const { userId, type, mediaId, playListName } = req.body;
    if (!userId || !type || !mediaId || !playListName) {
        return res.status(400).json({ message: "Wrong data provided" });
    }

    try {
        const playList = await PlayList.findOne({ userId, playListName });

        if (!playList) {
            return res.status(400).json({ message: `No PlayList found with ${userId} & ${playListName}` });
        }

        if (type === "show") {
            // Check for duplicate before adding to showIds
            if (!playList.showIds.includes(mediaId)) {
                playList.showIds.push(mediaId);
            } else {
                return res.status(400).json({ message: "This show is already in your playlist" });
            }
        } else if (type === "movie") {
            // Check for duplicate before adding to movieIds
            if (!playList.movieIds.includes(mediaId)) {
                playList.movieIds.push(mediaId);
            } else {
                return res.status(400).json({ message: "This movie is already in your playlist" });
            }
        }

        await playList.save();

        res.status(200).json({ message: `${type} added to playlist`, playList });

    } catch (error) {
        console.log("Internal Server Error,", error);
        res.status(500).json({ message: "Internal Server Error in Adding media into Playlist" });
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
            // Ensure we're returning the filtered result correctly
            playList.showIds = playList.showIds.filter(
                (showId) => showId.toString() !== mediaId.toString() // Return the condition
            );
        } else if (type === "movie") {
            // Ensure we're returning the filtered result correctly
            playList.movieIds = playList.movieIds.filter(
                (movieId) => movieId.toString() !== mediaId.toString() // Return the condition
            );
        }

        // Save the updated playlist
        await playList.save();

        res.status(200).json({ message: `${type} removed from playlist`, playList });

    } catch (error) {
        console.log("Internal Server Error,", error);
        res.status(500).json({ message: "Internal Server Error, removing media from Playlist" });
    }
}


export const givePlayListContent = async (req, res) => {

    const { userId, playListName, playListId } = req.body;
    let moviesInPlayList = [];
    let showsInPlayList = [];

    if (!userId || !playListName || !playListId) {
        return res.status(400).json({ message: `wrong data provided!` })
    }

    try {
        const playList = await PlayList.findOne({
            playListName,
            userId,
            _id: playListId
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

export const createPlayList = async (req, res) => {

    const { userId, playListName } = req.body;

    if (!userId || !playListName) {
        return res.status(400).json({ message: "Wrong data provided" });
    }

    try {

        const playList = await PlayList.findOne({ userId, playListName });

        if (playList) {
            return res.status(400).json({ message: `PlayList Already Exists with userId-${userId} & Name-${playListName}` });
        }

        const newPlayList = new PlayList({
            playListName: playListName,
            userId: userId,
        })
        await newPlayList.save();

        res.status(200).json({ message: `new Playlist created with ${playListName}`, newPlayList })

    } catch (error) {
        console.log("Internal Server Error,", error);
        res.status(500).json({ message: "Internal Server Error in creating new Playlist" })
    }
}

export const deletePlayList = async (req, res) => {
    const { userId, playListName, playListId } = req.body;

    if (!userId || !playListName || !playListId) {
        return res.status(400).json({ message: "Wrong data provided" });
    }

    try {

        const playList = await PlayList.deleteOne({ playListId });

        if (!playList) {
            return res.status(400).json({ message: `Cannot Delete PlayList` });
        }

        res.status(200).json({ message: `PlayList Successfully Deleted`, success: true })

    } catch (error) {
        console.log("Internal Server Error,", error);
        res.status(500).json({ message: "Internal Server Error in Deleting playlist" })
    }
}