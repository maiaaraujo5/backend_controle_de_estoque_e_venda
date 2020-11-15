import {Router} from "express";
import VariationsController from "@modules/variations/infra/http/controllers/VariationsController";
import ListAllVariationsController from "@modules/variations/infra/http/controllers/ListAllVariationsController";

const variationsRoutes = Router()

const variationsController = new VariationsController()
const listAllVariationsController = new ListAllVariationsController()

variationsRoutes.post('/', variationsController.create)
variationsRoutes.get('/', listAllVariationsController.listAll)

export default variationsRoutes;
