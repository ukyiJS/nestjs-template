import { LoggingInterceptor, TimeoutInterceptor } from '@/common';
import { PORT } from '@/env';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const createServer = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor()).listen(PORT);

  Logger.log(`Server running on http://localhost:${PORT}`, 'Server');
};
createServer();
