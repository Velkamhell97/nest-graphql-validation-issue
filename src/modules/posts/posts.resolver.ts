import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './inputs/create-post.input';
import { ValidationPipe } from '@nestjs/common';

@Resolver(Post)
export class PostsResolver {
  constructor(private readonly todosService: PostsService) {}

  @Query(() => [Post])
  async posts() {
    return this.todosService.findAll();
  }

  @Mutation(() => Post)
  async createPost(@Args("createPostInput" ,new ValidationPipe({transform: true})) createPostInput: CreatePostInput) {
    return this.todosService.create(createPostInput);
  }
}
