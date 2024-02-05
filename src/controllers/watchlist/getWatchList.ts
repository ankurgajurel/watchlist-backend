import { Request, Response } from "express";

import { DatabaseConfig } from "../../dataSource";
import { WatchList } from "../../entity/WatchList";

export async function getWatchList(req: Request, res: Response) {

    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: "watchlist name is required" });
    }

    const watchListRepository = DatabaseConfig.getRepository(WatchList);
    const watchList = await watchListRepository.find({ where: { name: name } })

    if (!watchList) {
        return res.status(404).json({ message: "watchlist not found" });
    }

    return res.status(200).json(watchList);
}