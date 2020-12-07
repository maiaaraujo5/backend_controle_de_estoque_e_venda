import {Router} from "express";
import RegisterSalesController from "@modules/sales/infra/http/controllers/RegisterSalesController";
import FindSalesController from "@modules/sales/infra/http/controllers/FindSalesController";

const salesRouter = Router()
const registerSalesController = new RegisterSalesController();
const findSalesController = new FindSalesController();

salesRouter.post('/', registerSalesController.create)
salesRouter.get('/:sale_id', findSalesController.find)

export default salesRouter
