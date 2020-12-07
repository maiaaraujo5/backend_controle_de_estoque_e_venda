import Sales from "@modules/sales/infra/typeorm/entities/Sales";
import ICreateSaleDTO from "@modules/sales/dtos/ICreateSaleDTO";

export default interface ISalesRepository {
    create(data: ICreateSaleDTO): Promise<Sales>
}
