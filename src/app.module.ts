import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { CacheService, GraphqlService } from './config';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CacheModule.registerAsync({ useClass: CacheService }),
    GraphQLModule.forRootAsync({ useClass: GraphqlService }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
