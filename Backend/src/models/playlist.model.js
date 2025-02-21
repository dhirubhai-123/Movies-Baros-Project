import mongoose from "mongoose";

const playListSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        playListName: {
            type: String,
            required: true,
        },
        movieIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Movie", // Reference to the Movie model
            },
        ],
        showIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Show", // Reference to the Show model
            },
        ],
    },
    {
        timestamps: true,
    }
);

const PlayList = mongoose.model("Playlist", playListSchema);

export default PlayList;
