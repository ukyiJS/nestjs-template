import * as dotenv from 'dotenv';
import { join } from 'path';

const path = join(process.cwd(), process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env.prod');
dotenv.config({ path });

export const { PORT = 3000, NODE_ENV = 'production' } = process.env;
