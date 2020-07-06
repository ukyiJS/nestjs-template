import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { Server } from 'http';
import { AppModule } from './app.module';

const createServer = async (): Promise<Server> => {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), { cors: true });
  await app.init();

  return awsServerlessExpress.createServer(expressApp);
};

createServer();
