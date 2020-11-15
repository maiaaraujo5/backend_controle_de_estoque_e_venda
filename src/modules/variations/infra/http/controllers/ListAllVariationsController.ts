import {Request, Response} from 'express';
import {container} from "tsyringe";
import ListAllVariations from "@modules/variations/services/ListAllVariations";

export default class ListAllVariationsController {
    public async listAll(request: Request, response: Response): Promise<Response> {
        const listVariations = container.resolve(ListAllVariations);

        const variations = await listVariations.execute()

        return response.json(variations)
    }
}
