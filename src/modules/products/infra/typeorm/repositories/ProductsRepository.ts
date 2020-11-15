import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import Products from "@modules/products/infra/typeorm/entities/Products";
import ICreateProductDTO from "@modules/products/dtos/ICreateProductDTO";
import {getRepository, Repository} from "typeorm";

class ProductsRepository implements IProductsRepository {
    private ormRepository: Repository<Products>

    constructor() {
        this.ormRepository = getRepository(Products)
    }


    public async create(data: ICreateProductDTO): Promise<Products> {
        const product = this.ormRepository.create(data)

        await this.ormRepository.save(product)

        return product
    }

    public async listAll(): Promise<Products[]> {
        return this.ormRepository.find()
    }

    public async findByName(name: string): Promise<Products | undefined> {
        return this.ormRepository.findOne({
            where: {name}
        })
    }

}

export default ProductsRepository
