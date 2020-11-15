import IFactoriesRepository from "@modules/factories/repositories/IFactoriesRepository";
import ICreateFactoryDTO from "@modules/factories/dtos/ICreateFactoryDTO";
import Factory from "@modules/factories/infra/typeorm/entities/Factory";
import {getRepository, Repository} from "typeorm";

export default class FactoryRepository implements IFactoriesRepository {

    private ormRepository: Repository<Factory>

    constructor() {
        this.ormRepository = getRepository(Factory)
    }

    public async create({name}: ICreateFactoryDTO): Promise<Factory> {
        const factory = this.ormRepository.create({
            name
        })

        await this.ormRepository.save(factory)

        return factory
    }

    public async listAll(): Promise<Factory[]> {
        return this.ormRepository.find()
    }

    public async findByName(name: string): Promise<Factory | undefined> {
        return this.ormRepository.findOne({
            where: {name}
        })
    }
}
