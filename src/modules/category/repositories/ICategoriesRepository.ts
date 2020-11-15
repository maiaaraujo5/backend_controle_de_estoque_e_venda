import Category from "@modules/category/infra/typeorm/entities/Category";
import ICreateCategoryDTO from "@modules/category/dtos/ICreateCategoryDTO";

export default interface ICategoriesRepository {
    findAllCategories(): Promise<Category[]>;

    create(data: ICreateCategoryDTO): Promise<Category>;

    delete(id: string): Promise<void>;

    save(category: Category): Promise<Category>;

    findById(id: string): Promise<Category | undefined>
}
