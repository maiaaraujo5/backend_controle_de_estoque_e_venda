import {inject, injectable} from "tsyringe";
import ICategoriesRepository from "@modules/category/repositories/ICategoriesRepository";
import Category from "@modules/category/infra/typeorm/entities/Category";

@injectable()
export default class ListAllCategoriesService {
    
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesRepository
    ) {
    }

    public async execute(): Promise<Category[]> {
        return this.categoryRepository.findAllCategories()
    }
}
