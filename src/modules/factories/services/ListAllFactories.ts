import {inject, injectable} from "tsyringe";
import IFactoriesRepository from "@modules/factories/repositories/IFactoriesRepository";
import Factory from "@modules/factories/infra/typeorm/entities/Factory";
import AppError from "@shared/errors/AppError";

@injectable()
export default class CreateFactoryService {
    constructor(
        @inject('FactoriesRepository')
        private factoryRespitory: IFactoriesRepository
    ) {
    }

    public async execute(): Promise<Factory[]> {
        return this.factoryRespitory.listAll()
    }
}
