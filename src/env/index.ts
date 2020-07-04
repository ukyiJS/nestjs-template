import 'dotenv/config';

export const { PORT = 3000, NODE_ENV = 'production' } = process.env;
export const IS_PRODUCTION = NODE_ENV === 'production';
