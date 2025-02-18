import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";


@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  content?: string | null;

  @Field(() => Boolean)
  published: boolean
}