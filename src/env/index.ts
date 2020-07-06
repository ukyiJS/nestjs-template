import * as dotenv from 'dotenv';
import { join } from 'path';

const path = join(process.cwd(), process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env.prod');
dotenv.config({ path });

export const {
  PORT = 3000,
  DOMAIN,
  NODE_ENV = 'production',
  IS_OFFLINE,
  MONGODB_PORT = 11049,
  MONGODB_ATLAS_USER,
  MONGODB_ATLAS_PASS,
  MONGODB_ATLAS_HOST,
  MONGODB_ATLAS_DATABASE,
} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';

export const MONGODB_ATLAS_URL = `mongodb+srv://${MONGODB_ATLAS_USER}:${MONGODB_ATLAS_PASS}${MONGODB_ATLAS_HOST}/${MONGODB_ATLAS_DATABASE}`;
export const MONGODB_URL = process.env.MONGODB_PORT ? `mongodb://localhost:${MONGODB_PORT}` : MONGODB_ATLAS_URL;
