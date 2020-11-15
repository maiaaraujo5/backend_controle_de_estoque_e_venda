import ICreateFactoryDTO from "@modules/factories/dtos/ICreateFactoryDTO";
import Factory from "@modules/factories/infra/typeorm/entities/Factory";

export default interface IFactoriesRepository {
    create(data: ICreateFactoryDTO): Promise<Factory>

    listAll(): Promise<Factory[]>

    findByName(name: string): Promise<Factory | undefined>
}
