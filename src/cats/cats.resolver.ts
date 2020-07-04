import { Resolver, Query, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cats } from './model/cats.entity';

@Resolver('Cats')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [Cats])
  findCats(): Promise<Cats[]> {
    return this.catsService.findCats();
  }

  @Query(() => Cats)
  findCatsByName(@Args('name') name: string): Promise<Cats> {
    return this.catsService.findCatsByName(name);
  }
}
