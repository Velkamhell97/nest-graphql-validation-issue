import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


@InputType()
export class CreatePostInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  content?: string | null;
}