import * as dotenv from 'dotenv';
import { join } from 'path';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const path = join(process.cwd(), IS_PRODUCTION ? '.env.prod' : '.env.dev');
dotenv.config({ path });

export const { PORT = 3000, DOMAIN = '', NODE_ENV = 'development', IS_OFFLINE } = process.env;

export const MODE = IS_PRODUCTION ? 'prod' : 'dev';
