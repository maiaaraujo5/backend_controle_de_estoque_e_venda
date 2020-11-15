import {Request, Response} from 'express';
import {container} from 'tsyringe';
import ListAllCategoriesService from "@modules/categories/services/ListAllCategoriesService";


export default class CategoryController {
    public async listAll(request: Request, response: Response): Promise<Response> {
        const {name} = request.body;

        const listAllCategoriesService = container.resolve(ListAllCategoriesService)

        const categories = await listAllCategoriesService.execute()

        return response.json(categories)
    }
}
