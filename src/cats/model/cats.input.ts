import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CatsInput {
  @Field()
  name: string;

  @Field()
  kind: string;
}
