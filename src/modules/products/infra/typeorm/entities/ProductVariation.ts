import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, JoinTable, ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Exclude} from "class-transformer";
import Products from "@modules/products/infra/typeorm/entities/Products";
import Variations from "@modules/variations/infra/typeorm/entities/variations";

@Entity('products_variations')
class ProductVariation {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Exclude()
    @Column()
    product_id: string

    @ManyToOne(() => Products, product => product, {
        eager: true
    })
    @JoinColumn({name: 'product_id'})
    product: Products

    @Exclude()
    @Column()
    variation_id: string

    @ManyToOne(() => Variations, variation => variation, {
        eager: true
    })
    @JoinColumn({name: 'variation_id'})
    variation: Variations

    @Column()
    variation_value: string

    @Column()
    quantity: number

    @Column()
    price: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default ProductVariation
