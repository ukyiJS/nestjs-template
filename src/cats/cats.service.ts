import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cats } from './model/cats.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cats) private readonly catsRepository: MongoRepository<Cats>) {}

  findCats(): Promise<Cats[]> {
    return this.catsRepository.find();
  }

  findCatsByName(name: string): Promise<Cats> {
    return this.catsRepository.findOne({ name });
  }

  addCats(cats: Cats): Promise<Cats> {
    return this.catsRepository.save(new Cats(cats));
  }
}
