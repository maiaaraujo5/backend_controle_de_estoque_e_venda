import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import ProductVariation from "@modules/products/infra/typeorm/entities/ProductVariation";

@Entity('products_sales')
export default class ProductsSales {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    @Exclude()
    product_variation_id: string

    @ManyToOne(() => ProductVariation, productVariation => productVariation, {
        eager: true
    })
    @JoinColumn({name: 'product_variation_id'})
    product_variation: ProductVariation

    @Column()
    @Exclude()
    sale_id: string

    @Column()
    price: number

    @Column()
    quantity: number

    @Column()
    status: string
}
