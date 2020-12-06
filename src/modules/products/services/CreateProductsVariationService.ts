import IProductsVariationsRepository from "@modules/products/repositories/IProductsVariationsRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    product_id: string,
    variations: [{
        variation_id: string,
        variation_value: string,
        quantity: number,
        price: number,
    }]
}

@injectable()
export default class CreateProductsVariationService {
    constructor(
        @inject("ProductsVariationsRepository")
        private productVariationsRepository: IProductsVariationsRepository,
    ) {
    }

    public async execute(data: IRequest): Promise<void> {
        await this.productVariationsRepository.create({
            productId: data.product_id,
            variations: data.variations
        })
    }
}
