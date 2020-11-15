import {Router} from "express";
import CreateProductsController from "@modules/products/infra/http/controllers/CreateProductsController";
import ListAllProductsController from "@modules/products/infra/http/controllers/ListAllProductsController";

const productsRouter = Router()
const createProductsController = new CreateProductsController()
const listAllProductsController = new ListAllProductsController()

productsRouter.post('/', createProductsController.create)
productsRouter.get('/', listAllProductsController.find)

export default productsRouter
