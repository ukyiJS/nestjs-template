import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { CacheService } from './config';

@Module({
  imports: [CacheModule.registerAsync({ useClass: CacheService })],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
