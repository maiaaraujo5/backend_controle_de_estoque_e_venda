import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('factories')
export default class Factory {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date
}
