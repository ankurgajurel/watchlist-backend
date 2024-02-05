import { Request, Response } from "express";

import { DatabaseConfig } from "../../dataSource";
import { WatchList } from "../../entity/WatchList";
import { Video } from "../../entity/Video";

export async function getWatchListVideos(req: Request, res: Response) {

    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: "watchlist name is required" });
    }

    const watchListRepository = DatabaseConfig.getRepository(WatchList);
    const watchList = await watchListRepository.findOne({ where: { name: name } })

    if (!watchList) {
        return res.status(404).json({ message: "watchlist not found" });
    }

    const videoRepository = DatabaseConfig.getRepository(Video);
    const videos = await videoRepository.find({ where: { watchListId: watchList.id } });

    console.log(videos);

    return res.status(200).json(videos);
}