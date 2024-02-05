import { DatabaseConfig } from "../../dataSource";
import { Video } from "../../entity/Video";
import { WatchList } from "../../entity/WatchList";
import { Request, Response } from "express";

export async function addNewVideo(req: Request, res: Response) {
    const {
        name,
        url,
        watchListId
    } = req.body;

    if (!name || !url || !watchListId) {
        return res.status(400).json({ message: "videoName, videoUrl and watchListId are required" });
    }

    const watchListRepository = await DatabaseConfig.getRepository(WatchList).findOne({ where: { id: watchListId } });

    if (!watchListRepository) {
        return res.status(404).json({ message: "watchlist not found" });
    }

    const videoRepository = DatabaseConfig.getRepository(Video);

    const newVideo = videoRepository.create({ name, url, watchListId });

    await videoRepository.save(newVideo);

    return res.status(201).json({ message: "video added" });
}