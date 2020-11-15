import {container} from "tsyringe";
import '@modules/users/providers'

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

import ICategoriesRepository from "@modules/category/repositories/ICategoriesRepository";
import CategoryRespository from "@modules/category/infra/typeorm/repositories/CategoryRespository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)

container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoryRespository
)
