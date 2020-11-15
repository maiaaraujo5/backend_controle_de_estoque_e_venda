import {container} from "tsyringe";
import '@modules/users/providers'

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";
import CategoryRespository from "@modules/categories/infra/typeorm/repositories/CategoryRespository";

import IFactoriesRepository from "@modules/factories/repositories/IFactoriesRepository";
import FactoryRepository from "@modules/factories/infra/typeorm/repositories/FactoryRepository";

import IVariationsRepository from "@modules/variations/repositories/IVariationsRepository";
import VariationRepository from "@modules/variations/infra/typeorm/repositories/VariationRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)

container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoryRespository
)

container.registerSingleton<IFactoriesRepository>(
    'FactoriesRepository',
    FactoryRepository
)
container.registerSingleton<IVariationsRepository>(
    'VariationsRepository',
    VariationRepository
)

