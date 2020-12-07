import {Response, Request} from 'express'
import {container} from "tsyringe";
import FindSalesService from "@modules/sales/services/FindSalesService";

export default class FindSalesController {
    public async find(request: Request, response: Response): Promise<Response> {
        const {sale_id} = request.params

        const findSale = container.resolve(FindSalesService)

        const sale = await findSale.execute(sale_id)

        return response.json(sale)
    }
}
