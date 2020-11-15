import {Router} from "express";
import FactoriesController from "@modules/factories/infra/http/controllers/FactoriesController";
import ListAllFactoriesController from "@modules/factories/infra/http/controllers/ListAllFactoriesController";

const factoriesRoutes = Router()

const factoriesController = new FactoriesController()
const listAllFactoriesController = new ListAllFactoriesController()

factoriesRoutes.post('/', factoriesController.create)
factoriesRoutes.get('/', listAllFactoriesController.listAll)

export default factoriesRoutes;
