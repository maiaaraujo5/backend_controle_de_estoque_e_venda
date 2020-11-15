import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import {inject, injectable} from "tsyringe";
import Products from "@modules/products/infra/typeorm/entities/Products";
import AppError from "@shared/errors/AppError";
import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";
import IFactoriesRepository from "@modules/factories/repositories/IFactoriesRepository";

interface IRequest {
    name: string,
    description: string,
    category_id: string,
    factory_id: string,
}


@injectable()
export default class CreateProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository,
    ) {
    }

    public async execute({name, description, category_id, factory_id}: IRequest): Promise<Products> {
        const productExists = await this.productsRepository.findByName(name)

        if (productExists) {
            throw new AppError('There is already a product with this name')
        }

        return this.productsRepository.create({
            name,
            description,
            category_id,
            factory_id
        })
    }
}
