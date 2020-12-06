import IProductsVariationsRepository from "@modules/products/repositories/IProductsVariationsRepository";
import {inject, injectable} from "tsyringe";
import Products from "@modules/products/infra/typeorm/entities/Products";
import Variations from "@modules/variations/infra/typeorm/entities/variations";
import variations from "@modules/variations/infra/typeorm/entities/variations";

interface IResponse {
    product: Products
    variations: variation[]
}

interface variation {
    value: string
    price: number
    quantity: number
}

@injectable()
export default class FindProductsVariationsService {
    constructor(
        @inject("ProductsVariationsRepository")
        private productsVariations: IProductsVariationsRepository
    ) {
    }

    public async execute(product_id: string): Promise<IResponse | undefined> {

        const productVariations = await this.productsVariations.findByProductId(product_id)

        if (productVariations) {
            const variations = Array<variation>()
            productVariations.forEach(value => {
                variations.push({
                    value: value.variation_value,
                    price: value.price,
                    quantity: value.quantity
                })
            })

            return {product: productVariations[0].product, variations: variations}
        }
    }
}
