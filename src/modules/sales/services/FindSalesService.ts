import IProductsSaleRepository from "@modules/sales/repositories/IProductsSaleRepository";
import {inject, injectable} from "tsyringe";


interface IResponse {
    products: Product[],
    total: number,
    status: string
}

interface Product {
    name: string
    quantity: number,
    price: number,
    status: string,
    category: string,
    variation_name: string
    variation_value: string
}

@injectable()
export default class FindSalesService {
    constructor(
        @inject('ProductsSaleRepository')
        private salesRepository: IProductsSaleRepository
    ) {
    }

    public async execute(sale_id: string): Promise<IResponse> {
        const productsSale = await this.salesRepository.findBySaleId(sale_id)

        let products: Array<Product> = []
        let total: number = 0
        if (productsSale) {
            for (const product of productsSale) {
                total += product.price * product.quantity
                products.push({
                    name: product.product_variation.product.name,
                    quantity: product.quantity,
                    price: product.price,
                    category: product.product_variation.product.category.name,
                    status: product.status,
                    variation_name: product.product_variation.variation.name,
                    variation_value: product.product_variation.variation_value,
                })
            }
        }

        return {
            products,
            total,
            status: "SOLD"
        }
    }
}
