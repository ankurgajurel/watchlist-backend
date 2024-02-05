import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    videoName!: string;

    @Column()
    videoUrl!: string;

    @Column()
    watchListId!: number;
}