import {inject, injectable} from "tsyringe";
import IFactoriesRepository from "@modules/factories/repositories/IFactoriesRepository";
import Factory from "@modules/factories/infra/typeorm/entities/Factory";
import AppError from "@shared/errors/AppError";

interface IRequest {
    name: string
}

@injectable()
export default class CreateFactoryService {
    constructor(
        @inject('FactoriesRepository')
        private factoryRespitory: IFactoriesRepository
    ) {
    }

    public async execute({name}: IRequest): Promise<Factory> {
        const factoryExists = await this.factoryRespitory.findByName(name)

        if (factoryExists) {
            throw new AppError('This factory already exists')
        }

        return this.factoryRespitory.create({
            name
        })
    }
}
