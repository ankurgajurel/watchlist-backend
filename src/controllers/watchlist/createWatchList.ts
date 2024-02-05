import { Request, Response } from "express";
import { DatabaseConfig } from "../../dataSource";
import { WatchList } from "../../entity/WatchList";

export async function createWatchList(req: Request, res: Response) {
    const watchListRepository = DatabaseConfig.getRepository(WatchList);
    const { name } = req.body;

    if (!req.body) {
        return res.status(400).json({ error: "watchlist name is requred" });
    }

    const existingWatchList = await watchListRepository.findOne({ where: { name } });

    if (existingWatchList) {
        return res.status(400).json({ message: "choose new watchlist name" });
    }

    const newWatchList = watchListRepository.create({ name });

    await watchListRepository.save(newWatchList);

    return res.status(201).json({
        "message": `new watchlist ${name} created.`
    });
}