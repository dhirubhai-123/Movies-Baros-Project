import express from "express"
import { giveShowsForHome, addNewShow, getRelatedYoutubeVideos, genreWiseShows, giveShowDetails } from "../controllers/shows.controller.js";
import { checkIncomingShow } from "../middleware/shows.middlewear.js";


const showsRouter = express.Router();

showsRouter.get("/getshowsforhome", giveShowsForHome);
showsRouter.get("/:genre", genreWiseShows);
showsRouter.get("/showdetails/:showName", giveShowDetails);
showsRouter.post("/addshow", checkIncomingShow, addNewShow);
showsRouter.post("/getRelatedYoutubeVideos", getRelatedYoutubeVideos);

export default showsRouter;