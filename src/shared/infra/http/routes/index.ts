import {Router} from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from "@modules/users/infra/http/routes/sessions.routes";
import categoryRouter from "@modules/categories/infra/http/routes/categories.routes";
import factoriesRoutes from "@modules/factories/infra/http/routes/factories.routes";
import variationsRoutes from "@modules/variations/infra/http/routes/variations.routes";
import productsRouter from "@modules/products/infra/http/routes/products.routes";
import salesRouter from "@modules/sales/infra/http/routes/sales.routes";

const routes = Router();

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/categories', categoryRouter)
routes.use('/factories', factoriesRoutes)
routes.use('/variations', variationsRoutes)
routes.use('/products', productsRouter)
routes.use('/sales', salesRouter)
export default routes;
