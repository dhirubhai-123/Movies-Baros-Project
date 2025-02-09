import express from "express"
import { giveShowsForHome, addNewShow } from "../controllers/shows.controller.js";
import { checkIncomingShow } from "../middleware/shows.middlewear.js";


const router = express.Router();

router.get("/getshows", giveShowsForHome);
router.post("/addshow", checkIncomingShow, addNewShow);

export default router;