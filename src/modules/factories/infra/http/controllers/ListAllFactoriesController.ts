import {Request, Response} from 'express';
import {container} from "tsyringe";
import ListAllFactories from "@modules/factories/services/ListAllFactories";

export default class FactoriesController {
    public async listAll(request: Request, response: Response): Promise<Response> {
        const listFactories = container.resolve(ListAllFactories);

        const factories = await listFactories.execute()

        return response.json(factories)
    }
}
