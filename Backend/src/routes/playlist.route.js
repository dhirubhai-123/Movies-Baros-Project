import express from "express"
import { givePlayListContent, removeFromPlayList, addToPlayList, giveAllPlayLists, createPlayList, deletePlayList } from "../controllers/playlist.controller.js";

const playListRouter = express.Router();

playListRouter.post("/showPlayList/:playListName", givePlayListContent);
playListRouter.post("/add-to-playlist", addToPlayList);
playListRouter.post("/remove-from-playlist", removeFromPlayList);
playListRouter.post("/all-playlists", giveAllPlayLists)
playListRouter.post("/create-playlist", createPlayList);
playListRouter.delete("/delete-playlist", deletePlayList)

export default playListRouter;