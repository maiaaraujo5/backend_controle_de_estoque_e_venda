import ICreateProductVariationDTO from "@modules/products/dtos/ICreateProductVariationDTO";
import ProductVariation from "@modules/products/infra/typeorm/entities/ProductVariation";

export default interface IProductsVariationsRepository {
    create(data: ICreateProductVariationDTO): Promise<ProductVariation>

    findByProductId(product_id: string): Promise<ProductVariation[] | undefined>
}
