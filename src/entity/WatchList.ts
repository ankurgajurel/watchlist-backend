import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Video } from "./Video";

@Entity()
export class WatchList {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(() => Video, video => video.watchListId)
    videos!: Video[];
}