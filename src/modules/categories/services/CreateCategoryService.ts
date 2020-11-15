import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";
import {inject, injectable} from "tsyringe";
import Category from "@modules/categories/infra/typeorm/entities/Category";

interface IRequest {
    name: string
}


@injectable()
export default class CreateCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesRepository
    ) {
    }

    public async execute({name}: IRequest): Promise<Category> {
        return await this.categoryRepository.create({
            name
        })
    }
}
