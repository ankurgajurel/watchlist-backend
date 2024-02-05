import { Response, Request } from "express"
import { DatabaseConfig } from "../../dataSource"
import { Video } from "../../entity/Video";
import { WatchList } from "../../entity/WatchList";

export async function removeVideo(req: Request, res: Response) {
    const {
        watchListId,
        name
    } = req.body;

    if (!watchListId || !name) {
        return res.status(400).json({ message: "watchListId and videoName are required" });
    }

    const videoRepository = DatabaseConfig.getRepository(Video);
    const watchListRepository = DatabaseConfig.getRepository(WatchList);

    const watchList = await watchListRepository.findOne({ where: { id: watchListId } });

    if (!watchList) {
        return res.status(404).json({ message: "watchlist not found" });
    }

    const video = await videoRepository.findOne({ where: { name, watchListId } });

    if (!video) {
        return res.status(404).json({ message: "video not found" });
    }

    await videoRepository.remove(video);

    return res.status(200).json({ message: "video removed" });
}