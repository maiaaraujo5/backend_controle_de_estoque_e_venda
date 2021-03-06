import {Router} from "express";
import UsersController from "@modules/users/infra/http/controllers/UsersController";
import {celebrate, Segments, Joi} from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    usersController.create,
);

export default usersRouter;
