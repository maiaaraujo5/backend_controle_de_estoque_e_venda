import {Router} from "express";
import CreateProductsController from "@modules/products/infra/http/controllers/CreateProductsController";
import ListAllProductsController from "@modules/products/infra/http/controllers/ListAllProductsController";
import CreateProductVaritionsController
    from "@modules/products/infra/http/controllers/CreateProductVaritionsController";
import FindProductsVariationsService from "@modules/products/services/FindProductsVariationsService";
import FindProductVariationsController from "@modules/products/infra/http/controllers/FindProductVariationsController";

const productsRouter = Router()
const createProductsController = new CreateProductsController()
const listAllProductsController = new ListAllProductsController()
const createVariationsController = new CreateProductVaritionsController()
const findVariationsController = new FindProductVariationsController()

productsRouter.post('/', createProductsController.create)
productsRouter.get('/', listAllProductsController.find)
productsRouter.post('/variations', createVariationsController.create)
productsRouter.get('/:id', findVariationsController.find)

export default productsRouter
