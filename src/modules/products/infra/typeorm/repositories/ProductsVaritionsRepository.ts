import IProductsVariationsRepository from "@modules/products/repositories/IProductsVariationsRepository";
import {getRepository, Repository} from "typeorm";
import ProductVariation from "@modules/products/infra/typeorm/entities/ProductVariation";
import ICreateProductVariationDTO from "@modules/products/dtos/ICreateProductVariationDTO";

class ProductsVaritionsRepository implements IProductsVariationsRepository {
    private ormRepository: Repository<ProductVariation>

    constructor() {
        this.ormRepository = getRepository(ProductVariation)
    }

    public async create(data: ICreateProductVariationDTO): Promise<ProductVariation> {
        data.variations.forEach(value => {
            const productVariations = this.ormRepository.create(value)
            productVariations.product_id = data.productId
            this.ormRepository.save(productVariations)
        })

        return this.ormRepository.create()
    }

    public async findByProductId(product_id: string): Promise<ProductVariation[] | undefined> {
        console.log("product_id repository: " + product_id)

        return this.ormRepository.find({
            where: {product_id}
        })
    }
}

export default ProductsVaritionsRepository

