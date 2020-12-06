import {Request, Response} from 'express'
import {container} from "tsyringe";
import CreateProductsVariationService from "@modules/products/services/CreateProductsVariationService";

export default class CreateProductVaritionsController {
    public async create(request: Request, response: Response): Promise<Response> {

        const {product_id, variations} = request.body;

        const createProductVariations = container.resolve(CreateProductsVariationService)

        const product = await createProductVariations.execute({product_id, variations})

        return response.json(product)
    }
}
