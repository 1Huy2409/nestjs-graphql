import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  fullname: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  username: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  email: string;
}
