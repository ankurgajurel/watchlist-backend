import { Request, Response } from "express";
import { WatchList } from "../../entity/WatchList";
import { DatabaseConfig } from "../../dataSource";

export async function deleteWatchList(req: Request, res: Response) {
    const watchListRepository = DatabaseConfig.getRepository(WatchList);
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "watchlist name required" });
    }

    const watchList = await watchListRepository.findOne({ where: { name } });

    if (!watchList) {
        return res.status(404).json({ message: `watchlist ${name} not found` });
    }

    await watchListRepository.remove(watchList);

    return res.status(200).json({
        "message": `watchlist ${name} deleted.`
    });
}