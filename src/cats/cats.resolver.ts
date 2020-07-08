import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cats } from './model/cats.entity';
import { CatsInput } from './model/cats.input';

@Resolver('Cats')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [Cats])
  findCats(): Promise<Cats[]> {
    return this.catsService.findCats();
  }

  @Query(() => Cats, { nullable: true })
  findCatsByName(@Args('name') name: string): Promise<Cats | undefined> {
    return this.catsService.findCatsByName(name);
  }

  @Mutation(() => Cats)
  addCats(@Args('cats') cats: CatsInput): Promise<Cats> {
    return this.catsService.addCats(cats);
  }
}
