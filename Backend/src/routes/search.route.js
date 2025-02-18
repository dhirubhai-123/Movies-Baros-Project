import express from "express"
import { searchSuggestions } from "../controllers/search.controller.js";

const searchRouter = express.Router();

searchRouter.get("/searchSuggestions/:searchName", searchSuggestions )

export default searchRouter;