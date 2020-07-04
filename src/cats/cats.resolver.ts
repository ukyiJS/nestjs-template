import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
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

  @Mutation(() => Cats)
  addCats(@Args('cats') cats: Cats): Promise<Cats> {
    return this.catsService.addCats(cats);
  }
}
