import IProductsSaleRepository from "@modules/sales/repositories/IProductsSaleRepository";
import ICreateProductsSaleDTO from "@modules/sales/dtos/ICreateProductsSaleDTO";
import ProductsSales from "@modules/sales/infra/typeorm/entities/ProductsSales";
import {getRepository, Repository} from "typeorm";

export default class ProductsSalesRepository implements IProductsSaleRepository {
    private ormRepository: Repository<ProductsSales>

    constructor() {
        this.ormRepository = getRepository(ProductsSales)
    }

    public async create(data: ICreateProductsSaleDTO): Promise<ProductsSales> {
        const productsSale = this.ormRepository.create(data)
        await this.ormRepository.save(productsSale)
        return productsSale
    }

    public async findBySaleId(sale_id: string): Promise<ProductsSales[] | undefined> {
        return this.ormRepository.find({
            where: {sale_id}
        })
    }

}
