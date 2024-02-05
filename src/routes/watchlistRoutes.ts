import { Router } from "express";

import { deleteWatchList } from "../controllers/watchlist/deleteWatchList";
import { createWatchList } from "../controllers/watchlist/createWatchList";
import { getWatchList } from "../controllers/watchlist/getWatchList";

const watchListRouter: Router = Router();

watchListRouter.get("/", getWatchList)
watchListRouter.post("/", createWatchList)
watchListRouter.delete("/", deleteWatchList)

export { watchListRouter };