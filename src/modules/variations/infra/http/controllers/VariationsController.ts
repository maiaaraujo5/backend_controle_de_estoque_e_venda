import {Request, Response} from 'express';
import {container} from "tsyringe";
import CreateVariationService from "@modules/variations/services/CreateVariationService";

export default class VariationsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const {name} = request.body;

        const createVariationService = container.resolve(CreateVariationService);

        const factory = await createVariationService.execute({
            name
        });

        return response.json(factory);
    }
}
