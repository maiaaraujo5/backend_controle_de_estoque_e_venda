import ProductsSales from "@modules/sales/infra/typeorm/entities/ProductsSales";
import ICreateProductsSaleDTO from "@modules/sales/dtos/ICreateProductsSaleDTO";

export default interface IProductsSaleRepository {
    create(data: ICreateProductsSaleDTO): Promise<ProductsSales>

    findBySaleId(sale_id: string): Promise<ProductsSales[] | undefined>
}
