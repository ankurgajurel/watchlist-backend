import { Router } from "express";

import { deleteWatchList } from "../controllers/watchlist/deleteWatchList";
import { createWatchList } from "../controllers/watchlist/createWatchList";
import { getWatchListVideos } from "../controllers/watchlist/getWatchListVideos";

const watchListRouter: Router = Router();

watchListRouter.get("/", getWatchListVideos)
watchListRouter.post("/", createWatchList)
watchListRouter.delete("/", deleteWatchList)

export { watchListRouter };