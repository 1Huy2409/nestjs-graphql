import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

}
