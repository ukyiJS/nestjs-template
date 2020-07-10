import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn, Unique } from 'typeorm';
import * as uuid from 'uuid';

@Entity()
@ObjectType()
@Unique(['name'])
export class Cats {
  @Expose()
  @ObjectIdColumn()
  @Field()
  _id: string;

  @Expose()
  @Column()
  @Field()
  name: string;

  @Expose()
  @Column()
  @Field()
  kind: string;

  @Expose()
  @Column()
  @Field()
  createdAt: number;

  @Expose()
  @Column()
  @Field()
  searchCount: number;

  constructor(cats: Partial<Cats>) {
    if (cats?.name) {
      Object.assign(this, plainToClass(Cats, cats, { excludeExtraneousValues: true }));
      this._id = this._id ?? uuid.v4();
      this.createdAt = this.createdAt ?? +new Date();
      this.searchCount = this.searchCount ?? 0;
    }
  }
}
