import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";
import ICreateCategoryDTO from "@modules/categories/dtos/ICreateCategoryDTO";
import Category from "@modules/categories/infra/typeorm/entities/Category";
import {getRepository, Repository} from "typeorm";

export default class CategoryRespository implements ICategoriesRepository {

    private ormRepository: Repository<Category>

    constructor() {
        this.ormRepository = getRepository(Category)
    }


    public async create(data: ICreateCategoryDTO): Promise<Category> {
        const category = this.ormRepository.create(data)

        await this.ormRepository.save(category)

        return category
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id)

    }

    public async findAllCategories(): Promise<Category[]> {
        return this.ormRepository.find()
    }

    public async save(category: Category): Promise<Category> {
        return this.ormRepository.save(category)
    }

    public async findById(id: string): Promise<Category | undefined> {
        return this.ormRepository.findOne({
            where: {id}
        })
    }
}
