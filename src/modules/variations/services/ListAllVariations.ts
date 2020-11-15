import {inject, injectable} from "tsyringe";
import IVariationsRepository from "@modules/variations/repositories/IVariationsRepository";
import Variations from "@modules/variations/infra/typeorm/entities/variations";

@injectable()
export default class CreateFactoryService {
    constructor(
        @inject('VariationsRepository')
        private variationsRepository: IVariationsRepository
    ) {
    }

    public async execute(): Promise<Variations[]> {
        return this.variationsRepository.listAll()
    }
}
