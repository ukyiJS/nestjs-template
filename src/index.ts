import { AppModule } from '@/app.module';
import * as env from '@/env';
import { writeJson } from '@/utils';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { APIGatewayProxyEvent, Context, ProxyResult } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { Server } from 'http';
import { from } from 'rxjs';

const createServer = async (): Promise<Server> => {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), { cors: true });
  await app.init();

  return awsServerlessExpress.createServer(expressApp);
};
writeJson({ data: env, fileName: env.IS_PRODUCTION ? 'env.prod' : 'env.dev' });

const server = from(createServer());

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<ProxyResult> => {
  const handler = await server.toPromise();
  return awsServerlessExpress.proxy(handler, event, context, 'PROMISE').promise;
};
