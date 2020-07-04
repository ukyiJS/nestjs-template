import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import * as uuid from 'uuid';

@Entity()
@ObjectType()
export class Cat {
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
  @Field(() => Date)
  createdAt: number;

  constructor(cat: Partial<Cat>) {
    if (!cat?.name) return;
    Object.assign(this, plainToClass(Cat, cat, { excludeExtraneousValues: true }));
    this._id = this._id ?? uuid.v4();
    this.createdAt = this.createdAt ?? +new Date();
  }
}