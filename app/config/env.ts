import dotenv from 'dotenv';
import { formatBoldRed } from './log.js';

dotenv.config({ quiet: true });

const requiredEnvVariables = [
  'NODE_ENV',
  'BACKEND_PORT',
  'FRONTEND_PORT',
  'API_URL',
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
  'DB_PORT',
  'CORS_ORIGIN',
] as const;

type ValidEnv = Record<typeof requiredEnvVariables[number], string>;

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    console.error(`${formatBoldRed('ERROR:')} Environment variable ${variable} is missing.`);
    while (true) {}
  }
}

const env = process.env as ValidEnv;
export default env;
