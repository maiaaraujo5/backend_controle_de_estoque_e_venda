import {inject, injectable} from "tsyringe";
import Factory from "@modules/factories/infra/typeorm/entities/Factory";
import AppError from "@shared/errors/AppError";
import IVariationsRepository from "@modules/variations/repositories/IVariationsRepository";

interface IRequest {
    name: string
}

@injectable()
export default class CreateVariationService {
    constructor(
        @inject('VariationsRepository')
        private variationsRepository: IVariationsRepository
    ) {
    }

    public async execute({name}: IRequest): Promise<Factory> {
        const factoryExists = await this.variationsRepository.findByName(name)

        if (factoryExists) {
            throw new AppError('This category already exists')
        }

        return this.variationsRepository.create({
            name
        })
    }
}
