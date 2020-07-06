import { AppModule } from '@/app.module';
import * as env from '@/env';
import { writeJson } from '@/utils';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggingInterceptor, TimeoutInterceptor } from './common';

const createServer = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor()).listen(env.PORT);

  Logger.log(`Server running on http://localhost:${env.PORT}`, 'Server');
};
writeJson({ data: env, fileName: env.IS_PRODUCTION ? 'env.prod' : 'env.dev' });
createServer();
