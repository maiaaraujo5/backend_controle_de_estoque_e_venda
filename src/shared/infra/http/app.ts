import 'reflect-metadata';

import express, {NextFunction, Response, Request} from 'express'
import cors from 'cors'
import AppError from "@shared/errors/AppError";
import {createConnection} from "typeorm";
import 'express-async-errors';

import routes from "@shared/infra/http/routes";
import '@shared/infra/typeorm';
import "@shared/container"
import {errors} from "celebrate";

createConnection()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.log(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

export default app;
