import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService } from './config/cache';

@Module({
  imports: [CacheModule.registerAsync({ useClass: CacheService })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
