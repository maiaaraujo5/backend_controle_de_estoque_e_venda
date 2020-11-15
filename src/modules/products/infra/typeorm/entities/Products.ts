import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import Category from "@modules/categories/infra/typeorm/entities/Category";
import Factory from "@modules/factories/infra/typeorm/entities/Factory";
import {Exclude, Expose} from 'class-transformer';

@Entity('products')
class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(() => Category, {
        eager: true
    })
    @JoinColumn({name: 'category_id'})
    category: Category

    @Column()
    @Exclude()
    category_id: string


    @ManyToOne(() => Factory, factory => factory, {
        eager: true
    })
    @JoinColumn({name: 'factory_id'})
    factory: Factory

    @Column()
    @Exclude()
    factory_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Products
