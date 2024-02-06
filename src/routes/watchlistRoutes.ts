import { Router } from "express";

import { deleteWatchList } from "../controllers/watchlist/deleteWatchList";
import { createWatchList } from "../controllers/watchlist/createWatchList";
import { getWatchListVideos } from "../controllers/watchlist/getWatchListVideos";
import { getAllWatchLists } from "../controllers/watchlist/getAllWatchlists";

const watchListRouter: Router = Router();

watchListRouter.get("/", getWatchListVideos)
watchListRouter.post("/", createWatchList)
watchListRouter.delete("/", deleteWatchList)
watchListRouter.get('/all', getAllWatchLists)

export { watchListRouter };