import {Request, Response} from 'express';
import {container} from "tsyringe";
import CreateFactoryService from "@modules/factories/services/CreateFactoryService";

export default class FactoriesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const {name} = request.body;

        const createFactory = container.resolve(CreateFactoryService);

        const factory = await createFactory.execute({
            name
        });

        return response.json(factory);
    }
}
