import {Request, Response} from 'express';
import {container} from 'tsyringe';
import ListAllProductsService from "@modules/products/services/ListAllProductsService";

export default class ListAllProductsController {
    public async find(request: Request, response: Response): Promise<Response> {

        const listAllProductsService = container.resolve(ListAllProductsService)

        const products = await listAllProductsService.execute()
        return response.json(products)
    }
}
