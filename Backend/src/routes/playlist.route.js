import express from "express"
import { givePlayListContent, removeFromPlayList, addToPlayList, giveAllPlayLists } from "../controllers/playlist.controller.js";

const playListRouter = express.Router();

playListRouter.post("/showPlayList/:playListName", givePlayListContent);
playListRouter.post("/add-to-playlist", addToPlayList);
playListRouter.post("/remove-from-playlist", removeFromPlayList);
playListRouter.post("/all-playlists", giveAllPlayLists)

export default playListRouter;