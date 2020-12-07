import {inject, injectable} from "tsyringe";
import IProductsSaleRepository from "@modules/sales/repositories/IProductsSaleRepository";
import ISalesRepository from "@modules/sales/repositories/ISalesRepository";
import ProductsSales from "@modules/sales/infra/typeorm/entities/ProductsSales";

interface IRequest {
    seller_id: string
    products: [{
        product_variation_id: string,
        price: number,
        quantity: number,
    }]
}


@injectable()
export default class RegisterSaleService {
    constructor(
        @inject('ProductsSaleRepository')
        private salesProductsRepository: IProductsSaleRepository,
        @inject('SalesRepository')
        private salesRepository: ISalesRepository,
    ) {
    }

    public async execute({seller_id, products}: IRequest): Promise<ProductsSales[] | undefined> {
        const sale = await this.salesRepository.create({user_id: seller_id})

        let productsSale: Array<ProductsSales> = []
        for (const product of products) {
            const saleProduct = await this.salesProductsRepository.create({
                price: product.price,
                product_variation_id: product.product_variation_id,
                quantity: product.quantity,
                sale_id: sale.id,
                status: "SOLD"
            })
            productsSale.push(saleProduct)
        }
        return productsSale
    }
}
