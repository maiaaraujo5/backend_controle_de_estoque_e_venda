import ICreateProductDTO from "@modules/products/dtos/ICreateProductDTO";
import Products from "@modules/products/infra/typeorm/entities/Products";

export default interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<Products>

    findByName(name: string): Promise<Products | undefined>

    listAll(): Promise<Products[]>
}
