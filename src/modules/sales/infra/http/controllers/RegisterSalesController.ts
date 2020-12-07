import {Response, Request} from 'express'
import {container} from "tsyringe";
import RegisterSaleService from "@modules/sales/services/RegisterSaleService";

export default class RegisterSalesController {

    public async create(request: Request, response: Response): Promise<Response> {
        const {seller_id, products} = request.body

        const createSale = container.resolve(RegisterSaleService)

        const sale = await createSale.execute({seller_id, products})

        return response.json(sale)
    }
}
