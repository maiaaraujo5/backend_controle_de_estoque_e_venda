import {Request, Response} from 'express';
import {container} from 'tsyringe';
import DeleteCategoryService from "@modules/categories/services/DeleteCategoryService";

export default class CategoryController {
    public async delete(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        const deleteCategoryService = container.resolve(DeleteCategoryService)

        await deleteCategoryService.execute(id)

        return response.json()
    }
}
