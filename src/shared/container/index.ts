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

import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import ProductsRepository from "@modules/products/infra/typeorm/repositories/ProductsRepository";

import IProductsVariationsRepository from "@modules/products/repositories/IProductsVariationsRepository";
import ProductsVaritionsRepository from "@modules/products/infra/typeorm/repositories/ProductsVaritionsRepository";

import ISalesRepository from "@modules/sales/repositories/ISalesRepository";
import SalesRepository from "@modules/sales/infra/typeorm/repositories/SalesRepository";

import IProductsSaleRepository from "@modules/sales/repositories/IProductsSaleRepository";
import ProductsSalesRepository from "@modules/sales/infra/typeorm/repositories/ProductsSalesRepository";

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

container.registerSingleton<IProductsRepository>(
    'ProductsRepository',
    ProductsRepository
)

container.registerSingleton<IProductsVariationsRepository>(
    'ProductsVariationsRepository',
    ProductsVaritionsRepository
)

container.registerSingleton<ISalesRepository>(
    'SalesRepository',
    SalesRepository
)

container.registerSingleton<IProductsSaleRepository>(
    'ProductsSaleRepository',
    ProductsSalesRepository
)
