import {getRepository, Repository} from "typeorm";
import IVariationsRepository from "@modules/variations/repositories/IVariationsRepository";
import Variations from "@modules/variations/infra/typeorm/entities/variations";
import ICreateVariationsDTO from "@modules/variations/dtos/ICreateVariationsDTO";

export default class VariationRepository implements IVariationsRepository {

    private ormRepository: Repository<Variations>

    constructor() {
        this.ormRepository = getRepository(Variations)
    }

    public async create({name}: ICreateVariationsDTO): Promise<Variations> {
        const factory = this.ormRepository.create({
            name
        })

        await this.ormRepository.save(factory)

        return factory
    }

    public async listAll(): Promise<Variations[]> {
        return this.ormRepository.find()
    }

    public async findByName(name: string): Promise<Variations | undefined> {
        return this.ormRepository.findOne({
            where: {name}
        })
    }
}
