import { str, cleanEnv, port } from 'envalid';

export const validateEnv = (): void => {
  cleanEnv(process.env, {
    PORT: port(),
    MONGODB_ATLAS_USER: str(),
    MONGODB_ATLAS_PASS: str(),
    MONGODB_ATLAS_HOST: str(),
    MONGODB_ATLAS_DATABASE: str(),
  });
};
