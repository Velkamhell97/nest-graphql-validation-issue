import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostInput } from './inputs/create-post.input';

@Controller('posts')
export class PostsController {
  constructor(private readonly todosService: PostsService) {}

  @Get()
  async posts() {
    return this.todosService.findAll();
  }

  @Post()
  async createPost(@Body() createPostInput: CreatePostInput) {
    return this.todosService.create(createPostInput);
  }
}
