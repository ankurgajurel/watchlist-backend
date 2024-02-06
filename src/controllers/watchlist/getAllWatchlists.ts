import { DatabaseConfig } from "../../dataSource";
import { WatchList } from "../../entity/WatchList";
import { Request, Response } from "express";

export async function getAllWatchLists(req: Request, res: Response){
    const watchListRepository = DatabaseConfig.getRepository(WatchList)

    const watchLists = await watchListRepository.find()

    return res.status(200).json(watchLists)
}