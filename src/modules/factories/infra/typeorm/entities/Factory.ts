import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Exclude} from "class-transformer";

@Entity('factories')
export default class Factory {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    @Exclude()
    created_at: Date
}
