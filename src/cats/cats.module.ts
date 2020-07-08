import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { Cats } from './model/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  providers: [CatsService, CatsResolver],
  exports: [CatsService],
})
export class CatsModule {}
