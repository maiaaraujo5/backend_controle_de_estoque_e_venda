import Variations from "@modules/variations/infra/typeorm/entities/variations";
import ICreateVariationsDTO from "@modules/variations/dtos/ICreateVariationsDTO";

export default interface IVariationsRepository {
    create(data: ICreateVariationsDTO): Promise<Variations>

    listAll(): Promise<Variations[]>

    findByName(name: string): Promise<Variations | undefined>
}
