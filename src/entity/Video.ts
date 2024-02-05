import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    url!: string;

    @Column()
    watchListId!: number;
}