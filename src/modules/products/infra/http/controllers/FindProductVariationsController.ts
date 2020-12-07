import {Request, Response} from 'express'
import {container} from "tsyringe";
import FindProductsVariationsService from "@modules/products/services/FindProductsVariationsService";

export default class FindProductVariationsController {
    public async find(request: Request, response: Response): Promise<Response> {

        const {id} = request.params

        const findProductsVariationsService = container.resolve(FindProductsVariationsService)

        const productVariations = await findProductsVariationsService.execute(id)
        return response.json(productVariations)
    }
}
