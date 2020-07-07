import { Logger } from '@nestjs/common';
import {
  DOMAIN,
  MODE,
  MONGODB_ATLAS_DATABASE,
  MONGODB_ATLAS_HOST,
  MONGODB_ATLAS_PASS,
  MONGODB_ATLAS_USER,
  MONGODB_PORT,
  NODE_ENV,
} from '../env';
import { writeJson } from './writeJson';

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
  dirName: 'src',
});
