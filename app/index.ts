import express, { Express, Request, Response } from 'express';
import env from '@/config/env'
import middleware from '@/config/middleware';
import v1 from '@/services/v1/route';

const app: Express = express();
const { BACKEND_PORT: PORT, API_URL: URL } = env;

app.use(middleware.security);
app.use(middleware.parsing);

app.use('/api/v1', v1);

app.listen(PORT, () => console.log(`[server]: listening on ${URL}`));
