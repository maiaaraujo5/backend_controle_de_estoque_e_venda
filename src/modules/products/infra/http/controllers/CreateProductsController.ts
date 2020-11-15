import {Request, Response} from 'express';
import {container} from 'tsyringe';
import CreateProductsService from "@modules/products/services/CreateProductsService";

export default class CreateProductsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const {name, description, category_id, factory_id} = request.body;

        const createProduct = container.resolve(CreateProductsService)

        const product = await createProduct.execute({name, description, category_id, factory_id})

        return response.json(product)
    }
}
