import dotenv from "dotenv"

dotenv.config()

import express from 'express';
import { DatabaseConfig } from './dataSource';
import { videoRouter, watchListRouter } from './routes';

const app = express();

DatabaseConfig.initialize().then(async () => {
    console.log("database connected")

    app.use(express.json());

    app.use("/api/v1/watchlist", watchListRouter)
    app.use("/api/v1/videos", videoRouter)

    app.listen(3000, () => {
        console.log("server is running on port 3000")
    })

}).catch((err) => console.log("something went wrong", err))
