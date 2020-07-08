import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Cats } from './model/cats.entity';
import { CatsInput } from './model/cats.input';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cats) private readonly catsRepository: MongoRepository<Cats>) {}

  findCats(): Promise<Cats[]> {
    return this.catsRepository.find();
  }

  async findCatsByName(name: string): Promise<Cats | undefined> {
    const result = await this.catsRepository.findOne({ name });
    if (result) {
      const searchCount = result.searchCount + 1;
      await this.catsRepository.update({ name }, { searchCount });
      return { ...result, searchCount };
    }
    return result;
  }

  addCats(cats: CatsInput): Promise<Cats> {
    return this.catsRepository.save(new Cats(cats));
  }
}
