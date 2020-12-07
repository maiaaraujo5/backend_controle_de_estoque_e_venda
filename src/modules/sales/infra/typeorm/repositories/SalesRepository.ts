import ISalesRepository from "@modules/sales/repositories/ISalesRepository";
import ICreateSaleDTO from "@modules/sales/dtos/ICreateSaleDTO";
import Sales from "@modules/sales/infra/typeorm/entities/Sales";
import {getRepository, Repository} from "typeorm";

export default class SalesRepository implements ISalesRepository {
    private ormRepository: Repository<Sales>

    constructor() {
        this.ormRepository = getRepository(Sales)
    }

    public async create(data: ICreateSaleDTO): Promise<Sales> {
        const sale = this.ormRepository.create(data)

        await this.ormRepository.save(sale)

        return sale
    }

}
