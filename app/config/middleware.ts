import express, { RequestHandler } from "express"
import env from '@/config/env'
import helmet from "helmet";
import cors from "cors";

const security: RequestHandler[] = [
    helmet(),
    cors({
        origin: env.CORS_ORIGIN,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }),
];

const parsing: RequestHandler[] = [
    express.json(),
    express.urlencoded({ extended: true }),
];

export default {
    security,
    parsing,
};
