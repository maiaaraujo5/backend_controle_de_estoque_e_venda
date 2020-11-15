import ICategoriesRepository from "@modules/category/repositories/ICategoriesRepository";
import {inject, injectable} from "tsyringe";
import Category from "@modules/category/infra/typeorm/entities/Category";

@injectable()
export default class DeleteCategoryService {
    constructor(
        @inject('CategoriesRepository')
        private categoryRepository: ICategoriesRepository
    ) {
    }

    public async execute(id: string): Promise<void> {
        return this.categoryRepository.delete(id)
    }
}
