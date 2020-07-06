import { writeJson } from './writeJson';
import {
  NODE_ENV,
  DOMAIN,
  MODE,
  MONGODB_PORT,
  MONGODB_ATLAS_USER,
  MONGODB_ATLAS_PASS,
  MONGODB_ATLAS_HOST,
  MONGODB_ATLAS_DATABASE,
} from '../env';

writeJson({
  data: {
    NODE_ENV,
    DOMAIN,
    MONGODB_PORT,
    MONGODB_ATLAS_USER,
    MONGODB_ATLAS_PASS,
    MONGODB_ATLAS_HOST,
    MONGODB_ATLAS_DATABASE,
  },
  fileName: `env.${MODE}`,
});
