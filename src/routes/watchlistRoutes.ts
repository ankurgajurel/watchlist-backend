import { deleteWatchList } from "../controllers/watchlist/deleteWatchList";
import { createWatchList } from "../controllers/watchlist/createWatchList";
import { Router } from "express";

const watchListRouter: Router = Router();

watchListRouter.get("/", (req, res) => {
    res.send("get watchLists")
})
watchListRouter.post("/", createWatchList)
watchListRouter.delete("/", deleteWatchList)

export { watchListRouter };