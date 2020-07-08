import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { TypeormService } from '../config';
import { CatsService } from './cats.service';
import { Cats } from './model/cats.entity';

describe('CatsService', () => {
  let service: CatsService;

  beforeAll(async () => {
    await Test.createTestingModule({
      imports: [TypeOrmModule.forRootAsync({ useClass: TypeormService })],
      providers: [CatsService, { provide: getRepositoryToken(Cats), useClass: MongoRepository }],
    }).compile();

    const repository: MongoRepository<Cats> = getMongoRepository(Cats);
    service = new CatsService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return findCats data', async () => {
    const result = await service.findCats();
    expect(result).not.toBeUndefined();
  });
});
