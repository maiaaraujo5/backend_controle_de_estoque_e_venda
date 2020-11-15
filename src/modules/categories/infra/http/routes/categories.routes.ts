import {Router} from "express";
import CategoryController from "@modules/categories/infra/http/controllers/CategoryController";
import DeleteCategoryController from "@modules/categories/infra/http/controllers/DeleteCategoryController";
import ListAllCategoriesController from "@modules/categories/infra/http/controllers/ListAllCategoriesController";
import {celebrate, Joi, Segments} from "celebrate";

const categoryRouter = Router()
const categoryController = new CategoryController()
const deleteCategoryController = new DeleteCategoryController()
const listAllCategoriesController = new ListAllCategoriesController()

categoryRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        }
    }),
    categoryController.create,
)

categoryRouter.get('/', listAllCategoriesController.listAll)

export default categoryRouter
