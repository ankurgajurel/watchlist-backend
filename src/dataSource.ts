import { Video } from "./entity/Video"
import { WatchList } from "./entity/WatchList"
import "reflect-metadata"
import { DataSource } from "typeorm"

export const DatabaseConfig = new DataSource({
    type: `${process.env.DB_TYPE}` as any,
    host: `${process.env.DB_HOST}`,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_NAME}`,
    entities: [WatchList, Video],
})
