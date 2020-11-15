import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import {inject, injectable} from "tsyringe";
import Products from "@modules/products/infra/typeorm/entities/Products";

interface IResponse {
    products: Products[]
}


@injectable()
export default class listAllProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ) {
    }

    public async execute(): Promise<IResponse> {
        const products = await this.productsRepository.listAll()
        return {
            products
        }
    }
}
